"use strict";
function counter() {
let n = 0;
// return an object,
// containing two function valued
// properties
return {
    count: function() {return n++; },
reset: function() { n = 0; }
}

}

let c = counter(), d = counter();
// Create two counters
c.count         // => 0
d.count         // => 0: they count independently
c.reset         // reset() and count() methods
c.count         // => 0: because we reset c
d.count         // => 1: d was not reset
