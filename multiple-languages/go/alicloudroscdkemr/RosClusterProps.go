package alicloudroscdkemr


// Properties for defining a `RosCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster
type RosClusterProps struct {
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	EmrVer interface{} `field:"required" json:"emrVer" yaml:"emrVer"`
	HostGroup interface{} `field:"required" json:"hostGroup" yaml:"hostGroup"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	NetType interface{} `field:"required" json:"netType" yaml:"netType"`
	UseLocalMetaDb interface{} `field:"required" json:"useLocalMetaDb" yaml:"useLocalMetaDb"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AuthorizeContent interface{} `field:"optional" json:"authorizeContent" yaml:"authorizeContent"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	BootstrapAction interface{} `field:"optional" json:"bootstrapAction" yaml:"bootstrapAction"`
	ClickHouseConf interface{} `field:"optional" json:"clickHouseConf" yaml:"clickHouseConf"`
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	Configurations interface{} `field:"optional" json:"configurations" yaml:"configurations"`
	DepositType interface{} `field:"optional" json:"depositType" yaml:"depositType"`
	EasEnable interface{} `field:"optional" json:"easEnable" yaml:"easEnable"`
	HighAvailabilityEnable interface{} `field:"optional" json:"highAvailabilityEnable" yaml:"highAvailabilityEnable"`
	InitCustomHiveMetaDb interface{} `field:"optional" json:"initCustomHiveMetaDb" yaml:"initCustomHiveMetaDb"`
	InstanceGeneration interface{} `field:"optional" json:"instanceGeneration" yaml:"instanceGeneration"`
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	IsOpenPublicIp interface{} `field:"optional" json:"isOpenPublicIp" yaml:"isOpenPublicIp"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	LogPath interface{} `field:"optional" json:"logPath" yaml:"logPath"`
	MachineType interface{} `field:"optional" json:"machineType" yaml:"machineType"`
	MasterPwd interface{} `field:"optional" json:"masterPwd" yaml:"masterPwd"`
	MetaStoreConf interface{} `field:"optional" json:"metaStoreConf" yaml:"metaStoreConf"`
	MetaStoreType interface{} `field:"optional" json:"metaStoreType" yaml:"metaStoreType"`
	OptionSoftWareList interface{} `field:"optional" json:"optionSoftWareList" yaml:"optionSoftWareList"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	RelatedClusterId interface{} `field:"optional" json:"relatedClusterId" yaml:"relatedClusterId"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	SshEnable interface{} `field:"optional" json:"sshEnable" yaml:"sshEnable"`
	Tags *[]*RosCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	UseCustomHiveMetaDb interface{} `field:"optional" json:"useCustomHiveMetaDb" yaml:"useCustomHiveMetaDb"`
	UserDefinedEmrEcsRole interface{} `field:"optional" json:"userDefinedEmrEcsRole" yaml:"userDefinedEmrEcsRole"`
	UserInfo interface{} `field:"optional" json:"userInfo" yaml:"userInfo"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	WhiteListType interface{} `field:"optional" json:"whiteListType" yaml:"whiteListType"`
}

