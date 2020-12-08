import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './uncheck-stack.stack';

test('Stack with invalid length of tags.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.UncheckStackTest(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              Tags: [
                {
                  Key: 'KeyExample0',
                  Value: 'ValueExample0',
                },
                {
                  Key: 'KeyExample1',
                  Value: 'ValueExample1',
                },
                {
                  Key: 'KeyExample10',
                  Value: 'ValueExample10',
                },
                {
                  Key: 'KeyExample11',
                  Value: 'ValueExample11',
                },
                {
                  Key: 'KeyExample12',
                  Value: 'ValueExample12',
                },
                {
                  Key: 'KeyExample13',
                  Value: 'ValueExample13',
                },
                {
                  Key: 'KeyExample14',
                  Value: 'ValueExample14',
                },
                {
                  Key: 'KeyExample15',
                  Value: 'ValueExample15',
                },
                {
                  Key: 'KeyExample16',
                  Value: 'ValueExample16',
                },
                {
                  Key: 'KeyExample17',
                  Value: 'ValueExample17',
                },
                {
                  Key: 'KeyExample18',
                  Value: 'ValueExample18',
                },
                {
                  Key: 'KeyExample19',
                  Value: 'ValueExample19',
                },
                {
                  Key: 'KeyExample2',
                  Value: 'ValueExample2',
                },
                {
                  Key: 'KeyExample20',
                  Value: 'ValueExample20',
                },
                {
                  Key: 'KeyExample3',
                  Value: 'ValueExample3',
                },
                {
                  Key: 'KeyExample4',
                  Value: 'ValueExample4',
                },
                {
                  Key: 'KeyExample5',
                  Value: 'ValueExample5',
                },
                {
                  Key: 'KeyExample6',
                  Value: 'ValueExample6',
                },
                {
                  Key: 'KeyExample7',
                  Value: 'ValueExample7',
                },
                {
                  Key: 'KeyExample8',
                  Value: 'ValueExample8',
                },
                {
                  Key: 'KeyExample9',
                  Value: 'ValueExample9',
                },
              ],
              VpcName: 'vpcName',
            },
          },
          'ROS-VSwitch': {
            Type: 'ALIYUN::ECS::VSwitch',
            Properties: {
              CidrBlock: '10.0.0.0/20',
              VpcId: {
                'Fn::GetAtt': ['ROS-VPC', 'VpcId'],
              },
              ZoneId: 'cn-beijing-h',
              Tags: [
                {
                  Key: 'KeyExample0',
                  Value: 'ValueExample0',
                },
                {
                  Key: 'KeyExample1',
                  Value: 'ValueExample1',
                },
                {
                  Key: 'KeyExample10',
                  Value: 'ValueExample10',
                },
                {
                  Key: 'KeyExample11',
                  Value: 'ValueExample11',
                },
                {
                  Key: 'KeyExample12',
                  Value: 'ValueExample12',
                },
                {
                  Key: 'KeyExample13',
                  Value: 'ValueExample13',
                },
                {
                  Key: 'KeyExample14',
                  Value: 'ValueExample14',
                },
                {
                  Key: 'KeyExample15',
                  Value: 'ValueExample15',
                },
                {
                  Key: 'KeyExample16',
                  Value: 'ValueExample16',
                },
                {
                  Key: 'KeyExample17',
                  Value: 'ValueExample17',
                },
                {
                  Key: 'KeyExample18',
                  Value: 'ValueExample18',
                },
                {
                  Key: 'KeyExample19',
                  Value: 'ValueExample19',
                },
                {
                  Key: 'KeyExample2',
                  Value: 'ValueExample2',
                },
                {
                  Key: 'KeyExample20',
                  Value: 'ValueExample20',
                },
                {
                  Key: 'KeyExample3',
                  Value: 'ValueExample3',
                },
                {
                  Key: 'KeyExample4',
                  Value: 'ValueExample4',
                },
                {
                  Key: 'KeyExample5',
                  Value: 'ValueExample5',
                },
                {
                  Key: 'KeyExample6',
                  Value: 'ValueExample6',
                },
                {
                  Key: 'KeyExample7',
                  Value: 'ValueExample7',
                },
                {
                  Key: 'KeyExample8',
                  Value: 'ValueExample8',
                },
                {
                  Key: 'KeyExample9',
                  Value: 'ValueExample9',
                },
              ],
              VSwitchName: 'example_VSwtich_Name',
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
