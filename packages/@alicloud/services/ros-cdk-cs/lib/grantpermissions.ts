import * as ros from '@alicloud/ros-cdk-core';
import { RosGrantPermissions } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::GrantPermissions`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGrantPermissions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
 */
export class GrantPermissions extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: GrantPermissionsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GrantPermissionsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGrantPermissions = new RosGrantPermissions(this, id,  {
            userId: props.userId,
            permissions: props.permissions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGrantPermissions;
    }
}
