#!/bin/sh

NIKA_ROOT=".."

cat "$NIKA_ROOT/dictionary/.meta/syllable.yml" | yq r - '*.hangeul' | gawk '{print $2}'

