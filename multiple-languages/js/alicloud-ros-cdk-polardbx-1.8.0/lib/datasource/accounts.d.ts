import * as ros from '@alicloud/ros-cdk-core';
import { RosAccounts } from './polardbx.generated';
export { RosAccounts as AccountsProperty };
/**
 * Properties for defining a `Accounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-accounts
 */
export interface AccountsProps {
    /**
     * Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property accountType: The type of the account. 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    readonly accountType?: number | ros.IResolvable;
    /**
     * Property polarDbxAccountName: The username of the account that you want to query. If you want to query information about a specific account, you must specify this parameter.
     */
    readonly polarDbxAccountName?: string | ros.IResolvable;
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
     * Attribute PolarDBXAccountNames: The list of PolarDB-X 2.0 account names.
     */
    readonly attrPolarDbxAccountNames: ros.IResolvable | string;
    /**
     * Attribute PolarDBXAccounts: The list of PolarDB-X 2.0 accounts.
     */
    readonly attrPolarDbxAccounts: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PolarDBX::Accounts`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccounts`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-accounts
 */
export declare class Accounts extends ros.Resource implements IAccounts {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccountsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PolarDBXAccountNames: The list of PolarDB-X 2.0 account names.
     */
    readonly attrPolarDbxAccountNames: ros.IResolvable | string;
    /**
     * Attribute PolarDBXAccounts: The list of PolarDB-X 2.0 accounts.
     */
    readonly attrPolarDbxAccounts: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountsProps, enableResourcePropertyConstraint?: boolean);
}
