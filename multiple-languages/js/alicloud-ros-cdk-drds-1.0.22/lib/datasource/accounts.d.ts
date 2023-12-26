import * as ros from '@alicloud/ros-cdk-core';
import { RosAccounts } from './drds.generated';
export { RosAccounts as AccountsProperty };
/**
 * Properties for defining a `Accounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
 */
export interface AccountsProps {
    /**
     * Property instanceId: The ID of the PolarDB-X 1.0 instance.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DRDS::Accounts`ALIYUN::DTS::ConsumerGroup is used to create a consumer group for a change tracking instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccounts`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
 */
export declare class Accounts extends ros.Resource {
    /**
     * Attribute Accounts: Indicates the information about the instance accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    /**
     * Attribute DrdsAccountNames: Indicates the username of an instance accounts.
     */
    readonly attrDrdsAccountNames: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AccountsProps, enableResourcePropertyConstraint?: boolean);
}
