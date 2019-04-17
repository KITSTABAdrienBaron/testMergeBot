#!/usr/bin/env bash
touch LOTS_COMMITS.md
git add LOTS_COMMITS.md
for i in {1..5}; do echo "Hello $i" >> LOTS_COMMITS.md && git commit -a -m "commit $i"; done
