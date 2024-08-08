package alicloudroscdkcomputenest


// Properties for defining a `RosServiceInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
type RosServiceInstanceProps struct {
	Service interface{} `field:"required" json:"service" yaml:"service"`
	Commodity interface{} `field:"optional" json:"commodity" yaml:"commodity"`
	ContactGroup interface{} `field:"optional" json:"contactGroup" yaml:"contactGroup"`
	EnableInstanceOps interface{} `field:"optional" json:"enableInstanceOps" yaml:"enableInstanceOps"`
	EnableUserPrometheus interface{} `field:"optional" json:"enableUserPrometheus" yaml:"enableUserPrometheus"`
	MarketInstanceId interface{} `field:"optional" json:"marketInstanceId" yaml:"marketInstanceId"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	OperationName interface{} `field:"optional" json:"operationName" yaml:"operationName"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	PredefinedParameterName interface{} `field:"optional" json:"predefinedParameterName" yaml:"predefinedParameterName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SpecificationCode interface{} `field:"optional" json:"specificationCode" yaml:"specificationCode"`
	Tags *[]*RosServiceInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TemplateName interface{} `field:"optional" json:"templateName" yaml:"templateName"`
}

