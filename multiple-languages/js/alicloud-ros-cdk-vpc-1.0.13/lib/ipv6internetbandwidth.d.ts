import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv6InternetBandwidth } from './vpc.generated';
export { RosIpv6InternetBandwidth as Ipv6InternetBandwidthProperty };
/**
 * Properties for defining a `ALIYUN::VPC::Ipv6InternetBandwidth`
 */
export interface Ipv6InternetBandwidthProps {
    /**
     * Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
     * When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
     * When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
     * Small (default free version), the public network bandwidth range 1-500.
     * Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
     * Large (Enterprise Edition), the public network bandwidth range 1-2000.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * Property ipv6AddressId: ID of IPv6 address.
     */
    readonly ipv6AddressId: string | ros.IResolvable;
    /**
     * Property ipv6GatewayId: ID of IPv6 gateway.
     */
    readonly ipv6GatewayId: string | ros.IResolvable;
    /**
     * Property internetChargeType: IPv6 public network bandwidth billing, value:
     * PayByTraffic: by using the traffic accounting.
     * PayByBandwidth (default): Bandwidth billing.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosIpv6InternetBandwidth.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::VPC::Ipv6InternetBandwidth`
 */
export declare class Ipv6InternetBandwidth extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InternetBandwidthId: Purchase of public network bandwidth.
     */
    readonly attrInternetBandwidthId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::Ipv6InternetBandwidth`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Ipv6InternetBandwidthProps, enableResourcePropertyConstraint?: boolean);
}
