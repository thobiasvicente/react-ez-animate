# React Ez Animate

[![npm version][npm-image]][npm-url]
[![npm typescript][npm-typescript]][npm-url]
[![GitHub license][github-license]][github-license-url]
[![GitHub build][github-build]][github-build-url]

React Ez animate is a lightweight and easy-to-use animation library for React. It provides a simple way to animate your React components with a variety of animation options.

This library uses [Framer Motion](https://www.framer.com/motion/) under the hood, so basically i created simple way to use it.

## Demo

[**Live Demo**](https://thobiasvicente.github.io/react-ez-animate)


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
import { Animate } from 'react-ez-animate';

function MyComponent() {
  return (
    <Animate animateType="fade-up">
      <div>Hello, world!</div>
    </Animate>
  );
}
```

## Props

- animateType (string) - The type of animation to use.
- animateDuration (number) - The duration of the animation in seconds.
- initialValue (number) - The initial value of the animation.
- endValue (number) - The end value of the animation.
- el (string) - The element to animate, default is div. Because its use framer motion under the hood, you can use any element that framer motion supports. like motion.div, motion.span, so o just pass the element name without motion. like div, span, p, etc.

Here's an example using the el prop:

```jsx
import { Animate } from 'react-ez-animate';

function MyComponent() {
  return (
    <Animate animateType="fade-left" el="p">Hello,world!</Animate>
  );
}
```

## Animation Types

- fade-left (default)
- fade-right
- fade-up
- fade-down
- zoom-in
- zoom-out
- flip-up
- flip-down

[npm-url]: https://www.npmjs.com/package/react-ez-animate
[npm-image]: https://img.shields.io/npm/v/react-ez-animate
[github-license]: https://img.shields.io/github/license/thobiasvicente/react-ez-animate
[github-license-url]: https://github.com/thobiasvicente/react-ez-animate/blob/master/LICENSE
[github-build]: https://github.com/thobiasvicente/react-ez-animate/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/thobiasvicente/react-ez-animate/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-ez-animate