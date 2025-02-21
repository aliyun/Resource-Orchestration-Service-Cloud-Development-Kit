import * as ros from '@alicloud/ros-cdk-core';
import { RosRole } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRole as RoleProperty };

/**
 * Properties for defining a `Role`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-role
 */
export interface RoleProps {

    /**
     * Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
     */
    readonly assumeRolePolicyDocument: RosRole.AssumeRolePolicyDocumentProperty | ros.IResolvable;

    /**
     * Property roleName: Specifies the role name, containing up to 64 characters.
     */
    readonly roleName: string | ros.IResolvable;

    /**
     * Property deletionForce: Whether force detach the policies attached to the role. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * Property description: Remark information, up to 1024 characters or Chinese characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property ignoreExisting: Whether to ignore existing role
     * False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored.
     * If the role is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;

    /**
     * Property maxSessionDuration: The maximum session duration of the RAM role.
     * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
     * The default value is used if the parameter is not specified.
     */
    readonly maxSessionDuration?: number | ros.IResolvable;

    /**
     * Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosRole.PoliciesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property policyAttachments: System and custom policy names to attach.
     */
    readonly policyAttachments?: RosRole.PolicyAttachmentsProperty | ros.IResolvable;
}

/**
 * Represents a `Role`.
 */
export interface IRole extends ros.IResource {
    readonly props: RoleProps;

    /**
     * Attribute Arn: Name of alicloud resource.
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute RoleId: Id of ram role.
     */
    readonly attrRoleId: ros.IResolvable | string;

    /**
     * Attribute RoleName: Name of ram role.
     */
    readonly attrRoleName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::Role`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRole`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-role
 */
export class Role extends ros.Resource implements IRole {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RoleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: Name of alicloud resource.
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute RoleId: Id of ram role.
     */
    public readonly attrRoleId: ros.IResolvable | string;

    /**
     * Attribute RoleName: Name of ram role.
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
            ignoreExisting: props.ignoreExisting === undefined || props.ignoreExisting === null ? false : props.ignoreExisting,
            maxSessionDuration: props.maxSessionDuration,
            roleName: props.roleName,
            description: props.description,
            policies: props.policies,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            policyAttachments: props.policyAttachments,
            assumeRolePolicyDocument: props.assumeRolePolicyDocument,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRole;
        this.attrArn = rosRole.attrArn;
        this.attrRoleId = rosRole.attrRoleId;
        this.attrRoleName = rosRole.attrRoleName;
    }
}
