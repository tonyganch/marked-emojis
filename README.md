# GitHub emojis for Marked 2

[Marked 2](http://marked2app.com/) is a great markdown previewer and it works
really well with GitHub styles. However, it does not display GitHub emojis. This
repo contains a preprocessor to add support for emojis, so you can write
`:octocat:` in your code and see an emoji in previewer.

![](marked-emojis.png)

## Install

1. Download [zip file](https://github.com/tonyganch/marked-emojis/releases/download/v1.0/marked-emojis.zip). It contains emojis from GitHub and a preprocessor file.
2. In Marked 2 application open "Preferences" -> "Advanced" -> "Preprocessor".
3. Check "Enable Custom Preprocessor".
4. In "Path" field type in path to `preprocessor.sh` file inside downloaded
   folder from step 1.
5. Done.

## Build

You can build and download all files yourself.

1. Clone the repo.
2. Run `build.sh` file. It will create a `sed` script to replace the latest Github emojis in your documents.
3. In Marked 2 application open "Preferences" -> "Advanced" -> "Preprocessor".
4. Check "Enable Custom Preprocessor".
5. In "Path" field type in path to `preprocessor.sh` file inside the repo.
6. Done.

## Issues

1. Preprocessor is not smart enough so it will show emojis inside code blocks
   too.
2. Preprocessor uses `sed` command for replacement so it must be present on your
   computer.
