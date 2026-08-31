import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './ehpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `Cluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
 */
export interface ClusterProps {

    /**
     * Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.
     */
    readonly ecsOrderComputeCount: number | ros.IResolvable;

    /**
     * Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    readonly ecsOrderComputeInstanceType: string | ros.IResolvable;

    /**
     * Property ecsOrderLoginCount: Login node number can only be 1.
     */
    readonly ecsOrderLoginCount: number | ros.IResolvable;

    /**
     * Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    readonly ecsOrderLoginInstanceType: string | ros.IResolvable;

    /**
     * Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    readonly ecsOrderManagerInstanceType: string | ros.IResolvable;

    /**
     * Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property accountType: The service type of the domain account. Valid values:
     * nis
     * ldap
     * Default value: nis
     */
    readonly accountType?: string | ros.IResolvable;

    /**
     * Property additionalVolumes: The information of the NAS file system.
     */
    readonly additionalVolumes?: Array<RosCluster.AdditionalVolumesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
     */
    readonly application?: Array<RosCluster.ApplicationProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * *   true
     * *   false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property autoRenewPeriod: The auto-renewal period of the subscription compute nodes. The parameter takes
     * effect when AutoRenew is set to true.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * Property clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number.
     * You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
     */
    readonly clientVersion?: string | ros.IResolvable;

    /**
     * Property computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values:
     * true: Hyper-threading is supported.
     * false: Hyper-threading is not supported.
     * Default value: true
     */
    readonly computeEnableHt?: boolean | ros.IResolvable;

    /**
     * Property computeSpotPriceLimit: The maximum hourly price of the compute nodes. A maximum of three decimal places
     * can be used in the value of the parameter. The parameter is valid only when the
     * ComputeSpotStrategy parameter is set to SpotWithPriceLimit.
     */
    readonly computeSpotPriceLimit?: string | ros.IResolvable;

    /**
     * Property computeSpotStrategy: The bidding method of the compute nodes. Valid values:
     * *   NoSpot: The compute nodes are pay-as-you-go instances.
     * *   SpotWithPriceLimit: The compute nodes are preemptible instances that have a
     * user-defined maximum hourly price.
     * *   SpotAsPriceGo: The compute nodes are preemptible instances for which the
     * market price at the time of purchase is used as the bid price.
     * Default value: NoSpot.
     */
    readonly computeSpotStrategy?: string | ros.IResolvable;

    /**
     * Property deployMode: The mode in which the cluster is deployed. Valid values:
     * Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
     * Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
     * Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
     * Default value: Standard
     */
    readonly deployMode?: string | ros.IResolvable;

    /**
     * Property description: The description of the E-HPC cluster. The description must be 2 to 256 characters
     * in length and cannot start with `http:\/\/` or `https:\/\/`.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    readonly ecsChargeType?: string | ros.IResolvable;

    /**
     * Property ecsOrderManagerCount: Control node number can be 1, 2
     */
    readonly ecsOrderManagerCount?: number | ros.IResolvable;

    /**
     * Property ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
     */
    readonly ehpcVersion?: string | ros.IResolvable;

    /**
     * Property haEnable: Specifies whether to enable the high availability feature. Valid values:
     * true: enables the high availability feature
     * false: disables the high availability feature
     * Default value: false
     * Note If high availability is enabled, primary management nodes and secondary management nodes are used.
     */
    readonly haEnable?: boolean | ros.IResolvable;

    /**
     * Property imageId: The image IDs.
     * You can call the [ListImages]() and [ListCustomImages]() operations to query the
     * images that are supported by E-HPC.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    readonly imageOwnerAlias?: string | ros.IResolvable;

    /**
     * Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
     */
    readonly inputFileUrl?: string | ros.IResolvable;

    /**
     * Property isComputeEss: Specifies whether to enable auto scaling. Valid values:
     * true: enables auto scaling
     * false: disables auto scaling
     * Default value: false
     */
    readonly isComputeEss?: boolean | ros.IResolvable;

    /**
     * Property jobQueue: 	The queue to which the compute nodes are added.
     */
    readonly jobQueue?: string | ros.IResolvable;

    /**
     * Property keyPairName: Key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * Property networkInterfaceTrafficMode: Communication mode of an elastic NIC. Value values:
     * - **Standard**: The TCP communication mode is used.
     * - **HighPerformance**: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
     */
    readonly networkInterfaceTrafficMode?: string | ros.IResolvable;

    /**
     * Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    readonly osTag?: string | ros.IResolvable;

    /**
     * Property password: The root password of the logon node. The password must be 8 to 30 characters in
     * length and contain at least three of the following items: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include:
     * `( ) ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ‘ < > , . ? \/`
     * You must specify either Password or KeyPairName. If both are specified, the
     * Password parameter prevails.
     * > We recommend that you use HTTPS to call the API operation to prevent password
     * leakage.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property period: The duration of the subscription. The unit of the duration is specified by the
     * `PeriodUnit` parameter.
     * *   Valid values if PriceUnit is set to Year: 1, 2, and 3.
     * *   Valid values if PriceUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * *   Valid value if PriceUnit is set to Hour: 1.
     * Default value: 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the subscription duration. Valid values:
     * *   Year
     * *   Month
     * *   Hour
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property postInstallScript: The information of the post-installation script.
     */
    readonly postInstallScript?: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound.
     * When the value of DeployMode is Standard, the value range: scheduler, account, login, compute.
     * When the value of DeployMode is Simple, the value range: manager, login, compute.
     * When the value of DeployMode is Tiny, the value range: manager, compute.
     */
    readonly ramNodeTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property ramRoleName: The name of the Resource Access Management (RAM) role.
     * You can call the ListRoles operation provided by RAM to query the created RAM roles.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: \/ RemoteDirectory
     */
    readonly remoteDirectory?: string | ros.IResolvable;

    /**
     * Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values:
     * true: enables VNC
     * false: disables VNC
     * Default value: false
     */
    readonly remoteVisEnable?: boolean | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     * You can call the ListResourceGroups operation to obtain the ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property sccClusterId: The Super Computing Cluster (SCC) instance ID.
     * If you specify the parameter, the SCC instance is moved to a new SCC cluster.
     */
    readonly sccClusterId?: string | ros.IResolvable;

    /**
     * Property schedulerType: The type of the scheduler. Valid values:
     * pbs
     * slurm
     * opengridscheduler
     * deadline
     * Default value: pbs
     */
    readonly schedulerType?: string | ros.IResolvable;

    /**
     * Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupName: If you do not use an existing security group, set the parameter to the name of a
     * new security group. A default policy is applied to the new security group.
     */
    readonly securityGroupName?: string | ros.IResolvable;

    /**
     * Property systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 input\/output operations per second (IOPS) of random read\/write.
     * PL1: A single ESSD can deliver up to 50,000 IOPS of random read\/write.
     * PL2: A single ESSD can deliver up to 100,000 IOPS of random read\/write.
     * PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read\/write.
     * Default value: PL1
     */
    readonly systemDiskLevel?: string | ros.IResolvable;

    /**
     * Property systemDiskSize: The size of the system disk. Unit: GB
     * Valid values: 40 to 500
     * Default value: 40
     */
    readonly systemDiskSize?: number | ros.IResolvable;

    /**
     * Property systemDiskType: The type of the system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: SSD.
     * cloud_essd: ESSD.
     * Default value: cloud_ssd
     */
    readonly systemDiskType?: string | ros.IResolvable;

    /**
     * Property volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
     */
    readonly volumeId?: string | ros.IResolvable;

    /**
     * Property volumeMountpoint: The mount target of the file system. Take note of the following information:
     * If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
     * If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
     */
    readonly volumeMountpoint?: string | ros.IResolvable;

    /**
     * Property volumeProtocol: The type of the protocol that is used by the file system. Valid values:
     * nfs
     * smb
     * Default value: nfs
     */
    readonly volumeProtocol?: string | ros.IResolvable;

    /**
     * Property volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
     */
    readonly volumeType?: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
     */
    readonly withoutElasticIp?: boolean | ros.IResolvable;

    /**
     * Property zoneId: Available area ID.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Represents a `Cluster`.
 */
export interface ICluster extends ros.IResource {
    readonly props: ClusterProps;

    /**
     * Attribute ClusterId: Cluster Id.
     */
    readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
     */
    readonly attrEcsInfo: ros.IResolvable | string;

    /**
     * Attribute Name: Cluster name.
     */
    readonly attrName: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EHPC::Cluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
 */
export class Cluster extends ros.Resource implements ICluster {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterId: Cluster Id.
     */
    public readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
     */
    public readonly attrEcsInfo: ros.IResolvable | string;

    /**
     * Attribute Name: Cluster name.
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCluster = new RosCluster(this, id,  {
            volumeProtocol: props.volumeProtocol,
            computeEnableHt: props.computeEnableHt,
            resourceGroupId: props.resourceGroupId,
            withoutElasticIp: props.withoutElasticIp,
            systemDiskType: props.systemDiskType,
            remoteVisEnable: props.remoteVisEnable,
            name: props.name,
            volumeId: props.volumeId,
            ramRoleName: props.ramRoleName,
            deployMode: props.deployMode,
            postInstallScript: props.postInstallScript,
            imageId: props.imageId,
            ecsOrderLoginInstanceType: props.ecsOrderLoginInstanceType,
            isComputeEss: props.isComputeEss,
            jobQueue: props.jobQueue,
            vSwitchId: props.vSwitchId,
            period: props.period,
            computeSpotStrategy: props.computeSpotStrategy,
            ecsOrderManagerInstanceType: props.ecsOrderManagerInstanceType,
            ehpcVersion: props.ehpcVersion,
            volumeMountpoint: props.volumeMountpoint,
            ecsOrderManagerCount: props.ecsOrderManagerCount,
            ecsOrderComputeInstanceType: props.ecsOrderComputeInstanceType,
            vpcId: props.vpcId,
            application: props.application,
            periodUnit: props.periodUnit,
            imageOwnerAlias: props.imageOwnerAlias,
            ecsOrderComputeCount: props.ecsOrderComputeCount,
            description: props.description,
            securityGroupName: props.securityGroupName,
            systemDiskSize: props.systemDiskSize,
            additionalVolumes: props.additionalVolumes,
            autoRenew: props.autoRenew,
            computeSpotPriceLimit: props.computeSpotPriceLimit,
            ramNodeTypes: props.ramNodeTypes,
            clientVersion: props.clientVersion,
            volumeType: props.volumeType,
            inputFileUrl: props.inputFileUrl,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod,
            keyPairName: props.keyPairName,
            remoteDirectory: props.remoteDirectory,
            networkInterfaceTrafficMode: props.networkInterfaceTrafficMode,
            sccClusterId: props.sccClusterId,
            zoneId: props.zoneId,
            systemDiskLevel: props.systemDiskLevel,
            ecsOrderLoginCount: props.ecsOrderLoginCount,
            securityGroupId: props.securityGroupId,
            schedulerType: props.schedulerType,
            accountType: props.accountType,
            haEnable: props.haEnable,
            osTag: props.osTag,
            ecsChargeType: props.ecsChargeType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrEcsInfo = rosCluster.attrEcsInfo;
        this.attrName = rosCluster.attrName;
        this.attrSecurityGroupId = rosCluster.attrSecurityGroupId;
    }
}
