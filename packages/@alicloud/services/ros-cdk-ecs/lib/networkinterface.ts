import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterface } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    readonly networkInterfaceName?: string | ros.IResolvable;

    /**
     * Property primaryIpAddress: The primary private IP address of the ENI.  The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
     */
    readonly primaryIpAddress?: string | ros.IResolvable;

    /**
     * Property privateIpAddresses: Specifies secondary private IP addresses of the ENI. This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
     */
    readonly privateIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;

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
export class NetworkInterface extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute MacAddress: The MAC address of your Network Interface.
     */
    public readonly attrMacAddress: ros.IResolvable;

    /**
     * Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    public readonly attrNetworkInterfaceId: ros.IResolvable;

    /**
     * Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
     */
    public readonly attrPrivateIpAddress: ros.IResolvable;

    /**
     * Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
     */
    public readonly attrSecondaryPrivateIpAddresses: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECS::NetworkInterface`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNetworkInterface = new RosNetworkInterface(this, id,  {
            description: props.description,
            privateIpAddresses: props.privateIpAddresses,
            resourceGroupId: props.resourceGroupId,
            secondaryPrivateIpAddressCount: props.secondaryPrivateIpAddressCount,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            networkInterfaceName: props.networkInterfaceName,
            primaryIpAddress: props.primaryIpAddress,
            securityGroupIds: props.securityGroupIds,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkInterface;
        this.attrMacAddress = rosNetworkInterface.attrMacAddress;
        this.attrNetworkInterfaceId = rosNetworkInterface.attrNetworkInterfaceId;
        this.attrPrivateIpAddress = rosNetworkInterface.attrPrivateIpAddress;
        this.attrSecondaryPrivateIpAddresses = rosNetworkInterface.attrSecondaryPrivateIpAddresses;
    }
}
