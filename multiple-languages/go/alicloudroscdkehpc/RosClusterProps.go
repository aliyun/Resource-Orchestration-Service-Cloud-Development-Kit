package alicloudroscdkehpc


// Properties for defining a `RosCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-cluster
type RosClusterProps struct {
	EcsOrderComputeCount interface{} `field:"required" json:"ecsOrderComputeCount" yaml:"ecsOrderComputeCount"`
	EcsOrderComputeInstanceType interface{} `field:"required" json:"ecsOrderComputeInstanceType" yaml:"ecsOrderComputeInstanceType"`
	EcsOrderLoginCount interface{} `field:"required" json:"ecsOrderLoginCount" yaml:"ecsOrderLoginCount"`
	EcsOrderLoginInstanceType interface{} `field:"required" json:"ecsOrderLoginInstanceType" yaml:"ecsOrderLoginInstanceType"`
	EcsOrderManagerInstanceType interface{} `field:"required" json:"ecsOrderManagerInstanceType" yaml:"ecsOrderManagerInstanceType"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	OsTag interface{} `field:"required" json:"osTag" yaml:"osTag"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	AccountType interface{} `field:"optional" json:"accountType" yaml:"accountType"`
	AdditionalVolumes interface{} `field:"optional" json:"additionalVolumes" yaml:"additionalVolumes"`
	Application interface{} `field:"optional" json:"application" yaml:"application"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	ClientVersion interface{} `field:"optional" json:"clientVersion" yaml:"clientVersion"`
	ComputeEnableHt interface{} `field:"optional" json:"computeEnableHt" yaml:"computeEnableHt"`
	ComputeSpotPriceLimit interface{} `field:"optional" json:"computeSpotPriceLimit" yaml:"computeSpotPriceLimit"`
	ComputeSpotStrategy interface{} `field:"optional" json:"computeSpotStrategy" yaml:"computeSpotStrategy"`
	DeployMode interface{} `field:"optional" json:"deployMode" yaml:"deployMode"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EcsChargeType interface{} `field:"optional" json:"ecsChargeType" yaml:"ecsChargeType"`
	EcsOrderManagerCount interface{} `field:"optional" json:"ecsOrderManagerCount" yaml:"ecsOrderManagerCount"`
	EhpcVersion interface{} `field:"optional" json:"ehpcVersion" yaml:"ehpcVersion"`
	HaEnable interface{} `field:"optional" json:"haEnable" yaml:"haEnable"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	ImageOwnerAlias interface{} `field:"optional" json:"imageOwnerAlias" yaml:"imageOwnerAlias"`
	InputFileUrl interface{} `field:"optional" json:"inputFileUrl" yaml:"inputFileUrl"`
	IsComputeEss interface{} `field:"optional" json:"isComputeEss" yaml:"isComputeEss"`
	JobQueue interface{} `field:"optional" json:"jobQueue" yaml:"jobQueue"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	NetworkInterfaceTrafficMode interface{} `field:"optional" json:"networkInterfaceTrafficMode" yaml:"networkInterfaceTrafficMode"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PostInstallScript interface{} `field:"optional" json:"postInstallScript" yaml:"postInstallScript"`
	RamNodeTypes interface{} `field:"optional" json:"ramNodeTypes" yaml:"ramNodeTypes"`
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	RemoteDirectory interface{} `field:"optional" json:"remoteDirectory" yaml:"remoteDirectory"`
	RemoteVisEnable interface{} `field:"optional" json:"remoteVisEnable" yaml:"remoteVisEnable"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SccClusterId interface{} `field:"optional" json:"sccClusterId" yaml:"sccClusterId"`
	SchedulerType interface{} `field:"optional" json:"schedulerType" yaml:"schedulerType"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	SystemDiskLevel interface{} `field:"optional" json:"systemDiskLevel" yaml:"systemDiskLevel"`
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	SystemDiskType interface{} `field:"optional" json:"systemDiskType" yaml:"systemDiskType"`
	VolumeId interface{} `field:"optional" json:"volumeId" yaml:"volumeId"`
	VolumeMountpoint interface{} `field:"optional" json:"volumeMountpoint" yaml:"volumeMountpoint"`
	VolumeProtocol interface{} `field:"optional" json:"volumeProtocol" yaml:"volumeProtocol"`
	VolumeType interface{} `field:"optional" json:"volumeType" yaml:"volumeType"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	WithoutElasticIp interface{} `field:"optional" json:"withoutElasticIp" yaml:"withoutElasticIp"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

