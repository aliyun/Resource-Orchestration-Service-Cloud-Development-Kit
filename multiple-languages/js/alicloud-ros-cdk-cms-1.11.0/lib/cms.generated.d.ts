import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosContact`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contact
 */
export interface RosContactProps {
    /**
     * @Property channels: undefined
     */
    readonly channels: RosContact.ChannelsProperty | ros.IResolvable;
    /**
     * @Property contactName: The name of the alarm contact.
     */
    readonly contactName: string | ros.IResolvable;
    /**
     * @Property describe: The description of the alert contact.
     */
    readonly describe: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::Contact`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Contact` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contact
 */
export declare class RosContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::Contact";
    /**
     * @Attribute ContactName: The name of the alarm contact.
     */
    readonly attrContactName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property channels: undefined
     */
    channels: RosContact.ChannelsProperty | ros.IResolvable;
    /**
     * @Property contactName: The name of the alarm contact.
     */
    contactName: string | ros.IResolvable;
    /**
     * @Property describe: The description of the alert contact.
     */
    describe: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContactProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosContact {
    /**
     * @stability external
     */
    interface ChannelsProperty {
        /**
         * @Property mail: The email address of the contact.
         */
        readonly mail?: string | ros.IResolvable;
        /**
         * @Property aliIm: The TradeManager ID.
         */
        readonly aliIm?: string | ros.IResolvable;
        /**
         * @Property dingWebHook: The DingTalk Chatbot address.
         */
        readonly dingWebHook?: string | ros.IResolvable;
        /**
         * @Property sms: The mobile phone number of the contact.
         */
        readonly sms?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosContactGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contactgroup
 */
export interface RosContactGroupProps {
    /**
     * @Property contactGroupName: The name of the alert contact group.
     */
    readonly contactGroupName: string | ros.IResolvable;
    /**
     * @Property contactNames: The name of the alert contact.
     */
    readonly contactNames: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property describe: The description of the alert contact group.
     */
    readonly describe: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::ContactGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ContactGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contactgroup
 */
export declare class RosContactGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::ContactGroup";
    /**
     * @Attribute ContactGroupName: The name of the alert contact group.
     */
    readonly attrContactGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property contactGroupName: The name of the alert contact group.
     */
    contactGroupName: string | ros.IResolvable;
    /**
     * @Property contactNames: The name of the alert contact.
     */
    contactNames: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property describe: The description of the alert contact group.
     */
    describe: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContactGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDynamicTagGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
 */
export interface RosDynamicTagGroupProps {
    /**
     * @Property contactGroupList: Alarm contacts.
     */
    readonly contactGroupList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tagKey: Tag key.
     */
    readonly tagKey: string | ros.IResolvable;
    /**
     * @Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
     * true: enable installation
     * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
     * false: disable installation
     */
    readonly enableInstallAgent?: boolean | ros.IResolvable;
    /**
     * @Property enableSubscribeEvent: Whether the event subscription is enabled. Values are
     * :true: enable event subscription
     * false: disable event subscription
     */
    readonly enableSubscribeEvent?: boolean | ros.IResolvable;
    /**
     * @Property matchExpress: Matching list. Only supports one currently.
     */
    readonly matchExpress?: Array<RosDynamicTagGroup.MatchExpressProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
     * and: the relationship between
     * or: the relationship or the
     * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
     */
    readonly matchExpressFilterRelation?: string | ros.IResolvable;
    /**
     * @Property templateIdList: Alarm template ID list.
     * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
     */
    readonly templateIdList?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::DynamicTagGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DynamicTagGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
 */
export declare class RosDynamicTagGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::DynamicTagGroup";
    /**
     * @Attribute DynamicTagRuleId: Dynamic tag rule ID.
     */
    readonly attrDynamicTagRuleId: ros.IResolvable;
    /**
     * @Attribute TagKey: Tag key.
     */
    readonly attrTagKey: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property contactGroupList: Alarm contacts.
     */
    contactGroupList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tagKey: Tag key.
     */
    tagKey: string | ros.IResolvable;
    /**
     * @Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
     * true: enable installation
     * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
     * false: disable installation
     */
    enableInstallAgent: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableSubscribeEvent: Whether the event subscription is enabled. Values are
     * :true: enable event subscription
     * false: disable event subscription
     */
    enableSubscribeEvent: boolean | ros.IResolvable | undefined;
    /**
     * @Property matchExpress: Matching list. Only supports one currently.
     */
    matchExpress: Array<RosDynamicTagGroup.MatchExpressProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
     * and: the relationship between
     * or: the relationship or the
     * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
     */
    matchExpressFilterRelation: string | ros.IResolvable | undefined;
    /**
     * @Property templateIdList: Alarm template ID list.
     * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
     */
    templateIdList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDynamicTagGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDynamicTagGroup {
    /**
     * @stability external
     */
    interface MatchExpressProperty {
        /**
         * @Property tagValue: Tag value, used with TagValueMatchFunction.
         */
        readonly tagValue: string | ros.IResolvable;
        /**
         * @Property tagValueMatchFunction: Matching labeled keys. Values are:
     * contains: contains
     * startWith: Prefix
     * endWith: suffix
     * notContains: not included
     * equals: equals
     * all: All
         */
        readonly tagValueMatchFunction: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosEventRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventrule
 */
export interface RosEventRuleProps {
    /**
     * @Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
     */
    readonly eventPattern: Array<RosEventRule.EventPatternProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleName: The name of the alarm rule.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * @Property description: The description of the alert rule.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property eventType: The type of the event alert. Valid values:
     * SYSTEM
     * CUSTOM
     */
    readonly eventType?: string | ros.IResolvable;
    /**
     * @Property groupId: The ID of the application group.
     */
    readonly groupId?: string | ros.IResolvable;
    /**
     * @Property state: The status of the alert rule. Valid values:
     * ENABLED
     * DISABLED
     */
    readonly state?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::EventRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EventRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventrule
 */
export declare class RosEventRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::EventRule";
    /**
     * @Attribute Data: Number of rows affected.
     */
    readonly attrData: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
     */
    eventPattern: Array<RosEventRule.EventPatternProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleName: The name of the alarm rule.
     */
    ruleName: string | ros.IResolvable;
    /**
     * @Property description: The description of the alert rule.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property eventType: The type of the event alert. Valid values:
     * SYSTEM
     * CUSTOM
     */
    eventType: string | ros.IResolvable | undefined;
    /**
     * @Property groupId: The ID of the application group.
     */
    groupId: string | ros.IResolvable | undefined;
    /**
     * @Property state: The status of the alert rule. Valid values:
     * ENABLED
     * DISABLED
     */
    state: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEventRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEventRule {
    /**
     * @stability external
     */
    interface EventPatternProperty {
        /**
         * @Property sqlFilter: SQL event filtering When the event content meets the SQL conditions, an alarm is triggered automatically.
         */
        readonly sqlFilter?: string | ros.IResolvable;
        /**
         * @Property nameList: The name of the event. Please refer to the configuration of CMS.
         */
        readonly nameList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property levelList: The severity of the event alert. Valid values: CRITICAL, WARN, INFO, and * (all severity
     * levels).
         */
        readonly levelList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property statusList: The status of the event. Please refer to the configuration of CMS.
         */
        readonly statusList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property eventTypeList: The type of the event. A value of * indicates any type. Please refer to the configuration of CMS.
         */
        readonly eventTypeList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property product: The name of the service. Please refer to the configuration of CMS.
         */
        readonly product?: string | ros.IResolvable;
        /**
         * @Property customFilters: Event filtering keywords. When the event content contains this keyword, an alarm is triggered automatically.
         */
        readonly customFilters?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosEventRuleTargets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventruletargets
 */
export interface RosEventRuleTargetsProps {
    /**
     * @Property ruleName: The name of the alert rule.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * @Property contactParameters: CONTACT configuration.A maximum of 5 parameters
     */
    readonly contactParameters?: Array<RosEventRuleTargets.ContactParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property fcParameters: FC configuration.A maximum of 5 parameters.
     */
    readonly fcParameters?: Array<RosEventRuleTargets.FcParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property mnsParameters: MNS configuration.A maximum of 5 parameters
     */
    readonly mnsParameters?: Array<RosEventRuleTargets.MnsParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property slsParameters: SLS configuration.A maximum of 5 parameters.
     */
    readonly slsParameters?: Array<RosEventRuleTargets.SlsParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
     */
    readonly webhookParameters?: Array<RosEventRuleTargets.WebhookParametersProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::EventRuleTargets`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EventRuleTargets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventruletargets
 */
export declare class RosEventRuleTargets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::EventRuleTargets";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ruleName: The name of the alert rule.
     */
    ruleName: string | ros.IResolvable;
    /**
     * @Property contactParameters: CONTACT configuration.A maximum of 5 parameters
     */
    contactParameters: Array<RosEventRuleTargets.ContactParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property fcParameters: FC configuration.A maximum of 5 parameters.
     */
    fcParameters: Array<RosEventRuleTargets.FcParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property mnsParameters: MNS configuration.A maximum of 5 parameters
     */
    mnsParameters: Array<RosEventRuleTargets.MnsParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property slsParameters: SLS configuration.A maximum of 5 parameters.
     */
    slsParameters: Array<RosEventRuleTargets.SlsParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
     */
    webhookParameters: Array<RosEventRuleTargets.WebhookParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEventRuleTargetsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    interface ContactParametersProperty {
        /**
         * @Property contactGroupName: The name of the alert contact group.
         */
        readonly contactGroupName?: string | ros.IResolvable;
        /**
         * @Property level: The method of alert notification. Valid values: 2, 3, and 4.2: DingTalk Chatbot and email.3: DingTalk Chatbot and email.4: DingTalk Chatbot and email.
         */
        readonly level?: string | ros.IResolvable;
        /**
         * @Property identity: The unique ID of the alert contact group notification.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
export declare namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    interface FcParametersProperty {
        /**
         * @Property functionName: The name of the function.
         */
        readonly functionName?: string | ros.IResolvable;
        /**
         * @Property serviceName: The name of the Function Compute service.
         */
        readonly serviceName?: string | ros.IResolvable;
        /**
         * @Property region: The region where Function Compute is deployed.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property identity: The unique ID of the Function Compute notification.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
export declare namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    interface MnsParametersProperty {
        /**
         * @Property region: The region where MNS is deployed.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property queue: The name of the MNS queue.
         */
        readonly queue?: string | ros.IResolvable;
        /**
         * @Property identity: The unique ID of the Message Service (MNS) notification.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
export declare namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    interface SlsParametersProperty {
        /**
         * @Property project: The project corresponding to Log Service.
         */
        readonly project?: string | ros.IResolvable;
        /**
         * @Property logStore: The logstore corresponding to Log Service.
         */
        readonly logStore?: string | ros.IResolvable;
        /**
         * @Property region: The region where Log Service is deployed.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property identity: The unique ID of the Log Service notification.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
export declare namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    interface WebhookParametersProperty {
        /**
         * @Property method: The request method of the HTTP callback. Valid values: GET and POST.
         */
        readonly method?: string | ros.IResolvable;
        /**
         * @Property protocol: The name of the protocol.
         */
        readonly protocol?: string | ros.IResolvable;
        /**
         * @Property url: The callback URL.
         */
        readonly url?: string | ros.IResolvable;
        /**
         * @Property identity: The unique ID of the HTTP callback notification.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosGroupMetricRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-groupmetricrule
 */
export interface RosGroupMetricRuleProps {
    /**
     * @Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN)
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod)
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read\/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (original version of ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway)
     */
    readonly category: string | ros.IResolvable;
    /**
     * @Property escalations: undefined
     */
    readonly escalations: RosGroupMetricRule.EscalationsProperty | ros.IResolvable;
    /**
     * @Property groupId: The ID of application group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
     */
    readonly metricName: string | ros.IResolvable;
    /**
     * @Property namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
     * or see Preset metrics reference.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
     * uniqueness.
     */
    readonly ruleId: string | ros.IResolvable;
    /**
     * @Property ruleName: The name of the alert rule.
     */
    readonly ruleName: string | ros.IResolvable;
    /**
     * @Property dimensions: The expended resource dimensions.
     */
    readonly dimensions?: string | ros.IResolvable;
    /**
     * @Property effectiveInterval: The period when the alert rule is effective.
     */
    readonly effectiveInterval?: string | ros.IResolvable;
    /**
     * @Property emailSubject: The subject of the alert notification email.
     */
    readonly emailSubject?: string | ros.IResolvable;
    /**
     * @Property interval: The detection period of alerts.
     */
    readonly interval?: number | ros.IResolvable;
    /**
     * @Property noEffectiveInterval: The period when the alert rule is ineffective.
     */
    readonly noEffectiveInterval?: string | ros.IResolvable;
    /**
     * @Property period: The aggregation period. Unite: second.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
     * conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
     */
    readonly silenceTime?: number | ros.IResolvable;
    /**
     * @Property webhook: The URL of the callback triggered when an alert occurs.
     */
    readonly webhook?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::GroupMetricRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GroupMetricRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-groupmetricrule
 */
export declare class RosGroupMetricRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::GroupMetricRule";
    /**
     * @Attribute RuleId: Rule ID.
     */
    readonly attrRuleId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN)
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod)
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read\/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (original version of ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway)
     */
    category: string | ros.IResolvable;
    /**
     * @Property escalations: undefined
     */
    escalations: RosGroupMetricRule.EscalationsProperty | ros.IResolvable;
    /**
     * @Property groupId: The ID of application group.
     */
    groupId: string | ros.IResolvable;
    /**
     * @Property metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
     */
    metricName: string | ros.IResolvable;
    /**
     * @Property namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
     * or see Preset metrics reference.
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
     * uniqueness.
     */
    ruleId: string | ros.IResolvable;
    /**
     * @Property ruleName: The name of the alert rule.
     */
    ruleName: string | ros.IResolvable;
    /**
     * @Property dimensions: The expended resource dimensions.
     */
    dimensions: string | ros.IResolvable | undefined;
    /**
     * @Property effectiveInterval: The period when the alert rule is effective.
     */
    effectiveInterval: string | ros.IResolvable | undefined;
    /**
     * @Property emailSubject: The subject of the alert notification email.
     */
    emailSubject: string | ros.IResolvable | undefined;
    /**
     * @Property interval: The detection period of alerts.
     */
    interval: number | ros.IResolvable | undefined;
    /**
     * @Property noEffectiveInterval: The period when the alert rule is ineffective.
     */
    noEffectiveInterval: string | ros.IResolvable | undefined;
    /**
     * @Property period: The aggregation period. Unite: second.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
     * conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
     */
    silenceTime: number | ros.IResolvable | undefined;
    /**
     * @Property webhook: The URL of the callback triggered when an alert occurs.
     */
    webhook: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupMetricRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    interface CriticalProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for critical-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * critical-level alerts before an alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for critical-level alerts. The statistical method varies with
     * metric.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for critical-level alerts.
         */
        readonly threshold: number | ros.IResolvable;
    }
}
export declare namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    interface EscalationsProperty {
        /**
         * @Property critical: undefined
         */
        readonly critical?: RosGroupMetricRule.CriticalProperty | ros.IResolvable;
        /**
         * @Property info: undefined
         */
        readonly info?: RosGroupMetricRule.InfoProperty | ros.IResolvable;
        /**
         * @Property warn: undefined
         */
        readonly warn?: RosGroupMetricRule.WarnProperty | ros.IResolvable;
    }
}
export declare namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    interface InfoProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for info-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * info-level alerts before an alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for info-level alerts.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for info-level alerts.
         */
        readonly threshold: number | ros.IResolvable;
    }
}
export declare namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    interface WarnProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for warn-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * warn-level alerts before an alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for warn-level alerts.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for warn-level alerts.
         */
        readonly threshold: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosMetricRuleTargets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletargets
 */
export interface RosMetricRuleTargetsProps {
    /**
     * @Property ruleId: The ID of the alert rule.
     */
    readonly ruleId: string | ros.IResolvable;
    /**
     * @Property targets: undefined
     */
    readonly targets: Array<RosMetricRuleTargets.TargetsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::MetricRuleTargets`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MetricRuleTargets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletargets
 */
export declare class RosMetricRuleTargets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MetricRuleTargets";
    /**
     * @Attribute Arns: The ARN list of targets
     */
    readonly attrArns: ros.IResolvable;
    /**
     * @Attribute Ids: The ID list of targets
     */
    readonly attrIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ruleId: The ID of the alert rule.
     */
    ruleId: string | ros.IResolvable;
    /**
     * @Property targets: undefined
     */
    targets: Array<RosMetricRuleTargets.TargetsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMetricRuleTargetsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosMetricRuleTargets {
    /**
     * @stability external
     */
    interface TargetsProperty {
        /**
         * @Property level: The alert level, which is a JSON array. For example: ["INFO", "WARN", "CRITICAL"]. Valid values:
     * INFO
     * WARN
     * CRITICAL
         */
        readonly level?: string | ros.IResolvable;
        /**
         * @Property arn: The resource description in the format of acs:{Service name abbreviation}:{regionId}:{userId}:\/{Message resource type}\/{Resource
     * name}\/message. Example: acs:mns:cn-hangzhou:111:\/queues\/test\/message.
     * {Service name abbreviation}: the abbreviation of the service name. Set this value
     * to mns.
     * {regionId}: the region ID of the message queue or topic.
     * {userId}: the account ID of the user.
     * {Message resource type}: the type of the message resource. Valid values: queues and
     * topics.
     * {Resource name}: the name of a queue if the resource type is queues, or the name of
     * a topic if the type is topics.
         */
        readonly arn: string | ros.IResolvable;
        /**
         * @Property identity: The ID of the message resource. The ID must be unique in the alert rule.
         */
        readonly identity: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosMetricRuleTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplate
 */
export interface RosMetricRuleTemplateProps {
    /**
     * @Property name: The name of the alert template.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property alertTemplates: Valid values of N: 0 to 200.
     */
    readonly alertTemplates?: Array<RosMetricRuleTemplate.AlertTemplatesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property description: The description of the alert template.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
     * to obtain information about the alert templates. The combination of version and ID
     * uniquely identifies an alert template.
     */
    readonly restVersion?: number | ros.IResolvable;
    /**
     * @Property templateId: The ID of the alert template.
     */
    readonly templateId?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::MetricRuleTemplate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MetricRuleTemplate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplate
 */
export declare class RosMetricRuleTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MetricRuleTemplate";
    /**
     * @Attribute Id: Alarm template ID.
     */
    readonly attrId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the alert template.
     */
    name: string | ros.IResolvable;
    /**
     * @Property alertTemplates: Valid values of N: 0 to 200.
     */
    alertTemplates: Array<RosMetricRuleTemplate.AlertTemplatesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the alert template.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
     * to obtain information about the alert templates. The combination of version and ID
     * uniquely identifies an alert template.
     */
    restVersion: number | ros.IResolvable | undefined;
    /**
     * @Property templateId: The ID of the alert template.
     */
    templateId: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMetricRuleTemplateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    interface AlertTemplatesProperty {
        /**
         * @Property metricName: The name of the metric.
     * Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
         */
        readonly metricName: string | ros.IResolvable;
        /**
         * @Property category: The abbreviation of the service name.Value including but not limited to:
     * ecs: Elastic Compute Service (ECS) instances provided by Alibaba Cloud and hosts not
     * provided by Alibaba Cloud
     * rds: ApsaraDB for RDS
     * ads: AnalyticDB
     * slb: Server Load Balancer (SLB)
     * vpc: Virtual Private Cloud (VPC)
     * apigateway: API Gateway
     * cdn: CDN: Alibaba Cloud Content Delivery Network (CDN)
     * cs: Container Service for Swarm
     * dcdn: Dynamic Route for CDN
     * ddos: Anti-DDoS Pro
     * eip: Elastic IP Address (EIP)
     * elasticsearch: Elasticsearch
     * emr: E-MapReduce
     * ess: Auto Scaling
     * hbase: ApsaraDB for Hbase
     * iot_edge: IoT Edge
     * k8s_pod: pods in Container Service for Kubernetes
     * kvstore_sharding: ApsaraDB for Redis of the cluster architecture
     * kvstore_splitrw: ApsaraDB for Redis of the read\/write splitting architecture
     * kvstore_standard: ApsaraDB for Redis of the standard architecture
     * memcache: ApsaraDB for Memcache
     * mns: Message Service (MNS)
     * mongodb: ApsaraDB for MongoDB of the replica set architecture
     * mongodb_cluster: ApsaraDB for MongoDB of the cluster architecture
     * mongodb_sharding: ApsaraDB for MongoDB of the sharded cluster architecture
     * mq_topic: MNS topics
     * ocs: ApsaraDB for Memcache of earlier versions
     * opensearch: Open Search
     * oss: Object Storage Service (OSS)
     * polardb: PolarDB
     * petadata: HybridDB for MySQL
     * scdn: Secure Content Delivery Network (SCDN)
     * sharebandwidthpackages: EIP Bandwidth Plan
     * sls: Log Service
     * vpn: VPN Gateway
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property escalations: undefined
         */
        readonly escalations?: RosMetricRuleTemplate.EscalationsProperty | ros.IResolvable;
        /**
         * @Property period: The aggregation period of the monitoring data. Unit: seconds.
     * The default value is the lowest frequency at which the metric is polled. Typically,
     * you do not need to specify the aggregation period.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property webhook: The callback URL to which a POST request is sent when an alert is triggered based
     * on the alert rule.
         */
        readonly webhook?: string | ros.IResolvable;
        /**
         * @Property namespace: The namespace of the service.
     * Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
         */
        readonly namespace: string | ros.IResolvable;
        /**
         * @Property ruleName: The name of the alert rule.
         */
        readonly ruleName: string | ros.IResolvable;
        /**
         * @Property selector: The dimension of the alert. It is an extended field.
         */
        readonly selector?: string | ros.IResolvable;
    }
}
export declare namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    interface CriticalProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
     * GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * GreaterThanThreshold: greater than the threshold
     * LessThanOrEqualToThreshold: less than or equal to the threshold
     * LessThanThreshold: less than the threshold
     * NotEqualToThreshold: not equal to the threshold
     * GreaterThanYesterday: greater than the metric value at the same time yesterday
     * LessThanYesterday: less than the metric value at the same time yesterday
     * GreaterThanLastWeek: greater than the metric value at the same time last week
     * LessThanLastWeek: less than the metric value at the same time last week
     * GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value is measured before a alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for alerts.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for alerts.
         */
        readonly threshold: string | ros.IResolvable;
    }
}
export declare namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    interface EscalationsProperty {
        /**
         * @Property critical: undefined
         */
        readonly critical: RosMetricRuleTemplate.CriticalProperty | ros.IResolvable;
        /**
         * @Property info: undefined
         */
        readonly info?: RosMetricRuleTemplate.InfoProperty | ros.IResolvable;
        /**
         * @Property warn: undefined
         */
        readonly warn?: RosMetricRuleTemplate.WarnProperty | ros.IResolvable;
    }
}
export declare namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    interface InfoProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
     * GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * GreaterThanThreshold: greater than the threshold
     * LessThanOrEqualToThreshold: less than or equal to the threshold
     * LessThanThreshold: less than the threshold
     * NotEqualToThreshold: not equal to the threshold
     * GreaterThanYesterday: greater than the metric value at the same time yesterday
     * LessThanYesterday: less than the metric value at the same time yesterday
     * GreaterThanLastWeek: greater than the metric value at the same time last week
     * LessThanLastWeek: less than the metric value at the same time last week
     * GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value is measured before a alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for alerts.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for alerts.
         */
        readonly threshold: string | ros.IResolvable;
    }
}
export declare namespace RosMetricRuleTemplate {
    /**
     * @stability external
     */
    interface WarnProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
     * GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * GreaterThanThreshold: greater than the threshold
     * LessThanOrEqualToThreshold: less than or equal to the threshold
     * LessThanThreshold: less than the threshold
     * NotEqualToThreshold: not equal to the threshold
     * GreaterThanYesterday: greater than the metric value at the same time yesterday
     * LessThanYesterday: less than the metric value at the same time yesterday
     * GreaterThanLastWeek: greater than the metric value at the same time last week
     * LessThanLastWeek: less than the metric value at the same time last week
     * GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value is measured before a alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method for alerts.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for alerts.
         */
        readonly threshold: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosMetricRuleTemplateDeployment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplatedeployment
 */
export interface RosMetricRuleTemplateDeploymentProps {
    /**
     * @Property groupId: Apply group ID.
     * For how to get the application group ID, see DescribeMonitorGroups.
     */
    readonly groupId: number | ros.IResolvable;
    /**
     * @Property templateIds: The ID list of the Alarm Template to be applied.
     * For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
     */
    readonly templateIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property appendMode: Template application policy.Value:
     * all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default).
     * append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template.
     */
    readonly appendMode?: string | ros.IResolvable;
    /**
     * @Property applyMode: How to apply templates.Value:
     * GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored.
     * ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group.
     */
    readonly applyMode?: string | ros.IResolvable;
    /**
     * @Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59.
     */
    readonly enableEndTime?: number | ros.IResolvable;
    /**
     * @Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00.
     */
    readonly enableStartTime?: number | ros.IResolvable;
    /**
     * @Property notifyLevel: Alarm notification method.Value:
     * 2: Phone + SMS + Email + Wangwang + DingTalk Robot.
     * 3: SMS + Email + Wangwang + DingTalk Robot.
     * 4: Wangwang + Dingding Robot.
     */
    readonly notifyLevel?: number | ros.IResolvable;
    /**
     * @Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400.
     * Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle.
     */
    readonly silenceTime?: number | ros.IResolvable;
    /**
     * @Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent.
     */
    readonly webhook?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::MetricRuleTemplateDeployment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MetricRuleTemplateDeployment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplatedeployment
 */
export declare class RosMetricRuleTemplateDeployment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MetricRuleTemplateDeployment";
    /**
     * @Attribute GroupId: The ID of the group that applied the template to.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * @Attribute RuleIds: The IDs of rhe generated rules.
     */
    readonly attrRuleIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupId: Apply group ID.
     * For how to get the application group ID, see DescribeMonitorGroups.
     */
    groupId: number | ros.IResolvable;
    /**
     * @Property templateIds: The ID list of the Alarm Template to be applied.
     * For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
     */
    templateIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property appendMode: Template application policy.Value:
     * all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default).
     * append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template.
     */
    appendMode: string | ros.IResolvable | undefined;
    /**
     * @Property applyMode: How to apply templates.Value:
     * GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored.
     * ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group.
     */
    applyMode: string | ros.IResolvable | undefined;
    /**
     * @Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59.
     */
    enableEndTime: number | ros.IResolvable | undefined;
    /**
     * @Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00.
     */
    enableStartTime: number | ros.IResolvable | undefined;
    /**
     * @Property notifyLevel: Alarm notification method.Value:
     * 2: Phone + SMS + Email + Wangwang + DingTalk Robot.
     * 3: SMS + Email + Wangwang + DingTalk Robot.
     * 4: Wangwang + Dingding Robot.
     */
    notifyLevel: number | ros.IResolvable | undefined;
    /**
     * @Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400.
     * Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle.
     */
    silenceTime: number | ros.IResolvable | undefined;
    /**
     * @Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent.
     */
    webhook: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMetricRuleTemplateDeploymentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosMonitorGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroup
 */
export interface RosMonitorGroupProps {
    /**
     * @Property groupName: The name of the application group.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property contactGroups: The alert contact group. Alert notifications for the application group are sent to
     * the specified alert contact group.
     */
    readonly contactGroups?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::MonitorGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MonitorGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroup
 */
export declare class RosMonitorGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitorGroup";
    /**
     * @Attribute GroupId: Application group ID generated after the group is created.
     */
    readonly attrGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: The name of the application group.
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property contactGroups: The alert contact group. Alert notifications for the application group are sent to
     * the specified alert contact group.
     */
    contactGroups: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosMonitorGroupInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroupinstances
 */
export interface RosMonitorGroupInstancesProps {
    /**
     * @Property groupId: The ID of the application group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property instances:
     */
    readonly instances: Array<RosMonitorGroupInstances.InstancesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::MonitorGroupInstances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MonitorGroupInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroupinstances
 */
export declare class RosMonitorGroupInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitorGroupInstances";
    /**
     * @Attribute GroupId: The ID of the application group.
     */
    readonly attrGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupId: The ID of the application group.
     */
    groupId: string | ros.IResolvable;
    /**
     * @Property instances:
     */
    instances: Array<RosMonitorGroupInstances.InstancesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorGroupInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosMonitorGroupInstances {
    /**
     * @stability external
     */
    interface InstancesProperty {
        /**
         * @Property instanceName: The name of the instance.
         */
        readonly instanceName: string | ros.IResolvable;
        /**
         * @Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN )
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod )
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read\/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (old version ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway )
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the resource instance.
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property regionId: The ID of the region where the instance is deployed, such as cn-hangzhou.
         */
        readonly regionId: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosMonitoringAgent`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagent
 */
export interface RosMonitoringAgentProps {
    /**
     * @Property force: Specifies whether to install the CloudMonitor agent. Valid values:
     * true (default value): yes
     * false: no
     */
    readonly force?: boolean | ros.IResolvable;
    /**
     * @Property installCommand: Specifies whether to install the CloudMonitor agent on all ECS instances that belong to the current Alibaba Cloud account. Valid values:
     * onlyInstallNotHasAgent: installs the latest version of the CloudMonitor agent only on ECS instances on which the agent is not installed.
     * onlyUpgradeAgent: upgrades the CloudMonitor agent to the latest version only for ECS instances on which an earlier version of the agent is installed.
     * installAndUpgrade: installs the latest version of the CloudMonitor agent on ECS instances on which the agent is not installed, and upgrades the CloudMonitor agent to the latest version for ECS instances on which an earlier version of the agent is installed.
     * Note If you set the InstallCommand parameter, the InstanceIds parameter does not take effect.
     */
    readonly installCommand?: string | ros.IResolvable;
    /**
     * @Property instanceIds: Alibaba Cloud host ID.
     * The range of n: 1 ~ 10.
     * Explain that InstallCommand and InstanceIds must be selected one by one.
     */
    readonly instanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::MonitoringAgent`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MonitoringAgent` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagent
 */
export declare class RosMonitoringAgent extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitoringAgent";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property force: Specifies whether to install the CloudMonitor agent. Valid values:
     * true (default value): yes
     * false: no
     */
    force: boolean | ros.IResolvable | undefined;
    /**
     * @Property installCommand: Specifies whether to install the CloudMonitor agent on all ECS instances that belong to the current Alibaba Cloud account. Valid values:
     * onlyInstallNotHasAgent: installs the latest version of the CloudMonitor agent only on ECS instances on which the agent is not installed.
     * onlyUpgradeAgent: upgrades the CloudMonitor agent to the latest version only for ECS instances on which an earlier version of the agent is installed.
     * installAndUpgrade: installs the latest version of the CloudMonitor agent on ECS instances on which the agent is not installed, and upgrades the CloudMonitor agent to the latest version for ECS instances on which an earlier version of the agent is installed.
     * Note If you set the InstallCommand parameter, the InstanceIds parameter does not take effect.
     */
    installCommand: string | ros.IResolvable | undefined;
    /**
     * @Property instanceIds: Alibaba Cloud host ID.
     * The range of n: 1 ~ 10.
     * Explain that InstallCommand and InstanceIds must be selected one by one.
     */
    instanceIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitoringAgentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosMonitoringAgentProcess`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagentprocess
 */
export interface RosMonitoringAgentProcessProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property processName: The name of the process.
     */
    readonly processName?: string | ros.IResolvable;
    /**
     * @Property processUser: The user who launched the process.
     */
    readonly processUser?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::MonitoringAgentProcess`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MonitoringAgentProcess` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagentprocess
 */
export declare class RosMonitoringAgentProcess extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitoringAgentProcess";
    /**
     * @Attribute Id: The process ID.
     */
    readonly attrId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property processName: The name of the process.
     */
    processName: string | ros.IResolvable | undefined;
    /**
     * @Property processUser: The user who launched the process.
     */
    processUser: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitoringAgentProcessProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-namespace
 */
export interface RosNamespaceProps {
    /**
     * @Property namespace: The name of the namespace.
     * The name can contain lowercase letters, digits, and hyphens (-).
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property description: The description of the namespace.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property specification: The data retention period of the namespace. Valid values:
     * - cms.s1.large: Data storage duration is 15 days.
     * - cms.s1.xlarge: Data storage duration is 32 days.
     * - cms.s1.2xlarge: Data storage duration 63 days.
     * - cms.s1.3xlarge: Data storage duration 93 days.
     * - cms.s1.6xlarge: Data storage duration 185 days.
     * - cms.s1.12xlarge: Data storage duration 376 days.
     */
    readonly specification?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::Namespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-namespace
 */
export declare class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::Namespace";
    /**
     * @Attribute CreateTime: The timestamp that was generated when the namespace was created.
Unit: milliseconds.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the namespace.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute ModifyTime: The timestamp that was generated when the namespace was last modified.
     */
    readonly attrModifyTime: ros.IResolvable;
    /**
     * @Attribute Namespace: The namespace for the Alibaba Cloud service.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * @Attribute Specification: The data retention period of the namespace. Valid values:
- cms.s1.large: Data storage duration is 15 days.
- cms.s1.xlarge: Data storage duration is 32 days.
- cms.s1.2xlarge: Data storage duration 63 days.
- cms.s1.3xlarge: Data storage duration 93 days.
- cms.s1.6xlarge: Data storage duration 185 days.
- cms.s1.12xlarge: Data storage duration 376 days.
     */
    readonly attrSpecification: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property namespace: The name of the namespace.
     * The name can contain lowercase letters, digits, and hyphens (-).
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property description: The description of the namespace.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property specification: The data retention period of the namespace. Valid values:
     * - cms.s1.large: Data storage duration is 15 days.
     * - cms.s1.xlarge: Data storage duration is 32 days.
     * - cms.s1.2xlarge: Data storage duration 63 days.
     * - cms.s1.3xlarge: Data storage duration 93 days.
     * - cms.s1.6xlarge: Data storage duration 185 days.
     * - cms.s1.12xlarge: Data storage duration 376 days.
     */
    specification: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosResourceMetricRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-resourcemetricrule
 */
export interface RosResourceMetricRuleProps {
    /**
     * @Property contactGroups: The alert contact group.
     * The alert notifications are sent to the contacts that belong to the alert contact group.
     * Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
     */
    readonly contactGroups: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property escalations: You must select at least one of the Critical, Warn, and Info alert levels.
     */
    readonly escalations: RosResourceMetricRule.EscalationsProperty | ros.IResolvable;
    /**
     * @Property metricName: The name of the metric.
     * For information about how to query the name of a metric, see Appendix 1: Metrics.
     * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
     */
    readonly metricName: string | ros.IResolvable;
    /**
     * @Property namespace: The namespace of the cloud service.
     * For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
     * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property resources: The information about the resource.
     * Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
     * For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
     */
    readonly resources: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * @Property compositeExpression: The trigger conditions for multiple metrics.
     * Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
     */
    readonly compositeExpression?: RosResourceMetricRule.CompositeExpressionProperty | ros.IResolvable;
    /**
     * @Property deletionForce: Whether to delete rule even if it is not created by ROS. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property effectiveInterval: The time period during which the alert rule is effective.
     */
    readonly effectiveInterval?: string | ros.IResolvable;
    /**
     * @Property emailSubject: The subject of the alert notification email.
     */
    readonly emailSubject?: string | ros.IResolvable;
    /**
     * @Property interval: The interval at which the alert is triggered. Unit: seconds.
     * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
     */
    readonly interval?: number | ros.IResolvable;
    /**
     * @Property labels:
     */
    readonly labels?: Array<RosResourceMetricRule.LabelsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property noDataPolicy: The processing method of alerts when no monitoring data is found. Valid values:
     * - KEEP_LAST_STATE (default value): No operation is performed.
     * - INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
     * - OK: The status is considered normal.
     */
    readonly noDataPolicy?: string | ros.IResolvable;
    /**
     * @Property noEffectiveInterval: The time period during which the alert rule is ineffective.
     */
    readonly noEffectiveInterval?: string | ros.IResolvable;
    /**
     * @Property period: The statistical period of the metric. Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
     * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property prometheus: The Prometheus alert rule.
     * Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
     */
    readonly prometheus?: RosResourceMetricRule.PrometheusProperty | ros.IResolvable;
    /**
     * @Property ruleId: The ID of the alert rule. If not specified, ROS will generate one.
     * You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
     * Note: If you specify a new ID, a threshold-triggered alert rule is created.
     */
    readonly ruleId?: string | ros.IResolvable;
    /**
     * @Property ruleName: The name of the alert rule. If not specified and the rule is created by ROS, default to RuleId.
     * You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
     * Note: If you specify a new name, a threshold-triggered alert rule is created.
     */
    readonly ruleName?: string | ros.IResolvable;
    /**
     * @Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400.
     * Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
     */
    readonly silenceTime?: number | ros.IResolvable;
    /**
     * @Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
     */
    readonly webhook?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::ResourceMetricRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceMetricRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-resourcemetricrule
 */
export declare class RosResourceMetricRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::ResourceMetricRule";
    /**
     * @Attribute RuleId: The ID of the alert rule.
     */
    readonly attrRuleId: ros.IResolvable;
    /**
     * @Attribute RuleName: The name of the alert rule.
     */
    readonly attrRuleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property contactGroups: The alert contact group.
     * The alert notifications are sent to the contacts that belong to the alert contact group.
     * Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
     */
    contactGroups: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property escalations: You must select at least one of the Critical, Warn, and Info alert levels.
     */
    escalations: RosResourceMetricRule.EscalationsProperty | ros.IResolvable;
    /**
     * @Property metricName: The name of the metric.
     * For information about how to query the name of a metric, see Appendix 1: Metrics.
     * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
     */
    metricName: string | ros.IResolvable;
    /**
     * @Property namespace: The namespace of the cloud service.
     * For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
     * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property resources: The information about the resource.
     * Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
     * For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
     */
    resources: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * @Property compositeExpression: The trigger conditions for multiple metrics.
     * Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
     */
    compositeExpression: RosResourceMetricRule.CompositeExpressionProperty | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether to delete rule even if it is not created by ROS. Default is false
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property effectiveInterval: The time period during which the alert rule is effective.
     */
    effectiveInterval: string | ros.IResolvable | undefined;
    /**
     * @Property emailSubject: The subject of the alert notification email.
     */
    emailSubject: string | ros.IResolvable | undefined;
    /**
     * @Property interval: The interval at which the alert is triggered. Unit: seconds.
     * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
     */
    interval: number | ros.IResolvable | undefined;
    /**
     * @Property labels:
     */
    labels: Array<RosResourceMetricRule.LabelsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property noDataPolicy: The processing method of alerts when no monitoring data is found. Valid values:
     * - KEEP_LAST_STATE (default value): No operation is performed.
     * - INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
     * - OK: The status is considered normal.
     */
    noDataPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property noEffectiveInterval: The time period during which the alert rule is ineffective.
     */
    noEffectiveInterval: string | ros.IResolvable | undefined;
    /**
     * @Property period: The statistical period of the metric. Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
     * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property prometheus: The Prometheus alert rule.
     * Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
     */
    prometheus: RosResourceMetricRule.PrometheusProperty | ros.IResolvable | undefined;
    /**
     * @Property ruleId: The ID of the alert rule. If not specified, ROS will generate one.
     * You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
     * Note: If you specify a new ID, a threshold-triggered alert rule is created.
     */
    ruleId: string | ros.IResolvable | undefined;
    /**
     * @Property ruleName: The name of the alert rule. If not specified and the rule is created by ROS, default to RuleId.
     * You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
     * Note: If you specify a new name, a threshold-triggered alert rule is created.
     */
    ruleName: string | ros.IResolvable | undefined;
    /**
     * @Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400.
     * Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
     */
    silenceTime: number | ros.IResolvable | undefined;
    /**
     * @Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
     */
    webhook: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceMetricRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosResourceMetricRule {
    /**
     * @stability external
     */
    interface AnnotationsProperty {
        /**
         * @Property value: The value of the annotation.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the annotation.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosResourceMetricRule {
    /**
     * @stability external
     */
    interface CompositeExpressionProperty {
        /**
         * @Property times: The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property expressionRaw: The trigger conditions that are created by using expressions. You can use expressions to create trigger conditions in the following scenarios:
     * - Set an alert blacklist for specific resources. For example, if you specify $instanceId != 'i-io8kfvcpp7x5****' && $Average > 50, no alert is generated even when the average metric value of the i-io8kfvcpp7x5**** instance exceeds 50.
     * - Set a special alert threshold for a specified instance in the rule. For example, if you specify $Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50), an alert is triggered when the average metric value of the i-io8kfvcpp7x5**** instance exceeds 80 or the average metric value of other instances exceeds 50.
     * - Limits the number of instances whose metric values exceed the threshold. For example, if you specify count($Average > 20) > 3, an alert is triggered only when the number of instances whose average metric value exceeds 20 exceeds three.
         */
        readonly expressionRaw?: string | ros.IResolvable;
        /**
         * @Property expressionListJoin: The relationship between the trigger conditions for multiple metrics. Valid values:
     * - &&: An alert is triggered only if all metrics meet the trigger conditions. An alert is triggered only if the results of all expressions specified in the ExpressionList parameter are true.
     * - ||: If one of the metrics meets the trigger conditions, an alert is triggered.
         */
        readonly expressionListJoin?: string | ros.IResolvable;
        /**
         * @Property level: The level of the alert. Valid values:
     * - Critical
     * - Warn
     * - Info
         */
        readonly level: string | ros.IResolvable;
        /**
         * @Property expressionList: The trigger conditions that are created in standard mode.
         */
        readonly expressionList?: Array<RosResourceMetricRule.ExpressionListProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosResourceMetricRule {
    /**
     * @stability external
     */
    interface CriticalProperty {
        /**
         * @Property comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
     * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * - GreaterThanThreshold: greater than the threshold
     * - LessThanOrEqualToThreshold: less than or equal to the threshold
     * - LessThanThreshold: less than the threshold
     * - NotEqualToThreshold: not equal to the threshold
     * - GreaterThanYesterday: greater than the metric value at the same time yesterday
     * - LessThanYesterday: less than the metric value at the same time yesterday
     * - GreaterThanLastWeek: greater than the metric value at the same time last week
     * - LessThanLastWeek: less than the metric value at the same time last week
     * - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * - LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical methods for Critical-level alerts. Valid values:
     * - Maximum: the maximum value
     * - Minimum: the minimum value
     * - Average: the average value
     * - Availability: the availability rate
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for Critical-level alerts.
         */
        readonly threshold: string | ros.IResolvable;
    }
}
export declare namespace RosResourceMetricRule {
    /**
     * @stability external
     */
    interface EscalationsProperty {
        /**
         * @Property critical: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
         */
        readonly critical?: RosResourceMetricRule.CriticalProperty | ros.IResolvable;
        /**
         * @Property info: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
         */
        readonly info?: RosResourceMetricRule.InfoProperty | ros.IResolvable;
        /**
         * @Property warn: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
         */
        readonly warn?: RosResourceMetricRule.WarnProperty | ros.IResolvable;
    }
}
export declare namespace RosResourceMetricRule {
    /**
     * @stability external
     */
    interface ExpressionListProperty {
        /**
         * @Property metricName: The metric that is used to monitor the cloud service.
         */
        readonly metricName: string | ros.IResolvable;
        /**
         * @Property comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
     * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * - GreaterThanThreshold: greater than the threshold
     * - LessThanOrEqualToThreshold: less than or equal to the threshold
     * - LessThanThreshold: less than the threshold
     * - NotEqualToThreshold: not equal to the threshold
     * - GreaterThanYesterday: greater than the metric value at the same time yesterday
     * - LessThanYesterday: less than the metric value at the same time yesterday
     * - GreaterThanLastWeek: greater than the metric value at the same time last week
     * - LessThanLastWeek: less than the metric value at the same time last week
     * - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * - LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property period: The aggregation period of the metric.
     * Unit: seconds.
         */
        readonly period: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical method of the metric. Valid values:
     * $Maximum: the maximum value
     * $Minimum: the minimum value
     * $Average: the average value
     * $Availability: the availability rate (usually used for site monitoring)
     * Note: $ is the prefix of the metric. For information about the Alibaba Cloud services that are supported by CloudMonitor, see Appendix 1: Metrics.
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The alert threshold.
         */
        readonly threshold: string | ros.IResolvable;
    }
}
export declare namespace RosResourceMetricRule {
    /**
     * @stability external
     */
    interface InfoProperty {
        /**
         * @Property comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
     * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * - GreaterThanThreshold: greater than the threshold
     * - LessThanOrEqualToThreshold: less than or equal to the threshold
     * - LessThanThreshold: less than the threshold
     * - NotEqualToThreshold: not equal to the threshold
     * - GreaterThanYesterday: greater than the metric value at the same time yesterday
     * - LessThanYesterday: less than the metric value at the same time yesterday
     * - GreaterThanLastWeek: greater than the metric value at the same time last week
     * - LessThanLastWeek: less than the metric value at the same time last week
     * - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * - LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value meets the trigger condition before an Info-level alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical methods for Info-level alerts. Valid values:
     * - Maximum: the maximum value
     * - Minimum: the minimum value
     * - Average: the average value
     * - Availability: the availability rate
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for Info-level alerts.
         */
        readonly threshold: string | ros.IResolvable;
    }
}
export declare namespace RosResourceMetricRule {
    /**
     * @stability external
     */
    interface LabelsProperty {
        /**
         * @Property value: The value of the tag.
     * Note: You can use a template parameter to specify a tag value. CloudMonitor replaces the value of the template parameter with an actual tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the tag.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosResourceMetricRule {
    /**
     * @stability external
     */
    interface PrometheusProperty {
        /**
         * @Property annotations: The annotations of the Prometheus alert rule. When a Prometheus alert is triggered, the system renders the annotated keys and values to help you understand the metrics and alert rule.
     * Note: This parameter is equivalent to the annotations parameter of open source Prometheus.
         */
        readonly annotations?: Array<RosResourceMetricRule.AnnotationsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property promQl: The PromQL query statement.
     * Note: The data obtained by using the PromQL query statement is the monitoring data. You must include the alert threshold in this statement.
         */
        readonly promQl: string | ros.IResolvable;
        /**
         * @Property times: The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property level: The level of the alert. Valid values:
     * - Critical
     * - Warn
     * - Info
         */
        readonly level: string | ros.IResolvable;
    }
}
export declare namespace RosResourceMetricRule {
    /**
     * @stability external
     */
    interface WarnProperty {
        /**
         * @Property comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
     * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
     * - GreaterThanThreshold: greater than the threshold
     * - LessThanOrEqualToThreshold: less than or equal to the threshold
     * - LessThanThreshold: less than the threshold
     * - NotEqualToThreshold: not equal to the threshold
     * - GreaterThanYesterday: greater than the metric value at the same time yesterday
     * - LessThanYesterday: less than the metric value at the same time yesterday
     * - GreaterThanLastWeek: greater than the metric value at the same time last week
     * - LessThanLastWeek: less than the metric value at the same time last week
     * - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
     * - LessThanLastPeriod: less than the metric value in the last monitoring cycle
         */
        readonly comparisonOperator: string | ros.IResolvable;
        /**
         * @Property times: The consecutive number of times for which the metric value meets the trigger condition before a Warn-level alert is triggered.
         */
        readonly times: number | ros.IResolvable;
        /**
         * @Property statistics: The statistical methods for Warn-level alerts. Valid values:
     * - Maximum: the maximum value
     * - Minimum: the minimum value
     * - Average: the average value
     * - Availability: the availability rate
         */
        readonly statistics: string | ros.IResolvable;
        /**
         * @Property threshold: The threshold for Warn-level alerts.
         */
        readonly threshold: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSiteMonitor`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-sitemonitor
 */
export interface RosSiteMonitorProps {
    /**
     * @Property address: The URL or IP address monitored by the monitoring task.
     */
    readonly address: string | ros.IResolvable;
    /**
     * @Property taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
     * It can contain letters, digits, and underscores (_).
     */
    readonly taskName: string | ros.IResolvable;
    /**
     * @Property taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
     * UDP, DNS, SMTP, POP3, and FTP.
     */
    readonly taskType: string | ros.IResolvable;
    /**
     * @Property alertIds:
     */
    readonly alertIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
     * minutes. Default value: 1.
     */
    readonly interval?: number | ros.IResolvable;
    /**
     * @Property ispCities: The information about detection points, which is specified in a JSON array. Example:
     * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
     * Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
     * points that can be used to create site monitoring tasks. For more information, see
     * DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
     * points for site monitoring.
     */
    readonly ispCities?: Array<RosSiteMonitor.IspCitiesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property optionsJson: The extended options of the protocol that is used by the site monitoring task. The
     * options vary based on the protocol.
     */
    readonly optionsJson?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::SiteMonitor`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SiteMonitor` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-sitemonitor
 */
export declare class RosSiteMonitor extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::SiteMonitor";
    /**
     * @Attribute TaskId: The ID of the site monitoring task.
     */
    readonly attrTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property address: The URL or IP address monitored by the monitoring task.
     */
    address: string | ros.IResolvable;
    /**
     * @Property taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
     * It can contain letters, digits, and underscores (_).
     */
    taskName: string | ros.IResolvable;
    /**
     * @Property taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
     * UDP, DNS, SMTP, POP3, and FTP.
     */
    taskType: string | ros.IResolvable;
    /**
     * @Property alertIds:
     */
    alertIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
     * minutes. Default value: 1.
     */
    interval: number | ros.IResolvable | undefined;
    /**
     * @Property ispCities: The information about detection points, which is specified in a JSON array. Example:
     * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
     * Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
     * points that can be used to create site monitoring tasks. For more information, see
     * DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
     * points for site monitoring.
     */
    ispCities: Array<RosSiteMonitor.IspCitiesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property optionsJson: The extended options of the protocol that is used by the site monitoring task. The
     * options vary based on the protocol.
     */
    optionsJson: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSiteMonitorProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSiteMonitor {
    /**
     * @stability external
     */
    interface IspCitiesProperty {
        /**
         * @Property isp:
         */
        readonly isp: string | ros.IResolvable;
        /**
         * @Property city:
         */
        readonly city: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosSlsGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-slsgroup
 */
export interface RosSlsGroupProps {
    /**
     * @Property slsGroupConfig: The configurations of the Logstore group.Valid values of N: 1 to 25.
     */
    readonly slsGroupConfig: Array<RosSlsGroup.SlsGroupConfigProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property slsGroupName: The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter.
     */
    readonly slsGroupName: string | ros.IResolvable;
    /**
     * @Property slsGroupDescription: The description of the Logstore group.
     */
    readonly slsGroupDescription?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::SlsGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SlsGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-slsgroup
 */
export declare class RosSlsGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::SlsGroup";
    /**
     * @Attribute CreateTime: The creation time of the Logstore group.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute SlsGroupConfig: The configurations of the Logstore group.
     */
    readonly attrSlsGroupConfig: ros.IResolvable;
    /**
     * @Attribute SlsGroupDescription: The description of the Logstore group.
     */
    readonly attrSlsGroupDescription: ros.IResolvable;
    /**
     * @Attribute SlsGroupName: The name of the Logstore group.
     */
    readonly attrSlsGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property slsGroupConfig: The configurations of the Logstore group.Valid values of N: 1 to 25.
     */
    slsGroupConfig: Array<RosSlsGroup.SlsGroupConfigProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property slsGroupName: The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter.
     */
    slsGroupName: string | ros.IResolvable;
    /**
     * @Property slsGroupDescription: The description of the Logstore group.
     */
    slsGroupDescription: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSlsGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSlsGroup {
    /**
     * @stability external
     */
    interface SlsGroupConfigProperty {
        /**
         * @Property slsProject: The Simple Log Service project.
         */
        readonly slsProject: string | ros.IResolvable;
        /**
         * @Property slsRegion: The region ID.
         */
        readonly slsRegion: string | ros.IResolvable;
        /**
         * @Property slsUserId: The member ID. If you call this operation by using the management account of a resource directory, you can connect the Alibaba Cloud services that are activated for all members in the resource directory to Hybrid Cloud Monitoring. You can use the resource directory to monitor Alibaba Cloud services across enterprise accounts.Note If a member uses CloudMonitor for the first time, you must make sure that the service-linked role AliyunServiceRoleForCloudMonitor is attached to the member. For more information, see Manage the service-linked role for CloudMonitor.
         */
        readonly slsUserId?: string | ros.IResolvable;
        /**
         * @Property slsLogstore: The Logstore.
         */
        readonly slsLogstore: string | ros.IResolvable;
    }
}
