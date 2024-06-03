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
     * Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    readonly snatEntryName?: string | ros.IResolvable;

    /**
     * Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1\/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    readonly sourceCidr?: string | ros.IResolvable;

    /**
     * Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
     */
    readonly sourceVSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::SnatEntry`, which is used to add SNAT entries to an SNAT table.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSnatEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
 */
export class SnatEntry extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SnatEntryProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SnatEntryIds: The IDS of the SNAT entry.
     */
    public readonly attrSnatEntryIds: ros.IResolvable;

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
            snatEntryName: props.snatEntryName,
            sourceVSwitchIds: props.sourceVSwitchIds,
            sourceCidr: props.sourceCidr,
            snatIp: props.snatIp,
            snatTableId: props.snatTableId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSnatEntry;
        this.attrSnatEntryIds = rosSnatEntry.attrSnatEntryIds;
    }
}
