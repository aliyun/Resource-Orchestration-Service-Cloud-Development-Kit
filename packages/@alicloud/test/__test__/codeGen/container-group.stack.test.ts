import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert';
import * as ros from '@alicloud/ros-cdk-core';
import * as testStack from './container-group.stack';

test('Stack with container group.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.ContainerGroupTest(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          securityContextSysctl: {
            Type: 'Json',
            Description:
              'ECI Sysctl is valid for every container in ECI.\nCurrently only two Sysctl keyNames are supported:\nKernel.shm_rmid_forced\nKernel.msgmax',
          },
          memory: {
            Type: 'Number',
            Description: 'The containers that constitute the container group for initializing.',
          },
          initContainer: {
            Type: 'Json',
            Description: 'The containers that constitute the container group for initializing.',
          },
          cpu: {
            Type: 'Number',
            Description: 'CPU size',
          },
          eipInstanceId: {
            Type: 'String',
            Description: 'Elastic IP ID',
          },
          containerGroupName: {
            Type: 'String',
            Description:
              'The name of the container group. \nThe length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.',
            MaxLength: 128,
            MinLength: 2,
          },
          container: {
            Type: 'Json',
            Description: 'The containers that constitute the container group.',
          },
          imageSnapshotId: {
            Type: 'String',
            Description: 'Image cache ID or snapshot ID.',
          },
          dnsConfig: {
            Type: 'Json',
            Description: 'The information about DNS configurations.',
          },
          autoMatchImageCache: {
            Type: 'Boolean',
            AllowedValues: [true, false],
            Description: 'Specifies whether to automatically match the image cache.',
          },
          ipv6AddressCount: {
            Type: 'Number',
            Description: 'The number of IPv6 addresses.',
          },
          imageRegistryCredential: {
            Type: 'Json',
            Description:
              'The information that you need to log on to the container image repository, including the server address, username, and password.',
            MaxLength: 10,
          },
          spotPriceLimit: {
            Type: 'Number',
            Description:
              'Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.',
          },
          instanceType: {
            Type: 'String',
            Description: 'The type of the ECS instance.',
          },
          spotStrategy: {
            Type: 'String',
            AllowedValues: ['NoSpot', 'SpotWithPriceLimit', 'SpotAsPriceGo'],
            Description:
              'Instance preemption strategy.\nRanges:\nNoSpot (default): normal pay-as-you-go instances.\nSpotWithPriceLimit: Preemptive instance that sets a cap price.\nSpotAsPriceGo: The system automatically bids, following the current market actual price.',
          },
          activeDeadlineSeconds: {
            Type: 'Number',
            Description: 'The validity period in seconds.',
          },
          hostAliase: {
            Type: 'Json',
            Description: 'Customize the hostname mapping of a container inside the pod',
          },
          zoneId: {
            Type: 'String',
            Description:
              'The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.',
          },
          terminationGracePeriodSeconds: {
            Type: 'Number',
            Description: 'The buffer time for the program to handle operations before it is stopped.',
          },
          switchId: {
            Type: 'String',
            Description: 'The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.',
          },
          securityGroupId: {
            Type: 'String',
            Description:
              'The ID of the security group to which the instance belongs. Instances in the same security group can access one another.',
          },
          slsEnable: {
            Type: 'Boolean',
            AllowedValues: [true, false],
            Description: 'Enable user log collection. The default is False.',
          },
          restartPolicy: {
            Type: 'String',
            AllowedValues: ['Always', 'OnFailure', 'Never'],
            Description: 'The policy for restarting the instance. Default value: Always.',
          },
          volume: {
            Type: 'Json',
            Description: 'The data volume. You can specify a maximum of 20 data volumes.',
            MaxLength: 20,
          },
        },
        Resources: {
          containerGroup: {
            Type: 'ALIYUN::ECI::ContainerGroup',
            Properties: {
              Container: {
                Ref: 'container',
              },
              ContainerGroupName: {
                Ref: 'containerGroupName',
              },
              SecurityGroupId: {
                Ref: 'securityGroupId',
              },
              VSwitchId: {
                Ref: 'switchId',
              },
              ActiveDeadlineSeconds: {
                Ref: 'activeDeadlineSeconds',
              },
              AutoMatchImageCache: {
                Ref: 'autoMatchImageCache',
              },
              Cpu: {
                Ref: 'cpu',
              },
              DnsConfig: {
                Ref: 'dnsConfig',
              },
              EipInstanceId: {
                Ref: 'eipInstanceId',
              },
              HostAliase: {
                Ref: 'hostAliase',
              },
              ImageRegistryCredential: {
                Ref: 'imageRegistryCredential',
              },
              ImageSnapshotId: {
                Ref: 'imageSnapshotId',
              },
              InitContainer: {
                Ref: 'initContainer',
              },
              InstanceType: {
                Ref: 'instanceType',
              },
              Ipv6AddressCount: {
                Ref: 'ipv6AddressCount',
              },
              Memory: {
                Ref: 'memory',
              },
              RestartPolicy: {
                Ref: 'restartPolicy',
              },
              SecurityContextSysctl: {
                Ref: 'securityContextSysctl',
              },
              SlsEnable: {
                Ref: 'slsEnable',
              },
              SpotPriceLimit: {
                Ref: 'spotPriceLimit',
              },
              SpotStrategy: {
                Ref: 'spotStrategy',
              },
              TerminationGracePeriodSeconds: {
                Ref: 'terminationGracePeriodSeconds',
              },
              Volume: {
                Ref: 'volume',
              },
              ZoneId: {
                Ref: 'zoneId',
              },
            },
          },
        },
        Outputs: {
          internetIp: {
            Description: 'Internet IP.',
            Value: {
              'Fn::GetAtt': ['containerGroup', 'InternetIp'],
            },
          },
          zoneIdOutput: {
            Description:
              'The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.',
            Value: {
              'Fn::GetAtt': ['containerGroup', 'ZoneId'],
            },
          },
          securityGroupIdOutput: {
            Description:
              'The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.',
            Value: {
              'Fn::GetAtt': ['containerGroup', 'SecurityGroupId'],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack with container group which can be deployed in ros console.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.ContainerGroupDeployTest(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          ContainerName: {
            Type: 'String',
            Description: 'The name of the Container.',
            Default: 'ros-test-tt',
          },
          ContainerImage: {
            Type: 'String',
            Description: 'The name of the Image.',
            Default: 'busybox',
          },
          ContainerGroupName: {
            Type: 'String',
            Description: 'The name of the ContainerGroup.',
            Default: 'ros-test-tt',
          },
          RestartPolicy: {
            Type: 'String',
            Description: 'The policy for restarting the instance. Default value: Always.',
            AllowedValues: ['Always', 'OnFailure', 'Never'],
            Default: 'Always',
          },
          VSwitchName: {
            Type: 'String',
            Default: 'ros-test-tt',
          },
          VpcName: {
            Type: 'String',
            Default: 'ros-test-tt',
          },
          SlsEnable: {
            Type: 'Boolean',
            Description: 'Enable user log collection. The default is false.',
            AllowedValues: [true, false],
            Default: false,
          },
        },
        Resources: {
          VPC: {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              VpcName: {
                Ref: 'VpcName',
              },
              CidrBlock: '192.168.0.0/16',
              EnableIpv6: false,
            },
          },
          VSwitch: {
            DependsOn: ['VPC'],
            Type: 'ALIYUN::ECS::VSwitch',
            Properties: {
              VpcId: {
                'Fn::GetAtt': ['VPC', 'VpcId'],
              },
              ZoneId: {
                'Fn::Select': [
                  '0',
                  {
                    'Fn::GetAZs': {
                      Ref: 'ALIYUN::Region',
                    },
                  },
                ],
              },
              VSwitchName: {
                Ref: 'VSwitchName',
              },
              CidrBlock: '192.168.10.0/24',
            },
          },
          SG: {
            DependsOn: ['VPC'],
            Type: 'ALIYUN::ECS::SecurityGroup',
            Properties: {
              VpcId: {
                'Fn::GetAtt': ['VPC', 'VpcId'],
              },
            },
          },
          ContainerGroup: {
            Type: 'ALIYUN::ECI::ContainerGroup',
            Properties: {
              Container: [
                {
                  Name: {
                    Ref: 'ContainerName',
                  },
                  Image: {
                    Ref: 'ContainerImage',
                  },
                  Cpu: 2,
                  Memory: 4,
                  Port: [
                    {
                      Port: 8080,
                      Protocol: 'TCP',
                    },
                    {
                      Port: 8888,
                      Protocol: 'TCP',
                    },
                  ],
                },
              ],
              SecurityGroupId: {
                'Fn::GetAtt': ['SG', 'SecurityGroupId'],
              },
              ContainerGroupName: {
                Ref: 'ContainerGroupName',
              },
              VSwitchId: {
                'Fn::GetAtt': ['VSwitch', 'VSwitchId'],
              },
              RestartPolicy: {
                Ref: 'RestartPolicy',
              },
              SlsEnable: {
                Ref: 'SlsEnable',
              },
              Cpu: 2,
              Memory: 4,
            },
          },
        },
        Outputs: {
          ContainerGroupId: {
            Value: {
              'Fn::GetAtt': ['ContainerGroup', 'ContainerGroupId'],
            },
          },
          ContainerGroupNameOutput: {
            Value: {
              'Fn::GetAtt': ['ContainerGroup', 'ContainerGroupName'],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
