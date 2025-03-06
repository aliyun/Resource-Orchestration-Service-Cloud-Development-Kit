import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert';
import * as ros from '@alicloud/ros-cdk-core';
import * as testStack from './instance.stack';
import {InstanceGrantTest} from "./instance.stack";

test('Deploy instance grant.', () => {
    const app = new ros.App();
    // WHEN
    const stack = new testStack.InstanceGrantTest(app, 'MyTestStack');
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
            "Instance": {
                "Type": "ALIYUN::MONGODB::Instance",
                "Properties": {
                    "DBInstanceClass": "MongoDB_4_0_Large",
                    "DBInstanceStorage": 20,
                    "ChargeType": "PostPaid",
                    "EngineVersion": "7.0",
                    "Period": 1,
                    "StorageEngine": "WiredTiger"
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
                                    "dds:DescribeActiveOperationTasks",
                                    "dds:DescribeHistoryTasks",
                                    "dds:DescribeAvailabilityZones",
                                    "dds:DescribeDBInstanceSwitchLog",
                                    "dds:DescribeGlobalSecurityIPGroup",
                                    "dds:DescribeHistoryTasksStat",
                                    "dds:DescribeUserEncryptionKeyList",
                                    "dds:DescribeMongoDBLogConfig",
                                    "dds:DescribeAccounts",
                                    "dds:CheckRecoveryCondition",
                                    "dds:DescribeParameters",
                                    "dds:DescribeActiveOperationTaskType",
                                    "dds:DescribeSecurityIps",
                                    "dds:DescribeRunningLogRecords",
                                    "dds:DescribeAuditRecords",
                                    "dds:DescribeSlowLogRecords",
                                    "dds:DescribeDBInstances",
                                    "dds:DescribeBackupDBs",
                                    "dds:DescribeReplicaSetRole",
                                    "dds:DescribeAvailableResource",
                                    "dds:DescribeBackupStorage",
                                    "dds:DescribeDBInstanceTDEInfo",
                                    "dds:DescribeTags",
                                    "dds:CheckCloudResourceAuthorized",
                                    "dds:DescribeDBInstanceMonitor",
                                    "dds:DescribeClusterBackups",
                                    "dds:DescribeActiveOperationTaskCount",
                                    "dds:DescribeDBInstanceEncryptionKey",
                                    "dds:DescribeRenewalPrice",
                                    "dds:DescribeRoleZoneInfo",
                                    "dds:DescribeKmsKeys",
                                    "dds:DescribeErrorLogRecords",
                                    "dds:DescribeGlobalSecurityIPGroupRelation",
                                    "dds:DescribeDBInstancePerformance",
                                    "dds:DescribeBackupPolicy",
                                    "dds:DescribeParameterModificationHistory",
                                    "dds:DescribeInstanceAutoRenewalAttribute",
                                    "dds:DescribeDBInstanceSSL",
                                    "dds:DescribeAvailableEngineVersion",
                                    "dds:DescribeBackups",
                                    "dds:DescribeAuditPolicy",
                                    "dds:DescribeAuditLogFilter",
                                    "dds:DescribeSecurityGroupConfiguration",
                                    "dds:DescribePrice",
                                    "dds:ListTagResources",
                                    "dds:DescribeDBInstancesOverview",
                                    "dds:DescribeClusterRecoverTime",
                                    "dds:DescribeShardingNetworkAddress",
                                    "dds:DescribeDBInstanceAttribute",
                                    "dds:CreateAccount",
                                    "dds:CreateShardingDBInstance",
                                    "dds:CreateNodeBatch",
                                    "dds:CreateGlobalSecurityIPGroup",
                                    "dds:CreateBackup",
                                    "dds:CreateDBInstance",
                                    "dds:CreateNode",
                                    "dds:ModifyResourceGroup",
                                    "dds:ReleaseNodePrivateNetworkAddress",
                                    "dds:AllocateNodePrivateNetworkAddress",
                                    "dds:ModifyDBInstanceMonitor",
                                    "dds:ModifyTaskInfo",
                                    "dds:ReleasePublicNetworkAddress",
                                    "dds:ModifyDBInstanceNetworkType",
                                    "dds:RenewDBInstance",
                                    "dds:ModifyNodeSpec",
                                    "dds:UpgradeDBInstanceEngineVersion",
                                    "dds:ModifySecurityGroupConfiguration",
                                    "dds:ModifyGlobalSecurityIPGroupRelation",
                                    "dds:AllocatePublicNetworkAddress",
                                    "dds:ModifyDBInstanceMaintainTime",
                                    "dds:ModifyNodeSpecBatch",
                                    "dds:TransformToPrePaid",
                                    "dds:ModifySecurityIps",
                                    "dds:RestartNode",
                                    "dds:MigrateToOtherZone",
                                    "dds:ModifyAuditLogFilter",
                                    "dds:ResetAccountPassword",
                                    "dds:ModifyDBInstanceConnectionString",
                                    "dds:ModifyAccountDescription",
                                    "dds:TagResources",
                                    "dds:ModifyDBInstanceDescription",
                                    "dds:ModifyDBInstanceDiskType",
                                    "dds:ModifyDBInstanceSpec",
                                    "dds:ModifyBackupPolicy",
                                    "dds:ModifyDBInstanceSSL",
                                    "dds:TransformInstanceChargeType",
                                    "dds:ModifyDBInstanceTDE",
                                    "dds:RestartDBInstance",
                                    "dds:ModifyGlobalSecurityIPGroup",
                                    "dds:ModifyDBInstanceNetExpireTime",
                                    "dds:ModifyGlobalSecurityIPGroupName",
                                    "dds:UntagResources",
                                    "dds:ModifyInstanceAutoRenewalAttribute",
                                    "dds:MigrateAvailableZone",
                                    "dds:ModifyInstanceVpcAuthMode",
                                    "dds:UpgradeDBInstanceKernelVersion",
                                    "dds:ModifyAuditPolicy",
                                    "dds:ModifyParameters",
                                    "dds:DeleteGlobalSecurityIPGroup",
                                    "dds:DestroyInstance",
                                    "dds:DeleteDBInstance",
                                    "dds:DeleteNode"
                                ],
                                "Resource": [
                                    {
                                        "Fn::GetAtt": [
                                            "Instance",
                                            "Arn"
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
                                    "dds:DescribeActiveOperationTasks",
                                    "dds:DescribeHistoryTasks",
                                    "dds:DescribeAvailabilityZones",
                                    "dds:DescribeDBInstanceSwitchLog",
                                    "dds:DescribeGlobalSecurityIPGroup",
                                    "dds:DescribeHistoryTasksStat",
                                    "dds:DescribeUserEncryptionKeyList",
                                    "dds:DescribeMongoDBLogConfig",
                                    "dds:DescribeAccounts",
                                    "dds:CheckRecoveryCondition",
                                    "dds:DescribeParameters",
                                    "dds:DescribeActiveOperationTaskType",
                                    "dds:DescribeSecurityIps",
                                    "dds:DescribeRunningLogRecords",
                                    "dds:DescribeAuditRecords",
                                    "dds:DescribeSlowLogRecords",
                                    "dds:DescribeDBInstances",
                                    "dds:DescribeBackupDBs",
                                    "dds:DescribeReplicaSetRole",
                                    "dds:DescribeAvailableResource",
                                    "dds:DescribeBackupStorage",
                                    "dds:DescribeDBInstanceTDEInfo",
                                    "dds:DescribeTags",
                                    "dds:CheckCloudResourceAuthorized",
                                    "dds:DescribeDBInstanceMonitor",
                                    "dds:DescribeClusterBackups",
                                    "dds:DescribeActiveOperationTaskCount",
                                    "dds:DescribeDBInstanceEncryptionKey",
                                    "dds:DescribeRenewalPrice",
                                    "dds:DescribeRoleZoneInfo",
                                    "dds:DescribeKmsKeys",
                                    "dds:DescribeErrorLogRecords",
                                    "dds:DescribeGlobalSecurityIPGroupRelation",
                                    "dds:DescribeDBInstancePerformance",
                                    "dds:DescribeBackupPolicy",
                                    "dds:DescribeParameterModificationHistory",
                                    "dds:DescribeInstanceAutoRenewalAttribute",
                                    "dds:DescribeDBInstanceSSL",
                                    "dds:DescribeAvailableEngineVersion",
                                    "dds:DescribeBackups",
                                    "dds:DescribeAuditPolicy",
                                    "dds:DescribeAuditLogFilter",
                                    "dds:DescribeSecurityGroupConfiguration",
                                    "dds:DescribePrice",
                                    "dds:ListTagResources",
                                    "dds:DescribeDBInstancesOverview",
                                    "dds:DescribeClusterRecoverTime",
                                    "dds:DescribeShardingNetworkAddress",
                                    "dds:DescribeDBInstanceAttribute"
                                ],
                                "Resource": [
                                    {
                                        "Fn::GetAtt": [
                                            "Instance",
                                            "Arn"
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
                                    "dds:DescribeActiveOperationTasks",
                                    "dds:DescribeHistoryTasks",
                                    "dds:DescribeAvailabilityZones",
                                    "dds:DescribeDBInstanceSwitchLog",
                                    "dds:DescribeGlobalSecurityIPGroup",
                                    "dds:DescribeHistoryTasksStat"
                                ],
                                "Resource": [
                                    {
                                        "Fn::GetAtt": [
                                            "Instance",
                                            "Arn"
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