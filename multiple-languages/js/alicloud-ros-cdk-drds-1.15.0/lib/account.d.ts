import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './drds.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-account
 */
export interface AccountProps {
    /**
     * Property dbPrivileges: Database permission information.
     */
    readonly dbPrivileges: Array<RosAccount.DbPrivilegesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property drdsAccountName: The name of the account.
     */
    readonly drdsAccountName: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property password: The password of the account.
     */
    readonly password: string | ros.IResolvable;
    /**
     * Property description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `Account`.
 */
export interface IAccount extends ros.IResource {
    readonly props: AccountProps;
    /**
     * Attribute AccountType: Account type.
     */
    readonly attrAccountType: ros.IResolvable | string;
    /**
     * Attribute DbPrivileges: Database permission information.
     */
    readonly attrDbPrivileges: ros.IResolvable | string;
    /**
     * Attribute Description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DrdsAccountName: The name of the account.
     */
    readonly attrDrdsAccountName: ros.IResolvable | string;
    /**
     * Attribute Host: You can access the IP address of the database. <note>**%** indicates that any IP address can be accessed.
     */
    readonly attrHost: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DRDS::Account`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-account
 */
export declare class Account extends ros.Resource implements IAccount {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountType: Account type.
     */
    readonly attrAccountType: ros.IResolvable | string;
    /**
     * Attribute DbPrivileges: Database permission information.
     */
    readonly attrDbPrivileges: ros.IResolvable | string;
    /**
     * Attribute Description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DrdsAccountName: The name of the account.
     */
    readonly attrDrdsAccountName: ros.IResolvable | string;
    /**
     * Attribute Host: You can access the IP address of the database. <note>**%** indicates that any IP address can be accessed.
     */
    readonly attrHost: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
