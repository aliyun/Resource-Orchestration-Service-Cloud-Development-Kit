import * as ros from '@alicloud/ros-cdk-core';
import { RosRoles } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRoles as RolesProperty };

/**
 * Properties for defining a `Roles`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
 */
export interface RolesProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property roleName: Filter the results by a specific role name. Supports using * and ?  to fuzzy match.
     */
    readonly roleName?: string | ros.IResolvable;
}

/**
 * Represents a `Roles`.
 */
export interface IRoles extends ros.IResource {
    readonly props: RolesProps;

    /**
     * Attribute RoleNames: The list of role names.
     */
    readonly attrRoleNames: ros.IResolvable | string;

    /**
     * Attribute Roles: The list of roles.
     */
    readonly attrRoles: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::Roles`, which is used to query the information about Resource Access Management (RAM) roles.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRoles`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
 */
export class Roles extends ros.Resource implements IRoles {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RolesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RoleNames: The list of role names.
     */
    public readonly attrRoleNames: ros.IResolvable | string;

    /**
     * Attribute Roles: The list of roles.
     */
    public readonly attrRoles: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RolesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRoles = new RosRoles(this, id,  {
            roleName: props.roleName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRoles;
        this.attrRoleNames = rosRoles.attrRoleNames;
        this.attrRoles = rosRoles.attrRoles;
    }
}
