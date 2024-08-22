import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessGroups } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessGroups as AccessGroupsProperty };

/**
 * Properties for defining a `AccessGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
 */
export interface AccessGroupsProps {

    /**
     * Property accessGroupName: The name of the permission group.
     */
    readonly accessGroupName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::NAS::AccessGroups`, which is used to query the details of permission groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
 */
export class AccessGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccessGroupsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccessGroupNames: The list of access group names.
     */
    public readonly attrAccessGroupNames: ros.IResolvable;

    /**
     * Attribute AccessGroups: The list of access groups.
     */
    public readonly attrAccessGroups: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccessGroups = new RosAccessGroups(this, id,  {
            accessGroupName: props.accessGroupName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessGroups;
        this.attrAccessGroupNames = rosAccessGroups.attrAccessGroupNames;
        this.attrAccessGroups = rosAccessGroups.attrAccessGroups;
    }
}
