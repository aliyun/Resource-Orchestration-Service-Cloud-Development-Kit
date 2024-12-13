import * as ros from '@alicloud/ros-cdk-core';
import { RosAccountPrivilege } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccountPrivilege as AccountPrivilegeProperty };

/**
 * Properties for defining a `AccountPrivilege`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-accountprivilege
 */
export interface AccountPrivilegeProps {

    /**
     * Property accountName: RDS account name.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * Property accountPrivilege: RDS account privilege. The specified number must be the same as the number of DbName
     */
    readonly accountPrivilege: string | ros.IResolvable;

    /**
     * Property dbInstanceId: RDS instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property dbName: RDS database name. Separate multiple database names with commas (,).
     */
    readonly dbName: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::AccountPrivilege`, which is used to authorize an account to access a database.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccountPrivilege`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-accountprivilege
 */
export class AccountPrivilege extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountPrivilegeProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountPrivilegeProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccountPrivilege = new RosAccountPrivilege(this, id,  {
            accountPrivilege: props.accountPrivilege,
            dbInstanceId: props.dbInstanceId,
            dbName: props.dbName,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccountPrivilege;
    }
}
