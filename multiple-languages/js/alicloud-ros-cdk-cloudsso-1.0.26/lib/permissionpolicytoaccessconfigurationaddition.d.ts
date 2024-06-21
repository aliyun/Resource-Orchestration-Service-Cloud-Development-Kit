import * as ros from '@alicloud/ros-cdk-core';
import { RosPermissionPolicyToAccessConfigurationAddition } from './cloudsso.generated';
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
    readonly inlinePolicyDocument?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition`, which is used to add a policy to an access configuration.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPermissionPolicyToAccessConfigurationAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
 */
export declare class PermissionPolicyToAccessConfigurationAddition extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PermissionPolicyToAccessConfigurationAdditionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PermissionPolicyToAccessConfigurationAdditionProps, enableResourcePropertyConstraint?: boolean);
}
