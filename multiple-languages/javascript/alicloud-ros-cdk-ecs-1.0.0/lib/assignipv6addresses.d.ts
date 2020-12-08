import * as ros from '@alicloud/ros-cdk-core';
import { RosAssignIpv6Addresses } from './ecs.generated';
export { RosAssignIpv6Addresses as AssignIpv6AddressesProperty };
/**
 * Properties for defining a `ALIYUN::ECS::AssignIpv6Addresses`
 */
export interface AssignIpv6AddressesProps {
    /**
     * @Property networkInterfaceId: Elastic network interface ID.
     */
    readonly networkInterfaceId: string;
    /**
     * @Property ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    readonly ipv6AddressCount?: number;
    /**
     * @Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     */
    readonly ipv6Addresses?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::AssignIpv6Addresses`
 */
export declare class AssignIpv6Addresses extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute Ipv6AddressIds: Assigned IPv6 address IDs.
     */
    readonly attrIpv6AddressIds: any;
    /**
     * @Attribute Ipv6Addresses: Assigned IPv6 addresses.
     */
    readonly attrIpv6Addresses: any;
    /**
     * @Attribute NetworkInterfaceId: Elastic network interface ID.
     */
    readonly attrNetworkInterfaceId: any;
    /**
     * Create a new `ALIYUN::ECS::AssignIpv6Addresses`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AssignIpv6AddressesProps, enableResourcePropertyConstraint?: boolean);
}
