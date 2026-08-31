import * as ros from '@alicloud/ros-cdk-core';
import { RosDomains } from './directmail.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomains as DomainsProperty };

/**
 * Properties for defining a `Domains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
 */
export interface DomainsProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Domains`.
 */
export interface IDomains extends ros.IResource {
    readonly props: DomainsProps;

    /**
     * Attribute DomainIds: The list of domain IDs.
     */
    readonly attrDomainIds: ros.IResolvable | string;

    /**
     * Attribute Domains: The list of domains.
     */
    readonly attrDomains: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DirectMail::Domains`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomains`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
 */
export class Domains extends ros.Resource implements IDomains {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DomainsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DomainIds: The list of domain IDs.
     */
    public readonly attrDomainIds: ros.IResolvable | string;

    /**
     * Attribute Domains: The list of domains.
     */
    public readonly attrDomains: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomains = new RosDomains(this, id,  {
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomains;
        this.attrDomainIds = rosDomains.attrDomainIds;
        this.attrDomains = rosDomains.attrDomains;
    }
}
