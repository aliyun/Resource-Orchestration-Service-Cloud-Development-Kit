import * as ros from '@alicloud/ros-cdk-core';
import { RosRole } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRole as RoleProperty };

/**
 * Properties for defining a `ALIYUN::RAM::Role`
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
 * A ROS resource type:  `ALIYUN::RAM::Role`
 */
export class Role extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Arn: Name of alicloud resource.
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * Attribute RoleId: Id of ram role.
     */
    public readonly attrRoleId: ros.IResolvable;

    /**
     * Attribute RoleName: Name of ram role.
     */
    public readonly attrRoleName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::RAM::Role`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RoleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosRole = new RosRole(this, id,  {
            maxSessionDuration: props.maxSessionDuration,
            roleName: props.roleName,
            policyAttachments: props.policyAttachments,
            policies: props.policies,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            description: props.description,
            assumeRolePolicyDocument: props.assumeRolePolicyDocument,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRole;
        this.attrArn = rosRole.attrArn;
        this.attrRoleId = rosRole.attrRoleId;
        this.attrRoleName = rosRole.attrRoleName;
    }
}
