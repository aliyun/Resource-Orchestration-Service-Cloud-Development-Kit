import * as ros from '@alicloud/ros-cdk-core';
import { RosDeliveryChannel } from './config.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDeliveryChannel as DeliveryChannelProperty };

/**
 * Properties for defining a `DeliveryChannel`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-deliverychannel
 */
export interface DeliveryChannelProps {

    /**
     * Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.
     * This parameter is required when you create a delivery method.
     * Note If the delivery method assumes the service linked role for Cloud Config, you can specify
     * the ARN in the format of the provided example and replace the account ID with the
     * ID of your Alibaba Cloud account.
     */
    readonly deliveryChannelAssumeRoleArn: string | ros.IResolvable;

    /**
     * Property deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required when you create a
     * delivery method. The value must be in one of the following formats:
     * acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
     * acs:mns:{RegionId}:{Aliuid}:\/topics\/{topicName} if your delivery destination is a Message Service (MNS) topic.
     * acs:log:{RegionId}:{Aliuid}:project\/{projectName}\/logstore\/{logstoreName} if your delivery destination is a Log Service Logstore.
     */
    readonly deliveryChannelTargetArn: string | ros.IResolvable;

    /**
     * Property deliveryChannelType: The type of the delivery method. This parameter is required when you create a delivery
     * method. Valid values:
     * OSS
     * MNS
     * SLS
     */
    readonly deliveryChannelType: string | ros.IResolvable;

    /**
     * Property deliveryChannelCondition: The rule attached to the delivery method. This parameter is applicable only to delivery
     * methods of the MNS type.
     * This parameter allows you to specify the lowest risk level for the events to subscribe
     * to and the resource types for which you want to subscribe to events.
     * To specify the lowest risk level for the events to subscribe to, use the following
     * format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}.
     * The value field indicates the lowest risk level and can be set to 1, 2, or 3, which
     * indicates the high risk level, the medium risk level, and the low risk level, respectively.
     * To specify the resource types for which you want to subscribe to events, use the following
     * format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}.
     * The values field indicates the resource types. Its value is a JSON array.
     * Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
     */
    readonly deliveryChannelCondition?: string | ros.IResolvable;

    /**
     * Property deliveryChannelName: The name of the delivery method.
     */
    readonly deliveryChannelName?: string | ros.IResolvable;

    /**
     * Property description: The description of the delivery method.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Represents a `DeliveryChannel`.
 */
export interface IDeliveryChannel extends ros.IResource {
    readonly props: DeliveryChannelProps;

    /**
     * Attribute DeliveryChannelId: The ID of the delivery method.
     */
    readonly attrDeliveryChannelId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Config::DeliveryChannel`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDeliveryChannel`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-deliverychannel
 */
export class DeliveryChannel extends ros.Resource implements IDeliveryChannel {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DeliveryChannelProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DeliveryChannelId: The ID of the delivery method.
     */
    public readonly attrDeliveryChannelId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeliveryChannelProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDeliveryChannel = new RosDeliveryChannel(this, id,  {
            description: props.description,
            deliveryChannelName: props.deliveryChannelName,
            deliveryChannelTargetArn: props.deliveryChannelTargetArn,
            deliveryChannelAssumeRoleArn: props.deliveryChannelAssumeRoleArn,
            deliveryChannelType: props.deliveryChannelType,
            deliveryChannelCondition: props.deliveryChannelCondition,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDeliveryChannel;
        this.attrDeliveryChannelId = rosDeliveryChannel.attrDeliveryChannelId;
    }
}
