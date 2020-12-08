import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::CDN::Domain`
 */
export interface RosDomainProps {
    /**
     * @Property cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
     */
    readonly cdnType: string;
    /**
     * @Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    readonly domainName: string;
    /**
     * @Property checkUrl: The validation of the origin.
     */
    readonly checkUrl?: string;
    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    readonly resourceGroupId?: string;
    /**
     * @Property scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
     */
    readonly scope?: string;
    /**
     * @Property sources: The list of origin URLs.
     */
    readonly sources?: string;
    /**
     * @Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    readonly topLevelDomain?: string;
}
/**
 * A ROS template type:  `ALIYUN::CDN::Domain`
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::Domain";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Cname: The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.
     */
    readonly attrCname: any;
    /**
     * @Attribute DomainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    readonly attrDomainName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
     */
    cdnType: string;
    /**
     * @Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    domainName: string;
    /**
     * @Property checkUrl: The validation of the origin.
     */
    checkUrl: string | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
     */
    scope: string | undefined;
    /**
     * @Property sources: The list of origin URLs.
     */
    sources: string | undefined;
    /**
     * @Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    topLevelDomain: string | undefined;
    /**
     * Create a new `ALIYUN::CDN::Domain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::CDN::DomainConfig`
 */
export interface RosDomainConfigProps {
    /**
     * @Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    readonly domainNames: string;
    /**
     * @Property functions: function list, please refer to the CDN documentation for details.
     */
    readonly functions: string;
}
/**
 * A ROS template type:  `ALIYUN::CDN::DomainConfig`
 */
export declare class RosDomainConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::DomainConfig";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    domainNames: string;
    /**
     * @Property functions: function list, please refer to the CDN documentation for details.
     */
    functions: string;
    /**
     * Create a new `ALIYUN::CDN::DomainConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
