package alicloudroscdkemr


// Properties for defining a `RosSparkWorkspace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-sparkworkspace
type RosSparkWorkspaceProps struct {
	OssBucket interface{} `field:"required" json:"ossBucket" yaml:"ossBucket"`
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	RamRoleName interface{} `field:"required" json:"ramRoleName" yaml:"ramRoleName"`
	ResourceSpec interface{} `field:"required" json:"resourceSpec" yaml:"resourceSpec"`
	WorkspaceName interface{} `field:"required" json:"workspaceName" yaml:"workspaceName"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	AutoRenewPeriodUnit interface{} `field:"optional" json:"autoRenewPeriodUnit" yaml:"autoRenewPeriodUnit"`
	AutoStartSessionCluster interface{} `field:"optional" json:"autoStartSessionCluster" yaml:"autoStartSessionCluster"`
	DlfCatalogId interface{} `field:"optional" json:"dlfCatalogId" yaml:"dlfCatalogId"`
	DlfType interface{} `field:"optional" json:"dlfType" yaml:"dlfType"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	GpuSpec interface{} `field:"optional" json:"gpuSpec" yaml:"gpuSpec"`
	GpuSubscription interface{} `field:"optional" json:"gpuSubscription" yaml:"gpuSubscription"`
	IpWhiteList interface{} `field:"optional" json:"ipWhiteList" yaml:"ipWhiteList"`
	PaymentDurationUnit interface{} `field:"optional" json:"paymentDurationUnit" yaml:"paymentDurationUnit"`
	ReleaseType interface{} `field:"optional" json:"releaseType" yaml:"releaseType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Subscription interface{} `field:"optional" json:"subscription" yaml:"subscription"`
	Tags *[]*RosSparkWorkspace_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

