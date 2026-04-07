import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerChannel } from './dts.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosConsumerChannel as ConsumerChannelProperty };

/**
 * Properties for defining a `ConsumerChannel`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumerchannel
 */
export interface ConsumerChannelProps {

    /**
     * Property consumerGroupName: Consumer group name, up to 128 characters.
     */
    readonly consumerGroupName: string | ros.IResolvable;

    /**
     * Property consumerGroupPassword: Consumer group password, composed of uppercase letters, lowercase letters, numbers, and special characters (at least two types), 8-32 characters long.
     */
    readonly consumerGroupPassword: string | ros.IResolvable;

    /**
     * Property consumerGroupUserName: Username, composed of uppercase letters, lowercase letters, numbers, and underscores, up to 16 characters.
     */
    readonly consumerGroupUserName: string | ros.IResolvable;

    /**
     * Property dtsInstanceId: DTS subscription instance ID. Either DtsInstanceId or DtsJobId must be provided.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;

    /**
     * Property dtsJobId: DTS subscription job ID. Either DtsInstanceId or DtsJobId must be provided.
     */
    readonly dtsJobId?: string | ros.IResolvable;
}

/**
 * Represents a `ConsumerChannel`.
 */
export interface IConsumerChannel extends ros.IResource {
    readonly props: ConsumerChannelProps;

    /**
     * Attribute ConsumerGroupId: Consumer group ID
     */
    readonly attrConsumerGroupId: ros.IResolvable | string;

    /**
     * Attribute ConsumerGroupName: Consumer group name
     */
    readonly attrConsumerGroupName: ros.IResolvable | string;

    /**
     * Attribute ConsumerGroupUserName: Consumer group username
     */
    readonly attrConsumerGroupUserName: ros.IResolvable | string;

    /**
     * Attribute DtsInstanceId: DTS instance ID
     */
    readonly attrDtsInstanceId: ros.IResolvable | string;

    /**
     * Attribute DtsJobId: DTS job ID
     */
    readonly attrDtsJobId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DTS::ConsumerChannel`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConsumerChannel`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumerchannel
 */
export class ConsumerChannel extends ros.Resource implements IConsumerChannel {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ConsumerChannelProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConsumerGroupId: Consumer group ID
     */
    public readonly attrConsumerGroupId: ros.IResolvable | string;

    /**
     * Attribute ConsumerGroupName: Consumer group name
     */
    public readonly attrConsumerGroupName: ros.IResolvable | string;

    /**
     * Attribute ConsumerGroupUserName: Consumer group username
     */
    public readonly attrConsumerGroupUserName: ros.IResolvable | string;

    /**
     * Attribute DtsInstanceId: DTS instance ID
     */
    public readonly attrDtsInstanceId: ros.IResolvable | string;

    /**
     * Attribute DtsJobId: DTS job ID
     */
    public readonly attrDtsJobId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerChannelProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosConsumerChannel = new RosConsumerChannel(this, id,  {
            consumerGroupPassword: props.consumerGroupPassword,
            dtsJobId: props.dtsJobId,
            consumerGroupUserName: props.consumerGroupUserName,
            consumerGroupName: props.consumerGroupName,
            dtsInstanceId: props.dtsInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConsumerChannel;
        this.attrConsumerGroupId = rosConsumerChannel.attrConsumerGroupId;
        this.attrConsumerGroupName = rosConsumerChannel.attrConsumerGroupName;
        this.attrConsumerGroupUserName = rosConsumerChannel.attrConsumerGroupUserName;
        this.attrDtsInstanceId = rosConsumerChannel.attrDtsInstanceId;
        this.attrDtsJobId = rosConsumerChannel.attrDtsJobId;
    }
}
