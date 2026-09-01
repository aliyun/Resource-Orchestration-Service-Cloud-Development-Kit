import * as ros from '@alicloud/ros-cdk-core';
import { RosSNatEntry } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSNatEntry as SNatEntryProperty };

/**
 * Properties for defining a `SNatEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
 */
export interface SNatEntryProps {

    /**
     * Property sNatIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly sNatIp: string | ros.IResolvable;

    /**
     * Property sNatTableId: Create SNAT entry in specified SNAT table.
     */
    readonly sNatTableId: string | ros.IResolvable;

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
     * Property sourceVSwitchId: The ID of the vSwitch.
     * *   When you add an SNAT entry to an Internet NAT gateway, this parameter
     * specifies that ECS instances in the vSwitch can use the SNAT entry to access the
     * Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT
     * address pool, connections are hashed to these EIPs. Network traffic may not be
     * evenly distributed to the EIPs because the amount of traffic that passes through
     * each connection varies. We recommend that you associate these EIPs with the same
     * EIP bandwidth plan to prevent service interruptions due to the bandwidth limits
     * on individual EIPs.
     * *   When you add an SNAT entry to a VPC NAT gateway, this parameter specifies
     * that ECS instances in the vSwitch can use the SNAT entry to access external
     * networks.
     */
    readonly sourceVSwitchId?: string | ros.IResolvable;
}

/**
 * Represents a `SNatEntry`.
 */
export interface ISNatEntry extends ros.IResource {
    readonly props: SNatEntryProps;

    /**
     * Attribute SNatEntryId: The id of created SNAT entry.
     */
    readonly attrSNatEntryId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SNatEntry`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSNatEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
 */
export class SNatEntry extends ros.Resource implements ISNatEntry {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SNatEntryProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SNatEntryId: The id of created SNAT entry.
     */
    public readonly attrSNatEntryId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SNatEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSNatEntry = new RosSNatEntry(this, id,  {
            sourceVSwitchId: props.sourceVSwitchId,
            snatEntryName: props.snatEntryName,
            sourceCidr: props.sourceCidr,
            sNatTableId: props.sNatTableId,
            sNatIp: props.sNatIp,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSNatEntry;
        this.attrSNatEntryId = rosSNatEntry.attrSNatEntryId;
    }
}
