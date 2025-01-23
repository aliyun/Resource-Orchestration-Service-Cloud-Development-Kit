import * as ros from '@alicloud/ros-cdk-core';
import { RosRole } from './maxcompute.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRole as RoleProperty };

/**
 * Properties for defining a `Role`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-role
 */
export interface RoleProps {

    /**
     * Property projectName: The name of the MaxCompute project.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * Property roleName: The name of the project role
     */
    readonly roleName: string | ros.IResolvable;

    /**
     * Property type: Role types, MaxCompute provides administrator roles and resource roles. Valid values:
     * Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
     * Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property acl: The access-control list (ACL), This parameter is not required if a policy is used.
     */
    readonly acl?: RosRole.AclProperty | ros.IResolvable;

    /**
     * Property policy: The document of the policy. This parameter is not required if an access-control list (ACL) is used.
     */
    readonly policy?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Represents a `Role`.
 */
export interface IRole extends ros.IResource {
    readonly props: RoleProps;

    /**
     * Attribute ProjectName: The name of the MaxCompute project.
     */
    readonly attrProjectName: ros.IResolvable | string;

    /**
     * Attribute RoleName: The name of the project role.
     */
    readonly attrRoleName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MaxCompute::Role`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRole`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-role
 */
export class Role extends ros.Resource implements IRole {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RoleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ProjectName: The name of the MaxCompute project.
     */
    public readonly attrProjectName: ros.IResolvable | string;

    /**
     * Attribute RoleName: The name of the project role.
     */
    public readonly attrRoleName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RoleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRole = new RosRole(this, id,  {
            policy: props.policy,
            type: props.type,
            roleName: props.roleName,
            projectName: props.projectName,
            acl: props.acl,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRole;
        this.attrProjectName = rosRole.attrProjectName;
        this.attrRoleName = rosRole.attrRoleName;
    }
}
