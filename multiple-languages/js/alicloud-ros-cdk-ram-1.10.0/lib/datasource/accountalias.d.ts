import * as ros from '@alicloud/ros-cdk-core';
import { RosAccountAlias } from './ram.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::AccountAlias`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccountAlias`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-accountalias
 */
export declare class AccountAlias extends ros.Resource implements IAccountAlias {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AccountAliasProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountAlias: Account alias.
     */
    readonly attrAccountAlias: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AccountAliasProps, enableResourcePropertyConstraint?: boolean);
}
