package alicloudroscdkaligreen


// Properties for defining a `BizType`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-biztype
type BizTypeProps struct {
	// Property bizTypeName: The name of the business scenario defined by the customer.
	//
	// It can contain no more than 32 characters in English, numbers, and underscores.
	BizTypeName interface{} `field:"required" json:"bizTypeName" yaml:"bizTypeName"`
	// Property citeTemplate: Specifies whether to import the configuration of an industry template.
	//
	// Default value: false. Valid values:
	// true: imports the configuration of an industry template.
	// false: does not import the configuration of an industry template. If the value is true, you must specify the industryInfo parameter.
	CiteTemplate interface{} `field:"required" json:"citeTemplate" yaml:"citeTemplate"`
	// Property bizTypeImport: The name of the existing business scenario that was imported from when the business scenario was created.
	BizTypeImport interface{} `field:"optional" json:"bizTypeImport" yaml:"bizTypeImport"`
	// Property description: The description of the business scenario defined by the customer, which is a combination of Chinese and English, numbers, and underscores, and cannot exceed 32 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property industryInfo: The industry classification.
	//
	// For specific types see <a href='https:\/\/help.aliyun.com\/document_detail\/210982.html' target='_blank'>CreateBizType<\/a>.
	IndustryInfo interface{} `field:"optional" json:"industryInfo" yaml:"industryInfo"`
}

