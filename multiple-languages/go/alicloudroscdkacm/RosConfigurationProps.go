package alicloudroscdkacm


// Properties for defining a `RosConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-configuration
type RosConfigurationProps struct {
	Content interface{} `field:"required" json:"content" yaml:"content"`
	DataId interface{} `field:"required" json:"dataId" yaml:"dataId"`
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	AppName interface{} `field:"optional" json:"appName" yaml:"appName"`
	Desc interface{} `field:"optional" json:"desc" yaml:"desc"`
	Group interface{} `field:"optional" json:"group" yaml:"group"`
	Tags *string `field:"optional" json:"tags" yaml:"tags"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

