import * as ros from '@alicloud/ros-cdk-core';
import { RosUsers } from './ram.generated';
export { RosUsers as UsersProperty };
/**
 * Properties for defining a `DATASOURCE::RAM::Users`
 */
export interface UsersProps {
    /**
     * Property groupName: The name of group to which users belongs.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * Property userName: Filter the results by a specific user name. Supports using * and ? to fuzzy match.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::RAM::Users`
 */
export declare class Users extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute UserNames: The list of user names.
     */
    readonly attrUserNames: ros.IResolvable;
    /**
     * Attribute Users: The list of users.
     */
    readonly attrUsers: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::RAM::Users`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: UsersProps, enableResourcePropertyConstraint?: boolean);
}
