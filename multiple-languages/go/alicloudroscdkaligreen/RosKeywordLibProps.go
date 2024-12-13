package alicloudroscdkaligreen


// Properties for defining a `RosKeywordLib`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
type RosKeywordLibProps struct {
	KeywordLibName interface{} `field:"required" json:"keywordLibName" yaml:"keywordLibName"`
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	BizTypes interface{} `field:"optional" json:"bizTypes" yaml:"bizTypes"`
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	LibType interface{} `field:"optional" json:"libType" yaml:"libType"`
	MatchMode interface{} `field:"optional" json:"matchMode" yaml:"matchMode"`
}

