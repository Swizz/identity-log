<h1 align="center"> Identity-log </h1>

<div align="center">
  A <bold>400 bytes</bold> <code>console.{log,info,warn,...}</code> that return its last argument
</div>

<br/>

<div align="center">
  <a href="https://www.npmjs.com/package/identity-log">
    <img src="https://img.shields.io/npm/v/identity-log.svg?label=release&style=flat-square" alt="npm version"/>
  </a>
  <a href="https://github.com/Swizz/identity-log/blob/master/LICENSE.md">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="mit license"/>
  </a>
  <a href="https://travis-ci.org/Swizz/identity-log">
    <img src="https://img.shields.io/travis/Swizz/identity-log/develop.svg?style=flat-square" alt="travis build"/>
  </a>
</div>

<br/>

## Table of Contents

<details>
<summary>Table of Contents</summary>

  - [Getting started](#getting-started)
  - [Usage](#usage)
  - [Misc](#misc)
</details>

## Getting started

- **1.** To use identity-log you need to download it thanks to your favorite JavaScript Package Manager.
  ```sh
  yarn add identity-log
  ```

  ```sh
  npm install --save identity-log
  ```

- **2.** Then you are free to import all the exported logging functions.
  ```js
  import { error, log, warn } from 'identity-log'
  ```

- **3.** You can use them directly by surrounding the returned value without worrying.
  ```js
  const add = (a, b) => log(a + b)

  add(1, 2) // => 3
  ```

## Usage
Identity-log aim to be less impacting as possible on the function, less bytes and better perf ; and handle all the console api.

* **assert**
* **dir**
* **error**
* **info**
* **log**
* **trace**
* **warn**

### tap
Identity-log also provide a `tap` function that allow you to create your own transformation from a function that return `void` to a function that return its last argument.

The tap function can be used for function composition too.

```js
tap(console.log, 1, 2, 3) // => 3
```
```js
const log = tap(console.log)
log(1, 2, 3) // => 3
```


## Misc

- Identity-log follows the [Compatible Versioning: major.minor only](https://github.com/staltz/comver) convention.
- [Release notes](https://github.com/Swizz/snabbdom-pragma/releases) are [Keep a Changelog](http://keepachangelog.com/en/0.3.0/) compliants.
