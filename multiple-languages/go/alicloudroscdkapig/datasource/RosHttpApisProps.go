package datasource


// Properties for defining a `RosHttpApis`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapis
type RosHttpApisProps struct {
	HttpApiName interface{} `field:"optional" json:"httpApiName" yaml:"httpApiName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

