import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert';
import * as ros from '@alicloud/ros-cdk-core';
import * as testStack from './function.stack';

test('Test synth deploy fc function.', () => {
    const app = new ros.App();
    const stack = new testStack.FcDeployTest(app, 'MyTestStack');
    expectCDK(stack).to(
        matchTemplate(
            {
                "Description": "Deploy fc function codes through three ways.",
                "Metadata": {
                    "ALIYUN::ROS::Interface": {
                        "TemplateTags": [
                            "Create by ROS CDK"
                        ]
                    }
                },
                "ROSTemplateFormatVersion": "2015-09-01",
                "Resources": {
                    "FCRole": {
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
                            "RoleName": "ros-cdk-oss-deployment",
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
                    "SLSProject[a-zA-Z0-9]{5}": {
                        "Type": "ALIYUN::SLS::Project",
                        "Properties": {
                            "Name": "ros-cdk-oss-deployment-[a-zA-Z0-9]{5}",
                            "Description": "SLS project for oss deployment by CDK"
                        }
                    },
                    "SLSLogStore[a-zA-Z0-9]{5}": {
                        "Type": "ALIYUN::SLS::Logstore",
                        "Properties": {
                            "LogstoreName": "function-log",
                            "ProjectName": {
                                "Fn::GetAtt": [
                                    "SLSProject[a-zA-Z0-9]{5}",
                                    "Name"
                                ]
                            },
                            "AppendMeta": false,
                            "AutoSplit": false,
                            "EnableTracking": false,
                            "PreserveStorage": false,
                            "ShardCount": 2,
                            "TTL": 30
                        }
                    },
                    "SLSIndex[a-zA-Z0-9]{5}": {
                        "Type": "ALIYUN::SLS::Index",
                        "Properties": {
                            "FullTextIndex": {
                                "Enable": true
                            },
                            "LogstoreName": {
                                "Fn::GetAtt": [
                                    "SLSLogStore[a-zA-Z0-9]{5}",
                                    "LogstoreName"
                                ]
                            },
                            "ProjectName": {
                                "Fn::GetAtt": [
                                    "SLSProject[a-zA-Z0-9]{5}",
                                    "Name"
                                ]
                            },
                            "LogReduce": false
                        }
                    },
                    "FCService[a-zA-Z0-9]{5}": {
                        "Type": "ALIYUN::FC::Service",
                        "Properties": {
                            "ServiceName": "ros-cdk-oss-deployment-[a-zA-Z0-9]{5}",
                            "DeletionForce": false,
                            "Description": "FC service for oss deployment by CDK",
                            "LogConfig": {
                                "Project": {
                                    "Fn::GetAtt": [
                                        "SLSProject[a-zA-Z0-9]{5}",
                                        "Name"
                                    ]
                                },
                                "Logstore": {
                                    "Fn::GetAtt": [
                                        "SLSLogStore[a-zA-Z0-9]{5}",
                                        "LogstoreName"
                                    ]
                                },
                                "EnableRequestMetrics": true
                            },
                            "Role": {
                                "Fn::GetAtt": [
                                    "FCRole",
                                    "Arn"
                                ]
                            }
                        },
                        "DependsOn": [
                            "SLSIndex[a-zA-Z0-9]{5}"
                        ]
                    },
                    "FCFunction[a-zA-Z0-9]{5}": {
                        "Type": "ALIYUN::FC::Function",
                        "Properties": {
                            "FunctionName": "ros-cdk-oss-deployment-[a-zA-Z0-9]{5}",
                            "Handler": "index.handler",
                            "Runtime": "python3.10",
                            "ServiceName": {
                                "Fn::GetAtt": [
                                    "FCService[a-zA-Z0-9]{5}",
                                    "ServiceName"
                                ]
                            },
                            "CAPort": 9000,
                            "Code": {
                                "OssObjectName": "d1267fee9a752468352da8ab9841c4e275914526ce640eafc986b793522b4ca2.zip",
                                "OssBucketName": {
                                    "Fn::Sub": "cdk-[a-zA-Z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}"
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
                                    "FCFunction[a-zA-Z0-9]{5}",
                                    "ARN"
                                ]
                            },
                            "Timeout": 300,
                            "Parameters": {
                                "sources": [
                                    {
                                        "bucket": {
                                            "Fn::Sub": "cdk-[a-zA-Z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}"
                                        },
                                        "objectKey": "d1267fee9a752468352da8ab9841c4e275914526ce640eafc986b793522b4ca2.zip",
                                        "fileName": "code.zip"
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
                    },
                    "FCService": {
                        "Type": "ALIYUN::FC::Service",
                        "Properties": {
                            "ServiceName": "ros-cdk-oss-deployment",
                            "DeletionForce": false,
                            "Description": "FC service for oss deployment by CDK",
                            "Role": {
                                "Fn::GetAtt": [
                                    "FCRole",
                                    "Arn"
                                ]
                            }
                        },
                        "DependsOn": [
                            "SampleFileDeployment"
                        ]
                    },
                    "FCFunction1": {
                        "Type": "ALIYUN::FC::Function",
                        "Properties": {
                            "FunctionName": "ros-cdk-oss-deployment-1",
                            "Handler": "index.handler",
                            "Runtime": "python3.10",
                            "ServiceName": {
                                "Fn::GetAtt": [
                                    "FCService",
                                    "ServiceName"
                                ]
                            },
                            "CAPort": 9000,
                            "Code": {
                                "OssObjectName": "code.zip",
                                "OssBucketName": {
                                    "Fn::GetAtt": [
                                        "SampleDestBucket",
                                        "Name"
                                    ]
                                }
                            },
                            "MemorySize": 128,
                            "Timeout": 3
                        }
                    },
                    "FCFunction2": {
                        "Type": "ALIYUN::FC::Function",
                        "Properties": {
                            "FunctionName": "ros-cdk-oss-deployment-2",
                            "Handler": "index.handler",
                            "Runtime": "python3.10",
                            "ServiceName": {
                                "Fn::GetAtt": [
                                    "FCService",
                                    "ServiceName"
                                ]
                            },
                            "CAPort": 9000,
                            "Code": {
                                "OssObjectName": "d1267fee9a752468352da8ab9841c4e275914526ce640eafc986b793522b4ca2.zip",
                                "OssBucketName": {
                                    "Fn::Sub": "cdk-[a-zA-Z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}"
                                }
                            },
                            "MemorySize": 128,
                            "Timeout": 3
                        }
                    },
                    "FCFunction3": {
                        "Type": "ALIYUN::FC::Function",
                        "Properties": {
                            "FunctionName": "ros-cdk-oss-deployment-3",
                            "Handler": "index.handler",
                            "Runtime": "python3.10",
                            "ServiceName": {
                                "Fn::GetAtt": [
                                    "FCService",
                                    "ServiceName"
                                ]
                            },
                            "CAPort": 9000,
                            "Code": {
                                "SourceCode": "print(\"hello world\")"
                            },
                            "MemorySize": 128,
                            "Timeout": 3
                        }
                    }
                }
            }
            ,
            MatchStyle.REGEXP,
        ),
    );
});
