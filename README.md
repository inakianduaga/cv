Inaki Anduaga's Curriculum Vitae
================================

[![Build Status][travis-image]][travis-url]

> My curriculum Vitae

## Compile latex (locally)

**Prerequisite: Build dockerfile**:

```sh
$ docker build -t latex ./
```

then run

```sh
$ build.sh
```

to compile the latex version locally into the `./dist/` folder using a docker container

## Release new version & compile on cloud

**Prerequisite: Install npm packages**

```sh
$ npm install
```

then run

```sh
$ gulp release --version=<major|minor|patch>
```

will bump the package version, commit changes, tag the commit and push it to github.
From here on, Travis CI will build the pdf file and upload it as a *github release*
to github

[travis-url]: https://travis-ci.org/inakianduaga/cv
[travis-image]: https://travis-ci.org/inakianduaga/cv.svg?branch=master
