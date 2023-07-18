import * as ros from '@alicloud/ros-cdk-core';
import { RosAccounts } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccounts as AccountsProperty };

/**
 * Properties for defining a `DATASOURCE::REDIS::Accounts`
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
 * A ROS resource type:  `DATASOURCE::REDIS::Accounts`
 */
export class Accounts extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AccountNames: The list of The Redis account names.
     */
    public readonly attrAccountNames: ros.IResolvable;

    /**
     * Attribute Accounts: The list of The Redis accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::REDIS::Accounts`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccounts = new RosAccounts(this, id,  {
            instanceId: props.instanceId,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccounts;
        this.attrAccountNames = rosAccounts.attrAccountNames;
        this.attrAccounts = rosAccounts.attrAccounts;
    }
}
