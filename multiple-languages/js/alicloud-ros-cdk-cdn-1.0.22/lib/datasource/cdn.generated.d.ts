import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDomains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
 */
export interface RosDomainsProps {
    /**
     * @Property domainName: The accelerated domain name. You can specify only one domain name.
     */
    readonly domainName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CDN::Domains`, which is used to query information about Content Delivery Network (CDN) domain names.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domains` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
 */
export declare class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDN::Domains";
    /**
     * @Attribute DomainNames: The list of domain names.
     */
    readonly attrDomainNames: ros.IResolvable;
    /**
     * @Attribute Domains: The list of domains.
     */
    readonly attrDomains: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: The accelerated domain name. You can specify only one domain name.
     */
    domainName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
