import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './vswitch.stack';

test('Stack with example VSwtich.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.VSwitchExample(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          'ROS-VSwitch': {
            Type: 'ALIYUN::ECS::VSwitch',
            Properties: {
              VpcId: 'example_VPC_ID',
              ZoneId: 'cn-beijing-h',
              VSwitchName: 'example_VSwtich_Name',
              CidrBlock: '10.0.0.0/8',
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

test('Stack with simple VSwtich and VPC.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.VSwitchWithVPC(app, 'MyTestStack');
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
              Description: 'This is the description of VPC',
              EnableIpv6: false,
              Tags: [
                {
                  Key: 'KeyExample',
                  Value: 'ValueExample',
                },
              ],
            },
          },
          'ROS-VSwitch': {
            Type: 'ALIYUN::ECS::VSwitch',
            Properties: {
              VpcId: {
                'Fn::GetAtt': ['ROS-VPC', 'VpcId'],
              },
              ZoneId: 'cn-beijing-h',
              VSwitchName: 'example_VSwtich_Name',
              CidrBlock: '10.0.0.0/20',
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
