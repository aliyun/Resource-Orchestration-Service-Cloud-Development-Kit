import * as ros from '@alicloud/ros-cdk-core';
import { RosPermissionPolicyToAccessConfigurationAddition } from './cloudsso.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPermissionPolicyToAccessConfigurationAddition as PermissionPolicyToAccessConfigurationAdditionProperty };

/**
 * Properties for defining a `PermissionPolicyToAccessConfigurationAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
 */
export interface PermissionPolicyToAccessConfigurationAdditionProps {

    /**
     * Property accessConfigurationId: The ID of the access configuration.
     */
    readonly accessConfigurationId: string | ros.IResolvable;

    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * Property permissionPolicyName: The name of the permission policy.
     * - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
     * - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
     */
    readonly permissionPolicyName: string | ros.IResolvable;

    /**
     * Property permissionPolicyType: The type of the permission policy. Valid values:
     * - System: system policy. Resource Access Management (RAM) system policies are reused.
     * - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
     */
    readonly permissionPolicyType: string | ros.IResolvable;

    /**
     * Property inlinePolicyDocument: The configurations of the inline policy.
     * The value can be up to 4,096 characters in length.
     * If you set PermissionPolicyType to Inline, you must specify this parameter.
     */
    readonly inlinePolicyDocument?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Represents a `PermissionPolicyToAccessConfigurationAddition`.
 */
export interface IPermissionPolicyToAccessConfigurationAddition extends ros.IResource {
    readonly props: PermissionPolicyToAccessConfigurationAdditionProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPermissionPolicyToAccessConfigurationAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
 */
export class PermissionPolicyToAccessConfigurationAddition extends ros.Resource implements IPermissionPolicyToAccessConfigurationAddition {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PermissionPolicyToAccessConfigurationAdditionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PermissionPolicyToAccessConfigurationAdditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPermissionPolicyToAccessConfigurationAddition = new RosPermissionPolicyToAccessConfigurationAddition(this, id,  {
            inlinePolicyDocument: props.inlinePolicyDocument,
            directoryId: props.directoryId,
            permissionPolicyName: props.permissionPolicyName,
            permissionPolicyType: props.permissionPolicyType,
            accessConfigurationId: props.accessConfigurationId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPermissionPolicyToAccessConfigurationAddition;
    }
}
