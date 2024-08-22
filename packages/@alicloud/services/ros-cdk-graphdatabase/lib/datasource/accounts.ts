import * as ros from '@alicloud/ros-cdk-core';
import { RosAccounts } from './graphdatabase.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccounts as AccountsProperty };

/**
 * Properties for defining a `Accounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-accounts
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

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GraphDatabase::Accounts`, which is used to query the information about accounts.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccounts`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-accounts
 */
export class Accounts extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountNames: The list of account names.
     */
    public readonly attrAccountNames: ros.IResolvable;

    /**
     * Attribute Accounts: The list of accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccounts = new RosAccounts(this, id,  {
            dbInstanceId: props.dbInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccounts;
        this.attrAccountNames = rosAccounts.attrAccountNames;
        this.attrAccounts = rosAccounts.attrAccounts;
    }
}
