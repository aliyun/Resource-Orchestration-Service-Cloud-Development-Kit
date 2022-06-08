import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::EHPC::Cluster`
 */
export interface RosClusterProps {
    /**
     * @Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
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
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property postInstallScript:
     */
    readonly postInstallScript?: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
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
     * PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
     * PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
     * PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
     * PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
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
     * @Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
     */
    readonly withoutElasticIp?: boolean | ros.IResolvable;
    /**
     * @Property zoneId: Available area ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::EHPC::Cluster`
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EHPC::Cluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
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
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property postInstallScript:
     */
    postInstallScript: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
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
     * PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
     * PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
     * PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
     * PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
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
     * @Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
     */
    withoutElasticIp: boolean | ros.IResolvable | undefined;
    /**
     * @Property zoneId: Available area ID.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::EHPC::Cluster`.
     *
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
//# sourceMappingURL=ehpc.generated.d.ts.map