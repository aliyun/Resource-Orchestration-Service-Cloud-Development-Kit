import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosOriginInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
 */
export interface RosOriginInstanceProps {
    /**
     * @Property edition: Edition of the instance. Valid values:
     *  - enterprise: Enterprise Edition.
     * - smb: Affordable and general edition for small and medium-sized enterprises.
     */
    readonly edition: string | ros.IResolvable;
    /**
     * @Property protectionMode: The mode of the protection. Valid values:
     * unlimited: The Unlimited protection mode is intended for internal use within enterprises.
     */
    readonly protectionMode: string | ros.IResolvable;
    /**
     * @Property chargeType: The charge type of the instance. Valid values:
     * PostPaid: Pay-as-you-go.
     * PrePaid: Subscription.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
     * When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit\/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit\/s.
     */
    readonly cleanBandwidth?: number | ros.IResolvable;
    /**
     * @Property enableLog: Whether to enable protection logs.
     */
    readonly enableLog?: boolean | ros.IResolvable;
    /**
     * @Property ipAddresses: The number of ip addresses.
     * When Edition is smb， IP Addresses ranges from 1 to 29.
     * When Edition is enterprise, The minimum number of IP Addresses is 30.
     */
    readonly ipAddresses?: number | ros.IResolvable;
    /**
     * @Property networkProtocol: The network protocol of the instance. Valid values:
     * v4: IPv4.
     * v6: IPv6.
     * v4_6: IPv4+IPv6.
     */
    readonly networkProtocol?: string | ros.IResolvable;
    /**
     * @Property period: The period of the instance.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The period unit of the instance. Valid values:
     * Month: Month.
     * Year: Year.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosOriginInstance.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoS::OriginInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `OriginInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
 */
export declare class RosOriginInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoS::OriginInstance";
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property edition: Edition of the instance. Valid values:
     *  - enterprise: Enterprise Edition.
     * - smb: Affordable and general edition for small and medium-sized enterprises.
     */
    edition: string | ros.IResolvable;
    /**
     * @Property protectionMode: The mode of the protection. Valid values:
     * unlimited: The Unlimited protection mode is intended for internal use within enterprises.
     */
    protectionMode: string | ros.IResolvable;
    /**
     * @Property chargeType: The charge type of the instance. Valid values:
     * PostPaid: Pay-as-you-go.
     * PrePaid: Subscription.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
     * When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit\/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit\/s.
     */
    cleanBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property enableLog: Whether to enable protection logs.
     */
    enableLog: boolean | ros.IResolvable | undefined;
    /**
     * @Property ipAddresses: The number of ip addresses.
     * When Edition is smb， IP Addresses ranges from 1 to 29.
     * When Edition is enterprise, The minimum number of IP Addresses is 30.
     */
    ipAddresses: number | ros.IResolvable | undefined;
    /**
     * @Property networkProtocol: The network protocol of the instance. Valid values:
     * v4: IPv4.
     * v6: IPv6.
     * v4_6: IPv4+IPv6.
     */
    networkProtocol: string | ros.IResolvable | undefined;
    /**
     * @Property period: The period of the instance.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The period unit of the instance. Valid values:
     * Month: Month.
     * Year: Year.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosOriginInstance.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOriginInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosOriginInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
