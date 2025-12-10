import * as ros from '@alicloud/ros-cdk-core';
import { RosGrantPermissions } from './cs.generated';
export { RosGrantPermissions as GrantPermissionsProperty };
/**
 * Properties for defining a `GrantPermissions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
 */
export interface GrantPermissionsProps {
    /**
     * Property permissions: The permissions that you want to grant to the RAM user.
     */
    readonly permissions: Array<RosGrantPermissions.PermissionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property userId: The ID of the RAM user.
     */
    readonly userId: string | ros.IResolvable;
}
/**
 * Represents a `GrantPermissions`.
 */
export interface IGrantPermissions extends ros.IResource {
    readonly props: GrantPermissionsProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::GrantPermissions`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGrantPermissions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
 */
export declare class GrantPermissions extends ros.Resource implements IGrantPermissions {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GrantPermissionsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GrantPermissionsProps, enableResourcePropertyConstraint?: boolean);
}
