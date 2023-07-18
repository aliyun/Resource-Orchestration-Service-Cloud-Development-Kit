import * as ros from '@alicloud/ros-cdk-core';
import { RosSnatEntry } from './vpc.generated';
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
     * Property eipAffinity: Specifies whether to enable EIP affinity. Valid values:
     * 0: no
     * 1: yes
     * If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
     */
    readonly eipAffinity?: number | ros.IResolvable;
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
export declare class SnatEntry extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SnatEntryIds: The IDS of the SNAT entry.
     */
    readonly attrSnatEntryIds: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::SnatEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SnatEntryProps, enableResourcePropertyConstraint?: boolean);
}
