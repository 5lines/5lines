# 5-lines

5lines - Useful utils in 5 lines of code or less

# Submit your own

Just submit a pull request in whatever language you like. :thumbsup: 

Files for each language are called `<languagename>.<ext>`, for example, `javascript.js`. 

Please test your code works as intended. I will probably only test *some* of the JS code before merging it.

# Contributing

Note the example format in `javascript.js`

First comment line is your GitHub username

Second comment line is a description of the function

Third (optional) comment line is a ref / citation to where you got the code from, for example

`Inspired by: https://stackoverflow.com/a/123123`

# Style Guide

For illustrative purposes here is a 5 line gem:

```js
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
```

Here's a comment I recieved about this 5 line gem:


> I find this (https://github.com/dosyago-coder-0/5-lines/blob/master/javas...) to be disingenuous, at best. That's a multiline function that has been minified. You can theoretically make any function a 1 line file if you minify it.
> I could buy a simple chain like this (https://github.com/dosyago-coder-0/5-lines/blob/master/javas...) as a one-liner, but not the RNG.


And to illustrate the approach to style we're taking, here's my response to that comment, explaining why this is infact okay:

*You are definitely welcome to submit a PR that includes the RNG as a multiline function. I'd merge it but I'd also keep the single line version.*

*Why?*

*Generally, I'll prefer code that can keep it's useful functionality within 5 lines, and this does.*

*Is the line "too long"? Not to me. My rule of thumb is if it is more than the width of Github atom editor on a non-handheld screen then it's too long. On my laptop it's 132 chars, but fits. Maybe another way to say it is, 140 chars or less, but I haven't decided about that!*

*And also, it's not disingenuous because, and this may be hard for you to believe but, I didn't actually write the rng as a multiline function then minify it. I'm good at writing RNGs, and I literally just wrote it on 1 line, tweaked in til it worked, and cut spaces.*

*You can see history, here: https://gist.github.com/dosyago-coder-0/094497fdda0dbd7ef7f6... and the first change with the RNG is my first try, but it had some typos. The rng might look complex to you, but it's not.*

*In my experience, it's a very simple generator, just looping endlessly over a state update function that uses xor, add and shift. I'm good at writing RNGs and I've had a lot of experience passing dieharder / practrand / smhasher etc. So it's easy for me to write an okay so-so "rng", in 1 line, like this. Impressive, right?*

*To you, it seems like it had to have been / should be a multiline function. But to me, I'm fine to write it as a concise 1 liner, because I have more experience and aptitude at writing RNGs than you. That's all.*

*And I want this repo to be about that. People shouldn't have to dumb down their own code so everyone can understand it at first glance or agree that they would write it in the same way. The files ought not be constrained by 1 style, but everyone is free to have their own contribution, within some limits. The main ones being: it works, and it's 5 lines.*

*This is not "code golf", and we're not trying to obfuscate, just keep it in 5 lines. Ultimately, I'll be the judge of what's too complex or not, and I'll make a note on your PR if I reject it. Meant to be a celebration of diverse styles and thinking, in concise little packages.*

*If you have some you feel are impressive, hit me up with a PR. I'd love to merge them in! Any language, py, java, whatever. Keep it coming :)*

***

So to summarise, it's alright to have long lines, and it's alright to be idiosyncratic, and to explain what you're doing, or not. Just don't obfuscate for obfuscation sake, make sure the code works as intended to a basic level, don't have more than 5 lines, and don't make your lines too long. I'll judge what I think is ok or not, but hopefully the above provides some guide. :thumbsup:

[why is the above response so long?](https://github.com/5lines/5lines/blob/master/explainer.md)


# Why did I do this? 

Just a late night challenge! But not too challenging. Some fun. Maybe useful. 

Enjoy. 

# Licensing & legal

By putting code here you acknowledge it's your right to put it in and that it can be licensed under an MIT license. 

