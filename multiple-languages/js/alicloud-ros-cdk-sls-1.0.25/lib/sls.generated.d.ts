import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAlert`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Alert`, which is used to create an alert rule.
 * @Note This class does not contain additional functions, so it is recommended to use the `Alert` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
 */
export declare class RosAlert extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Alert";
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
    interface AnnotationsProperty {
        /**
         * @Property value:
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key:
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosAlert {
    /**
     * @stability external
     */
    interface ConfigurationProperty {
        /**
         * @Property throttling: Notification interval, default is no interval.
         */
        readonly throttling?: string | ros.IResolvable;
        /**
         * @Property condition: The condition that is required to trigger an alert.
     * Log Service triggers an alert if the trigger condition is met.
     * For example, you can set the trigger condition to pv%100 > 0 && uv > 0.
         */
        readonly condition?: string | ros.IResolvable;
        /**
         * @Property autoAnnotation:
         */
        readonly autoAnnotation?: boolean | ros.IResolvable;
        /**
         * @Property severityConfigurations: The list of severity configurations.
         */
        readonly severityConfigurations?: Array<RosAlert.SeverityConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property noDataFire: Whether to trigger an alarm if there is no data, the default is false.
         */
        readonly noDataFire?: boolean | ros.IResolvable;
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
         * @Property muteUntil:
         */
        readonly muteUntil?: number | ros.IResolvable;
        /**
         * @Property dashboard: Alarm associated dashboard.
         */
        readonly dashboard: string | ros.IResolvable;
        /**
         * @Property labels: The list of tags.
         */
        readonly labels?: Array<RosAlert.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property groupConfiguration:
         */
        readonly groupConfiguration?: RosAlert.GroupConfigurationProperty | ros.IResolvable;
        /**
         * @Property noDataSeverity: The alarm level when there is no data to trigger the alarm. Valid values:
     * 2: Report
     * 4: Low
     * 6: Medium
     * 8: High
     * 10: Critical.
         */
        readonly noDataSeverity?: number | ros.IResolvable;
        /**
         * @Property type: Configuration type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property annotations: The list of annotations.
         */
        readonly annotations?: Array<RosAlert.AnnotationsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property version: Configuration version.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property joinConfigurations: The list of Join conditions when multiple tables are joined. For example, 3 tables join, and 2 joinConfigurations are passed in.
         */
        readonly joinConfigurations?: Array<RosAlert.JoinConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property policyConfiguration:
         */
        readonly policyConfiguration?: RosAlert.PolicyConfigurationProperty | ros.IResolvable;
        /**
         * @Property queryList:
         */
        readonly queryList: Array<RosAlert.QueryListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sendResolved: Whether to notify when the alarm is restored, the default is false.
         */
        readonly sendResolved?: boolean | ros.IResolvable;
        /**
         * @Property threshold: Trigger threshold.
         */
        readonly threshold?: number | ros.IResolvable;
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
    interface EvalConditionProperty {
        /**
         * @Property condition: It is triggered when any piece of data in the result of judging the Cartesian product satisfies the Condition. After grouping, it indicates the data trigger condition for each group, and an empty string indicates that any data row is satisfied.
         */
        readonly condition?: string | ros.IResolvable;
        /**
         * @Property countCondition: Alarm expression, indicating how much data meets the alarm condition.
         */
        readonly countCondition?: string | ros.IResolvable;
    }
}
export declare namespace RosAlert {
    /**
     * @stability external
     */
    interface GroupConfigurationProperty {
        /**
         * @Property type: Grouping type.
     * no_group: no grouping
     * labels_auto: autocustom: custom.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property fields: The fields of group. Fill in the empty list when not group. No fill when group automatically. Fill required when group in custom.
         */
        readonly fields?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosAlert {
    /**
     * @stability external
     */
    interface JoinConfigurationsProperty {
        /**
         * @Property condition: Condition for a set operation. Not required when using Cartesian product.
         */
        readonly condition?: string | ros.IResolvable;
        /**
         * @Property type: The type of set operation join.
         */
        readonly type: string | ros.IResolvable;
    }
}
export declare namespace RosAlert {
    /**
     * @stability external
     */
    interface LabelsProperty {
        /**
         * @Property value:
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key:
         */
        readonly key: string | ros.IResolvable;
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
         * @Property headers:
         */
        readonly headers?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property emailList:
         */
        readonly emailList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property method:
         */
        readonly method?: string | ros.IResolvable;
    }
}
export declare namespace RosAlert {
    /**
     * @stability external
     */
    interface PolicyConfigurationProperty {
        /**
         * @Property alertPolicyId: The ID of alert policy.
         */
        readonly alertPolicyId?: string | ros.IResolvable;
        /**
         * @Property actionPolicyId: The ID of action policy. It is useful when an alert policy references a dynamic action policy.
         */
        readonly actionPolicyId?: string | ros.IResolvable;
        /**
         * @Property useDefault:
         */
        readonly useDefault?: boolean | ros.IResolvable;
        /**
         * @Property repeatInterval: Repeat interval. The format is number with suffix s\/m\/h.
         */
        readonly repeatInterval?: string | ros.IResolvable;
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
        readonly logStore?: string | ros.IResolvable;
        /**
         * @Property start:
         */
        readonly start: string | ros.IResolvable;
        /**
         * @Property timeSpanType:
         */
        readonly timeSpanType: string | ros.IResolvable;
        /**
         * @Property powerSqlMode:
         */
        readonly powerSqlMode?: string | ros.IResolvable;
        /**
         * @Property store: When StoreType is log or metric, it indicates the LogStore to be queried.
     * When StoreType is meta, it indicates the ResourceName to be queried.
         */
        readonly store?: string | ros.IResolvable;
        /**
         * @Property dashboardId: The ID of associated dashboard.
         */
        readonly dashboardId?: string | ros.IResolvable;
        /**
         * @Property roleArn: ARN used by role access.
         */
        readonly roleArn?: string | ros.IResolvable;
        /**
         * @Property storeType: Log store type. Valid values:
     * log: sls query analysis statement
     * metric: sls time series data
     * meta: query metastore.
         */
        readonly storeType?: string | ros.IResolvable;
        /**
         * @Property project:
         */
        readonly project?: string | ros.IResolvable;
        /**
         * @Property region:
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property end:
         */
        readonly end: string | ros.IResolvable;
        /**
         * @Property chartTitle:
         */
        readonly chartTitle?: string | ros.IResolvable;
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
export declare namespace RosAlert {
    /**
     * @stability external
     */
    interface SeverityConfigurationsProperty {
        /**
         * @Property severity: The alarm level when there is no data to trigger the alarm. Valid values:
     * 2: Report
     * 4: Low
     * 6: Medium
     * 8: High
     * 10: Critical.
         */
        readonly severity: number | ros.IResolvable;
        /**
         * @Property evalCondition:
         */
        readonly evalCondition?: RosAlert.EvalConditionProperty | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosApplyConfigToMachineGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::ApplyConfigToMachineGroup`, which is used to apply Log Service configurations to machine groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApplyConfigToMachineGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup
 */
export declare class RosApplyConfigToMachineGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::ApplyConfigToMachineGroup";
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
 * Properties for defining a `RosAudit`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
 */
export interface RosAuditProps {
    /**
     * @Property displayName: Name of SLS log audit.
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * @Property variableMap: Log audit detailed configuration.
     */
    readonly variableMap: RosAudit.VariableMapProperty | ros.IResolvable;
    /**
     * @Property multiAccount: Multi-account configuration, please fill in multiple aliuid.
     */
    readonly multiAccount?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Audit`, which is used to configure Log Audit Service.
 * @Note This class does not contain additional functions, so it is recommended to use the `Audit` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
 */
export declare class RosAudit extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Audit";
    /**
     * @Attribute DisplayName: Name of SLS log audit.
     */
    readonly attrDisplayName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property displayName: Name of SLS log audit.
     */
    displayName: string | ros.IResolvable;
    /**
     * @Property variableMap: Log audit detailed configuration.
     */
    variableMap: RosAudit.VariableMapProperty | ros.IResolvable;
    /**
     * @Property multiAccount: Multi-account configuration, please fill in multiple aliuid.
     */
    multiAccount: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAuditProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAudit {
    /**
     * @stability external
     */
    interface VariableMapProperty {
        /**
         * @Property polardbPerfPolicySetting: POLARDB perf policy setting.
         */
        readonly polardbPerfPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property wafEnabled: Waf log switch. Default true.
         */
        readonly wafEnabled?: boolean | ros.IResolvable;
        /**
         * @Property vpcFlowEnabled: Flow log of VPC. Default false.
         */
        readonly vpcFlowEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsPerfEnabled: RDS perf log switch. Default false.
         */
        readonly rdsPerfEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cpsCallbackCollectionPolicy: Mobile push collection policy
         */
        readonly cpsCallbackCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property redisAuditTiEnabled: Threat Intelligence of Redis audit.
         */
        readonly redisAuditTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsPerfTiEnabled: Threat Intelligence of rds perf log.
         */
        readonly rdsPerfTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsSlowPolicySetting: Rds slow policy setting.
         */
        readonly rdsSlowPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property k8SIngressTtl: K8s Ingress log centralization ttl. Default 180.
         */
        readonly k8SIngressTtl?: number | ros.IResolvable;
        /**
         * @Property ossSyncEnabled: OSS synchronization to central configuration switch. Default true.
         */
        readonly ossSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsAuditCollectionPolicy: Rds audit collection policy
         */
        readonly rdsAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property bastionAuditCollectionPolicy: Bastion audit collection policy
         */
        readonly bastionAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property bastionEnabled: Fortress machine operation log switch.Default true.
         */
        readonly bastionEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsEnabled: RDS audit log switch. Default true.
         */
        readonly rdsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property redisSyncTtl: Redis sync to center switch. Default 180.
         */
        readonly redisSyncTtl?: number | ros.IResolvable;
        /**
         * @Property sasSessionEnabled: Cloud security center network session log switch.Default false.
         */
        readonly sasSessionEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsAuditPolicySetting: Rds audit policy setting.
         */
        readonly rdsAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ddosCooAccessTtl: Ddos log centralization ttl. Default 180.
         */
        readonly ddosCooAccessTtl?: number | ros.IResolvable;
        /**
         * @Property albAccessEnabled: Specifies whether to collect ALB access log. Default false.
         */
        readonly albAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property bastionTtl: Fort machine centralized ttl. Default 180.
         */
        readonly bastionTtl?: number | ros.IResolvable;
        /**
         * @Property albSyncEnabled: ALB synchronization to central configuration switch. Default true.
         */
        readonly albSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsSlowEnabled: RDS slow log switch. Default false.
         */
        readonly rdsSlowEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasDnsQueryEnabled: Specifies whether to collect DNS query logs. Default false.
         */
        readonly sasDnsQueryEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbErrorTtl: PolarDB error log TTL. Default 180.
         */
        readonly polardbErrorTtl?: number | ros.IResolvable;
        /**
         * @Property wafAccessCollectionPolicy: Waf audit collection policy
         */
        readonly wafAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property k8SAuditTtl: K8s log centralization ttl. Default 180.
         */
        readonly k8SAuditTtl?: number | ros.IResolvable;
        /**
         * @Property polardbTtl: POLARDB log centralization ttl. Default 180.
         */
        readonly polardbTtl?: number | ros.IResolvable;
        /**
         * @Property drdsAuditCollectionPolicy: DRDS audit collection policy
         */
        readonly drdsAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property slbAccessCollectionPolicy: SLB audit collection policy
         */
        readonly slbAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property albAccessTtl: ALB access log TTL. Default 180.
         */
        readonly albAccessTtl?: number | ros.IResolvable;
        /**
         * @Property sasSnapshotPortEnabled: Cloud Security Center Port Snapshot Switch. Default false.
         */
        readonly sasSnapshotPortEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudconfigChangeEnabled: CloudConfig change log switch. Default false.
         */
        readonly cloudconfigChangeEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsSlowTtl: Rds slow log centralization ttl. Default 180.
         */
        readonly rdsSlowTtl?: number | ros.IResolvable;
        /**
         * @Property polardbEnabled: POLARDB audit log switch. Default true.
         */
        readonly polardbEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasSnapshotProcessEnabled: Cloud Security Center process snapshot switch. Default false.
         */
        readonly sasSnapshotProcessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property actiontrailTiEnabled: Threat Intelligence of actiontrail.
         */
        readonly actiontrailTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property nasTiEnabled: Threat Intelligence of Nas.
         */
        readonly nasTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property appconnectTiEnabled: Threat Intelligence of Appconnect.
         */
        readonly appconnectTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property vpcFlowCollectionPolicy: VPC flow log collection policy script. Default empty.
         */
        readonly vpcFlowCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property cpsTtl: Mobile push ttl. Default 180.
         */
        readonly cpsTtl?: number | ros.IResolvable;
        /**
         * @Property slbSyncTtl: Slb sync to center switch. Default 180.
         */
        readonly slbSyncTtl?: number | ros.IResolvable;
        /**
         * @Property cloudfirewallAccessCollectionPolicy: Cloud firewall audit collection policy
         */
        readonly cloudfirewallAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ddosCooAccessEnabled: Ddos access log switch. Default false.
         */
        readonly ddosCooAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SIngressTiEnabled: Threat Intelligence of k8s Ingress.
         */
        readonly k8SIngressTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property drdsAuditTiEnabled: Threat Intelligence of DRDS.
         */
        readonly drdsAuditTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasSecurityVulEnabled: Cloud Security Center Vulnerability Log Switch.Default false.
         */
        readonly sasSecurityVulEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbSlowPolicySetting: POLARDB slow policy setting.
         */
        readonly polardbSlowPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property k8SIngressCollectionPolicy: K8s Ingress collection policy
         */
        readonly k8SIngressCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property apigatewayTtl: API Gateway ttl. Default 180.
         */
        readonly apigatewayTtl?: number | ros.IResolvable;
        /**
         * @Property cpsEnabled: Mobile push log switch. Default true.
         */
        readonly cpsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ddosBgpAccessEnabled: Anti-DDoS (Origin) access log switch. Default false.
         */
        readonly ddosBgpAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsSlowCollectionPolicy: Rds slow collection policy.
         */
        readonly rdsSlowCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property vpcSyncTtl: VPC synchronization to central TTL. Default 180.
         */
        readonly vpcSyncTtl?: number | ros.IResolvable;
        /**
         * @Property actiontrailOpenapiCollectionPolicy: Actiontrail openapi collection policy
         */
        readonly actiontrailOpenapiCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property rdsPerfPolicySetting: Rds perf policy setting.
         */
        readonly rdsPerfPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property cloudfirewallAccessPolicySetting: Cloud firewall audit policy setting.
         */
        readonly cloudfirewallAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property idaasMngTtl: IDaaS management log TTL. Default 180.
         */
        readonly idaasMngTtl?: number | ros.IResolvable;
        /**
         * @Property ossAccessEnabled: Access log switch of OSS. Default true.
         */
        readonly ossAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cpsCallbackPolicySetting: Mobile push policy setting.
         */
        readonly cpsCallbackPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property slbAccessTtl: Slb centralized ttl. Default 7.
         */
        readonly slbAccessTtl?: number | ros.IResolvable;
        /**
         * @Property wafAccessPolicySetting: Waf audit policy setting.
         */
        readonly wafAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property polardbPerfTiEnabled: Threat Intelligence of POLARDB perf log.
         */
        readonly polardbPerfTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasLocalDnsEnabled: Cloud security center local DNS log switch. Default false.
         */
        readonly sasLocalDnsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ossAccessTtl: Access log TTL of OSS. Default 180.
         */
        readonly ossAccessTtl?: number | ros.IResolvable;
        /**
         * @Property sasHttpEnabled: Cloud Security Center WEB access log switch. Default false.
         */
        readonly sasHttpEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ossMeteringPolicySetting: Oss metering policy setting.
         */
        readonly ossMeteringPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ossMeteringEnabled: OSS metering log switch.Default true.
         */
        readonly ossMeteringEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudfirewallEnabled: Cloud firewall log switch. Default true.
         */
        readonly cloudfirewallEnabled?: boolean | ros.IResolvable;
        /**
         * @Property dnsIntranetEnabled: Specifies whether to collect intranet Alibaba Cloud DNS (DNS) logs. Default false.
         */
        readonly dnsIntranetEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudfirewallVpcTtl: The retention period of Cloud Firewall VPC firewall traffic logs in the central Logstore. Default 180.
         */
        readonly cloudfirewallVpcTtl?: number | ros.IResolvable;
        /**
         * @Property albAccessCollectionPolicy: ALB access log collection policy script. Default empty.
         */
        readonly albAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property dnsSyncTtl: The retention period of intranet DNS logs in the central Logstore. Default 180.
         */
        readonly dnsSyncTtl?: number | ros.IResolvable;
        /**
         * @Property slbAccessTiEnabled: Threat Intelligence of SLB.
         */
        readonly slbAccessTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ddosDipAccessEnabled: Anti-DDoS Premium access log switch. Default false.
         */
        readonly ddosDipAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property drdsSyncTtl: DRDS sync to center ttl. Default 180.
         */
        readonly drdsSyncTtl?: number | ros.IResolvable;
        /**
         * @Property k8SEventPolicySetting: K8s event policy setting.
         */
        readonly k8SEventPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property nasTtl: Nas centralized ttl. Default 180.
         */
        readonly nasTtl?: number | ros.IResolvable;
        /**
         * @Property sasLoginEnabled: Cloud security center login flow log switch. Default false.
         */
        readonly sasLoginEnabled?: boolean | ros.IResolvable;
        /**
         * @Property wafTtl: Waf centralized ttl. Default true.
         */
        readonly wafTtl?: number | ros.IResolvable;
        /**
         * @Property nasAuditPolicySetting: Nas audit policy setting.
         */
        readonly nasAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property rdsTtl: Rds log centralization ttl. Default 180.
         */
        readonly rdsTtl?: number | ros.IResolvable;
        /**
         * @Property k8SIngressEnabled: K8s Ingress log switch. Default false.
         */
        readonly k8SIngressEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsErrorEnabled: Specifies whether to collect RDS error log. Default false.
         */
        readonly rdsErrorEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudfirewallTiEnabled: Threat Intelligence of Cloud firewall.
         */
        readonly cloudfirewallTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SEventCollectionPolicy: K8s event collection policy
         */
        readonly k8SEventCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property actiontrailEnabled: Notification type. Support Email, SMS, DingTalk. Default true.
         */
        readonly actiontrailEnabled?: boolean | ros.IResolvable;
        /**
         * @Property drdsSyncEnabled: DRDS sync to center switch. Default true.
         */
        readonly drdsSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property apigatewayEnabled: API Gateway Log Switch. Default true.
         */
        readonly apigatewayEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasCrackEnabled: Cloud Security Center Brute Force Log Switch. Default false.
         */
        readonly sasCrackEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cpsTiEnabled: Threat Intelligence of mobile push.
         */
        readonly cpsTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsErrorTtl: RDS error log TTL. Default 180.
         */
        readonly rdsErrorTtl?: number | ros.IResolvable;
        /**
         * @Property k8SEventEnabled: K8s event log switch. Default false.
         */
        readonly k8SEventEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ossSyncTtl: OSS synchronization to central TTL. Default 180.
         */
        readonly ossSyncTtl?: number | ros.IResolvable;
        /**
         * @Property rdsPerfTtl: Rds perf log centralization ttl. Default 180.
         */
        readonly rdsPerfTtl?: number | ros.IResolvable;
        /**
         * @Property sasSnapshotAccountEnabled: Cloud Security Center account snapshot switch. Default false.
         */
        readonly sasSnapshotAccountEnabled?: boolean | ros.IResolvable;
        /**
         * @Property slbSyncEnabled: Slb sync to center switch. Default true.
         */
        readonly slbSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property bastionTiEnabled: Threat Intelligence of Bastion.
         */
        readonly bastionTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ossAccessPolicySetting: Oss access policy setting.
         */
        readonly ossAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sasTiEnabled: Threat Intelligence of Cloud Security Center.
         */
        readonly sasTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property vpcFlowTtl: Regional flow log TTL of VPC. Default 7.
         */
        readonly vpcFlowTtl?: number | ros.IResolvable;
        /**
         * @Property idaasUserTtl: IDaaS user behavior log. Default 180.
         */
        readonly idaasUserTtl?: number | ros.IResolvable;
        /**
         * @Property drdsAuditTtl: DRDS log centralization ttl. Default 7.
         */
        readonly drdsAuditTtl?: number | ros.IResolvable;
        /**
         * @Property redisAuditCollectionPolicy: Redis audit collection policy
         */
        readonly redisAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property polardbPerfEnabled: POLARDB perf log switch. Default false.
         */
        readonly polardbPerfEnabled?: boolean | ros.IResolvable;
        /**
         * @Property idaasMngEnabled: Specifies whether to collect IDaaS management log. Default false.
         */
        readonly idaasMngEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ddosCooAccessCollectionPolicy: Ddos audit collection policy
         */
        readonly ddosCooAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ossMeteringTiEnabled: Threat Intelligence of oss metering.
         */
        readonly ossMeteringTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SAuditEnabled: K8s access log switch. Default false.
         */
        readonly k8SAuditEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudconfigChangeTtl: CloudConfig change log ttl. Default 180.
         */
        readonly cloudconfigChangeTtl?: number | ros.IResolvable;
        /**
         * @Property polardbPerfTtl: POLARDB perf log centralization ttl. Default 180.
         */
        readonly polardbPerfTtl?: number | ros.IResolvable;
        /**
         * @Property apigatewayAccessPolicySetting: Apigateway audit policy setting.
         */
        readonly apigatewayAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property nasEnabled: Nas log switch. Default true.
         */
        readonly nasEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasDnsEnabled: Cloud Security Center DNS resolution log switch. Default false.
         */
        readonly sasDnsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property nasAuditCollectionPolicy: Nas audit collection policy
         */
        readonly nasAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property polardbSlowCollectionPolicy: POLARDB slow collection policy.
         */
        readonly polardbSlowCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property appconnectTtl: Appconnect log centralization ttl. Default 180.
         */
        readonly appconnectTtl?: number | ros.IResolvable;
        /**
         * @Property ossMeteringTtl: OSS measurement log TTL. Default 180.
         */
        readonly ossMeteringTtl?: number | ros.IResolvable;
        /**
         * @Property sasSecurityHcEnabled: Cloud Security Center Baseline Log Switch. Default false.
         */
        readonly sasSecurityHcEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SAuditCollectionPolicy: K8s audit collection policy
         */
        readonly k8SAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property dnsIntranetCollectionPolicy: DNS intranet log collection policy script. Default empty.
         */
        readonly dnsIntranetCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property vpcSyncEnabled: VPC synchronization to central configuration switch. Default true.
         */
        readonly vpcSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ddosCooAccessTiEnabled: Threat Intelligence of Ddos.
         */
        readonly ddosCooAccessTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property appconnectOpCollectionPolicy: Appconnect audit collection policy
         */
        readonly appconnectOpCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ddosDipAccessTtl: Anti-DDoS Premium access log ttl. Default 180.
         */
        readonly ddosDipAccessTtl?: number | ros.IResolvable;
        /**
         * @Property cloudfirewallVpcEnabled: Specifies whether to collect VPC firewall traffic logs from Cloud Firewall. Default false.
         */
        readonly cloudfirewallVpcEnabled?: boolean | ros.IResolvable;
        /**
         * @Property appconnectOpPolicySetting: Appconnect audit policy setting.
         */
        readonly appconnectOpPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property idaasUserCollectionPolicy: IDaaS user behavior log collection policy script. Default empty.
         */
        readonly idaasUserCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property polardbErrorEnabled: Specifies whether to collect PolarDB error log. Default false.
         */
        readonly polardbErrorEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbTiEnabled: Threat Intelligence of POLARDB.
         */
        readonly polardbTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property redisAuditTtl: Redis audit log centralization ttl. Default 7.
         */
        readonly redisAuditTtl?: number | ros.IResolvable;
        /**
         * @Property rdsSlowTiEnabled: Threat Intelligence of rds slow log.
         */
        readonly rdsSlowTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property albSyncTtl: ALB synchronization to central TTL. Default 180.
         */
        readonly albSyncTtl?: number | ros.IResolvable;
        /**
         * @Property sasTtl: Cloud Security Center centralized ttl. Default 180.
         */
        readonly sasTtl?: number | ros.IResolvable;
        /**
         * @Property idaasMngCollectionPolicy: IDaaS management log collection policy script. Default empty.
         */
        readonly idaasMngCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property actiontrailTtl: Actiontrail action log TTL.
         */
        readonly actiontrailTtl?: number | ros.IResolvable;
        /**
         * @Property rdsPerfCollectionPolicy: Rds perf collection policy.
         */
        readonly rdsPerfCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ddosBgpAccessTtl: Anti-DDoS (Origin) access log ttl. Default 180.
         */
        readonly ddosBgpAccessTtl?: number | ros.IResolvable;
        /**
         * @Property ossAccessCollectionPolicy: Oss access collection policy.
         */
        readonly ossAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property redisAuditEnabled: Redis audit log switch. Default true.
         */
        readonly redisAuditEnabled?: boolean | ros.IResolvable;
        /**
         * @Property wafTiEnabled: Threat Intelligence of Waf.
         */
        readonly wafTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudconfigNoncomTtl: CloudConfig non-compliance log ttl. Default 180.
         */
        readonly cloudconfigNoncomTtl?: number | ros.IResolvable;
        /**
         * @Property redisSyncEnabled: Redis sync to center switch. Default true.
         */
        readonly redisSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SAuditTiEnabled: Threat Intelligence of K8s.
         */
        readonly k8SAuditTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasProcessEnabled: Cloud Security Center process startup log switch. Default false.
         */
        readonly sasProcessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property redisAuditPolicySetting: Redis audit policy setting.
         */
        readonly redisAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property appconnectEnabled: Appconnect access log switch. Default false.
         */
        readonly appconnectEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsErrorCollectionPolicy: RDS error log collection policy script. Default empty.
         */
        readonly rdsErrorCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property drdsAuditPolicySetting: DRDS audit policy setting.
         */
        readonly drdsAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property idaasUserEnabled: Specifies whether to collect IDaaS user behavior log. Default false.
         */
        readonly idaasUserEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SEventTiEnabled: Threat Intelligence of k8s event.
         */
        readonly k8SEventTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbAuditCollectionPolicy: POLARDB audit collection policy
         */
        readonly polardbAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ddosCooAccessPolicySetting: Ddos audit policy setting.
         */
        readonly ddosCooAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property polardbSlowEnabled: POLARDB slow log switch. Default false.
         */
        readonly polardbSlowEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SEventTtl: K8s event log centralization ttl. Default 180.
         */
        readonly k8SEventTtl?: number | ros.IResolvable;
        /**
         * @Property sasSecurityAlertEnabled: Cloud Security Center Security Alarm Log Switch .Default false.
         */
        readonly sasSecurityAlertEnabled?: boolean | ros.IResolvable;
        /**
         * @Property drdsAuditEnabled: DRDS audit log switch. Default true.
         */
        readonly drdsAuditEnabled?: boolean | ros.IResolvable;
        /**
         * @Property slbAccessEnabled: Slb log switch. Default true.
         */
        readonly slbAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudconfigNoncomEnabled: CloudConfig non-compliance log switch. Default false.
         */
        readonly cloudconfigNoncomEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasNetworkEnabled: Cloud security center network connection log switch. Default false.
         */
        readonly sasNetworkEnabled?: boolean | ros.IResolvable;
        /**
         * @Property dnsIntranetTtl: The retention period of intranet DNS logs in the regional Logstore. Default 7.
         */
        readonly dnsIntranetTtl?: number | ros.IResolvable;
        /**
         * @Property k8SIngressPolicySetting: K8s Ingress policy setting.
         */
        readonly k8SIngressPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ossMeteringCollectionPolicy: Oss metering collection policy.
         */
        readonly ossMeteringCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property polardbErrorCollectionPolicy: PolarDB error log collection policy script. Default empty.
         */
        readonly polardbErrorCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property polardbSlowTiEnabled: Threat Intelligence of POLARDB slow log.
         */
        readonly polardbSlowTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbSlowTtl: POLARDB slow log centralization ttl. Default 180.
         */
        readonly polardbSlowTtl?: number | ros.IResolvable;
        /**
         * @Property ossAccessTiEnabled: Threat Intelligence of oss.
         */
        readonly ossAccessTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbPerfCollectionPolicy: POLARDB perf collection policy.
         */
        readonly polardbPerfCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property actiontrailOpenapiPolicySetting: Actiontrail openapi policy setting.
         */
        readonly actiontrailOpenapiPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property apigatewayTiEnabled: Threat Intelligence of Apigateway.
         */
        readonly apigatewayTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property bastionAuditPolicySetting: Bastion audit policy setting.
         */
        readonly bastionAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property slbAccessPolicySetting: SLB audit policy setting.
         */
        readonly slbAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property rdsTiEnabled: Threat Intelligence of rds.
         */
        readonly rdsTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property dnsSyncEnabled: Specifies whether to synchronize DNS intranet logs to the central project. Default true.
         */
        readonly dnsSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property apigatewayAccessCollectionPolicy: Apigateway audit collection policy
         */
        readonly apigatewayAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property cloudfirewallTtl: Cloud firewall log centralized ttl. Default 180.
         */
        readonly cloudfirewallTtl?: number | ros.IResolvable;
        /**
         * @Property polardbAuditPolicySetting: POLARDB audit policy setting.
         */
        readonly polardbAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property k8SAuditPolicySetting: K8s audit policy setting.
         */
        readonly k8SAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDashboard`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
 */
export interface RosDashboardProps {
    /**
     * @Property charts: Chart list.
     */
    readonly charts: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * @Property dashboardName: Dashboard name.
     */
    readonly dashboardName: string | ros.IResolvable;
    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property description: Dashboard description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property displayName: Dashboard display name.
     */
    readonly displayName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Dashboard`, which is used to create a dashboard.
 * @Note This class does not contain additional functions, so it is recommended to use the `Dashboard` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
 */
export declare class RosDashboard extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Dashboard";
    /**
     * @Attribute DashboardName: Dashboard name.
     */
    readonly attrDashboardName: ros.IResolvable;
    /**
     * @Attribute DisplayName: Display name.
     */
    readonly attrDisplayName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property charts: Chart list.
     */
    charts: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * @Property dashboardName: Dashboard name.
     */
    dashboardName: string | ros.IResolvable;
    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property description: Dashboard description.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property displayName: Dashboard display name.
     */
    displayName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDashboardProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosEtl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
 */
export interface RosEtlProps {
    /**
     * @Property configuration: The configuration of ETL task
     */
    readonly configuration: RosEtl.ConfigurationProperty | ros.IResolvable;
    /**
     * @Property displayName: ETL display name
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * @Property name: ETL name
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property projectName: Project name
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property schedule: Task scheduling strategy
     */
    readonly schedule: RosEtl.ScheduleProperty | ros.IResolvable;
    /**
     * @Property description: ETL description message.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Etl`, which is used to create a data transformation task.
 * @Note This class does not contain additional functions, so it is recommended to use the `Etl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
 */
export declare class RosEtl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Etl";
    /**
     * @Attribute Name: ETL name.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property configuration: The configuration of ETL task
     */
    configuration: RosEtl.ConfigurationProperty | ros.IResolvable;
    /**
     * @Property displayName: ETL display name
     */
    displayName: string | ros.IResolvable;
    /**
     * @Property name: ETL name
     */
    name: string | ros.IResolvable;
    /**
     * @Property projectName: Project name
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property schedule: Task scheduling strategy
     */
    schedule: RosEtl.ScheduleProperty | ros.IResolvable;
    /**
     * @Property description: ETL description message.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEtlProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEtl {
    /**
     * @stability external
     */
    interface ConfigurationProperty {
        /**
         * @Property script: Processing operation grammar.
         */
        readonly script: string | ros.IResolvable;
        /**
         * @Property sinks: target logstore configuration for delivery after data processing.
         */
        readonly sinks: Array<RosEtl.SinksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property parameters: Advanced parameter configuration of processing operations.
         */
        readonly parameters?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property toTime: Deadline of processing job, the default value is None
         */
        readonly toTime?: number | ros.IResolvable;
        /**
         * @Property version: The script version.
         */
        readonly version?: number | ros.IResolvable;
        /**
         * @Property logstore: The source logstore of the processing job.
         */
        readonly logstore: string | ros.IResolvable;
        /**
         * @Property fromTime: The start time of the processing job, the default starts from the current time.
         */
        readonly fromTime?: number | ros.IResolvable;
        /**
         * @Property roleArn: Sts role info under delivery target logstore.
     *
         */
        readonly roleArn?: string | ros.IResolvable;
    }
}
export declare namespace RosEtl {
    /**
     * @stability external
     */
    interface ScheduleProperty {
        /**
         * @Property type: The type of task scheduling strategies, value: Resident
         */
        readonly type: string | ros.IResolvable;
    }
}
export declare namespace RosEtl {
    /**
     * @stability external
     */
    interface SinksProperty {
        /**
         * @Property project: The project where the target logstore is delivered.
         */
        readonly project: string | ros.IResolvable;
        /**
         * @Property type: ETL sinks type, the default value is AliyunLOG.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property endpoint: Delivery target logstore region.
         */
        readonly endpoint?: string | ros.IResolvable;
        /**
         * @Property logstore: Delivery target logstore.
         */
        readonly logstore: string | ros.IResolvable;
        /**
         * @Property roleArn: Sts role info under delivery target logstore.
     *
         */
        readonly roleArn?: string | ros.IResolvable;
        /**
         * @Property name: Delivery target name.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosIndex`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Index`, which is used to create an index for a specified Logstore.
 * @Note This class does not contain additional functions, so it is recommended to use the `Index` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
 */
export declare class RosIndex extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Index";
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
         * @Property delimiter: Delimiter. Default to (( , '";=()[]{}?@&<>\/:\n\t\r )).
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
         * @Property delimiter: Delimiter. It takes effect when Type is text or json. Default to (( , '";=()[]{}?@&<>\/:\n\t\r )).
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
 * Properties for defining a `RosLogstore`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore
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
     * @Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS\/Android\/APP access information.
     * Default to false.
     */
    readonly enableTracking?: boolean | ros.IResolvable;
    /**
     * @Property encryptConf: Data encryption config
     */
    readonly encryptConf?: RosLogstore.EncryptConfProperty | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Logstore`, which is used to create a Logstore in a Log Service project.
 * @Note This class does not contain additional functions, so it is recommended to use the `Logstore` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore
 */
export declare class RosLogstore extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Logstore";
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
     * @Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS\/Android\/APP access information.
     * Default to false.
     */
    enableTracking: boolean | ros.IResolvable | undefined;
    /**
     * @Property encryptConf: Data encryption config
     */
    encryptConf: RosLogstore.EncryptConfProperty | ros.IResolvable | undefined;
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
export declare namespace RosLogstore {
    /**
     * @stability external
     */
    interface EncryptConfProperty {
        /**
         * @Property encryptType: The encryption algorithm. The encrypt_type
     * parameter can be set to only default or m4.
         */
        readonly encryptType: string | ros.IResolvable;
        /**
         * @Property enable: Specifies whether data encryption is enabled.
         */
        readonly enable: boolean | ros.IResolvable;
        /**
         * @Property userCmkInfo: If this parameter is specified, the BYOK key is used.
     * Otherwise, the service key is used.
         */
        readonly userCmkInfo?: RosLogstore.UserCmkInfoProperty | ros.IResolvable;
    }
}
export declare namespace RosLogstore {
    /**
     * @stability external
     */
    interface UserCmkInfoProperty {
        /**
         * @Property cmkKeyId: The ID of the CMK to which the BYOK key belongs,
     * for example, f5136b95-2420-ab31-xxxxxxxxx.
         */
        readonly cmkKeyId: string | ros.IResolvable;
        /**
         * @Property regionId: The ID of the region where the CMK resides.
         */
        readonly regionId: string | ros.IResolvable;
        /**
         * @Property arn: The ARN of the RAM role. For more information
     * about how to obtain the ARN of a RAM role,
     * see Ship log data from Log Service to OSS.
         */
        readonly arn: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosLogtailConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig
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
     *         "logPath": "\/var\/log\/test",
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::LogtailConfig`, which is used to configure Logtail properties for data collection.
 * @Note This class does not contain additional functions, so it is recommended to use the `LogtailConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig
 */
export declare class RosLogtailConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::LogtailConfig";
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
     *         "logPath": "\/var\/log\/test",
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
 * Properties for defining a `RosMachineGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::MachineGroup`, which is used to create a machine group. Log Service manages all the ECS instances whose logs need to be collected using the Logtail client in the form of machine groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `MachineGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
 */
export declare class RosMachineGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::MachineGroup";
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
 * Properties for defining a `RosMetricStore`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore
 */
export interface RosMetricStoreProps {
    /**
     * @Property logstoreName: Metric store name:
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
     * @Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    readonly preserveStorage?: boolean | ros.IResolvable;
    /**
     * @Property shardCount: The number of Shards.
     * Allowed Values: 1-10, default to 2.
     */
    readonly shardCount?: number | ros.IResolvable;
    /**
     * @Property ttl: The lifecycle of log in the metrice store in days.
     * Allowed Values: 1-3000, default to 30.
     */
    readonly ttl?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::MetricStore`, which is used to create a Logstore.
 * @Note This class does not contain additional functions, so it is recommended to use the `MetricStore` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore
 */
export declare class RosMetricStore extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::MetricStore";
    /**
     * @Attribute LogstoreName: Metric store name.
     */
    readonly attrLogstoreName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property logstoreName: Metric store name:
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
     * @Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    preserveStorage: boolean | ros.IResolvable | undefined;
    /**
     * @Property shardCount: The number of Shards.
     * Allowed Values: 1-10, default to 2.
     */
    shardCount: number | ros.IResolvable | undefined;
    /**
     * @Property ttl: The lifecycle of log in the metrice store in days.
     * Allowed Values: 1-3000, default to 30.
     */
    ttl: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMetricStoreProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Project`, which is used to create a Log Service project.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Project";
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
 * Properties for defining a `RosSavedsearch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Savedsearch`, which is used to save search results as a saved search.
 * @Note This class does not contain additional functions, so it is recommended to use the `Savedsearch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
 */
export declare class RosSavedsearch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Savedsearch";
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
/**
 * Properties for defining a `RosServiceLog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
 */
export interface RosServiceLogProps {
    /**
     * @Property logStorageLocation: The location of the service log.
     */
    readonly logStorageLocation: string | ros.IResolvable;
    /**
     * @Property projectName: The name of the project that needs to be activated. If it has been activated, it will be reactivated again.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property serviceLogTypes: Types of service log that needs to be activated.
     */
    readonly serviceLogTypes: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::ServiceLog`, which is used to enable the service log feature.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceLog` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
 */
export declare class RosServiceLog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::ServiceLog";
    /**
     * @Attribute ProjectName: The name of the project that needs to be activated.
     */
    readonly attrProjectName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property logStorageLocation: The location of the service log.
     */
    logStorageLocation: string | ros.IResolvable;
    /**
     * @Property projectName: The name of the project that needs to be activated. If it has been activated, it will be reactivated again.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property serviceLogTypes: Types of service log that needs to be activated.
     */
    serviceLogTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceLogProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
