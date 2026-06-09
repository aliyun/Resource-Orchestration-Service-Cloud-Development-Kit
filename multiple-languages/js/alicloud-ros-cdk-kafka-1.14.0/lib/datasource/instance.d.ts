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
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;
    /**
     * Attribute AllConfig: The current configuration of the deployed message queue Kafka version.
     */
    readonly attrAllConfig: ros.IResolvable | string;
    /**
     * Attribute AllowedList: White list.
     */
    readonly attrAllowedList: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DeployType: Deployment method.
     */
    readonly attrDeployType: ros.IResolvable | string;
    /**
     * Attribute DiskSize: Disk size.
     */
    readonly attrDiskSize: ros.IResolvable | string;
    /**
     * Attribute DiskType: Disk type.
     */
    readonly attrDiskType: ros.IResolvable | string;
    /**
     * Attribute DomainEndpoint: The domain name access point of the default access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute EipMax: Peak public network traffic.
     */
    readonly attrEipMax: ros.IResolvable | string;
    /**
     * Attribute EndPoint: Access point.
     */
    readonly attrEndPoint: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: Expiration time.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceName: Note name.
     */
    readonly attrInstanceName: ros.IResolvable | string;
    /**
     * Attribute IoMax: Peak flow.
     */
    readonly attrIoMax: ros.IResolvable | string;
    /**
     * Attribute IoMaxSpec: Flow specifications (recommended).
     */
    readonly attrIoMaxSpec: ros.IResolvable | string;
    /**
     * Attribute MsgRetain: Message save time.
     */
    readonly attrMsgRetain: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SaslDomainEndpoint: The domain name access point of the SASL access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrSaslDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute ServiceVersion: The version of the Kafka version of the deployed Message Queue. The value is 0.10.2 or 2.2.0.
     */
    readonly attrServiceVersion: ros.IResolvable | string;
    /**
     * Attribute SpecType: Instance type.
     */
    readonly attrSpecType: ros.IResolvable | string;
    /**
     * Attribute SslDomainEndpoint: The domain name of the SSL access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrSslDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute SslEndPoint: External access point.
     */
    readonly attrSslEndPoint: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TopicNumLimit: Maximum number of topic creation.
     */
    readonly attrTopicNumLimit: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: Switch id.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcId: VpcId.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneId: The ID of the zone in which the instance is deployed.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KAFKA::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-instance
 */
export declare class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AllConfig: The current configuration of the deployed message queue Kafka version.
     */
    readonly attrAllConfig: ros.IResolvable | string;
    /**
     * Attribute AllowedList: White list.
     */
    readonly attrAllowedList: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DeployType: Deployment method.
     */
    readonly attrDeployType: ros.IResolvable | string;
    /**
     * Attribute DiskSize: Disk size.
     */
    readonly attrDiskSize: ros.IResolvable | string;
    /**
     * Attribute DiskType: Disk type.
     */
    readonly attrDiskType: ros.IResolvable | string;
    /**
     * Attribute DomainEndpoint: The domain name access point of the default access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute EipMax: Peak public network traffic.
     */
    readonly attrEipMax: ros.IResolvable | string;
    /**
     * Attribute EndPoint: Access point.
     */
    readonly attrEndPoint: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: Expiration time.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceName: Note name.
     */
    readonly attrInstanceName: ros.IResolvable | string;
    /**
     * Attribute IoMax: Peak flow.
     */
    readonly attrIoMax: ros.IResolvable | string;
    /**
     * Attribute IoMaxSpec: Flow specifications (recommended).
     */
    readonly attrIoMaxSpec: ros.IResolvable | string;
    /**
     * Attribute MsgRetain: Message save time.
     */
    readonly attrMsgRetain: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SaslDomainEndpoint: The domain name access point of the SASL access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrSaslDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute ServiceVersion: The version of the Kafka version of the deployed Message Queue. The value is 0.10.2 or 2.2.0.
     */
    readonly attrServiceVersion: ros.IResolvable | string;
    /**
     * Attribute SpecType: Instance type.
     */
    readonly attrSpecType: ros.IResolvable | string;
    /**
     * Attribute SslDomainEndpoint: The domain name of the SSL access point. The Kafka instance supports domain name access points and IP access points.
     */
    readonly attrSslDomainEndpoint: ros.IResolvable | string;
    /**
     * Attribute SslEndPoint: External access point.
     */
    readonly attrSslEndPoint: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TopicNumLimit: Maximum number of topic creation.
     */
    readonly attrTopicNumLimit: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: Switch id.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcId: VpcId.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneId: The ID of the zone in which the instance is deployed.
     */
    readonly attrZoneId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
