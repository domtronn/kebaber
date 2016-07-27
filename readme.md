# Kebaber

A CLI tool to convert NodeJS project file name case styling and
updating internal require paths to match!

#### **Warning!**
Use at your own discretion, this has worked personally on large node
projects without any problems, but _make sure_ you use version control
so that you can undo changes if it didn't quite work

## Install

```bash
npm install -g kebaber
```

## Run

```bash
kebaber ~/path/to/your/project --style kebab
```

## Options

| Option | Values | Description |
|--|--|--|
| `-s, --style` | `kebab [default], camel, snake, lower, upper` | The casing style to use |

## To Do

A short to do list of features that I may add in the future

- [×] Add in `--exclude` property
- [×] Add in `--verbose` property
