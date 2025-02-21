import * as ros from '@alicloud/ros-cdk-core';
import { RosAccounts } from './rds.generated';
export { RosAccounts as AccountsProperty };
/**
 * Properties for defining a `Accounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
 */
export interface AccountsProps {
    /**
     * Property dbInstanceId: The ID of the RDS instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property accountName: The name of the RDS account.
     */
    readonly accountName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Accounts`.
 */
export interface IAccounts extends ros.IResource {
    readonly props: AccountsProps;
    /**
     * Attribute AccountNames: The list of The RDS account names.
     */
    readonly attrAccountNames: ros.IResolvable | string;
    /**
     * Attribute Accounts: The list of The RDS accounts.
     */
    readonly attrAccounts: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RDS::Accounts`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccounts`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
 */
export declare class Accounts extends ros.Resource implements IAccounts {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccountsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountNames: The list of The RDS account names.
     */
    readonly attrAccountNames: ros.IResolvable | string;
    /**
     * Attribute Accounts: The list of The RDS accounts.
     */
    readonly attrAccounts: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountsProps, enableResourcePropertyConstraint?: boolean);
}
