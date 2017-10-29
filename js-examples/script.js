/** @type {ZoneSpec} */
let timingSpec = {
  name: 'timing-spec',
  properties: {
    timer: {
      start: undefined,
      end: undefined
    }
  },
  onInvoke: (parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) => {
    // run() was called, start the timer
    targetZone.get('timer').start = new Date();
    console.log('run() is called', targetZone.get('timer').start.getTime());
    parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
  },
  onHasTask: (parentZoneDelegate, currentZone, targetZone, hasTaskState) => {
    // Zone queue was changed, if it is now empty then stop the timer
    console.log('hasTaskState: ', hasTaskState);
    if (!hasTaskState.microTask && !hasTaskState.macroTask && !hasTaskState.eventTask) {
      targetZone.get('timer').end = new Date();
      console.log('Total time: ', targetZone.get('timer').end - targetZone.get('timer').start);
    }
  }
};

function zoneTimerExample() {
  console.log('zoneTimerExample()', Zone.current);

  // Create fork based on timer spec
  const timerFork = Zone.current.fork(timingSpec);
  console.log('timer-fork', timerFork);

  // Kickoff code which will schedule MacroTasks via setTimeout
  timerFork.run(() => {
    for (let i = 1; i <= 10; i++) {
      setTimeout(() => {
        console.log('timeout ' + i + ' was run');
      }, Math.random() * 1000 * i);
    }
  });
}

function multipleForksExample() {
  console.log('multipleForksExample()', Zone.current);

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
