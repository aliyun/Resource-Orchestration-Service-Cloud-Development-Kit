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
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
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
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;
    /**
     * @Property masterAutoRenew: Whether the master node automatically renews. It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly masterAutoRenew?: boolean | ros.IResolvable;
    /**
     * @Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly masterAutoRenewPeriod?: number | ros.IResolvable;
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
     * @Property masterInstanceChargeType: Master node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly masterInstanceChargeType?: string | ros.IResolvable;
    /**
     * @Property masterPeriod: The duration of the annual subscription and monthly subscription. It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly masterPeriod?: number | ros.IResolvable;
    /**
     * @Property masterPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    readonly masterPeriodUnit?: string | ros.IResolvable;
    /**
     * @Property masterSystemDiskCategory: Master disk system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    readonly masterSystemDiskCategory?: string | ros.IResolvable;
    /**
     * @Property masterSystemDiskSize: Master disk system disk size in GiB.
     * Default to 120.
     */
    readonly masterSystemDiskSize?: number | ros.IResolvable;
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
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly workerAutoRenew?: boolean | ros.IResolvable;
    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly workerAutoRenewPeriod?: number | ros.IResolvable;
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
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly workerInstanceChargeType?: string | ros.IResolvable;
    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly workerPeriod?: number | ros.IResolvable;
    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    readonly workerPeriodUnit?: string | ros.IResolvable;
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
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
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
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    keyPair: string | ros.IResolvable | undefined;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    kubernetesVersion: string | ros.IResolvable | undefined;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    loginPassword: string | ros.IResolvable | undefined;
    /**
     * @Property masterAutoRenew: Whether the master node automatically renews. It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    masterAutoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    masterAutoRenewPeriod: number | ros.IResolvable | undefined;
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
     * @Property masterInstanceChargeType: Master node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    masterInstanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property masterPeriod: The duration of the annual subscription and monthly subscription. It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    masterPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property masterPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month
     */
    masterPeriodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property masterSystemDiskCategory: Master disk system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    masterSystemDiskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property masterSystemDiskSize: Master disk system disk size in GiB.
     * Default to 120.
     */
    masterSystemDiskSize: number | ros.IResolvable | undefined;
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
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    workerAutoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    workerAutoRenewPeriod: number | ros.IResolvable | undefined;
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
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    workerInstanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    workerPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    workerPeriodUnit: string | ros.IResolvable | undefined;
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
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;
    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    readonly profile?: string | ros.IResolvable;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;
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
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
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
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    keyPair: string | ros.IResolvable | undefined;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    loginPassword: string | ros.IResolvable | undefined;
    /**
     * @Property profile: Edge cluster ID. The default value is Edge.
     */
    profile: string | ros.IResolvable | undefined;
    /**
     * @Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    proxyMode: string | ros.IResolvable | undefined;
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
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;
    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    readonly numOfNodes?: number | ros.IResolvable;
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
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly workerAutoRenew?: boolean | ros.IResolvable;
    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly workerAutoRenewPeriod?: number | ros.IResolvable;
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
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly workerInstanceChargeType?: string | ros.IResolvable;
    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    readonly workerPeriod?: number | ros.IResolvable;
    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    readonly workerPeriodUnit?: string | ros.IResolvable;
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
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
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
     * @Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    keyPair: string | ros.IResolvable | undefined;
    /**
     * @Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    kubernetesVersion: string | ros.IResolvable | undefined;
    /**
     * @Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    loginPassword: string | ros.IResolvable | undefined;
    /**
     * @Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    numOfNodes: number | ros.IResolvable | undefined;
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
     * @Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    workerAutoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    workerAutoRenewPeriod: number | ros.IResolvable | undefined;
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
     * @Property workerInstanceChargeType: Worker node payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    workerInstanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property workerPeriod: The duration of the annual and monthly subscription. It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * Default to 1.
     */
    workerPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Default to Month.
     */
    workerPeriodUnit: string | ros.IResolvable | undefined;
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
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
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
