package alicloudroscdkecs


// Properties for defining a `RosElasticityAssurance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-elasticityassurance
type RosElasticityAssuranceProps struct {
	InstanceAmount interface{} `field:"required" json:"instanceAmount" yaml:"instanceAmount"`
	InstanceTypes interface{} `field:"required" json:"instanceTypes" yaml:"instanceTypes"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PrivatePoolOptions interface{} `field:"optional" json:"privatePoolOptions" yaml:"privatePoolOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
	Tags *[]*RosElasticityAssurance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

