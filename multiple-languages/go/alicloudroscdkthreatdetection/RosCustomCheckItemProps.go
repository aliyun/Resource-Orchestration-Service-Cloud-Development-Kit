package alicloudroscdkthreatdetection


// Properties for defining a `RosCustomCheckItem`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
type RosCustomCheckItemProps struct {
	CheckRule interface{} `field:"required" json:"checkRule" yaml:"checkRule"`
	CheckShowName interface{} `field:"required" json:"checkShowName" yaml:"checkShowName"`
	InstanceSubType interface{} `field:"required" json:"instanceSubType" yaml:"instanceSubType"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	RiskLevel interface{} `field:"required" json:"riskLevel" yaml:"riskLevel"`
	SectionIds interface{} `field:"required" json:"sectionIds" yaml:"sectionIds"`
	Status interface{} `field:"required" json:"status" yaml:"status"`
	Vendor interface{} `field:"required" json:"vendor" yaml:"vendor"`
	AssistInfo interface{} `field:"optional" json:"assistInfo" yaml:"assistInfo"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	Solution interface{} `field:"optional" json:"solution" yaml:"solution"`
}

