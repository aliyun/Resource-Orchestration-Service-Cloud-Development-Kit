import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './pseudo.stack';

test('Pseudo values in one output.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.PseudoDataParameter(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Outputs: {
          pseudo_data: {
            Value: [
              {
                Ref: 'ALIYUN::AccountId',
              },
              {
                Ref: 'ALIYUN::Region',
              },
              {
                Ref: 'ALIYUN::StackName',
              },
              {
                Ref: 'ALIYUN::StackId',
              },
              {
                Ref: 'ALIYUN::TenantId',
              },
              {
                Ref: 'ALIYUN::NoValue',
              },
            ],
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Test Pseudo-NoValue in one output.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.PseudoNoValueParameter(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: 'vpcName',
              CidrBlock: '10.0.0.0/8',
              Description: {
                Ref: 'ALIYUN::NoValue',
              },
              EnableIpv6: false,
              Tags: [
                {
                  Key: 'KeyExample',
                  Value: 'ValueExample',
                },
              ],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
