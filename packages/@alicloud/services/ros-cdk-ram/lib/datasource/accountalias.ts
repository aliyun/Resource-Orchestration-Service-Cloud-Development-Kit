import * as ros from '@alicloud/ros-cdk-core';
import { RosAccountAlias } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccountAlias as AccountAliasProperty };

/**
 * Properties for defining a `AccountAlias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-accountalias
 */
export interface AccountAliasProps {
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::AccountAlias`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccountAlias`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-accountalias
 */
export class AccountAlias extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountAliasProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountAlias: Account alias.
     */
    public readonly attrAccountAlias: ros.IResolvable;

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
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosAccountAlias;
        this.attrAccountAlias = rosAccountAlias.attrAccountAlias;
    }
}
