import * as ros from '@alicloud/ros-cdk-core';
import { RosUsers } from './ehpc.generated';
export { RosUsers as UsersProperty };
/**
 * Properties for defining a `Users`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
 */
export interface UsersProps {
    /**
     * Property clusterId: The cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property users: The information about the users.
     */
    readonly users: Array<RosUsers.UsersProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EHPC::Users`, which is used to add one or more users to a specified cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUsers`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
 */
export declare class Users extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: UsersProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UsersProps, enableResourcePropertyConstraint?: boolean);
}
