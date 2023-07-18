import * as ros from '@alicloud/ros-cdk-core';
import { RosAccounts } from './graphdatabase.generated';
export { RosAccounts as AccountsProperty };
/**
 * Properties for defining a `DATASOURCE::GraphDatabase::Accounts`
 */
export interface AccountsProps {
    /**
     * Property dbInstanceId: Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property accountName: Account name.
     */
    readonly accountName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::GraphDatabase::Accounts`
 */
export declare class Accounts extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AccountNames: The list of account names.
     */
    readonly attrAccountNames: ros.IResolvable;
    /**
     * Attribute Accounts: The list of accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::GraphDatabase::Accounts`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountsProps, enableResourcePropertyConstraint?: boolean);
}
