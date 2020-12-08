import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './mapping.stack';

test('Create and find map value in stack.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.MappingStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Mappings: {
          vpcInfo: {
            vpcName: {
              vpc1: 'vpc1_name',
              vpc2: 'vpc2_name',
            },
            testMap: {
              k1: 'v1',
              k2: 'v2',
            },
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::FindInMap': ['vpcInfo', 'vpcName', 'vpc1'],
              },
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Create and find map value via parameter in stack.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.MappingWithParameterStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          env: {
            Type: 'String',
            AllowedValues: ['北京', '杭州', '青岛'],
          },
        },
        Mappings: {
          vpcInfo: {
            vpcName: {
              北京: 'cn-beijing-h',
              杭州: 'cn-hangzhou',
              青岛: 'cn-qingdao',
            },
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::FindInMap': [
                  'vpcInfo',
                  'vpcName',
                  {
                    Ref: 'env',
                  },
                ],
              },
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
