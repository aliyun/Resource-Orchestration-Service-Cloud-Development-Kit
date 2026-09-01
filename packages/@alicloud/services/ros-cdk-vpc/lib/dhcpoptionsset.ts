import * as ros from '@alicloud/ros-cdk-core';
import { RosDhcpOptionsSet } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDhcpOptionsSet as DhcpOptionsSetProperty };

/**
 * Properties for defining a `DhcpOptionsSet`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
 */
export interface DhcpOptionsSetProps {

    /**
     * Property dhcpOptionsSetDescription: The description of the DHCP options set.
     * The description must be 1 to 256 characters in length. It must start with a
     * letter and cannot start with `http:\/\/` or `https:\/\/`.
     */
    readonly dhcpOptionsSetDescription?: string | ros.IResolvable;

    /**
     * Property dhcpOptionsSetName: The name of the DHCP options set.
     * The name must be 1 to 128 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly dhcpOptionsSetName?: string | ros.IResolvable;

    /**
     * Property domainName: The root domain, for example, example.com.
     * After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
     */
    readonly domainName?: string | ros.IResolvable;

    /**
     * Property domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
     */
    readonly domainNameServers?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ipv6LeaseTime: The lease time of the IPv6 addresses for the DHCP options set.
     * *   If you use hours as the unit, valid values are 24h to 1176h and 87600h to
     * 175200h. Default value: 87600h.
     * *   If you use days as the unit, valid values are 1d to 49d and 3650d to 7300d.
     * Default value: 3650d.
     * >  When you enter a value, you must also specify the unit.
     */
    readonly ipv6LeaseTime?: string | ros.IResolvable;

    /**
     * Property leaseTime: The lease time of the IPv4 DHCP options set.
     * 
     * - When setting lease time in hours: unit: h. Valid values: **24h~1176h**, **87600h~175200h**. Default value: **87600h**.
     * 
     * - When setting lease time in days: unit: d. Valid values: **1d~49d**, **3650d~7300d**. Default value: **3650d**.
     * 
     * When specifying parameter values, you must include the unit.
     */
    readonly leaseTime?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the DHCP options set belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Represents a `DhcpOptionsSet`.
 */
export interface IDhcpOptionsSet extends ros.IResource {
    readonly props: DhcpOptionsSetProps;

    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP options set that is created.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::DhcpOptionsSet`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDhcpOptionsSet`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
 */
export class DhcpOptionsSet extends ros.Resource implements IDhcpOptionsSet {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DhcpOptionsSetProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP options set that is created.
     */
    public readonly attrDhcpOptionsSetId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DhcpOptionsSetProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDhcpOptionsSet = new RosDhcpOptionsSet(this, id,  {
            resourceGroupId: props.resourceGroupId,
            domainName: props.domainName,
            ipv6LeaseTime: props.ipv6LeaseTime,
            dhcpOptionsSetName: props.dhcpOptionsSetName,
            dhcpOptionsSetDescription: props.dhcpOptionsSetDescription,
            domainNameServers: props.domainNameServers,
            leaseTime: props.leaseTime,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDhcpOptionsSet;
        this.attrDhcpOptionsSetId = rosDhcpOptionsSet.attrDhcpOptionsSetId;
    }
}
