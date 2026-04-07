import * as ros from '@alicloud/ros-cdk-core';
import { RosEnterpriseDBClusterAccount } from './clickhouse.generated';
export { RosEnterpriseDBClusterAccount as EnterpriseDBClusterAccountProperty };
/**
 * Properties for defining a `EnterpriseDBClusterAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
 */
export interface EnterpriseDBClusterAccountProps {
    /**
     * Property account: The name of the database account.
     */
    readonly account: string | ros.IResolvable;
    /**
     * Property accountType: The type of the database account. Valid values:
     * - **NormalAccount**: Normal account number.
     * - **SuperAccount**: The privileged account.
     */
    readonly accountType: string | ros.IResolvable;
    /**
     * Property dbInstanceId: The cluster ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property password: Database account password. Set the following rules.
     * - Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.
     * - Oh-! @#$%^& *()_+-= is a special character.
     * - Length is 8~32 characters.
     */
    readonly password: string | ros.IResolvable;
    /**
     * Property description: The description of the account.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property dmlAuthSetting: The information about permissions.
     */
    readonly dmlAuthSetting?: RosEnterpriseDBClusterAccount.DmlAuthSettingProperty | ros.IResolvable;
}
/**
 * Represents a `EnterpriseDBClusterAccount`.
 */
export interface IEnterpriseDBClusterAccount extends ros.IResource {
    readonly props: EnterpriseDBClusterAccountProps;
    /**
     * Attribute Account: The name of the database account.
     */
    readonly attrAccount: ros.IResolvable | string;
    /**
     * Attribute AccountType: The type of the database account.
     */
    readonly attrAccountType: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the account.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DmlAuthSetting: The information about permissions.
     */
    readonly attrDmlAuthSetting: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ClickHouse::EnterpriseDBClusterAccount`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnterpriseDBClusterAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
 */
export declare class EnterpriseDBClusterAccount extends ros.Resource implements IEnterpriseDBClusterAccount {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EnterpriseDBClusterAccountProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Account: The name of the database account.
     */
    readonly attrAccount: ros.IResolvable | string;
    /**
     * Attribute AccountType: The type of the database account.
     */
    readonly attrAccountType: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the account.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DmlAuthSetting: The information about permissions.
     */
    readonly attrDmlAuthSetting: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnterpriseDBClusterAccountProps, enableResourcePropertyConstraint?: boolean);
}
