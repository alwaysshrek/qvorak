#!/bin/sh
[[ -f qvorak.zip ]] && rm qvorak.zip
zip qvorak.zip 128.png 48.png manifest.json qvorak.css qvorak.js shortcut.js
