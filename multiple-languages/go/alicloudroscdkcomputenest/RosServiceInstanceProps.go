package alicloudroscdkcomputenest


// Properties for defining a `RosServiceInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
type RosServiceInstanceProps struct {
	Service interface{} `field:"required" json:"service" yaml:"service"`
	Commodity interface{} `field:"optional" json:"commodity" yaml:"commodity"`
	ContactGroup interface{} `field:"optional" json:"contactGroup" yaml:"contactGroup"`
	DryRun interface{} `field:"optional" json:"dryRun" yaml:"dryRun"`
	EnableInstanceOps interface{} `field:"optional" json:"enableInstanceOps" yaml:"enableInstanceOps"`
	EnableUserPrometheus interface{} `field:"optional" json:"enableUserPrometheus" yaml:"enableUserPrometheus"`
	OperationName interface{} `field:"optional" json:"operationName" yaml:"operationName"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	PredefinedParameterName interface{} `field:"optional" json:"predefinedParameterName" yaml:"predefinedParameterName"`
	ResourceAutoPay interface{} `field:"optional" json:"resourceAutoPay" yaml:"resourceAutoPay"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ServiceInstanceName interface{} `field:"optional" json:"serviceInstanceName" yaml:"serviceInstanceName"`
	SpecificationCode interface{} `field:"optional" json:"specificationCode" yaml:"specificationCode"`
	Tags *[]*RosServiceInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TemplateName interface{} `field:"optional" json:"templateName" yaml:"templateName"`
}

