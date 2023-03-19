# React Ez Animate

[![npm version][npm-image]][npm-url]
[![npm typescript][npm-typescript]][npm-url]
[![GitHub license][github-license]][github-license-url]
[![GitHub build][github-build]][github-build-url]

React Ez animate is a lightweight and easy-to-use animation library for React. It provides a simple way to animate your React components with a variety of animation options.

Installation
You can install React ez animate using npm:

```bash
yarn add -D react-ez-animate
```
or

```bash
npm install react-ez-animate --save-dev
```
## Usage

To use React ez animate in your React project, simply import the Animate component and wrap the component you want to animate with it. You can then pass in any animation options you'd like as props.

Here's an example of how to use React ez animate to create a simple fade-in animation:

```jsx
import React from 'react';
import Animate from 'react-ez-animate';

function MyComponent() {
  return (
    <Animate animateType="fade-in">
      <div>Hello, world!</div>
    </Animate>
  );
}
```
React ez animate supports a variety of animation options, including fade-left, fade-right, fade-up, fade-down, zoom-in, zoom-out, flip-up, flip-dow. You can also customize the animation duration and delay.

[**Live Demo**](https://thobiasvicente.github.io/my-react-typescript-package/)

[npm-url]: https://www.npmjs.com/package/react-ez-animate
[npm-image]: https://img.shields.io/npm/v/react-ez-animate
[github-license]: https://img.shields.io/github/license/thobiasvicente/react-ez-animate
[github-license-url]: https://github.com/thobiasvicente/react-ez-animate/blob/master/LICENSE
[github-build]: https://github.com/thobiasvicente/react-ez-animate/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/thobiasvicente/react-ez-animate/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-ez-animate