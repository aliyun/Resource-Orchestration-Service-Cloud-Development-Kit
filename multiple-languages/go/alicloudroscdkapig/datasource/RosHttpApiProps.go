package datasource


// Properties for defining a `RosHttpApi`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapi
type RosHttpApiProps struct {
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

