import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomDomains } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomDomains as CustomDomainsProperty };

/**
 * Properties for defining a `CustomDomains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-customdomains
 */
export interface CustomDomainsProps {

    /**
     * Property prefix: Qualified returned custom domain names must be prefixed with Prefix. For example, if the Prefix is "a", the returned custom domain names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `CustomDomains`.
 */
export interface ICustomDomains extends ros.IResource {
    readonly props: CustomDomainsProps;

    /**
     * Attribute CustomDomains: The list of custom_domain.
     */
    readonly attrCustomDomains: ros.IResolvable | string;

    /**
     * Attribute DomainNames: The list of custom_domain names.
     */
    readonly attrDomainNames: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FC::CustomDomains`, which is used to query custom domain names in Function Compute.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomDomains`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-customdomains
 */
export class CustomDomains extends ros.Resource implements ICustomDomains {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CustomDomainsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CustomDomains: The list of custom_domain.
     */
    public readonly attrCustomDomains: ros.IResolvable | string;

    /**
     * Attribute DomainNames: The list of custom_domain names.
     */
    public readonly attrDomainNames: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomDomainsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCustomDomains = new RosCustomDomains(this, id,  {
            prefix: props.prefix,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomDomains;
        this.attrCustomDomains = rosCustomDomains.attrCustomDomains;
        this.attrDomainNames = rosCustomDomains.attrDomainNames;
    }
}
