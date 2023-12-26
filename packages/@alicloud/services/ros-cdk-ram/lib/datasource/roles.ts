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
     * Property roleName: Filter the results by a specific role name. Supports using * and ?  to fuzzy match.
     */
    readonly roleName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::Roles`, which is used to query the details of RAM roles.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRoles`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
 */
export class Roles extends ros.Resource {

    /**
     * Attribute RoleNames: The list of role names.
     */
    public readonly attrRoleNames: ros.IResolvable;

    /**
     * Attribute Roles: The list of roles.
     */
    public readonly attrRoles: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RolesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosRoles = new RosRoles(this, id,  {
            roleName: props.roleName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRoles;
        this.attrRoleNames = rosRoles.attrRoleNames;
        this.attrRoles = rosRoles.attrRoles;
    }
}
