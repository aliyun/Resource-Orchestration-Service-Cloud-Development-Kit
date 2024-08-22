package alicloudroscdkarms


// Properties for defining a `RosEnvironment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
type RosEnvironmentProps struct {
	BindResourceId interface{} `field:"required" json:"bindResourceId" yaml:"bindResourceId"`
	EnvironmentName interface{} `field:"required" json:"environmentName" yaml:"environmentName"`
	EnvironmentSubType interface{} `field:"required" json:"environmentSubType" yaml:"environmentSubType"`
	EnvironmentType interface{} `field:"required" json:"environmentType" yaml:"environmentType"`
	DeletePromInstance interface{} `field:"optional" json:"deletePromInstance" yaml:"deletePromInstance"`
	FeePackage interface{} `field:"optional" json:"feePackage" yaml:"feePackage"`
	GrafanaWorkspaceId interface{} `field:"optional" json:"grafanaWorkspaceId" yaml:"grafanaWorkspaceId"`
	ManagedType interface{} `field:"optional" json:"managedType" yaml:"managedType"`
	PrometheusInstanceId interface{} `field:"optional" json:"prometheusInstanceId" yaml:"prometheusInstanceId"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosEnvironment_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

