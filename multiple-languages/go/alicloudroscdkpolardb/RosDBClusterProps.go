package alicloudroscdkpolardb


// Properties for defining a `RosDBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
type RosDBClusterProps struct {
	DbNodeClass interface{} `field:"required" json:"dbNodeClass" yaml:"dbNodeClass"`
	DbType interface{} `field:"required" json:"dbType" yaml:"dbType"`
	DbVersion interface{} `field:"required" json:"dbVersion" yaml:"dbVersion"`
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	AllowShutDown interface{} `field:"optional" json:"allowShutDown" yaml:"allowShutDown"`
	Architecture interface{} `field:"optional" json:"architecture" yaml:"architecture"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	BackupRetentionPolicyOnClusterDeletion interface{} `field:"optional" json:"backupRetentionPolicyOnClusterDeletion" yaml:"backupRetentionPolicyOnClusterDeletion"`
	CloneDataPoint interface{} `field:"optional" json:"cloneDataPoint" yaml:"cloneDataPoint"`
	ClusterNetworkType interface{} `field:"optional" json:"clusterNetworkType" yaml:"clusterNetworkType"`
	ColdStorageOption interface{} `field:"optional" json:"coldStorageOption" yaml:"coldStorageOption"`
	CreationCategory interface{} `field:"optional" json:"creationCategory" yaml:"creationCategory"`
	CreationOption interface{} `field:"optional" json:"creationOption" yaml:"creationOption"`
	DbClusterDescription interface{} `field:"optional" json:"dbClusterDescription" yaml:"dbClusterDescription"`
	DbClusterParameters interface{} `field:"optional" json:"dbClusterParameters" yaml:"dbClusterParameters"`
	DbMinorVersion interface{} `field:"optional" json:"dbMinorVersion" yaml:"dbMinorVersion"`
	DbNodeNum interface{} `field:"optional" json:"dbNodeNum" yaml:"dbNodeNum"`
	DefaultTimeZone interface{} `field:"optional" json:"defaultTimeZone" yaml:"defaultTimeZone"`
	GdnId interface{} `field:"optional" json:"gdnId" yaml:"gdnId"`
	HotStandbyCluster interface{} `field:"optional" json:"hotStandbyCluster" yaml:"hotStandbyCluster"`
	LoosePolarLogBin interface{} `field:"optional" json:"loosePolarLogBin" yaml:"loosePolarLogBin"`
	LooseXEngine interface{} `field:"optional" json:"looseXEngine" yaml:"looseXEngine"`
	LooseXEngineUseMemoryPct interface{} `field:"optional" json:"looseXEngineUseMemoryPct" yaml:"looseXEngineUseMemoryPct"`
	LowerCaseTableNames interface{} `field:"optional" json:"lowerCaseTableNames" yaml:"lowerCaseTableNames"`
	MaintainTime interface{} `field:"optional" json:"maintainTime" yaml:"maintainTime"`
	ParameterGroupId interface{} `field:"optional" json:"parameterGroupId" yaml:"parameterGroupId"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	ProvisionedIops interface{} `field:"optional" json:"provisionedIops" yaml:"provisionedIops"`
	ProxyClass interface{} `field:"optional" json:"proxyClass" yaml:"proxyClass"`
	ProxyType interface{} `field:"optional" json:"proxyType" yaml:"proxyType"`
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RestartMasterNode interface{} `field:"optional" json:"restartMasterNode" yaml:"restartMasterNode"`
	ScaleMax interface{} `field:"optional" json:"scaleMax" yaml:"scaleMax"`
	ScaleMin interface{} `field:"optional" json:"scaleMin" yaml:"scaleMin"`
	ScaleRoNumMax interface{} `field:"optional" json:"scaleRoNumMax" yaml:"scaleRoNumMax"`
	ScaleRoNumMin interface{} `field:"optional" json:"scaleRoNumMin" yaml:"scaleRoNumMin"`
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	ServerlessType interface{} `field:"optional" json:"serverlessType" yaml:"serverlessType"`
	SourceResourceId interface{} `field:"optional" json:"sourceResourceId" yaml:"sourceResourceId"`
	StandbyAz interface{} `field:"optional" json:"standbyAz" yaml:"standbyAz"`
	StorageAutoScale interface{} `field:"optional" json:"storageAutoScale" yaml:"storageAutoScale"`
	StoragePayType interface{} `field:"optional" json:"storagePayType" yaml:"storagePayType"`
	StorageSpace interface{} `field:"optional" json:"storageSpace" yaml:"storageSpace"`
	StorageType interface{} `field:"optional" json:"storageType" yaml:"storageType"`
	StorageUpperBound interface{} `field:"optional" json:"storageUpperBound" yaml:"storageUpperBound"`
	StrictConsistency interface{} `field:"optional" json:"strictConsistency" yaml:"strictConsistency"`
	Tags *[]*RosDBCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TdeStatus interface{} `field:"optional" json:"tdeStatus" yaml:"tdeStatus"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

