import * as ros from '@alicloud/ros-cdk-core';
import { RosSnatEntry } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSnatEntry as SnatEntryProperty };

/**
 * Properties for defining a `SnatEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
 */
export interface SnatEntryProps {

    /**
     * Property snatIp: The public IP address. Separate multiple EIPs with commas.
     */
    readonly snatIp: string | ros.IResolvable;

    /**
     * Property snatTableId: The ID of the SNAT table.
     */
    readonly snatTableId: string | ros.IResolvable;

    /**
     * Property eipAffinity: Specifies whether to enable EIP affinity. Valid values:
     * 0: no
     * 1: yes
     * If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
     */
    readonly eipAffinity?: number | ros.IResolvable;

    /**
     * Property networkInterfaceId: The ID of the elastic network interface.
     * The IPv4 addresses of the elastic network interface will be used as the SNAT IP addresses.
     */
    readonly networkInterfaceId?: string | ros.IResolvable;

    /**
     * Property snatEntryName: The name of the SNAT entry.
     * The name must be 2 to 128 characters in length. It must start with a letter but
     * cannot start with `http:\/\/` or `https:\/\/`.
     */
    readonly snatEntryName?: string | ros.IResolvable;

    /**
     * Property sourceCidr: You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a
     * custom CIDR block.
     * You can specify an SNAT entry in the following ways:
     * *   You can specify the CIDR block of the VPC where the NAT gateway is deployed.
     * Then, all ECS instances in the VPC can access the Internet or external networks
     * by using SNAT.
     * *   You can specify the CIDR block of a vSwitch, for example, 192.168.1.0\/24.
     * Then, the ECS instances in the vSwitch can access the Internet or external
     * networks by using SNAT.
     * *   You can specify the IP address of an ECS instance, for example,
     * 192.168.1.1\/32. Then, the ECS instance can access the Internet or external
     * networks by using SNAT.
     * *   You can specify a custom CIDR block. Then, all ECS instances within the
     * specified CIDR block can access the Internet or external networks by using SNAT.
     * When you add an SNAT entry to an Internet NAT gateway, if SnatIp is set to an
     * EIP, the ECS instance uses the specified EIP to access the Internet.
     * If SnatIp is set to multiple EIPs, the ECS instance randomly selects an EIP
     * specified in the SnatIp parameter to access the Internet.
     * You cannot specify this parameter and SourceVSwtichId at the same time. If
     * SourceVSwitchId is specified, you cannot specify SourceCIDR. If SourceCIDR is
     * specified, you cannot specify SourceVSwitchId.
     */
    readonly sourceCidr?: string | ros.IResolvable;

    /**
     * Property sourceVSwitchIds: The ID of the VSwitch to access the Internet. When updating this list parameter, a new item will lead to a creation of new Snat Entry with latest properties, a removed item will lead to a deletion of the attached SnatEntry
     */
    readonly sourceVSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `SnatEntry`.
 */
export interface ISnatEntry extends ros.IResource {
    readonly props: SnatEntryProps;

    /**
     * Attribute SnatEntryIds: The IDS of the SNAT entry.
     */
    readonly attrSnatEntryIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::SnatEntry`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSnatEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
 */
export class SnatEntry extends ros.Resource implements ISnatEntry {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SnatEntryProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SnatEntryIds: The IDS of the SNAT entry.
     */
    public readonly attrSnatEntryIds: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SnatEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSnatEntry = new RosSnatEntry(this, id,  {
            eipAffinity: props.eipAffinity,
            sourceVSwitchIds: props.sourceVSwitchIds,
            snatEntryName: props.snatEntryName,
            sourceCidr: props.sourceCidr,
            snatIp: props.snatIp,
            networkInterfaceId: props.networkInterfaceId,
            snatTableId: props.snatTableId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSnatEntry;
        this.attrSnatEntryIds = rosSnatEntry.attrSnatEntryIds;
    }
}
