package alicloudroscdkesa


// Properties for defining a `RosImageTransform`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
type RosImageTransformProps struct {
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

