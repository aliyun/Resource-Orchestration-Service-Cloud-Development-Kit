"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BucketDeployment = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_cdk_ros_1 = require("@alicloud/ros-cdk-ros");
const ros_cdk_fc_1 = require("@alicloud/ros-cdk-fc");
const ros_cdk_ram_1 = require("@alicloud/ros-cdk-ram");
const ros_cdk_ossassets_1 = require("@alicloud/ros-cdk-ossassets");
const ros_cdk_oss_1 = require("@alicloud/ros-cdk-oss");
const ros_cdk_sls_1 = require("@alicloud/ros-cdk-sls");
const Path = require("path");
/**
 * `BucketDeployment` populates an OSS bucket with the contents of .zip files from
 * other OSS buckets or from local disk
 */
class BucketDeployment extends ros.Resource {
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const stack = ros.Stack.of(this);
        if (props.destinationBucket instanceof ros_cdk_oss_1.Bucket) {
            this.destinationBucket = props.destinationBucket.attrName;
        }
        else {
            this.destinationBucket = props.destinationBucket;
        }
        this.sources = props.sources.map((source) => source.bind(this));
        const name = new ros.FnJoin('-', ['ros-cdk', new ros.FnSelect([0, new ros.FnSplit(['-', ros.RosPseudo.stackId])])]);
        if (!props.roleArn) {
            if (stack.roles && stack.roles.fcRole) {
                this.handlerRoleArn = stack.roles.fcRole;
            }
            else {
                const role = new ros_cdk_ram_1.Role(this, `FCRoleFor${id}`, {
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
                this.handlerRoleArn = role.attrArn;
                stack.roles = {
                    ...stack.roles,
                    fcRole: this.handlerRoleArn
                };
            }
        }
        else {
            this.handlerRoleArn = props.roleArn;
        }
        const logMonitoring = props.logMonitoring ?? false;
        if (logMonitoring) {
            const project = new ros_cdk_sls_1.Project(this, `SLSProjectFor${id}`, {
                name: name,
                description: 'SLS project for oss deployment by CDK',
            });
            const logStore = new ros_cdk_sls_1.Logstore(this, `SLSLogStoreFor${id}`, {
                logstoreName: `function-log`,
                projectName: project.attrName,
            });
            const slsIndex = new ros_cdk_sls_1.Index(this, `SLSIndexFor${id}`, {
                projectName: project.attrName,
                logstoreName: logStore.attrLogstoreName,
                fullTextIndex: {
                    enable: true
                },
            });
            this.fcService = new ros_cdk_fc_1.Service(this, `FCServiceFor${id}`, {
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
        }
        else {
            this.fcService = new ros_cdk_fc_1.Service(this, `FCServiceFor${id}`, {
                serviceName: name,
                description: 'FC service for oss deployment by CDK',
                role: this.handlerRoleArn
            });
        }
        const codeIndexAsset = new ros_cdk_ossassets_1.Asset(scope, `AssetFor${id}`, {
            path: Path.join(__dirname, './codes/code.zip'),
        });
        this.fcFunction = new ros_cdk_fc_1.Function(this, `FCFunctionFor${id}`, {
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
        this.resource = this.cr = new ros_cdk_ros_1.RosCustomResource(this, id, {
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
exports.BucketDeployment = BucketDeployment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVja2V0LWRlcGxveW1lbnQuY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVja2V0LWRlcGxveW1lbnQuY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUU5Qyx1REFBMEQ7QUFDMUQscURBQXlEO0FBQ3pELHVEQUE2QztBQUM3QyxtRUFBb0Q7QUFDcEQsdURBQStDO0FBQy9DLHVEQUFpRTtBQUNqRSw2QkFBNkI7QUFpRDdCOzs7R0FHRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQjlDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBNEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN2SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksS0FBSyxDQUFDLGlCQUFpQixZQUFZLG9CQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7U0FDN0Q7YUFBTTtZQUNILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBZSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekUsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxTQUFT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LEVBQUUsWUFBWTtZQUNyQixJQUFJLEVBQUU7Z0JBQ0YsYUFBYSxFQUFFLGNBQWMsQ0FBQyxVQUFVO2dCQUN4QyxhQUFhLEVBQUUsY0FBYyxDQUFDLFNBQVM7YUFDMUM7WUFDRCxPQUFPLEVBQUUsZUFBZTtZQUN4QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxHQUFHO1NBQ2hDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLCtCQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDdEQsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxVQUFVLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUN6QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWMsSUFBSSxLQUFLO2FBQ2hEO1lBQ0QsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLElBQUksR0FBRztTQUNoQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN4RixDQUFDO0NBQ0o7QUEvS0QsNENBK0tDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgSVNvdXJjZSwgU291cmNlQ29uZmlnIH0gZnJvbSAnLi9zb3VyY2UuY2RrJztcbmltcG9ydCB7IFJvc0N1c3RvbVJlc291cmNlIH0gZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLXJvc1wiO1xuaW1wb3J0IHsgU2VydmljZSwgRnVuY3Rpb24gfSBmcm9tIFwiQGFsaWNsb3VkL3Jvcy1jZGstZmNcIjtcbmltcG9ydCB7IFJvbGUgfSBmcm9tIFwiQGFsaWNsb3VkL3Jvcy1jZGstcmFtXCI7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1vc3Nhc3NldHNcIjtcbmltcG9ydCB7IEJ1Y2tldCB9IGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1vc3NcIjtcbmltcG9ydCB7IExvZ3N0b3JlLCBQcm9qZWN0LCBJbmRleCB9IGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1zbHNcIjtcbmltcG9ydCAqIGFzIFBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCdWNrZXREZXBsb3ltZW50UHJvcHMge1xuICAgIC8qKlxuICAgICAqIFRoZSBzb3VyY2VzIGZyb20gd2hpY2ggdG8gZGVwbG95IHRoZSBjb250ZW50cyBvZiB0aGlzIGJ1Y2tldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VzOiBJU291cmNlW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgT1NTIGJ1Y2tldCB0byBzeW5jIHRoZSBjb250ZW50cyBvZiB0aGUgemlwIGZpbGUgdG8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdGluYXRpb25CdWNrZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IEJ1Y2tldDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUk4gb2YgdGhlIGV4ZWN1dGlvbiByb2xlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCAtICBBIHJvbGUgaXMgYXV0b21hdGljYWxseSBjcmVhdGVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm9sZUFybj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lb3V0IHBlcmlvZCBpbiBzZWNvbmRzIGZvciB0aGUgZnVuY3Rpb24gdG8gcnVuLlxuICAgICAqXG4gICAgICogQGRlZmF1bHQgLSA2MFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGxvZyBtb25pdG9yaW5nIGlzIGVuYWJsZWQuXG4gICAgICogRW5hYmxpbmcgbG9nIG1vbml0b3JpbmcgYWxsb3dzIHlvdSB0byByZWNvcmQgdGhlIGRldGFpbHMgb2YgeW91ciBkZXBsb3ltZW50LFxuICAgICAqIHdoaWNoIG1ha2VzIGl0IGVhc2llciB0byB0cm91Ymxlc2hvb3Qgd2hlbiBzb21ldGhpbmcgZ29lcyB3cm9uZy5cbiAgICAgKlxuICAgICAqIEVuYWJsaW5nIGxvZ2dpbmcgbW9uaXRvcmluZyBpbmN1cnMgYW4gYWRkaXRpb25hbCBsb2dnaW5nIHNlcnZpY2UgZmVlLlxuICAgICAqXG4gICAgICogQGRlZmF1bHQgLSBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ01vbml0b3Jpbmc/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBpcyBzZXQgdG8gZmFsc2UsIHRoZSBidWNrZXQgdGVtcG9yYXJpbHkgc3RvcmluZyB0aGUgYXNzZXQgb3IgZGF0YSB3aWxsIGJlIGRlbGV0ZWRcbiAgICAgKiBhZnRlciB0aGUgYXNzZXQgb3IgZGF0YSBpcyBkZXBsb3llZCB0byB0aGUgZGVzdGluYXRpb24gYnVja2V0LlxuICAgICAqXG4gICAgICogT3RoZXJ3aXNlLCB0aGUgdGVtcG9yYXJ5IGJ1Y2tldCB3aWxsIGJlIGRlbGV0ZWQgd2hlbiB0aGUgc3RhY2sgaXMgZGVzdHJveWVkLlxuICAgICAqXG4gICAgICogQGRlZmF1bHQgLSBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJldGFpbk9uQ3JlYXRlPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBCdWNrZXREZXBsb3ltZW50YCBwb3B1bGF0ZXMgYW4gT1NTIGJ1Y2tldCB3aXRoIHRoZSBjb250ZW50cyBvZiAuemlwIGZpbGVzIGZyb21cbiAqIG90aGVyIE9TUyBidWNrZXRzIG9yIGZyb20gbG9jYWwgZGlza1xuICovXG5leHBvcnQgY2xhc3MgQnVja2V0RGVwbG95bWVudCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXN0aW5hdGlvbkJ1Y2tldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc291cmNlczogU291cmNlQ29uZmlnW107XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFuZGxlclJvbGVBcm46IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBmY1NlcnZpY2U6IEZDIHNlcnZpY2UgdG8gdXNlIHRvIGZvcndhcmQgY29udGVudCB0byB0aGUgZGVzdGluYXRpb24gYnVja2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBmY1NlcnZpY2U6IFNlcnZpY2U7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgZmNGdW5jdGlvbjogRkMgZnVuY3Rpb24gdG8gdXNlIHRvIGZvcndhcmQgY29udGVudCB0byB0aGUgZGVzdGluYXRpb24gYnVja2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBmY0Z1bmN0aW9uOiBGdW5jdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBjcjogQ3VzdG9tIHJlc291cmNlIHRvIHRyaWdnZXIgdGhlIGJ1Y2tldCBkZXBsb3ltZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBjcjogUm9zQ3VzdG9tUmVzb3VyY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEJ1Y2tldERlcGxveW1lbnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSByb3MuU3RhY2sub2YodGhpcyk7XG4gICAgICAgIGlmIChwcm9wcy5kZXN0aW5hdGlvbkJ1Y2tldCBpbnN0YW5jZW9mIEJ1Y2tldCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbkJ1Y2tldCA9IHByb3BzLmRlc3RpbmF0aW9uQnVja2V0LmF0dHJOYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbkJ1Y2tldCA9IHByb3BzLmRlc3RpbmF0aW9uQnVja2V0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc291cmNlcyA9IHByb3BzLnNvdXJjZXMubWFwKChzb3VyY2U6IElTb3VyY2UpID0+IHNvdXJjZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IG5ldyByb3MuRm5Kb2luKCctJywgWydyb3MtY2RrJywgbmV3IHJvcy5GblNlbGVjdChbMCwgbmV3IHJvcy5GblNwbGl0KFsnLScsIHJvcy5Sb3NQc2V1ZG8uc3RhY2tJZF0pXSldKTtcbiAgICAgICAgaWYgKCFwcm9wcy5yb2xlQXJuKSB7XG4gICAgICAgICAgICBpZiAoc3RhY2sucm9sZXMgJiYgc3RhY2sucm9sZXMuZmNSb2xlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyUm9sZUFybiA9IHN0YWNrLnJvbGVzLmZjUm9sZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZSA9IG5ldyBSb2xlKHRoaXMsIGBGQ1JvbGVGb3Ike2lkfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogJzEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdzdHM6QXNzdW1lUm9sZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdDogJ0FsbG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZjLmFsaXl1bmNzLmNvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9saWN5TmFtZTogJ0FsaXl1bk9TU0Z1bGxBY2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvc3M6KidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdDogJ0FsbG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZTogWycqJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9saWN5TmFtZTogJ0FsaXl1bkxvZ0Z1bGxBY2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsb2c6KidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdDogJ0FsbG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZTogWycqJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBbJ3JhbTpDcmVhdGVTZXJ2aWNlTGlua2VkUm9sZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiBbJyonXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q6ICdBbGxvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdHJpbmdFcXVhbHMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmFtOlNlcnZpY2VOYW1lJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdWRpdC5sb2cuYWxpeXVuY3MuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWxlcnQubG9nLmFsaXl1bmNzLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21pZGRsZXdhcmVsZW5zLmxvZy5hbGl5dW5jcy5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdG9yYWdlbGVucy5sb2cuYWxpeXVuY3MuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWktbGVucy5sb2cuYWxpeXVuY3MuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VjdXJpdHlsZW5zLmxvZy5hbGl5dW5jcy5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJSb2xlQXJuID0gcm9sZS5hdHRyQXJuO1xuICAgICAgICAgICAgICAgIHN0YWNrLnJvbGVzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGFjay5yb2xlcyxcbiAgICAgICAgICAgICAgICAgICAgZmNSb2xlOiB0aGlzLmhhbmRsZXJSb2xlQXJuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlclJvbGVBcm4gPSBwcm9wcy5yb2xlQXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9nTW9uaXRvcmluZyA9IHByb3BzLmxvZ01vbml0b3JpbmcgPz8gZmFsc2U7XG4gICAgICAgIGlmIChsb2dNb25pdG9yaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGhpcywgYFNMU1Byb2plY3RGb3Ike2lkfWAsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU0xTIHByb2plY3QgZm9yIG9zcyBkZXBsb3ltZW50IGJ5IENESycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGxvZ1N0b3JlID0gbmV3IExvZ3N0b3JlKHRoaXMsIGBTTFNMb2dTdG9yZUZvciR7aWR9YCwge1xuICAgICAgICAgICAgICAgIGxvZ3N0b3JlTmFtZTogYGZ1bmN0aW9uLWxvZ2AsXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QuYXR0ck5hbWUsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgc2xzSW5kZXggPSBuZXcgSW5kZXgodGhpcywgYFNMU0luZGV4Rm9yJHtpZH1gLCB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QuYXR0ck5hbWUsXG4gICAgICAgICAgICAgICAgbG9nc3RvcmVOYW1lOiBsb2dTdG9yZS5hdHRyTG9nc3RvcmVOYW1lLFxuICAgICAgICAgICAgICAgIGZ1bGxUZXh0SW5kZXg6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZjU2VydmljZSA9IG5ldyBTZXJ2aWNlKHRoaXMsIGBGQ1NlcnZpY2VGb3Ike2lkfWAsIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlTmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZDIHNlcnZpY2UgZm9yIG9zcyBkZXBsb3ltZW50IGJ5IENESycsXG4gICAgICAgICAgICAgICAgcm9sZTogdGhpcy5oYW5kbGVyUm9sZUFybixcbiAgICAgICAgICAgICAgICBsb2dDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDogcHJvamVjdC5hdHRyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbG9nc3RvcmU6IGxvZ1N0b3JlLmF0dHJMb2dzdG9yZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlcXVlc3RNZXRyaWNzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZjU2VydmljZS5hZGREZXBlbmRlbmN5KHNsc0luZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmNTZXJ2aWNlID0gbmV3IFNlcnZpY2UodGhpcywgYEZDU2VydmljZUZvciR7aWR9YCwge1xuICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRkMgc2VydmljZSBmb3Igb3NzIGRlcGxveW1lbnQgYnkgQ0RLJyxcbiAgICAgICAgICAgICAgICByb2xlOiB0aGlzLmhhbmRsZXJSb2xlQXJuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvZGVJbmRleEFzc2V0ID0gbmV3IEFzc2V0KHNjb3BlLCBgQXNzZXRGb3Ike2lkfWAsIHtcbiAgICAgICAgICAgIHBhdGg6IFBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NvZGVzL2NvZGUuemlwJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmNGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbih0aGlzLCBgRkNGdW5jdGlvbkZvciR7aWR9YCwge1xuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBuYW1lLFxuICAgICAgICAgICAgc2VydmljZU5hbWU6IHRoaXMuZmNTZXJ2aWNlLmF0dHJTZXJ2aWNlTmFtZSxcbiAgICAgICAgICAgIHJ1bnRpbWU6ICdweXRob24zLjEwJyxcbiAgICAgICAgICAgIGNvZGU6IHtcbiAgICAgICAgICAgICAgICBvc3NCdWNrZXROYW1lOiBjb2RlSW5kZXhBc3NldC5idWNrZXROYW1lLFxuICAgICAgICAgICAgICAgIG9zc09iamVjdE5hbWU6IGNvZGVJbmRleEFzc2V0Lm9iamVjdEtleSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVyOiAnaW5kZXguaGFuZGxlcicsXG4gICAgICAgICAgICB0aW1lb3V0OiBwcm9wcy50aW1lb3V0ID8/IDYwMFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlc291cmNlID0gdGhpcy5jciA9IG5ldyBSb3NDdXN0b21SZXNvdXJjZSh0aGlzLCBpZCwge1xuICAgICAgICAgICAgc2VydmljZVRva2VuOiB0aGlzLmZjRnVuY3Rpb24uYXR0ckFybixcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VzOiB0aGlzLnNvdXJjZXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25CdWNrZXQ6IHRoaXMuZGVzdGluYXRpb25CdWNrZXQsXG4gICAgICAgICAgICAgICAgcmV0YWluT25DcmVhdGU6IHByb3BzLnJldGFpbk9uQ3JlYXRlID8/IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltZW91dDogcHJvcHMudGltZW91dCA/PyA2MDBcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufSJdfQ==