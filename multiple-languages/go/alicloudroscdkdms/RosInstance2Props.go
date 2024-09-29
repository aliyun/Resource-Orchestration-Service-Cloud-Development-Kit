package alicloudroscdkdms


// Properties for defining a `RosInstance2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance2
type RosInstance2Props struct {
	DatabasePassword interface{} `field:"required" json:"databasePassword" yaml:"databasePassword"`
	DatabaseUser interface{} `field:"required" json:"databaseUser" yaml:"databaseUser"`
	DbaId interface{} `field:"required" json:"dbaId" yaml:"dbaId"`
	EnableSellTrust interface{} `field:"required" json:"enableSellTrust" yaml:"enableSellTrust"`
	EnvType interface{} `field:"required" json:"envType" yaml:"envType"`
	ExportTimeout interface{} `field:"required" json:"exportTimeout" yaml:"exportTimeout"`
	Host interface{} `field:"required" json:"host" yaml:"host"`
	InstanceAlias interface{} `field:"required" json:"instanceAlias" yaml:"instanceAlias"`
	InstanceSource interface{} `field:"required" json:"instanceSource" yaml:"instanceSource"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	NetworkType interface{} `field:"required" json:"networkType" yaml:"networkType"`
	Port interface{} `field:"required" json:"port" yaml:"port"`
	QueryTimeout interface{} `field:"required" json:"queryTimeout" yaml:"queryTimeout"`
	SafeRule interface{} `field:"required" json:"safeRule" yaml:"safeRule"`
	DataLinkName interface{} `field:"optional" json:"dataLinkName" yaml:"dataLinkName"`
	DdlOnline interface{} `field:"optional" json:"ddlOnline" yaml:"ddlOnline"`
	EcsInstanceId interface{} `field:"optional" json:"ecsInstanceId" yaml:"ecsInstanceId"`
	EcsRegion interface{} `field:"optional" json:"ecsRegion" yaml:"ecsRegion"`
	EnableSellCommon interface{} `field:"optional" json:"enableSellCommon" yaml:"enableSellCommon"`
	EnableSellSitd interface{} `field:"optional" json:"enableSellSitd" yaml:"enableSellSitd"`
	EnableSellStable interface{} `field:"optional" json:"enableSellStable" yaml:"enableSellStable"`
	Sid interface{} `field:"optional" json:"sid" yaml:"sid"`
	SkipTest interface{} `field:"optional" json:"skipTest" yaml:"skipTest"`
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
	TemplateType interface{} `field:"optional" json:"templateType" yaml:"templateType"`
	Tid interface{} `field:"optional" json:"tid" yaml:"tid"`
	UseDsql interface{} `field:"optional" json:"useDsql" yaml:"useDsql"`
	UseSsl interface{} `field:"optional" json:"useSsl" yaml:"useSsl"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

