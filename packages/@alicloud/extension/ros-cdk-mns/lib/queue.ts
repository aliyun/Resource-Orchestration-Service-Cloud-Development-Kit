import * as ros from "@alicloud/ros-cdk-core";
import { Queue, IQueue } from "@alicloud/ros-cdk-mns";

/**
 * Represents a `Queue`.
 */
export interface QueueAttributes {

    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
     */
    readonly attrArnWithSlash: ros.IResolvable | string;

    /**
     * Attribute QueueName: Queue name
     */
    readonly attrQueueName?: ros.IResolvable | string;

    /**
     * Attribute QueueUrl: URL of created queue
     */
    readonly attrQueueUrl?: ros.IResolvable | string;
}

export class ExtensionQueue extends Queue {
    public static fromQueueArn(scope: ros.Construct, id: string, attrArnWithSlash: string): IQueue {
        return ExtensionQueue.fromQueueAttributes(scope, id, { attrArnWithSlash });    }

    /**
     * Import an existing queue
     */
    public static fromQueueAttributes(scope: ros.Construct, id: string, attrs: QueueAttributes): IQueue {
        const stack = ros.Stack.of(scope);
        const parsedArn = stack.splitArn(attrs.attrArnWithSlash, ros.ArnFormat.SLASH_RESOURCE_SLASH_RESOURCE_NAME);
        const queueName = attrs.attrQueueName || parsedArn.resourceName;
        if (!queueName) {
            throw new Error('The Queue Name cannot be parsed from Arn. Please ensure that the Arn is in the correct format.');
        }
        const queueUrl = attrs.attrQueueUrl || `http://${parsedArn.account}.mns.${parsedArn.region}.aliyuncs.com/queues/${queueName}`;

        class Import extends ros.Resource implements IQueue {
            public readonly props = {
                queueName: queueName!,
            };

            public readonly attrArnWithSlash = attrs.attrArnWithSlash;
            public readonly attrQueueUrl = queueUrl;
            public readonly attrQueueName = queueName!;
        }

        return new Import(scope, id, {
            environmentFromArn: attrs.attrArnWithSlash,
        });
    }
}