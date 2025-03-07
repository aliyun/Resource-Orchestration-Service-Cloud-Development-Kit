import * as ros from '@alicloud/ros-cdk-core';
import { RosDomains } from './directmail.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DirectMail::Domains`, which is used to query the information about domain names.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomains`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
 */
export declare class Domains extends ros.Resource implements IDomains {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DomainIds: The list of domain IDs.
     */
    readonly attrDomainIds: ros.IResolvable | string;
    /**
     * Attribute Domains: The list of domains.
     */
    readonly attrDomains: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DomainsProps, enableResourcePropertyConstraint?: boolean);
}
