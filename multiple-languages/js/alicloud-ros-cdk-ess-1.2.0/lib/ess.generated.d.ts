import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAlarmTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
 */
export interface RosAlarmTaskProps {
    /**
     * @Property alarmAction: Alarm Actions
     */
    readonly alarmAction: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property metricName: Metric Name
     */
    readonly metricName: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property threshold: Threshold
     */
    readonly threshold: number | ros.IResolvable;
    /**
     * @Property comparisonOperator: Comparison Operator
     */
    readonly comparisonOperator?: string | ros.IResolvable;
    /**
     * @Property description: Description
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property dimensions: Dimensions
     */
    readonly dimensions?: Array<RosAlarmTask.DimensionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property evaluationCount: Evaluation Count
     */
    readonly evaluationCount?: number | ros.IResolvable;
    /**
     * @Property groupId: Group Id
     */
    readonly groupId?: number | ros.IResolvable;
    /**
     * @Property metricType: Metric Type
     */
    readonly metricType?: string | ros.IResolvable;
    /**
     * @Property name: Name
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property period: Period
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property statistics: Statistics
     */
    readonly statistics?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::AlarmTask`, which is used to create a metric-based alarm task.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlarmTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
 */
export declare class RosAlarmTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::AlarmTask";
    /**
     * @Attribute AlarmTaskId: The alarm task ID
     */
    readonly attrAlarmTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property alarmAction: Alarm Actions
     */
    alarmAction: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property metricName: Metric Name
     */
    metricName: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property threshold: Threshold
     */
    threshold: number | ros.IResolvable;
    /**
     * @Property comparisonOperator: Comparison Operator
     */
    comparisonOperator: string | ros.IResolvable | undefined;
    /**
     * @Property description: Description
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property dimensions: Dimensions
     */
    dimensions: Array<RosAlarmTask.DimensionsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property evaluationCount: Evaluation Count
     */
    evaluationCount: number | ros.IResolvable | undefined;
    /**
     * @Property groupId: Group Id
     */
    groupId: number | ros.IResolvable | undefined;
    /**
     * @Property metricType: Metric Type
     */
    metricType: string | ros.IResolvable | undefined;
    /**
     * @Property name: Name
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property period: Period
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property statistics: Statistics
     */
    statistics: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlarmTaskProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAlarmTask {
    /**
     * @stability external
     */
    interface DimensionsProperty {
        /**
         * @Property dimensionValue: DimensionValue
         */
        readonly dimensionValue: string | ros.IResolvable;
        /**
         * @Property dimensionKey: DimensionKey
         */
        readonly dimensionKey: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosAlarmTaskEnable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtaskenable
 */
export interface RosAlarmTaskEnableProps {
    /**
     * @Property alarmTaskId: The id of alarm task.
     */
    readonly alarmTaskId: string | ros.IResolvable;
    /**
     * @Property enable: Enable alarm task or not
     */
    readonly enable: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::AlarmTaskEnable`, which is used to start an alarm task. You can call this operation to enable alarm tasks when the task is stopped.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlarmTaskEnable` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtaskenable
 */
export declare class RosAlarmTaskEnable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::AlarmTaskEnable";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property alarmTaskId: The id of alarm task.
     */
    alarmTaskId: string | ros.IResolvable;
    /**
     * @Property enable: Enable alarm task or not
     */
    enable: boolean | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlarmTaskEnableProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosEciScalingConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-eciscalingconfiguration
 */
export interface RosEciScalingConfigurationProps {
    /**
     * @Property containerGroupName: The name of the elastic container instance.
     */
    readonly containerGroupName: string | ros.IResolvable;
    /**
     * @Property scalingConfigurationName: The name of the scaling configuration. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
     * The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
     */
    readonly scalingConfigurationName: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance. Elastic container instances that are associated with the same security group can access each other.
     * If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * @Property acrRegistryInfos:
     */
    readonly acrRegistryInfos?: Array<RosEciScalingConfiguration.AcrRegistryInfosProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property activeDeadlineSeconds: The validity period of the scaling configuration. Unit: seconds.
     */
    readonly activeDeadlineSeconds?: number | ros.IResolvable;
    /**
     * @Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance.
     */
    readonly autoCreateEip?: boolean | ros.IResolvable;
    /**
     * @Property autoMatchImageCache: Specifies whether to automatically match the image cache. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly autoMatchImageCache?: boolean | ros.IResolvable;
    /**
     * @Property containers:
     */
    readonly containers?: Array<RosEciScalingConfiguration.ContainersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property costOptimization: Specifies whether to enable the Cost Optimization feature. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly costOptimization?: boolean | ros.IResolvable;
    /**
     * @Property cpu: The number of vCPUs that you want to allocate to the elastic container instance.
     */
    readonly cpu?: number | ros.IResolvable;
    /**
     * @Property cpuOptionsCore: The number of physical CPU cores. You can specify this parameter for only specific instance types. For more information, see Specify custom CPU options.
     */
    readonly cpuOptionsCore?: number | ros.IResolvable;
    /**
     * @Property cpuOptionsThreadsPerCore: The number of threads per core. You can specify this parameter for only specific instance types. If you set this parameter to 1, Hyper-Threading is disabled. For more information, see Specify custom CPU options.
     */
    readonly cpuOptionsThreadsPerCore?: number | ros.IResolvable;
    /**
     * @Property dataCacheBucket: The bucket that stores data caches.
     */
    readonly dataCacheBucket?: string | ros.IResolvable;
    /**
     * @Property dataCacheBurstingEnabled: Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk used for data caching. Valid values:
     * true
     * false
     * Default value: false.
     * Note
     * For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
     */
    readonly dataCacheBurstingEnabled?: boolean | ros.IResolvable;
    /**
     * @Property dataCachePl: The performance level (PL) of the disk used for data caching. We recommend that you use ESSDs. Valid values if you use ESSDs:
     * PL0: An ESSD can provide up to 10,000 random read\/write IOPS.
     * PL1: An ESSD can provide up to 50,000 random read\/write IOPS.
     * PL2: An ESSD can provide up to 100,000 random read\/write IOPS.
     * PL3: An ESSD can provide up to 1,000,000 random read\/write IOPS.
     * Default value: PL1.
     * Note
     * For more information about ESSDs, see ESSDs.
     */
    readonly dataCachePl?: string | ros.IResolvable;
    /**
     * @Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching. Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, where Baseline IOPS = min{1800 + 50 × Capacity - 50000}.
     * Note
     * For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
     */
    readonly dataCacheProvisionedIops?: number | ros.IResolvable;
    /**
     * @Property dnsConfigNameServers: The IP addresses of the DNS servers.
     */
    readonly dnsConfigNameServers?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dnsConfigOptions:
     */
    readonly dnsConfigOptions?: Array<RosEciScalingConfiguration.DnsConfigOptionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dnsConfigSearches: The search domains of the DNS server.
     */
    readonly dnsConfigSearches?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dnsPolicy: The Domain Name System (DNS) policy. Valid values:
     * None: uses the DNS that is specified by DnsConfig.
     * Default: uses the DNS that is specified for the runtime environment.
     */
    readonly dnsPolicy?: string | ros.IResolvable;
    /**
     * @Property egressBandwidth: The maximum outbound bandwidth. Unit: bytes.
     */
    readonly egressBandwidth?: number | ros.IResolvable;
    /**
     * @Property eipBandwidth: The bandwidth of the EIP. Default value: 5. Unit: Mbit\/s.
     */
    readonly eipBandwidth?: number | ros.IResolvable;
    /**
     * @Property ephemeralStorage: The size of the temporary storage space. By default, an enhanced SSD (ESSD) of the PL1 level is used. Unit: GiB.
     */
    readonly ephemeralStorage?: number | ros.IResolvable;
    /**
     * @Property hostAliases:
     */
    readonly hostAliases?: Array<RosEciScalingConfiguration.HostAliasesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property hostName: The hostname of the elastic container instance.
     */
    readonly hostName?: string | ros.IResolvable;
    /**
     * @Property imageRegistryCredentials:
     */
    readonly imageRegistryCredentials?: Array<RosEciScalingConfiguration.ImageRegistryCredentialsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property imageSnapshotId: The ID of the image cache snapshot.
     */
    readonly imageSnapshotId?: string | ros.IResolvable;
    /**
     * @Property ingressBandwidth: The maximum inbound bandwidth. Unit: bytes.
     */
    readonly ingressBandwidth?: number | ros.IResolvable;
    /**
     * @Property initContainers:
     */
    readonly initContainers?: Array<RosEciScalingConfiguration.InitContainersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceFamilyLevel: The level of the instance family. You can use this parameter to filter instance types that meet the specified criteria. This parameter takes effect only if you set CostOptimization to true. Valid values:
     * EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which CPU utilization is low. For more information, see Shared instance families.
     * EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see Overview of instance families.
     * CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see Overview of burstable instances.
     */
    readonly instanceFamilyLevel?: string | ros.IResolvable;
    /**
     * @Property instanceTypes: The specified ECS instance types. You can specify up to five ECS instance types. For more information, see Specify ECS instance types to create an elastic container instance.
     */
    readonly instanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;
    /**
     * @Property loadBalancerWeight: The weight of the elastic container instance as a backend server. Valid values: 1 to 100.
     * Default value: 50.
     */
    readonly loadBalancerWeight?: number | ros.IResolvable;
    /**
     * @Property memory: The memory size that you want to allocate to the elastic container instance. Unit: GiB.
     */
    readonly memory?: number | ros.IResolvable;
    /**
     * @Property ntpServers: The Network Time Protocol (NTP) server.
     */
    readonly ntpServers?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance. Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see Use an instance RAM role by calling API operations.
     */
    readonly ramRoleName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property restartPolicy: The restart policy of the elastic container instance. Valid values:
     * Always: always restarts the elastic container instance.
     * Never: never restarts the elastic container instance.
     * OnFailure: restarts the elastic container instance upon failures.
     * Default value: Always.
     */
    readonly restartPolicy?: string | ros.IResolvable;
    /**
     * @Property securityContextSysctls:
     */
    readonly securityContextSysctls?: Array<RosEciScalingConfiguration.SecurityContextSysctlsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance. The value can be accurate to three decimal places.
     * If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
     */
    readonly spotPriceLimit?: number | ros.IResolvable;
    /**
     * @Property spotStrategy: The bidding policy of the instance. Valid values:
     * NoSpot: The instance is created as a pay-as-you-go instance.
     * SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
     * SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;
    /**
     * @Property tags:
     */
    readonly tags?: RosEciScalingConfiguration.TagsProperty[];
    /**
     * @Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped. Unit: seconds.
     */
    readonly terminationGracePeriodSeconds?: number | ros.IResolvable;
    /**
     * @Property volumes:
     */
    readonly volumes?: Array<RosEciScalingConfiguration.VolumesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::EciScalingConfiguration`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EciScalingConfiguration` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-eciscalingconfiguration
 */
export declare class RosEciScalingConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::EciScalingConfiguration";
    /**
     * @Attribute ScalingConfigurationId: The ID of the elastic container instance.
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property containerGroupName: The name of the elastic container instance.
     */
    containerGroupName: string | ros.IResolvable;
    /**
     * @Property scalingConfigurationName: The name of the scaling configuration. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
     * The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
     */
    scalingConfigurationName: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance. Elastic container instances that are associated with the same security group can access each other.
     * If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @Property acrRegistryInfos:
     */
    acrRegistryInfos: Array<RosEciScalingConfiguration.AcrRegistryInfosProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property activeDeadlineSeconds: The validity period of the scaling configuration. Unit: seconds.
     */
    activeDeadlineSeconds: number | ros.IResolvable | undefined;
    /**
     * @Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance.
     */
    autoCreateEip: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoMatchImageCache: Specifies whether to automatically match the image cache. Valid values:
     * true
     * false
     * Default value: false.
     */
    autoMatchImageCache: boolean | ros.IResolvable | undefined;
    /**
     * @Property containers:
     */
    containers: Array<RosEciScalingConfiguration.ContainersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property costOptimization: Specifies whether to enable the Cost Optimization feature. Valid values:
     * true
     * false
     * Default value: false.
     */
    costOptimization: boolean | ros.IResolvable | undefined;
    /**
     * @Property cpu: The number of vCPUs that you want to allocate to the elastic container instance.
     */
    cpu: number | ros.IResolvable | undefined;
    /**
     * @Property cpuOptionsCore: The number of physical CPU cores. You can specify this parameter for only specific instance types. For more information, see Specify custom CPU options.
     */
    cpuOptionsCore: number | ros.IResolvable | undefined;
    /**
     * @Property cpuOptionsThreadsPerCore: The number of threads per core. You can specify this parameter for only specific instance types. If you set this parameter to 1, Hyper-Threading is disabled. For more information, see Specify custom CPU options.
     */
    cpuOptionsThreadsPerCore: number | ros.IResolvable | undefined;
    /**
     * @Property dataCacheBucket: The bucket that stores data caches.
     */
    dataCacheBucket: string | ros.IResolvable | undefined;
    /**
     * @Property dataCacheBurstingEnabled: Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk used for data caching. Valid values:
     * true
     * false
     * Default value: false.
     * Note
     * For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
     */
    dataCacheBurstingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property dataCachePl: The performance level (PL) of the disk used for data caching. We recommend that you use ESSDs. Valid values if you use ESSDs:
     * PL0: An ESSD can provide up to 10,000 random read\/write IOPS.
     * PL1: An ESSD can provide up to 50,000 random read\/write IOPS.
     * PL2: An ESSD can provide up to 100,000 random read\/write IOPS.
     * PL3: An ESSD can provide up to 1,000,000 random read\/write IOPS.
     * Default value: PL1.
     * Note
     * For more information about ESSDs, see ESSDs.
     */
    dataCachePl: string | ros.IResolvable | undefined;
    /**
     * @Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching. Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, where Baseline IOPS = min{1800 + 50 × Capacity - 50000}.
     * Note
     * For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
     */
    dataCacheProvisionedIops: number | ros.IResolvable | undefined;
    /**
     * @Property dnsConfigNameServers: The IP addresses of the DNS servers.
     */
    dnsConfigNameServers: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dnsConfigOptions:
     */
    dnsConfigOptions: Array<RosEciScalingConfiguration.DnsConfigOptionsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dnsConfigSearches: The search domains of the DNS server.
     */
    dnsConfigSearches: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dnsPolicy: The Domain Name System (DNS) policy. Valid values:
     * None: uses the DNS that is specified by DnsConfig.
     * Default: uses the DNS that is specified for the runtime environment.
     */
    dnsPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property egressBandwidth: The maximum outbound bandwidth. Unit: bytes.
     */
    egressBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property eipBandwidth: The bandwidth of the EIP. Default value: 5. Unit: Mbit\/s.
     */
    eipBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property ephemeralStorage: The size of the temporary storage space. By default, an enhanced SSD (ESSD) of the PL1 level is used. Unit: GiB.
     */
    ephemeralStorage: number | ros.IResolvable | undefined;
    /**
     * @Property hostAliases:
     */
    hostAliases: Array<RosEciScalingConfiguration.HostAliasesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hostName: The hostname of the elastic container instance.
     */
    hostName: string | ros.IResolvable | undefined;
    /**
     * @Property imageRegistryCredentials:
     */
    imageRegistryCredentials: Array<RosEciScalingConfiguration.ImageRegistryCredentialsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property imageSnapshotId: The ID of the image cache snapshot.
     */
    imageSnapshotId: string | ros.IResolvable | undefined;
    /**
     * @Property ingressBandwidth: The maximum inbound bandwidth. Unit: bytes.
     */
    ingressBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property initContainers:
     */
    initContainers: Array<RosEciScalingConfiguration.InitContainersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceFamilyLevel: The level of the instance family. You can use this parameter to filter instance types that meet the specified criteria. This parameter takes effect only if you set CostOptimization to true. Valid values:
     * EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which CPU utilization is low. For more information, see Shared instance families.
     * EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see Overview of instance families.
     * CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see Overview of burstable instances.
     */
    instanceFamilyLevel: string | ros.IResolvable | undefined;
    /**
     * @Property instanceTypes: The specified ECS instance types. You can specify up to five ECS instance types. For more information, see Specify ECS instance types to create an elastic container instance.
     */
    instanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses.
     */
    ipv6AddressCount: number | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerWeight: The weight of the elastic container instance as a backend server. Valid values: 1 to 100.
     * Default value: 50.
     */
    loadBalancerWeight: number | ros.IResolvable | undefined;
    /**
     * @Property memory: The memory size that you want to allocate to the elastic container instance. Unit: GiB.
     */
    memory: number | ros.IResolvable | undefined;
    /**
     * @Property ntpServers: The Network Time Protocol (NTP) server.
     */
    ntpServers: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance. Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see Use an instance RAM role by calling API operations.
     */
    ramRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property restartPolicy: The restart policy of the elastic container instance. Valid values:
     * Always: always restarts the elastic container instance.
     * Never: never restarts the elastic container instance.
     * OnFailure: restarts the elastic container instance upon failures.
     * Default value: Always.
     */
    restartPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property securityContextSysctls:
     */
    securityContextSysctls: Array<RosEciScalingConfiguration.SecurityContextSysctlsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance. The value can be accurate to three decimal places.
     * If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
     */
    spotPriceLimit: number | ros.IResolvable | undefined;
    /**
     * @Property spotStrategy: The bidding policy of the instance. Valid values:
     * NoSpot: The instance is created as a pay-as-you-go instance.
     * SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
     * SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot.
     */
    spotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property tags:
     */
    tags: RosEciScalingConfiguration.TagsProperty[] | undefined;
    /**
     * @Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped. Unit: seconds.
     */
    terminationGracePeriodSeconds: number | ros.IResolvable | undefined;
    /**
     * @Property volumes:
     */
    volumes: Array<RosEciScalingConfiguration.VolumesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEciScalingConfigurationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface AcrRegistryInfosProperty {
        /**
         * @Property domains: The domain names of the Container Registry Enterprise Edition instance. By default, all domain names of the instance are displayed. You can specify one or more domain names. Separate multiple domain names with commas (,).
         */
        readonly domains?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceName: The name of the Container Registry Enterprise Edition instance.
         */
        readonly instanceName?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the Container Registry Enterprise Edition instance.
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property regionId: The region ID of the Container Registry Enterprise Edition instance.
         */
        readonly regionId?: string | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface ConfigFileVolumeConfigFileToPathsProperty {
        /**
         * @Property path: The relative path to the configuration file.
         */
        readonly path: string | ros.IResolvable;
        /**
         * @Property content: The content of the configuration file (32 KB).
         */
        readonly content?: string | ros.IResolvable;
        /**
         * @Property mode: The permissions on the ConfigFileVolume directory.
         */
        readonly mode?: number | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface ContainersProperty {
        /**
         * @Property environmentVars:
         */
        readonly environmentVars?: Array<RosEciScalingConfiguration.EnvironmentVarsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property readinessProbeExecCommands: The command that you want to run by using the command line interface (CLI) in the container to perform readiness probes.
         */
        readonly readinessProbeExecCommands?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property memory: The memory size that you want to allocate to the container. Unit: GiB.
         */
        readonly memory?: number | ros.IResolvable;
        /**
         * @Property readinessProbeTcpSocketPort: The port that is detected by TCP sockets when you use the TCP sockets to perform readiness probes.
         */
        readonly readinessProbeTcpSocketPort?: number | ros.IResolvable;
        /**
         * @Property cpu: The number of CPU cores that you want to allocate to the container.
         */
        readonly cpu?: number | ros.IResolvable;
        /**
         * @Property readinessProbeHttpGetPath: The path to which HTTP GET requests are sent when you use the HTTP GET requests to perform readiness probes.
         */
        readonly readinessProbeHttpGetPath?: string | ros.IResolvable;
        /**
         * @Property readinessProbeHttpGetScheme: The protocol type of the HTTP GET requests that you use to perform readiness probes. Valid values:
     * HTTP
     * HTTPS
         */
        readonly readinessProbeHttpGetScheme?: string | ros.IResolvable;
        /**
         * @Property image: The image of the container.
         */
        readonly image: string | ros.IResolvable;
        /**
         * @Property gpu: The number of GPUs that you want to allocate to the container.
         */
        readonly gpu?: number | ros.IResolvable;
        /**
         * @Property stdinOnce: Specifies whether standard input streams remain connected during multiple sessions when Container.N.StdinOnce is set to true.
     * If you set Container.N.StdinOnce to true, standard input streams are connected after the container is started and remain idle until a client is connected to receive data. After the client is disconnected, the standard input streams are also disconnected and remain disconnected until the container is restarted.
         */
        readonly stdinOnce?: boolean | ros.IResolvable;
        /**
         * @Property name: The image name of the container.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property livenessProbeHttpGetScheme: The protocol type of the HTTP GET requests that you use to perform liveness probes. Valid values:
     * HTTP
     * HTTPS
         */
        readonly livenessProbeHttpGetScheme?: string | ros.IResolvable;
        /**
         * @Property livenessProbeTimeoutSeconds: The timeout period for a liveness probe. Unit: seconds. Default value: 1. Minimum value: 1.
         */
        readonly livenessProbeTimeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property livenessProbeFailureThreshold: The minimum number of consecutive failures before a successful liveness probe is considered failed.
     * Default value: 3.
         */
        readonly livenessProbeFailureThreshold?: number | ros.IResolvable;
        /**
         * @Property livenessProbeHttpGetPath: The path to which HTTP GET requests are sent when you use the HTTP GET requests to perform liveness probes.
         */
        readonly livenessProbeHttpGetPath?: string | ros.IResolvable;
        /**
         * @Property volumeMounts:
         */
        readonly volumeMounts?: Array<RosEciScalingConfiguration.VolumeMountsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property livenessProbeInitialDelaySeconds: The number of seconds that elapses from the startup of the container to the start time of a liveness probe. Unit: seconds.
         */
        readonly livenessProbeInitialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property securityContextRunAsUser: The ID of the user that runs the container.
         */
        readonly securityContextRunAsUser?: number | ros.IResolvable;
        /**
         * @Property livenessProbeTcpSocketPort: The port detected by TCP sockets when you use the TCP sockets to perform liveness probes.
         */
        readonly livenessProbeTcpSocketPort?: number | ros.IResolvable;
        /**
         * @Property commands: The container startup commands. You can specify up to 20 commands. Each command can contain up to 256 characters.
         */
        readonly commands?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tty: Specifies whether to enable interaction. Valid values:
     * true
     * false
     * Default value: false.
     * If the command is a \/bin\/bash command, set the value to true.
         */
        readonly tty?: boolean | ros.IResolvable;
        /**
         * @Property readinessProbePeriodSeconds: The interval at which readiness probes are performed. Unit: seconds. Default value: 10. Minimum value: 1.
         */
        readonly readinessProbePeriodSeconds?: number | ros.IResolvable;
        /**
         * @Property livenessProbePeriodSeconds: The interval at which liveness probes are performed. Unit: seconds. Default value: 10. Minimum value: 1.
         */
        readonly livenessProbePeriodSeconds?: number | ros.IResolvable;
        /**
         * @Property livenessProbeExecCommands: The command that you want to run by using the CLI in the container to perform liveness probes.
         */
        readonly livenessProbeExecCommands?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property livenessProbeSuccessThreshold: The minimum number of consecutive successes before a failed liveness probe is considered successful. Default value: 1. Set the value to 1.
         */
        readonly livenessProbeSuccessThreshold?: number | ros.IResolvable;
        /**
         * @Property readinessProbeSuccessThreshold: The minimum number of consecutive successes before a failed readiness probe is considered successful. Default value: 1. Set the value to 1.
         */
        readonly readinessProbeSuccessThreshold?: number | ros.IResolvable;
        /**
         * @Property readinessProbeInitialDelaySeconds: The number of seconds that elapses from the startup of the container to the start time of a readiness probe. Unit: seconds.
         */
        readonly readinessProbeInitialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property args: The container startup arguments. You can specify up to 10 arguments.
         */
        readonly args?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property readinessProbeFailureThreshold: The minimum number of consecutive failures before a successful readiness probe is considered failed. Default value: 3.
         */
        readonly readinessProbeFailureThreshold?: number | ros.IResolvable;
        /**
         * @Property securityContextCapabilitiesAdd: The permissions that are granted to the processes in the container. Only NET_ADMIN and NET_RAW are supported.
     * Note
     * If you want to use NET_RAW, submit a ticket.
         */
        readonly securityContextCapabilitiesAdd?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ports:
         */
        readonly ports?: Array<RosEciScalingConfiguration.PortsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property readinessProbeHttpGetPort: The port to which HTTP GET requests are sent when you use the HTTP GET requests to perform readiness probes.
         */
        readonly readinessProbeHttpGetPort?: number | ros.IResolvable;
        /**
         * @Property stdin: Specifies whether the container allocates buffer resources to standard input streams when the container is running. If you do not specify this parameter, an end-of-file (EOF) error occurs.
     * Default value: false.
         */
        readonly stdin?: boolean | ros.IResolvable;
        /**
         * @Property workingDir: The working directory of the container.
         */
        readonly workingDir?: string | ros.IResolvable;
        /**
         * @Property imagePullPolicy: The image pulling policy. Valid values:
     * Always: Each time instances are created, image pulling is performed.
     * IfNotPresent: Image pulling is performed as needed. On-premises images are preferentially used. If no on-premises images are available, image pulling is performed.
     * Never: Image pulling is not performed. On-premises images are always used.
         */
        readonly imagePullPolicy?: string | ros.IResolvable;
        /**
         * @Property livenessProbeHttpGetPort: The port to which HTTP GET requests are sent when you use the HTTP GET requests to perform liveness probes.
         */
        readonly livenessProbeHttpGetPort?: number | ros.IResolvable;
        /**
         * @Property readinessProbeTimeoutSeconds: The timeout period for a readiness probe. Unit: seconds. Default value: 1. Minimum value: 1.
         */
        readonly readinessProbeTimeoutSeconds?: number | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface DnsConfigOptionsProperty {
        /**
         * @Property value: The variable value of the option.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property name: The variable name of the option.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface EnvironmentVarsProperty {
        /**
         * @Property value: The value of the environment variable. The value can be up to 256 characters in length.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The name of the environment variable. The name must be 1 to 128 characters in length. Specify the value in the [0-9a-zA-Z] format. The name can contain underscores and cannot start with a digit.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface HostAliasesProperty {
        /**
         * @Property ip: The IP address of the host that you want to add.
         */
        readonly ip: string | ros.IResolvable;
        /**
         * @Property hostnames: The name of the host that you want to add.
         */
        readonly hostnames?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface ImageRegistryCredentialsProperty {
        /**
         * @Property userName: The username of the image repository.
         */
        readonly userName: string | ros.IResolvable;
        /**
         * @Property server: The registered address of the image repository.
         */
        readonly server: string | ros.IResolvable;
        /**
         * @Property password: The password of the image repository.
         */
        readonly password: string | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface InitContainerEnvironmentVarsProperty {
        /**
         * @Property value: The value of the environment variable. The value can be up to 256 characters in length.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The name of the environment variable. The name must be 1 to 128 characters in length. Specify the name in the [0-9a-zA-Z] format. The name can contain underscores and cannot start with a digit.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface InitContainerVolumeMountsProperty {
        /**
         * @Property readOnly: Specifies whether the mount directory is read-only.
     * Default value: false.
         */
        readonly readOnly?: boolean | ros.IResolvable;
        /**
         * @Property mountPath: The directory on which the volume is mounted. Data in this directory is overwritten by the data of the volume.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property subPath: The subdirectory of the volume. The pod can mount different directories of the same volume to different directories of the init container.
         */
        readonly subPath?: string | ros.IResolvable;
        /**
         * @Property mountPropagation: The mount propagation setting of the volume. Mount propagation allows volumes that are mounted on one container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:
     * None: The volume mount does not receive subsequent mounts that are mounted to the volume or the subdirectories of the volume.
     * HostToCotainer: The volume mount receives all subsequent mounts that are mounted to the volume or the subdirectories of the volume.
     * Bidirectional: This value is similar to HostToCotainer. The volume mount receives all subsequent mounts that are mounted to the volume or its subdirectories. In addition, all volume mounts that are mounted on the container are propagated back to the instance and to all containers of all pods that use the same volume.
         */
        readonly mountPropagation?: string | ros.IResolvable;
        /**
         * @Property name: The name of the mounted volume.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface InitContainersProperty {
        /**
         * @Property args: The container startup arguments.
         */
        readonly args?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityContextCapabilitiesAdd: The permissions that are granted to the processes in the init container. Only NET_ADMIN and NET_RAW are supported.
     * Note
     * If you want to use NET_RAW, submit a ticket.
         */
        readonly securityContextCapabilitiesAdd?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property memory: The memory size that you want to allocate to the init container. Unit: GiB.
         */
        readonly memory?: number | ros.IResolvable;
        /**
         * @Property cpu: The number of vCPUs that you want to allocate to the init container.
         */
        readonly cpu?: number | ros.IResolvable;
        /**
         * @Property image: The image of the init container.
         */
        readonly image: string | ros.IResolvable;
        /**
         * @Property gpu: The number of GPUs that you want to allocate to the init container.
         */
        readonly gpu?: number | ros.IResolvable;
        /**
         * @Property name: The name of the init container.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property initContainerEnvironmentVars:
         */
        readonly initContainerEnvironmentVars?: Array<RosEciScalingConfiguration.InitContainerEnvironmentVarsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property workingDir: The working directory of the init container.
         */
        readonly workingDir?: string | ros.IResolvable;
        /**
         * @Property imagePullPolicy: The image pulling policy.
         */
        readonly imagePullPolicy?: string | ros.IResolvable;
        /**
         * @Property commands: The container startup commands.
         */
        readonly commands?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityContextRunAsUser: The ID of the user that runs the init container.
         */
        readonly securityContextRunAsUser?: number | ros.IResolvable;
        /**
         * @Property initContainerVolumeMounts:
         */
        readonly initContainerVolumeMounts?: Array<RosEciScalingConfiguration.InitContainerVolumeMountsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface PortsProperty {
        /**
         * @Property port: The port number. Valid values: 1 to 65535.
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property protocol: The protocol type. Valid values:
     * TCP
     * UDP
         */
        readonly protocol: string | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface SecurityContextSysctlsProperty {
        /**
         * @Property value: The variable value of the security context in which the elastic container instance runs.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: The system name of the security context in which the elastic container instance runs.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: The tag value of the elastic container instance. You can specify 1 to 20 tags.
     * You can specify an empty string as a tag value. The tag value can be up to 128 characters in length and cannot contain http:\/\/ or https:\/\/. The tag value cannot start with acs:.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The tag key of the elastic container instance. You can specify 1 to 20 tags.
     * You cannot specify an empty string as a tag key. The tag key can be up to 128 characters in length and cannot contain http:\/\/ or https:\/\/. The tag key cannot start with acs: or aliyun.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface VolumeMountsProperty {
        /**
         * @Property readOnly: Specifies whether the volume is read-only. Valid values:
     * true
     * false
     * Default value: false.
         */
        readonly readOnly?: boolean | ros.IResolvable;
        /**
         * @Property mountPath: The directory on which the volume is mounted.
     * Note
     * Data in this directory is overwritten by the data on the volume. Proceed with caution if you specify this parameter.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property subPath: The subdirectory of the volume.
         */
        readonly subPath?: string | ros.IResolvable;
        /**
         * @Property mountPropagation: The mount propagation setting of the volume. Mount propagation allows volumes that are mounted on one container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:
     * None: The volume mount does not receive subsequent mounts that are mounted to the volume or the subdirectories of the volume.
     * HostToCotainer: The volume mount receives all subsequent mounts that are mounted to the volume or its subdirectories.
     * Bidirectional: This value is similar to HostToCotainer. The volume mount receives all subsequent mounts that are mounted to the volume or its subdirectories. In addition, all volume mounts that are mounted on the container are propagated back to the instance and to all containers of all pods that use the same volume.
     * Default value: None.
         */
        readonly mountPropagation?: string | ros.IResolvable;
        /**
         * @Property name: The volume name. The value of this parameter is the same as the value of Volume.N.Name.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosEciScalingConfiguration {
    /**
     * @stability external
     */
    interface VolumesProperty {
        /**
         * @Property hostPathVolumeType: The type of the Host directory. Examples: File, Directory, and Socket.
         */
        readonly hostPathVolumeType?: string | ros.IResolvable;
        /**
         * @Property emptyDirVolumeSizeLimit: The storage size of the EmptyDirVolume-typed volume. Unit: GiB or MiB.
         */
        readonly emptyDirVolumeSizeLimit?: string | ros.IResolvable;
        /**
         * @Property flexVolumeFsType: The file system type of the FlexVolume-typed volume. The default value is determined by the script of the FlexVolume plug-in.
         */
        readonly flexVolumeFsType?: string | ros.IResolvable;
        /**
         * @Property nfsVolumeServer: The address of the NFS server.
         */
        readonly nfsVolumeServer?: string | ros.IResolvable;
        /**
         * @Property diskVolumeDiskSize: The storage size of the DiskVolume-typed volume. Unit: GiB.
         */
        readonly diskVolumeDiskSize?: number | ros.IResolvable;
        /**
         * @Property configFileVolumeConfigFileToPaths:
         */
        readonly configFileVolumeConfigFileToPaths?: Array<RosEciScalingConfiguration.ConfigFileVolumeConfigFileToPathsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: The volume name.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property nfsVolumeReadOnly: Specifies whether the NFSVolume-typed volume is read-only. Valid values:
     * true
     * false
     * Default value: false.
         */
        readonly nfsVolumeReadOnly?: boolean | ros.IResolvable;
        /**
         * @Property hostPathVolumePath: The absolute path on the host.
         */
        readonly hostPathVolumePath?: string | ros.IResolvable;
        /**
         * @Property nfsVolumePath: The path to the NFSVolume-typed volume.
         */
        readonly nfsVolumePath?: string | ros.IResolvable;
        /**
         * @Property type: The volume type. Valid values:
     * EmptyDirVolume: an empty volume.
     * NFSVolume: a network file system (NFS) volume.
     * ConfigFileVolume: a configuration file.
     * FlexVolume: a volume that uses the FlexVolume plug-in to extend storage and supports disks.
     * HostPathVolume: a file or path of the host node.
     * DiskVolume: a disk volume. This value is not recommended. We recommend that you set Volume.N.Type to FlexVolume.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property flexVolumeDriver: The driver name of the FlexVolume-typed volume.
         */
        readonly flexVolumeDriver?: string | ros.IResolvable;
        /**
         * @Property diskVolumeDiskId: The ID of the DiskVolume-typed volume.
         */
        readonly diskVolumeDiskId?: string | ros.IResolvable;
        /**
         * @Property configFileVolumeDefaultMode: The default permissions on the ConfigFileVolume-typed volume.
         */
        readonly configFileVolumeDefaultMode?: number | ros.IResolvable;
        /**
         * @Property flexVolumeOptions: The options of the FlexVolume-typed volume. Each option is a key-value pair contained in a JSON string.
     * When you use the FlexVolume plug-in to mount a disk, specify the options in the {"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"} format.
         */
        readonly flexVolumeOptions?: string | ros.IResolvable;
        /**
         * @Property emptyDirVolumeMedium: The storage medium of the EmptyDirVolume-typed volume. If you leave this parameter empty, the file system that backs the node is used as the storage medium. If you set this parameter to memory, the memory is used as the storage medium.
         */
        readonly emptyDirVolumeMedium?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosLifecycleHook`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-lifecyclehook
 */
export interface RosLifecycleHookProps {
    /**
     * @Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:
     *  SCALE_OUT: scale-out event
     *  SCALE_IN: scale-in event
     */
    readonly lifecycleTransition: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range:
     *  CONTINUE: the scaling group continues with the scale-in or scale-out process.
     *  ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
     * Default value: CONTINUE
     * If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
     */
    readonly defaultResult?: string | ros.IResolvable;
    /**
     * @Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
     * You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
     */
    readonly heartbeatTimeout?: number | ros.IResolvable;
    /**
     * @Property lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
     * Default value: Lifecycle Hook ID
     */
    readonly lifecycleHookName?: string | ros.IResolvable;
    /**
     * @Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
     * region: the region to which the scaling group locates
     * account-id: Alibaba Cloud ID
     * For example:
     * MNS queue: acs:ess:{region}:{account-id}:queue\/{queuename}
     * MNS topic: acs:ess:{region}:{account-id}:topic\/{topicname}
     * OOS template: acs:ess:{region}:{account-id}:oos\/{templatename}
     */
    readonly notificationArn?: string | ros.IResolvable;
    /**
     * @Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
     */
    readonly notificationMetadata?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::LifecycleHook`, which is used to create a lifecycle hook for a scaling group.
 * @Note This class does not contain additional functions, so it is recommended to use the `LifecycleHook` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-lifecyclehook
 */
export declare class RosLifecycleHook extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::LifecycleHook";
    /**
     * @Attribute LifecycleHookId: The lifecycle hook ID
     */
    readonly attrLifecycleHookId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: The id of the scaling group to which the lifecycle hook belongs.
     */
    readonly attrScalingGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:
     *  SCALE_OUT: scale-out event
     *  SCALE_IN: scale-in event
     */
    lifecycleTransition: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range:
     *  CONTINUE: the scaling group continues with the scale-in or scale-out process.
     *  ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
     * Default value: CONTINUE
     * If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
     */
    defaultResult: string | ros.IResolvable | undefined;
    /**
     * @Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
     * You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
     */
    heartbeatTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
     * Default value: Lifecycle Hook ID
     */
    lifecycleHookName: string | ros.IResolvable | undefined;
    /**
     * @Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
     * region: the region to which the scaling group locates
     * account-id: Alibaba Cloud ID
     * For example:
     * MNS queue: acs:ess:{region}:{account-id}:queue\/{queuename}
     * MNS topic: acs:ess:{region}:{account-id}:topic\/{topicname}
     * OOS template: acs:ess:{region}:{account-id}:oos\/{templatename}
     */
    notificationArn: string | ros.IResolvable | undefined;
    /**
     * @Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
     */
    notificationMetadata: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLifecycleHookProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosLoadBalancerAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-loadbalancerattachment
 */
export interface RosLoadBalancerAttachmentProps {
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly forceAttach?: boolean | ros.IResolvable;
    /**
     * @Property loadBalancerConfigs: Load balancer configuration list.
     */
    readonly loadBalancerConfigs?: Array<RosLoadBalancerAttachment.LoadBalancerConfigsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group. Valid values of N: 1 to 5.
     */
    readonly loadBalancers?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::LoadBalancerAttachment`, which is used to add one or more Server Load Balancer (SLB) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancerAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-loadbalancerattachment
 */
export declare class RosLoadBalancerAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::LoadBalancerAttachment";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance. Valid values:
     * true
     * false
     * Default value: false.
     */
    forceAttach: boolean | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerConfigs: Load balancer configuration list.
     */
    loadBalancerConfigs: Array<RosLoadBalancerAttachment.LoadBalancerConfigsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group. Valid values of N: 1 to 5.
     */
    loadBalancers: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosLoadBalancerAttachment {
    /**
     * @stability external
     */
    interface LoadBalancerConfigsProperty {
        /**
         * @Property loadBalancerId: The ID of the CLB instance.
         */
        readonly loadBalancerId?: string | ros.IResolvable;
        /**
         * @Property weight: The weight of an Elastic Compute Service (ECS) instance as a backend server in the backend server groups of the attached CLB instance. If you increase the weight of an ECS instance, the number of access requests that are forwarded to the ECS instance also increases. If you set Weight to 0 for an ECS instance, no access requests are forwarded to the ECS instance.
     * Valid values: 0 to 100.
         */
        readonly weight?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosScalingConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingconfiguration
 */
export interface RosScalingConfigurationProps {
    /**
     * @Property scalingGroupId: Scaling group id to create the scaling configuration.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host. Valid values:
     * - **default**: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.
     * - **host**: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
     * Default value: **default**
     */
    readonly affinity?: string | ros.IResolvable;
    /**
     * @Property cpu: The number of vCPUs.
     * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
     * **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
     */
    readonly cpu?: number | ros.IResolvable;
    /**
     * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * Standard: the standard mode.
     * Unlimited: the unlimited mode.
     */
    readonly creditSpecification?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance. You cannot create preemptible instances on dedicated hosts. If you specify **DedicatedHostId**, **SpotStrategy** and **SpotPriceLimit** are ignored.
     * You can call the **DescribeDedicatedHosts** operation to query dedicated host IDs.
     */
    readonly dedicatedHostId?: string | ros.IResolvable;
    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    readonly deploymentSetId?: string | ros.IResolvable;
    /**
     * @Property diskMappings: Disk mappings to attach to instance.
     */
    readonly diskMappings?: Array<RosScalingConfiguration.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property hostName: The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
     * Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
     * Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
     */
    readonly hostName?: string | ros.IResolvable;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    readonly hpcClusterId?: string | ros.IResolvable;
    /**
     * @Property imageFamily: The name of the image family. You can configure this parameter to obtain the latest available images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
     */
    readonly imageFamily?: string | ros.IResolvable;
    /**
     * @Property imageId: Image ID to create ecs instance .
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * @Property imageName: The name of the image. Each image name must be unique in a region. If you specify **ImageId**, **ImageName** is ignored.
     * You cannot use **ImageName** to specify images that are purchased from Alibaba Cloud Marketplace.
     */
    readonly imageName?: string | ros.IResolvable;
    /**
     * @Property imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values:
     * - **true**
     * - **false**
     * Default value: **false**.
     */
    readonly imageOptionsLoginAsNonRoot?: boolean | ros.IResolvable;
    /**
     * @Property instanceDescription: The description of the ECS instance. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
     */
    readonly instanceDescription?: string | ros.IResolvable;
    /**
     * @Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of the instance launched from the current scaling configuration.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria.
     */
    readonly instancePatternInfos?: Array<RosScalingConfiguration.InstancePatternInfosProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceType: ecs supported instance type.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property instanceTypeOverrides: The instance types.
     */
    readonly instanceTypeOverrides?: Array<RosScalingConfiguration.InstanceTypeOverridesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
     */
    readonly instanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * @Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number | ros.IResolvable;
    /**
     * @Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
     * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
     * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;
    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
     */
    readonly ioOptimized?: string | ros.IResolvable;
    /**
     * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100.
     * Default value: 50.
     */
    readonly loadBalancerWeight?: number | ros.IResolvable;
    /**
     * @Property memory: The memory size. Unit: GiB.
     * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
     * **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
     */
    readonly memory?: number | ros.IResolvable;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;
    /**
     * @Property privatePoolOptions: Option settings for private pools
     */
    readonly privatePoolOptions?: RosScalingConfiguration.PrivatePoolOptionsProperty | ros.IResolvable;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property scalingConfigurationName: Name of created scaling configuration.
     */
    readonly scalingConfigurationName?: string | ros.IResolvable;
    /**
     * @Property securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
     * - **Active**: enables security hardening. This value is applicable only to public images.
     * - **Deactive**: disables security hardening. This value is applicable to all image types.
     */
    readonly securityEnhancementStrategy?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security Group to create ecs instance.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration.
     * **Note**: If you specify **SecurityGroupId**, you cannot specify **SecurityGroupIds**.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property spotDuration: The retention period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
     * If you set this parameter to 0, no protection period is specified for the preemptible instance.
     * Default value: 1
     */
    readonly spotDuration?: number | ros.IResolvable;
    /**
     * @Property spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
     */
    readonly spotInterruptionBehavior?: string | ros.IResolvable;
    /**
     * @Property spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
     */
    readonly spotPriceLimit?: number | ros.IResolvable;
    /**
     * @Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
     * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 50 items can be specified.
     * Key
     * 	ecs instance type
     * Value
     * 	Supports a maximum of 3 decimal places.
     */
    readonly spotPriceLimitForInstanceType?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
     * NoSpot: Normal pay-per-use instance
     * SpotWithPriceLimit: Set a preemptive instance of the cap price
     * SpotAsPriceGo: System automatic bidding, following the current market actual price
     * Default: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;
    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * @Property systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk. Valid values:
     * - **true**
     * - **false**
     * **Note**: This parameter is available only if you set **SystemDiskCategory** to **cloud_auto**.
     */
    readonly systemDiskBurstingEnabled?: boolean | ros.IResolvable;
    /**
     * @Property systemDiskCategories: The categories of the system disks. If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
     * - **cloud**: basic disk
     * - **cloud_efficiency**: ultra disk
     * - **cloud_ssd**: standard SSD
     * - **cloud_essd**: ESSD
     * **Note**: If you specify **SystemDiskCategories**, you cannot specify **SystemDiskCategory**.
     */
    readonly systemDiskCategories?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
    /**
     * @Property systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
     */
    readonly systemDiskDescription?: string | ros.IResolvable;
    /**
     * @Property systemDiskDiskName: The name of the system disk. The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly systemDiskDiskName?: string | ros.IResolvable;
    /**
     * @Property systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk. Valid values:
     * - **AES-256**
     * - **SM4-128**
     * Default value: **AES-256**
     */
    readonly systemDiskEncryptAlgorithm?: string | ros.IResolvable;
    /**
     * @Property systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
     * - **true**
     * - **false**
     * Default value: **false**
     */
    readonly systemDiskEncrypted?: boolean | ros.IResolvable;
    /**
     * @Property systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk.
     */
    readonly systemDiskKmsKeyId?: string | ros.IResolvable;
    /**
     * @Property systemDiskPerformanceLevel: The performance level of an ESSD.
     */
    readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
    /**
     * @Property systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk.
     * **Note**: IOPS measures the number of read and write operations that an EBS device can process per second.
     */
    readonly systemDiskProvisionedIops?: number | ros.IResolvable;
    /**
     * @Property systemDiskSize: Size of system disk. Unit is GB.
     */
    readonly systemDiskSize?: number | ros.IResolvable;
    /**
     * @Property tagList: The tags of an instance in list format.
     * Do not use with Tags at the same time.
     * You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
     * At most 20 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:\/\/ or https:\/\/.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:\/\/ or https:\/\/.
     * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
     */
    readonly tagList?: Array<RosScalingConfiguration.TagListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tenancy: Specifies whether to create an ECS instance on a dedicated host. Valid values:
     * - **default**: does not create an ECS instance on a dedicated host.
     * - **host**: creates an ECS instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the ECS instance.
     * Default value: **default**
     */
    readonly tenancy?: string | ros.IResolvable;
    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the ECS instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::ScalingConfiguration`, which is used to create a scaling configuration for a scaling group.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingConfiguration` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingconfiguration
 */
export declare class RosScalingConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingConfiguration";
    /**
     * @Attribute ScalingConfigurationId: The scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: The id of the scaling group to which the scaling configuration belongs.
     */
    readonly attrScalingGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property scalingGroupId: Scaling group id to create the scaling configuration.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host. Valid values:
     * - **default**: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.
     * - **host**: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
     * Default value: **default**
     */
    affinity: string | ros.IResolvable | undefined;
    /**
     * @Property cpu: The number of vCPUs.
     * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
     * **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
     */
    cpu: number | ros.IResolvable | undefined;
    /**
     * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * Standard: the standard mode.
     * Unlimited: the unlimited mode.
     */
    creditSpecification: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance. You cannot create preemptible instances on dedicated hosts. If you specify **DedicatedHostId**, **SpotStrategy** and **SpotPriceLimit** are ignored.
     * You can call the **DescribeDedicatedHosts** operation to query dedicated host IDs.
     */
    dedicatedHostId: string | ros.IResolvable | undefined;
    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    deploymentSetId: string | ros.IResolvable | undefined;
    /**
     * @Property diskMappings: Disk mappings to attach to instance.
     */
    diskMappings: Array<RosScalingConfiguration.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property hostName: The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
     * Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
     * Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
     */
    hostName: string | ros.IResolvable | undefined;
    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    hpcClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property imageFamily: The name of the image family. You can configure this parameter to obtain the latest available images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
     */
    imageFamily: string | ros.IResolvable | undefined;
    /**
     * @Property imageId: Image ID to create ecs instance .
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property imageName: The name of the image. Each image name must be unique in a region. If you specify **ImageId**, **ImageName** is ignored.
     * You cannot use **ImageName** to specify images that are purchased from Alibaba Cloud Marketplace.
     */
    imageName: string | ros.IResolvable | undefined;
    /**
     * @Property imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values:
     * - **true**
     * - **false**
     * Default value: **false**.
     */
    imageOptionsLoginAsNonRoot: boolean | ros.IResolvable | undefined;
    /**
     * @Property instanceDescription: The description of the ECS instance. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
     */
    instanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceName: The name of the instance launched from the current scaling configuration.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria.
     */
    instancePatternInfos: Array<RosScalingConfiguration.InstancePatternInfosProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceType: ecs supported instance type.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceTypeOverrides: The instance types.
     */
    instanceTypeOverrides: Array<RosScalingConfiguration.InstanceTypeOverridesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
     */
    instanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    internetChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
     */
    internetMaxBandwidthIn: number | ros.IResolvable | undefined;
    /**
     * @Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
     * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
     * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
     */
    internetMaxBandwidthOut: number | ros.IResolvable | undefined;
    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
     */
    ioOptimized: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
     */
    ipv6AddressCount: number | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: SSH key pair name.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100.
     * Default value: 50.
     */
    loadBalancerWeight: number | ros.IResolvable | undefined;
    /**
     * @Property memory: The memory size. Unit: GiB.
     * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
     * **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
     */
    memory: number | ros.IResolvable | undefined;
    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
     */
    passwordInherit: boolean | ros.IResolvable | undefined;
    /**
     * @Property privatePoolOptions: Option settings for private pools
     */
    privatePoolOptions: RosScalingConfiguration.PrivatePoolOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    ramRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property scalingConfigurationName: Name of created scaling configuration.
     */
    scalingConfigurationName: string | ros.IResolvable | undefined;
    /**
     * @Property securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
     * - **Active**: enables security hardening. This value is applicable only to public images.
     * - **Deactive**: disables security hardening. This value is applicable to all image types.
     */
    securityEnhancementStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Security Group to create ecs instance.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration.
     * **Note**: If you specify **SecurityGroupId**, you cannot specify **SecurityGroupIds**.
     */
    securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property spotDuration: The retention period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
     * If you set this parameter to 0, no protection period is specified for the preemptible instance.
     * Default value: 1
     */
    spotDuration: number | ros.IResolvable | undefined;
    /**
     * @Property spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
     */
    spotInterruptionBehavior: string | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
     */
    spotPriceLimit: number | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
     * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 50 items can be specified.
     * Key
     * 	ecs instance type
     * Value
     * 	Supports a maximum of 3 decimal places.
     */
    spotPriceLimitForInstanceType: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
     * NoSpot: Normal pay-per-use instance
     * SpotWithPriceLimit: Set a preemptive instance of the cap price
     * SpotAsPriceGo: System automatic bidding, following the current market actual price
     * Default: NoSpot.
     */
    spotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    systemDiskAutoSnapshotPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk. Valid values:
     * - **true**
     * - **false**
     * **Note**: This parameter is available only if you set **SystemDiskCategory** to **cloud_auto**.
     */
    systemDiskBurstingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property systemDiskCategories: The categories of the system disks. If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
     * - **cloud**: basic disk
     * - **cloud_efficiency**: ultra disk
     * - **cloud_ssd**: standard SSD
     * - **cloud_essd**: ESSD
     * **Note**: If you specify **SystemDiskCategories**, you cannot specify **SystemDiskCategory**.
     */
    systemDiskCategories: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
     */
    systemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
     */
    systemDiskDescription: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskDiskName: The name of the system disk. The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    systemDiskDiskName: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk. Valid values:
     * - **AES-256**
     * - **SM4-128**
     * Default value: **AES-256**
     */
    systemDiskEncryptAlgorithm: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
     * - **true**
     * - **false**
     * Default value: **false**
     */
    systemDiskEncrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk.
     */
    systemDiskKmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskPerformanceLevel: The performance level of an ESSD.
     */
    systemDiskPerformanceLevel: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk.
     * **Note**: IOPS measures the number of read and write operations that an EBS device can process per second.
     */
    systemDiskProvisionedIops: number | ros.IResolvable | undefined;
    /**
     * @Property systemDiskSize: Size of system disk. Unit is GB.
     */
    systemDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property tagList: The tags of an instance in list format.
     * Do not use with Tags at the same time.
     * You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
     * At most 20 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:\/\/ or https:\/\/.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:\/\/ or https:\/\/.
     * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
     */
    tagList: Array<RosScalingConfiguration.TagListProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tenancy: Specifies whether to create an ECS instance on a dedicated host. Valid values:
     * - **default**: does not create an ECS instance on a dedicated host.
     * - **host**: creates an ECS instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the ECS instance.
     * Default value: **default**
     */
    tenancy: string | ros.IResolvable | undefined;
    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone ID of the ECS instance.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingConfigurationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosScalingConfiguration {
    /**
     * @stability external
     */
    interface DiskMappingsProperty {
        /**
         * @Property burstingEnabled: Specifies whether to enable the burst feature for the system disk. Valid values:
     * - **true**
     * - **false**
     * **Note**: This parameter is available only if you set **SystemDisk.Category** to **cloud_auto**.
         */
        readonly burstingEnabled?: boolean | ros.IResolvable;
        /**
         * @Property category: The category of the data disk. Valid values:
     * - **cloud**: basic disk. The DeleteWithInstance attribute of a basic disk that is created together with the instance is set to true.
     * - **cloud_efficiency**: ultra disk.
     * - **cloud_ssd**: standard SSD.
     * - **ephemeral_ssd**: local SSD.
     * - **cloud_essd**: ESSD.
     * If you specify **Category**, you cannot specify **Categories**. If you do not specify **Category** or **Categories**, the default value of **Category** is used:
     * - For I\/O optimized instances, the default value is **cloud_efficiency**.
     * - For non-I\/O optimized instances, the default value is **cloud**.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property kmsKeyId: The KMS key ID for the data disk.
         */
        readonly kmsKeyId?: string | ros.IResolvable;
        /**
         * @Property categories: The categories of the data disks. If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
     * - **cloud**: basic disk. For a basic disk that is created together with the instance, **DeleteWithInstance** is set to true.
     * - **cloud_efficiency**: ultra disk.
     * - **cloud_ssd**: standard SSD.
     * - **cloud_essd**: ESSD.
     * **Note**: If you specify **Categories**, you cannot specify **DataDisks.Category**.
         */
        readonly categories?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property encrypted: Whether the data disk is encrypted or not. Valid values:
     * - **true**: Encrypted.
     * - **false**: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string | ros.IResolvable;
        /**
         * @Property device: A device name where the volume will be attached in the system at \/dev\/xvd[id]. Range from '\/dev\/xvdb' to '\/dev\/xvdz'.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The PL of the data disk that is an ESSD. Valid values:
     * - **PL0**: An ESSD can provide up to 10,000 random read\/write IOPS.
     * - **PL1**: An ESSD can provide up to 50,000 random read\/write IOPS.
     * - **PL2**: An ESSD can provide up to 100,000 random read\/write IOPS.
     * - **PL3**: An ESSD can provide up to 1,000,000 random read\/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of the data disk. Unit: GiB. Valid values:
     * - If you set Categories to cloud: 5 to 2000.
     * - If you set Categories to cloud_efficiency: 20 to 32768.
     * - If you set Categories to cloud_essd: 20 to 32768.
     * - If you set Categories to ephemeral_ssd: 5 to 800.
     * The size of the data disk must be greater than or equal to the size of the snapshot that is specified by SnapshotId.
         */
        readonly size?: string | ros.IResolvable;
        /**
         * @Property deleteWithInstance: Specifies whether to release the data disk when the instance to which the data disk is attached is released. Valid values:
     * - **true**
     * - **false**
     * This parameter is available only for independent disks whose value of **Category** is set to **cloud**, **cloud_efficiency**, **cloud_ssd**, or **cloud_essd**. If you specify this parameter for other disks, an error is reported.
     * Default value: **true**
         */
        readonly deleteWithInstance?: boolean | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that you want to apply to the data disk.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
        /**
         * @Property provisionedIops: The IOPS metric that is preconfigured for the data disk.
     * **Note**: IOPS measures the number of read and write operations that an EBS device can process per second.
         */
        readonly provisionedIops?: number | ros.IResolvable;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string | ros.IResolvable;
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string | ros.IResolvable;
    }
}
export declare namespace RosScalingConfiguration {
    /**
     * @stability external
     */
    interface InstancePatternInfosProperty {
        /**
         * @Property cores: The number of vCPUs that you want to allocate to an instance type in intelligent configuration mode. This parameter is used to filter the available instance types that meet the specified criteria.
     * Take note of the following items when you specify Cores:
     * - InstancePatternInfos is available only for scaling groups that reside in VPCs.
     * - If you specify InstancePatternInfos, you must specify Cores and Memory.
     * - If you specify an instance type by using InstanceType or InstanceTypes, Auto Scaling preferentially uses the instance type that is specified by InstanceType or InstanceTypes for scale-outs. If the specified instance type does not have sufficient inventory, Auto Scaling creates instances by using the lowest-priced instance type that is specified by InstancePatternInfos.
         */
        readonly cores?: number | ros.IResolvable;
        /**
         * @Property memory: The memory size that you want to allocate to an instance type in intelligent configuration mode. Unit: GiB. This parameter is used to filter the available instance types that meet the specified criteria.
         */
        readonly memory?: number | ros.IResolvable;
        /**
         * @Property instanceFamilyLevel: The level of the instance type, which is used to filter instance types that meet the specified criteria. This parameter takes effect only if you set **CostOptimization** to true. Valid values:
     * - **EntryLevel**: entry level (shared instance type). Instance types of this level are the most cost-effective but may not provide stable computing performance in a consistent manner. Instance types of this level are suitable for business scenarios in which the CPU utilization is low.
     * - **EnterpriseLevel**: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability.
     * - **CreditEntryLevel**: credit entry level. This value is valid only for burstable instances. CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which the CPU utilization is low but may fluctuate in specific cases.
         */
        readonly instanceFamilyLevel?: string | ros.IResolvable;
        /**
         * @Property maxPrice: The maximum hourly price of a pay-as-you-go or preemptible instance in intelligent configuration mode. This parameter is used to filter the available instance types that meet the specified criteria.
     * **Note**: If you set **SpotStrategy** to **SpotWithPriceLimit**, you must specify **MaxPrice**. In other cases, **MaxPrice** is optional.
         */
        readonly maxPrice?: number | ros.IResolvable;
        /**
         * @Property burstablePerformance: Specifies whether to include burstable instance types. Valid values:
     * - **Exclude**: does not include burstable instance types.
     * - **Include**: includes burstable instance types.
     * - **Required**: includes only burstable instance types.
     * Default value: **Include**
         */
        readonly burstablePerformance?: string | ros.IResolvable;
        /**
         * @Property excludedInstanceTypes: The instance types that you want to exclude. You can use wildcard characters, such as asterisks (*), to exclude an instance type or an instance family. Examples:
     * - ecs.c6.large: excludes the ecs.c6.large instance type.
     * - ecs.c6.*: excludes the c6 instance family.
         */
        readonly excludedInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property architectures: The architectures of the instance types. Valid values:
     * - **X86**: x86 architecture.
     * - **Heterogeneous**: heterogeneous architecture, such as GPUs and FPGAs.
     * - **BareMetal**: ECS Bare Metal Instance architecture.
     * - **Arm**: ARM architecture.
     * - **SuperComputeCluster**: Super Computing Cluster architecture.
     * By default, all values are included.
         */
        readonly architectures?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosScalingConfiguration {
    /**
     * @stability external
     */
    interface InstanceTypeOverridesProperty {
        /**
         * @Property weightedCapacity: The weight of instance type N. If you want to trigger scale-outs based on the weighted capacities of instances, you must specify **WeightedCapacity** after you specify **InstanceType**.
     * The weight of an instance type specifies the capacity of an instance of the instance type in the scaling group. A higher weight specifies that a smaller number of instances of the specified instance type is required to meet the expected capacity requirement.
     * Performance metrics, such as the number of vCPUs and the memory size of each instance type, may vary. You can specify different weights for different instance types based on your business requirements.
     * Example:
     * - Current capacity: 0
     * Expected capacity: 6
     * Capacity of ecs.c5.xlarge: 4
     * To meet the expected capacity requirement, Auto Scaling must create and add two ecs.c5.xlarge instances.
     * **Note**: The capacity of the scaling group cannot exceed the sum of the maximum number of instances that is specified by MaxSize and the maximum weight of the instance types.
     * Valid values of WeightedCapacity: 1 to 500.
         */
        readonly weightedCapacity?: number | ros.IResolvable;
        /**
         * @Property instanceType: Instance type N that you want to use to override the instance type that is specified in the launch template.
     * If you want to trigger scale-outs based on the weighted capacities of instances, specify **InstanceType** and **WeightedCapacity** at the same time. You can specify N instance types by using the Extended Configurations feature. Valid values of N: 1 to 10.
     * **Note**: This parameter takes effect only if you specify **LaunchTemplateId**.
     * You can specify an instance type that is available for purchase as the value of InstanceType.
         */
        readonly instanceType?: string | ros.IResolvable;
    }
}
export declare namespace RosScalingConfiguration {
    /**
     * @stability external
     */
    interface PrivatePoolOptionsProperty {
        /**
         * @Property matchCriteria: The type of the private pool that you want to use to start ECS instances. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. You can select a private pool to create ECS instances. Valid values:
     * - **Open**: open private pool. Auto Scaling selects a matching open private pool to start instances. If no matching open private pools are found, Auto Scaling uses the resources in the public pool to start instances. In this case, you do not need to specify PrivatePoolOptions.Id.
     * Target: specified private pool. Auto Scaling uses the resources in the specified private pool to start ECS instances. If the specified private pool is unavailable, Auto Scaling cannot start ECS instances. If you set this parameter to Target, you must specify PrivatePoolOptions.Id.
     * - **None**: no private pool. Auto Scaling does not use the resources in private pools to start ECS instances.
         */
        readonly matchCriteria?: string | ros.IResolvable;
        /**
         * @Property identity: The ID of the private pool. The ID of a private pool is the same as the ID of the elasticity assurance or capacity reservation for which the private pool is generated.
         */
        readonly identity?: string | ros.IResolvable;
    }
}
export declare namespace RosScalingConfiguration {
    /**
     * @stability external
     */
    interface TagListProperty {
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
 * Properties for defining a `RosScalingGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroup
 */
export interface RosScalingGroupProps {
    /**
     * @Property maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 2000].
     */
    readonly maxSize: number | ros.IResolvable;
    /**
     * @Property minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 2000].
     */
    readonly minSize: number | ros.IResolvable;
    /**
     * @Property allocationStrategy: The allocation policy of instances. Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.
     * - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
     * Default value: priority.
     */
    readonly allocationStrategy?: string | ros.IResolvable;
    /**
     * @Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - true
     * - false
     * Default value: false.
     */
    readonly azBalance?: boolean | ros.IResolvable;
    /**
     * @Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
     * Default value: true.
     */
    readonly compensateWithOnDemand?: boolean | ros.IResolvable;
    /**
     * @Property containerGroupId: The ID of the elastic container instance.
     */
    readonly containerGroupId?: string | ros.IResolvable;
    /**
     * @Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function). This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
     */
    readonly customPolicyArn?: string | ros.IResolvable;
    /**
     * @Property dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
     */
    readonly dbInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
     * The default value is 300s.
     */
    readonly defaultCooldown?: number | ros.IResolvable;
    /**
     * @Property desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
     */
    readonly desiredCapacity?: number | ros.IResolvable;
    /**
     * @Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
     * Default to False.
     */
    readonly groupDeletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS
     * ECI
     * Default value: ECS.
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * @Property healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
     */
    readonly healthCheckType?: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
     */
    readonly launchTemplateId?: string | ros.IResolvable;
    /**
     * @Property launchTemplateOverrides: You can specify up to 10 overrides.
     * Note: This parameter takes effect only if you specify LaunchTemplateId.
     */
    readonly launchTemplateOverrides?: Array<RosScalingGroup.LaunchTemplateOverridesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property launchTemplateVersion: The version of the instance launch template. Valid values:
     * A fixed template version numbe.
     * Default: The default template version is always used.
     * Latest: The latest template version is always used.
     */
    readonly launchTemplateVersion?: string | ros.IResolvable;
    /**
     * @Property loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
     */
    readonly loadBalancerIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group. Unit: seconds.
     * Valid values: 86400 to the value of Integer.maxValue.
     * Default value: null.
     * Note: This parameter is unavailable for scaling groups of the ECI type or scaling groups whose ScalingPolicy is set to recycle.
     */
    readonly maxInstanceLifetime?: number | ros.IResolvable;
    /**
     * @Property multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:
     * 1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
     * 2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.
     * 3. COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
     * Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.
     * 4. COMPOSABLE: You can flexibly combine the preceding policies based on your business requirements.
     */
    readonly multiAzPolicy?: string | ros.IResolvable;
    /**
     * @Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
     */
    readonly notificationConfigurations?: Array<RosScalingGroup.NotificationConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
     * If you set MultiAZPolicy to COMPOSABLE Policy, the default value of this parameter is 0.
     */
    readonly onDemandBaseCapacity?: number | ros.IResolvable;
    /**
     * @Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
     * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 100.
     */
    readonly onDemandPercentageAboveBaseCapacity?: number | ros.IResolvable;
    /**
     * @Property protectedInstances: ECS instances of protected mode in the scaling group.
     */
    readonly protectedInstances?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property removalPolicys: Policy for removing ECS instances from the scaling group.
     * Optional values:
     * - OldestInstance: removes the first ECS instance attached to the scaling group.
     * - NewestInstance: removes the first ECS instance attached to the scaling group.
     * - OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
     * - CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
     * You can enter up to three removal policies.
     * You cannot set any item of RemovalPolicys to the same value.
     * The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
     * Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.
     */
    readonly removalPolicys?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper\/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
     * If this parameter is not specified, the default value is ScalingGroupId.
     */
    readonly scalingGroupName?: string | ros.IResolvable;
    /**
     * @Property scalingPolicy: The reclaim mode of the scaling group. Valid values:
     * recycle
     * release
     * forcerelease
     * ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
     */
    readonly scalingPolicy?: string | ros.IResolvable;
    /**
     * @Property serverGroups: The config of server group.
     */
    readonly serverGroups?: Array<RosScalingGroup.ServerGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property spotAllocationStrategy: The allocation policy of preemptible instances. You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.
     * - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
     * Default value: priority.
     */
    readonly spotAllocationStrategy?: string | ros.IResolvable;
    /**
     * @Property spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
     * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 2.
     */
    readonly spotInstancePools?: number | ros.IResolvable;
    /**
     * @Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
     */
    readonly spotInstanceRemedy?: boolean | ros.IResolvable;
    /**
     * @Property standbyInstances: ECS instances of standby mode in the scaling group.
     */
    readonly standbyInstances?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosScalingGroup.TagsProperty[];
    /**
     * @Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
     * The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC.
     * The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority.
     * When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
     */
    readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::ScalingGroup`, which is used to create a scaling group. A scaling group is a group of Elastic Compute Service (ECS) instances that are dynamically scaled based on the configured scenario. A scaling group does not immediately take effect after it is created. You must use ALIYUN::ESS::ScalingGroupEnable to enable the scaling group to trigger scaling activities and execute scaling rules.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroup
 */
export declare class RosScalingGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingGroup";
    /**
     * @Attribute ScalingGroupId: Scaling group Id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupName: Scaling group name
     */
    readonly attrScalingGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 2000].
     */
    maxSize: number | ros.IResolvable;
    /**
     * @Property minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 2000].
     */
    minSize: number | ros.IResolvable;
    /**
     * @Property allocationStrategy: The allocation policy of instances. Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.
     * - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
     * Default value: priority.
     */
    allocationStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - true
     * - false
     * Default value: false.
     */
    azBalance: boolean | ros.IResolvable | undefined;
    /**
     * @Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
     * Default value: true.
     */
    compensateWithOnDemand: boolean | ros.IResolvable | undefined;
    /**
     * @Property containerGroupId: The ID of the elastic container instance.
     */
    containerGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function). This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
     */
    customPolicyArn: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
     */
    dbInstanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
     * The default value is 300s.
     */
    defaultCooldown: number | ros.IResolvable | undefined;
    /**
     * @Property desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
     */
    desiredCapacity: number | ros.IResolvable | undefined;
    /**
     * @Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
     * Default to False.
     */
    groupDeletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS
     * ECI
     * Default value: ECS.
     */
    groupType: string | ros.IResolvable | undefined;
    /**
     * @Property healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
     */
    healthCheckType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
     */
    launchTemplateId: string | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateOverrides: You can specify up to 10 overrides.
     * Note: This parameter takes effect only if you specify LaunchTemplateId.
     */
    launchTemplateOverrides: Array<RosScalingGroup.LaunchTemplateOverridesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property launchTemplateVersion: The version of the instance launch template. Valid values:
     * A fixed template version numbe.
     * Default: The default template version is always used.
     * Latest: The latest template version is always used.
     */
    launchTemplateVersion: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
     */
    loadBalancerIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group. Unit: seconds.
     * Valid values: 86400 to the value of Integer.maxValue.
     * Default value: null.
     * Note: This parameter is unavailable for scaling groups of the ECI type or scaling groups whose ScalingPolicy is set to recycle.
     */
    maxInstanceLifetime: number | ros.IResolvable | undefined;
    /**
     * @Property multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:
     * 1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
     * 2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.
     * 3. COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
     * Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.
     * 4. COMPOSABLE: You can flexibly combine the preceding policies based on your business requirements.
     */
    multiAzPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
     */
    notificationConfigurations: Array<RosScalingGroup.NotificationConfigurationsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
     * If you set MultiAZPolicy to COMPOSABLE Policy, the default value of this parameter is 0.
     */
    onDemandBaseCapacity: number | ros.IResolvable | undefined;
    /**
     * @Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
     * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 100.
     */
    onDemandPercentageAboveBaseCapacity: number | ros.IResolvable | undefined;
    /**
     * @Property protectedInstances: ECS instances of protected mode in the scaling group.
     */
    protectedInstances: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property removalPolicys: Policy for removing ECS instances from the scaling group.
     * Optional values:
     * - OldestInstance: removes the first ECS instance attached to the scaling group.
     * - NewestInstance: removes the first ECS instance attached to the scaling group.
     * - OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
     * - CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
     * You can enter up to three removal policies.
     * You cannot set any item of RemovalPolicys to the same value.
     * The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
     * Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.
     */
    removalPolicys: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper\/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
     * If this parameter is not specified, the default value is ScalingGroupId.
     */
    scalingGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property scalingPolicy: The reclaim mode of the scaling group. Valid values:
     * recycle
     * release
     * forcerelease
     * ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
     */
    scalingPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property serverGroups: The config of server group.
     */
    serverGroups: Array<RosScalingGroup.ServerGroupsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property spotAllocationStrategy: The allocation policy of preemptible instances. You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.
     * - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
     * Default value: priority.
     */
    spotAllocationStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
     * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 2.
     */
    spotInstancePools: number | ros.IResolvable | undefined;
    /**
     * @Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
     */
    spotInstanceRemedy: boolean | ros.IResolvable | undefined;
    /**
     * @Property standbyInstances: ECS instances of standby mode in the scaling group.
     */
    standbyInstances: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosScalingGroup.TagsProperty[] | undefined;
    /**
     * @Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
     * The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC.
     * The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority.
     * When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
     */
    vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosScalingGroup {
    /**
     * @stability external
     */
    interface LaunchTemplateOverridesProperty {
        /**
         * @Property weightedCapacity: If you want to scale instances in the scaling group based on the weights of the specified instance types, you must specify WeightedCapacity after you specify InstanceType.
         */
        readonly weightedCapacity?: number | ros.IResolvable;
        /**
         * @Property spotPriceLimit: The maximum bid price of instance type that is specified by InstanceType.
         */
        readonly spotPriceLimit?: number | ros.IResolvable;
        /**
         * @Property instanceType: Specify this to override the instance type that is specified in the launch template.
         */
        readonly instanceType?: string | ros.IResolvable;
    }
}
export declare namespace RosScalingGroup {
    /**
     * @stability external
     */
    interface NotificationConfigurationsProperty {
        /**
         * @Property notificationArn: The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
     * region: the region to which the scaling group locates
     * account-id: Alibaba Cloud ID
     * For example:
     * MNS queue: acs:ess:{region}:{account-id}:queue\/{queuename}
     * MNS topic: acs:ess:{region}:{account-id}:topic\/{topicname}
     * Cloud Monitor: acs:ess:{region}:{account-id}:\/cloudmonitor
         */
        readonly notificationArn: string | ros.IResolvable;
        /**
         * @Property notificationTypes: Ess events and resource change notification types. Possible values:
     * AUTOSCALING:SCALE_OUT_SUCCESS
     * AUTOSCALING:SCALE_IN_SUCCESS
     * AUTOSCALING:SCALE_OUT_ERROR
     * AUTOSCALING:SCALE_IN_ERROR
     * AUTOSCALING:SCALE_REJECT
     * AUTOSCALING:SCALE_OUT_START
     * AUTOSCALING:SCALE_IN_START
     * AUTOSCALING:SCHEDULE_TASK_EXPIRING
         */
        readonly notificationTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosScalingGroup {
    /**
     * @stability external
     */
    interface ServerGroupsProperty {
        /**
         * @Property type: The type of the server group.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property port: The port of server group.
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property serverGroupId: The id of the server group.
         */
        readonly serverGroupId: string | ros.IResolvable;
        /**
         * @Property weight: The weight of server group.
         */
        readonly weight: number | ros.IResolvable;
    }
}
export declare namespace RosScalingGroup {
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
 * Properties for defining a `RosScalingGroupEnable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroupenable
 */
export interface RosScalingGroupEnableProps {
    /**
     * @Property scalingGroupId: The id of operated scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property attachOptions: Options for attaching instances.
     */
    readonly attachOptions?: RosScalingGroupEnable.AttachOptionsProperty | ros.IResolvable;
    /**
     * @Property detachOptions: Options for detaching instances.
     */
    readonly detachOptions?: RosScalingGroupEnable.DetachOptionsProperty | ros.IResolvable;
    /**
     * @Property instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
     */
    readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
     */
    readonly removeInstanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingConfigurationId: The id of scaling configuration which will be activate.
     */
    readonly scalingConfigurationId?: string | ros.IResolvable;
    /**
     * @Property scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
     * When creating the resource, all the scaling rule aris in the list will be executed.
     * When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
     */
    readonly scalingRuleAris?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
     */
    readonly scalingRuleArisExecuteVersion?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::ScalingGroupEnable`, which is used to enable a scaling group.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingGroupEnable` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroupenable
 */
export declare class RosScalingGroupEnable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingGroupEnable";
    /**
     * @Attribute LifecycleState: The scaling group status
     */
    readonly attrLifecycleState: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: The scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingInstanceDetails: Detail information of auto created scaling instances
     */
    readonly attrScalingInstanceDetails: ros.IResolvable;
    /**
     * @Attribute ScalingInstances: The auto created scaling instances
     */
    readonly attrScalingInstances: ros.IResolvable;
    /**
     * @Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteErrorInfo: ros.IResolvable;
    /**
     * @Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultInstancesAdded: ros.IResolvable;
    /**
     * @Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultInstancesRemoved: ros.IResolvable;
    /**
     * @Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris
     */
    readonly attrScalingRuleArisExecuteResultNumberOfAddedInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property scalingGroupId: The id of operated scaling group.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property attachOptions: Options for attaching instances.
     */
    attachOptions: RosScalingGroupEnable.AttachOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property detachOptions: Options for detaching instances.
     */
    detachOptions: RosScalingGroupEnable.DetachOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
     */
    instanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
     */
    removeInstanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingConfigurationId: The id of scaling configuration which will be activate.
     */
    scalingConfigurationId: string | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
     * When creating the resource, all the scaling rule aris in the list will be executed.
     * When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
     */
    scalingRuleAris: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
     */
    scalingRuleArisExecuteVersion: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingGroupEnableProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosScalingGroupEnable {
    /**
     * @stability external
     */
    interface AttachOptionsProperty {
        /**
         * @Property entrusted: Specifies whether the scaling group manages the lifecycle of instances that are manually added to the scaling group. Valid values:
     * - true: The scaling group manages the lifecycle of instances that are manually added in a similar manner in which the scaling group manages the lifecycle of automatically created instances. When the instances are removed from the scaling group, the instances are automatically released. However, if you call the DetachInstances operation to remove the instances from the scaling group, the instances are not released.
     * - false: The scaling group does not manage the lifecycle of instances that are manually added. After the instances are removed from the scaling group, the instances are not released.
     * Default value: false.
     * Note: This property is unavailable for subscription instances.
         */
        readonly entrusted?: boolean | ros.IResolvable;
        /**
         * @Property lifecycleHook: Specifies whether to trigger a lifecycle hook for the scaling group to which instances are being added. Valid values:
     * - true
     * - false
     * Default value: false.
         */
        readonly lifecycleHook?: boolean | ros.IResolvable;
    }
}
export declare namespace RosScalingGroupEnable {
    /**
     * @stability external
     */
    interface DetachOptionsProperty {
        /**
         * @Property detachOption: Specifies whether to remove the instances from the default server groups and vServer groups of the Server Load Balancer (SLB) instance that is associated with the scaling group, and whether to remove the IP addresses of the instances from the whitelist that manages access to the ApsaraDB RDS instance that is associated with the scaling group.
     * If you set this parameter to both, the instances are removed from the default sever groups and vServer groups of the associated SLB instance, and the IP addresses of the instances are removed from the whitelist that manages access to the associated ApsaraDB RDS instance.
         */
        readonly detachOption?: string | ros.IResolvable;
        /**
         * @Property decreaseDesiredCapacity: Specifies whether to adjust the expected number of instances in the scaling group. Valid values:
     * - true: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group decreases.
     * - false: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group remains unchanged.
     * Default value: true.
         */
        readonly decreaseDesiredCapacity?: boolean | ros.IResolvable;
        /**
         * @Property lifecycleHook: Specifies whether to trigger the lifecycle hook for the scaling group when you remove instances from the scaling group. Valid values:
     * - true
     * - false
     * Default value: false.
         */
        readonly lifecycleHook?: boolean | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosScalingRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingrule
 */
export interface RosScalingRuleProps {
    /**
     * @Property scalingGroupId: ID of the scaling group of a scaling rule.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property adjustmentType: Adjustment mode of a scaling rule. Optional values:
     * - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
     * - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
     * - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
     */
    readonly adjustmentType?: string | ros.IResolvable;
    /**
     * @Property adjustmentValue: Adjusted value of a scaling rule. Value range:
     * - QuantityChangeInCapacity: [-500, 500]
     * - PercentChangeInCapacity: [-100, 10000]
     * - TotalCapacity: [0, 1000]
     */
    readonly adjustmentValue?: number | ros.IResolvable;
    /**
     * @Property cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
     */
    readonly cooldown?: number | ros.IResolvable;
    /**
     * @Property disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
     *  Default value: false
     */
    readonly disableScaleIn?: boolean | ros.IResolvable;
    /**
     * @Property estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
     * Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
     * Valid values: 0 to 86400. Unit: seconds. Default value: 300.
     */
    readonly estimatedInstanceWarmup?: number | ros.IResolvable;
    /**
     * @Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
     *  Default value: the same as the value of MaxSize
     */
    readonly initialMaxSize?: number | ros.IResolvable;
    /**
     * @Property metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
     * Valid values of a target tracking scaling rule:
     * - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
     * - ClassicInternetTx: the average public network outbound traffic over the classic network
     * - VpcInternetRx: the average public network inbound traffic over the VPC
     * - VpcInternetTx: the average public network outbound traffic over the VPC
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     * Valid values of a predictive scaling rule:
     * - CpuUtilization: the average CPU utilization
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     */
    readonly metricName?: string | ros.IResolvable;
    /**
     * @Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
     */
    readonly minAdjustmentMagnitude?: number | ros.IResolvable;
    /**
     * @Property predictiveScalingMode: The mode of the predictive scaling rule. Valid values:
     * - PredictAndScale: generates forecasts and creates forecast tasks.
     * - PredictOnly: generates forecasts but does not create forecast tasks.
     * Default value: PredictAndScale
     */
    readonly predictiveScalingMode?: string | ros.IResolvable;
    /**
     * @Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
     *  Default value: 0
     */
    readonly predictiveTaskBufferTime?: number | ros.IResolvable;
    /**
     * @Property predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:
     * - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
     *  Default value: MaxOverridePredictiveValue
     */
    readonly predictiveValueBehavior?: string | ros.IResolvable;
    /**
     * @Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
     *  Default value: 0
     */
    readonly predictiveValueBuffer?: number | ros.IResolvable;
    /**
     * @Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 15.
     */
    readonly scaleInEvaluationCount?: number | ros.IResolvable;
    /**
     * @Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 3.
     */
    readonly scaleOutEvaluationCount?: number | ros.IResolvable;
    /**
     * @Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
     */
    readonly scalingRuleName?: string | ros.IResolvable;
    /**
     * @Property scalingRuleType: The type of the scaling rule. Valid values:
     * - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
     * - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
     * - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
     * - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
     *  If this parameter value is not specified, the default value is SimpleScalingRule.
     */
    readonly scalingRuleType?: string | ros.IResolvable;
    /**
     * @Property stepAdjustment:
     */
    readonly stepAdjustment?: Array<RosScalingRule.StepAdjustmentProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
     */
    readonly targetValue?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::ScalingRule`, which is used to create a scaling rule.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingrule
 */
export declare class RosScalingRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingRule";
    /**
     * @Attribute ScalingRuleAri: Unique identifier of a scaling rule.
     */
    readonly attrScalingRuleAri: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.
     */
    readonly attrScalingRuleId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property scalingGroupId: ID of the scaling group of a scaling rule.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property adjustmentType: Adjustment mode of a scaling rule. Optional values:
     * - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
     * - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
     * - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
     */
    adjustmentType: string | ros.IResolvable | undefined;
    /**
     * @Property adjustmentValue: Adjusted value of a scaling rule. Value range:
     * - QuantityChangeInCapacity: [-500, 500]
     * - PercentChangeInCapacity: [-100, 10000]
     * - TotalCapacity: [0, 1000]
     */
    adjustmentValue: number | ros.IResolvable | undefined;
    /**
     * @Property cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
     */
    cooldown: number | ros.IResolvable | undefined;
    /**
     * @Property disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
     *  Default value: false
     */
    disableScaleIn: boolean | ros.IResolvable | undefined;
    /**
     * @Property estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
     * Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
     * Valid values: 0 to 86400. Unit: seconds. Default value: 300.
     */
    estimatedInstanceWarmup: number | ros.IResolvable | undefined;
    /**
     * @Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
     *  Default value: the same as the value of MaxSize
     */
    initialMaxSize: number | ros.IResolvable | undefined;
    /**
     * @Property metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
     * Valid values of a target tracking scaling rule:
     * - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
     * - ClassicInternetTx: the average public network outbound traffic over the classic network
     * - VpcInternetRx: the average public network inbound traffic over the VPC
     * - VpcInternetTx: the average public network outbound traffic over the VPC
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     * Valid values of a predictive scaling rule:
     * - CpuUtilization: the average CPU utilization
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     */
    metricName: string | ros.IResolvable | undefined;
    /**
     * @Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
     */
    minAdjustmentMagnitude: number | ros.IResolvable | undefined;
    /**
     * @Property predictiveScalingMode: The mode of the predictive scaling rule. Valid values:
     * - PredictAndScale: generates forecasts and creates forecast tasks.
     * - PredictOnly: generates forecasts but does not create forecast tasks.
     * Default value: PredictAndScale
     */
    predictiveScalingMode: string | ros.IResolvable | undefined;
    /**
     * @Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
     *  Default value: 0
     */
    predictiveTaskBufferTime: number | ros.IResolvable | undefined;
    /**
     * @Property predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:
     * - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
     *  Default value: MaxOverridePredictiveValue
     */
    predictiveValueBehavior: string | ros.IResolvable | undefined;
    /**
     * @Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
     *  Default value: 0
     */
    predictiveValueBuffer: number | ros.IResolvable | undefined;
    /**
     * @Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 15.
     */
    scaleInEvaluationCount: number | ros.IResolvable | undefined;
    /**
     * @Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 3.
     */
    scaleOutEvaluationCount: number | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
     */
    scalingRuleName: string | ros.IResolvable | undefined;
    /**
     * @Property scalingRuleType: The type of the scaling rule. Valid values:
     * - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
     * - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
     * - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
     * - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
     *  If this parameter value is not specified, the default value is SimpleScalingRule.
     */
    scalingRuleType: string | ros.IResolvable | undefined;
    /**
     * @Property stepAdjustment:
     */
    stepAdjustment: Array<RosScalingRule.StepAdjustmentProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
     */
    targetValue: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosScalingRule {
    /**
     * @stability external
     */
    interface StepAdjustmentProperty {
        /**
         * @Property metricIntervalUpperBound: The upper limit value specified in step adjustment N.
     * Valid values: -9.999999E18 to 9.999999E18.
         */
        readonly metricIntervalUpperBound?: number | ros.IResolvable;
        /**
         * @Property metricIntervalLowerBound: The lower limit value specified in step adjustment N.
     * Valid values: -9.999999E18 to 9.999999E18.
         */
        readonly metricIntervalLowerBound?: number | ros.IResolvable;
        /**
         * @Property scalingAdjustment: The specified number of ECS instances to be adjusted in step adjustment.
         */
        readonly scalingAdjustment?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosScheduledTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scheduledtask
 */
export interface RosScheduledTaskProps {
    /**
     * @Property launchTime: Time point at which the scheduled task is triggered.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
     * A time point 90 days after creation or modification cannot be entered.
     */
    readonly launchTime: string | ros.IResolvable;
    /**
     * @Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property desiredCapacity: The ID of the scaling group whose number of instances must be modified when the scheduled task is triggered. If you specify the **ScalingGroupId** parameter for a scheduled task, you must specify the minimum, maximum, or expected numbers of instances for a scaling group in the scheduled task. That is, you must specify at least one of the **MinValue**, **MaxValue**, and **DesiredCapacity** parameters.
     */
    readonly desiredCapacity?: number | ros.IResolvable;
    /**
     * @Property launchExpirationTime: Time period within which the failed scheduled task is retried.
     * The default value is 600s.
     * Value range: [0, 21600]
     */
    readonly launchExpirationTime?: number | ros.IResolvable;
    /**
     * @Property maxValue: The expected number of instances in the scaling group if you specify the ScalingGroupId parameter.
     * **Note**: You must specify the **DesiredCapacity** parameter when you create a scaling group.
     */
    readonly maxValue?: number | ros.IResolvable;
    /**
     * @Property minValue: The maximum number of instances in the scaling group if you specify the ScalingGroupId parameter.
     */
    readonly minValue?: number | ros.IResolvable;
    /**
     * @Property recurrenceEndTime: End time of the scheduled task to be repeated.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * A time point 90 days after creation or modification cannot be entered.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceEndTime?: string | ros.IResolvable;
    /**
     * @Property recurrenceType: Type of the scheduled task to be repeated. Optional values:
     * - Daily: Recurrence interval by day for a scheduled task.
     * - Weekly: Recurrence interval by week for a scheduled task.
     * - Monthly: Recurrence interval by month for a scheduled task.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceType?: string | ros.IResolvable;
    /**
     * @Property recurrenceValue: Value of the scheduled task to be repeated.
     * - Daily: Only one value in the range [1,31] can be filled.
     * - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
     * - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceValue?: string | ros.IResolvable;
    /**
     * @Property scalingGroupId: The globally unique ID of the scheduled task. The globally unique ID is generated by the system.
     * **Note**: You cannot specify the **ScheduledAction** and **ScalingGroupId** parameters at the same time.
     */
    readonly scalingGroupId?: string | ros.IResolvable;
    /**
     * @Property scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
     * **Note**: You cannot specify the **ScheduledAction** and **ScalingGroupId** parameters at the same time.
     */
    readonly scheduledAction?: string | ros.IResolvable;
    /**
     * @Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper\/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
     * The account name is unique in the same region.
     * If this parameter is not specified, the default value ScheduledScalingTaskId is used.
     */
    readonly scheduledTaskName?: string | ros.IResolvable;
    /**
     * @Property taskEnabled: Whether to enable the scheduled task.
     * - When the parameter is set to true, the task is enabled.
     * - When the parameter is set to false, the task is disabled.
     * The default value is true.
     */
    readonly taskEnabled?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::ScheduledTask`, which is used to create a scheduled task by specifying properties.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScheduledTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scheduledtask
 */
export declare class RosScheduledTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScheduledTask";
    /**
     * @Attribute ScheduledTaskId: ID of the scheduled task, which is generated by the system and globally unique.
     */
    readonly attrScheduledTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property launchTime: Time point at which the scheduled task is triggered.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
     * A time point 90 days after creation or modification cannot be entered.
     */
    launchTime: string | ros.IResolvable;
    /**
     * @Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property desiredCapacity: The ID of the scaling group whose number of instances must be modified when the scheduled task is triggered. If you specify the **ScalingGroupId** parameter for a scheduled task, you must specify the minimum, maximum, or expected numbers of instances for a scaling group in the scheduled task. That is, you must specify at least one of the **MinValue**, **MaxValue**, and **DesiredCapacity** parameters.
     */
    desiredCapacity: number | ros.IResolvable | undefined;
    /**
     * @Property launchExpirationTime: Time period within which the failed scheduled task is retried.
     * The default value is 600s.
     * Value range: [0, 21600]
     */
    launchExpirationTime: number | ros.IResolvable | undefined;
    /**
     * @Property maxValue: The expected number of instances in the scaling group if you specify the ScalingGroupId parameter.
     * **Note**: You must specify the **DesiredCapacity** parameter when you create a scaling group.
     */
    maxValue: number | ros.IResolvable | undefined;
    /**
     * @Property minValue: The maximum number of instances in the scaling group if you specify the ScalingGroupId parameter.
     */
    minValue: number | ros.IResolvable | undefined;
    /**
     * @Property recurrenceEndTime: End time of the scheduled task to be repeated.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * A time point 90 days after creation or modification cannot be entered.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    recurrenceEndTime: string | ros.IResolvable | undefined;
    /**
     * @Property recurrenceType: Type of the scheduled task to be repeated. Optional values:
     * - Daily: Recurrence interval by day for a scheduled task.
     * - Weekly: Recurrence interval by week for a scheduled task.
     * - Monthly: Recurrence interval by month for a scheduled task.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    recurrenceType: string | ros.IResolvable | undefined;
    /**
     * @Property recurrenceValue: Value of the scheduled task to be repeated.
     * - Daily: Only one value in the range [1,31] can be filled.
     * - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
     * - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    recurrenceValue: string | ros.IResolvable | undefined;
    /**
     * @Property scalingGroupId: The globally unique ID of the scheduled task. The globally unique ID is generated by the system.
     * **Note**: You cannot specify the **ScheduledAction** and **ScalingGroupId** parameters at the same time.
     */
    scalingGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
     * **Note**: You cannot specify the **ScheduledAction** and **ScalingGroupId** parameters at the same time.
     */
    scheduledAction: string | ros.IResolvable | undefined;
    /**
     * @Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper\/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
     * The account name is unique in the same region.
     * If this parameter is not specified, the default value ScheduledScalingTaskId is used.
     */
    scheduledTaskName: string | ros.IResolvable | undefined;
    /**
     * @Property taskEnabled: Whether to enable the scheduled task.
     * - When the parameter is set to true, the task is enabled.
     * - When the parameter is set to false, the task is disabled.
     * The default value is true.
     */
    taskEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScheduledTaskProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosServerGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-servergroupattachment
 */
export interface RosServerGroupAttachmentProps {
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property serverGroups: A collection of information about server groups.
     */
    readonly serverGroups: Array<RosServerGroupAttachment.ServerGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly forceAttach?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::ServerGroupAttachment`, which is used to add one or more Server Load Balancer (SLB) server groups to a scaling group. Supported SLB server groups include Application Load Balancer (ALB) server groups and Network Load Balancer (NLB) server groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServerGroupAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-servergroupattachment
 */
export declare class RosServerGroupAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ServerGroupAttachment";
    /**
     * @Attribute ScalingActivityId: The ID of the scaling activity during which one or more SLB instances are attached to the scaling group and the ECS instances in the scaling group are added to the backend server groups of the SLB instances.
Note This parameter is returned only after you set the ForceAttach parameter to true.
     */
    readonly attrScalingActivityId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property serverGroups: A collection of information about server groups.
     */
    serverGroups: Array<RosServerGroupAttachment.ServerGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. Valid values:
     * true
     * false
     * Default value: false.
     */
    forceAttach: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerGroupAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosServerGroupAttachment {
    /**
     * @stability external
     */
    interface ServerGroupsProperty {
        /**
         * @Property type: The type of backend server group.
     * Valid values:
     * ALB
     * NLB
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property port: The port number used by an ECS instance in the scaling group after Auto Scaling adds the ECS instance to backend server group.
     * ALB server group port range [1,65535], NLB server group port range [0,65535].
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property serverGroupId: The ID of backend server group.
         */
        readonly serverGroupId: string | ros.IResolvable;
        /**
         * @Property weight: The weight of an ECS instance in the scaling group as a backend server after Auto Scaling adds the ECS instance to backend server group. Valid values: 0 to 100.
     * If you increase the weight of an ECS instance in a backend server group, the number of access requests that are forwarded to the ECS instance increases. If you set the Weight parameter for an ECS instance in a backend server group to 0, no access requests are forwarded to the ECS instance.
         */
        readonly weight: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosVServerGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-vservergroupattachment
 */
export interface RosVServerGroupAttachmentProps {
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * @Property vServerGroups: A list of vserver groups attached on scaling group
     */
    readonly vServerGroups: Array<RosVServerGroupAttachment.VServerGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property forceAttach: If instances of scaling group are attached\/removed from slb backend server when attach\/detach vserver group from scaling group.
     * Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly forceAttach?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESS::VServerGroupAttachment`, which is used to associate vServer groups of a Sever Load Balancer (SLB) instance with a scaling group.
 * @Note This class does not contain additional functions, so it is recommended to use the `VServerGroupAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-vservergroupattachment
 */
export declare class RosVServerGroupAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::VServerGroupAttachment";
    /**
     * @Attribute ScalingGroupId: The ID of the scaling group.
     */
    readonly attrScalingGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    scalingGroupId: string | ros.IResolvable;
    /**
     * @Property vServerGroups: A list of vserver groups attached on scaling group
     */
    vServerGroups: Array<RosVServerGroupAttachment.VServerGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property forceAttach: If instances of scaling group are attached\/removed from slb backend server when attach\/detach vserver group from scaling group.
     * Valid values:
     * true
     * false
     * Default value: false.
     */
    forceAttach: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVServerGroupAttachmentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVServerGroupAttachment {
    /**
     * @stability external
     */
    interface VServerGroupAttributesProperty {
        /**
         * @Property vServerGroupId: ID of VServer Group.
         */
        readonly vServerGroupId: string | ros.IResolvable;
        /**
         * @Property port: The port will be used for VServer Group backend server.
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property weight: The weight of an ECS instance attached to the VServer Group.
     * Default value: 50.
         */
        readonly weight?: number | ros.IResolvable;
    }
}
export declare namespace RosVServerGroupAttachment {
    /**
     * @stability external
     */
    interface VServerGroupsProperty {
        /**
         * @Property loadBalancerId: Load balancer server ID of VServer Group.
         */
        readonly loadBalancerId: string | ros.IResolvable;
        /**
         * @Property vServerGroupAttributes: A list of VServer Group attributes.
         */
        readonly vServerGroupAttributes: Array<RosVServerGroupAttachment.VServerGroupAttributesProperty | ros.IResolvable> | ros.IResolvable;
    }
}
