import * as ros from '@alicloud/ros-cdk-core';
import { RosAssignIpv6Addresses } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAssignIpv6Addresses as AssignIpv6AddressesProperty };

/**
 * Properties for defining a `AssignIpv6Addresses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
 */
export interface AssignIpv6AddressesProps {

    /**
     * Property networkInterfaceId: Elastic network interface ID.
     */
    readonly networkInterfaceId: string | ros.IResolvable;

    /**
     * Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;

    /**
     * Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 10. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    readonly ipv6Addresses?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ipv6PrefixCount: IPv6 prefix specified number of randomly generated interfaces elasticity.
     */
    readonly ipv6PrefixCount?: number | ros.IResolvable;

    /**
     * Property ipv6Prefixes: Specify one or more IPv6 prefixes for the elastic NIC.
     */
    readonly ipv6Prefixes?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `AssignIpv6Addresses`.
 */
export interface IAssignIpv6Addresses extends ros.IResource {
    readonly props: AssignIpv6AddressesProps;

    /**
     * Attribute Ipv6AddressIds: Assigned IPv6 address IDs.
     */
    readonly attrIpv6AddressIds: ros.IResolvable | string;

    /**
     * Attribute Ipv6Addresses: Assigned IPv6 addresses.
     */
    readonly attrIpv6Addresses: ros.IResolvable | string;

    /**
     * Attribute NetworkInterfaceId: Elastic network interface ID.
     */
    readonly attrNetworkInterfaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::AssignIpv6Addresses`, which is used to assign one or more IPv6 addresses to an elastic network interface (ENI).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAssignIpv6Addresses`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignipv6addresses
 */
export class AssignIpv6Addresses extends ros.Resource implements IAssignIpv6Addresses {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AssignIpv6AddressesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Ipv6AddressIds: Assigned IPv6 address IDs.
     */
    public readonly attrIpv6AddressIds: ros.IResolvable | string;

    /**
     * Attribute Ipv6Addresses: Assigned IPv6 addresses.
     */
    public readonly attrIpv6Addresses: ros.IResolvable | string;

    /**
     * Attribute NetworkInterfaceId: Elastic network interface ID.
     */
    public readonly attrNetworkInterfaceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AssignIpv6AddressesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAssignIpv6Addresses = new RosAssignIpv6Addresses(this, id,  {
            ipv6PrefixCount: props.ipv6PrefixCount,
            ipv6AddressCount: props.ipv6AddressCount,
            ipv6Addresses: props.ipv6Addresses,
            ipv6Prefixes: props.ipv6Prefixes,
            networkInterfaceId: props.networkInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAssignIpv6Addresses;
        this.attrIpv6AddressIds = rosAssignIpv6Addresses.attrIpv6AddressIds;
        this.attrIpv6Addresses = rosAssignIpv6Addresses.attrIpv6Addresses;
        this.attrNetworkInterfaceId = rosAssignIpv6Addresses.attrNetworkInterfaceId;
    }
}
