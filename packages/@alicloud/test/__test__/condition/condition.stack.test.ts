import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './condition.stack';

test('Show output after creating stack.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.PureConditionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          env: {
            Type: 'String',
            Default: 'Production',
          },
        },
        Conditions: {
          IsProduction: {
            'Fn::Equals': [
              'Production',
              {
                Ref: 'env',
              },
            ],
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
