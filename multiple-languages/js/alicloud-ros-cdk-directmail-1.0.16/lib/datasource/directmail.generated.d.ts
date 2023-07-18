import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::DirectMail::Domains`
 */
export interface RosDomainsProps {
}
/**
 * A ROS template type:  `DATASOURCE::DirectMail::Domains`
 */
export declare class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Domains";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DomainIds: The list of domain IDs.
     */
    readonly attrDomainIds: ros.IResolvable;
    /**
     * @Attribute Domains: The list of domains.
     */
    readonly attrDomains: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * Create a new `DATASOURCE::DirectMail::Domains`.
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
/**
 * Properties for defining a `DATASOURCE::DirectMail::Ipfilters`
 */
export interface RosIpfiltersProps {
}
/**
 * A ROS template type:  `DATASOURCE::DirectMail::Ipfilters`
 */
export declare class RosIpfilters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Ipfilters";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute IpfilterIds: The list of ip filter IDs.
     */
    readonly attrIpfilterIds: ros.IResolvable;
    /**
     * @Attribute Ipfilters: The list of ip filters.
     */
    readonly attrIpfilters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * Create a new `DATASOURCE::DirectMail::Ipfilters`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpfiltersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
