import * as ros from '@alicloud/ros-cdk-core';
import * as oss from '@alicloud/ros-cdk-oss';
import * as ram from '@alicloud/ros-cdk-ram';

export class BucketGrantTest extends ros.Stack {
    constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
        super(scope, id, props);
        const bucket = new oss.Bucket(this, 'Bucket', {
            bucketName: 'test-bucket',
        });

        const role = new ram.Role(this, 'Role', {
            roleName: 'test-role',
            assumeRolePolicyDocument: {
                statement: [
                    {
                        action: 'sts:AssumeRole',
                        effect: 'Allow',
                        principal: {
                            service: [
                                'ecs.aliyuncs.com',
                            ],
                        },
                    },
                ],
                version: '1',
            }
        });
        bucket.grantReadWrite(role);

        const user = new ram.User(this, 'User', {
            userName: 'test-user',
        });
        bucket.grantRead(user);

        const group = new ram.Group(this, 'Group', {
            groupName: 'test-group',
        });
        bucket.grantList(group);
    }
}