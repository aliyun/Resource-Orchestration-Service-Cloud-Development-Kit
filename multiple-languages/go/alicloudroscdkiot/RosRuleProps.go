package alicloudroscdkiot


// Properties for defining a `RosRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-rule
type RosRuleProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	DataType interface{} `field:"optional" json:"dataType" yaml:"dataType"`
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
	ProductKey interface{} `field:"optional" json:"productKey" yaml:"productKey"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RuleAction interface{} `field:"optional" json:"ruleAction" yaml:"ruleAction"`
	RuleDesc interface{} `field:"optional" json:"ruleDesc" yaml:"ruleDesc"`
	Select interface{} `field:"optional" json:"select" yaml:"select"`
	ShortTopic interface{} `field:"optional" json:"shortTopic" yaml:"shortTopic"`
	StartRule interface{} `field:"optional" json:"startRule" yaml:"startRule"`
	TopicType interface{} `field:"optional" json:"topicType" yaml:"topicType"`
	Where interface{} `field:"optional" json:"where" yaml:"where"`
}

