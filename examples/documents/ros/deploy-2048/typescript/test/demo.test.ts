import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert';
import * as ros from '@alicloud/ros-cdk-core';
import * as Demo from '../lib/demo-stack';

test('Stack with version.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new Demo.DemoStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
        {
            "Description": "Deploy 2048 game through ROS CDK.",
            "Metadata": {
                "ALIYUN::ROS::Interface": {
                    "TemplateTags": [
                        "Create by ROS CDK"
                    ]
                }
            },
            "ROSTemplateFormatVersion": "2015-09-01",
            "Parameters": {
                "ZoneId": {
                    "Type": "String"
                }
            },
            "Resources": {
                "Vpc": {
                    "Type": "ALIYUN::ECS::VPC",
                    "Properties": {
                        "CidrBlock": "192.168.0.0/16",
                        "EnableIpv6": false
                    }
                },
                "SecurityGroup": {
                    "Type": "ALIYUN::ECS::SecurityGroup",
                    "Properties": {
                        "VpcId": {
                            "Ref": "Vpc"
                        }
                    }
                },
                "VSwitch": {
                    "Type": "ALIYUN::ECS::VSwitch",
                    "Properties": {
                        "CidrBlock": "192.168.0.0/24",
                        "VpcId": {
                            "Ref": "Vpc"
                        },
                        "ZoneId": {
                            "Ref": "ZoneId"
                        }
                    }
                },
                "Instance": {
                    "Type": "ALIYUN::ECS::Instance",
                    "Properties": {
                        "InstanceType": "ecs.c6e.large",
                        "AllocatePublicIP": true,
                        "AutoRenew": "False",
                        "AutoRenewPeriod": 1,
                        "ImageId": "centos_7_8",
                        "InstanceChargeType": "PostPaid",
                        "InternetChargeType": "PayByTraffic",
                        "InternetMaxBandwidthOut": 1,
                        "IoOptimized": "optimized",
                        "Period": 1,
                        "PeriodUnit": "Month",
                        "SecurityGroupId": {
                            "Ref": "SecurityGroup"
                        },
                        "SpotInterruptionBehavior": "Terminate",
                        "SystemDiskCategory": "cloud_essd",
                        "VpcId": {
                            "Ref": "Vpc"
                        },
                        "VSwitchId": {
                            "Ref": "VSwitch"
                        },
                        "ZoneId": {
                            "Ref": "ZoneId"
                        }
                    }
                },
                "SecurityGroupIngress": {
                    "Type": "ALIYUN::ECS::SecurityGroupIngress",
                    "Properties": {
                        "IpProtocol": "tcp",
                        "PortRange": "80/80",
                        "NicType": "intranet",
                        "Priority": 1,
                        "SecurityGroupId": {
                            "Ref": "SecurityGroup"
                        },
                        "SourceCidrIp": "0.0.0.0/0"
                    }
                },
                "RunCommand": {
                    "Type": "ALIYUN::ECS::RunCommand",
                    "Properties": {
                        "CommandContent": "yum install -y httpd wget\nsystemctl start httpd\nwget 'https://computenest-artifacts-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/1853370294850618/cn-beijing/1697533575326/2048.tgz' -O 2048.tgz\ntar xvf 2048.tgz\nmv 2048/* /var/www/html && rm -rf 2048",
                        "InstanceIds": [
                            {
                                "Ref": "Instance"
                            }
                        ],
                        "Type": "RunShellScript",
                        "Sync": true,
                        "Timeout": 3600
                    },
                    "DependsOn": [
                        "SecurityGroupIngress"
                    ]
                }
            },
            "Outputs": {
                "Url": {
                    "Value": {
                        "Fn::Join": [
                            "",
                            [
                                "http://",
                                {
                                    "Fn::GetAtt": [
                                        "Instance",
                                        "PublicIp"
                                    ]
                                },
                                ":80"
                            ]
                        ]
                    }
                }
            }
        },
      MatchStyle.EXACT,
    ),
  );
});
