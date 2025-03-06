import * as ros from '@alicloud/ros-cdk-core';
import * as mongobd from '@alicloud/ros-cdk-mongodb'
import * as ram from '@alicloud/ros-cdk-ram';

export class InstanceGrantTest extends ros.Stack {
    constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
        super(scope, id, props);
        const instance = new mongobd.Instance(this, 'Instance', {
            dbInstanceClass: 'MongoDB_4_0_Large',
            dbInstanceStorage: 20,
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
        instance.grantReadWrite(role);

        const user = new ram.User(this, 'User', {
            userName: 'test-user',
        });
        instance.grantRead(user);

        const group = new ram.Group(this, 'Group', {
            groupName: 'test-group',
        });
        instance.grantList(group);
    }
}