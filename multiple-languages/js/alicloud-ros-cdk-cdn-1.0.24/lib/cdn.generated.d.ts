import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
 */
export interface RosDomainProps {
    /**
     * @Property cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
     */
    readonly cdnType: string | ros.IResolvable;
    /**
     * @Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property checkUrl: The validation of the origin.
     */
    readonly checkUrl?: string | ros.IResolvable;
    /**
     * @Property originServers: The list of origin URLs. It has the same function as Sources, but has a higher priority than it.
     */
    readonly originServers?: Array<RosDomain.OriginServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
     */
    readonly scope?: string | ros.IResolvable;
    /**
     * @Property sources: The list of origin URLs.
     */
    readonly sources?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDomain.TagsProperty[];
    /**
     * @Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    readonly topLevelDomain?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::Domain`, which is used to add a domain name to Alibaba Cloud CDN (CDN).
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::Domain";
    /**
     * @Attribute Cname: The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.
     */
    readonly attrCname: ros.IResolvable;
    /**
     * @Attribute DomainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    readonly attrDomainName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
     */
    cdnType: string | ros.IResolvable;
    /**
     * @Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property checkUrl: The validation of the origin.
     */
    checkUrl: string | ros.IResolvable | undefined;
    /**
     * @Property originServers: The list of origin URLs. It has the same function as Sources, but has a higher priority than it.
     */
    originServers: Array<RosDomain.OriginServersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
     */
    scope: string | ros.IResolvable | undefined;
    /**
     * @Property sources: The list of origin URLs.
     */
    sources: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDomain.TagsProperty[] | undefined;
    /**
     * @Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    topLevelDomain: string | ros.IResolvable | undefined;
    /**
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
export declare namespace RosDomain {
    /**
     * @stability external
     */
    interface OriginServersProperty {
        /**
         * @Property type: The type of the origin server. Valid values:
     * ipaddr: the IP address
     * domain: the domain name
     * oss: the endpoint of an Object Storage Service (OSS) bucket
     * fc_domain: the domain name of Function Compute
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property content: The address of the origin server. You can specify an IP address or a domain name.
         */
        readonly content: string | ros.IResolvable;
        /**
         * @Property priority: The priority of the origin server if multiple origin servers are specified. Default value: 20. Valid values:
     * 20: the primary origin server
     * 30: the secondary origin server
         */
        readonly priority?: string | ros.IResolvable;
        /**
         * @Property port: The port. Valid values:
     * 80: the default port
     * 443: the HTTPS port
     * A custom port
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property weight: The weight of the origin server if multiple origin servers are specified. Valid values: 0 to 100. Default value: 10.
         */
        readonly weight?: string | ros.IResolvable;
    }
}
export declare namespace RosDomain {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDomainConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
 */
export interface RosDomainConfigProps {
    /**
     * @Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    readonly domainNames: string | ros.IResolvable;
    /**
     * @Property functionList: Function list. This property is required.
     */
    readonly functionList?: Array<RosDomainConfig.FunctionListProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::DomainConfig`, which is used to configure multiple domain names at a time.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
 */
export declare class RosDomainConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::DomainConfig";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    domainNames: string | ros.IResolvable;
    /**
     * @Property functionList: Function list. This property is required.
     */
    functionList: Array<RosDomainConfig.FunctionListProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
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
export declare namespace RosDomainConfig {
    /**
     * @stability external
     */
    interface FunctionArgsProperty {
        /**
         * @Property argValue: Arg value.
         */
        readonly argValue: string | ros.IResolvable;
        /**
         * @Property argName: Arg name.
         */
        readonly argName: string | ros.IResolvable;
    }
}
export declare namespace RosDomainConfig {
    /**
     * @stability external
     */
    interface FunctionListProperty {
        /**
         * @Property parentId: Rule condition ID.
         */
        readonly parentId?: string | ros.IResolvable;
        /**
         * @Property functionName: Function name.
         */
        readonly functionName: string | ros.IResolvable;
        /**
         * @Property functionArgs: Function args.
         */
        readonly functionArgs: Array<RosDomainConfig.FunctionArgsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
