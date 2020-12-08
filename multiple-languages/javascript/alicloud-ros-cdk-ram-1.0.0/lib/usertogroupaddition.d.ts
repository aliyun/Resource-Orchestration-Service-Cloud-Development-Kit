import * as ros from '@alicloud/ros-cdk-core';
import { RosUserToGroupAddition } from './ram.generated';
export { RosUserToGroupAddition as UserToGroupAdditionProperty };
/**
 * Properties for defining a `ALIYUN::RAM::UserToGroupAddition`
 */
export interface UserToGroupAdditionProps {
    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string;
    /**
     * @Property users: list name of a users to which you want to add the group.
     */
    readonly users: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::RAM::UserToGroupAddition`
 */
export declare class UserToGroupAddition extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::RAM::UserToGroupAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserToGroupAdditionProps, enableResourcePropertyConstraint?: boolean);
}
