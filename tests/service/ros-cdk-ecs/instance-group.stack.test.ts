import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './instance-group.stack';

test('Test instance group.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.InstanceGroupTest(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Description:
          'Create a set of ECS instances of the same configuration under the newly created VPC, VSwitch, and security groups.',
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          VSwitchName: {
            Type: 'String',
            Default: 'MyVsw',
            ConstraintDescription: '[2, 128] alphanumeric characters',
            Description:
              "VSwitch name, 2 to 128 characters in length, beginning with size letters or Chinese characters, including Numbers, '_' or '-'.",
            MaxLength: 128,
            MinLength: 2,
            Label: 'VSwitch Name',
          },
          SystemDiskCategory: {
            Type: 'String',
            Default: 'cloud_ssd',
            AllowedValues: ['cloud_efficiency', 'cloud_ssd'],
            Description: 'System disk category, allowed values: cloud_efficiency|cloud_ssd.',
            Label: 'System Disk Category',
          },
          VpcCidrBlock: {
            Type: 'String',
            Default: '192.168.0.0/16',
            AllowedValues: ['192.168.0.0/16', '172.16.0.0/12', '10.0.0.0/8'],
            Description:
              'The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets: 10.0.0.0/8 172.16.0.0/12  192.168.0.0/16',
            Label: 'VPC Cidrblock',
          },
          ImageId: {
            Type: 'String',
            Default: 'centos_7',
            Description:
              "Instance Image ID. see detail: <b><a href='https://www.alibabacloud.com/help/doc-detail/112977.html' target='_blank'><font color='blue'>Find the mirror</font></a></b>",
            Label: 'Image ID',
          },
          VpcName: {
            Type: 'String',
            Default: 'MyVpc',
            ConstraintDescription: '[2, 128] alphanumeric characters',
            Description:
              "VPC name, 2 to 128 characters in length, beginning with size letters or Chinese characters, including Numbers, '_' or '-'.",
            MaxLength: 128,
            MinLength: 2,
            Label: 'VPC Name',
          },
          VSwitchCidrBlock: {
            Type: 'String',
            Default: '192.168.1.0/24',
            Description: 'VSwitch subnet which is within VPC.',
            Label: 'VSwitch CidrBlock',
          },
          InternetChargeType: {
            Type: 'String',
            Default: 'PayByTraffic',
            AllowedValues: ['PayByBandwidth', 'PayByTraffic'],
            Description: "Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.",
            Label: 'Internet Charge Type',
          },
          Password: {
            Type: 'String',
            Default: '^%$^HJNJK45623',
            AllowedPattern: "[0-9A-Za-z\\_\\-&:;'<>,=%`~!@#\\(\\)\\$\\^\\*\\+\\|\\{\\}\\[\\]\\.\\?\\/]+$",
            ConstraintDescription:
              "Length 8-30, must contain upper case letters, lower case letters, Numbers, special symbols three; special characters include: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/",
            Description:
              "The 8-30 long login password of instance, consists of the uppercase, lowercase letter and number. <br> special characters include()`~!@#$%^&*_-+=|{}[]:;'<>,.?/",
            MaxLength: 30,
            MinLength: 8,
            NoEcho: true,
            Label: 'Login Password',
          },
          InstanceType: {
            Type: 'String',
            Default: 'ecs.ic5.large',
            Description:
              "Fill in specifications that can be used under the VSwitch availability zone;</b></font><br>general specifications：<font color='red'><b>ecs.c5.large</b></font><br>note: a few zones do not support general specifications<br>see detail: <a href='https://www.alibabacloud.com/help/en/doc-detail/25378.html' target='_blank'><b><font color='blue'>Instance Specification Family</font></a></b>",
            Label: 'Instance Type',
          },
          zoneId: {
            Type: 'String',
            Default: 'cn-beijing-h',
            Label: 'Zone ID',
            AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId',
          },
          DiskName: {
            Type: 'String',
            Default: 'MyDiskName',
            Description:
              "'Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.',",
          },
          DiskSize: {
            Type: 'String',
            Default: 20,
            Description:
              'The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.',
            Label: 'Disk Size',
          },
        },
        Resources: {
          EcsVpc: {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              CidrBlock: {
                Ref: 'VpcCidrBlock',
              },
              EnableIpv6: false,
              VpcName: {
                Ref: 'VpcName',
              },
            },
          },
          EcsVSwitch: {
            Type: 'ALIYUN::ECS::VSwitch',
            Properties: {
              CidrBlock: {
                Ref: 'VSwitchCidrBlock',
              },
              VpcId: {
                'Fn::GetAtt': ['EcsVpc', 'VpcId'],
              },
              ZoneId: {
                Ref: 'zoneId',
              },
              VSwitchName: {
                Ref: 'VSwitchName',
              },
            },
            DependsOn: ['EcsVpc'],
          },
          sgId: {
            Type: 'ALIYUN::ECS::SecurityGroup',
            Properties: {
              VpcId: {
                'Fn::GetAtt': ['EcsVpc', 'VpcId'],
              },
            },
          },
          EcsInstanceGroup: {
            Type: 'ALIYUN::ECS::InstanceGroup',
            Properties: {
              ImageId: {
                Ref: 'ImageId',
              },
              InstanceType: {
                Ref: 'InstanceType',
              },
              MaxAmount: 1,
              AllocatePublicIP: true,
              AutoRenew: 'False',
              AutoRenewPeriod: 1,
              DiskMappings: [
                {
                  Size: {
                    Ref: 'DiskSize',
                  },
                  DiskName: {
                    Ref: 'DiskName',
                  },
                },
              ],
              InstanceChargeType: 'PostPaid',
              InternetChargeType: {
                Ref: 'InternetChargeType',
              },
              InternetMaxBandwidthOut: 1,
              IoOptimized: 'optimized',
              Password: {
                Ref: 'Password',
              },
              SpotInterruptionBehavior: 'Terminate',
              UniqueSuffix: false,
              UpdatePolicy: 'ForNewInstances',
              Period: 1,
              PeriodUnit: 'Month',
              SecurityGroupId: {
                'Fn::GetAtt': ['sgId', 'SecurityGroupId'],
              },
              SystemDiskCategory: {
                Ref: 'SystemDiskCategory',
              },
              VpcId: {
                'Fn::GetAtt': ['EcsVpc', 'VpcId'],
              },
              VSwitchId: {
                'Fn::GetAtt': ['EcsVSwitch', 'VSwitchId'],
              },
            },
          },
        },
        Outputs: {
          PublicIps: {
            Value: {
              'Fn::GetAtt': ['EcsInstanceGroup', 'PublicIps'],
            },
          },
          PrivateIps: {
            Description: 'Private IP address list of created ecs instance. Only for VPC instance.',
            Value: {
              'Fn::GetAtt': ['EcsInstanceGroup', 'PrivateIps'],
            },
          },
          InstanceIds: {
            Description: 'The instance id list of created ecs instance',
            Value: {
              'Fn::GetAtt': ['EcsInstanceGroup', 'InstanceIds'],
            },
          },
          ZoneIds: {
            Description: 'The instance zone id list of created ecs instance',
            Value: {
              'Fn::GetAtt': ['EcsInstanceGroup', 'ZoneIds'],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
