package alicloudroscdkice


// Properties for defining a `RosMediaInfo`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-mediainfo
type RosMediaInfoProps struct {
	InputUrl interface{} `field:"required" json:"inputUrl" yaml:"inputUrl"`
	BusinessType interface{} `field:"optional" json:"businessType" yaml:"businessType"`
	CateId interface{} `field:"optional" json:"cateId" yaml:"cateId"`
	CoverUrl interface{} `field:"optional" json:"coverUrl" yaml:"coverUrl"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	MediaTags interface{} `field:"optional" json:"mediaTags" yaml:"mediaTags"`
	MediaType interface{} `field:"optional" json:"mediaType" yaml:"mediaType"`
	Overwrite interface{} `field:"optional" json:"overwrite" yaml:"overwrite"`
	ReferenceId interface{} `field:"optional" json:"referenceId" yaml:"referenceId"`
	RegisterConfig interface{} `field:"optional" json:"registerConfig" yaml:"registerConfig"`
	SmartTagTemplateId interface{} `field:"optional" json:"smartTagTemplateId" yaml:"smartTagTemplateId"`
	Title interface{} `field:"optional" json:"title" yaml:"title"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	WorkflowId interface{} `field:"optional" json:"workflowId" yaml:"workflowId"`
}

