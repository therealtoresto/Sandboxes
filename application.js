'use strict';

// File contains a small piece of the source to demonstrate main module
// of sample application to be executed in the sandboxed context by
// another piece of code from `framework.js`.

const fs = require('fs');
const net = require('net');

// Print from the global context of application module
console.log('From application global context');
console.dir({ fs, net }, { depth: 1 });
console.dir({ global }, { depth: 1 });
console.dir({ api }, { depth: 2 });

module.exports = () => {
    // Print from the exported function context
    console.dir('From application exported function');
};