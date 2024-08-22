import * as ros from '@alicloud/ros-cdk-core';
import { RosAccounts } from './drds.generated';
// Generated from the AliCloud ROS Resource Specification
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

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DRDS::Accounts`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccounts`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
 */
export class Accounts extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Accounts: Indicates the information about the instance accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    /**
     * Attribute DrdsAccountNames: Indicates the username of an instance accounts.
     */
    public readonly attrDrdsAccountNames: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccounts = new RosAccounts(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccounts;
        this.attrAccounts = rosAccounts.attrAccounts;
        this.attrDrdsAccountNames = rosAccounts.attrDrdsAccountNames;
    }
}
