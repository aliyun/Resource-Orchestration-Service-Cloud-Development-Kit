package alicloudroscdkemr


// Properties for defining a `Cluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster
type ClusterProps struct {
	// Property chargeType: The billing method.
	//
	// Valid values: PostPaid and PrePaid. PostPaid: pay-as-you-go. PrePaid:
	// subscription.
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	// Property clusterType: The type of the cluster.
	//
	// Allowd values: HADOOP, KAFKA, DRUID, ZOOKEEPER, DATA_SCIENCE, GATEWAY etc.
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	// Property emrVer: The version of EMR.
	EmrVer interface{} `field:"required" json:"emrVer" yaml:"emrVer"`
	// Property hostGroup:.
	HostGroup interface{} `field:"required" json:"hostGroup" yaml:"hostGroup"`
	// Property name: The name of the cluster.
	//
	// The name can be 1 to 64 characters in length and only contain
	// Chinese characters, letters, numbers, hyphens (-), and underscores (_).
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property netType: The type of the network.
	NetType interface{} `field:"required" json:"netType" yaml:"netType"`
	// Property useLocalMetaDb: Indicates whether the local Hive metadatabase is used.
	UseLocalMetaDb interface{} `field:"required" json:"useLocalMetaDb" yaml:"useLocalMetaDb"`
	// Property zoneId: The zone ID.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property authorizeContent: Not required.
	AuthorizeContent interface{} `field:"optional" json:"authorizeContent" yaml:"authorizeContent"`
	// Property autoRenew: Indicates whether the subscription cluster is auto-renewed.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property bootstrapAction:.
	BootstrapAction interface{} `field:"optional" json:"bootstrapAction" yaml:"bootstrapAction"`
	// Property clickHouseConf: undefined.
	ClickHouseConf interface{} `field:"optional" json:"clickHouseConf" yaml:"clickHouseConf"`
	// Property config:.
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	// Property configurations: Not required.
	Configurations interface{} `field:"optional" json:"configurations" yaml:"configurations"`
	// Property depositType: The hosting type.
	DepositType interface{} `field:"optional" json:"depositType" yaml:"depositType"`
	// Property easEnable: Indicates whether the cluster is a high-security cluster.
	EasEnable interface{} `field:"optional" json:"easEnable" yaml:"easEnable"`
	// Property highAvailabilityEnable: Indicates whether the cluster is a high-availability cluster.
	//
	// A value of true indicates
	// that two master nodes are required.
	HighAvailabilityEnable interface{} `field:"optional" json:"highAvailabilityEnable" yaml:"highAvailabilityEnable"`
	// Property initCustomHiveMetaDb: A reserved parameter.
	//
	// Not required.
	InitCustomHiveMetaDb interface{} `field:"optional" json:"initCustomHiveMetaDb" yaml:"initCustomHiveMetaDb"`
	// Property instanceGeneration: The generation of the ECS instances.
	InstanceGeneration interface{} `field:"optional" json:"instanceGeneration" yaml:"instanceGeneration"`
	// Property ioOptimized: Indicates wether I\/O optimization is enabled.
	//
	// Default value: true.
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	// Property isOpenPublicIp: Indicates whether a public IP address is assigned.
	//
	// A value of true indicates that
	// a bandwidth of 8 MB is set by default.
	IsOpenPublicIp interface{} `field:"optional" json:"isOpenPublicIp" yaml:"isOpenPublicIp"`
	// Property keyPairName: The name of the key pair.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property logPath: The log path in OSS.
	LogPath interface{} `field:"optional" json:"logPath" yaml:"logPath"`
	// Property machineType: The type of the machine.
	MachineType interface{} `field:"optional" json:"machineType" yaml:"machineType"`
	// Property masterPwd: The SSH password for the master node.
	//
	// The password must meet the following requirements.
	// Length constraints: Minimum length of 8 characters. Maximum length of 30 characters.
	// It must contain three types of characters (uppercase letters, lowercase letters, numbers,
	// and special symbols).
	MasterPwd interface{} `field:"optional" json:"masterPwd" yaml:"masterPwd"`
	// Property metaStoreConf: Meta store conf of specific meta store type.
	//
	// If MetaStoreType=user_rds, MetaStoreConf should be like {"dbUrl":"jdbc:mysql:\/\/xxxxxx", "dbUserName":"username", "dbPassword":"password"}.
	MetaStoreConf interface{} `field:"optional" json:"metaStoreConf" yaml:"metaStoreConf"`
	// Property metaStoreType: Meta store type.
	//
	// Allow types:
	// local: Local cluster
	// unified: Unified meta data
	// user_rds: User's RDS.
	MetaStoreType interface{} `field:"optional" json:"metaStoreType" yaml:"metaStoreType"`
	// Property optionSoftWareList: The list of optional services.
	OptionSoftWareList interface{} `field:"optional" json:"optionSoftWareList" yaml:"optionSoftWareList"`
	// Property period: The length of the subscription.
	//
	// Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8,
	// 9, 12, 24, and 36. A value is required when ChargeType=PrePaid.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property relatedClusterId: The ID of the primary cluster (when the cluster that you create is a Gateway cluster).
	RelatedClusterId interface{} `field:"optional" json:"relatedClusterId" yaml:"relatedClusterId"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupId: The ID of the security group.
	//
	// You can create a security group in the ECS console and
	// use it. Note: If you use an existing security group, the default security group policy
	// is applied to this security group: Only port 22 is open at the inbound and all ports
	// are open at the outbound. You need to specify either SecurityGroupId or SecurityGroupName.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityGroupName: The name of the security group to create.
	//
	// If the ID of the security group is not specified,
	// this name is used to create a new security group. After the cluster is created, you
	// can view the ID of the security group on the Cluster Management page. The default
	// security group policy is applied to this security group: Only port 22 is open at the
	// inbound and all ports are open at the outbound. You need to specify either SecurityGroupId
	// or SecurityGroupName.
	SecurityGroupName interface{} `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	// Property sshEnable: Indicates whether SSH is enabled.
	SshEnable interface{} `field:"optional" json:"sshEnable" yaml:"sshEnable"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property useCustomHiveMetaDb: A reserved parameter.
	//
	// Not required.
	UseCustomHiveMetaDb interface{} `field:"optional" json:"useCustomHiveMetaDb" yaml:"useCustomHiveMetaDb"`
	// Property userDefinedEmrEcsRole: The role that is assigned to EMR for calling ECS resources.
	UserDefinedEmrEcsRole interface{} `field:"optional" json:"userDefinedEmrEcsRole" yaml:"userDefinedEmrEcsRole"`
	// Property userInfo:.
	UserInfo interface{} `field:"optional" json:"userInfo" yaml:"userInfo"`
	// Property vpcId: The ID of the VPC.
	//
	// A value is required when NetType=vpc.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the Vswitch.
	//
	// A value is required when NetType=vpc.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property whiteListType: Not required.
	WhiteListType interface{} `field:"optional" json:"whiteListType" yaml:"whiteListType"`
}

