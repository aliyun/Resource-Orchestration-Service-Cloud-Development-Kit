// import { expect as expectCDK, matchTemplate, MatchStyle } from '@ros-cdk/assert'
import * as ros from '@ros-cdk/core'
import * as testStack from './unavailable.prop.stack';

test('Resource string props has invalid maxLength.', () => {
  expect(() => {
    const app = new ros.App();
    new testStack.invalidStringMaxLen(app, 'MyTestStack');
    app.synth();
  }).toThrowError('description: 600 is larger than max value(512)');
});

test('Resource string props has invalid minLength.', () => {
  expect(() => {
    const app = new ros.App();
    new testStack.invalidStringMinLen(app, 'MyTestStack');
    app.synth();
  }).toThrowError('namespace: 1 is less than min value(2)');
});

test('Resource list props has invalid maxLength.', () => {
  expect(() => {
    const app = new ros.App();
    new testStack.invalidListMaxLen(app, 'MyTestStack');
    app.synth();
  }).toThrowError('ipv6Addresses: 2 is larger than max value(1)');
});

test('Resource list props has invalid minLength.', () => {
  expect(() => {
    const app = new ros.App();
    new testStack.invalidListMinLen(app, 'MyTestStack');
    app.synth();
  }).toThrowError('instanceIds: 0 is less than min value(1)');
});

test('Resource number props has invalid minRange.', () => {
  expect(() => {
    const app = new ros.App();
    new testStack.invalidMinRange(app, 'MyTestStack');
    app.synth();
  }).toThrowError('retentionDays: -10 is less than min value(-1)');
});

test('Resource number props has invalid maxRange.', () => {
  expect(() => {
    const app = new ros.App();
    new testStack.invalidMaxRange(app, 'MyTestStack');
    app.synth();
  }).toThrowError('ipCount: 10 is larger than min value(1)');
});

test('Resource number props is not in scope of allowed values.', () => {
  expect(() => {
    const app = new ros.App();
    new testStack.invalidNumberAllowedValueRange(app, 'MyTestStack');
    app.synth();
  }).toThrowError(`autoRenewPeriod: 13 doesn't exist in [1,2,3,6,12]`);
});

test('Resource string props is not in scope of allowed values.', () => {
  expect(() => {
    const app = new ros.App();
    new testStack.invalidStringAllowedValueRange(app, 'MyTestStack');
    app.synth();
  }).toThrowError(
    `diskCategory: \"invalidType\" doesn't exist in [cloud,cloud_ssd,cloud_essd,cloud_efficiency,san_ssd,san_efficiency]`,
  );
});

test("Resource string props does't match the regular expression.", () => {
  expect(() => {
    const app = new ros.App();
    new testStack.invalidAllowedPattern(app, 'MyTestStack');
    app.synth();
  }).toThrowError(`does not match the regular expression`);
});
