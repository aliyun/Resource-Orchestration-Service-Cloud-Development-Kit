import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAutoScaleConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
 */
export interface RosAutoScaleConfigProps {
    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property enableAutoGrow: Specifies whether to enable auto scale-out. Valid values:
     * true: enables auto scale-out.
     * false: disables auto scale-out
     * Default value: false
     */
    readonly enableAutoGrow?: boolean | ros.IResolvable;
    /**
     * @Property enableAutoShrink: Specifies whether to enable auto scale-in. Valid values:
     * true: enables auto scale-in.
     * false: disables auto scale-in
     * Default value: false
     */
    readonly enableAutoShrink?: boolean | ros.IResolvable;
    /**
     * @Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
     */
    readonly excludeNodes?: string | ros.IResolvable;
    /**
     * @Property extraNodesGrowRatio: The percentage of extra compute nodes.
     * Default value: 0
     */
    readonly extraNodesGrowRatio?: number | ros.IResolvable;
    /**
     * @Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes.
     * Default value: 2
     */
    readonly growIntervalInMinutes?: number | ros.IResolvable;
    /**
     * @Property growRatio: The percentage of each round of scale-out.
     * Default value: 100
     */
    readonly growRatio?: number | ros.IResolvable;
    /**
     * @Property growTimeoutInMinutes: The scale-out timeout period. Unit: minutes.
     * Default value: 20
     */
    readonly growTimeoutInMinutes?: number | ros.IResolvable;
    /**
     * @Property imageId: The ID of the image.
     * If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
     * If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
     * If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * @Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
     * Default value: 100
     */
    readonly maxNodesInCluster?: number | ros.IResolvable;
    /**
     * @Property queues:
     */
    readonly queues?: Array<RosAutoScaleConfig.QueuesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
     * Default value: 3
     */
    readonly shrinkIdleTimes?: number | ros.IResolvable;
    /**
     * @Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes.
     * Default value: 2
     */
    readonly shrinkIntervalInMinutes?: number | ros.IResolvable;
    /**
     * @Property spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
     */
    readonly spotPriceLimit?: number | ros.IResolvable;
    /**
     * @Property spotStrategy: The preemption policy of the compute nodes. Valid values:
     * NoSpot: The compute nodes are pay-as-you-go instances.
     * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
     * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot
     */
    readonly spotStrategy?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EHPC::AutoScaleConfig`, which is used to configure the auto scaling settings of a cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `AutoScaleConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
 */
export declare class RosAutoScaleConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EHPC::AutoScaleConfig";
    /**
     * @Attribute ClusterId: Cluster Id.
     */
    readonly attrClusterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: Cluster ID.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property enableAutoGrow: Specifies whether to enable auto scale-out. Valid values:
     * true: enables auto scale-out.
     * false: disables auto scale-out
     * Default value: false
     */
    enableAutoGrow: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAutoShrink: Specifies whether to enable auto scale-in. Valid values:
     * true: enables auto scale-in.
     * false: disables auto scale-in
     * Default value: false
     */
    enableAutoShrink: boolean | ros.IResolvable | undefined;
    /**
     * @Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes. Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
     */
    excludeNodes: string | ros.IResolvable | undefined;
    /**
     * @Property extraNodesGrowRatio: The percentage of extra compute nodes.
     * Default value: 0
     */
    extraNodesGrowRatio: number | ros.IResolvable | undefined;
    /**
     * @Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out. Unit: minutes.
     * Default value: 2
     */
    growIntervalInMinutes: number | ros.IResolvable | undefined;
    /**
     * @Property growRatio: The percentage of each round of scale-out.
     * Default value: 100
     */
    growRatio: number | ros.IResolvable | undefined;
    /**
     * @Property growTimeoutInMinutes: The scale-out timeout period. Unit: minutes.
     * Default value: 20
     */
    growTimeoutInMinutes: number | ros.IResolvable | undefined;
    /**
     * @Property imageId: The ID of the image.
     * If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
     * If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
     * If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
     * Default value: 100
     */
    maxNodesInCluster: number | ros.IResolvable | undefined;
    /**
     * @Property queues:
     */
    queues: Array<RosAutoScaleConfig.QueuesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
     * Default value: 3
     */
    shrinkIdleTimes: number | ros.IResolvable | undefined;
    /**
     * @Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in. Unit: minutes.
     * Default value: 2
     */
    shrinkIntervalInMinutes: number | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: The maximum hourly price of the compute nodes. The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
     */
    spotPriceLimit: number | ros.IResolvable | undefined;
    /**
     * @Property spotStrategy: The preemption policy of the compute nodes. Valid values:
     * NoSpot: The compute nodes are pay-as-you-go instances.
     * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
     * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot
     */
    spotStrategy: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoScaleConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosAutoScaleConfig {
    /**
     * @stability external
     */
    interface DataDisksProperty {
        /**
         * @Property dataDiskKmsKeyId: The KMS key ID of the data disk.
         */
        readonly dataDiskKmsKeyId?: string | ros.IResolvable;
        /**
         * @Property dataDiskPerformanceLevel: The performance level of the ESSD used as the data disk. The parameter takes effect only when the Queues.N.DataDisks.M.DataDiskCategory parameter is set to cloud_essd. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
     * Default value: PL1
         */
        readonly dataDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property dataDiskEncrypted: Specifies whether to encrypt the data disk.
         */
        readonly dataDiskEncrypted?: boolean | ros.IResolvable;
        /**
         * @Property dataDiskDeleteWithInstance: Specifies whether the data disk is released when the node is released.
         */
        readonly dataDiskDeleteWithInstance?: boolean | ros.IResolvable;
        /**
         * @Property dataDiskSize: The size of the data disk. Unit: GB.
     * Default value: 40
         */
        readonly dataDiskSize?: number | ros.IResolvable;
        /**
         * @Property dataDiskCategory: The type of the data disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: SSD.
     * cloud_essd: ESSD.
     * Default value: cloud_efficiency
         */
        readonly dataDiskCategory?: string | ros.IResolvable;
    }
}
export declare namespace RosAutoScaleConfig {
    /**
     * @stability external
     */
    interface InstanceTypesProperty {
        /**
         * @Property zoneId: The zone ID of the compute nodes that are automatically added in the queue belongs.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The vSwitch ID of the compute nodes that are automatically added in the queue.
         */
        readonly vSwitchId: string | ros.IResolvable;
        /**
         * @Property spotPriceLimit: The maximum hourly price of the compute nodes that are automatically added in the queue. The value can be accurate to three decimal places. The parameter takes effect only when Queues.N.InstanceTypes.M.SpotStrategy is set to SpotWithPriceLimit
         */
        readonly spotPriceLimit?: number | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the compute nodes that are automatically added in the queue.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property spotStrategy: The bidding method of the compute nodes that are automatically added in the queue. Valid values:
     * NoSpot: The compute nodes are pay-as-you-go instances.
     * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
     * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot
         */
        readonly spotStrategy?: string | ros.IResolvable;
    }
}
export declare namespace RosAutoScaleConfig {
    /**
     * @stability external
     */
    interface QueuesProperty {
        /**
         * @Property hostNameSuffix: The hostname suffix of the host that is used to perform scale-out for the queue. You can manage nodes that have a specified hostname suffix.
         */
        readonly hostNameSuffix?: string | ros.IResolvable;
        /**
         * @Property minNodesInQueue: The minimum number of the compute nodes that can be removed in the queue.
     * Default value: 0
         */
        readonly minNodesInQueue?: number | ros.IResolvable;
        /**
         * @Property maxNodesInQueue: The maximum number of the compute nodes that can be added in the queue.
     * Default value: 100
         */
        readonly maxNodesInQueue?: number | ros.IResolvable;
        /**
         * @Property enableAutoGrow: Specifies whether the queue enables auto scale-out. Valid values:
     * true: enables auto scale-out.
     * false: disables auto scale-out
     * Default value: false
         */
        readonly enableAutoGrow?: boolean | ros.IResolvable;
        /**
         * @Property dataDisks: undefined
         */
        readonly dataDisks?: Array<RosAutoScaleConfig.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property systemDiskSize: The size of the system disk specified for the compute nodes that are added in the queue. Unit: GB.
     * Default value: 40
         */
        readonly systemDiskSize?: number | ros.IResolvable;
        /**
         * @Property systemDiskLevel: The performance level of the system disk specified for the compute nodes that are added in the queue. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 random read\/write IOPS.
     * PL1: A single ESSD can deliver up to 50,000 random read\/write IOPS.
     * PL2: A single ESSD can deliver up to 100,000 random read\/write IOPS.
     * PL3: A single ESSD can deliver up to 1,000,000 random read\/write IOPS.
     * Default value: PL1
         */
        readonly systemDiskLevel?: string | ros.IResolvable;
        /**
         * @Property queueImageId: The image ID of the queue where scale-out is performed.
     * If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
     * If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
     * If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
         */
        readonly queueImageId?: string | ros.IResolvable;
        /**
         * @Property minNodesPerCycle: The minimum number of compute nodes that can be added in each round of scale-out.
     * Default value: 1
         */
        readonly minNodesPerCycle?: number | ros.IResolvable;
        /**
         * @Property maxNodesPerCycle: The maximum number of compute nodes that can be added in each round of scale-out.
     * Default value: 0
         */
        readonly maxNodesPerCycle?: number | ros.IResolvable;
        /**
         * @Property enableAutoShrink: Specifies whether the queue enables auto scale-in. Valid values:
     * true: enables auto scale-in.
     * false: disables auto scale-in
     * Default value: false
         */
        readonly enableAutoShrink?: boolean | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The type of the system disk specified for the compute nodes that are added in the queue. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: SSD.
     * cloud_essd: ESSD.
     * Default value: cloud_efficiency
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property hostNamePrefix: The hostname prefix of the host that is used to perform scale-out for the queue. You can manage compute nodes that have a specified hostname prefix.
         */
        readonly hostNamePrefix?: string | ros.IResolvable;
        /**
         * @Property spotPriceLimit: The maximum hourly price of the compute nodes that are automatically added in the queue. The value can be accurate to three decimal places. The parameter takes effect only when Queues.N.SpotStrategy is set to SpotWithPriceLimit.
         */
        readonly spotPriceLimit?: number | ros.IResolvable;
        /**
         * @Property instanceTypes: undefined
         */
        readonly instanceTypes?: Array<RosAutoScaleConfig.InstanceTypesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceType: The instance type of the compute nodes that are automatically added in the queue.
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property queueName: The name of the queue.
         */
        readonly queueName?: string | ros.IResolvable;
        /**
         * @Property spotStrategy: The bidding method of the compute nodes that are automatically added in the queue. Valid values:
     * NoSpot: The compute nodes are pay-as-you-go instances.
     * SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
     * SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot
         */
        readonly spotStrategy?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
 */
export interface RosClusterProps {
    /**
     * @Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.
     */
    readonly ecsOrderComputeCount: number | ros.IResolvable;
    /**
     * @Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    readonly ecsOrderComputeInstanceType: string | ros.IResolvable;
    /**
     * @Property ecsOrderLoginCount: Login node number can only be 1.
     */
    readonly ecsOrderLoginCount: number | ros.IResolvable;
    /**
     * @Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    readonly ecsOrderLoginInstanceType: string | ros.IResolvable;
    /**
     * @Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    readonly ecsOrderManagerInstanceType: string | ros.IResolvable;
    /**
     * @Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    readonly osTag: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property accountType: The service type of the domain account. Valid values:
     * nis
     * ldap
     * Default value: nis
     */
    readonly accountType?: string | ros.IResolvable;
    /**
     * @Property additionalVolumes:
     */
    readonly additionalVolumes?: Array<RosCluster.AdditionalVolumesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
     */
    readonly application?: Array<RosCluster.ApplicationProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property autoRenew: true: automatic renewals; false: no automatic renewals.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number.
     * You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
     */
    readonly clientVersion?: string | ros.IResolvable;
    /**
     * @Property computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values:
     * true: Hyper-threading is supported.
     * false: Hyper-threading is not supported.
     * Default value: true
     */
    readonly computeEnableHt?: boolean | ros.IResolvable;
    /**
     * @Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    readonly computeSpotPriceLimit?: string | ros.IResolvable;
    /**
     * @Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
     */
    readonly computeSpotStrategy?: string | ros.IResolvable;
    /**
     * @Property deployMode: The mode in which the cluster is deployed. Valid values:
     * Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
     * Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
     * Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
     * Default value: Standard
     */
    readonly deployMode?: string | ros.IResolvable;
    /**
     * @Property description: Cluster description, 2 to 128 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    readonly ecsChargeType?: string | ros.IResolvable;
    /**
     * @Property ecsOrderManagerCount: Control node number can be 1, 2
     */
    readonly ecsOrderManagerCount?: number | ros.IResolvable;
    /**
     * @Property ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
     */
    readonly ehpcVersion?: string | ros.IResolvable;
    /**
     * @Property haEnable: Specifies whether to enable the high availability feature. Valid values:
     * true: enables the high availability feature
     * false: disables the high availability feature
     * Default value: false
     * Note If high availability is enabled, primary management nodes and secondary management nodes are used.
     */
    readonly haEnable?: boolean | ros.IResolvable;
    /**
     * @Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * @Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    readonly imageOwnerAlias?: string | ros.IResolvable;
    /**
     * @Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
     */
    readonly inputFileUrl?: string | ros.IResolvable;
    /**
     * @Property isComputeEss: Specifies whether to enable auto scaling. Valid values:
     * true: enables auto scaling
     * false: disables auto scaling
     * Default value: false
     */
    readonly isComputeEss?: boolean | ros.IResolvable;
    /**
     * @Property jobQueue: 	The queue to which the compute nodes are added.
     */
    readonly jobQueue?: string | ros.IResolvable;
    /**
     * @Property keyPairName: Key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * @Property networkInterfaceTrafficMode: Communication mode of an elastic NIC. Value values:
     * - **Standard**: The TCP communication mode is used.
     * - **HighPerformance**: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
     */
    readonly networkInterfaceTrafficMode?: string | ros.IResolvable;
    /**
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, \/ Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property period: The purchase of long resources, units: week \/ month \/ year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week \/ Month \/ year.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property postInstallScript:
     */
    readonly postInstallScript?: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound.
     * When the value of DeployMode is Standard, the value range: scheduler, account, login, compute.
     * When the value of DeployMode is Simple, the value range: manager, login, compute.
     * When the value of DeployMode is Tiny, the value range: manager, compute.
     */
    readonly ramNodeTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ramRoleName: The name of the Resource Access Management (RAM) role.
     * You can call the ListRoles operation provided by RAM to query the created RAM roles.
     */
    readonly ramRoleName?: string | ros.IResolvable;
    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: \/ RemoteDirectory
     */
    readonly remoteDirectory?: string | ros.IResolvable;
    /**
     * @Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values:
     * true: enables VNC
     * false: disables VNC
     * Default value: false
     */
    readonly remoteVisEnable?: boolean | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     * You can call the ListResourceGroups operation to obtain the ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    readonly sccClusterId?: string | ros.IResolvable;
    /**
     * @Property schedulerType: The type of the scheduler. Valid values:
     * pbs
     * slurm
     * opengridscheduler
     * deadline
     * Default value: pbs
     */
    readonly schedulerType?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
     */
    readonly securityGroupName?: string | ros.IResolvable;
    /**
     * @Property systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 input\/output operations per second (IOPS) of random read\/write.
     * PL1: A single ESSD can deliver up to 50,000 IOPS of random read\/write.
     * PL2: A single ESSD can deliver up to 100,000 IOPS of random read\/write.
     * PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read\/write.
     * Default value: PL1
     */
    readonly systemDiskLevel?: string | ros.IResolvable;
    /**
     * @Property systemDiskSize: The size of the system disk. Unit: GB
     * Valid values: 40 to 500
     * Default value: 40
     */
    readonly systemDiskSize?: number | ros.IResolvable;
    /**
     * @Property systemDiskType: The type of the system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: SSD.
     * cloud_essd: ESSD.
     * Default value: cloud_ssd
     */
    readonly systemDiskType?: string | ros.IResolvable;
    /**
     * @Property volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
     */
    readonly volumeId?: string | ros.IResolvable;
    /**
     * @Property volumeMountpoint: The mount target of the file system. Take note of the following information:
     * If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
     * If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
     */
    readonly volumeMountpoint?: string | ros.IResolvable;
    /**
     * @Property volumeProtocol: The type of the protocol that is used by the file system. Valid values:
     * nfs
     * smb
     * Default value: nfs
     */
    readonly volumeProtocol?: string | ros.IResolvable;
    /**
     * @Property volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
     */
    readonly volumeType?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
     */
    readonly withoutElasticIp?: boolean | ros.IResolvable;
    /**
     * @Property zoneId: Available area ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EHPC::Cluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EHPC::Cluster";
    /**
     * @Attribute ClusterId: Cluster Id.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
     */
    readonly attrEcsInfo: ros.IResolvable;
    /**
     * @Attribute Name: Cluster name.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.
     */
    ecsOrderComputeCount: number | ros.IResolvable;
    /**
     * @Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    ecsOrderComputeInstanceType: string | ros.IResolvable;
    /**
     * @Property ecsOrderLoginCount: Login node number can only be 1.
     */
    ecsOrderLoginCount: number | ros.IResolvable;
    /**
     * @Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    ecsOrderLoginInstanceType: string | ros.IResolvable;
    /**
     * @Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    ecsOrderManagerInstanceType: string | ros.IResolvable;
    /**
     * @Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    name: string | ros.IResolvable;
    /**
     * @Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    osTag: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property accountType: The service type of the domain account. Valid values:
     * nis
     * ldap
     * Default value: nis
     */
    accountType: string | ros.IResolvable | undefined;
    /**
     * @Property additionalVolumes:
     */
    additionalVolumes: Array<RosCluster.AdditionalVolumesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
     */
    application: Array<RosCluster.ApplicationProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: true: automatic renewals; false: no automatic renewals.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number.
     * You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
     */
    clientVersion: string | ros.IResolvable | undefined;
    /**
     * @Property computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values:
     * true: Hyper-threading is supported.
     * false: Hyper-threading is not supported.
     * Default value: true
     */
    computeEnableHt: boolean | ros.IResolvable | undefined;
    /**
     * @Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    computeSpotPriceLimit: string | ros.IResolvable | undefined;
    /**
     * @Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
     */
    computeSpotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property deployMode: The mode in which the cluster is deployed. Valid values:
     * Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
     * Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
     * Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
     * Default value: Standard
     */
    deployMode: string | ros.IResolvable | undefined;
    /**
     * @Property description: Cluster description, 2 to 128 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    ecsChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property ecsOrderManagerCount: Control node number can be 1, 2
     */
    ecsOrderManagerCount: number | ros.IResolvable | undefined;
    /**
     * @Property ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
     */
    ehpcVersion: string | ros.IResolvable | undefined;
    /**
     * @Property haEnable: Specifies whether to enable the high availability feature. Valid values:
     * true: enables the high availability feature
     * false: disables the high availability feature
     * Default value: false
     * Note If high availability is enabled, primary management nodes and secondary management nodes are used.
     */
    haEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
     */
    imageId: string | ros.IResolvable | undefined;
    /**
     * @Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    imageOwnerAlias: string | ros.IResolvable | undefined;
    /**
     * @Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
     */
    inputFileUrl: string | ros.IResolvable | undefined;
    /**
     * @Property isComputeEss: Specifies whether to enable auto scaling. Valid values:
     * true: enables auto scaling
     * false: disables auto scaling
     * Default value: false
     */
    isComputeEss: boolean | ros.IResolvable | undefined;
    /**
     * @Property jobQueue: 	The queue to which the compute nodes are added.
     */
    jobQueue: string | ros.IResolvable | undefined;
    /**
     * @Property keyPairName: Key pair name.
     */
    keyPairName: string | ros.IResolvable | undefined;
    /**
     * @Property networkInterfaceTrafficMode: Communication mode of an elastic NIC. Value values:
     * - **Standard**: The TCP communication mode is used.
     * - **HighPerformance**: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
     */
    networkInterfaceTrafficMode: string | ros.IResolvable | undefined;
    /**
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, \/ Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property period: The purchase of long resources, units: week \/ month \/ year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week \/ Month \/ year.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property postInstallScript:
     */
    postInstallScript: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound.
     * When the value of DeployMode is Standard, the value range: scheduler, account, login, compute.
     * When the value of DeployMode is Simple, the value range: manager, login, compute.
     * When the value of DeployMode is Tiny, the value range: manager, compute.
     */
    ramNodeTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ramRoleName: The name of the Resource Access Management (RAM) role.
     * You can call the ListRoles operation provided by RAM to query the created RAM roles.
     */
    ramRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: \/ RemoteDirectory
     */
    remoteDirectory: string | ros.IResolvable | undefined;
    /**
     * @Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values:
     * true: enables VNC
     * false: disables VNC
     * Default value: false
     */
    remoteVisEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     * You can call the ListResourceGroups operation to obtain the ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    sccClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property schedulerType: The type of the scheduler. Valid values:
     * pbs
     * slurm
     * opengridscheduler
     * deadline
     * Default value: pbs
     */
    schedulerType: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Security group ID.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
     */
    securityGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 input\/output operations per second (IOPS) of random read\/write.
     * PL1: A single ESSD can deliver up to 50,000 IOPS of random read\/write.
     * PL2: A single ESSD can deliver up to 100,000 IOPS of random read\/write.
     * PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read\/write.
     * Default value: PL1
     */
    systemDiskLevel: string | ros.IResolvable | undefined;
    /**
     * @Property systemDiskSize: The size of the system disk. Unit: GB
     * Valid values: 40 to 500
     * Default value: 40
     */
    systemDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property systemDiskType: The type of the system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: SSD.
     * cloud_essd: ESSD.
     * Default value: cloud_ssd
     */
    systemDiskType: string | ros.IResolvable | undefined;
    /**
     * @Property volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
     */
    volumeId: string | ros.IResolvable | undefined;
    /**
     * @Property volumeMountpoint: The mount target of the file system. Take note of the following information:
     * If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
     * If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
     */
    volumeMountpoint: string | ros.IResolvable | undefined;
    /**
     * @Property volumeProtocol: The type of the protocol that is used by the file system. Valid values:
     * nfs
     * smb
     * Default value: nfs
     */
    volumeProtocol: string | ros.IResolvable | undefined;
    /**
     * @Property volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
     */
    volumeType: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
     */
    withoutElasticIp: boolean | ros.IResolvable | undefined;
    /**
     * @Property zoneId: Available area ID.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface AdditionalVolumesProperty {
        /**
         * @Property volumeProtocol: The type of the protocol that is used by the additional file system. Valid values:
     * nfs
     * smb
     * Default value: nfs
         */
        readonly volumeProtocol?: string | ros.IResolvable;
        /**
         * @Property localDirectory: The local directory to which the additional file system is mounted.
         */
        readonly localDirectory: string | ros.IResolvable;
        /**
         * @Property volumeId: The ID of the additional file system.
         */
        readonly volumeId: string | ros.IResolvable;
        /**
         * @Property remoteDirectory: The remote directory to which the additional file system is mounted.
         */
        readonly remoteDirectory?: string | ros.IResolvable;
        /**
         * @Property volumeType: The type of the additional shared storage. Only nas file systems are supported.
         */
        readonly volumeType?: string | ros.IResolvable;
        /**
         * @Property jobQueue: The queue of the nodes to which the additional file system is attached.
         */
        readonly jobQueue?: string | ros.IResolvable;
        /**
         * @Property volumeMountpoint: The mount target of the additional file system.
         */
        readonly volumeMountpoint: string | ros.IResolvable;
        /**
         * @Property location: The type of the cluster. Valid value: PublicCloud.
         */
        readonly location?: string | ros.IResolvable;
    }
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface ApplicationProperty {
        /**
         * @Property tag: Application software tag (SoftwareTag), for example OpenMPI_11.1.
         */
        readonly tag: string | ros.IResolvable;
    }
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface PostInstallScriptProperty {
        /**
         * @Property args: N-th (n numbered starting from 1, you can have multiple, maximum 16) execution parameters after the installation script.
         */
        readonly args?: string | ros.IResolvable;
        /**
         * @Property url: N-th (n numbered starting with 1, can have multiple, maximum 16) after installation script Download.
         */
        readonly url?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosUsers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
 */
export interface RosUsersProps {
    /**
     * @Property clusterId: The cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property users: The information about the users.
     */
    readonly users: Array<RosUsers.UsersProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EHPC::Users`DATASOURCE::EHPC::Nodes is used to query nodes in an Elastic High Performance Computing (E-HPC) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Users` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
 */
export declare class RosUsers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EHPC::Users";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: The cluster ID.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property users: The information about the users.
     */
    users: Array<RosUsers.UsersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUsersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosUsers {
    /**
     * @stability external
     */
    interface UsersProperty {
        /**
         * @Property group: The permission group to which the user N belongs. Valid values:
     * - **users**: an ordinary permission group. It is applicable to ordinary users that need only to submit and debug jobs.
     * - **wheel**: a sudo permission group. It is applicable to the administrator who needs to manage the cluster. In addition to submitting and debugging jobs, users who have sudo permissions can run sudo commands to install software and restart nodes.
     * Valid values of N: 1 to 100.
         */
        readonly group: string | ros.IResolvable;
        /**
         * @Property password: The password of the Nth user. The password must be 8 to 30 characters in length and contain three of the following items:
     * - Uppercase letter
     * - Lowercase letter
     * - Digit
     * - Special character: ()~!@#$%^&*-_+=|{}[]:;'\/<>,.?\/
     * Valid values of N: 1 to 100.
         */
        readonly password: string | ros.IResolvable;
        /**
         * @Property name: The name of the user that you want to add. The name must be 6 to 30 characters in length and can contain letters, digits, and periods (.). It must start with a letter.
     * Valid values of N: 1 to 100.
         */
        readonly name: string | ros.IResolvable;
    }
}
