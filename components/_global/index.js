// 14.105
import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import { __esModule } from 'vform';

// require all components in the current directory and subdirectories
const requireComponent = require.context('.', true, /_base-[\w-]+\.vue$/);

// console.log(requireComponent.keys);
requireComponent.keys().forEach(fileName => {
  // get the component's coniguration
  const componentConfig = requireComponent(fileName);

  const fn = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '');

  // console.log(componentConfig);
  // console.log(fn);
  // console.log(upperFirst(camelCase(fn)));
  const componentName = upperFirst(camelCase(fn));
  // console.log(componentConfig);

  Vue.component(componentName, componentConfig.default || componentConfig);
});
