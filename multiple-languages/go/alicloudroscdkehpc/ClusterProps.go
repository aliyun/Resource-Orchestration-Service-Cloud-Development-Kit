package alicloudroscdkehpc


// Properties for defining a `Cluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
type ClusterProps struct {
	// Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.
	EcsOrderComputeCount interface{} `field:"required" json:"ecsOrderComputeCount" yaml:"ecsOrderComputeCount"`
	// Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
	EcsOrderComputeInstanceType interface{} `field:"required" json:"ecsOrderComputeInstanceType" yaml:"ecsOrderComputeInstanceType"`
	// Property ecsOrderLoginCount: Login node number can only be 1.
	EcsOrderLoginCount interface{} `field:"required" json:"ecsOrderLoginCount" yaml:"ecsOrderLoginCount"`
	// Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
	EcsOrderLoginInstanceType interface{} `field:"required" json:"ecsOrderLoginInstanceType" yaml:"ecsOrderLoginInstanceType"`
	// Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
	EcsOrderManagerInstanceType interface{} `field:"required" json:"ecsOrderManagerInstanceType" yaml:"ecsOrderManagerInstanceType"`
	// Property name: Cluster name.
	//
	// 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property osTag: Operating system image tag.
	//
	// You can call ListImages API to query.
	OsTag interface{} `field:"required" json:"osTag" yaml:"osTag"`
	// Property vSwitchId: VPC in switch ID.
	//
	// Products currently only supports VPC network.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property accountType: The service type of the domain account.
	//
	// Valid values:
	// nis
	// ldap
	// Default value: nis.
	AccountType interface{} `field:"optional" json:"accountType" yaml:"accountType"`
	// Property additionalVolumes:.
	AdditionalVolumes interface{} `field:"optional" json:"additionalVolumes" yaml:"additionalVolumes"`
	// Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
	Application interface{} `field:"optional" json:"application" yaml:"application"`
	// Property autoRenew: true: automatic renewals;
	//
	// false: no automatic renewals.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property clientVersion: The version of the E-HPC client.
	//
	// By default, the parameter is set to the latest version number.
	// You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
	ClientVersion interface{} `field:"optional" json:"clientVersion" yaml:"clientVersion"`
	// Property computeEnableHt: Specifies whether the compute nodes support hyper-threading.
	//
	// Valid values:
	// true: Hyper-threading is supported.
	// false: Hyper-threading is not supported.
	// Default value: true.
	ComputeEnableHt interface{} `field:"optional" json:"computeEnableHt" yaml:"computeEnableHt"`
	// Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
	ComputeSpotPriceLimit interface{} `field:"optional" json:"computeSpotPriceLimit" yaml:"computeSpotPriceLimit"`
	// Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.
	ComputeSpotStrategy interface{} `field:"optional" json:"computeSpotStrategy" yaml:"computeSpotStrategy"`
	// Property deployMode: The mode in which the cluster is deployed.
	//
	// Valid values:
	// Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
	// Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
	// Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
	// Default value: Standard.
	DeployMode interface{} `field:"optional" json:"deployMode" yaml:"deployMode"`
	// Property description: Cluster description, 2 to 128 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
	EcsChargeType interface{} `field:"optional" json:"ecsChargeType" yaml:"ecsChargeType"`
	// Property ecsOrderManagerCount: Control node number can be 1, 2.
	EcsOrderManagerCount interface{} `field:"optional" json:"ecsOrderManagerCount" yaml:"ecsOrderManagerCount"`
	// Property ehpcVersion: The version of E-HPC.
	//
	// By default, the parameter is set to the latest version number.
	EhpcVersion interface{} `field:"optional" json:"ehpcVersion" yaml:"ehpcVersion"`
	// Property haEnable: Specifies whether to enable the high availability feature.
	//
	// Valid values:
	// true: enables the high availability feature
	// false: disables the high availability feature
	// Default value: false
	// Note If high availability is enabled, primary management nodes and secondary management nodes are used.
	HaEnable interface{} `field:"optional" json:"haEnable" yaml:"haEnable"`
	// Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;
	//
	// if self, others, or marketplace, ImageId is mandatory.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property imageOwnerAlias: Mirror type: system, self, others or marketplace.
	ImageOwnerAlias interface{} `field:"optional" json:"imageOwnerAlias" yaml:"imageOwnerAlias"`
	// Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
	InputFileUrl interface{} `field:"optional" json:"inputFileUrl" yaml:"inputFileUrl"`
	// Property isComputeEss: Specifies whether to enable auto scaling.
	//
	// Valid values:
	// true: enables auto scaling
	// false: disables auto scaling
	// Default value: false.
	IsComputeEss interface{} `field:"optional" json:"isComputeEss" yaml:"isComputeEss"`
	// Property jobQueue: 	The queue to which the compute nodes are added.
	JobQueue interface{} `field:"optional" json:"jobQueue" yaml:"jobQueue"`
	// Property keyPairName: Key pair name.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property networkInterfaceTrafficMode: Communication mode of an elastic NIC.
	//
	// Value values:
	// - **Standard**: The TCP communication mode is used.
	// - **HighPerformance**: Enables the Elastic RDMA Interface (ERI) and uses the RDMA communication mode.
	NetworkInterfaceTrafficMode interface{} `field:"optional" json:"networkInterfaceTrafficMode" yaml:"networkInterfaceTrafficMode"`
	// Property password: Root password of jump server (login node).
	//
	// 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, \/ Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property period: The purchase of long resources, units: week \/ month \/ year.
	//
	// When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The purchase of long-resources unit.
	//
	// Alternatively value Week \/ Month \/ year.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property postInstallScript:.
	PostInstallScript interface{} `field:"optional" json:"postInstallScript" yaml:"postInstallScript"`
	// Property ramNodeTypes: When authorizing instance configuration, the node type to which the RAM role is bound.
	//
	// When the value of DeployMode is Standard, the value range: scheduler, account, login, compute.
	// When the value of DeployMode is Simple, the value range: manager, login, compute.
	// When the value of DeployMode is Tiny, the value range: manager, compute.
	RamNodeTypes interface{} `field:"optional" json:"ramNodeTypes" yaml:"ramNodeTypes"`
	// Property ramRoleName: The name of the Resource Access Management (RAM) role.
	//
	// You can call the ListRoles operation provided by RAM to query the created RAM roles.
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	// Property remoteDirectory: Mount shared storage remote directory.
	//
	// The final path to the mount point and mount the remote directory composition: NasMountpoint: \/ RemoteDirectory.
	RemoteDirectory interface{} `field:"optional" json:"remoteDirectory" yaml:"remoteDirectory"`
	// Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC).
	//
	// Valid values:
	// true: enables VNC
	// false: disables VNC
	// Default value: false.
	RemoteVisEnable interface{} `field:"optional" json:"remoteVisEnable" yaml:"remoteVisEnable"`
	// Property resourceGroupId: The ID of the resource group.
	//
	// You can call the ListResourceGroups operation to obtain the ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
	SccClusterId interface{} `field:"optional" json:"sccClusterId" yaml:"sccClusterId"`
	// Property schedulerType: The type of the scheduler.
	//
	// Valid values:
	// pbs
	// slurm
	// opengridscheduler
	// deadline
	// Default value: pbs.
	SchedulerType interface{} `field:"optional" json:"schedulerType" yaml:"schedulerType"`
	// Property securityGroupId: Security group ID.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.
	//
	// Format Requirements Reference ECS security group name.
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	// Property systemDiskLevel: The performance level of the ESSD that is created as the system disk.
	//
	// Valid values:
	// PL0: A single ESSD can deliver up to 10,000 input\/output operations per second (IOPS) of random read\/write.
	// PL1: A single ESSD can deliver up to 50,000 IOPS of random read\/write.
	// PL2: A single ESSD can deliver up to 100,000 IOPS of random read\/write.
	// PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read\/write.
	// Default value: PL1.
	SystemDiskLevel interface{} `field:"optional" json:"systemDiskLevel" yaml:"systemDiskLevel"`
	// Property systemDiskSize: The size of the system disk.
	//
	// Unit: GB
	// Valid values: 40 to 500
	// Default value: 40.
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	// Property systemDiskType: The type of the system disk.
	//
	// Valid values:
	// cloud_efficiency: ultra disk.
	// cloud_ssd: SSD.
	// cloud_essd: ESSD.
	// Default value: cloud_ssd.
	SystemDiskType interface{} `field:"optional" json:"systemDiskType" yaml:"systemDiskType"`
	// Property volumeId: The ID of the file system.
	//
	// If you leave the parameter empty, a Performance NAS file system is created by default.
	VolumeId interface{} `field:"optional" json:"volumeId" yaml:"volumeId"`
	// Property volumeMountpoint: The mount target of the file system.
	//
	// Take note of the following information:
	// If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
	// If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
	VolumeMountpoint interface{} `field:"optional" json:"volumeMountpoint" yaml:"volumeMountpoint"`
	// Property volumeProtocol: The type of the protocol that is used by the file system.
	//
	// Valid values:
	// nfs
	// smb
	// Default value: nfs.
	VolumeProtocol interface{} `field:"optional" json:"volumeProtocol" yaml:"volumeProtocol"`
	// Property volumeType: The type of the shared storage.
	//
	// Only Apsara File Storage nas file systems are supported.
	VolumeType interface{} `field:"optional" json:"volumeType" yaml:"volumeType"`
	// Property vpcId: The ID of the virtual private cloud (VPC) to which the E-HPC cluster belongs.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP).
	//
	// Default value: false.
	WithoutElasticIp interface{} `field:"optional" json:"withoutElasticIp" yaml:"withoutElasticIp"`
	// Property zoneId: Available area ID.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

