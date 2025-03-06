import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert';
import * as ros from '@alicloud/ros-cdk-core';
import * as testStack from './bucket.stack';
import {BucketGrantTest} from "./bucket.stack";

test('Deploy bucket grant.', () => {
    const app = new ros.App();
    // WHEN
    const stack = new testStack.BucketGrantTest(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
        "Metadata": {
            "ALIYUN::ROS::Interface": {
                "TemplateTags": [
                    "Create by ROS CDK"
                ]
            }
        },
        "ROSTemplateFormatVersion": "2015-09-01",
        "Resources": {
            "Bucket": {
                "Type": "ALIYUN::OSS::Bucket",
                "Properties": {
                    "BucketName": "test-bucket",
                    "AccessControl": "private",
                    "DeletionForce": false,
                    "EnableOssHdfsService": false,
                    "RedundancyType": "LRS"
                }
            },
            "Role": {
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
                                        "ecs.aliyuncs.com"
                                    ]
                                }
                            }
                        ]
                    },
                    "RoleName": "test-role",
                    "DeletionForce": false,
                    "IgnoreExisting": false
                }
            },
            "Policy[a-z0-9]{5}": {
                "Type": "ALIYUN::RAM::ManagedPolicy",
                "Properties": {
                    "PolicyName": "Policy[a-z0-9]{5}",
                    "IgnoreExisting": false,
                    "PolicyDocument": {
                        "Version": "1",
                        "Statement": [
                            {
                                "Action": [
                                    "oss:GetObject",
                                    "oss:PutObject",
                                    "oss:GetObjectAcl",
                                    "oss:PutObjectAcl",
                                    "oss:AbortMultipartUpload",
                                    "oss:ListParts",
                                    "oss:RestoreObject",
                                    "oss:GetVodPlaylist",
                                    "oss:PostVodPlaylist",
                                    "oss:PublishRtmpStream",
                                    "oss:ListObjectVersions",
                                    "oss:GetObjectVersion",
                                    "oss:GetObjectVersionAcl",
                                    "oss:RestoreObjectVersion"
                                ],
                                "Resource": [
                                    {
                                        "Fn::GetAtt": [
                                            "Bucket",
                                            "Arn"
                                        ]
                                    },
                                    {
                                        "Fn::Join": [
                                            "",
                                            [
                                                {
                                                    "Fn::GetAtt": [
                                                        "Bucket",
                                                        "Arn"
                                                    ]
                                                },
                                                "/*"
                                            ]
                                        ]
                                    }
                                ],
                                "Effect": "Allow"
                            }
                        ]
                    },
                    "Roles": [
                        {
                            "Ref": "Role"
                        }
                    ]
                }
            },
            "User": {
                "Type": "ALIYUN::RAM::User",
                "Properties": {
                    "UserName": "test-user",
                    "DeletionForce": false
                }
            },
            "Policy[a-z0-9]{5}A?": {
                "Type": "ALIYUN::RAM::ManagedPolicy",
                "Properties": {
                    "PolicyName": "Policy[a-z0-9]{5}A?",
                    "IgnoreExisting": false,
                    "PolicyDocument": {
                        "Version": "1",
                        "Statement": [
                            {
                                "Action": [
                                    "oss:GetObject",
                                    "oss:GetObjectAcl",
                                    "oss:GetObjectVersion",
                                    "oss:GetObjectVersionAcl",
                                    "oss:ListObjects",
                                    "oss:ListObjectVersions"
                                ],
                                "Resource": [
                                    {
                                        "Fn::GetAtt": [
                                            "Bucket",
                                            "Arn"
                                        ]
                                    },
                                    {
                                        "Fn::Join": [
                                            "",
                                            [
                                                {
                                                    "Fn::GetAtt": [
                                                        "Bucket",
                                                        "Arn"
                                                    ]
                                                },
                                                "/*"
                                            ]
                                        ]
                                    }
                                ],
                                "Effect": "Allow"
                            }
                        ]
                    },
                    "Users": [
                        {
                            "Ref": "User"
                        }
                    ]
                }
            },
            "Group": {
                "Type": "ALIYUN::RAM::Group",
                "Properties": {
                    "GroupName": "test-group",
                    "DeletionForce": false,
                    "IgnoreExisting": false
                }
            },
            "Policy[a-z0-9]{5}B?": {
                "Type": "ALIYUN::RAM::ManagedPolicy",
                "Properties": {
                    "PolicyName": "Policy[a-z0-9]{5}B?",
                    "Groups": [
                        {
                            "Ref": "Group"
                        }
                    ],
                    "IgnoreExisting": false,
                    "PolicyDocument": {
                        "Version": "1",
                        "Statement": [
                            {
                                "Action": [
                                    "oss:ListObjects",
                                    "oss:ListObjectVersions"
                                ],
                                "Resource": [
                                    {
                                        "Fn::GetAtt": [
                                            "Bucket",
                                            "Arn"
                                        ]
                                    },
                                    {
                                        "Fn::Join": [
                                            "",
                                            [
                                                {
                                                    "Fn::GetAtt": [
                                                        "Bucket",
                                                        "Arn"
                                                    ]
                                                },
                                                "/*"
                                            ]
                                        ]
                                    }
                                ],
                                "Effect": "Allow"
                            }
                        ]
                    }
                }
            }
        }
    }, MatchStyle.REGEXP));
});