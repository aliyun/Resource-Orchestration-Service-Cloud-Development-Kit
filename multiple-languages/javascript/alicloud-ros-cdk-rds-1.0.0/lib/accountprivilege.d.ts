import * as ros from '@alicloud/ros-cdk-core';
import { RosAccountPrivilege } from './rds.generated';
export { RosAccountPrivilege as AccountPrivilegeProperty };
/**
 * Properties for defining a `ALIYUN::RDS::AccountPrivilege`
 */
export interface AccountPrivilegeProps {
    /**
     * @Property accountName: RDS account name.
     */
    readonly accountName: string;
    /**
     * @Property accountPrivilege: RDS account privilege
     */
    readonly accountPrivilege: string;
    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    readonly dbInstanceId: string;
    /**
     * @Property dbName: RDS database name
     */
    readonly dbName: string;
}
/**
 * A ROS resource type:  `ALIYUN::RDS::AccountPrivilege`
 */
export declare class AccountPrivilege extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::RDS::AccountPrivilege`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountPrivilegeProps, enableResourcePropertyConstraint?: boolean);
}
