import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterface } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNetworkInterface as NetworkInterfaceProperty };

/**
 * Properties for defining a `NetworkInterface`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
 */
export interface NetworkInterfaceProps {

    /**
     * Property vSwitchId: The ID of the VSwitch for the elastic network interface. The private IP addresses
     * for the elastic network interface are assigned from the available CIDR block of
     * the VSwitch.
     * ><notice>
     * The elastic network interface and the instance to be attached must be in the same
     * availability zone but can belong to different VSwitches.
     * ><\/notice>
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.
     */
    readonly deleteOnRelease?: boolean | ros.IResolvable;

    /**
     * Property description: The description of the elastic network interface. The description must be 2 to
     * 256 characters long and cannot start with `http:\/\/` or `https:\/\/`.
     * Default value: empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface. Range: 1-10
     * **Note**: If you need to set an IPv4 prefix for an elastic network interface, you must set either Ipv4Prefixes or Ipv4PrefixCount, but not both.
     */
    readonly ipv4PrefixCount?: number | ros.IResolvable;

    /**
     * Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface.
     */
    readonly ipv4Prefixes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ipv6AddressCount: The number of random IPv6 addresses to assign to the elastic network interface.
     * Valid values: 1 to 10.
     * > You must specify either `Ipv6Address.N` or `Ipv6AddressCount`, but not both, to
     * assign IPv6 addresses.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;

    /**
     * Property ipv6Addresses: The IPv6 address N to assign to the ENI.
     */
    readonly ipv6Addresses?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface. Range: 1-10
     * **Note**: If you need to set an IPv6 prefix for an elastic network interface, you must set either Ipv6Prefixes or Ipv6PrefixCount, but not both.
     */
    readonly ipv6PrefixCount?: number | ros.IResolvable;

    /**
     * Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface.
     */
    readonly ipv6Prefixes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property networkInterfaceName: Name of your ENI. It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
     */
    readonly networkInterfaceName?: string | ros.IResolvable;

    /**
     * Property networkInterfaceTrafficMode: The traffic mode of the elastic network interface. Valid values:
     * - `Standard`: uses the TCP traffic mode.
     * - `HighPerformance`: enables the Elastic RDMA Interface (ERI) and uses the RDMA
     * traffic mode.
     * > An elastic network interface in RDMA traffic mode can be attached only to an
     * ERI-supported instance type. The number of these elastic network interfaces that
     * can be attached is limited by the instance family. Default value: `Standard`.
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
     * Property rxQueueSize: Elastic network card inbound queue depth.
     * **Note**: The inbound queue depth of the network card must be equal to the outbound queue depth, ranging from 8192 to 16384, and must be a power of two.
     * Larger inbound queue depth can improve inbound throughput, but it consumes more memory.
     */
    readonly rxQueueSize?: number | ros.IResolvable;

    /**
     * Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
     */
    readonly secondaryPrivateIpAddressCount?: number | ros.IResolvable;

    /**
     * Property securityGroupId: The ID of the security group for the elastic network interface. The security
     * group and the elastic network interface must be in the same VPC.
     * > You must specify either `SecurityGroupId` or `SecurityGroupIds.N`, but not
     * both.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupIds: The IDs of one or more security groups to which to add the elastic network
     * interface. The security groups and the elastic network interface must be in the
     * same VPC. The valid values of N depend on the maximum number of security groups
     * to which an elastic network interface can be added. 
     * > You must specify either `SecurityGroupId` or `SecurityGroupIds.N`, but not
     * both.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosNetworkInterface.TagsProperty[];

    /**
     * Property txQueueSize: Elastic network card outbound queue depth.
     * **Note**: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
     * Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
     */
    readonly txQueueSize?: number | ros.IResolvable;
}

/**
 * Represents a `NetworkInterface`.
 */
export interface INetworkInterface extends ros.IResource {
    readonly props: NetworkInterfaceProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute MacAddress: The MAC address of your Network Interface.
     */
    readonly attrMacAddress: ros.IResolvable | string;

    /**
     * Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    readonly attrNetworkInterfaceId: ros.IResolvable | string;

    /**
     * Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
     */
    readonly attrPrivateIpAddress: ros.IResolvable | string;

    /**
     * Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
     */
    readonly attrSecondaryPrivateIpAddresses: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::NetworkInterface`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkInterface`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
 */
export class NetworkInterface extends ros.Resource implements INetworkInterface {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NetworkInterfaceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute MacAddress: The MAC address of your Network Interface.
     */
    public readonly attrMacAddress: ros.IResolvable | string;

    /**
     * Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    public readonly attrNetworkInterfaceId: ros.IResolvable | string;

    /**
     * Attribute PrivateIpAddress: The primary private ip address of your Network Interface.
     */
    public readonly attrPrivateIpAddress: ros.IResolvable | string;

    /**
     * Attribute SecondaryPrivateIpAddresses: The secondary private IP addresses of your Network Interface.
     */
    public readonly attrSecondaryPrivateIpAddresses: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNetworkInterface = new RosNetworkInterface(this, id,  {
            networkInterfaceTrafficMode: props.networkInterfaceTrafficMode,
            description: props.description,
            privateIpAddresses: props.privateIpAddresses,
            resourceGroupId: props.resourceGroupId,
            secondaryPrivateIpAddressCount: props.secondaryPrivateIpAddressCount,
            deleteOnRelease: props.deleteOnRelease,
            ipv6PrefixCount: props.ipv6PrefixCount,
            ipv4Prefixes: props.ipv4Prefixes,
            securityGroupId: props.securityGroupId,
            vSwitchId: props.vSwitchId,
            networkInterfaceName: props.networkInterfaceName,
            ipv4PrefixCount: props.ipv4PrefixCount,
            primaryIpAddress: props.primaryIpAddress,
            ipv6Addresses: props.ipv6Addresses,
            ipv6Prefixes: props.ipv6Prefixes,
            securityGroupIds: props.securityGroupIds,
            queueNumber: props.queueNumber,
            txQueueSize: props.txQueueSize,
            ipv6AddressCount: props.ipv6AddressCount,
            rxQueueSize: props.rxQueueSize,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkInterface;
        this.attrArn = rosNetworkInterface.attrArn;
        this.attrMacAddress = rosNetworkInterface.attrMacAddress;
        this.attrNetworkInterfaceId = rosNetworkInterface.attrNetworkInterfaceId;
        this.attrPrivateIpAddress = rosNetworkInterface.attrPrivateIpAddress;
        this.attrSecondaryPrivateIpAddresses = rosNetworkInterface.attrSecondaryPrivateIpAddresses;
    }
}
