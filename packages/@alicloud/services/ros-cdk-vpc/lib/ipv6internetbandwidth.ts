import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv6InternetBandwidth } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIpv6InternetBandwidth as Ipv6InternetBandwidthProperty };

/**
 * Properties for defining a `Ipv6InternetBandwidth`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6internetbandwidth
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
     * - **PayByTraffic**: by using the traffic accounting.
     * - **PayByBandwidth** (default): Bandwidth billing.
     */
    readonly internetChargeType?: string | ros.IResolvable;
}

/**
 * Represents a `Ipv6InternetBandwidth`.
 */
export interface IIpv6InternetBandwidth extends ros.IResource {
    readonly props: Ipv6InternetBandwidthProps;

    /**
     * Attribute InternetBandwidthId: Purchase of public network bandwidth.
     */
    readonly attrInternetBandwidthId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::Ipv6InternetBandwidth`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv6InternetBandwidth`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6internetbandwidth
 */
export class Ipv6InternetBandwidth extends ros.Resource implements IIpv6InternetBandwidth {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: Ipv6InternetBandwidthProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InternetBandwidthId: Purchase of public network bandwidth.
     */
    public readonly attrInternetBandwidthId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Ipv6InternetBandwidthProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIpv6InternetBandwidth = new RosIpv6InternetBandwidth(this, id,  {
            bandwidth: props.bandwidth,
            ipv6AddressId: props.ipv6AddressId,
            ipv6GatewayId: props.ipv6GatewayId,
            internetChargeType: props.internetChargeType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv6InternetBandwidth;
        this.attrInternetBandwidthId = rosIpv6InternetBandwidth.attrInternetBandwidthId;
    }
}
