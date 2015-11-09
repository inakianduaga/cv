#!/bin/sh
docker run --rm -i --user="$(id -u):$(id -g)" --net=none -v $PWD:/data latex pdflatex -interaction=nonstopmode --output-directory=./dist inaki_anduaga_cv.tex
find ./dist/. -type f ! -name '*.pdf' -delete
