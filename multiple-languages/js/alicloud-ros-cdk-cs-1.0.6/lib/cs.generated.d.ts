import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::CS::AnyCluster`
 */
export interface RosAnyClusterProps {
    /**
     * @Property clusterConfig: Cluster config.
     */
    readonly clusterConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CS::AnyCluster`
 */
export declare class RosAnyCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::AnyCluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable;
    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable;
    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable;
    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterConfig: Cluster config.
     */
    clusterConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Create a new `ALIYUN::CS::AnyCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAnyClusterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::CS::ClusterNodePool`
 */
export interface RosClusterNodePoolProps {
    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property scalingGroup: The configurations of the scaling group used by the node pool.
     */
    readonly scalingGroup: RosClusterNodePool.ScalingGroupProperty | ros.IResolvable;
    /**
     * @Property autoScaling: The configurations of auto scaling.
     */
    readonly autoScaling?: RosClusterNodePool.AutoScalingProperty | ros.IResolvable;
    /**
     * @Property count: The number of nodes in the node pool.
     */
    readonly count?: number | ros.IResolvable;
    /**
     * @Property kubernetesConfig: The configurations of the ACK cluster.
     */
    readonly kubernetesConfig?: RosClusterNodePool.KubernetesConfigProperty | ros.IResolvable;
    /**
     * @Property management: The configurations of the managed node pool.
     */
    readonly management?: RosClusterNodePool.ManagementProperty | ros.IResolvable;
    /**
     * @Property nodePoolInfo: The configurations of the node pool.
     */
    readonly nodePoolInfo?: RosClusterNodePool.NodePoolInfoProperty | ros.IResolvable;
    /**
     * @Property teeConfig: The configurations of confidential computing.
     */
    readonly teeConfig?: RosClusterNodePool.TeeConfigProperty | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CS::ClusterNodePool`
 */
export declare class RosClusterNodePool extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ClusterNodePool";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute NodePoolId: Cluster node pool ID.
     */
    readonly attrNodePoolId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: Cluster ID.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property scalingGroup: The configurations of the scaling group used by the node pool.
     */
    scalingGroup: RosClusterNodePool.ScalingGroupProperty | ros.IResolvable;
    /**
     * @Property autoScaling: The configurations of auto scaling.
     */
    autoScaling: RosClusterNodePool.AutoScalingProperty | ros.IResolvable | undefined;
    /**
     * @Property count: The number of nodes in the node pool.
     */
    count: number | ros.IResolvable | undefined;
    /**
     * @Property kubernetesConfig: The configurations of the ACK cluster.
     */
    kubernetesConfig: RosClusterNodePool.KubernetesConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property management: The configurations of the managed node pool.
     */
    management: RosClusterNodePool.ManagementProperty | ros.IResolvable | undefined;
    /**
     * @Property nodePoolInfo: The configurations of the node pool.
     */
    nodePoolInfo: RosClusterNodePool.NodePoolInfoProperty | ros.IResolvable | undefined;
    /**
     * @Property teeConfig: The configurations of confidential computing.
     */
    teeConfig: RosClusterNodePool.TeeConfigProperty | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CS::ClusterNodePool`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterNodePoolProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface AutoScalingProperty {
        /**
         * @Property eipBandwidth: The peak bandwidth of the EIP. Unit: Mbps
         */
        readonly eipBandwidth?: number | ros.IResolvable;
        /**
         * @Property type: The instance types that can be used for the auto scaling of the node pool. Valid values:
     * cpu: regular instance.
     * gpu: GPU-accelerated instance.
     * gpushare: shared GPU-accelerated instance.
     * spot: preemptible instance.
     * Default value: cpu.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property isBondEip: Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
     * true: associates an EIP with the node pool.
     * false: does not associate an EIP with the node pool.
     * Default value: false.
         */
        readonly isBondEip?: boolean | ros.IResolvable;
        /**
         * @Property minInstances: The minimum number of Elastic Compute Service (ECS) instances in the scaling group.
         */
        readonly minInstances?: number | ros.IResolvable;
        /**
         * @Property enable: Specifies whether to enable auto scaling. Valid values:
     * true: enables auto scaling.
     * false: disables auto scaling.
     * If you set this parameter to false, other parameters in the auto_scaling section do not take effect.
         */
        readonly enable: boolean | ros.IResolvable;
        /**
         * @Property maxInstances: The maximum number of Elastic Compute Service (ECS) instances in the scaling group.
         */
        readonly maxInstances?: number | ros.IResolvable;
        /**
         * @Property eipInternetChargeType: The billing method of the EIP. Valid values:
     * PayByBandwidth: pay-by-bandwidth.
     * PayByTraffic: pay-by-data-transfer.
     * Default value: PayByBandwidth.
         */
        readonly eipInternetChargeType?: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface DataDisksProperty {
        /**
         * @Property category: The type of data disk. Valid values:
     * cloud: basic disk.
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property encrypted: Specifies whether to encrypt a data disk. Valid values:
     * true: encrypts a data disk.
     * false: does not encrypt a data disk.
     * Default value: false.
         */
        readonly encrypted?: boolean | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of a data disk. The size is measured in GiB.
     * Valid values: 40 to 32768.
         */
        readonly size?: number | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
     * By default, this parameter is empty. This indicates that automatic backup is disabled.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface KubernetesConfigProperty {
        /**
         * @Property cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
     * static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
     * none: This policy indicates that the default CPU affinity is used.
     * Default value: none.
         */
        readonly cpuPolicy?: string | ros.IResolvable;
        /**
         * @Property runtime: The name of the container runtime.
         */
        readonly runtime: string | ros.IResolvable;
        /**
         * @Property cmsEnabled: Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
     * true: installs the CloudMonitor agent on ECS nodes.
     * false: does not install the CloudMonitor agent on ECS nodes.
     * Default value: false.
         */
        readonly cmsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property userData: The user-defined data.
         */
        readonly userData?: string | ros.IResolvable;
        /**
         * @Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
         */
        readonly nodeNameMode?: string | ros.IResolvable;
        /**
         * @Property runtimeVersion: The version of the container runtime.
         */
        readonly runtimeVersion: string | ros.IResolvable;
        /**
         * @Property labels: You can add labels to nodes that are added to the cluster.
         */
        readonly labels?: Array<RosClusterNodePool.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property unschedulable: Set new nodes to unschedulable. If true, newly added nodes become unschedulable after they are registered to the cluster. You can enable scheduling for the nodes on the Nodes page in the console.
         */
        readonly unschedulable?: boolean | ros.IResolvable;
        /**
         * @Property taints: The taints of the nodes.
         */
        readonly taints?: Array<RosClusterNodePool.TaintsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface LabelsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface ManagementProperty {
        /**
         * @Property upgradeConfig: The configurations of auto upgrading. The configurations take effect only when Enable=true is specified.
         */
        readonly upgradeConfig?: RosClusterNodePool.UpgradeConfigProperty | ros.IResolvable;
        /**
         * @Property autoRepair: Specifies whether to enable auto repairing. This parameter takes effect only when Enable=true is specified.
     * true: enables auto repairing.
     * false: disables auto repairing.
         */
        readonly autoRepair?: boolean | ros.IResolvable;
        /**
         * @Property enable: Specifies whether to enable managed node pools. Valid values:
     * true: enables managed node pools.
     * false: disables managed node pools. The other parameters in this section take effect only when Enable=true is specified.
         */
        readonly enable: boolean | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface NodePoolInfoProperty {
        /**
         * @Property resourceGroupId: The ID of the resource group to which the node pool belongs.
         */
        readonly resourceGroupId?: string | ros.IResolvable;
        /**
         * @Property name: The name of the node pool.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface ScalingGroupProperty {
        /**
         * @Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
     * true: supplements preemptible instances.
     * false: does not supplement preemptible instances.
         */
        readonly spotInstanceRemedy?: boolean | ros.IResolvable;
        /**
         * @Property platform: The release version of the operating system. Valid values:
     * CentOS, AliyunLinux, Windows, WindowsCore.
     * Default value: AliyunLinux.
         */
        readonly platform?: string | ros.IResolvable;
        /**
         * @Property dataDisks: The configurations of data disks.
         */
        readonly dataDisks?: Array<RosClusterNodePool.DataDisksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
         */
        readonly systemDiskSize: number | ros.IResolvable;
        /**
         * @Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect when multi_az_policy is set to COST_OPTIMIZED. Valid values:
     * true: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
     * false: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
         */
        readonly compensateWithOnDemand?: boolean | ros.IResolvable;
        /**
         * @Property instanceChargeType: The billing method of nodes in the node pool. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Default value: PostPaid.
         */
        readonly instanceChargeType?: string | ros.IResolvable;
        /**
         * @Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by on_demand_base_capacity. Valid values: 0 to 100.
         */
        readonly onDemandPercentageAboveBaseCapacity?: number | ros.IResolvable;
        /**
         * @Property autoRenew: Specifies whether to enable auto-renewal for nodes in the node pool. This parameter takes effect only when instance_charge_type is set to PrePaid. Valid values:
     * true: enables auto-renewal.
     * false: disables auto-renewal.
     * Default value: true.
         */
        readonly autoRenew?: boolean | ros.IResolvable;
        /**
         * @Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. When the number of pay-as-you-go instances is lower than this value, pay-as-you-go instances are preferably created to meet the required number.
         */
        readonly onDemandBaseCapacity?: number | ros.IResolvable;
        /**
         * @Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
     * PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
     * PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
     * PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
     * PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         */
        readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
        /**
         * @Property imageId: The ID of a custom image. By default, the image provided by ACK is used.
         */
        readonly imageId?: string | ros.IResolvable;
        /**
         * @Property spotPriceLimit: The instance type for preemptible instances and the price limit of the instance type.
         */
        readonly spotPriceLimit?: Array<RosClusterNodePool.SpotPriceLimitProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instanceTypes: The ECS instance types of the nodes.
         */
        readonly instanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Adds labels only to ECS instances.
     * A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:// or http://.
         */
        readonly tags?: RosClusterNodePool.TagsProperty[];
        /**
         * @Property spotStrategy: The type of preemptible instance. Valid values:
     * NoSpot: non-preemptible instance.
     * SpotWithPriceLimit: specifies the highest bid for a preemptible instance.
     * SpotAsPriceGo: automatically submits bids based on the up-to-date market price.
         */
        readonly spotStrategy?: string | ros.IResolvable;
        /**
         * @Property loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
         */
        readonly loginPassword?: string | ros.IResolvable;
        /**
         * @Property multiAzPolicy: The scaling policy of ECS instances in a multi-zone scaling group. Valid values:
     * PRIORITY: the scaling group is scaled based on the VSwitchIds.N parameter. When ECS instances cannot be created in the zone where the vSwitch with the highest priority is deployed, the system attempts to create ECS instances in the zone where the vSwitch with the next highest priority is deployed.
     * COST_OPTIMIZED: ECS instances are created based on the unit price of vCPUs in ascending order. Preemptible instances are preferably created when multiple instance types are specified in the scaling configurations. You can set the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
     * BALANCE: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances are not evenly distributed across multiple zones due to insufficient inventory, you can call the RebalanceInstances operation to balance the instance distribution among zones.
     * Default value: PRIORITY.
         */
        readonly multiAzPolicy?: string | ros.IResolvable;
        /**
         * @Property autoRenewPeriod: The auto-renewal period for nodes in the node pool. This parameter takes effect and is required only when instance_charge_type is set to PrePaid and auto_renew is set to true. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
     * Default value: 1
         */
        readonly autoRenewPeriod?: number | ros.IResolvable;
        /**
         * @Property scalingPolicy: The scaling mode of the scaling group. Valid values:
     * release: the standard mode. ECS instances are created and released based on the resource usage.
     * recycle: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances attached with local disks.
     * Default value:release.
         */
        readonly scalingPolicy?: string | ros.IResolvable;
        /**
         * @Property keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
         */
        readonly keyPair?: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: The IDs of vSwitches.
         */
        readonly vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityGroupId: The ID of the security group to which the nodes belong.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property spotInstancePools: The number of available instance types. The scaling group creates preemptible instances of multiple instance types at the lowest cost. Valid values: 1 to 10.
         */
        readonly spotInstancePools?: number | ros.IResolvable;
        /**
         * @Property period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
     * Default value: 1.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
         */
        readonly internetChargeType?: string | ros.IResolvable;
        /**
         * @Property systemDiskCategory: The type of system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: standard SSD.
     * cloud_essd: enhanced SSD.
     * Default value: cloud_efficiency.
         */
        readonly systemDiskCategory?: string | ros.IResolvable;
        /**
         * @Property internetMaxBandwidthOut: The release version of the operating system. Valid values:
     * CentOS, AliyunLinux, Windows, WindowsCore.
     * Default value: AliyunLinux.
         */
        readonly internetMaxBandwidthOut?: number | ros.IResolvable;
        /**
         * @Property rdsInstances: The IDs of the ApsaraDB RDS instances.
         */
        readonly rdsInstances?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
         */
        readonly periodUnit?: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface SpotPriceLimitProperty {
        /**
         * @Property priceLimit: The price limit of a preemptible instance.
         */
        readonly priceLimit: number | ros.IResolvable;
        /**
         * @Property instanceType: The instance type for preemptible instances.
         */
        readonly instanceType: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface TaintsProperty {
        /**
         * @Property value: undefined
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property effect: The scheduling policy. Valid values:
     * NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
     * NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
     * PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
     * Default value: NoSchedule.
         */
        readonly effect: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface TeeConfigProperty {
        /**
         * @Property teeEnable: Specifies whether to enable confidential computing for the cluster.
         */
        readonly teeEnable: boolean | ros.IResolvable;
    }
}
export declare namespace RosClusterNodePool {
    /**
     * @stability external
     */
    interface UpgradeConfigProperty {
        /**
         * @Property autoUpgrade: Specifies whether to enable auto upgrading. Valid values:
     * true: enables auto upgrading.
     * false: disables auto upgrading.
         */
        readonly autoUpgrade?: boolean | ros.IResolvable;
        /**
         * @Property surgePercentage: The ratio of extra nodes to the nodes in the node pool. You must set this parameter or Surge.
         */
        readonly surgePercentage?: number | ros.IResolvable;
        /**
         * @Property surge: The number of extra nodes that can be added to the node pool during an auto upgrade.
         */
        readonly surge?: number | ros.IResolvable;
        /**
         * @Property maxUnavailable: The maximum number of nodes that can be in the unschedulable state.
     * Valid values: 1 to 1000.
     * Default value: 1.
         */
        readonly maxUnavailable?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::CS::KubernetesCluster`
 */
export interface RosKubernetesClusterProps {
    /**
     * @Property masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
     * List size must be 3, Instance Type can be repeated.
     */
    readonly masterInstanceTypes: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
     */
    readonly masterVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workerVSwitchIds: The virtual switch ID of the worker node.
     */
    readonly workerVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
     * For more information, see CIS reinforcement.
     * Valid values:
     * true: enables CIS reinforcement.
     * false: disables CIS reinforcement.
     * Default value: false.
     */
    readonly cisEnabled?: boolean | ros.IResolvable;
    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;
    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;
    /**
     * @Property cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
     */
    readonly cpuPolicy?: string | ros.IResolvable;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;
    /**
     * @Property formatDisk: Specifies whether to mount a data disk to nodes that are created
     * on existing Elastic Compute Service (ECS) instances. Valid values:
     * true: stores the data of containers and images on a data disk.
     * The original data on the disk will be overwritten.
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last
     * data disk is not initialized, the system automatically formats the data disk to ext4.
     * Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
     * The system does not create or mount a new data disk if no data disk has been
     * mounted to the ECS instances.
     */
    readonly formatDisk?: boolean | ros.IResolvable;
    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;
    /**
     * @Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    readonly keepInstanceName?: boolean | ros.IResolvable;
    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;
    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;
    /**
     * @Property masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
     */
    readonly masterCount?: number | ros.IResolvable;
    /**
     * @Property masterDataDisk: Whether the master node mounts data disks can be selected as:
     * true: mount the data disk
     * false: no data disk is mounted, default is false
     */
    readonly masterDataDisk?: boolean | ros.IResolvable;
    /**
     * @Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
     */
    readonly masterDataDisks?: Array<RosKubernetesCluster.MasterDataDisksProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property masterSystemDiskCategory: Master disk system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    readonly masterSystemDiskCategory?: string | ros.IResolvable;
    /**
     * @Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.
     * Valid values: PL0|PL1|PL2|PL3
     */
    readonly masterSystemDiskPerformanceLevel?: string | ros.IResolvable;
    /**
     * @Property masterSystemDiskSize: Master disk system disk size in GiB.
     * Default to 120.
     */
    readonly masterSystemDiskSize?: number | ros.IResolvable;
    /**
     * @Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
     */
    readonly masterSystemDiskSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * @Property masterZoneIds: Zone ids of master node virtual switches belongs to.
     */
    readonly masterZoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    readonly nodeCidrMask?: string | ros.IResolvable;
    /**
     * @Property nodePortRange: Node service port. The value range is [30000, 65535].
     * Default to 30000-65535.
     */
    readonly nodePortRange?: string | ros.IResolvable;
    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    readonly numOfNodes?: number | ros.IResolvable;
    /**
     * @Property osType: The type of operating system. Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    readonly osType?: string | ros.IResolvable;
    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property platform: The release version of the operating system. Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    readonly platform?: string | ros.IResolvable;
    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
     *  you must specify at least one pod vSwitch in the same zone.
     *  The pod vSwitches cannot be the same as the node vSwitches.
     *  We recommend that you set the mask length of the CIDR block to a value no
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network
     * plug-in is selected for the cluster.
     */
    readonly podVswitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    readonly runtime?: RosKubernetesCluster.RuntimeProperty | ros.IResolvable;
    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;
    /**
     * @Property socEnabled: Valid values:
     * true: enables reinforcement based on classified protection.
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    readonly socEnabled?: boolean | ros.IResolvable;
    /**
     * @Property sshFlags: Whether to enable public network SSH login:
     * true: open
     * false: not open
     */
    readonly sshFlags?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosKubernetesCluster.TagsProperty[];
    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    readonly taint?: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;
    /**
     * @Property timeZone: The time zone of the cluster.
     */
    readonly timeZone?: string | ros.IResolvable;
    /**
     * @Property userCa: The CA of cluster
     */
    readonly userCa?: string | ros.IResolvable;
    /**
     * @Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;
    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;
    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;
    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;
    /**
     * @Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
     */
    readonly workerSystemDiskSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * @Property workerZoneIds: Zone ids of worker node virtual switches belongs to.
     */
    readonly workerZoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CS::KubernetesCluster`
 */
export declare class RosKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::KubernetesCluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable;
    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable;
    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable;
    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
     * List size must be 3, Instance Type can be repeated.
     */
    masterInstanceTypes: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
     */
    masterVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    name: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workerVSwitchIds: The virtual switch ID of the worker node.
     */
    workerVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    addons: Array<RosKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
     * For more information, see CIS reinforcement.
     * Valid values:
     * true: enables CIS reinforcement.
     * false: disables CIS reinforcement.
     * Default value: false.
     */
    cisEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    cloudMonitorFlags: boolean | ros.IResolvable | undefined;
    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    containerCidr: string | ros.IResolvable | undefined;
    /**
     * @Property cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
     */
    cpuPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    disableRollback: boolean | ros.IResolvable | undefined;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    endpointPublicAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property formatDisk: Specifies whether to mount a data disk to nodes that are created
     * on existing Elastic Compute Service (ECS) instances. Valid values:
     * true: stores the data of containers and images on a data disk.
     * The original data on the disk will be overwritten.
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last
     * data disk is not initialized, the system automatically formats the data disk to ext4.
     * Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
     * The system does not create or mount a new data disk if no data disk has been
     * mounted to the ECS instances.
     */
    formatDisk: boolean | ros.IResolvable | undefined;
    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    isEnterpriseSecurityGroup: boolean | ros.IResolvable | undefined;
    /**
     * @Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    keepInstanceName: boolean | ros.IResolvable | undefined;
    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    keyPair: string | ros.IResolvable | undefined;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    kubernetesVersion: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    loadBalancerSpec: string | ros.IResolvable | undefined;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    loginPassword: string | ros.IResolvable | undefined;
    /**
     * @Property masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
     */
    masterCount: number | ros.IResolvable | undefined;
    /**
     * @Property masterDataDisk: Whether the master node mounts data disks can be selected as:
     * true: mount the data disk
     * false: no data disk is mounted, default is false
     */
    masterDataDisk: boolean | ros.IResolvable | undefined;
    /**
     * @Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
     */
    masterDataDisks: Array<RosKubernetesCluster.MasterDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property masterSystemDiskCategory: Master disk system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    masterSystemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.
     * Valid values: PL0|PL1|PL2|PL3
     */
    masterSystemDiskPerformanceLevel: string | ros.IResolvable | undefined;
    /**
     * @Property masterSystemDiskSize: Master disk system disk size in GiB.
     * Default to 120.
     */
    masterSystemDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
     */
    masterSystemDiskSnapshotPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property masterZoneIds: Zone ids of master node virtual switches belongs to.
     */
    masterZoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    nodeCidrMask: string | ros.IResolvable | undefined;
    /**
     * @Property nodePortRange: Node service port. The value range is [30000, 65535].
     * Default to 30000-65535.
     */
    nodePortRange: string | ros.IResolvable | undefined;
    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    numOfNodes: number | ros.IResolvable | undefined;
    /**
     * @Property osType: The type of operating system. Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    osType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property platform: The release version of the operating system. Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    platform: string | ros.IResolvable | undefined;
    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
     *  you must specify at least one pod vSwitch in the same zone.
     *  The pod vSwitches cannot be the same as the node vSwitches.
     *  We recommend that you set the mask length of the CIDR block to a value no
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network
     * plug-in is selected for the cluster.
     */
    podVswitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    proxyMode: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    runtime: RosKubernetesCluster.RuntimeProperty | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    serviceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    snatEntry: boolean | ros.IResolvable | undefined;
    /**
     * @Property socEnabled: Valid values:
     * true: enables reinforcement based on classified protection.
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    socEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property sshFlags: Whether to enable public network SSH login:
     * true: open
     * false: not open
     */
    sshFlags: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tag the cluster.
     */
    tags: RosKubernetesCluster.TagsProperty[] | undefined;
    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    taint: Array<{
        [key: string]: any;
    }> | ros.IResolvable | undefined;
    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    timeoutMins: number | ros.IResolvable | undefined;
    /**
     * @Property timeZone: The time zone of the cluster.
     */
    timeZone: string | ros.IResolvable | undefined;
    /**
     * @Property userCa: The CA of cluster
     */
    userCa: string | ros.IResolvable | undefined;
    /**
     * @Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    workerDataDisk: boolean | ros.IResolvable | undefined;
    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    workerDataDisks: Array<RosKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    workerSystemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    workerSystemDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
     */
    workerSystemDiskSnapshotPolicyId: string | ros.IResolvable | undefined;
    /**
     * @Property workerZoneIds: Zone ids of worker node virtual switches belongs to.
     */
    workerZoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CS::KubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKubernetesClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    interface AddonsProperty {
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: Addon plugin name
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    interface MasterDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
export declare namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    interface RuntimeProperty {
        /**
         * @Property version: The version of the container runtime.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property name: The name of the container runtime. Supports containerd, docker or sandboxed-container.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosKubernetesCluster {
    /**
     * @stability external
     */
    interface WorkerDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::CS::ManagedEdgeKubernetesCluster`
 */
export interface RosManagedEdgeKubernetesClusterProps {
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300]
     */
    readonly numOfNodes: number | ros.IResolvable;
    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosManagedEdgeKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;
    /**
     * @Property clusterSpec: The edge managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    readonly clusterSpec?: string | ros.IResolvable;
    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;
    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;
    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;
    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    readonly nodeCidrMask?: string | ros.IResolvable;
    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    readonly profile?: string | ros.IResolvable;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosManagedEdgeKubernetesCluster.TagsProperty[];
    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;
    /**
     * @Property workerDataDiskCategory: Data disk type.
     */
    readonly workerDataDiskCategory?: string | ros.IResolvable;
    /**
     * @Property workerDataDiskSize: Data disk size in GiB.
     */
    readonly workerDataDiskSize?: number | ros.IResolvable;
    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workerSystemDiskCategory: Worker node system disk type.
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;
    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;
    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CS::ManagedEdgeKubernetesCluster`
 */
export declare class RosManagedEdgeKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ManagedEdgeKubernetesCluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable;
    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable;
    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable;
    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    name: string | ros.IResolvable;
    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300]
     */
    numOfNodes: number | ros.IResolvable;
    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    addons: Array<RosManagedEdgeKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    cloudMonitorFlags: boolean | ros.IResolvable | undefined;
    /**
     * @Property clusterSpec: The edge managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    clusterSpec: string | ros.IResolvable | undefined;
    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    containerCidr: string | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    disableRollback: boolean | ros.IResolvable | undefined;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    endpointPublicAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    isEnterpriseSecurityGroup: boolean | ros.IResolvable | undefined;
    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    keyPair: string | ros.IResolvable | undefined;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    loginPassword: string | ros.IResolvable | undefined;
    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    nodeCidrMask: string | ros.IResolvable | undefined;
    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    profile: string | ros.IResolvable | undefined;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    proxyMode: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    serviceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    snatEntry: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tag the cluster.
     */
    tags: RosManagedEdgeKubernetesCluster.TagsProperty[] | undefined;
    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    timeoutMins: number | ros.IResolvable | undefined;
    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    workerDataDisk: boolean | ros.IResolvable | undefined;
    /**
     * @Property workerDataDiskCategory: Data disk type.
     */
    workerDataDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property workerDataDiskSize: Data disk size in GiB.
     */
    workerDataDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property workerSystemDiskCategory: Worker node system disk type.
     * Default to cloud_efficiency.
     */
    workerSystemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    workerSystemDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedEdgeKubernetesClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface AddonsProperty {
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the add-on.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosManagedEdgeKubernetesCluster {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::CS::ManagedKubernetesCluster`
 */
export interface RosManagedKubernetesClusterProps {
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    readonly vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosManagedKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
     * For more information, see CIS reinforcement.
     * Valid values:
     * true: enables CIS reinforcement.
     * false: disables CIS reinforcement.
     * Default value: false.
     */
    readonly cisEnabled?: boolean | ros.IResolvable;
    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;
    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    readonly clusterSpec?: string | ros.IResolvable;
    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;
    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    readonly encryptionProviderKey?: string | ros.IResolvable;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;
    /**
     * @Property formatDisk: Specifies whether to mount a data disk to nodes that are created
     * on existing Elastic Compute Service (ECS) instances. Valid values:
     * true: stores the data of containers and images on a data disk.
     * The original data on the disk will be overwritten.
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last
     * data disk is not initialized, the system automatically formats the data disk to ext4.
     * Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
     * The system does not create or mount a new data disk if no data disk has been
     * mounted to the ECS instances.
     */
    readonly formatDisk?: boolean | ros.IResolvable;
    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;
    /**
     * @Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    readonly keepInstanceName?: boolean | ros.IResolvable;
    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;
    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;
    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    readonly nodeCidrMask?: string | ros.IResolvable;
    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    readonly numOfNodes?: number | ros.IResolvable;
    /**
     * @Property osType: The type of operating system. Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    readonly osType?: string | ros.IResolvable;
    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property platform: The release version of the operating system. Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    readonly platform?: string | ros.IResolvable;
    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
     *  you must specify at least one pod vSwitch in the same zone.
     *  The pod vSwitches cannot be the same as the node vSwitches.
     *  We recommend that you set the mask length of the CIDR block to a value no
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network
     * plug-in is selected for the cluster.
     */
    readonly podVswitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    readonly runtime?: RosManagedKubernetesCluster.RuntimeProperty | ros.IResolvable;
    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;
    /**
     * @Property socEnabled: Valid values:
     * true: enables reinforcement based on classified protection.
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    readonly socEnabled?: boolean | ros.IResolvable;
    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosManagedKubernetesCluster.TagsProperty[];
    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    readonly taint?: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;
    /**
     * @Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;
    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;
    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosManagedKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;
    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;
    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CS::ManagedKubernetesCluster`
 */
export declare class RosManagedKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ManagedKubernetesCluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable;
    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable;
    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable;
    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    name: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The virtual switch ID of the worker node.
     */
    vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    workerInstanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    addons: Array<RosManagedKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
     * For more information, see CIS reinforcement.
     * Valid values:
     * true: enables CIS reinforcement.
     * false: disables CIS reinforcement.
     * Default value: false.
     */
    cisEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    cloudMonitorFlags: boolean | ros.IResolvable | undefined;
    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    clusterSpec: string | ros.IResolvable | undefined;
    /**
     * @Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    containerCidr: string | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    disableRollback: boolean | ros.IResolvable | undefined;
    /**
     * @Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    encryptionProviderKey: string | ros.IResolvable | undefined;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    endpointPublicAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property formatDisk: Specifies whether to mount a data disk to nodes that are created
     * on existing Elastic Compute Service (ECS) instances. Valid values:
     * true: stores the data of containers and images on a data disk.
     * The original data on the disk will be overwritten.
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last
     * data disk is not initialized, the system automatically formats the data disk to ext4.
     * Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
     * The system does not create or mount a new data disk if no data disk has been
     * mounted to the ECS instances.
     */
    formatDisk: boolean | ros.IResolvable | undefined;
    /**
     * @Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    isEnterpriseSecurityGroup: boolean | ros.IResolvable | undefined;
    /**
     * @Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    keepInstanceName: boolean | ros.IResolvable | undefined;
    /**
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    keyPair: string | ros.IResolvable | undefined;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    kubernetesVersion: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    loadBalancerSpec: string | ros.IResolvable | undefined;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    loginPassword: string | ros.IResolvable | undefined;
    /**
     * @Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    nodeCidrMask: string | ros.IResolvable | undefined;
    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    numOfNodes: number | ros.IResolvable | undefined;
    /**
     * @Property osType: The type of operating system. Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    osType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property platform: The release version of the operating system. Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    platform: string | ros.IResolvable | undefined;
    /**
     * @Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
     *  you must specify at least one pod vSwitch in the same zone.
     *  The pod vSwitches cannot be the same as the node vSwitches.
     *  We recommend that you set the mask length of the CIDR block to a value no
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network
     * plug-in is selected for the cluster.
     */
    podVswitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    proxyMode: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    runtime: RosManagedKubernetesCluster.RuntimeProperty | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    serviceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    snatEntry: boolean | ros.IResolvable | undefined;
    /**
     * @Property socEnabled: Valid values:
     * true: enables reinforcement based on classified protection.
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    socEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property tags: Tag the cluster.
     */
    tags: RosManagedKubernetesCluster.TagsProperty[] | undefined;
    /**
     * @Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    taint: Array<{
        [key: string]: any;
    }> | ros.IResolvable | undefined;
    /**
     * @Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    timeoutMins: number | ros.IResolvable | undefined;
    /**
     * @Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    userData: string | ros.IResolvable | undefined;
    /**
     * @Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    workerDataDisk: boolean | ros.IResolvable | undefined;
    /**
     * @Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    workerDataDisks: Array<RosManagedKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    workerSystemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    workerSystemDiskSize: number | ros.IResolvable | undefined;
    /**
     * @Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CS::ManagedKubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedKubernetesClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface AddonsProperty {
        /**
         * @Property version: When the value is empty, the latest version is selected by default.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: Addon plugin name
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface RuntimeProperty {
        /**
         * @Property version: The version of the container runtime.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property name: The name of the container runtime. Supports containerd, Docker or Sandboxed-Container.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosManagedKubernetesCluster {
    /**
     * @stability external
     */
    interface WorkerDataDisksProperty {
        /**
         * @Property category: Data disk type. Value includes:
     * cloud: ordinary cloud disk
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
         */
        readonly category: string | ros.IResolvable;
        /**
         * @Property size: Data disk size in GiB.
         */
        readonly size: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::CS::ServerlessKubernetesCluster`
 */
export interface RosServerlessKubernetesClusterProps {
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosServerlessKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;
    /**
     * @Property natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
     */
    readonly natGateway?: boolean | ros.IResolvable;
    /**
     * @Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    readonly privateZone?: boolean | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;
    /**
     * @Property tags: Tag the cluster.
     */
    readonly tags?: RosServerlessKubernetesCluster.TagsProperty[];
    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::CS::ServerlessKubernetesCluster`
 */
export declare class RosServerlessKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CS::ServerlessKubernetesCluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute APIServerSLBId: The id of API server SLB
     */
    readonly attrApiServerSlbId: ros.IResolvable;
    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrDefaultUserKubeConfig: ros.IResolvable;
    /**
     * @Attribute Nodes: The list of cluster nodes.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * @Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    readonly attrPrivateUserKubConfig: ros.IResolvable;
    /**
     * @Attribute ScalingConfigurationId: Scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * @Attribute ScalingGroupId: Scaling group id
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * @Attribute ScalingRuleId: Scaling rule id
     */
    readonly attrScalingRuleId: ros.IResolvable;
    /**
     * @Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * @Attribute WorkerRamRoleName: Worker ram role name.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    name: string | ros.IResolvable;
    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    addons: Array<RosServerlessKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
     */
    endpointPublicAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    kubernetesVersion: string | ros.IResolvable | undefined;
    /**
     * @Property natGateway: Whether to create a NAT gateway. The value can be true or false. If not set, the system defaults to false.
     */
    natGateway: boolean | ros.IResolvable | undefined;
    /**
     * @Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    privateZone: boolean | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    serviceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tag the cluster.
     */
    tags: RosServerlessKubernetesCluster.TagsProperty[] | undefined;
    /**
     * @Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone ID.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::CS::ServerlessKubernetesCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerlessKubernetesClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosServerlessKubernetesCluster {
    /**
     * @stability external
     */
    interface AddonsProperty {
        /**
         * @Property config: When the value is empty, no configuration is required.
         */
        readonly config?: string | ros.IResolvable;
        /**
         * @Property disabled: Specifies whether to disable default installation.
         */
        readonly disabled?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the add-on.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosServerlessKubernetesCluster {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: Tag value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
//# sourceMappingURL=cs.generated.d.ts.map