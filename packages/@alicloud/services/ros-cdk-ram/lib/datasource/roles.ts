import * as ros from '@alicloud/ros-cdk-core';
import { RosRoles } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRoles as RolesProperty };

/**
 * Properties for defining a `DATASOURCE::RAM::Roles`
 */
export interface RolesProps {

    /**
     * Property roleName: Filter the results by a specific role name. Supports using * and ?  to fuzzy match.
     */
    readonly roleName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::RAM::Roles`
 */
export class Roles extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute RoleNames: The list of role names.
     */
    public readonly attrRoleNames: ros.IResolvable;

    /**
     * Attribute Roles: The list of roles.
     */
    public readonly attrRoles: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::RAM::Roles`.
     *
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
