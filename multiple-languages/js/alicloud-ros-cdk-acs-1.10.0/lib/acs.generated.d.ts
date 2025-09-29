import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-cluster
 */
export interface RosClusterProps {
    /**
     * @Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property addons: The add-ons to be installed for the cluster.
     */
    readonly addons?: Array<RosCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.pro.small.
     */
    readonly clusterSpec?: string | ros.IResolvable;
    /**
     * @Property computeClass: The compute class of the cluster. This parameter is only used as a parameter query for ZoneIds and is not used in the actual creation.
     */
    readonly computeClass?: string | ros.IResolvable;
    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    readonly deleteOptions?: Array<RosCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;
    /**
     * @Property ipStack: The IP stack of the cluster.
     */
    readonly ipStack?: string | ros.IResolvable;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;
    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;
    /**
     * @Property loggingType: The logging type of the cluster. By default, no logging service is used.
     */
    readonly loggingType?: string | ros.IResolvable;
    /**
     * @Property maintenanceWindow: The maintenance window of the cluster.
     */
    readonly maintenanceWindow?: RosCluster.MaintenanceWindowProperty | ros.IResolvable;
    /**
     * @Property podPostpaidSpec: Postpaid pod spec for inquiry.
     */
    readonly podPostpaidSpec?: RosCluster.PodPostpaidSpecProperty | ros.IResolvable;
    /**
     * @Property podVSwitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
     *  you must specify at least one pod vSwitch in the same zone.
     *  The pod vSwitches cannot be the same as the node vSwitches.
     *  We recommend that you set the mask length of the CIDR block to a value no
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network
     * plug-in is selected for the cluster.
     */
    readonly podVSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;
    /**
     * @Property serviceDiscoveryTypes: Intra-cluster service discovery type,
     * used to specify the service discovery method in the ASK cluster.
     * CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
     * a set of containers needs to be deployed in the cluster for DNS resolution.
     * By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
     * PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
     * the PrivateZone service needs to be enabled.
     * Default value: off
     */
    readonly serviceDiscoveryTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property slsProjectName: The SLS project name of the cluster. If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
     */
    readonly slsProjectName?: string | ros.IResolvable;
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
    readonly tags?: RosCluster.TagsProperty[];
    /**
     * @Property timeZone: The time zone of the cluster.
     */
    readonly timeZone?: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneIds: The zone IDs of the cluster.
     */
    readonly zoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ACS::Cluster`, which is used to create a Container Compute Service (ACS) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-cluster
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACS::Cluster";
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
     * @Attribute IngressSLBId: The id of ingress SLB
     */
    readonly attrIngressSlbId: ros.IResolvable;
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
    addons: Array<RosCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property clusterSpec: The managed cluster spec. Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.pro.small.
     */
    clusterSpec: string | ros.IResolvable | undefined;
    /**
     * @Property computeClass: The compute class of the cluster. This parameter is only used as a parameter query for ZoneIds and is not used in the actual creation.
     */
    computeClass: string | ros.IResolvable | undefined;
    /**
     * @Property deleteOptions: Delete options, only work for deleting resource.
     */
    deleteOptions: Array<RosCluster.DeleteOptionsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    endpointPublicAccess: boolean | ros.IResolvable | undefined;
    /**
     * @Property ipStack: The IP stack of the cluster.
     */
    ipStack: string | ros.IResolvable | undefined;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    kubernetesVersion: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    loadBalancerSpec: string | ros.IResolvable | undefined;
    /**
     * @Property loggingType: The logging type of the cluster. By default, no logging service is used.
     */
    loggingType: string | ros.IResolvable | undefined;
    /**
     * @Property maintenanceWindow: The maintenance window of the cluster.
     */
    maintenanceWindow: RosCluster.MaintenanceWindowProperty | ros.IResolvable | undefined;
    /**
     * @Property podPostpaidSpec: Postpaid pod spec for inquiry.
     */
    podPostpaidSpec: RosCluster.PodPostpaidSpecProperty | ros.IResolvable | undefined;
    /**
     * @Property podVSwitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
     *  you must specify at least one pod vSwitch in the same zone.
     *  The pod vSwitches cannot be the same as the node vSwitches.
     *  We recommend that you set the mask length of the CIDR block to a value no
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network
     * plug-in is selected for the cluster.
     */
    podVSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
     */
    serviceCidr: string | ros.IResolvable | undefined;
    /**
     * @Property serviceDiscoveryTypes: Intra-cluster service discovery type,
     * used to specify the service discovery method in the ASK cluster.
     * CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
     * a set of containers needs to be deployed in the cluster for DNS resolution.
     * By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
     * PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
     * the PrivateZone service needs to be enabled.
     * Default value: off
     */
    serviceDiscoveryTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property slsProjectName: The SLS project name of the cluster. If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
     */
    slsProjectName: string | ros.IResolvable | undefined;
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
    tags: RosCluster.TagsProperty[] | undefined;
    /**
     * @Property timeZone: The time zone of the cluster.
     */
    timeZone: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: VPC ID.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchIds: The IDs of VSwitches. If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    vSwitchIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property zoneIds: The zone IDs of the cluster.
     */
    zoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
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
         * @Property name: The name of the add-on.
         */
        readonly name: string | ros.IResolvable;
    }
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface DeleteOptionsProperty {
        /**
         * @Property deleteMode: Deletion policy of this type of resource. The value can be:
     * - delete: delete the resource.
     * - retain: retain the resource.
         */
        readonly deleteMode?: string | ros.IResolvable;
        /**
         * @Property resourceType: Resource type. The value can be:
     * - SLB: SLB resource created by service. It is deleted by default but can be retained
     * - ALB: ALB Ingress Controller Created ALB resource. It is reserved by default and can be deleted
     * - SLS_Data: log service Project used by the cluster log function. This service is reserved by default and can be deleted
     * - SLS_ControlPlane: Project log service used for logs of the managed cluster control plane. This service is reserved by default and can be deleted
     * - PrivateZone: ACK Serverless PrivateZone resource created in the cluster. It is reserved by default and can be deleted
     *
         */
        readonly resourceType?: string | ros.IResolvable;
    }
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface GpuQuantityConfigsProperty {
        /**
         * @Property gpuModel: The GPU model type.
         */
        readonly gpuModel?: string | ros.IResolvable;
        /**
         * @Property computeQos: The QoS of the GPU compute.
         */
        readonly computeQos?: string | ros.IResolvable;
        /**
         * @Property arch: The architecture of the GPU.
         */
        readonly arch?: string | ros.IResolvable;
        /**
         * @Property gpuQuantity: The number of GPUs.
         */
        readonly gpuQuantity?: number | ros.IResolvable;
    }
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface MaintenanceWindowProperty {
        /**
         * @Property maintenanceTime: The maintenance time of the maintenance window.
         */
        readonly maintenanceTime?: string | ros.IResolvable;
        /**
         * @Property weeklyPeriod: The weekly period of the maintenance window.
         */
        readonly weeklyPeriod?: string | ros.IResolvable;
        /**
         * @Property enable: Whether to enable the maintenance window.
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property duration: The duration of the maintenance window.
         */
        readonly duration?: string | ros.IResolvable;
    }
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface PodPostpaidSpecProperty {
        /**
         * @Property gpuQuantityConfigs: The GPU spec module.
         */
        readonly gpuQuantityConfigs?: RosCluster.GpuQuantityConfigsProperty | ros.IResolvable;
        /**
         * @Property cpuCore: The number of CPU cores.
         */
        readonly cpuCore?: number | ros.IResolvable;
        /**
         * @Property memGib: The memory size of the GPU.
         */
        readonly memGib?: number | ros.IResolvable;
        /**
         * @Property replicas: The number of the replicas.
         */
        readonly replicas?: number | ros.IResolvable;
    }
}
export declare namespace RosCluster {
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
 * Properties for defining a `RosVirtualCapacityReservation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-virtualcapacityreservation
 */
export interface RosVirtualCapacityReservationProps {
    /**
     * @Property podPostpaidSpec: Postpaid pod spec for inquiry.
     */
    readonly podPostpaidSpec?: RosVirtualCapacityReservation.PodPostpaidSpecProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ACS::VirtualCapacityReservation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VirtualCapacityReservation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-virtualcapacityreservation
 */
export declare class RosVirtualCapacityReservation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACS::VirtualCapacityReservation";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property podPostpaidSpec: Postpaid pod spec for inquiry.
     */
    podPostpaidSpec: RosVirtualCapacityReservation.PodPostpaidSpecProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVirtualCapacityReservationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVirtualCapacityReservation {
    /**
     * @stability external
     */
    interface GpuQuantityConfigsProperty {
        /**
         * @Property gpuModel: The GPU model type.
         */
        readonly gpuModel?: string | ros.IResolvable;
        /**
         * @Property computeQos: The QoS of the GPU compute.
         */
        readonly computeQos?: string | ros.IResolvable;
        /**
         * @Property arch: The architecture of the GPU.
         */
        readonly arch?: string | ros.IResolvable;
        /**
         * @Property gpuQuantity: The number of GPUs.
         */
        readonly gpuQuantity?: number | ros.IResolvable;
    }
}
export declare namespace RosVirtualCapacityReservation {
    /**
     * @stability external
     */
    interface PodPostpaidSpecProperty {
        /**
         * @Property gpuQuantityConfigs: The GPU spec module.
         */
        readonly gpuQuantityConfigs?: RosVirtualCapacityReservation.GpuQuantityConfigsProperty | ros.IResolvable;
        /**
         * @Property cpuCore: The number of CPU cores.
         */
        readonly cpuCore?: number | ros.IResolvable;
        /**
         * @Property memGib: The memory size of the GPU.
         */
        readonly memGib?: number | ros.IResolvable;
        /**
         * @Property replicas: The number of the replicas.
         */
        readonly replicas?: number | ros.IResolvable;
    }
}
