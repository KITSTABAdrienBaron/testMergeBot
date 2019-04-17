#!/usr/bin/env bash
touch LOTS_COMMITS_2.md
git add LOTS_COMMITS_2.md
for i in {1..100}; do echo "Hello $i" >> LOTS_COMMITS_2.md && git commit -a -m "commit $i"; done
