---
title: "How I Build CLIs with Go"
summary: "Go's speed and portability makes it the perfect tool for small scripts shared among teammates."
date: 2020-08-11T21:32:19-04:00
draft: true
tags:
---

**At work, I have a bit of a reputation as "the Go guy".**  Nevermind that I've never technically run an enterprise-grade production service written in Go, but I've apparently been vocal enough in my advocacy for the language that it stuck.  I have, however, written a few different command line tools that I'm fairly proud of, and have established some patterns that make development much easier.

## Repository Structure
Whenever I start a new CLI project, I usually use the same high-level repository structure:

```bash
.
├── cmd
│   └── examplecmd
│       └── main.go
├── go.mod
├── internal
│   └── library.go
├── Makefile
└── README.md
```

First, always start by initializing a git repository with `git init`.  It's quick, it's nearly universal, and it'll no doubt end up saving you a massive headache down the road.  Additionally, initialize a Go module:

```bash
$ go mod init github.com/mleone10/go-cli-example
```

I use GitHub, so my module's path reflects the remote repository to which I'll be pushing my code.

Next, create an empty Makefile and README with `touch Makefile README.md`.  We'll discuss the Makefile later.  A README is another good practice for every repository.  It doesn't have to contain much for now - you can add documentation as your project evolves.  For fantastic advice about the contents of a README, see Danny Guo's [Make a README](https://www.makeareadme.com/).

The last thing we'll do is set up our source directories.  In Go, it's common to isolate executables in their own `cmd` directory, within which there are subdirectories for each individual executable.  Those subdirectories are required due to the way Go's build tooling groups code.  All of the `*.go` files within a single directory constitute a package.  Additionally, Go handles the `internal` directory in a special way.  Any packages located within a module's `internal` directory can only be used by that module.  This way, you can separate application-specific code from code others can import into their own projects.

We'll cover the contents of the executable and internal directories a bit later.

## Executable vs Library Code

In this directory structure, the `main.go` executable code should be kept as small as possible.  In the cases I've encountered, this means parsing flags and calling out to `internal` library methods.  Our example `main.go` contains the following:

```go
package main

import (
	"github.com/mleone10/go-cli-example/internal"
)

func main() {
	internal.Hello()
}
```

All I'm doing is calling out to my `internal` package, which consists of a single `library.go` file:
```go
package internal

import "fmt"

func Hello() {
	fmt.Println("vim-go")
}
```

It's easy to imagine extending this as your use case demands.  Perhaps you need to call out to an API using code located within `internal/apiclient`.  Or maybe you need to query a database with a client in `internal/db`.  The pattern is the same in either case.  The key takeaway, though, is to keep anything *not* strictly related to the command line-based interface out of the executable code.

## Input, Output, and Logs

I tend to be [Unix Philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) fanboy in many ways.  Specifically, I always start designing software by thinking about the interfaces: databases, APIs, queues, files.  And when it comes to small CLI tools, those interfaces tend to be STDIN, STDOUT, and STDERR.

The [standard stream](https://en.wikipedia.org/wiki/Standard_streams) are a key aspect of terminal-based programs, and Go supports interactions with them perfectly.

Whenever I need to read in data, I build my executable to read from STDIN.  Let `cat` read from files, build your program to accept STDIN:

```go
// Source: https://stackoverflow.com/a/28311177
scanner := bufio.NewScanner(os.Stdin)
for scanner.Scan() {
    fmt.Println(scanner.Text())
}
```

Standard out (STDOUT) is designed to be consumed by another program.  So you should assume that some other program is reading whatever you send to STDOUT and structure it accordingly.  CSVs, JSON, and other line-delimited data formats are perfect for this.  As for writing to STDOUT, fear not - the standard library's `fmt.Print*` methods already do that for you:

```go
fmt.Println("")
fmt.Printf("%s", "")
fmt.Print("")
```

Finally, standard error might be more appropriately named "standard diagnostic".  I like using STDERR for human readable logs and errors - various ways I can keep track of a program's execution without muddying the output.  Once again, the standard library comes to the rescue.  By default, the `log` package writes to STDERR by default:

```go
log.Println("")
```

In practice, programs that use all three standard streams are executed using [I/O redirection](https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-i-o-redirection).  The following will read the contents from `input.txt` and send it into `examplecmd`.  Output data will go to output.txt, while logs (STDERR) will stay on the terminal:

```bash
$ cat input.txt | examplecmd > output.txt
```

## Build Scripts

Building executables in this structure is a bit tricky due to the nested nature of the `cmd` directory.

## Conclusion

Until next time,  
\- Mario