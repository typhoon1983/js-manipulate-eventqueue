let fnOutput = (x)=>{console.log(x);};
let fakeClickEvent = new Event('click');
let fakeMessageEvent = new MessageEvent('message');
window.addEventListener('message', fnOutput);
window.addEventListener('click', fnOutput);
(()=>{
  setTimeout(fnOutput,0,'timeout');
  window.postMessage('message', '*');
  window.dispatchEvent(fakeClickEvent);
  window.dispatchEvent(fakeMessageEvent);
  console.log('This tick');
})()


// Step 1
let i, count = 10000;
let fn = (x,label='postMessage') => {
      x = x.data ? x.data : x;
      if(x === count){
        console.timeEnd(label);
      }
    };
window.addEventListener("message", fn, false);

// Step 2
i=0;
console.time('timeout');
while(i++ < count){
  setTimeout(fn,0,i,'timeout')
}

// Step 3
i=0;
console.time('postMessage');
while(i++ < count){
  window.postMessage(i, '*')
}
