package datasource


// Properties for defining a `RosTemplates`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
type RosTemplatesProps struct {
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	CreatedBy interface{} `field:"optional" json:"createdBy" yaml:"createdBy"`
	CreatedDateAfter interface{} `field:"optional" json:"createdDateAfter" yaml:"createdDateAfter"`
	CreatedDateBefore interface{} `field:"optional" json:"createdDateBefore" yaml:"createdDateBefore"`
	HasTrigger interface{} `field:"optional" json:"hasTrigger" yaml:"hasTrigger"`
	IsExample interface{} `field:"optional" json:"isExample" yaml:"isExample"`
	IsFavorite interface{} `field:"optional" json:"isFavorite" yaml:"isFavorite"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ShareType interface{} `field:"optional" json:"shareType" yaml:"shareType"`
	SortField interface{} `field:"optional" json:"sortField" yaml:"sortField"`
	SortOrder interface{} `field:"optional" json:"sortOrder" yaml:"sortOrder"`
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	TemplateFormat interface{} `field:"optional" json:"templateFormat" yaml:"templateFormat"`
	TemplateName interface{} `field:"optional" json:"templateName" yaml:"templateName"`
	TemplateType interface{} `field:"optional" json:"templateType" yaml:"templateType"`
}

