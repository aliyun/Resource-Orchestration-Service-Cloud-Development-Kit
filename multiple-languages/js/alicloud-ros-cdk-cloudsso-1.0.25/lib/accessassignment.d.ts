import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessAssignment } from './cloudsso.generated';
export { RosAccessAssignment as AccessAssignmentProperty };
/**
 * Properties for defining a `AccessAssignment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
 */
export interface AccessAssignmentProps {
    /**
     * Property accessConfigurationId: The ID of the access configuration.
     */
    readonly accessConfigurationId: string | ros.IResolvable;
    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * Property principalId: The ID of the CloudSSO identity.
     * - If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.
     * - If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.
     */
    readonly principalId: string | ros.IResolvable;
    /**
     * Property principalType: The type of the CloudSSO identity. Valid values: User, Group
     */
    readonly principalType: string | ros.IResolvable;
    /**
     * Property targetId: The ID of the task object.
     */
    readonly targetId: string | ros.IResolvable;
    /**
     * Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
     */
    readonly targetType: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::AccessAssignment`, which is used to assign access permissions on an account in your resource directory to a user or group by using an access configuration.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessAssignment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
 */
export declare class AccessAssignment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccessAssignmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessAssignmentProps, enableResourcePropertyConstraint?: boolean);
}
