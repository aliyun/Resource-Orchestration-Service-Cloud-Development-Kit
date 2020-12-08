import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './resource.stack';

test('Add resource description.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.ResourceDescription(app, 'MyTestStack');
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
            Description: 'resource description test',
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Add resource metadata.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.ResourceMetadata(app, 'MyTestStack');
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
            Metadata: {
              k1: 'v1',
              k2: 'v2',
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Add removal policy to vpc.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.ResourceDeletionPolicy(app, 'MyTestStack');
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
            DeletionPolicy: 'Retain',
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Get attribute from vpc resource.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.GetAttribute(app, 'MyTestStack');
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
          'ROS-VSwitch': {
            Type: 'ALIYUN::ECS::VSwitch',
            Properties: {
              VpcId: {
                'Fn::GetAtt': ['ROS-VPC', 'VpcId'],
              },
              ZoneId: 'cn-beijing-h',
              VSwitchName: 'VSwitch_Name',
              CidrBlock: '10.0.0.0/20',
              Description: 'DescriptionData',
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Add dependency(vswitch) to vpc.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.AddDependency(app, 'MyTestStack');
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
          'ROS-VSwitch': {
            Type: 'ALIYUN::ECS::VSwitch',
            Properties: {
              VpcId: {
                'Fn::GetAtt': ['ROS-VPC', 'VpcId'],
              },
              ZoneId: 'cn-beijing-h',
              VSwitchName: 'VSwitch_Name',
              CidrBlock: '10.0.0.0/20',
              Description: 'DescriptionData',
            },
            DependsOn: ['ROS-VPC'],
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Add condition to vpc.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.AddCondition(app, 'MyTestStack');
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
            Condition: 'IsProduction',
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
