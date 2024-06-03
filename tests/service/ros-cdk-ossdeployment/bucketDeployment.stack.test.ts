import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert';
import * as ros from '@alicloud/ros-cdk-core';
import * as testStack from './bucketDeployment.stack';
import * as console from "console";

test('Deploy asset.', () => {
    const app = new ros.App();
    // WHEN
    const stack = new testStack.BucketDeploymentTest(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
        "Description": "Deploy file to OSS bucket from local/another bucket/data/json data.",
        "Metadata": {
            "ALIYUN::ROS::Interface": {
                "TemplateTags": [
                    "Create by ROS CDK"
                ]
            }
        },
        "ROSTemplateFormatVersion": "2015-09-01",
        "Resources": {
            "SampleDestBucket": {
                "Type": "ALIYUN::OSS::Bucket",
                "Properties": {
                    "BucketName": "sample-dest-bucket-name",
                    "AccessControl": "private",
                    "DeletionForce": false,
                    "EnableOssHdfsService": false,
                    "RedundancyType": "LRS"
                }
            },
            "FCRole[a-z0-9]{5}": {
                "Type": "ALIYUN::RAM::Role",
                "Properties": {
                    "AssumeRolePolicyDocument": {
                        "Version": "1",
                        "Statement": [
                            {
                                "Action": "sts:AssumeRole",
                                "Effect": "Allow",
                                "Principal": {
                                    "Service": [
                                        "fc.aliyuncs.com"
                                    ]
                                }
                            }
                        ]
                    },
                    "RoleName": "ros-cdk-oss-deployment-[a-z0-9]{5}",
                    "DeletionForce": false,
                    "IgnoreExisting": false,
                    "Policies": [
                        {
                            "PolicyName": "AliyunOSSFullAccess",
                            "PolicyDocument": {
                                "Version": "1",
                                "Statement": [
                                    {
                                        "Action": [
                                            "oss:*"
                                        ],
                                        "Resource": [
                                            "*"
                                        ],
                                        "Effect": "Allow"
                                    }
                                ]
                            }
                        },
                        {
                            "PolicyName": "AliyunLogFullAccess",
                            "PolicyDocument": {
                                "Version": "1",
                                "Statement": [
                                    {
                                        "Action": [
                                            "log:*"
                                        ],
                                        "Resource": [
                                            "*"
                                        ],
                                        "Effect": "Allow"
                                    },
                                    {
                                        "Condition": {
                                            "StringEquals": {
                                                "ram:ServiceName": [
                                                    "audit.log.aliyuncs.com",
                                                    "alert.log.aliyuncs.com",
                                                    "middlewarelens.log.aliyuncs.com",
                                                    "storagelens.log.aliyuncs.com",
                                                    "ai-lens.log.aliyuncs.com",
                                                    "securitylens.log.aliyuncs.com"
                                                ]
                                            }
                                        },
                                        "Action": [
                                            "ram:CreateServiceLinkedRole"
                                        ],
                                        "Resource": [
                                            "*"
                                        ],
                                        "Effect": "Allow"
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            "FCService[a-z0-9]{5}": {
                "Type": "ALIYUN::FC::Service",
                "Properties": {
                    "ServiceName": "ros-cdk-oss-deployment-[a-z0-9]{5}",
                    "DeletionForce": false,
                    "Description": "FC service for oss deployment by CDK",
                    "Role": {
                        "Fn::GetAtt": [
                            "FCRole[a-z0-9]{5}",
                            "Arn"
                        ]
                    }
                }
            },
            "FCFunction[a-z0-9]{5}": {
                "Type": "ALIYUN::FC::Function",
                "Properties": {
                    "FunctionName": "ros-cdk-oss-deployment-[a-z0-9]{5}",
                    "Handler": "index.handler",
                    "Runtime": "python3.10",
                    "ServiceName": {
                        "Fn::GetAtt": [
                            "FCService[a-z0-9]{5}",
                            "ServiceName"
                        ]
                    },
                    "CAPort": 9000,
                    "Code": {
                        "OssObjectName": "d1267fee9a752468352da8ab9841c4e275914526ce640eafc986b793522b4ca2.zip",
                        "OssBucketName": {
                            "Fn::Sub": "cdk-[a-z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}"
                        }
                    },
                    "MemorySize": 128,
                    "Timeout": 3
                }
            },
            "SampleFileDeployment": {
                "Type": "ALIYUN::ROS::CustomResource",
                "Properties": {
                    "ServiceToken": {
                        "Fn::GetAtt": [
                            "FCFunction[a-z0-9]{5}",
                            "ARN"
                        ]
                    },
                    "Timeout": 60,
                    "Parameters": {
                        "sources": [
                            {
                                "bucket": {
                                    "Fn::Sub": "cdk-[a-z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}"
                                },
                                "objectKey": "0faa88fdd715380ba8e64e21850afb73e8a57139d839f5ec4e8dde5a522c0445.txt",
                                "fileName": "sample-asset-file.txt"
                            },
                            {
                                "bucket": "source-bucket",
                                "objectKey": "sample-source-object-key"
                            },
                            {
                                "bucket": {
                                    "Fn::Sub": "cdk-[a-z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}"
                                },
                                "objectKey": "aee23bb24d9dab0e894e13edea254b0ab09ee66fe99da9d0d9f6f0aac8b21578.txt",
                                "fileName": "sample-data.txt"
                            },
                            {
                                "bucket": {
                                    "Fn::Sub": "cdk-[a-z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}"
                                },
                                "objectKey": "096c5e8ebc33697d899d58f1d62a22eda584d8452d81c500d226810a870a1397.json",
                                "fileName": "sample-map.json"
                            }
                        ],
                        "destinationBucket": {
                            "Fn::GetAtt": [
                                "SampleDestBucket",
                                "Name"
                            ]
                        },
                        "retainOnCreate": false
                    }
                }
            }
        }
    }, MatchStyle.REGEXP));
});