import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAddonRelease`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
 */
export interface RosAddonReleaseProps {
    /**
     * @Property addonVersion: The version of the add-on.
     */
    readonly addonVersion: string | ros.IResolvable;
    /**
     * @Property environmentId: The id of the environment.
     */
    readonly environmentId: string | ros.IResolvable;
    /**
     * @Property name: The name of the add-on.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
     */
    readonly releaseName?: string | ros.IResolvable;
    /**
     * @Property values: The metadata.
     */
    readonly values?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::AddonRelease`, which is used to install an add-on release.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddonRelease` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
 */
export declare class RosAddonRelease extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AddonRelease";
    /**
     * @Attribute Config: AddonRelease configuration information.
     */
    readonly attrConfig: ros.IResolvable;
    /**
     * @Attribute EnvironmentId: The environment ID.
     */
    readonly attrEnvironmentId: ros.IResolvable;
    /**
     * @Attribute Release: Release information.
     */
    readonly attrRelease: ros.IResolvable;
    /**
     * @Attribute ReleaseName: The name of the add-on.
     */
    readonly attrReleaseName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addonVersion: The version of the add-on.
     */
    addonVersion: string | ros.IResolvable;
    /**
     * @Property environmentId: The id of the environment.
     */
    environmentId: string | ros.IResolvable;
    /**
     * @Property name: The name of the add-on.
     */
    name: string | ros.IResolvable;
    /**
     * @Property releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
     */
    releaseName: string | ros.IResolvable | undefined;
    /**
     * @Property values: The metadata.
     */
    values: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosAlertContact`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
 */
export interface RosAlertContactProps {
    /**
     * @Property contactName: The name of the alert contact that you want to create.
     */
    readonly contactName: string | ros.IResolvable;
    /**
     * @Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
     */
    readonly dingRobotWebhookUrl?: string | ros.IResolvable;
    /**
     * @Property email: The email address of the contact.
     */
    readonly email?: string | ros.IResolvable;
    /**
     * @Property phoneNum: The phone number of the contact.
     */
    readonly phoneNum?: string | ros.IResolvable;
    /**
     * @Property proxyUserId: Internal parameters
     */
    readonly proxyUserId?: string | ros.IResolvable;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    readonly regionId?: string | ros.IResolvable;
    /**
     * @Property systemNoc: Specifies whether to receive system alerts.
     */
    readonly systemNoc?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::AlertContact`, which is used to create an alert contact.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlertContact` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
 */
export declare class RosAlertContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContact";
    /**
     * @Attribute ContactId: The ID of the alert contact that you created.
     */
    readonly attrContactId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property contactName: The name of the alert contact that you want to create.
     */
    contactName: string | ros.IResolvable;
    /**
     * @Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
     */
    dingRobotWebhookUrl: string | ros.IResolvable | undefined;
    /**
     * @Property email: The email address of the contact.
     */
    email: string | ros.IResolvable | undefined;
    /**
     * @Property phoneNum: The phone number of the contact.
     */
    phoneNum: string | ros.IResolvable | undefined;
    /**
     * @Property proxyUserId: Internal parameters
     */
    proxyUserId: string | ros.IResolvable | undefined;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    regionId: string | ros.IResolvable | undefined;
    /**
     * @Property systemNoc: Specifies whether to receive system alerts.
     */
    systemNoc: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertContactProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAlertContactGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
 */
export interface RosAlertContactGroupProps {
    /**
     * @Property contactGroupName: The name of the alert contact group that you want to create.
     */
    readonly contactGroupName: string | ros.IResolvable;
    /**
     * @Property contactIds: The list of alert contact ID.
     */
    readonly contactIds: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property proxyUserId: Internal parameters
     */
    readonly proxyUserId?: string | ros.IResolvable;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    readonly regionId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::AlertContactGroup`, which is used to create an alert contact group.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlertContactGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
 */
export declare class RosAlertContactGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContactGroup";
    /**
     * @Attribute ContactGroupId: The ID of the alert contact group that you created.
     */
    readonly attrContactGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property contactGroupName: The name of the alert contact group that you want to create.
     */
    contactGroupName: string | ros.IResolvable;
    /**
     * @Property contactIds: The list of alert contact ID.
     */
    contactIds: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property proxyUserId: Internal parameters
     */
    proxyUserId: string | ros.IResolvable | undefined;
    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    regionId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertContactGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosApplyAlertRuleTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
 */
export interface RosApplyAlertRuleTemplateProps {
    /**
     * @Property clusterIds: The IDs list of Prometheus Instances.
     */
    readonly clusterIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property templateIds: The IDs list of Prometheus alert rule templates.
     */
    readonly templateIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property update: Whether to update created alert rules. Default false.
     */
    readonly update?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::ApplyAlertRuleTemplate`, which is used to create an alert rule of Alibaba Cloud Managed Service for Prometheus.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApplyAlertRuleTemplate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
 */
export declare class RosApplyAlertRuleTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::ApplyAlertRuleTemplate";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterIds: The IDs list of Prometheus Instances.
     */
    clusterIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property templateIds: The IDs list of Prometheus alert rule templates.
     */
    templateIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property update: Whether to update created alert rules. Default false.
     */
    update: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplyAlertRuleTemplateProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDeliverTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
 */
export interface RosDeliverTaskProps {
    /**
     * @Property targetList: The list of the target.
     */
    readonly targetList: Array<RosDeliverTask.TargetListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property taskName: The name of the task.
     */
    readonly taskName: string | ros.IResolvable;
    /**
     * @Property dataSourceId: The ID of the data source.
     */
    readonly dataSourceId?: string | ros.IResolvable;
    /**
     * @Property dataSourceName: The name of the data source.
     */
    readonly dataSourceName?: string | ros.IResolvable;
    /**
     * @Property externalLabel: The external label of the task.
     */
    readonly externalLabel?: string | ros.IResolvable;
    /**
     * @Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
     */
    readonly filterList?: string | ros.IResolvable;
    /**
     * @Property filterType: Whether the data filtering adopts the whitelist mechanism. Default value: true.
     */
    readonly filterType?: boolean | ros.IResolvable;
    /**
     * @Property taskDescription: The description of the task.
     */
    readonly taskDescription?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::DeliverTask`, which is used to create a delivery task.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeliverTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
 */
export declare class RosDeliverTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::DeliverTask";
    /**
     * @Attribute TaskId: The ID of the task.
     */
    readonly attrTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property targetList: The list of the target.
     */
    targetList: Array<RosDeliverTask.TargetListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property taskName: The name of the task.
     */
    taskName: string | ros.IResolvable;
    /**
     * @Property dataSourceId: The ID of the data source.
     */
    dataSourceId: string | ros.IResolvable | undefined;
    /**
     * @Property dataSourceName: The name of the data source.
     */
    dataSourceName: string | ros.IResolvable | undefined;
    /**
     * @Property externalLabel: The external label of the task.
     */
    externalLabel: string | ros.IResolvable | undefined;
    /**
     * @Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
     */
    filterList: string | ros.IResolvable | undefined;
    /**
     * @Property filterType: Whether the data filtering adopts the whitelist mechanism. Default value: true.
     */
    filterType: boolean | ros.IResolvable | undefined;
    /**
     * @Property taskDescription: The description of the task.
     */
    taskDescription: string | ros.IResolvable | undefined;
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
export declare namespace RosDeliverTask {
    /**
     * @stability external
     */
    interface TargetListProperty {
        /**
         * @Property targetParam: The parameter of the target.
         */
        readonly targetParam?: string | ros.IResolvable;
        /**
         * @Property targetType: The type of the target.
         */
        readonly targetType: string | ros.IResolvable;
        /**
         * @Property faultTolerantPolicy: The fault tolerant policy of the target. Valid values:
     * - ALL (default): Exception tolerance is allowed. When an exception occurs, the execution will not be blocked, and the message will be delivered to the dead message queue or dropped directly according to the configuration after exceeding the retry policy.
     * - NONE: Fault tolerance is not allowed and execution is blocked when an exception occurs and exceeds the retry policy configuration.
         */
        readonly faultTolerantPolicy?: string | ros.IResolvable;
        /**
         * @Property targetName: The name of the target.
         */
        readonly targetName?: string | ros.IResolvable;
        /**
         * @Property retryPolicy: The retry policy of the target. Valid values:
     * - BACKOFF_RETRY: retry three times, with a random interval between 10 and 20 seconds
     * - EXPONENTIAL_DECAY_RETRY (default): retry 176 times, each retry interval exponentially increased to 512 seconds, total retry time is 1 day; The interval for each retry is: 1,2,4,8,... 512 seconds.
         */
        readonly retryPolicy?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosEnvironment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
 */
export interface RosEnvironmentProps {
    /**
     * @Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
     */
    readonly bindResourceId: string | ros.IResolvable;
    /**
     * @Property environmentName: The name of the environment.
     */
    readonly environmentName: string | ros.IResolvable;
    /**
     * @Property environmentSubType: The subtype of the environment. Valid values:
     * One: CS type environment
     * ACK: CS type environment
     * ECS: ECS type environment
     * Cloud: cloud service
     */
    readonly environmentSubType: string | ros.IResolvable;
    /**
     * @Property environmentType: The type of the environment. Valid values:
     * CS: ACK
     * ECS: ECS
     * Cloud: cloud service
     */
    readonly environmentType: string | ros.IResolvable;
    /**
     * @Property deletePromInstance: Cascade delete Prometheus instance. Default value: true.
     */
    readonly deletePromInstance?: boolean | ros.IResolvable;
    /**
     * @Property feePackage: The payable resource plan. Valid values:
     * If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
     * Otherwise, leave the parameter empty.
     */
    readonly feePackage?: string | ros.IResolvable;
    /**
     * @Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. When passing space, the default share grafana is used.
     */
    readonly grafanaWorkspaceId?: string | ros.IResolvable;
    /**
     * @Property managedType: Specifies whether agents or exporters are managed. Valid values:
     * none: No. By default, no managed agents or exporters are provided for ACK clusters.
     * agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
     * agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
     */
    readonly managedType?: string | ros.IResolvable;
    /**
     * @Property prometheusInstanceId: The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
     */
    readonly prometheusInstanceId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of Environment.
     */
    readonly tags?: RosEnvironment.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::Environment`, which is used to create an environment.
 * @Note This class does not contain additional functions, so it is recommended to use the `Environment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
 */
export declare class RosEnvironment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::Environment";
    /**
     * @Attribute EnvironmentId: The id of the environment.
     */
    readonly attrEnvironmentId: ros.IResolvable;
    /**
     * @Attribute EnvironmentName: The name of the environment.
     */
    readonly attrEnvironmentName: ros.IResolvable;
    /**
     * @Attribute EnvironmentSubType: The subtype of the environment.
     */
    readonly attrEnvironmentSubType: ros.IResolvable;
    /**
     * @Attribute EnvironmentType: The type of the environment.
     */
    readonly attrEnvironmentType: ros.IResolvable;
    /**
     * @Attribute FeePackage: The payable resource plan.
     */
    readonly attrFeePackage: ros.IResolvable;
    /**
     * @Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
     */
    readonly attrGrafanaWorkspaceId: ros.IResolvable;
    /**
     * @Attribute ManagedType: Specifies whether agents or exporters are managed.
     */
    readonly attrManagedType: ros.IResolvable;
    /**
     * @Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    readonly attrPrometheusInstanceId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
     */
    bindResourceId: string | ros.IResolvable;
    /**
     * @Property environmentName: The name of the environment.
     */
    environmentName: string | ros.IResolvable;
    /**
     * @Property environmentSubType: The subtype of the environment. Valid values:
     * One: CS type environment
     * ACK: CS type environment
     * ECS: ECS type environment
     * Cloud: cloud service
     */
    environmentSubType: string | ros.IResolvable;
    /**
     * @Property environmentType: The type of the environment. Valid values:
     * CS: ACK
     * ECS: ECS
     * Cloud: cloud service
     */
    environmentType: string | ros.IResolvable;
    /**
     * @Property deletePromInstance: Cascade delete Prometheus instance. Default value: true.
     */
    deletePromInstance: boolean | ros.IResolvable | undefined;
    /**
     * @Property feePackage: The payable resource plan. Valid values:
     * If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
     * Otherwise, leave the parameter empty.
     */
    feePackage: string | ros.IResolvable | undefined;
    /**
     * @Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. When passing space, the default share grafana is used.
     */
    grafanaWorkspaceId: string | ros.IResolvable | undefined;
    /**
     * @Property managedType: Specifies whether agents or exporters are managed. Valid values:
     * none: No. By default, no managed agents or exporters are provided for ACK clusters.
     * agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
     * agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
     */
    managedType: string | ros.IResolvable | undefined;
    /**
     * @Property prometheusInstanceId: The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
     */
    prometheusInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of Environment.
     */
    tags: RosEnvironment.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnvironmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEnvironment {
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
 * Properties for defining a `RosEnvironmentFeature`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
 */
export interface RosEnvironmentFeatureProps {
    /**
     * @Property environmentId: The id of the environment.
     */
    readonly environmentId: string | ros.IResolvable;
    /**
     * @Property featureName: The name of the feature. Valid values:
     * app-agent-pilot
     * metric-agent
     */
    readonly featureName: string | ros.IResolvable;
    /**
     * @Property featureVersion: The version of the feature.
     */
    readonly featureVersion: string | ros.IResolvable;
    /**
     * @Property config: The metadata of the feature.
     */
    readonly config?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::EnvironmentFeature`, which is used to install a feature.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnvironmentFeature` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
 */
export declare class RosEnvironmentFeature extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::EnvironmentFeature";
    /**
     * @Attribute EnvironmentId: The environment ID.
     */
    readonly attrEnvironmentId: ros.IResolvable;
    /**
     * @Attribute Feature: The installation information of the feature.
     */
    readonly attrFeature: ros.IResolvable;
    /**
     * @Attribute FeatureName: The name of the feature.
     */
    readonly attrFeatureName: ros.IResolvable;
    /**
     * @Attribute FeatureStatus: The status of the feature.
     */
    readonly attrFeatureStatus: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property environmentId: The id of the environment.
     */
    environmentId: string | ros.IResolvable;
    /**
     * @Property featureName: The name of the feature. Valid values:
     * app-agent-pilot
     * metric-agent
     */
    featureName: string | ros.IResolvable;
    /**
     * @Property featureVersion: The version of the feature.
     */
    featureVersion: string | ros.IResolvable;
    /**
     * @Property config: The metadata of the feature.
     */
    config: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnvironmentFeatureProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosManagedPrometheus`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
 */
export interface RosManagedPrometheusProps {
    /**
     * @Property clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The security group ID of the cluster.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * @Property vpcId: The vpc ID of the cluster.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vswith ID of the cluster.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * @Property clusterName: The name of the cluster. Required when the ClusterType is ecs.
     */
    readonly clusterName?: string | ros.IResolvable;
    /**
     * @Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
     */
    readonly grafanaInstanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::ManagedPrometheus`, which is used to install a Prometheus instance to monitor a serverless Kubernetes (ASK) cluster or an Elastic Compute Service (ECS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedPrometheus` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
 */
export declare class RosManagedPrometheus extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::ManagedPrometheus";
    /**
     * @Attribute ClusterType: The type of the cluster.
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute VpcId: The vpc ID of the cluster.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
     */
    clusterType: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The security group ID of the cluster.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @Property vpcId: The vpc ID of the cluster.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vswith ID of the cluster.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
     */
    clusterId: string | ros.IResolvable | undefined;
    /**
     * @Property clusterName: The name of the cluster. Required when the ClusterType is ecs.
     */
    clusterName: string | ros.IResolvable | undefined;
    /**
     * @Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
     */
    grafanaInstanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedPrometheusProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPrometheus`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
 */
export interface RosPrometheusProps {
    /**
     * @Property clusterType: Instance type.
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * @Property grafanaInstanceId: Grafana workspace ID.
     */
    readonly grafanaInstanceId: string | ros.IResolvable;
    /**
     * @Property prometheusName: The name of the resource.
     */
    readonly prometheusName: string | ros.IResolvable;
    /**
     * @Property clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    readonly subClustersJson?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags of prometheus.
     */
    readonly tags?: RosPrometheus.TagsProperty[];
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::Prometheus`, which is used to create a Prometheus instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Prometheus` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
 */
export declare class RosPrometheus extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::Prometheus";
    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ClusterType: Instance type.
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute GrafanaInstanceId: Grafana workspace ID.
     */
    readonly attrGrafanaInstanceId: ros.IResolvable;
    /**
     * @Attribute PaymentType: Payment Type.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute PrometheusName: The name of the resource.
     */
    readonly attrPrometheusName: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: The ID of the security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute SubClustersJson: Subcluster information of globalVeiw cluster.
     */
    readonly attrSubClustersJson: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the prometheus.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute UserId: User ID.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC).
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterType: Instance type.
     */
    clusterType: string | ros.IResolvable;
    /**
     * @Property grafanaInstanceId: Grafana workspace ID.
     */
    grafanaInstanceId: string | ros.IResolvable;
    /**
     * @Property prometheusName: The name of the resource.
     */
    prometheusName: string | ros.IResolvable;
    /**
     * @Property clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
     */
    clusterId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    subClustersJson: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of prometheus.
     */
    tags: RosPrometheus.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheusProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPrometheus {
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
 * Properties for defining a `RosRetcodeApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
 */
export interface RosRetcodeAppProps {
    /**
     * @Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
     */
    readonly regionId: string | ros.IResolvable;
    /**
     * @Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    readonly retcodeAppName: string | ros.IResolvable;
    /**
     * @Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    readonly retcodeAppType: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::RetcodeApp`, which is used to create a browser monitoring task.
 * @Note This class does not contain additional functions, so it is recommended to use the `RetcodeApp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
 */
export declare class RosRetcodeApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::RetcodeApp";
    /**
     * @Attribute AppId: The ID of the application for which you created the browser monitoring job.
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute Pid: The PID.
     */
    readonly attrPid: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
     */
    regionId: string | ros.IResolvable;
    /**
     * @Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    retcodeAppName: string | ros.IResolvable;
    /**
     * @Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    retcodeAppType: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRetcodeAppProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosXTraceApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
 */
export interface RosXTraceAppProps {
    /**
     * @Property xTraceAppName: The name of the resource.
     */
    readonly xTraceAppName: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of The tags of the resource..
     */
    readonly tags?: RosXTraceApp.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::XTraceApp`, which is used to create an application monitoring task.
 * @Note This class does not contain additional functions, so it is recommended to use the `XTraceApp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
 */
export declare class RosXTraceApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::XTraceApp";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Pid: the identify of application.
     */
    readonly attrPid: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute XTraceAppName: The name of the resource.
     */
    readonly attrXTraceAppName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property xTraceAppName: The name of the resource.
     */
    xTraceAppName: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of The tags of the resource..
     */
    tags: RosXTraceApp.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosXTraceAppProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosXTraceApp {
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
