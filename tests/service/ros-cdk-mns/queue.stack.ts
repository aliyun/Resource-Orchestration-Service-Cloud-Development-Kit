import * as ros from '@alicloud/ros-cdk-core'
import { Queue } from '@alicloud/ros-cdk-mns';

export class QueueExample extends ros.Stack {
    constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
        super(scope, id, props);

        const queueArn = new ros.RosParameter(this, 'QueueArn', {
            type: ros.RosParameterType.STRING,
            defaultValue: 'acs:mns:cn-beijing:1754580903499898:/queues/cdk-test-2'
        });

        const queue = Queue.fromQueueArn(this, 'Queue', 'acs:mns:cn-beijing:1754580903499898:/queues/cdk-test');

        const queue2 = Queue.fromQueueArn(this, 'Queue2', ros.Fn.ref(queueArn.logicalId));


        new ros.RosOutput(this, 'QueueName', {
            value: queue.attrQueueName,
        });

        new ros.RosOutput(this, 'QueueUrl', {
            value: queue.attrQueueUrl,
        });

        new ros.RosOutput(this, 'ArnWithSlash', {
            value: queue.attrArnWithSlash,
        });

        new ros.RosOutput(this, 'QueueName2', {
            value: queue2.attrQueueName,
        });

        new ros.RosOutput(this, 'QueueUrl2', {
            value: queue2.attrQueueUrl,
        });

        new ros.RosOutput(this, 'ArnWithSlash2', {
            value: queue2.attrArnWithSlash,
        });
    }
}
