function init() {
  console.log('init()', Zone.current);
  simpleSetTimeout();
}

function simpleSetTimeout() {
  setTimeout(() => {
    console.log('simpleSetTimeout()', Zone.current);
    debugger;
  }, 1000);
}
