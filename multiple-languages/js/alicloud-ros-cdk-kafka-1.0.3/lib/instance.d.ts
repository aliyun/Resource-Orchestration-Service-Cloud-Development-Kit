import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './kafka.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `ALIYUN::KAFKA::Instance`
 */
export interface InstanceProps {
    /**
     * Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
     *   4: Instance of the public type
     *   5: Instance of the VPC type
     */
    readonly deployType: number | ros.IResolvable;
    /**
     * Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
     */
    readonly diskSize: number | ros.IResolvable;
    /**
     * Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
     * 0: Ultra disk
     * 1: SSD
     */
    readonly diskType: string | ros.IResolvable;
    /**
     * Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.
     * The default value of this parameter varies with different peak traffic values.
     * Additional fees are charged if the default values are exceeded.
     *  Different specifications have different default values, and extra fees are charged.
     * For more information, see Billing.
     */
    readonly topicQuota: number | ros.IResolvable;
    /**
     * Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
     */
    readonly deployOption?: RosInstance.DeployOptionProperty | ros.IResolvable;
    /**
     * Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
     * This parameter must be specified when the DeployType parameter is set to 4.
     */
    readonly eipMax?: number | ros.IResolvable;
    /**
     * Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
     * For more information about the value range, see Billing.
     */
    readonly ioMax?: number | ros.IResolvable;
    /**
     * Property ioMaxSpec: Flow specification (recommended)
     * The IoMax and IoMaxSpec must be optional.
     * When filling in at the same time, subject to IoMaxSpec.
     * It is recommended that you only fill in the flow specification
     *
     */
    readonly ioMaxSpec?: string | ros.IResolvable;
    /**
     * Property openConnector: Whether open kafka connector or not
     */
    readonly openConnector?: boolean | ros.IResolvable;
    /**
     * Property payType: Pay by hour or month.
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * Property specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
     * professional: Professional Edition
     * normal: Normal version
     */
    readonly specType?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::KAFKA::Instance`
 */
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceId: Id of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute Name: Name of the instance.
     */
    readonly attrName: ros.IResolvable;
    /**
     * Attribute OrderId: Id of the order.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::KAFKA::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
