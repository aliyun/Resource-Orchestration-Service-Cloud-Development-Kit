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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KAFKA::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-instance
 */
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AllConfig: The current configuration of the deployed message queue Kafka version.
     */
    public readonly attrAllConfig: ros.IResolvable;

    /**
     * Attribute AllowedList: White list.
     */
    public readonly attrAllowedList: ros.IResolvable;

    /**
     * Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DeployType: Deployment method.
     */
    public readonly attrDeployType: ros.IResolvable;

    /**
     * Attribute DiskSize: Disk size.
     */
    public readonly attrDiskSize: ros.IResolvable;

    /**
     * Attribute DiskType: Disk type.
     */
    public readonly attrDiskType: ros.IResolvable;

    /**
     * Attribute DomainEndpoint: The domain name access point of the default access point. The Kafka instance supports domain name access points and IP access points.
     */
    public readonly attrDomainEndpoint: ros.IResolvable;

    /**
     * Attribute EipMax: Peak public network traffic.
     */
    public readonly attrEipMax: ros.IResolvable;

    /**
     * Attribute EndPoint: Access point.
     */
    public readonly attrEndPoint: ros.IResolvable;

    /**
     * Attribute ExpiredTime: Expiration time.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceName: Note name.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute IoMax: Peak flow.
     */
    public readonly attrIoMax: ros.IResolvable;

    /**
     * Attribute IoMaxSpec: Flow specifications (recommended).
     */
    public readonly attrIoMaxSpec: ros.IResolvable;

    /**
     * Attribute MsgRetain: Message save time.
     */
    public readonly attrMsgRetain: ros.IResolvable;

    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SaslDomainEndpoint: The domain name access point of the SASL access point. The Kafka instance supports domain name access points and IP access points.
     */
    public readonly attrSaslDomainEndpoint: ros.IResolvable;

    /**
     * Attribute ServiceVersion: The version of the Kafka version of the deployed Message Queue. The value is 0.10.2 or 2.2.0.
     */
    public readonly attrServiceVersion: ros.IResolvable;

    /**
     * Attribute SpecType: Instance type.
     */
    public readonly attrSpecType: ros.IResolvable;

    /**
     * Attribute SslDomainEndpoint: The domain name of the SSL access point. The Kafka instance supports domain name access points and IP access points.
     */
    public readonly attrSslDomainEndpoint: ros.IResolvable;

    /**
     * Attribute SslEndPoint: External access point.
     */
    public readonly attrSslEndPoint: ros.IResolvable;

    /**
     * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute TopicNumLimit: Maximum number of topic creation.
     */
    public readonly attrTopicNumLimit: ros.IResolvable;

    /**
     * Attribute VSwitchId: Switch id.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: VpcId.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute ZoneId: The ID of the zone in which the instance is deployed.
     */
    public readonly attrZoneId: ros.IResolvable;

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
