import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './kafka.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-instance
 */
export interface InstanceProps {
    /**
     * Property instanceId: The ID of the instance.
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KAFKA::Instance`, which is used to query the information about an ApsaraMQ for Kafka instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-instance
 */
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AllConfig: The current configuration of the deployed message queue Kafka version.
     */
    readonly attrAllConfig: ros.IResolvable;
    /**
     * Attribute AllowedList: White list.
     */
    readonly attrAllowedList: ros.IResolvable;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DeployType: Deployment method.
     */
    readonly attrDeployType: ros.IResolvable;
    /**
     * Attribute DiskSize: Disk size.
     */
    readonly attrDiskSize: ros.IResolvable;
    /**
     * Attribute DiskType: Disk type.
     */
    readonly attrDiskType: ros.IResolvable;
    /**
     * Attribute DomainEndpoint: The domain name access point of the default access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrDomainEndpoint: ros.IResolvable;
    /**
     * Attribute EipMax: Peak public network traffic.
     */
    readonly attrEipMax: ros.IResolvable;
    /**
     * Attribute EndPoint: Access point.
     */
    readonly attrEndPoint: ros.IResolvable;
    /**
     * Attribute ExpiredTime: Expiration time.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceName: Note name.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute IoMax: Peak flow.
     */
    readonly attrIoMax: ros.IResolvable;
    /**
     * Attribute IoMaxSpec: Flow specifications (recommended).
     */
    readonly attrIoMaxSpec: ros.IResolvable;
    /**
     * Attribute MsgRetain: Message save time.
     */
    readonly attrMsgRetain: ros.IResolvable;
    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SaslDomainEndpoint: The domain name access point of the SASL access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrSaslDomainEndpoint: ros.IResolvable;
    /**
     * Attribute ServiceVersion: The version of the Kafka version of the deployed Message Queue. The value is 0.10.2 or 2.2.0.
     */
    readonly attrServiceVersion: ros.IResolvable;
    /**
     * Attribute SpecType: Instance type.
     */
    readonly attrSpecType: ros.IResolvable;
    /**
     * Attribute SslDomainEndpoint: The domain name of the SSL access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrSslDomainEndpoint: ros.IResolvable;
    /**
     * Attribute SslEndPoint: External access point.
     */
    readonly attrSslEndPoint: ros.IResolvable;
    /**
     * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute TopicNumLimit: Maximum number of topic creation.
     */
    readonly attrTopicNumLimit: ros.IResolvable;
    /**
     * Attribute VSwitchId: Switch id.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcId: VpcId.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute ZoneId: The ID of the zone in which the instance is deployed.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
