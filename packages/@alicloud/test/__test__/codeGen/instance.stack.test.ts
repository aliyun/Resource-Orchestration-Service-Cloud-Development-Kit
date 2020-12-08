import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
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
          instance: {
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
              InternetMaxBandwidthIn: 200,
              InternetMaxBandwidthOut: 1,
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
