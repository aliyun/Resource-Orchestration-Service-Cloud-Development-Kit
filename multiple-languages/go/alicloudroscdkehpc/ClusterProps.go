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
	// Property additionalVolumes: The information of the NAS file system.
	AdditionalVolumes interface{} `field:"optional" json:"additionalVolumes" yaml:"additionalVolumes"`
	// Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
	Application interface{} `field:"optional" json:"application" yaml:"application"`
	// Property autoRenew: Specifies whether to enable auto-renewal.
	//
	// Valid values:
	// *   true
	// *   false
	// Default value: false.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: The auto-renewal period of the subscription compute nodes.
	//
	// The parameter takes
	// effect when AutoRenew is set to true.
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
	// Property computeSpotPriceLimit: The maximum hourly price of the compute nodes.
	//
	// A maximum of three decimal places
	// can be used in the value of the parameter. The parameter is valid only when the
	// ComputeSpotStrategy parameter is set to SpotWithPriceLimit.
	ComputeSpotPriceLimit interface{} `field:"optional" json:"computeSpotPriceLimit" yaml:"computeSpotPriceLimit"`
	// Property computeSpotStrategy: The bidding method of the compute nodes.
	//
	// Valid values:
	// *   NoSpot: The compute nodes are pay-as-you-go instances.
	// *   SpotWithPriceLimit: The compute nodes are preemptible instances that have a
	// user-defined maximum hourly price.
	// *   SpotAsPriceGo: The compute nodes are preemptible instances for which the
	// market price at the time of purchase is used as the bid price.
	// Default value: NoSpot.
	ComputeSpotStrategy interface{} `field:"optional" json:"computeSpotStrategy" yaml:"computeSpotStrategy"`
	// Property deployMode: The mode in which the cluster is deployed.
	//
	// Valid values:
	// Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
	// Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
	// Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
	// Default value: Standard.
	DeployMode interface{} `field:"optional" json:"deployMode" yaml:"deployMode"`
	// Property description: The description of the E-HPC cluster.
	//
	// The description must be 2 to 256 characters
	// in length and cannot start with `http:\/\/` or `https:\/\/`.
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
	// Property imageId: The image IDs.
	//
	// You can call the [ListImages]() and [ListCustomImages]() operations to query the
	// images that are supported by E-HPC.
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
	// Property osTag: Operating system image tag.
	//
	// You can call ListImages API to query.
	OsTag interface{} `field:"optional" json:"osTag" yaml:"osTag"`
	// Property password: The root password of the logon node.
	//
	// The password must be 8 to 30 characters in
	// length and contain at least three of the following items: uppercase letters,
	// lowercase letters, digits, and special characters. Special characters include:
	// `( ) ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ‘ < > , . ? \/`
	// You must specify either Password or KeyPairName. If both are specified, the
	// Password parameter prevails.
	// > We recommend that you use HTTPS to call the API operation to prevent password
	// leakage.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property period: The duration of the subscription.
	//
	// The unit of the duration is specified by the
	// `PeriodUnit` parameter.
	// *   Valid values if PriceUnit is set to Year: 1, 2, and 3.
	// *   Valid values if PriceUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
	// *   Valid value if PriceUnit is set to Hour: 1.
	// Default value: 1.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// *   Year
	// *   Month
	// *   Hour
	// Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property postInstallScript: The information of the post-installation script.
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
	// Property sccClusterId: The Super Computing Cluster (SCC) instance ID.
	//
	// If you specify the parameter, the SCC instance is moved to a new SCC cluster.
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
	// Property securityGroupName: If you do not use an existing security group, set the parameter to the name of a new security group.
	//
	// A default policy is applied to the new security group.
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

