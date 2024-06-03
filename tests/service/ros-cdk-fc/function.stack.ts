import * as ros from '@alicloud/ros-cdk-core';
import * as fc from '@alicloud/ros-cdk-fc';
import * as ram from "@alicloud/ros-cdk-ram";
import * as oss from "@alicloud/ros-cdk-oss";
import * as oss_deployment from "@alicloud/ros-cdk-ossdeployment";

export class FcDeployTest extends ros.Stack {
    constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
        super(scope, id, props);
        new ros.RosInfo(
            this,
            ros.RosInfo.description,
            'Deploy fc function codes through three ways.',
        );

        const role = new ram.Role(this, `FCRole`, {
            roleName: `ros-cdk-oss-deployment`,
            assumeRolePolicyDocument: {
                version: '1',
                statement: [
                    {
                        action: 'sts:AssumeRole',
                        effect: 'Allow',
                        principal: {
                            service: [
                                'fc.aliyuncs.com'
                            ]
                        }
                    }
                ],
            },
            policies: [
                {
                    policyName: 'AliyunOSSFullAccess',
                    policyDocument: {
                        version: '1',
                        statement: [
                            {
                                action: [
                                    'oss:*'
                                ],
                                effect: 'Allow',
                                resource: ['*']
                            }
                        ]
                    }
                },
                {
                    policyName: 'AliyunLogFullAccess',
                    policyDocument: {
                        version: '1',
                        statement: [
                            {
                                action: [
                                    'log:*'
                                ],
                                effect: 'Allow',
                                resource: ['*']
                            },
                            {
                                action: ['ram:CreateServiceLinkedRole'],
                                resource: ['*'],
                                effect: 'Allow',
                                condition: {
                                    'StringEquals': {
                                        'ram:ServiceName': [
                                            'audit.log.aliyuncs.com',
                                            'alert.log.aliyuncs.com',
                                            'middlewarelens.log.aliyuncs.com',
                                            'storagelens.log.aliyuncs.com',
                                            'ai-lens.log.aliyuncs.com',
                                            'securitylens.log.aliyuncs.com'
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        });

        const destBucket = new oss.Bucket(this, 'SampleDestBucket', {
            bucketName: `sample-dest-bucket-name`,
        });

        const bucketDeployment = new oss_deployment.BucketDeployment(this, 'SampleFileDeployment', {
            sources: [
                oss_deployment.Source.asset('../packages/@alicloud/extension/ros-cdk-ossdeployment/lib/codes/code.zip')
            ],
            destinationBucket: destBucket,
            timeout: 300,
            logMonitoring: true,
            roleArn: role.attrArn,
            retainOnCreate: false
        });

        const fcService = new fc.Service(this, `FCService`, {
            serviceName: `ros-cdk-oss-deployment`,
            description: 'FC service for oss deployment by CDK',
            role:  role.attrArn,
        });
        fcService.addDependency(bucketDeployment);

        const fcFunction1 = new fc.Function(this, `FCFunction1`, {
            functionName: `ros-cdk-oss-deployment-1`,
            serviceName: fcService.attrServiceName,
            runtime: 'python3.10',
            handler: 'index.handler',
        });

        fcFunction1.codeFromBucket(destBucket, 'code.zip')

        const fcFunction2 = new fc.Function(this, `FCFunction2`, {
            functionName: `ros-cdk-oss-deployment-2`,
            serviceName: fcService.attrServiceName,
            runtime: 'python3.10',
            handler: 'index.handler',
        });

        fcFunction2.codeFromAsset('../packages/@alicloud/extension/ros-cdk-ossdeployment/lib/codes/code.zip')

        const fcFunction3 = new fc.Function(this, `FCFunction3`, {
            functionName: `ros-cdk-oss-deployment-3`,
            serviceName: fcService.attrServiceName,
            runtime: 'python3.10',
            handler: 'index.handler',
        });

        fcFunction3.codeFromInline('print("hello world")')
    }
}
