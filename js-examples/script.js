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
    targetZone.get('timer').start = new Date();
    console.log('run() is called', targetZone.get('timer').start.getTime());
    parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
  },
  onHasTask: (parentZoneDelegate, currentZone, targetZone, hasTaskState) => {
    console.log(hasTaskState);
    if (!hasTaskState.microTask && !hasTaskState.macroTask && !hasTaskState.eventTask) {
      targetZone.get('timer').end = new Date();
      console.log('Total time: ', targetZone.get('timer').end - targetZone.get('timer').start);
    }
  }
};

function init() {
  console.log('init()', Zone.current);
  let start;

  // Fork
  const newFork = Zone.current.fork(timingSpec);
  console.log('my-new-fork', newFork);

  newFork.run(() => {
    for (let i = 0; i < 10; i++) {
      simpleSetTimeout(i);
    }
  });
}

function simpleSetTimeout(i) {
  setTimeout(() => {
    console.log('simpleSetTimeout()', i);
    // debugger;
  }, Math.random() * 5000);
}
