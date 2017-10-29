function init() {
  console.log('init()', Zone.current);

  // Fork
  const newFork = Zone.current.fork({
    name: 'my-new-fork',
    onFork: (parentZoneDelegate, currentZone, targetZone, zoneSpec) => {
      console.log('Forking new zone', zoneSpec);
      return parentZoneDelegate.fork(targetZone, zoneSpec);
    }
  });
  console.log('my-new-fork', newFork);

  // Fork again, based on first fork
  console.log('Creating a second fork...');
  const secondFork = newFork.fork({name: 'second-fork'});
  secondFork.run(() => {
    console.log('Log within second-fork run', Zone.current);
  })
}

function simpleSetTimeout() {
  setTimeout(() => {
    console.log('simpleSetTimeout()', Zone.current);
    // debugger;
  }, 1000);
}
