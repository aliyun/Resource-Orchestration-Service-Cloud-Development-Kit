import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './kafka.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AllConfig: The current configuration of the deployed message queue Kafka version.
     */
    public readonly attrAllConfig: ros.IResolvable | string;

    /**
     * Attribute AllowedList: White list.
     */
    public readonly attrAllowedList: ros.IResolvable | string;

    /**
     * Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DeployType: Deployment method.
     */
    public readonly attrDeployType: ros.IResolvable | string;

    /**
     * Attribute DiskSize: Disk size.
     */
    public readonly attrDiskSize: ros.IResolvable | string;

    /**
     * Attribute DiskType: Disk type.
     */
    public readonly attrDiskType: ros.IResolvable | string;

    /**
     * Attribute DomainEndpoint: The domain name access point of the default access point. The Kafka instance supports domain name access points and IP access points.
     */
    public readonly attrDomainEndpoint: ros.IResolvable | string;

    /**
     * Attribute EipMax: Peak public network traffic.
     */
    public readonly attrEipMax: ros.IResolvable | string;

    /**
     * Attribute EndPoint: Access point.
     */
    public readonly attrEndPoint: ros.IResolvable | string;

    /**
     * Attribute ExpiredTime: Expiration time.
     */
    public readonly attrExpiredTime: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: Note name.
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute IoMax: Peak flow.
     */
    public readonly attrIoMax: ros.IResolvable | string;

    /**
     * Attribute IoMaxSpec: Flow specifications (recommended).
     */
    public readonly attrIoMaxSpec: ros.IResolvable | string;

    /**
     * Attribute MsgRetain: Message save time.
     */
    public readonly attrMsgRetain: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SaslDomainEndpoint: The domain name access point of the SASL access point. The Kafka instance supports domain name access points and IP access points.
     */
    public readonly attrSaslDomainEndpoint: ros.IResolvable | string;

    /**
     * Attribute ServiceVersion: The version of the Kafka version of the deployed Message Queue. The value is 0.10.2 or 2.2.0.
     */
    public readonly attrServiceVersion: ros.IResolvable | string;

    /**
     * Attribute SpecType: Instance type.
     */
    public readonly attrSpecType: ros.IResolvable | string;

    /**
     * Attribute SslDomainEndpoint: The domain name of the SSL access point. The Kafka instance supports domain name access points and IP access points.
     */
    public readonly attrSslDomainEndpoint: ros.IResolvable | string;

    /**
     * Attribute SslEndPoint: External access point.
     */
    public readonly attrSslEndPoint: ros.IResolvable | string;

    /**
     * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute TopicNumLimit: Maximum number of topic creation.
     */
    public readonly attrTopicNumLimit: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: Switch id.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: VpcId.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The ID of the zone in which the instance is deployed.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrAllConfig = rosInstance.attrAllConfig;
        this.attrAllowedList = rosInstance.attrAllowedList;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrDeployType = rosInstance.attrDeployType;
        this.attrDiskSize = rosInstance.attrDiskSize;
        this.attrDiskType = rosInstance.attrDiskType;
        this.attrDomainEndpoint = rosInstance.attrDomainEndpoint;
        this.attrEipMax = rosInstance.attrEipMax;
        this.attrEndPoint = rosInstance.attrEndPoint;
        this.attrExpiredTime = rosInstance.attrExpiredTime;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrIoMax = rosInstance.attrIoMax;
        this.attrIoMaxSpec = rosInstance.attrIoMaxSpec;
        this.attrMsgRetain = rosInstance.attrMsgRetain;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrResourceGroupId = rosInstance.attrResourceGroupId;
        this.attrSaslDomainEndpoint = rosInstance.attrSaslDomainEndpoint;
        this.attrServiceVersion = rosInstance.attrServiceVersion;
        this.attrSpecType = rosInstance.attrSpecType;
        this.attrSslDomainEndpoint = rosInstance.attrSslDomainEndpoint;
        this.attrSslEndPoint = rosInstance.attrSslEndPoint;
        this.attrTags = rosInstance.attrTags;
        this.attrTopicNumLimit = rosInstance.attrTopicNumLimit;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
        this.attrVpcId = rosInstance.attrVpcId;
        this.attrZoneId = rosInstance.attrZoneId;
    }
}
