import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterface } from './ecs.generated';
export { RosNetworkInterface as NetworkInterfaceProperty };
/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterface`
 */
export interface NetworkInterfaceProps {
    /**
     * @Property vSwitchId: VSwitch ID of the specified VPC. Specifies the switch ID for the VPC.
     */
    readonly vSwitchId: string;
    /**
     * @Property description: Description of your ENI. It is a string of [2, 256] English or Chinese characters.
     */
    readonly description?: string;
    /**
     * @Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    readonly networkInterfaceName?: string;
    /**
     * @Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
     */
    readonly primaryIpAddress?: string;
    /**
     * @Property privateIpAddresses: Specifies secondary private IP addresses of the ENI. This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
     */
    readonly privateIpAddresses?: string[];
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;
    /**
     * @Property securityGroupId: The ID of the security group that the ENI joins. The security group and the ENI must be in a same VPC.
     */
    readonly securityGroupId?: string;
    /**
     * @Property securityGroupIds: The IDs of the security groups that the ENI joins. The security groups and the ENI must belong to the same VPC.
     */
    readonly securityGroupIds?: string[];
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
     * @Attribute MacAddress: The MAC address of your Network Interface.
     */
    readonly attrMacAddress: any;
    /**
     * @Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    readonly attrNetworkInterfaceId: any;
    /**
     * @Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
     */
    readonly attrPrivateIpAddress: any;
    /**
     * @Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
     */
    readonly attrSecondaryPrivateIpAddresses: any;
    /**
     * Create a new `ALIYUN::ECS::NetworkInterface`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfaceProps, enableResourcePropertyConstraint?: boolean);
}
