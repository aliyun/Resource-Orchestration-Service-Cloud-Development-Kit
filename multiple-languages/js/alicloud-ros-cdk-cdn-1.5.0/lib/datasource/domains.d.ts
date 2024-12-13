import * as ros from '@alicloud/ros-cdk-core';
import { RosDomains } from './cdn.generated';
export { RosDomains as DomainsProperty };
/**
 * Properties for defining a `Domains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
 */
export interface DomainsProps {
    /**
     * Property domainName: The accelerated domain name. You can specify only one domain name.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CDN::Domains`, which is used to query the basic information about created accelerated domain names.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomains`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
 */
export declare class Domains extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DomainNames: The list of domain names.
     */
    readonly attrDomainNames: ros.IResolvable;
    /**
     * Attribute Domains: The list of domains.
     */
    readonly attrDomains: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainsProps, enableResourcePropertyConstraint?: boolean);
}
