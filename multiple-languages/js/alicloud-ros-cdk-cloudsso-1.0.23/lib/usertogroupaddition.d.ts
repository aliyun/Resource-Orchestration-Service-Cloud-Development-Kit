import * as ros from '@alicloud/ros-cdk-core';
import { RosUserToGroupAddition } from './cloudsso.generated';
export { RosUserToGroupAddition as UserToGroupAdditionProperty };
/**
 * Properties for defining a `UserToGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
 */
export interface UserToGroupAdditionProps {
    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * Property groupId: The ID of the group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * Property userId: The ID of the user.
     */
    readonly userId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::UserToGroupAddition`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserToGroupAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
 */
export declare class UserToGroupAddition extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: UserToGroupAdditionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserToGroupAdditionProps, enableResourcePropertyConstraint?: boolean);
}
