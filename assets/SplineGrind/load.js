import init from './out/SplineGrind.js';

const frame = document.querySelector('#spline-demo');
const contexts = [];
const NativeAudioContext = window.AudioContext;

if (NativeAudioContext) {
  window.AudioContext = new Proxy(NativeAudioContext, {
    construct(target, args) {
      const context = new target(...args);
      contexts.push(context);
      return context;
    },
  });
}

const resumeAudio = () => {
  contexts.forEach((context) => {
    if (context.state === 'suspended') context.resume();
  });
};
document.addEventListener('pointerdown', resumeAudio);
document.addEventListener('keydown', resumeAudio);

try {
  await init();
  frame?.classList.add('is-ready');
} catch (error) {
  // Winit ends initialization with this exception when it hands control to the browser.
  if (String(error).includes('Using exceptions for control flow')) {
    frame?.classList.add('is-ready');
  } else {
    frame?.classList.add('has-error');
    const message = frame?.querySelector('.demo-loader');
    if (message) message.textContent = 'The demo could not load. Please try a browser with WebGL enabled.';
    console.error('Spline Grind could not start:', error);
  }
}
