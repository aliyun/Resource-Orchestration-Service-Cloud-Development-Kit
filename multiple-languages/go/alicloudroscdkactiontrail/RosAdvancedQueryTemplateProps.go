package alicloudroscdkactiontrail


// Properties for defining a `RosAdvancedQueryTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-advancedquerytemplate
type RosAdvancedQueryTemplateProps struct {
	SimpleQuery interface{} `field:"required" json:"simpleQuery" yaml:"simpleQuery"`
	TemplateSql interface{} `field:"required" json:"templateSql" yaml:"templateSql"`
	TemplateName interface{} `field:"optional" json:"templateName" yaml:"templateName"`
}

