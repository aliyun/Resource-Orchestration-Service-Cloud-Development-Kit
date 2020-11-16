import * as ros from '@ros-cdk/core'
import * as testStack from './detail.stack';
import { expect as expectCDK, matchTemplate, MatchStyle } from '@ros-cdk/assert'

test('Empty stack will add version automatically.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.VersionStack(app, 'MyTestStack', {
    version: ros.RosInfo.v20150901,
  });
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack with version.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.VersionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack with version and description.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.VersionAndDescStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Description: 'The description of the stack is defined from here.',
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack with Metadata and description.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.MetadataVersionDesc(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Metadata: {
          key1: 'v1',
          key2: 'v2',
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
