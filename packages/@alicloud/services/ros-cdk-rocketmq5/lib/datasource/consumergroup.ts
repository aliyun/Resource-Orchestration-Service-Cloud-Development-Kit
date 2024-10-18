import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroup } from './rocketmq5.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosConsumerGroup as ConsumerGroupProperty };

/**
 * Properties for defining a `ConsumerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroup
 */
export interface ConsumerGroupProps {

    /**
     * Property consumerGroupId: The ID of the consumer group.
     */
    readonly consumerGroupId: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of the instance to which the consumer group belongs.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROCKETMQ5::ConsumerGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConsumerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroup
 */
export class ConsumerGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ConsumerGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConsumeRetryPolicy: The consumption retry policy that you want to configure for the consumer group.
     */
    public readonly attrConsumeRetryPolicy: ros.IResolvable;

    /**
     * Attribute ConsumerGroupId: The ID of the consumer group.
     */
    public readonly attrConsumerGroupId: ros.IResolvable;

    /**
     * Attribute CreateTime: The time when the consumer group was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DeliveryOrderType: The message delivery order of the consumer group.
     */
    public readonly attrDeliveryOrderType: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute Remark: The remarks on the consumer group.
     */
    public readonly attrRemark: ros.IResolvable;

    /**
     * Attribute Status: The state of the consumer group.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * Attribute UpdateTime: The time when the consumer group was last updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosConsumerGroup = new RosConsumerGroup(this, id,  {
            consumerGroupId: props.consumerGroupId,
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConsumerGroup;
        this.attrConsumeRetryPolicy = rosConsumerGroup.attrConsumeRetryPolicy;
        this.attrConsumerGroupId = rosConsumerGroup.attrConsumerGroupId;
        this.attrCreateTime = rosConsumerGroup.attrCreateTime;
        this.attrDeliveryOrderType = rosConsumerGroup.attrDeliveryOrderType;
        this.attrInstanceId = rosConsumerGroup.attrInstanceId;
        this.attrRemark = rosConsumerGroup.attrRemark;
        this.attrStatus = rosConsumerGroup.attrStatus;
        this.attrUpdateTime = rosConsumerGroup.attrUpdateTime;
    }
}
