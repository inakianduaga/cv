Inaki Anduaga's Curriculum Vitae
================================

[![Build Status][travis-image]][travis-url] [![Build Status][s3-download-image]][s3-download-url]

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

## Release new version & compile/deploy on cloud

**Prerequisite: Install npm packages**

```sh
$ npm install
```

then run

```sh
$ gulp release --version=<major|minor|patch>
```

will bump the package version, commit changes, tag the commit and push it to github. From here on, Travis CI will
- compile the latex file into pdf
- upload the pdf as a [*github release*](https://github.com/inakianduaga/cv/releases/latest) to GitHub
- upload the pdf into an [AWS S3 bucket](https://s3.amazonaws.com/curriculum-vitae-automated-build/inaki_anduaga_cv.pdf) for direct static linking.

[travis-url]: https://travis-ci.org/inakianduaga/cv
[travis-image]: https://travis-ci.org/inakianduaga/cv.svg?branch=master

[s3-download-url]: https://s3.amazonaws.com/curriculum-vitae-automated-build/inaki_anduaga_cv.pdf
[s3-download-image]: https://img.shields.io/badge/Download-CV-green.svg
