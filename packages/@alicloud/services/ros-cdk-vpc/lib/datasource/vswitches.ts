import * as ros from '@alicloud/ros-cdk-core';
import { RosVSwitches } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVSwitches as VSwitchesProperty };

/**
 * Properties for defining a `VSwitches`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
 * Represents a `VSwitches`.
 */
export interface IVSwitches extends ros.IResource {
    readonly props: VSwitchesProps;

    /**
     * Attribute VSwitchIds: The list of The vSwitch Ids.
     */
    readonly attrVSwitchIds: ros.IResolvable | string;

    /**
     * Attribute VSwitches: The detailed information about the vSwitches.
     */
    readonly attrVSwitches: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::VSwitches`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVSwitches`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
 */
export class VSwitches extends ros.Resource implements IVSwitches {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VSwitchesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute VSwitchIds: The list of The vSwitch Ids.
     */
    public readonly attrVSwitchIds: ros.IResolvable | string;

    /**
     * Attribute VSwitches: The detailed information about the vSwitches.
     */
    public readonly attrVSwitches: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VSwitchesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVSwitches = new RosVSwitches(this, id,  {
            isDefault: props.isDefault,
            dhcpOptionsSetId: props.dhcpOptionsSetId,
            routeTableId: props.routeTableId,
            vpcId: props.vpcId,
            resourceGroupId: props.resourceGroupId,
            vSwitchIds: props.vSwitchIds,
            vSwitchOwnerId: props.vSwitchOwnerId,
            vSwitchName: props.vSwitchName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVSwitches;
        this.attrVSwitchIds = rosVSwitches.attrVSwitchIds;
        this.attrVSwitches = rosVSwitches.attrVSwitches;
    }
}
