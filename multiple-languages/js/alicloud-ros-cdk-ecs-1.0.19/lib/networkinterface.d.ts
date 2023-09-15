import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterface } from './ecs.generated';
export { RosNetworkInterface as NetworkInterfaceProperty };
/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterface`
 */
export interface NetworkInterfaceProps {
    /**
     * Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;
    /**
     * Property ipv6Addresses: The IPv6 address N to assign to the ENI.
     */
    readonly ipv6Addresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    readonly networkInterfaceName?: string | ros.IResolvable;
    /**
     * Property networkInterfaceTrafficMode: The communication mode of the ENI. Valid values:
     * Standard: uses the TCP communication mode.
     * HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
     */
    readonly networkInterfaceTrafficMode?: string | ros.IResolvable;
    /**
     * Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
     */
    readonly primaryIpAddress?: string | ros.IResolvable;
    /**
     * Property privateIpAddresses: Specifies secondary private IP addresses of the ENI. This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
     */
    readonly privateIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property queueNumber: The number of queues that are supported by the ENI. Valid values: 1 to 2048.
     * When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
     * By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
     */
    readonly queueNumber?: number | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
     */
    readonly secondaryPrivateIpAddressCount?: number | ros.IResolvable;
    /**
     * Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property securityGroupIds: The IDs of the security groups that the ENI joins. The security groups and the ENI must belong to the same VPC.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosNetworkInterface.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::ECS::NetworkInterface`
 */
export declare class NetworkInterface extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute MacAddress: The MAC address of your Network Interface.
     */
    readonly attrMacAddress: ros.IResolvable;
    /**
     * Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    readonly attrNetworkInterfaceId: ros.IResolvable;
    /**
     * Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
     */
    readonly attrPrivateIpAddress: ros.IResolvable;
    /**
     * Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
     */
    readonly attrSecondaryPrivateIpAddresses: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::NetworkInterface`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfaceProps, enableResourcePropertyConstraint?: boolean);
}
