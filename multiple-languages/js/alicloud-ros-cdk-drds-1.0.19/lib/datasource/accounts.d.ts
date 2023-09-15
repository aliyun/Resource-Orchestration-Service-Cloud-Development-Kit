import * as ros from '@alicloud/ros-cdk-core';
import { RosAccounts } from './drds.generated';
export { RosAccounts as AccountsProperty };
/**
 * Properties for defining a `DATASOURCE::DRDS::Accounts`
 */
export interface AccountsProps {
    /**
     * Property instanceId: The ID of the PolarDB-X 1.0 instance.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::DRDS::Accounts`
 */
export declare class Accounts extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Accounts: Indicates the information about the instance accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    /**
     * Attribute DrdsAccountNames: Indicates the username of an instance accounts.
     */
    readonly attrDrdsAccountNames: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::DRDS::Accounts`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AccountsProps, enableResourcePropertyConstraint?: boolean);
}
