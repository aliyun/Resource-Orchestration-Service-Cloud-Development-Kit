import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './output.stack';

test('Show output after creating stack.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.OutputStack(app, 'MyTestStack');
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
              VpcName: 'VPC_Name',
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
        Outputs: {
          VpcId: {
            Description: 'VpcId',
            Value: {
              'Fn::GetAtt': ['ROS-VPC', 'VpcId'],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Multiple values in one output.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.MultipleValueInOneOutputStack(app, 'MyTestStack');
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
              VpcName: 'VPC_Name',
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
        Outputs: {
          VpcId: {
            Description: 'VPC detail information(VpcId, VRouterId, RouteTableId)',
            Value: [
              {
                'Fn::GetAtt': ['ROS-VPC', 'VpcId'],
              },
              {
                'Fn::GetAtt': ['ROS-VPC', 'VRouterId'],
              },
              {
                'Fn::GetAtt': ['ROS-VPC', 'RouteTableId'],
              },
            ],
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Multiple output in one stack.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.MultipleOutputStack(app, 'MyTestStack');
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
              VpcName: 'VPC_Name',
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
        Outputs: {
          VpcId: {
            Description: 'VpcId',
            Value: {
              'Fn::GetAtt': ['ROS-VPC', 'VpcId'],
            },
          },
          VRouterId: {
            Description: 'VRouterId',
            Value: {
              'Fn::GetAtt': ['ROS-VPC', 'VRouterId'],
            },
          },
          RouteTableId: {
            Description: 'RouteTableId',
            Value: {
              'Fn::GetAtt': ['ROS-VPC', 'RouteTableId'],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Output with condition.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.OutputWithConditionStack(app, 'MyTestStack');
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
              VpcName: 'VPC_Name',
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
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
        Outputs: {
          VpcId: {
            Description: 'VpcId',
            Value: {
              'Fn::GetAtt': ['ROS-VPC', 'VpcId'],
            },
            Condition: 'IsProduction',
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
