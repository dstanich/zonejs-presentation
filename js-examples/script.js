function setTimeoutExample() {
  console.log('setTimeoutExample()', Zone.current);

  // Fork
  const newFork = Zone.current.fork({
    name: 'my-new-fork'
  });
  console.log('my-new-fork', newFork);
  newFork.run(() => {
    simpleSetTimeout();
  });

  // Call function with root zone
  simpleSetTimeout();
}

function simpleSetTimeout() {
  setTimeout(() => {
    console.log('simpleSetTimeout()', Zone.current);
    // debugger;
  }, 1000);
}
