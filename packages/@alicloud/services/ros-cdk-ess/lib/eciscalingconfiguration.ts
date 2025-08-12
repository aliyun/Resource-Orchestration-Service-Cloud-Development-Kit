import * as ros from '@alicloud/ros-cdk-core';
import { RosEciScalingConfiguration } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEciScalingConfiguration as EciScalingConfigurationProperty };

/**
 * Properties for defining a `EciScalingConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-eciscalingconfiguration
 */
export interface EciScalingConfigurationProps {

    /**
     * Property containerGroupName: The name of the elastic container instance.
     */
    readonly containerGroupName: string | ros.IResolvable;

    /**
     * Property scalingConfigurationName: The name of the scaling configuration. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
     * The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
     */
    readonly scalingConfigurationName: string | ros.IResolvable;

    /**
     * Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance. Elastic container instances that are associated with the same security group can access each other.
     * If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * Property acrRegistryInfos:
     */
    readonly acrRegistryInfos?: Array<RosEciScalingConfiguration.AcrRegistryInfosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property activeDeadlineSeconds: The validity period of the scaling configuration. Unit: seconds.
     */
    readonly activeDeadlineSeconds?: number | ros.IResolvable;

    /**
     * Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance.
     */
    readonly autoCreateEip?: boolean | ros.IResolvable;

    /**
     * Property autoMatchImageCache: Specifies whether to automatically match the image cache. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly autoMatchImageCache?: boolean | ros.IResolvable;

    /**
     * Property containers:
     */
    readonly containers?: Array<RosEciScalingConfiguration.ContainersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property costOptimization: Specifies whether to enable the Cost Optimization feature. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly costOptimization?: boolean | ros.IResolvable;

    /**
     * Property cpu: The number of vCPUs that you want to allocate to the elastic container instance.
     */
    readonly cpu?: number | ros.IResolvable;

    /**
     * Property cpuOptionsCore: The number of physical CPU cores. You can specify this parameter for only specific instance types. For more information, see Specify custom CPU options.
     */
    readonly cpuOptionsCore?: number | ros.IResolvable;

    /**
     * Property cpuOptionsThreadsPerCore: The number of threads per core. You can specify this parameter for only specific instance types. If you set this parameter to 1, Hyper-Threading is disabled. For more information, see Specify custom CPU options.
     */
    readonly cpuOptionsThreadsPerCore?: number | ros.IResolvable;

    /**
     * Property dataCacheBucket: The bucket that stores data caches.
     */
    readonly dataCacheBucket?: string | ros.IResolvable;

    /**
     * Property dataCacheBurstingEnabled: Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk used for data caching. Valid values:
     * true
     * false
     * Default value: false.
     * Note
     * For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
     */
    readonly dataCacheBurstingEnabled?: boolean | ros.IResolvable;

    /**
     * Property dataCachePl: The performance level (PL) of the disk used for data caching. We recommend that you use ESSDs. Valid values if you use ESSDs:
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
     * Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching. Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, where Baseline IOPS = min{1800 + 50 × Capacity - 50000}.
     * Note
     * For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
     */
    readonly dataCacheProvisionedIops?: number | ros.IResolvable;

    /**
     * Property dnsConfigNameServers: The IP addresses of the DNS servers.
     */
    readonly dnsConfigNameServers?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property dnsConfigOptions:
     */
    readonly dnsConfigOptions?: Array<RosEciScalingConfiguration.DnsConfigOptionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property dnsConfigSearches: The search domains of the DNS server.
     */
    readonly dnsConfigSearches?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property dnsPolicy: The Domain Name System (DNS) policy. Valid values:
     * None: uses the DNS that is specified by DnsConfig.
     * Default: uses the DNS that is specified for the runtime environment.
     */
    readonly dnsPolicy?: string | ros.IResolvable;

    /**
     * Property egressBandwidth: The maximum outbound bandwidth. Unit: bytes.
     */
    readonly egressBandwidth?: number | ros.IResolvable;

    /**
     * Property eipBandwidth: The bandwidth of the EIP. Default value: 5. Unit: Mbit\/s.
     */
    readonly eipBandwidth?: number | ros.IResolvable;

    /**
     * Property ephemeralStorage: The size of the temporary storage space. By default, an enhanced SSD (ESSD) of the PL1 level is used. Unit: GiB.
     */
    readonly ephemeralStorage?: number | ros.IResolvable;

    /**
     * Property hostAliases:
     */
    readonly hostAliases?: Array<RosEciScalingConfiguration.HostAliasesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property hostName: The hostname of the elastic container instance.
     */
    readonly hostName?: string | ros.IResolvable;

    /**
     * Property imageRegistryCredentials:
     */
    readonly imageRegistryCredentials?: Array<RosEciScalingConfiguration.ImageRegistryCredentialsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property imageSnapshotId: The ID of the image cache snapshot.
     */
    readonly imageSnapshotId?: string | ros.IResolvable;

    /**
     * Property ingressBandwidth: The maximum inbound bandwidth. Unit: bytes.
     */
    readonly ingressBandwidth?: number | ros.IResolvable;

    /**
     * Property initContainers:
     */
    readonly initContainers?: Array<RosEciScalingConfiguration.InitContainersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property instanceFamilyLevel: The level of the instance family. You can use this parameter to filter instance types that meet the specified criteria. This parameter takes effect only if you set CostOptimization to true. Valid values:
     * EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which CPU utilization is low. For more information, see Shared instance families.
     * EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see Overview of instance families.
     * CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see Overview of burstable instances.
     */
    readonly instanceFamilyLevel?: string | ros.IResolvable;

    /**
     * Property instanceTypes: The specified ECS instance types. You can specify up to five ECS instance types. For more information, see Specify ECS instance types to create an elastic container instance.
     */
    readonly instanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ipv6AddressCount: The number of IPv6 addresses.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;

    /**
     * Property loadBalancerWeight: The weight of the elastic container instance as a backend server. Valid values: 1 to 100.
     * Default value: 50.
     */
    readonly loadBalancerWeight?: number | ros.IResolvable;

    /**
     * Property memory: The memory size that you want to allocate to the elastic container instance. Unit: GiB.
     */
    readonly memory?: number | ros.IResolvable;

    /**
     * Property ntpServers: The Network Time Protocol (NTP) server.
     */
    readonly ntpServers?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance. Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see Use an instance RAM role by calling API operations.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property restartPolicy: The restart policy of the elastic container instance. Valid values:
     * Always: always restarts the elastic container instance.
     * Never: never restarts the elastic container instance.
     * OnFailure: restarts the elastic container instance upon failures.
     * Default value: Always.
     */
    readonly restartPolicy?: string | ros.IResolvable;

    /**
     * Property securityContextSysctls:
     */
    readonly securityContextSysctls?: Array<RosEciScalingConfiguration.SecurityContextSysctlsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance. The value can be accurate to three decimal places.
     * If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
     */
    readonly spotPriceLimit?: number | ros.IResolvable;

    /**
     * Property spotStrategy: The bidding policy of the instance. Valid values:
     * NoSpot: The instance is created as a pay-as-you-go instance.
     * SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
     * SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * Property tags:
     */
    readonly tags?: RosEciScalingConfiguration.TagsProperty[];

    /**
     * Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped. Unit: seconds.
     */
    readonly terminationGracePeriodSeconds?: number | ros.IResolvable;

    /**
     * Property volumes:
     */
    readonly volumes?: Array<RosEciScalingConfiguration.VolumesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `EciScalingConfiguration`.
 */
export interface IEciScalingConfiguration extends ros.IResource {
    readonly props: EciScalingConfigurationProps;

    /**
     * Attribute ScalingConfigurationId: The ID of the elastic container instance.
     */
    readonly attrScalingConfigurationId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESS::EciScalingConfiguration`, which is used to define a scaling configuration of the Elastic Container Instance type in Auto Scaling.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEciScalingConfiguration`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-eciscalingconfiguration
 */
export class EciScalingConfiguration extends ros.Resource implements IEciScalingConfiguration {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EciScalingConfigurationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ScalingConfigurationId: The ID of the elastic container instance.
     */
    public readonly attrScalingConfigurationId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EciScalingConfigurationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEciScalingConfiguration = new RosEciScalingConfiguration(this, id,  {
            scalingConfigurationName: props.scalingConfigurationName,
            ntpServers: props.ntpServers,
            resourceGroupId: props.resourceGroupId,
            memory: props.memory,
            dnsConfigSearches: props.dnsConfigSearches,
            dataCachePl: props.dataCachePl,
            containers: props.containers,
            cpu: props.cpu,
            containerGroupName: props.containerGroupName,
            ingressBandwidth: props.ingressBandwidth,
            imageSnapshotId: props.imageSnapshotId,
            dataCacheProvisionedIops: props.dataCacheProvisionedIops,
            egressBandwidth: props.egressBandwidth,
            volumes: props.volumes,
            ramRoleName: props.ramRoleName,
            autoMatchImageCache: props.autoMatchImageCache,
            dataCacheBucket: props.dataCacheBucket,
            ipv6AddressCount: props.ipv6AddressCount,
            dnsConfigOptions: props.dnsConfigOptions,
            spotPriceLimit: props.spotPriceLimit,
            instanceTypes: props.instanceTypes,
            tags: props.tags,
            hostName: props.hostName,
            spotStrategy: props.spotStrategy,
            dnsConfigNameServers: props.dnsConfigNameServers,
            activeDeadlineSeconds: props.activeDeadlineSeconds,
            acrRegistryInfos: props.acrRegistryInfos,
            initContainers: props.initContainers,
            loadBalancerWeight: props.loadBalancerWeight,
            cpuOptionsThreadsPerCore: props.cpuOptionsThreadsPerCore,
            dataCacheBurstingEnabled: props.dataCacheBurstingEnabled,
            terminationGracePeriodSeconds: props.terminationGracePeriodSeconds,
            scalingGroupId: props.scalingGroupId,
            securityGroupId: props.securityGroupId,
            restartPolicy: props.restartPolicy,
            cpuOptionsCore: props.cpuOptionsCore,
            autoCreateEip: props.autoCreateEip,
            costOptimization: props.costOptimization,
            hostAliases: props.hostAliases,
            securityContextSysctls: props.securityContextSysctls,
            eipBandwidth: props.eipBandwidth,
            imageRegistryCredentials: props.imageRegistryCredentials,
            dnsPolicy: props.dnsPolicy,
            instanceFamilyLevel: props.instanceFamilyLevel,
            ephemeralStorage: props.ephemeralStorage,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEciScalingConfiguration;
        this.attrScalingConfigurationId = rosEciScalingConfiguration.attrScalingConfigurationId;
    }
}
