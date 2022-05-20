import * as ros from '@alicloud/ros-cdk-core';
import { RosAccountPrivilege } from './rds.generated';
export { RosAccountPrivilege as AccountPrivilegeProperty };
/**
 * Properties for defining a `ALIYUN::RDS::AccountPrivilege`
 */
export interface AccountPrivilegeProps {
    /**
     * Property accountName: RDS account name.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * Property accountPrivilege: RDS account privilege
     */
    readonly accountPrivilege: string | ros.IResolvable;
    /**
     * Property dbInstanceId: RDS instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property dbName: RDS database name
     */
    readonly dbName: string | ros.IResolvable;
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountPrivilegeProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=accountprivilege.d.ts.map