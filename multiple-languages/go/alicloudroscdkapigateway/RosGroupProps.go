package alicloudroscdkapigateway


// Properties for defining a `RosGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-group
type RosGroupProps struct {
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	BasePath interface{} `field:"optional" json:"basePath" yaml:"basePath"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	InternetEnable interface{} `field:"optional" json:"internetEnable" yaml:"internetEnable"`
	PassthroughHeaders interface{} `field:"optional" json:"passthroughHeaders" yaml:"passthroughHeaders"`
	Tags *[]*RosGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcIntranetEnable interface{} `field:"optional" json:"vpcIntranetEnable" yaml:"vpcIntranetEnable"`
}

