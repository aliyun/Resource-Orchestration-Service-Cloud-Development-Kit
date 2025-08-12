import * as ros from '@alicloud/ros-cdk-core';
import { ISource, SourceConfig } from './source.cdk';
import { RosCustomResource } from "@alicloud/ros-cdk-ros";
import { Service, Function } from "@alicloud/ros-cdk-fc";
import { Role } from "@alicloud/ros-cdk-ram";
import { Asset } from "@alicloud/ros-cdk-ossassets";
import { Bucket } from "@alicloud/ros-cdk-oss";
import { Logstore, Project, Index } from "@alicloud/ros-cdk-sls";
import * as Path from "path";

export interface BucketDeploymentProps {
    /**
     * The sources from which to deploy the contents of this bucket.
     */
    readonly sources: ISource[];

    /**
     * The OSS bucket to sync the contents of the zip file to.
     */
    readonly destinationBucket: string | ros.IResolvable | Bucket;

    /**
     * The ARN of the execution role associated with this function
     *
     * @default -  A role is automatically created
     */
    readonly roleArn?: string | ros.IResolvable;

    /**
     * The timeout period in seconds for the function to run.
     *
     * @default - 60
     */
    readonly timeout?: number;

    /**
     * Whether log monitoring is enabled.
     * Enabling log monitoring allows you to record the details of your deployment,
     * which makes it easier to troubleshoot when something goes wrong.
     *
     * Enabling logging monitoring incurs an additional logging service fee.
     *
     * @default - false
     */
    readonly logMonitoring?: boolean;

    /**
     * If this is set to false, the bucket temporarily storing the asset or data will be deleted
     * after the asset or data is deployed to the destination bucket.
     *
     * Otherwise, the temporary bucket will be deleted when the stack is destroyed.
     *
     * @default - false
     */
    readonly retainOnCreate?: boolean
}

/**
 * `BucketDeployment` populates an OSS bucket with the contents of .zip files from
 * other OSS buckets or from local disk
 */
export class BucketDeployment extends ros.Resource {
    private readonly destinationBucket: string | ros.IResolvable;
    private readonly sources: SourceConfig[];

    public readonly handlerRoleArn: string | ros.IResolvable;

    /**
     * Attribute fcService: FC service to use to forward content to the destination bucket.
     */
    public readonly fcService: Service;

    /**
     * Attribute fcFunction: FC function to use to forward content to the destination bucket.
     */
    public readonly fcFunction: Function;

    /**
     * Attribute cr: Custom resource to trigger the bucket deployment.
     */
    public readonly cr: RosCustomResource;

    constructor(scope: ros.Construct, id: string, props: BucketDeploymentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        const stack = ros.Stack.of(this);
        if (props.destinationBucket instanceof Bucket) {
            this.destinationBucket = props.destinationBucket.attrName;
        } else {
            this.destinationBucket = props.destinationBucket;
        }
        this.sources = props.sources.map((source: ISource) => source.bind(this));
        const name = new ros.FnJoin('-', ['ros-cdk', new ros.FnSelect([0, new ros.FnSplit(['-', ros.RosPseudo.stackId])])]);
        if (!props.roleArn) {
            if (stack.roles && stack.roles.fcRole) {
                this.handlerRoleArn = stack.roles.fcRole;
            } else {
                const role = new Role(this, `FCRoleFor${id}`, {
                    roleName: name,
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
                    policyAttachments: {
                        system: ['AliyunOSSFullAccess', 'AliyunLogFullAccess']
                    }
                });
                this.handlerRoleArn = role.attrArn;
                stack.roles = {
                    ...stack.roles,
                    fcRole: this.handlerRoleArn
                };
            }
        } else {
            this.handlerRoleArn = props.roleArn;
        }

        const logMonitoring = props.logMonitoring ?? false;
        if (logMonitoring) {
            const project = new Project(this, `SLSProjectFor${id}`, {
                name: name,
                description: 'SLS project for oss deployment by CDK',
            });
            const logStore = new Logstore(this, `SLSLogStoreFor${id}`, {
                logstoreName: `function-log`,
                projectName: project.attrName,
            });

            const slsIndex = new Index(this, `SLSIndexFor${id}`, {
                projectName: project.attrName,
                logstoreName: logStore.attrLogstoreName,
                fullTextIndex: {
                    enable: true
                },
            });

            this.fcService = new Service(this, `FCServiceFor${id}`, {
                serviceName: name,
                description: 'FC service for oss deployment by CDK',
                role: this.handlerRoleArn,
                logConfig: {
                    project: project.attrName,
                    logstore: logStore.attrLogstoreName,
                    enableRequestMetrics: true
                }
            });
            this.fcService.addDependency(slsIndex);
        } else {
            this.fcService = new Service(this, `FCServiceFor${id}`, {
                serviceName: name,
                description: 'FC service for oss deployment by CDK',
                role: this.handlerRoleArn
            });
        }

        const codeIndexAsset = new Asset(scope, `AssetFor${id}`, {
            path: Path.join(__dirname, './codes/code.zip'),
        });

        this.fcFunction = new Function(this, `FCFunctionFor${id}`, {
            functionName: name,
            serviceName: this.fcService.attrServiceName,
            runtime: 'python3.10',
            code: {
                ossBucketName: codeIndexAsset.bucketName,
                ossObjectName: codeIndexAsset.objectKey,
            },
            handler: 'index.handler',
            timeout: props.timeout ?? 600
        });

        this.resource = this.cr = new RosCustomResource(this, id, {
            serviceToken: this.fcFunction.attrArn,
            parameters: {
                sources: this.sources,
                destinationBucket: this.destinationBucket,
                retainOnCreate: props.retainOnCreate ?? false
            },
            timeout: props.timeout ?? 600
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
    }
}