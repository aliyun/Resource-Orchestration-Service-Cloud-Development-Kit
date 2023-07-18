import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::CDN::Domains`
 */
export interface RosDomainsProps {
    /**
     * @Property domainName: The accelerated domain name. You can specify only one domain name.
     */
    readonly domainName: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CDN::Domains`
 */
export declare class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDN::Domains";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::CDN::Domains`.
     *
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
