package datasource


// Properties for defining a `Templates`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
type TemplatesProps struct {
	// Property category: The type of the template.
	//
	// Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	// Property createdBy: The creator of the template.
	CreatedBy interface{} `field:"optional" json:"createdBy" yaml:"createdBy"`
	// Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
	CreatedDateAfter interface{} `field:"optional" json:"createdDateAfter" yaml:"createdDateAfter"`
	// Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
	CreatedDateBefore interface{} `field:"optional" json:"createdDateBefore" yaml:"createdDateBefore"`
	// Property hasTrigger: Specifies whether to query the template that is configured with a trigger.
	HasTrigger interface{} `field:"optional" json:"hasTrigger" yaml:"hasTrigger"`
	// Property isExample: Specifies whether the template is an example template.
	IsExample interface{} `field:"optional" json:"isExample" yaml:"isExample"`
	// Property isFavorite: Specifies whether the template is added to favorites.
	IsFavorite interface{} `field:"optional" json:"isFavorite" yaml:"isFavorite"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property shareType: The share type of the template.
	//
	// Valid values:
	// Public
	// Private.
	ShareType interface{} `field:"optional" json:"shareType" yaml:"shareType"`
	// Property sortField: The field that is used to sort the templates to be queried.
	//
	// Valid values:
	// TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
	// Popularity: The system sorts the returned templates based on the popularity of the templates.
	// TemplateName: The system sorts the returned templates based on the names of the templates.
	// CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
	// UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
	SortField interface{} `field:"optional" json:"sortField" yaml:"sortField"`
	// Property sortOrder: The order in which you want to sort the results.
	//
	// Valid values:
	// Ascending: ascending order.
	// Descending: descending order. This is the default value.
	SortOrder interface{} `field:"optional" json:"sortOrder" yaml:"sortOrder"`
	// Property tags: The tag keys and values.
	//
	// The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	// Property templateFormat: The format of the template.
	//
	// Valid values:
	// JSON
	// YAML.
	TemplateFormat interface{} `field:"optional" json:"templateFormat" yaml:"templateFormat"`
	// Property templateName: The name of the template.
	TemplateName interface{} `field:"optional" json:"templateName" yaml:"templateName"`
	// Property templateType: The type of the template.
	//
	// Valid values:
	// Automation: the template for automated tasks.
	// State: the template for configuration inventories.
	// Package: the template for software packages.
	TemplateType interface{} `field:"optional" json:"templateType" yaml:"templateType"`
}

