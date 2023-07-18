import * as ros from '@alicloud/ros-cdk-core';
import { RosVSwitches } from './vpc.generated';
export { RosVSwitches as VSwitchesProperty };
/**
 * Properties for defining a `DATASOURCE::VPC::VSwitches`
 */
export interface VSwitchesProps {
    /**
     * Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly dhcpOptionsSetId?: string | ros.IResolvable;
    /**
     * Property isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
     * true(default): queries all VPCs in the specified region.
     * false: does not query the default VPC.
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property routeTableId: The ID of the route table.
     */
    readonly routeTableId?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC to which the vSwitch belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchIds: The list of The vSwitch IDs.
     * You can specify up to 20 vSwitch IDs.
     */
    readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property vSwitchName: The name of the vSwitch.
     */
    readonly vSwitchName?: string | ros.IResolvable;
    /**
     * Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
     */
    readonly vSwitchOwnerId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::VPC::VSwitches`
 */
export declare class VSwitches extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute VSwitchIds: The list of The vSwitch Ids.
     */
    readonly attrVSwitchIds: ros.IResolvable;
    /**
     * Attribute VSwitches: The detailed information about the vSwitches.
     */
    readonly attrVSwitches: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::VPC::VSwitches`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: VSwitchesProps, enableResourcePropertyConstraint?: boolean);
}
