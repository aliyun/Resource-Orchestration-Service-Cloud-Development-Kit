import * as ros from '@alicloud/ros-cdk-core';
import { RosSNatEntry } from './ecs.generated';
export { RosSNatEntry as SNatEntryProperty };
/**
 * Properties for defining a `ALIYUN::ECS::SNatEntry`
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
     * Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    readonly snatEntryName?: string | ros.IResolvable;
    /**
     * Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    readonly sourceCidr?: string | ros.IResolvable;
    /**
     * Property sourceVSwitchId: Allow which switch can access internet.
     */
    readonly sourceVSwitchId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::SNatEntry`
 */
export declare class SNatEntry extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SNatEntryId: The id of created SNAT entry.
     */
    readonly attrSNatEntryId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::SNatEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SNatEntryProps, enableResourcePropertyConstraint?: boolean);
}
