import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return [
      <div onTransitionCancel={() => {}} />,
      <div onTransitionCancelCapture={() => {}} />,
      <div onTransitionEnd={() => {}} />,
      <div onTransitionEndCapture={() => {}} />,
      <div onTransitionStart={() => {}} />,
      <div onTransitionStartCapture={() => {}} />,
    ]
  }
}
