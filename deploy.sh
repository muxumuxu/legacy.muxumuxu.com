#!/usr/bin/env sh

bundle exec middleman build
surge -d https://muxumuxu.com -p build
