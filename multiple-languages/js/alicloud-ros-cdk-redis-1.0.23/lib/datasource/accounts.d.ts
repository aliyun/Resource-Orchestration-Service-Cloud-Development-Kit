import * as ros from '@alicloud/ros-cdk-core';
import { RosAccounts } from './redis.generated';
export { RosAccounts as AccountsProperty };
/**
 * Properties for defining a `Accounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts
 */
export interface AccountsProps {
    /**
     * Property instanceId: The ID of the Redis instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property accountName: The name of the Redis account.
     */
    readonly accountName?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::REDIS::Accounts`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccounts`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts
 */
export declare class Accounts extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountNames: The list of The Redis account names.
     */
    readonly attrAccountNames: ros.IResolvable;
    /**
     * Attribute Accounts: The list of The Redis accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountsProps, enableResourcePropertyConstraint?: boolean);
}
