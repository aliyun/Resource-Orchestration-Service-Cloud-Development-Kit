import * as ros from '@alicloud/ros-cdk-core';
import { RosSlsGroups } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSlsGroups as SlsGroupsProperty };

/**
 * Properties for defining a `SlsGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-slsgroups
 */
export interface SlsGroupsProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property slsGroupName: The name of the Logstore group.
     */
    readonly slsGroupName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::SlsGroups`, which is used to query the basic information about Logstore groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSlsGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-slsgroups
 */
export class SlsGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SlsGroupsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SlsGroupNames: The list of sls group names.
     */
    public readonly attrSlsGroupNames: ros.IResolvable;

    /**
     * Attribute SlsGroups: The list of sls groups.
     */
    public readonly attrSlsGroups: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SlsGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSlsGroups = new RosSlsGroups(this, id,  {
            slsGroupName: props.slsGroupName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSlsGroups;
        this.attrSlsGroupNames = rosSlsGroups.attrSlsGroupNames;
        this.attrSlsGroups = rosSlsGroups.attrSlsGroups;
    }
}
