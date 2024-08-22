package datasource


// Properties for defining a `RosApis`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
type RosApisProps struct {
	ApiId interface{} `field:"optional" json:"apiId" yaml:"apiId"`
	ApiName interface{} `field:"optional" json:"apiName" yaml:"apiName"`
	CatalogId interface{} `field:"optional" json:"catalogId" yaml:"catalogId"`
	EnableTagAuth interface{} `field:"optional" json:"enableTagAuth" yaml:"enableTagAuth"`
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Visibility interface{} `field:"optional" json:"visibility" yaml:"visibility"`
}

