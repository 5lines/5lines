/* 5lines - function body must be not more than 5 SLOC */

// @dosyago-coder-0
// encrypt a string, also decrypt a string
function encrypt(key, str, s = 1) {
  // clean
  s = Number.isNaN(parseInt(s)) ? 1 : parseInt(s);
  // turn key into numbers
  key = new Uint16Array([...key].map( k => k.codePointAt(0) ));
  // write generator to produce RNG
  const rng = (function*(){while(true){yield(key.reduce((K,k,i)=>(key[(i+s)%key.length]+=k, k=(k<<1||k>>15),K+k),s),key[0])}}());  
  // encrypt string
  str = new Uint16Array( [...str].map( s => s.codePointAt(0) ) ).map( s => s ^ rng.next().value );
  // convert to characters & return
  return Array.from(str).map( s => String.fromCodePoint(s) ).join('');
}

// @dosyago-coder-0
// create a random (meant-to-be-unique) code
function rcode(s = 1) {
  s = Number.isNaN(parseInt(s)) ? 1 : parseInt(s);
  const ran32s = (crypto.getRandomValues(new Uint32Array(3)).map(v=>v^(+new Date)).map((v,i)=>v+performance.now()+i*s));
  const ran8s = new Uint8Array(ran32s.buffer);
  const ranbytes = Array.from(ran8s).map( b => String.fromCodePoint(b) );
  return btoa(ranbytes.join(''));
}

// @dmitriid
// Run Promises one by one, in sequence. Stop and return error when a Promise errors
// Useful when you need to run, e.g., sequential fetches from a remote API where
// order matters.
// Usage: seq([ fun(), fun1(), fun2()  ]).then().catch()
// Each fun must return a Promise
function seq(tasks) {
    return new Promise((resolve, reject) => {
        let task = null;
        // As long as there are tasks, keep going: extract a new task
        // and check that it isn't a task we've already prcessed
        while (tasks.length > 0 && !(task = tasks.shift())) {}
        // we're out of tasks, resolve the promise
        if (!task) { resolve(); return; }
        // execute the current task. 
        // on promise success, recurse into seq
        // on error, reject
        task().then((result) => { seq(tasks).then(resolve).catch(reject); }) .catch((e) => {reject(e);});
    });
}
