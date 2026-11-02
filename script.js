'use strict';
const stage = document.querySelector('#demo-stage');
const code = document.querySelector('#demo-code');
const status = document.querySelector('#demo-status');
const layoutButtons = [...document.querySelectorAll('[data-layout]')].filter(node => node.tagName === 'BUTTON');
const accentButtons = [...document.querySelectorAll('button[data-accent]')];
function updateDemo(layout, accent) {
  stage.dataset.layout = layout;
  stage.dataset.accent = accent;
  layoutButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.layout === layout)));
  accentButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.accent === accent)));
  code.textContent = `flex-direction: ${layout};`;
  const layoutName = layout === 'row' ? 'Side-by-side' : 'Stacked';
  const accentName = accent.charAt(0).toUpperCase() + accent.slice(1);
  status.textContent = `${layoutName} layout · ${accentName} accent`;
}
layoutButtons.forEach(button => button.addEventListener('click', () => updateDemo(button.dataset.layout, stage.dataset.accent)));
accentButtons.forEach(button => button.addEventListener('click', () => updateDemo(stage.dataset.layout, button.dataset.accent)));
document.querySelector('#reset-demo').addEventListener('click', () => updateDemo('row', 'blue'));
