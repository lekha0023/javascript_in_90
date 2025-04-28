# Understanding Modularity in JavaScript

This repository explains how modularity in JavaScript evolved and why it was needed.  
It takes you through different stages with examples created in separate folders.

---

## Step 1: Everything in One File

Initially, all code was written inside a single script file.

---

## Step 2: Splitting into Multiple Script Files

As applications grew, developers started splitting code into multiple script files.  
This gave rise to issues like:

- Global scope pollution
- Lack of encapsulation
- No way to properly structure and reuse code
- Confusing hoisting behavior
- Asynchronous closure issues

---

## Step 3: Introduction of IIFE (Immediately Invoked Function Expression)

To solve these problems, IIFEs became popular.  
They helped:

- Protect the global scope
- Create private scopes
- Capture variables in closures during asynchronous operations

But IIFEs came with limitations:

- Reusability issues
- Manual dependency management
- No asynchronous module loading
- Lack of scalability
- Chances of leakage into the global scope if not carefully handled

---

## Step 4: CommonJS (Server-Side Modularity)

CommonJS introduced:

- `require` to import modules
- `module.exports` to export modules
- Synchronous loading (suitable for servers)

Browsers do not support CommonJS natively, so bundlers like Webpack are used.

---

## Step 5: AMD (Asynchronous Module Definition)

AMD allowed:

- Asynchronous loading of modules in the browser
- Dependency management using `define()` and `require()`

---

## Step 6: ES6 Modules (Standardization)

ES6 introduced a native module system that:

- Works in both browser and server environments
- Supports static and dynamic imports
- Allows better optimization (tree-shaking)
- Simplifies syntax
- Future-proofs codebases

---

## Step 7: `.mjs` Extension in Node.js

Node.js uses:

- `.js` extension for CommonJS modules
- `.mjs` extension for ES6 modules  
(Or you can specify `"type": "module"` in `package.json`.)

---

## Step 8: Dynamic Import with `import()`

Dynamic imports allow:

- Loading modules asynchronously at runtime
- Reducing initial load time by splitting code

---

## Further Reading

### AMD Example Details

- Loader: RequireJS
- `define()` used to export
- `require()` used to dynamically load

---

### ES6 Example Details

- Clear separation between different functionality
- `main.js` imports UI initialization functions
- HTML uses `<script type="module">`
- Needs a server to run due to CORS

---

### `.mjs` Quick Reference

| Aspect                  | ES6 Pattern          | `.mjs` Extension |
| ------------------------ | -------------------- | ---------------- |
| Meaning                  | Use `import`/`export` inside JavaScript files | Save the file with `.mjs` |
| Usage                    | Inside code           | As file extension |
| Needed in                | JavaScript (browser or server) | Node.js |
| Relation                 | Tells code is modular | Tells Node.js that file is a module |
| Example                  | `import { a } from './file.js'` | Save as `file.mjs` |

---

## CORS Error

When opening an ES6 module directly from the file system, you'll face a CORS error.  
You need to run a server, like:

- Live Server (VSCode plugin)
- Python's `SimpleHTTPServer`
- Node's `http-server`

---

## Summary

This project captures how JavaScript modularity evolved from simple script files to dynamic ES6 modules.  
Understanding this evolution is important for working with modern JavaScript applications.
