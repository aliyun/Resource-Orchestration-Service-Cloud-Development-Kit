package alicloudroscdkapig


// Properties for defining a `RosHttpApi`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
type RosHttpApiProps struct {
	HttpApiName interface{} `field:"required" json:"httpApiName" yaml:"httpApiName"`
	Protocols interface{} `field:"required" json:"protocols" yaml:"protocols"`
	BasePath interface{} `field:"optional" json:"basePath" yaml:"basePath"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

