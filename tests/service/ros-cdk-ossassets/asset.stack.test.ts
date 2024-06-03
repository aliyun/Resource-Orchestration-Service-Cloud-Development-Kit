import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert';
import * as ros from '@alicloud/ros-cdk-core';
import * as testStack from './asset.stack';

test('Test synth asset.', () => {
    const app = new ros.App();
    const stack = new testStack.AssetTest(app, 'MyTestStack');
    expectCDK(stack).to(
        matchTemplate(
            {
                "Description": "Create a file asset and a directory asset.",
                "Metadata": {
                    "ALIYUN::ROS::Interface": {
                        "TemplateTags": [
                            "Create by ROS CDK"
                        ]
                    }
                },
                "ROSTemplateFormatVersion": "2015-09-01",
                "Resources": {
                    "FCService": {
                        "Type": "ALIYUN::FC::Service",
                        "Properties": {
                            "ServiceName": "ros-cdk-oss-deployment",
                            "DeletionForce": false,
                            "Description": "FC service for oss deployment by CDK"
                        }
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
                            "Code": {
                                "OssObjectName": "11b2ee54acc1b9ac117b8432c2f590caf9fcec4905f96ea39350a8c35947921d.zip",
                                "OssBucketName": {
                                    "Fn::Sub": "cdk-[a-zA-Z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}"
                                }
                            }
                        }
                    }
                },
                "Outputs": {
                    "FileAssetBucketName": {
                        "Value": {
                            "Fn::Sub": "cdk-[a-zA-Z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}"
                        }
                    },
                    "FileAssetObjectKey": {
                        "Value": "0faa88fdd715380ba8e64e21850afb73e8a57139d839f5ec4e8dde5a522c0445.txt"
                    },
                    "FileAssetHttpUrl": {
                        "Value": "https:\\/\\/cdk-[a-zA-Z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}\\.oss-\\$\\{ALIYUN::Region\\}\\.aliyuncs\\.com\\/0faa88fdd715380ba8e64e21850afb73e8a57139d839f5ec4e8dde5a522c0445\\.txt"
                    },
                    "DirectoryAssetBucketName": {
                        "Value": {
                            "Fn::Sub": "cdk-[a-zA-Z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}"
                        }
                    },
                    "DirectoryAssetObjectKey": {
                        "Value": "11b2ee54acc1b9ac117b8432c2f590caf9fcec4905f96ea39350a8c35947921d.zip"
                    },
                    "DirectoryAssetHttpUrl": {
                        "Value": "https:\\/\\/cdk-[a-zA-Z0-9]{9}-assets-\\$\\{ALIYUN::Region\\}\\.oss-\\$\\{ALIYUN::Region\\}\\.aliyuncs\\.com\\/11b2ee54acc1b9ac117b8432c2f590caf9fcec4905f96ea39350a8c35947921d\\.zip"
                    }
                }
            },
            MatchStyle.REGEXP,
        ),
    );
});
