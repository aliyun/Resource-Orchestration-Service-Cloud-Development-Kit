import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::SLS::Alert`
 */
export interface RosAlertProps {
    /**
     * @Property detail:
     */
    readonly detail: RosAlert.DetailProperty | ros.IResolvable;
    /**
     * @Property project: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly project: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SLS::Alert`
 */
export declare class RosAlert extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Alert";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Name: Alert name.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property detail:
     */
    detail: RosAlert.DetailProperty | ros.IResolvable;
    /**
     * @Property project: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    project: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLS::Alert`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAlert {
    /**
     * @stability external
     */
    interface ConfigurationProperty {
        /**
         * @Property throttling: Notification interval, default is no interval.
         */
        readonly throttling: string | ros.IResolvable;
        /**
         * @Property condition: he condition that is required to trigger an alert.
     * Log Service triggers an alert if the trigger condition is met.
     * For example, you can set the trigger condition to pv%100 > 0 && uv > 0.
         */
        readonly condition: string | ros.IResolvable;
        /**
         * @Property notificationList:
         */
        readonly notificationList?: Array<RosAlert.NotificationListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property notifyThreshold: The notification threshold,
     * which will not be notified until the number of triggers is reached.
         */
        readonly notifyThreshold?: number | ros.IResolvable;
        /**
         * @Property dashboard: Alarm associated dashboard.
         */
        readonly dashboard: string | ros.IResolvable;
        /**
         * @Property queryList:
         */
        readonly queryList: Array<RosAlert.QueryListProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosAlert {
    /**
     * @stability external
     */
    interface DetailProperty {
        /**
         * @Property type:
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property description: Description of the alert.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property configuration:
         */
        readonly configuration: RosAlert.ConfigurationProperty | ros.IResolvable;
        /**
         * @Property state:
         */
        readonly state?: string | ros.IResolvable;
        /**
         * @Property schedule: The interval at which Log Service evaluates the alert rule.
     * Note During an alert rule evaluation, if a query returns more than 100 log entries,
     *  Log Service checks only the first 100 log entries.
         */
        readonly schedule: RosAlert.ScheduleProperty | ros.IResolvable;
        /**
         * @Property displayName: Alert name display in console. The name length is 1-64 characters.
         */
        readonly displayName: string | ros.IResolvable;
        /**
         * @Property name: Alert name.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosAlert {
    /**
     * @stability external
     */
    interface NotificationListProperty {
        /**
         * @Property type: This topic describes how to configure a notification method.
     * Log Service can send alert notifications by using one or more methods.
     * Available notification methods include emails, DingTalk chatbot webhooks,
     * custom webhooks, and Alibaba Cloud Message Center.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property mobileList:
         */
        readonly mobileList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property serviceUri: The webhook URL of the DingTalk chatbot.
         */
        readonly serviceUri?: string | ros.IResolvable;
        /**
         * @Property content: The content of an alert notification
         */
        readonly content?: string | ros.IResolvable;
        /**
         * @Property emailList:
         */
        readonly emailList?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosAlert {
    /**
     * @stability external
     */
    interface QueryListProperty {
        /**
         * @Property query:
         */
        readonly query: string | ros.IResolvable;
        /**
         * @Property logStore:
         */
        readonly logStore: string | ros.IResolvable;
        /**
         * @Property start:
         */
        readonly start: string | ros.IResolvable;
        /**
         * @Property timeSpanType:
         */
        readonly timeSpanType: string | ros.IResolvable;
        /**
         * @Property end:
         */
        readonly end: string | ros.IResolvable;
        /**
         * @Property chartTitle:
         */
        readonly chartTitle: string | ros.IResolvable;
    }
}
export declare namespace RosAlert {
    /**
     * @stability external
     */
    interface ScheduleProperty {
        /**
         * @Property dayOfWeek:
         */
        readonly dayOfWeek?: number | ros.IResolvable;
        /**
         * @Property type:
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property runImmediately:
         */
        readonly runImmediately?: boolean | ros.IResolvable;
        /**
         * @Property hour:
         */
        readonly hour?: number | ros.IResolvable;
        /**
         * @Property cronExpression:
         */
        readonly cronExpression?: string | ros.IResolvable;
        /**
         * @Property delay:
         */
        readonly delay?: number | ros.IResolvable;
        /**
         * @Property interval: Execution interval
         */
        readonly interval?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::SLS::ApplyConfigToMachineGroup`
 */
export interface RosApplyConfigToMachineGroupProps {
    /**
     * @Property configName: Apply config to the config name
     */
    readonly configName?: string | ros.IResolvable;
    /**
     * @Property groupName: Apply config to the group name
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property projectName: Apply config to the project name.
     */
    readonly projectName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SLS::ApplyConfigToMachineGroup`
 */
export declare class RosApplyConfigToMachineGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::ApplyConfigToMachineGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property configName: Apply config to the config name
     */
    configName: string | ros.IResolvable | undefined;
    /**
     * @Property groupName: Apply config to the group name
     */
    groupName: string | ros.IResolvable | undefined;
    /**
     * @Property projectName: Apply config to the project name.
     */
    projectName: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SLS::ApplyConfigToMachineGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplyConfigToMachineGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SLS::Index`
 */
export interface RosIndexProps {
    /**
     * @Property fullTextIndex: Full-text indexing configuration.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    readonly fullTextIndex: RosIndex.FullTextIndexProperty | ros.IResolvable;
    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string | ros.IResolvable;
    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property keyIndices: Key index configurations.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    readonly keyIndices?: Array<RosIndex.KeyIndicesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property logReduce: Whether to enable log reduce. Default to false.
     */
    readonly logReduce?: boolean | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SLS::Index`
 */
export declare class RosIndex extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Index";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property fullTextIndex: Full-text indexing configuration.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    fullTextIndex: RosIndex.FullTextIndexProperty | ros.IResolvable;
    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    logstoreName: string | ros.IResolvable;
    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property keyIndices: Key index configurations.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    keyIndices: Array<RosIndex.KeyIndicesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property logReduce: Whether to enable log reduce. Default to false.
     */
    logReduce: boolean | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SLS::Index`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIndexProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosIndex {
    /**
     * @stability external
     */
    interface FullTextIndexProperty {
        /**
         * @Property delimiter: Delimiter. Default to (( , '";=()[]{}?@&<>/:\n\t\r )).
         */
        readonly delimiter?: string | ros.IResolvable;
        /**
         * @Property includeChinese: Whether it contains Chinese. Default to false.
         */
        readonly includeChinese?: boolean | ros.IResolvable;
        /**
         * @Property caseSensitive: Whether it is case sensitive. Default to false.
         */
        readonly caseSensitive?: boolean | ros.IResolvable;
        /**
         * @Property enable: Whether to enable full-text indexing. Default to true.
         */
        readonly enable: boolean | ros.IResolvable;
    }
}
export declare namespace RosIndex {
    /**
     * @stability external
     */
    interface JsonKeyIndicesProperty {
        /**
         * @Property type: Json key type. Allowed types: text, long, double. Default to text.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property alias: Json key alias.
         */
        readonly alias?: string | ros.IResolvable;
        /**
         * @Property enableAnalytics: Whether this json key is enabled for statistics. Default to true.
         */
        readonly enableAnalytics?: boolean | ros.IResolvable;
        /**
         * @Property name: Json key name. It can be nested by dot(.), such as k1.k2.k3.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosIndex {
    /**
     * @stability external
     */
    interface KeyIndicesProperty {
        /**
         * @Property type: Key type. Allowed types: text, long, double, json. Default to text.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property jsonKeyIndices: Json key index configurations.
         */
        readonly jsonKeyIndices?: Array<RosIndex.JsonKeyIndicesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property delimiter: Delimiter. It takes effect when Type is text or json. Default to (( , '";=()[]{}?@&<>/:\n\t\r )).
         */
        readonly delimiter?: string | ros.IResolvable;
        /**
         * @Property includeChinese: Whether it contains Chinese. It takes effect when Type is text or json. Default to false.
         */
        readonly includeChinese?: boolean | ros.IResolvable;
        /**
         * @Property alias: Key alias.
         */
        readonly alias?: string | ros.IResolvable;
        /**
         * @Property enableAnalytics: Whether this key is enabled for statistics. Default to false for json type, else true.
         */
        readonly enableAnalytics?: boolean | ros.IResolvable;
        /**
         * @Property caseSensitive: Whether it is case sensitive. It takes effect when Type is text or json. Default to false.
         */
        readonly caseSensitive?: boolean | ros.IResolvable;
        /**
         * @Property name: Key name.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::SLS::Logstore`
 */
export interface RosLogstoreProps {
    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string | ros.IResolvable;
    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
     * Default to false.
     */
    readonly appendMeta?: boolean | ros.IResolvable;
    /**
     * @Property autoSplit: Whether to automatically split the shard.
     * Default to false.
     */
    readonly autoSplit?: boolean | ros.IResolvable;
    /**
     * @Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
     * Default to false.
     */
    readonly enableTracking?: boolean | ros.IResolvable;
    /**
     * @Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
     * Allowed Values: 1-64.
     */
    readonly maxSplitShard?: number | ros.IResolvable;
    /**
     * @Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    readonly preserveStorage?: boolean | ros.IResolvable;
    /**
     * @Property shardCount: The number of Shards.
     * Allowed Values: 1-100, default to 2.
     */
    readonly shardCount?: number | ros.IResolvable;
    /**
     * @Property ttl: The lifecycle of log in the logstore in days.
     * Allowed Values: 1-3600, default to 30.
     */
    readonly ttl?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SLS::Logstore`
 */
export declare class RosLogstore extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Logstore";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute LogstoreName: Logstore name.
     */
    readonly attrLogstoreName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    logstoreName: string | ros.IResolvable;
    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
     * Default to false.
     */
    appendMeta: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoSplit: Whether to automatically split the shard.
     * Default to false.
     */
    autoSplit: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
     * Default to false.
     */
    enableTracking: boolean | ros.IResolvable | undefined;
    /**
     * @Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
     * Allowed Values: 1-64.
     */
    maxSplitShard: number | ros.IResolvable | undefined;
    /**
     * @Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    preserveStorage: boolean | ros.IResolvable | undefined;
    /**
     * @Property shardCount: The number of Shards.
     * Allowed Values: 1-100, default to 2.
     */
    shardCount: number | ros.IResolvable | undefined;
    /**
     * @Property ttl: The lifecycle of log in the logstore in days.
     * Allowed Values: 1-3600, default to 30.
     */
    ttl: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SLS::Logstore`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogstoreProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SLS::LogtailConfig`
 */
export interface RosLogtailConfigProps {
    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string | ros.IResolvable;
    /**
     * @Property logtailConfigName: Logtail config name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logtailConfigName: string | ros.IResolvable;
    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property cloneFrom: Clone logtail config data from existing logtail config.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     */
    readonly cloneFrom?: RosLogtailConfig.CloneFromProperty | ros.IResolvable;
    /**
     * @Property rawConfigData: The format is the same as the response of SLS API GetConfig.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     * configName, outputType, outputDetail in data will be ignored.For example:
     * {
     *     "configName": "test-logtail-config",
     *     "createTime": 1574843554,
     *     "inputDetail": {
     *         "acceptNoEnoughKeys": false,
     *         "adjustTimezone": false,
     *         "advanced": {
     *             "force_multiconfig": false
     *         },
     *         "autoExtend": true,
     *         "delayAlarmBytes": 0,
     *         "delaySkipBytes": 0,
     *         "discardNonUtf8": false,
     *         "discardUnmatch": false,
     *         "dockerExcludeEnv": {},
     *         "dockerExcludeLabel": {},
     *         "dockerFile": false,
     *         "dockerIncludeEnv": {},
     *         "dockerIncludeLabel": {},
     *         "enableRawLog": false,
     *         "enableTag": false,
     *         "fileEncoding": "utf8",
     *         "filePattern": "test.log*",
     *         "filterKey": [],
     *         "filterRegex": [],
     *         "key": [
     *             "time",
     *             "logger",
     *             "level",
     *             "request_id",
     *             "user_id",
     *             "region_id",
     *             "content"
     *         ],
     *         "localStorage": true,
     *         "logPath": "/var/log/test",
     *         "logTimezone": "",
     *         "logType": "delimiter_log",
     *         "maxDepth": 100,
     *         "maxSendRate": -1,
     *         "mergeType": "topic",
     *         "preserve": true,
     *         "preserveDepth": 1,
     *         "priority": 0,
     *         "quote": "\u0001",
     *         "sendRateExpire": 0,
     *         "sensitive_keys": [],
     *         "separator": ",,,",
     *         "shardHashKey": [],
     *         "tailExisted": false,
     *         "timeFormat": "",
     *         "timeKey": "",
     *         "topicFormat": "none"
     *     },
     *     "inputType": "file",
     *     "lastModifyTime": 1574843554,
     *     "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
     *     "outputDetail": {
     *         "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
     *         "logstoreName": "test-logstore",
     *         "region": "cn-hangzhou"
     *     },
     *     "outputType": "LogService"
     * }
     */
    readonly rawConfigData?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SLS::LogtailConfig`
 */
export declare class RosLogtailConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::LogtailConfig";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AppliedMachineGroups: Applied machine groups.
     */
    readonly attrAppliedMachineGroups: ros.IResolvable;
    /**
     * @Attribute Endpoint: Endpoint address.
     */
    readonly attrEndpoint: ros.IResolvable;
    /**
     * @Attribute LogtailConfigName: Logtail config name.
     */
    readonly attrLogtailConfigName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    logstoreName: string | ros.IResolvable;
    /**
     * @Property logtailConfigName: Logtail config name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    logtailConfigName: string | ros.IResolvable;
    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property cloneFrom: Clone logtail config data from existing logtail config.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     */
    cloneFrom: RosLogtailConfig.CloneFromProperty | ros.IResolvable | undefined;
    /**
     * @Property rawConfigData: The format is the same as the response of SLS API GetConfig.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     * configName, outputType, outputDetail in data will be ignored.For example:
     * {
     *     "configName": "test-logtail-config",
     *     "createTime": 1574843554,
     *     "inputDetail": {
     *         "acceptNoEnoughKeys": false,
     *         "adjustTimezone": false,
     *         "advanced": {
     *             "force_multiconfig": false
     *         },
     *         "autoExtend": true,
     *         "delayAlarmBytes": 0,
     *         "delaySkipBytes": 0,
     *         "discardNonUtf8": false,
     *         "discardUnmatch": false,
     *         "dockerExcludeEnv": {},
     *         "dockerExcludeLabel": {},
     *         "dockerFile": false,
     *         "dockerIncludeEnv": {},
     *         "dockerIncludeLabel": {},
     *         "enableRawLog": false,
     *         "enableTag": false,
     *         "fileEncoding": "utf8",
     *         "filePattern": "test.log*",
     *         "filterKey": [],
     *         "filterRegex": [],
     *         "key": [
     *             "time",
     *             "logger",
     *             "level",
     *             "request_id",
     *             "user_id",
     *             "region_id",
     *             "content"
     *         ],
     *         "localStorage": true,
     *         "logPath": "/var/log/test",
     *         "logTimezone": "",
     *         "logType": "delimiter_log",
     *         "maxDepth": 100,
     *         "maxSendRate": -1,
     *         "mergeType": "topic",
     *         "preserve": true,
     *         "preserveDepth": 1,
     *         "priority": 0,
     *         "quote": "\u0001",
     *         "sendRateExpire": 0,
     *         "sensitive_keys": [],
     *         "separator": ",,,",
     *         "shardHashKey": [],
     *         "tailExisted": false,
     *         "timeFormat": "",
     *         "timeKey": "",
     *         "topicFormat": "none"
     *     },
     *     "inputType": "file",
     *     "lastModifyTime": 1574843554,
     *     "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
     *     "outputDetail": {
     *         "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
     *         "logstoreName": "test-logstore",
     *         "region": "cn-hangzhou"
     *     },
     *     "outputType": "LogService"
     * }
     */
    rawConfigData: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SLS::LogtailConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogtailConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosLogtailConfig {
    /**
     * @stability external
     */
    interface CloneFromProperty {
        /**
         * @Property logtailConfigName: Logtail config name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
         */
        readonly logtailConfigName: string | ros.IResolvable;
        /**
         * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
         */
        readonly projectName: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::SLS::MachineGroup`
 */
export interface RosMachineGroupProps {
    /**
     * @Property groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
     */
    readonly groupAttribute?: string | ros.IResolvable;
    /**
     * @Property groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property groupType: MachineGroup type, the value is empty or Armory
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * @Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
     */
    readonly machineIdentifyType?: string | ros.IResolvable;
    /**
     * @Property machineList: The machine tag, the value is ip or userdefined-id.
     */
    readonly machineList?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property projectName: MachineGroup created in project.
     */
    readonly projectName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SLS::MachineGroup`
 */
export declare class RosMachineGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::MachineGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute GroupName: GroupName of SLS.
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * @Attribute ProjectName: ProjectName of SLS.
     */
    readonly attrProjectName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
     */
    groupAttribute: string | ros.IResolvable | undefined;
    /**
     * @Property groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    groupName: string | ros.IResolvable | undefined;
    /**
     * @Property groupType: MachineGroup type, the value is empty or Armory
     */
    groupType: string | ros.IResolvable | undefined;
    /**
     * @Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
     */
    machineIdentifyType: string | ros.IResolvable | undefined;
    /**
     * @Property machineList: The machine tag, the value is ip or userdefined-id.
     */
    machineList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property projectName: MachineGroup created in project.
     */
    projectName: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::SLS::MachineGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMachineGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::SLS::Project`
 */
export interface RosProjectProps {
    /**
     * @Property name: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property description: Project description: <>'"\ is not supported, up to 64 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosProject.TagsProperty[];
}
/**
 * A ROS template type:  `ALIYUN::SLS::Project`
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Project";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Name: Project name.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    name: string | ros.IResolvable;
    /**
     * @Property description: Project description: <>'"\ is not supported, up to 64 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosProject.TagsProperty[] | undefined;
    /**
     * Create a new `ALIYUN::SLS::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosProject {
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
 * Properties for defining a `ALIYUN::SLS::Savedsearch`
 */
export interface RosSavedsearchProps {
    /**
     * @Property detail:
     */
    readonly detail: RosSavedsearch.DetailProperty | ros.IResolvable;
    /**
     * @Property project: Project name
     */
    readonly project: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SLS::Savedsearch`
 */
export declare class RosSavedsearch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Savedsearch";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SavedsearchName: Savedsearch name.
     */
    readonly attrSavedsearchName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property detail:
     */
    detail: RosSavedsearch.DetailProperty | ros.IResolvable;
    /**
     * @Property project: Project name
     */
    project: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLS::Savedsearch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSavedsearchProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSavedsearch {
    /**
     * @stability external
     */
    interface DetailProperty {
        /**
         * @Property searchQuery: Check sentence.
         */
        readonly searchQuery: string | ros.IResolvable;
        /**
         * @Property logstore: Logstore name.
         */
        readonly logstore: string | ros.IResolvable;
        /**
         * @Property displayName: Display name.
         */
        readonly displayName?: string | ros.IResolvable;
        /**
         * @Property savedsearchName: Savedsearch name.
         */
        readonly savedsearchName: string | ros.IResolvable;
        /**
         * @Property topic: Topic name
         */
        readonly topic: string | ros.IResolvable;
    }
}
