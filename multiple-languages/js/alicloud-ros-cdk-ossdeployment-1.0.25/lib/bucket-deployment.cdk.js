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
        const suffix = ros.generateRandomString(5);
        if (props.destinationBucket instanceof ros_cdk_oss_1.Bucket) {
            this.destinationBucket = props.destinationBucket.attrName;
        }
        else {
            this.destinationBucket = props.destinationBucket;
        }
        this.sources = props.sources.map((source) => source.bind(this));
        if (!props.roleArn) {
            if (stack.roles && stack.roles.fcRole) {
                this.handlerRoleArn = stack.roles.fcRole;
            }
            else {
                const role = new ros_cdk_ram_1.Role(this, `FCRole${suffix}`, {
                    roleName: `ros-cdk-oss-deployment-${suffix}`,
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
            const project = new ros_cdk_sls_1.Project(this, `SLSProject${suffix}`, {
                name: `ros-cdk-oss-deployment-${suffix}`,
                description: 'SLS project for oss deployment by CDK',
            });
            const logStore = new ros_cdk_sls_1.Logstore(this, `SLSLogStore${suffix}`, {
                logstoreName: `function-log`,
                projectName: project.attrName,
            });
            const slsIndex = new ros_cdk_sls_1.Index(this, `SLSIndex${suffix}`, {
                projectName: project.attrName,
                logstoreName: logStore.attrLogstoreName,
                fullTextIndex: {
                    enable: true
                },
            });
            this.fcService = new ros_cdk_fc_1.Service(this, `FCService${suffix}`, {
                serviceName: `ros-cdk-oss-deployment-${suffix}`,
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
            this.fcService = new ros_cdk_fc_1.Service(this, `FCService${suffix}`, {
                serviceName: `ros-cdk-oss-deployment-${suffix}`,
                description: 'FC service for oss deployment by CDK',
                role: this.handlerRoleArn
            });
        }
        const codeIndexAsset = new ros_cdk_ossassets_1.Asset(scope, `Asset${suffix}`, {
            path: Path.join(__dirname, './codes/code.zip'),
        });
        this.fcFunction = new ros_cdk_fc_1.Function(this, `FCFunction${suffix}`, {
            functionName: `ros-cdk-oss-deployment-${suffix}`,
            serviceName: this.fcService.attrServiceName,
            runtime: 'python3.10',
            code: {
                ossBucketName: codeIndexAsset.bucketName,
                ossObjectName: codeIndexAsset.objectKey,
            },
            handler: 'index.handler',
        });
        this.resource = this.cr = new ros_cdk_ros_1.RosCustomResource(this, id, {
            serviceToken: this.fcFunction.attrArn,
            parameters: {
                sources: this.sources,
                destinationBucket: this.destinationBucket,
                retainOnCreate: props.retainOnCreate ?? false
            },
            timeout: props.timeout ?? 60
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
    }
}
exports.BucketDeployment = BucketDeployment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVja2V0LWRlcGxveW1lbnQuY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVja2V0LWRlcGxveW1lbnQuY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUU5Qyx1REFBMEQ7QUFDMUQscURBQXlEO0FBQ3pELHVEQUE2QztBQUM3QyxtRUFBb0Q7QUFDcEQsdURBQStDO0FBQy9DLHVEQUFpRTtBQUNqRSw2QkFBNkI7QUFpRDdCOzs7R0FHRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFxQjlDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBNEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN2SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsWUFBWSxvQkFBTSxFQUFFO1lBQzNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1NBQzdEO2FBQU07WUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQWUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDbkMsSUFB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QUNELE9BQU8sRUFBRSxlQUFlO1NBQzNCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLCtCQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDdEQsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTztZQUNyQyxVQUFVLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUN6QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWMsSUFBSSxLQUFLO2FBQ2hEO1lBQ0QsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRTtTQUMvQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN4RixDQUFDO0NBQ0o7QUE5S0QsNENBOEtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgSVNvdXJjZSwgU291cmNlQ29uZmlnIH0gZnJvbSAnLi9zb3VyY2UuY2RrJztcbmltcG9ydCB7IFJvc0N1c3RvbVJlc291cmNlIH0gZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLXJvc1wiO1xuaW1wb3J0IHsgU2VydmljZSwgRnVuY3Rpb24gfSBmcm9tIFwiQGFsaWNsb3VkL3Jvcy1jZGstZmNcIjtcbmltcG9ydCB7IFJvbGUgfSBmcm9tIFwiQGFsaWNsb3VkL3Jvcy1jZGstcmFtXCI7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1vc3Nhc3NldHNcIjtcbmltcG9ydCB7IEJ1Y2tldCB9IGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1vc3NcIjtcbmltcG9ydCB7IExvZ3N0b3JlLCBQcm9qZWN0LCBJbmRleCB9IGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1zbHNcIjtcbmltcG9ydCAqIGFzIFBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCdWNrZXREZXBsb3ltZW50UHJvcHMge1xuICAgIC8qKlxuICAgICAqIFRoZSBzb3VyY2VzIGZyb20gd2hpY2ggdG8gZGVwbG95IHRoZSBjb250ZW50cyBvZiB0aGlzIGJ1Y2tldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VzOiBJU291cmNlW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgT1NTIGJ1Y2tldCB0byBzeW5jIHRoZSBjb250ZW50cyBvZiB0aGUgemlwIGZpbGUgdG8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdGluYXRpb25CdWNrZXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IEJ1Y2tldDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUk4gb2YgdGhlIGV4ZWN1dGlvbiByb2xlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCAtICBBIHJvbGUgaXMgYXV0b21hdGljYWxseSBjcmVhdGVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm9sZUFybj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lb3V0IHBlcmlvZCBpbiBzZWNvbmRzIGZvciB0aGUgZnVuY3Rpb24gdG8gcnVuLlxuICAgICAqXG4gICAgICogQGRlZmF1bHQgLSA2MFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGxvZyBtb25pdG9yaW5nIGlzIGVuYWJsZWQuXG4gICAgICogRW5hYmxpbmcgbG9nIG1vbml0b3JpbmcgYWxsb3dzIHlvdSB0byByZWNvcmQgdGhlIGRldGFpbHMgb2YgeW91ciBkZXBsb3ltZW50LFxuICAgICAqIHdoaWNoIG1ha2VzIGl0IGVhc2llciB0byB0cm91Ymxlc2hvb3Qgd2hlbiBzb21ldGhpbmcgZ29lcyB3cm9uZy5cbiAgICAgKlxuICAgICAqIEVuYWJsaW5nIGxvZ2dpbmcgbW9uaXRvcmluZyBpbmN1cnMgYW4gYWRkaXRpb25hbCBsb2dnaW5nIHNlcnZpY2UgZmVlLlxuICAgICAqXG4gICAgICogQGRlZmF1bHQgLSBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ01vbml0b3Jpbmc/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBpcyBzZXQgdG8gZmFsc2UsIHRoZSBidWNrZXQgdGVtcG9yYXJpbHkgc3RvcmluZyB0aGUgYXNzZXQgb3IgZGF0YSB3aWxsIGJlIGRlbGV0ZWRcbiAgICAgKiBhZnRlciB0aGUgYXNzZXQgb3IgZGF0YSBpcyBkZXBsb3llZCB0byB0aGUgZGVzdGluYXRpb24gYnVja2V0LlxuICAgICAqXG4gICAgICogT3RoZXJ3aXNlLCB0aGUgdGVtcG9yYXJ5IGJ1Y2tldCB3aWxsIGJlIGRlbGV0ZWQgd2hlbiB0aGUgc3RhY2sgaXMgZGVzdHJveWVkLlxuICAgICAqXG4gICAgICogQGRlZmF1bHQgLSBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJldGFpbk9uQ3JlYXRlPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBCdWNrZXREZXBsb3ltZW50YCBwb3B1bGF0ZXMgYW4gT1NTIGJ1Y2tldCB3aXRoIHRoZSBjb250ZW50cyBvZiAuemlwIGZpbGVzIGZyb21cbiAqIG90aGVyIE9TUyBidWNrZXRzIG9yIGZyb20gbG9jYWwgZGlza1xuICovXG5leHBvcnQgY2xhc3MgQnVja2V0RGVwbG95bWVudCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXN0aW5hdGlvbkJ1Y2tldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc291cmNlczogU291cmNlQ29uZmlnW107XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFuZGxlclJvbGVBcm46IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBmY1NlcnZpY2U6IEZDIHNlcnZpY2UgdG8gdXNlIHRvIGZvcndhcmQgY29udGVudCB0byB0aGUgZGVzdGluYXRpb24gYnVja2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBmY1NlcnZpY2U6IFNlcnZpY2U7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgZmNGdW5jdGlvbjogRkMgZnVuY3Rpb24gdG8gdXNlIHRvIGZvcndhcmQgY29udGVudCB0byB0aGUgZGVzdGluYXRpb24gYnVja2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBmY0Z1bmN0aW9uOiBGdW5jdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBjcjogQ3VzdG9tIHJlc291cmNlIHRvIHRyaWdnZXIgdGhlIGJ1Y2tldCBkZXBsb3ltZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBjcjogUm9zQ3VzdG9tUmVzb3VyY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEJ1Y2tldERlcGxveW1lbnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSByb3MuU3RhY2sub2YodGhpcyk7XG4gICAgICAgIGNvbnN0IHN1ZmZpeCA9IHJvcy5nZW5lcmF0ZVJhbmRvbVN0cmluZyg1KTtcbiAgICAgICAgaWYgKHByb3BzLmRlc3RpbmF0aW9uQnVja2V0IGluc3RhbmNlb2YgQnVja2V0KSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uQnVja2V0ID0gcHJvcHMuZGVzdGluYXRpb25CdWNrZXQuYXR0ck5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uQnVja2V0ID0gcHJvcHMuZGVzdGluYXRpb25CdWNrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3VyY2VzID0gcHJvcHMuc291cmNlcy5tYXAoKHNvdXJjZTogSVNvdXJjZSkgPT4gc291cmNlLmJpbmQodGhpcykpO1xuICAgICAgICBpZiAoIXByb3BzLnJvbGVBcm4pIHtcbiAgICAgICAgICAgIGlmIChzdGFjay5yb2xlcyAmJiBzdGFjay5yb2xlcy5mY1JvbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJSb2xlQXJuID0gc3RhY2sucm9sZXMuZmNSb2xlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb2xlID0gbmV3IFJvbGUodGhpcywgYEZDUm9sZSR7c3VmZml4fWAsIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5hbWU6IGByb3MtY2RrLW9zcy1kZXBsb3ltZW50LSR7c3VmZml4fWAsXG4gICAgICAgICAgICAgICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogJzEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdzdHM6QXNzdW1lUm9sZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdDogJ0FsbG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbmNpcGFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZjLmFsaXl1bmNzLmNvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBvbGljaWVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9saWN5TmFtZTogJ0FsaXl1bk9TU0Z1bGxBY2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvc3M6KidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdDogJ0FsbG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZTogWycqJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9saWN5TmFtZTogJ0FsaXl1bkxvZ0Z1bGxBY2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGljeURvY3VtZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsb2c6KidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdDogJ0FsbG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZTogWycqJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBbJ3JhbTpDcmVhdGVTZXJ2aWNlTGlua2VkUm9sZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiBbJyonXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q6ICdBbGxvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdHJpbmdFcXVhbHMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmFtOlNlcnZpY2VOYW1lJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdWRpdC5sb2cuYWxpeXVuY3MuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWxlcnQubG9nLmFsaXl1bmNzLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21pZGRsZXdhcmVsZW5zLmxvZy5hbGl5dW5jcy5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdG9yYWdlbGVucy5sb2cuYWxpeXVuY3MuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWktbGVucy5sb2cuYWxpeXVuY3MuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VjdXJpdHlsZW5zLmxvZy5hbGl5dW5jcy5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJSb2xlQXJuID0gcm9sZS5hdHRyQXJuO1xuICAgICAgICAgICAgICAgIHN0YWNrLnJvbGVzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGFjay5yb2xlcyxcbiAgICAgICAgICAgICAgICAgICAgZmNSb2xlOiB0aGlzLmhhbmRsZXJSb2xlQXJuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlclJvbGVBcm4gPSBwcm9wcy5yb2xlQXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9nTW9uaXRvcmluZyA9IHByb3BzLmxvZ01vbml0b3JpbmcgPz8gZmFsc2U7XG4gICAgICAgIGlmIChsb2dNb25pdG9yaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGhpcywgYFNMU1Byb2plY3Qke3N1ZmZpeH1gLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogYHJvcy1jZGstb3NzLWRlcGxveW1lbnQtJHtzdWZmaXh9YCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NMUyBwcm9qZWN0IGZvciBvc3MgZGVwbG95bWVudCBieSBDREsnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBsb2dTdG9yZSA9IG5ldyBMb2dzdG9yZSh0aGlzLCBgU0xTTG9nU3RvcmUke3N1ZmZpeH1gLCB7XG4gICAgICAgICAgICAgICAgbG9nc3RvcmVOYW1lOiBgZnVuY3Rpb24tbG9nYCxcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5hdHRyTmFtZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBzbHNJbmRleCA9IG5ldyBJbmRleCh0aGlzLCBgU0xTSW5kZXgke3N1ZmZpeH1gLCB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QuYXR0ck5hbWUsXG4gICAgICAgICAgICAgICAgbG9nc3RvcmVOYW1lOiBsb2dTdG9yZS5hdHRyTG9nc3RvcmVOYW1lLFxuICAgICAgICAgICAgICAgIGZ1bGxUZXh0SW5kZXg6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZjU2VydmljZSA9IG5ldyBTZXJ2aWNlKHRoaXMsIGBGQ1NlcnZpY2Uke3N1ZmZpeH1gLCB7XG4gICAgICAgICAgICAgICAgc2VydmljZU5hbWU6IGByb3MtY2RrLW9zcy1kZXBsb3ltZW50LSR7c3VmZml4fWAsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGQyBzZXJ2aWNlIGZvciBvc3MgZGVwbG95bWVudCBieSBDREsnLFxuICAgICAgICAgICAgICAgIHJvbGU6IHRoaXMuaGFuZGxlclJvbGVBcm4sXG4gICAgICAgICAgICAgICAgbG9nQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHByb2plY3QuYXR0ck5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxvZ3N0b3JlOiBsb2dTdG9yZS5hdHRyTG9nc3RvcmVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVSZXF1ZXN0TWV0cmljczogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5mY1NlcnZpY2UuYWRkRGVwZW5kZW5jeShzbHNJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZjU2VydmljZSA9IG5ldyBTZXJ2aWNlKHRoaXMsIGBGQ1NlcnZpY2Uke3N1ZmZpeH1gLCB7XG4gICAgICAgICAgICAgICAgc2VydmljZU5hbWU6IGByb3MtY2RrLW9zcy1kZXBsb3ltZW50LSR7c3VmZml4fWAsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGQyBzZXJ2aWNlIGZvciBvc3MgZGVwbG95bWVudCBieSBDREsnLFxuICAgICAgICAgICAgICAgIHJvbGU6IHRoaXMuaGFuZGxlclJvbGVBcm5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29kZUluZGV4QXNzZXQgPSBuZXcgQXNzZXQoc2NvcGUsIGBBc3NldCR7c3VmZml4fWAsIHtcbiAgICAgICAgICAgIHBhdGg6IFBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NvZGVzL2NvZGUuemlwJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmNGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbih0aGlzLCBgRkNGdW5jdGlvbiR7c3VmZml4fWAsIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYHJvcy1jZGstb3NzLWRlcGxveW1lbnQtJHtzdWZmaXh9YCxcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiB0aGlzLmZjU2VydmljZS5hdHRyU2VydmljZU5hbWUsXG4gICAgICAgICAgICBydW50aW1lOiAncHl0aG9uMy4xMCcsXG4gICAgICAgICAgICBjb2RlOiB7XG4gICAgICAgICAgICAgICAgb3NzQnVja2V0TmFtZTogY29kZUluZGV4QXNzZXQuYnVja2V0TmFtZSxcbiAgICAgICAgICAgICAgICBvc3NPYmplY3ROYW1lOiBjb2RlSW5kZXhBc3NldC5vYmplY3RLZXksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlc291cmNlID0gdGhpcy5jciA9IG5ldyBSb3NDdXN0b21SZXNvdXJjZSh0aGlzLCBpZCwge1xuICAgICAgICAgICAgc2VydmljZVRva2VuOiB0aGlzLmZjRnVuY3Rpb24uYXR0ckFybixcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VzOiB0aGlzLnNvdXJjZXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25CdWNrZXQ6IHRoaXMuZGVzdGluYXRpb25CdWNrZXQsXG4gICAgICAgICAgICAgICAgcmV0YWluT25DcmVhdGU6IHByb3BzLnJldGFpbk9uQ3JlYXRlID8/IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltZW91dDogcHJvcHMudGltZW91dCA/PyA2MFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59Il19