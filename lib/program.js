var random = require('./random'),
    rest   = { rest: true };

module.exports = [
  {
    key: 'jumping-jacks',
    title: 'Jumping Jacks',
    secs: 30,
    song: {
      key: random("t1210386", "t31506031") // 't2988503'
    }
  },
  rest,
  {
    key: 'wall-sit',
    title: 'Wall-sit',
    secs : 30,
    song: {
      key: random('t5896031', "t5896039")
    }
  },
  {
    key: 'push-up',
    title: 'Push-up',
    secs : 30,
    song : {
      key: random('t30828347', 't18082729')
    }
  },
  rest,
  {
    key: 'abdominal-crunch',
    title: 'Abdominal Crunch',
    secs: 30,
    song: {
      key: 't30828339'
    }
  },
  rest,
  {
    key: 'step-up',
    title: 'Step-up onto chair',
    secs: 30
  },
  rest,
  {
    key: 'squat',
    title: 'Squat',
    secs: 30
  },
  rest,
  {
    key: 'triceps-dip',
    title: 'Triceps dip on chair',
    secs: 30
  },
  rest,
  {
    key: 'plank',
    title: 'Plank',
    secs: 30
  },
  rest,
  {
    key: 'running',
    title: 'High knees running in place',
    secs: 30
  },
  rest,
  {
    key: 'lunge',
    title: 'Lunge',
    secs: 30,
    song: {
      key: 't25781844'
    }
  },
  rest,
  {
    key: 'push-up-rotate',
    title: 'Push-up and rotation',
    secs: 30
  },
  rest,
  {
    key: 'side-plank',
    title: 'Side plank',
    secs: 30
  }
];
