import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAddonRelease`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
 */
export interface RosAddonReleaseProps {
    /**
     * @Property addonName: The name of the add-on.
     */
    readonly addonName: string | ros.IResolvable;
    /**
     * @Property addonVersion: The version of the add-on.
     */
    readonly addonVersion: string | ros.IResolvable;
    /**
     * @Property policyId: The ID of the integration policy.
     */
    readonly policyId: string | ros.IResolvable;
    /**
     * @Property entityRules: Entity discovery rules model.
     */
    readonly entityRules?: RosAddonRelease.EntityRulesProperty | ros.IResolvable;
    /**
     * @Property envType: The environment type.
     */
    readonly envType?: string | ros.IResolvable;
    /**
     * @Property lang: The language of the add-on.
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * @Property parentAddonReleaseId: The ID of the parent add-on release.
     */
    readonly parentAddonReleaseId?: string | ros.IResolvable;
    /**
     * @Property releaseName: The name of the add-on release.
     */
    readonly releaseName?: string | ros.IResolvable;
    /**
     * @Property values: The values of the add-on release.
     */
    readonly values?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property workspace: The workspace of the add-on release.
     */
    readonly workspace?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::AddonRelease`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddonRelease` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
 */
export declare class RosAddonRelease extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::AddonRelease";
    /**
     * @Attribute ReleaseName: The name of the add-on release.
     */
    readonly attrReleaseName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addonName: The name of the add-on.
     */
    addonName: string | ros.IResolvable;
    /**
     * @Property addonVersion: The version of the add-on.
     */
    addonVersion: string | ros.IResolvable;
    /**
     * @Property policyId: The ID of the integration policy.
     */
    policyId: string | ros.IResolvable;
    /**
     * @Property entityRules: Entity discovery rules model.
     */
    entityRules: RosAddonRelease.EntityRulesProperty | ros.IResolvable | undefined;
    /**
     * @Property envType: The environment type.
     */
    envType: string | ros.IResolvable | undefined;
    /**
     * @Property lang: The language of the add-on.
     */
    lang: string | ros.IResolvable | undefined;
    /**
     * @Property parentAddonReleaseId: The ID of the parent add-on release.
     */
    parentAddonReleaseId: string | ros.IResolvable | undefined;
    /**
     * @Property releaseName: The name of the add-on release.
     */
    releaseName: string | ros.IResolvable | undefined;
    /**
     * @Property values: The values of the add-on release.
     */
    values: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property workspace: The workspace of the add-on release.
     */
    workspace: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddonReleaseProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAddonRelease {
    /**
     * @stability external
     */
    interface AnnotationsProperty {
        /**
         * @Property op: Operation.
         */
        readonly op: string | ros.IResolvable;
        /**
         * @Property tagKey: The key of the annotation.
         */
        readonly tagKey: string | ros.IResolvable;
        /**
         * @Property tagValues: The value sets of the annotation.
         */
        readonly tagValues: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosAddonRelease {
    /**
     * @stability external
     */
    interface EntityRulesProperty {
        /**
         * @Property fieldRules: Attribute matching rules.
         */
        readonly fieldRules?: Array<RosAddonRelease.FieldRulesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property entityTypes: Entity type sets.
         */
        readonly entityTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property annotations: Annotation matching sets.
         */
        readonly annotations?: Array<RosAddonRelease.AnnotationsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resourceGroupId: Resource group ID.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property regionIds: Region ID sets.
         */
        readonly regionIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ipMatchRule: IP matching rule sets.
         */
        readonly ipMatchRule?: Array<RosAddonRelease.IpMatchRuleProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property labels: Label matching sets.
         */
        readonly labels?: Array<RosAddonRelease.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceIds: Instance ID sets.
         */
        readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Discover services through tags.
         */
        readonly tags?: RosAddonRelease.TagsProperty[];
    }
}
export declare namespace RosAddonRelease {
    /**
     * @stability external
     */
    interface FieldRulesProperty {
        /**
         * @Property op: Operation.
         */
        readonly op: string | ros.IResolvable;
        /**
         * @Property fieldValues: The value sets of the attribute.
         */
        readonly fieldValues: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property fieldKey: The key of the attribute.
         */
        readonly fieldKey: string | ros.IResolvable;
    }
}
export declare namespace RosAddonRelease {
    /**
     * @stability external
     */
    interface IpMatchRuleProperty {
        /**
         * @Property ipFieldKey: The key of the IP field.
         */
        readonly ipFieldKey?: string | ros.IResolvable;
        /**
         * @Property ipCidr: The CIDR of the IP.
         */
        readonly ipCidr?: string | ros.IResolvable;
    }
}
export declare namespace RosAddonRelease {
    /**
     * @stability external
     */
    interface LabelsProperty {
        /**
         * @Property op: Operation.
         */
        readonly op: string | ros.IResolvable;
        /**
         * @Property tagKey: The key of the label.
         */
        readonly tagKey: string | ros.IResolvable;
        /**
         * @Property tagValues: The value sets of the label.
         */
        readonly tagValues: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosAddonRelease {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property op: Operation.
         */
        readonly op: string | ros.IResolvable;
        /**
         * @Property tagKey: The key of the tag.
         */
        readonly tagKey: string | ros.IResolvable;
        /**
         * @Property tagValues: The value sets of the tag.
         */
        readonly tagValues: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosAggTaskGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-aggtaskgroup
 */
export interface RosAggTaskGroupProps {
    /**
     * @Property aggTaskGroupConfig: The config of the agg task group. Only "RecordingRuleYaml" format is supported, which must conform to the RecordingRule format of the open source Prometheus.
     */
    readonly aggTaskGroupConfig: string | ros.IResolvable;
    /**
     * @Property aggTaskGroupName: The name of the agg task group.
     */
    readonly aggTaskGroupName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the source Prometheus instance the agg task group reads data from.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property targetPrometheusId: The ID of the target Prometheus instance of the agg task group.
     */
    readonly targetPrometheusId: string | ros.IResolvable;
    /**
     * @Property aggTaskGroupConfigType: The config type of the agg task group. Default: "RecordingRuleYaml".
     */
    readonly aggTaskGroupConfigType?: string | ros.IResolvable;
    /**
     * @Property cronExpr: The cron expression used when ScheduleMode is "Cron". For example, "0\/1 * * * *" means scheduling every 1 minute starting from minute 0.
     */
    readonly cronExpr?: string | ros.IResolvable;
    /**
     * @Property delay: The fixed delay of the schedule, in seconds. Default: 30.
     */
    readonly delay?: number | ros.IResolvable;
    /**
     * @Property description: The description of the agg task group.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property fromTime: The second-level timestamp corresponding to the schedule start time.
     */
    readonly fromTime?: number | ros.IResolvable;
    /**
     * @Property maxRetries: The maximum number of retries for executing the agg task. Default: 20.
     */
    readonly maxRetries?: number | ros.IResolvable;
    /**
     * @Property maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds. Default: 600.
     */
    readonly maxRunTimeInSeconds?: number | ros.IResolvable;
    /**
     * @Property overrideIfExists: Whether to override and update an existing agg task group with the same name when creating. Create-only, cannot be updated.
     */
    readonly overrideIfExists?: boolean | ros.IResolvable;
    /**
     * @Property precheckString: The precheck config. Not configured by default.
     */
    readonly precheckString?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property scheduleMode: The schedule mode, "Cron" or "FixedRate". Default: "FixedRate".
     */
    readonly scheduleMode?: string | ros.IResolvable;
    /**
     * @Property scheduleTimeExpr: The schedule time expression, "@s" or "@m" is recommended, indicating the rounding granularity of the schedule time window. Default: "@m".
     */
    readonly scheduleTimeExpr?: string | ros.IResolvable;
    /**
     * @Property status: The status of the agg task group, "Running" or "Stopped". Default: Running.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property tags: The tags of the agg task group.
     */
    readonly tags?: RosAggTaskGroup.TagsProperty[];
    /**
     * @Property toTime: The second-level timestamp corresponding to the schedule end time. 0 means the schedule never stops.
     */
    readonly toTime?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::AggTaskGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AggTaskGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-aggtaskgroup
 */
export declare class RosAggTaskGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::AggTaskGroup";
    /**
     * @Attribute AggTaskGroupConfigHash: The config hash of the agg task group.
     */
    readonly attrAggTaskGroupConfigHash: ros.IResolvable;
    /**
     * @Attribute AggTaskGroupId: The ID of the agg task group.
     */
    readonly attrAggTaskGroupId: ros.IResolvable;
    /**
     * @Attribute AggTaskGroupName: The name of the agg task group.
     */
    readonly attrAggTaskGroupName: ros.IResolvable;
    /**
     * @Attribute SourcePrometheusId: The ID of the source Prometheus instance of the agg task group.
     */
    readonly attrSourcePrometheusId: ros.IResolvable;
    /**
     * @Attribute Status: The current status of the agg task group.
     */
    readonly attrStatus: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aggTaskGroupConfig: The config of the agg task group. Only "RecordingRuleYaml" format is supported, which must conform to the RecordingRule format of the open source Prometheus.
     */
    aggTaskGroupConfig: string | ros.IResolvable;
    /**
     * @Property aggTaskGroupName: The name of the agg task group.
     */
    aggTaskGroupName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the source Prometheus instance the agg task group reads data from.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property targetPrometheusId: The ID of the target Prometheus instance of the agg task group.
     */
    targetPrometheusId: string | ros.IResolvable;
    /**
     * @Property aggTaskGroupConfigType: The config type of the agg task group. Default: "RecordingRuleYaml".
     */
    aggTaskGroupConfigType: string | ros.IResolvable | undefined;
    /**
     * @Property cronExpr: The cron expression used when ScheduleMode is "Cron". For example, "0\/1 * * * *" means scheduling every 1 minute starting from minute 0.
     */
    cronExpr: string | ros.IResolvable | undefined;
    /**
     * @Property delay: The fixed delay of the schedule, in seconds. Default: 30.
     */
    delay: number | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the agg task group.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property fromTime: The second-level timestamp corresponding to the schedule start time.
     */
    fromTime: number | ros.IResolvable | undefined;
    /**
     * @Property maxRetries: The maximum number of retries for executing the agg task. Default: 20.
     */
    maxRetries: number | ros.IResolvable | undefined;
    /**
     * @Property maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds. Default: 600.
     */
    maxRunTimeInSeconds: number | ros.IResolvable | undefined;
    /**
     * @Property overrideIfExists: Whether to override and update an existing agg task group with the same name when creating. Create-only, cannot be updated.
     */
    overrideIfExists: boolean | ros.IResolvable | undefined;
    /**
     * @Property precheckString: The precheck config. Not configured by default.
     */
    precheckString: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property scheduleMode: The schedule mode, "Cron" or "FixedRate". Default: "FixedRate".
     */
    scheduleMode: string | ros.IResolvable | undefined;
    /**
     * @Property scheduleTimeExpr: The schedule time expression, "@s" or "@m" is recommended, indicating the rounding granularity of the schedule time window. Default: "@m".
     */
    scheduleTimeExpr: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the agg task group, "Running" or "Stopped". Default: Running.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property tags: The tags of the agg task group.
     */
    tags: RosAggTaskGroup.TagsProperty[] | undefined;
    /**
     * @Property toTime: The second-level timestamp corresponding to the schedule end time. 0 means the schedule never stops.
     */
    toTime: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAggTaskGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAggTaskGroup {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the tag.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosIntegrationPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
 */
export interface RosIntegrationPolicyProps {
    /**
     * @Property policyType: The type of the integration policy.
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * @Property entityGroup: The entity group information.
     */
    readonly entityGroup?: RosIntegrationPolicy.EntityGroupProperty | ros.IResolvable;
    /**
     * @Property policyName: The name of the integration policy.
     */
    readonly policyName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to integration policy. Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosIntegrationPolicy.TagsProperty[];
    /**
     * @Property workspace: The workspace of the integration policy.
     */
    readonly workspace?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::IntegrationPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `IntegrationPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
 */
export declare class RosIntegrationPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::IntegrationPolicy";
    /**
     * @Attribute PolicyId: The ID of the integration policy.
     */
    readonly attrPolicyId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property policyType: The type of the integration policy.
     */
    policyType: string | ros.IResolvable;
    /**
     * @Property entityGroup: The entity group information.
     */
    entityGroup: RosIntegrationPolicy.EntityGroupProperty | ros.IResolvable | undefined;
    /**
     * @Property policyName: The name of the integration policy.
     */
    policyName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to integration policy. Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosIntegrationPolicy.TagsProperty[] | undefined;
    /**
     * @Property workspace: The workspace of the integration policy.
     */
    workspace: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIntegrationPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosIntegrationPolicy {
    /**
     * @stability external
     */
    interface EntityGroupProperty {
        /**
         * @Property entityUserId: The entity user ID.
         */
        readonly entityUserId?: string | ros.IResolvable;
        /**
         * @Property vpcId: The VPC ID.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property clusterId: The cluster ID.
         */
        readonly clusterId?: string | ros.IResolvable;
        /**
         * @Property clusterEntityType: The cluster entity type.
         */
        readonly clusterEntityType?: string | ros.IResolvable;
        /**
         * @Property entityGroupId: The entity group ID.
         */
        readonly entityGroupId?: string | ros.IResolvable;
        /**
         * @Property clusterNamespace: The cluster namespace.
         */
        readonly clusterNamespace?: string | ros.IResolvable;
        /**
         * @Property disablePolicyShare: Whether to disable policy sharing.
         */
        readonly disablePolicyShare?: boolean | ros.IResolvable;
    }
}
export declare namespace RosIntegrationPolicy {
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
 * Properties for defining a `RosPrometheusInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
 */
export interface RosPrometheusInstanceProps {
    /**
     * @Property prometheusInstanceName: The name of the Prometheus instance.
     */
    readonly prometheusInstanceName: string | ros.IResolvable;
    /**
     * @Property archiveDuration: The archive duration of the Prometheus instance.
     */
    readonly archiveDuration?: number | ros.IResolvable;
    /**
     * @Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
     */
    readonly authFreeReadPolicy?: string | ros.IResolvable;
    /**
     * @Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
     */
    readonly authFreeWritePolicy?: string | ros.IResolvable;
    /**
     * @Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
     */
    readonly basicMetricQueryLimit?: boolean | ros.IResolvable;
    /**
     * @Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
     */
    readonly enableAuthFreeRead?: boolean | ros.IResolvable;
    /**
     * @Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
     */
    readonly enableAuthFreeWrite?: boolean | ros.IResolvable;
    /**
     * @Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
     */
    readonly enableAuthToken?: boolean | ros.IResolvable;
    /**
     * @Property paymentType: The payment type of the Prometheus instance.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property status: The status of the Prometheus instance.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property storageDuration: The storage duration of the Prometheus instance.
     */
    readonly storageDuration?: number | ros.IResolvable;
    /**
     * @Property workspace: The workspace of the Prometheus instance.
     */
    readonly workspace?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::PrometheusInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrometheusInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
 */
export declare class RosPrometheusInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::PrometheusInstance";
    /**
     * @Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.
     */
    readonly attrHttpApiInterUrl: ros.IResolvable;
    /**
     * @Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.
     */
    readonly attrHttpApiIntraUrl: ros.IResolvable;
    /**
     * @Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    readonly attrPrometheusInstanceId: ros.IResolvable;
    /**
     * @Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.
     */
    readonly attrPushGatewayInterUrl: ros.IResolvable;
    /**
     * @Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.
     */
    readonly attrPushGatewayIntraUrl: ros.IResolvable;
    /**
     * @Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.
     */
    readonly attrRemoteReadInterUrl: ros.IResolvable;
    /**
     * @Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.
     */
    readonly attrRemoteReadIntraUrl: ros.IResolvable;
    /**
     * @Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.
     */
    readonly attrRemoteWriteInterUrl: ros.IResolvable;
    /**
     * @Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.
     */
    readonly attrRemoteWriteIntraUrl: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property prometheusInstanceName: The name of the Prometheus instance.
     */
    prometheusInstanceName: string | ros.IResolvable;
    /**
     * @Property archiveDuration: The archive duration of the Prometheus instance.
     */
    archiveDuration: number | ros.IResolvable | undefined;
    /**
     * @Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
     */
    authFreeReadPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
     */
    authFreeWritePolicy: string | ros.IResolvable | undefined;
    /**
     * @Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
     */
    basicMetricQueryLimit: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
     */
    enableAuthFreeRead: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
     */
    enableAuthFreeWrite: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
     */
    enableAuthToken: boolean | ros.IResolvable | undefined;
    /**
     * @Property paymentType: The payment type of the Prometheus instance.
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the Prometheus instance.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property storageDuration: The storage duration of the Prometheus instance.
     */
    storageDuration: number | ros.IResolvable | undefined;
    /**
     * @Property workspace: The workspace of the Prometheus instance.
     */
    workspace: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheusInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosServiceObservability`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
 */
export interface RosServiceObservabilityProps {
    /**
     * @Property type: The type of the service observability.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property workspace: The workspace of the service observability.
     */
    readonly workspace: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::ServiceObservability`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceObservability` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
 */
export declare class RosServiceObservability extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::ServiceObservability";
    /**
     * @Attribute Workspace: The workspace of the service observability.
     */
    readonly attrWorkspace: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property type: The type of the service observability.
     */
    type: string | ros.IResolvable;
    /**
     * @Property workspace: The workspace of the service observability.
     */
    workspace: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceObservabilityProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosWorkspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-workspace
 */
export interface RosWorkspaceProps {
    /**
     * @Property slsProject: The name of the Log Service (SLS) project.
     */
    readonly slsProject: string | ros.IResolvable;
    /**
     * @Property workspaceName: The name of the workspace.
     */
    readonly workspaceName: string | ros.IResolvable;
    /**
     * @Property description: The description of the workspace.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property displayName: The display name of the workspace.
     */
    readonly displayName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::Workspace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Workspace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-workspace
 */
export declare class RosWorkspace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::Workspace";
    /**
     * @Attribute WorkspaceName: The name of the workspace.
     */
    readonly attrWorkspaceName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property slsProject: The name of the Log Service (SLS) project.
     */
    slsProject: string | ros.IResolvable;
    /**
     * @Property workspaceName: The name of the workspace.
     */
    workspaceName: string | ros.IResolvable;
    /**
     * @Property description: The description of the workspace.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property displayName: The display name of the workspace.
     */
    displayName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspaceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
