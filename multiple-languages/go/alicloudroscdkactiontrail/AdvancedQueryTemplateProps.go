package alicloudroscdkactiontrail


// Properties for defining a `AdvancedQueryTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
type AdvancedQueryTemplateProps struct {
	// Property simpleQuery: Indicates whether the template is a simple query.
	SimpleQuery interface{} `field:"required" json:"simpleQuery" yaml:"simpleQuery"`
	// Property templateSql: The SQL statement of the advanced query template.
	TemplateSql interface{} `field:"required" json:"templateSql" yaml:"templateSql"`
	// Property templateName: The name of the advanced query template.
	TemplateName interface{} `field:"optional" json:"templateName" yaml:"templateName"`
}

