import * as ros from '@alicloud/ros-cdk-core';
import { RosOriginInstance } from './ddos.generated';
export { RosOriginInstance as OriginInstanceProperty };
/**
 * Properties for defining a `OriginInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
 */
export interface OriginInstanceProps {
    /**
     * Property edition: Edition of the instance. Valid values:
     *  - enterprise: Enterprise Edition.
     * - smb: Affordable and general edition for small and medium-sized enterprises.
     */
    readonly edition: string | ros.IResolvable;
    /**
     * Property protectionMode: The mode of the protection. Valid values:
     * unlimited: The Unlimited protection mode is intended for internal use within enterprises.
     */
    readonly protectionMode: string | ros.IResolvable;
    /**
     * Property chargeType: The charge type of the instance. Valid values:
     * PostPaid: Pay-as-you-go.
     * PrePaid: Subscription.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
     * When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit\/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit\/s.
     */
    readonly cleanBandwidth?: number | ros.IResolvable;
    /**
     * Property enableLog: Whether to enable protection logs.
     */
    readonly enableLog?: boolean | ros.IResolvable;
    /**
     * Property ipAddresses: The number of ip addresses.
     * When Edition is smb， IP Addresses ranges from 1 to 29.
     * When Edition is enterprise, The minimum number of IP Addresses is 30.
     */
    readonly ipAddresses?: number | ros.IResolvable;
    /**
     * Property networkProtocol: The network protocol of the instance. Valid values:
     * v4: IPv4.
     * v6: IPv6.
     * v4_6: IPv4+IPv6.
     */
    readonly networkProtocol?: string | ros.IResolvable;
    /**
     * Property period: The period of the instance.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodUnit: The period unit of the instance. Valid values:
     * Month: Month.
     * Year: Year.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosOriginInstance.TagsProperty[];
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DDoS::OriginInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOriginInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
 */
export declare class OriginInstance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: OriginInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OriginInstanceProps, enableResourcePropertyConstraint?: boolean);
}
