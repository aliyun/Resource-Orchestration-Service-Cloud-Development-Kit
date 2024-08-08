package alicloudroscdkros


// Properties for defining a `RosCustomResource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-customresource
type RosCustomResourceProps struct {
	ServiceToken interface{} `field:"required" json:"serviceToken" yaml:"serviceToken"`
	Timeout interface{} `field:"required" json:"timeout" yaml:"timeout"`
	HttpConfig interface{} `field:"optional" json:"httpConfig" yaml:"httpConfig"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
}

