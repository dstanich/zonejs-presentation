function multipleForksExample() {
  console.log('multipleForks()', Zone.current);

  // First fork; sets up onFork hook
  const newFork = Zone.current.fork({
    name: 'my-new-fork',
    onFork: (parentZoneDelegate, currentZone, targetZone, zoneSpec) => {
      console.log('onFork() hook -- forking new zone with spec: ', zoneSpec);
      return parentZoneDelegate.fork(targetZone, zoneSpec);
    }
  });
  console.log('my-new-fork', newFork);

  // Fork again, based on first fork.  Will trigger onFork in first fork.
  console.log('Creating a second fork...');
  const secondFork = newFork.fork({name: 'second-fork'});

  // run() using the second fork
  secondFork.run(() => {
    console.log('Log within second-fork run', Zone.current);
  })
}

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
