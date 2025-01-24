import * as ros from '@alicloud/ros-cdk-core';
import { RosAccountAlias } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccountAlias as AccountAliasProperty };

/**
 * Properties for defining a `AccountAlias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-accountalias
 */
export interface AccountAliasProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `AccountAlias`.
 */
export interface IAccountAlias extends ros.IResource {
    readonly props: AccountAliasProps;

    /**
     * Attribute AccountAlias: Account alias.
     */
    readonly attrAccountAlias: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::AccountAlias`, which is used to query the alias of a cloud account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccountAlias`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-accountalias
 */
export class AccountAlias extends ros.Resource implements IAccountAlias {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccountAliasProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountAlias: Account alias.
     */
    public readonly attrAccountAlias: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountAliasProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccountAlias = new RosAccountAlias(this, id,  {
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccountAlias;
        this.attrAccountAlias = rosAccountAlias.attrAccountAlias;
    }
}
