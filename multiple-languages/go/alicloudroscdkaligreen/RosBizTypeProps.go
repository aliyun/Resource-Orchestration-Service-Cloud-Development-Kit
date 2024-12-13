package alicloudroscdkaligreen


// Properties for defining a `RosBizType`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
type RosBizTypeProps struct {
	BizTypeName interface{} `field:"required" json:"bizTypeName" yaml:"bizTypeName"`
	CiteTemplate interface{} `field:"required" json:"citeTemplate" yaml:"citeTemplate"`
	BizTypeImport interface{} `field:"optional" json:"bizTypeImport" yaml:"bizTypeImport"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	IndustryInfo interface{} `field:"optional" json:"industryInfo" yaml:"industryInfo"`
}

