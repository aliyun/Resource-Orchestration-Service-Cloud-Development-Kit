import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficQos } from './vpc.generated';
export { RosTrafficQos as TrafficQosProperty };
/**
 * Properties for defining a `TrafficQos`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqos
 */
export interface TrafficQosProps {
    /**
     * Property qosDescription: The description of the QoS policy.
     * The description must be 0 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly qosDescription?: string | ros.IResolvable;
    /**
     * Property qosName: The name of the QoS policy.
     * The name must be 0 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly qosName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of traffic qos.
     */
    readonly tags?: RosTrafficQos.TagsProperty[];
}
/**
 * Represents a `TrafficQos`.
 */
export interface ITrafficQos extends ros.IResource {
    readonly props: TrafficQosProps;
    /**
     * Attribute Progressing: The configuration progress of the QoS policy. The value range is **0** to **100 * *.
     */
    readonly attrProgressing: ros.IResolvable | string;
    /**
     * Attribute QosDescription: The description of the QoS policy.
     */
    readonly attrQosDescription: ros.IResolvable | string;
    /**
     * Attribute QosId: The QoS policy ID.
     */
    readonly attrQosId: ros.IResolvable | string;
    /**
     * Attribute QosName: The name of the QoS policy.
     */
    readonly attrQosName: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the QoS policy.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::TrafficQos`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficQos`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqos
 */
export declare class TrafficQos extends ros.Resource implements ITrafficQos {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TrafficQosProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Progressing: The configuration progress of the QoS policy. The value range is **0** to **100 * *.
     */
    readonly attrProgressing: ros.IResolvable | string;
    /**
     * Attribute QosDescription: The description of the QoS policy.
     */
    readonly attrQosDescription: ros.IResolvable | string;
    /**
     * Attribute QosId: The QoS policy ID.
     */
    readonly attrQosId: ros.IResolvable | string;
    /**
     * Attribute QosName: The name of the QoS policy.
     */
    readonly attrQosName: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the QoS policy.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: TrafficQosProps, enableResourcePropertyConstraint?: boolean);
}
