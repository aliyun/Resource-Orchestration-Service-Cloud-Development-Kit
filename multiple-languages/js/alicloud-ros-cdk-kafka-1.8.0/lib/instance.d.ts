import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './kafka.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance
 */
export interface InstanceProps {
    /**
     * Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
     *   4: Instance of the public type
     *   5: Instance of the VPC type
     */
    readonly deployType: number | ros.IResolvable;
    /**
     * Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
     */
    readonly deployOption?: RosInstance.DeployOptionProperty | ros.IResolvable;
    /**
     * Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
     */
    readonly diskSize?: number | ros.IResolvable;
    /**
     * Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
     * 0: Ultra disk
     * 1: SSD
     */
    readonly diskType?: string | ros.IResolvable;
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
     * Property partitionNum: Number of partitions(recommended).
     * The number of partitions to be configured for the Message Queue for Apache Kafka instance.
     * PartitionNum and TopicQuota must be selected.
     * It is recommended that you only fill in the number of partitions.
     *
     */
    readonly partitionNum?: number | ros.IResolvable;
    /**
     * Property payType: Pay by hour or month.
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * Property serverlessConfig: Serverless instance related settings.
     */
    readonly serverlessConfig?: RosInstance.ServerlessConfigProperty | ros.IResolvable;
    /**
     * Property specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
     * normal: Normal version
     * professional: Professional Edition (high writing edition)
     * professionalForHighRead: Professional Edition (high reading edition)
     */
    readonly specType?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
    /**
     * Property topicQuota: Number of topics (not recommended).
     * The number of topics to be configured for the Message Queue for Apache Kafka instance.
     * PartitionNum and TopicQuota must be selected.
     * It is recommended that you only fill in the number of partitions.
     * The default value of this parameter varies with different peak traffic values.
     * Additional fees are charged if the default values are exceeded.
     *  Different specifications have different default values, and extra fees are charged.
     * For more information, see Billing.
     */
    readonly topicQuota?: number | ros.IResolvable;
}
/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute DomainEndpoint: The default endpoints of the instance in domain name mode.
     */
    readonly attrDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute Endpoint: The SSL endpoints of the instance in IP address mode.
     */
    readonly attrEndpoint: ros.IResolvable | string;
    /**
     * Attribute InstanceId: Id of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute Name: Name of the instance.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute OrderId: Id of the order.
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Attribute SaslDomainEndpoint: The Simple Authentication and Security Layer (SASL) endpoints of the instance in domain name mode.
     */
    readonly attrSaslDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute SslDomainEndpoint: The SSL endpoints of the instance in domain name mode.
     */
    readonly attrSslDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute SslEndpoint: The SSL endpoints of the instance in IP address mode.
     */
    readonly attrSslEndpoint: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KAFKA::Instance`, which is used to create an ApsaraMQ for Kafka instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance
 */
export declare class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute DomainEndpoint: The default endpoints of the instance in domain name mode.
     */
    readonly attrDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute Endpoint: The SSL endpoints of the instance in IP address mode.
     */
    readonly attrEndpoint: ros.IResolvable | string;
    /**
     * Attribute InstanceId: Id of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute Name: Name of the instance.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute OrderId: Id of the order.
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Attribute SaslDomainEndpoint: The Simple Authentication and Security Layer (SASL) endpoints of the instance in domain name mode.
     */
    readonly attrSaslDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute SslDomainEndpoint: The SSL endpoints of the instance in domain name mode.
     */
    readonly attrSslDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute SslEndpoint: The SSL endpoints of the instance in IP address mode.
     */
    readonly attrSslEndpoint: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
