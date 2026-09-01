import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDeliverTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
 */
export interface RosDeliverTaskProps {
    /**
     * @Property deliver: The method that is used to send operations reports. Operations reports are sent
     * to you only by email. The settings must be escaped in JSON.
     */
    readonly deliver: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property name: The name of the CDN deliver task.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property reports: The operations reports that are tracked by the task. The data must be escaped in
     * JSON.
     */
    readonly reports: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property schedule: The parameters that specify the time interval at which the tracking task sends
     * operations reports. The settings must be escaped in JSON.
     */
    readonly schedule: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property domainNames: The domain name of the CDN deliver task.
     */
    readonly domainNames?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::DeliverTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeliverTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
 */
export declare class RosDeliverTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::DeliverTask";
    /**
     * @Attribute DeliverId: The deliver ID of the CDN deliver task.
     */
    readonly attrDeliverId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property deliver: The method that is used to send operations reports. Operations reports are sent
     * to you only by email. The settings must be escaped in JSON.
     */
    deliver: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property name: The name of the CDN deliver task.
     */
    name: string | ros.IResolvable;
    /**
     * @Property reports: The operations reports that are tracked by the task. The data must be escaped in
     * JSON.
     */
    reports: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property schedule: The parameters that specify the time interval at which the tracking task sends
     * operations reports. The settings must be escaped in JSON.
     */
    schedule: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property domainNames: The domain name of the CDN deliver task.
     */
    domainNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeliverTaskProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
 */
export interface RosDomainProps {
    /**
     * @Property cdnType: The business type of the domain name. Valid values:
     * - web: images and small files.
     * - download: large files.
     * - video: on-demand video and audio streaming.
     */
    readonly cdnType: string | ros.IResolvable;
    /**
     * @Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property checkUrl: The health check URL.
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
     * @Property scope: The acceleration region. Valid values:
     * - domestic (default): Chinese mainland only.
     * - overseas: global (excluding the Chinese mainland).
     * - global: global.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::Domain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::Domain";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
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
     * @Property cdnType: The business type of the domain name. Valid values:
     * - web: images and small files.
     * - download: large files.
     * - video: on-demand video and audio streaming.
     */
    cdnType: string | ros.IResolvable;
    /**
     * @Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property checkUrl: The health check URL.
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
     * @Property scope: The acceleration region. Valid values:
     * - domestic (default): Chinese mainland only.
     * - overseas: global (excluding the Chinese mainland).
     * - global: global.
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
     * @Property domainNames: The domain names to configure for acceleration. Separate multiple domain names
     * with a comma (,). Note the following limits:
     * - You can specify up to 20 domain names.
     * - The number of domain names multiplied by the number of features cannot exceed
     * 50.
     */
    readonly domainNames: string | ros.IResolvable;
    /**
     * @Property functionList: Function list. This property is required.
     */
    readonly functionList?: Array<RosDomainConfig.FunctionListProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::DomainConfig`.
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
     * @Property domainNames: The domain names to configure for acceleration. Separate multiple domain names
     * with a comma (,). Note the following limits:
     * - You can specify up to 20 domain names.
     * - The number of domain names multiplied by the number of features cannot exceed
     * 50.
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
/**
 * Properties for defining a `RosFcTrigger`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
 */
export interface RosFcTriggerProps {
    /**
     * @Property eventMetaName: The event meta name.
     */
    readonly eventMetaName: string | ros.IResolvable;
    /**
     * @Property eventMetaVersion: The event meta version.
     */
    readonly eventMetaVersion: string | ros.IResolvable;
    /**
     * @Property notes: The notes.
     */
    readonly notes: string | ros.IResolvable;
    /**
     * @Property roleArn: The role ARN.
     */
    readonly roleArn: string | ros.IResolvable;
    /**
     * @Property sourceArn: The source ARN.
     */
    readonly sourceArn: string | ros.IResolvable;
    /**
     * @Property triggerArn: The trigger ARN.
     */
    readonly triggerArn: string | ros.IResolvable;
    /**
     * @Property functionArn: The function ARN.
     */
    readonly functionArn?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::FcTrigger`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FcTrigger` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
 */
export declare class RosFcTrigger extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::FcTrigger";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property eventMetaName: The event meta name.
     */
    eventMetaName: string | ros.IResolvable;
    /**
     * @Property eventMetaVersion: The event meta version.
     */
    eventMetaVersion: string | ros.IResolvable;
    /**
     * @Property notes: The notes.
     */
    notes: string | ros.IResolvable;
    /**
     * @Property roleArn: The role ARN.
     */
    roleArn: string | ros.IResolvable;
    /**
     * @Property sourceArn: The source ARN.
     */
    sourceArn: string | ros.IResolvable;
    /**
     * @Property triggerArn: The trigger ARN.
     */
    triggerArn: string | ros.IResolvable;
    /**
     * @Property functionArn: The function ARN.
     */
    functionArn: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFcTriggerProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosStagingConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-stagingconfig
 */
export interface RosStagingConfigProps {
    /**
     * @Property domainName: The accelerated domain name. Only one domain name can be configured at a time.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * @Property functions: The functions of the staging config.
     */
    readonly functions: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::StagingConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `StagingConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-stagingconfig
 */
export declare class RosStagingConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::StagingConfig";
    /**
     * @Attribute ConfigId: The config id.
     */
    readonly attrConfigId: ros.IResolvable;
    /**
     * @Attribute FunctionName: The function name.
     */
    readonly attrFunctionName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: The accelerated domain name. Only one domain name can be configured at a time.
     */
    domainName: string | ros.IResolvable;
    /**
     * @Property functions: The functions of the staging config.
     */
    functions: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStagingConfigProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSubTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
 */
export interface RosSubTaskProps {
    /**
     * @Property reportIds: The IDs of the metrics that you want to include in the report. Separate multiple
     * IDs with commas (,). Valid values:
     * - 1: frequently requested URLs (ranked by the number of requests)
     * - 3: frequently requested URLs (ranked by the amount of network traffic)
     * - 5: frequently used Referer headers (ranked by the number of requests)
     * - 7: frequently used Referer headers (ranked by the amount of network traffic)
     * - 9: frequently requested URLs that are redirected to the origin (ranked by the
     * number of requests)
     * - 11: frequently requested URLs that are redirected to the origin (ranked by the
     * amount of network traffic)
     * - 13: top client IP addresses (ranked by the number of requests)
     * - 15: top client IP addresses (ranked by the amount of network traffic)
     * - 17: domain names ranked by the amount of network traffic
     * - 19: page views and unique visitors
     * - 21: regions from which requests are initiated
     * - 23: Internet service providers (ISPs)
     */
    readonly reportIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property domainName: The domain names to be tracked. Separate multiple domain names with commas (,).
     * You can specify up to 500 domain names. If you want to specify more than 500
     * domain names, submit a ticket.
     * > If you do not specify a domain name, the custom operations report is created
     * for all domain names that belong to your account.
     */
    readonly domainName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::SubTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SubTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
 */
export declare class RosSubTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::SubTask";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property reportIds: The IDs of the metrics that you want to include in the report. Separate multiple
     * IDs with commas (,). Valid values:
     * - 1: frequently requested URLs (ranked by the number of requests)
     * - 3: frequently requested URLs (ranked by the amount of network traffic)
     * - 5: frequently used Referer headers (ranked by the number of requests)
     * - 7: frequently used Referer headers (ranked by the amount of network traffic)
     * - 9: frequently requested URLs that are redirected to the origin (ranked by the
     * number of requests)
     * - 11: frequently requested URLs that are redirected to the origin (ranked by the
     * amount of network traffic)
     * - 13: top client IP addresses (ranked by the number of requests)
     * - 15: top client IP addresses (ranked by the amount of network traffic)
     * - 17: domain names ranked by the amount of network traffic
     * - 19: page views and unique visitors
     * - 21: regions from which requests are initiated
     * - 23: Internet service providers (ISPs)
     */
    reportIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property domainName: The domain names to be tracked. Separate multiple domain names with commas (,).
     * You can specify up to 500 domain names. If you want to specify more than 500
     * domain names, submit a ticket.
     * > If you do not specify a domain name, the custom operations report is created
     * for all domain names that belong to your account.
     */
    domainName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubTaskProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
