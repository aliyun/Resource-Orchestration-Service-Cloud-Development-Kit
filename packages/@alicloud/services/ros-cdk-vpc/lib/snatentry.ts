import * as ros from '@alicloud/ros-cdk-core';
import { RosSnatEntry } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSnatEntry as SnatEntryProperty };

/**
 * Properties for defining a `ALIYUN::VPC::SnatEntry`
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
     * Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    readonly snatEntryName?: string | ros.IResolvable;

    /**
     * Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    readonly sourceCidr?: string | ros.IResolvable;

    /**
     * Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
     */
    readonly sourceVSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::SnatEntry`
 */
export class SnatEntry extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute SnatEntryIds: The IDS of the SNAT entry.
     */
    public readonly attrSnatEntryIds: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::SnatEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SnatEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSnatEntry = new RosSnatEntry(this, id,  {
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
