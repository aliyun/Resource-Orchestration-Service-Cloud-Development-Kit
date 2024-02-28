import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './instance.stack';

test('Test instance.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.InstanceTest(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Description:
          'Create a set of ECS instances of the same configuration under the newly created VPC, VSwitch, and security groups.',
        ROSTemplateFormatVersion: '2015-09-01',
        Metadata: {
          'ALIYUN::ROS::Interface': {
            'TemplateTags': [
              'Create by ROS CDK'
            ]
          }
        },
        Parameters: {
          ImageId: {
            Type: 'String',
            Default: 'centos_7',
            Description:
              "Instance Image ID. see detail: <b><a href='https://www.alibabacloud.com/help/doc-detail/112977.html' target='_blank'><font color='blue'>Find the mirror</font></a></b>",
            Label: 'Image ID',
          },
          InstanceType: {
            Type: 'String',
            Default: 'ecs.ic5.large',
            Description:
              "Fill in specifications that can be used under the VSwitch availability zone;</b></font><br>general specifications：<font color='red'><b>ecs.c5.large</b></font><br>note: a few zones do not support general specifications<br>see detail: <a href='https://www.alibabacloud.com/help/en/doc-detail/25378.html' target='_blank'><b><font color='blue'>Instance Specification Family</font></a></b>",
            Label: 'Instance Type',
          },
        },
        Resources: {
          EcsVpc: {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              CidrBlock: '192.168.0.0/16',
              EnableIpv6: false,
              VpcName: 'myVpc',
            },
          },
          EcsVSwitch: {
            Type: 'ALIYUN::ECS::VSwitch',
            Properties: {
              CidrBlock: '192.168.1.0/24',
              VpcId: {
                'Fn::GetAtt': ['EcsVpc', 'VpcId'],
              },
              ZoneId: 'cn-beijing-h',
              VSwitchName: 'mySWitch',
            },
          },
          Instance: {
            Type: 'ALIYUN::ECS::Instance',
            Properties: {
              ImageId: {
                Ref: 'ImageId',
              },
              InstanceType: {
                Ref: 'InstanceType',
              },
              AllocatePublicIP: true,
              AutoRenew: 'False',
              AutoRenewPeriod: 1,
              InstanceChargeType: 'PostPaid',
              InternetChargeType: 'PayByTraffic',
              InternetMaxBandwidthOut: 1,
              SpotInterruptionBehavior: 'Terminate',
              IoOptimized: 'optimized',
              Password: 'Wksjdfs123!@#',
              Period: 1,
              PeriodUnit: 'Month',
              SystemDiskCategory: 'cloud_efficiency',
              VpcId: {
                'Fn::GetAtt': ['EcsVpc', 'VpcId'],
              },
              VSwitchId: {
                'Fn::GetAtt': ['EcsVSwitch', 'VSwitchId'],
              },
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});


test('Test auto create dependencies.', () => {
  const app = new ros.App();
  const stack = new testStack.TestAutoCreateDependencies(app, 'MyTestStack');
  expectCDK(stack).to(
      matchTemplate(
          {
            ROSTemplateFormatVersion: '2015-09-01',
            Parameters: {
              ImageId: {
                Type: 'String',
                Default: 'centos_7',
                Label: 'Image ID',
              },
              InstanceType: {
                Type: 'String',
                Default: 'ecs.ic5.large',
                Label: 'Instance Type',
              },
            },
            Metadata: {
              'ALIYUN::ROS::Interface': {
                'TemplateTags': [
                    'Create by ROS CDK'
                ]
              }
            },
            Resources: {
              AutoCreatedVpcForInstance: {
                Type: 'ALIYUN::ECS::VPC',
                Properties: {
                  CidrBlock: '192.168.0.0/16',
                  Description: 'This is auto created by ROS-CDK.',
                  EnableIpv6: false
                },
              },
              AutoCreatedVSwitchForInstance: {
                Type: 'ALIYUN::ECS::VSwitch',
                Properties: {
                  CidrBlock: '192.168.0.0/24',
                  VpcId: {
                    'Fn::GetAtt': ['AutoCreatedVpcForInstance', 'VpcId'],
                  },
                  Description: 'This is auto created by ROS-CDK.',
                  ZoneId: 'cn-beijing-h',
                },
              },
              AutoCreatedSecurityGroupForInstance: {
                Type: 'ALIYUN::ECS::SecurityGroup',
                Properties: {
                  VpcId: {
                    'Fn::GetAtt': ['AutoCreatedVpcForInstance', 'VpcId'],
                  },
                  Description: 'This is auto created by ROS-CDK.',
                },
              },
              Instance: {
                Type: 'ALIYUN::ECS::Instance',
                Properties: {
                  ImageId: {
                    Ref: 'ImageId',
                  },
                  InstanceType: {
                    Ref: 'InstanceType',
                  },
                  VpcId: {
                    'Fn::GetAtt': ['AutoCreatedVpcForInstance', 'VpcId'],
                  },
                  VSwitchId: {
                    'Fn::GetAtt': ['AutoCreatedVSwitchForInstance', 'VSwitchId'],
                  },
                  SecurityGroupId: {
                    'Fn::GetAtt': ['AutoCreatedSecurityGroupForInstance', 'SecurityGroupId'],
                  },
                  AllocatePublicIP: true,
                  AutoRenew: 'False',
                  AutoRenewPeriod: 1,
                  InstanceChargeType: 'PostPaid',
                  InternetChargeType: 'PayByTraffic',
                  InternetMaxBandwidthOut: 1,
                  IoOptimized: 'optimized',
                  Period: 1,
                  PeriodUnit: 'Month',
                  SystemDiskCategory: 'cloud_efficiency',
                  SpotInterruptionBehavior: 'Terminate',
                },
              },
            },
          },
          MatchStyle.EXACT,
      ),
  );
});


test('Test add security group.', () => {
  const app = new ros.App();
  const stack = new testStack.TestAddSecurityGroup(app, 'MyTestStack');
  expectCDK(stack).to(
      matchTemplate(
          {
            ROSTemplateFormatVersion: '2015-09-01',
            Parameters: {
              ImageId: {
                Type: 'String',
                Default: 'centos_7',
                Label: 'Image ID',
              },
              InstanceType: {
                Type: 'String',
                Default: 'ecs.ic5.large',
                Label: 'Instance Type',
              },
            },
            Metadata: {
              'ALIYUN::ROS::Interface': {
                'TemplateTags': [
                  'Create by ROS CDK'
                ]
              }
            },
            Resources: {
              vpc: {
                Type: 'ALIYUN::ECS::VPC'
              },
              securityGroup: {
                Type: 'ALIYUN::ECS::SecurityGroup',
                Properties: {
                  VpcId: {
                    'Fn::GetAtt': ['vpc', 'VpcId'],
                  },
                  SecurityGroupName: 'mySecurityGroup',
                  Description: 'mySecurityGroup',
                },
              },
              originSecurityGroup: {
                Type: 'ALIYUN::ECS::SecurityGroup',
                Properties: {
                  VpcId: {
                    'Fn::GetAtt': ['vpc', 'VpcId'],
                  },
                },
              },
              Instance: {
                Type: 'ALIYUN::ECS::Instance',
                Properties: {
                  ImageId: {
                    Ref: 'ImageId',
                  },
                  InstanceType: {
                    Ref: 'InstanceType',
                  },
                  SecurityGroupIds: [
                    {
                      'Fn::GetAtt': ['originSecurityGroup', 'SecurityGroupId'],
                    },
                    'sg-9876543210',
                    'sg-1234567890',
                    {
                      'Fn::GetAtt': ['securityGroup', 'SecurityGroupId'],
                    },
                    'sg-99999999'
                  ],
                  AllocatePublicIP: true,
                  AutoRenew: 'False',
                  AutoRenewPeriod: 2,
                  InstanceChargeType: 'PostPaid',
                  InternetChargeType: 'PayByTraffic',
                  InternetMaxBandwidthOut: 1,
                  IoOptimized: 'optimized',
                  Period: 1,
                  PeriodUnit: 'Month',
                  SystemDiskCategory: 'cloud_efficiency',
                  SpotInterruptionBehavior: 'Terminate',
                },
              },
            },
          },
          MatchStyle.EXACT,
      ),
  );
});

test('Test add security group with resolvable object.', () => {
  const app = new ros.App();
  const stack = new testStack.TestAddSecurityGroupWithResolvableObject(app, 'MyTestStack');
  expectCDK(stack).to(
      matchTemplate(
          {
            ROSTemplateFormatVersion: '2015-09-01',
            Parameters: {
              ImageId: {
                Type: 'String',
                Default: 'centos_7',
                Label: 'Image ID',
              },
              InstanceType: {
                Type: 'String',
                Default: 'ecs.ic5.large',
                Label: 'Instance Type',
              },
            },
            Metadata: {
              'ALIYUN::ROS::Interface': {
                'TemplateTags': [
                  'Create by ROS CDK'
                ]
              }
            },
            Resources: {
              vpc: {
                Type: 'ALIYUN::ECS::VPC'
              },
              securityGroup: {
                Type: 'ALIYUN::ECS::SecurityGroup',
                Properties: {
                  VpcId: {
                    'Fn::GetAtt': ['vpc', 'VpcId'],
                  },
                  SecurityGroupName: 'mySecurityGroup',
                  Description: 'mySecurityGroup',
                },
              },
              originSecurityGroup: {
                Type: 'ALIYUN::ECS::SecurityGroup',
                Properties: {
                  VpcId: {
                    'Fn::GetAtt': ['vpc', 'VpcId'],
                  },
                },
              },
              Instance: {
                Type: 'ALIYUN::ECS::Instance',
                Properties: {
                  ImageId: {
                    Ref: 'ImageId',
                  },
                  InstanceType: {
                    Ref: 'InstanceType',
                  },
                  SecurityGroupIds: {
                    'Fn::ListMerge': [
                      [{
                        'Fn::GetAtt': ['originSecurityGroup', 'SecurityGroupId'],
                      }],
                      [
                        'sg-9876543210',
                      ],
                      [
                        'sg-1234567890',
                      ],
                      [{
                        'Fn::GetAtt': ['securityGroup', 'SecurityGroupId'],
                      },
                        'sg-99999999'
                      ],
                    ],
                  },
                  AllocatePublicIP: true,
                  AutoRenew: 'False',
                  AutoRenewPeriod: 2,
                  InstanceChargeType: 'PostPaid',
                  InternetChargeType: 'PayByTraffic',
                  InternetMaxBandwidthOut: 1,
                  IoOptimized: 'optimized',
                  Period: 1,
                  PeriodUnit: 'Month',
                  SystemDiskCategory: 'cloud_efficiency',
                  SpotInterruptionBehavior: 'Terminate',
                },
              },
            },
          },
          MatchStyle.EXACT,
      ),
  );
});

test('Test add user data.', () => {
  const app = new ros.App();
  const stack = new testStack.TestAddUserData(app, 'MyTestStack');
  expectCDK(stack).to(
      matchTemplate(
          {
            ROSTemplateFormatVersion: '2015-09-01',
            Parameters: {
              ImageId: {
                Type: 'String',
                Default: 'centos_7',
                Label: 'Image ID',
              },
              InstanceType: {
                Type: 'String',
                Default: 'ecs.ic5.large',
                Label: 'Instance Type',
              },
              BeginCommand: {
                Type: 'String',
                Default: '#!/bin/bash',
                Label: 'Command',
              },
            },
            Metadata: {
              'ALIYUN::ROS::Interface': {
                'TemplateTags': [
                  'Create by ROS CDK'
                ]
              }
            },
            Resources: {
              Instance: {
                Type: 'ALIYUN::ECS::Instance',
                Properties: {
                  ImageId: {
                    Ref: 'ImageId',
                  },
                  InstanceType: {
                    Ref: 'InstanceType',
                  },
                  AllocatePublicIP: true,
                  AutoRenew: 'False',
                  AutoRenewPeriod: 1,
                  InstanceChargeType: 'PostPaid',
                  InternetChargeType: 'PayByTraffic',
                  InternetMaxBandwidthOut: 1,
                  IoOptimized: 'optimized',
                  Period: 1,
                  PeriodUnit: 'Month',
                  SystemDiskCategory: 'cloud_efficiency',
                  SpotInterruptionBehavior: 'Terminate',
                  UserData: {
                    'Fn::Join': [
                        '\n',
                      [
                        {
                          "Ref": "BeginCommand"
                        },
                        "echo \"hello world\"",
                        {
                          "Fn::Sub": [
                            "echo \"This command is created by ${stackName}.\"",
                            {
                              "stackName": "MyTestStack"
                            }
                          ]
                        },
                        "echo \"bye world\""
                      ]
                    ]
                  }
                },
              },
            },
          },
          MatchStyle.EXACT,
      ),
  );
});
