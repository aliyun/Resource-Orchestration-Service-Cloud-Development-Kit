package alicloudroscdkpolardb


// Properties for defining a `RosAITask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
type RosAITaskProps struct {
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	Password interface{} `field:"required" json:"password" yaml:"password"`
	Username interface{} `field:"required" json:"username" yaml:"username"`
	NodeType interface{} `field:"optional" json:"nodeType" yaml:"nodeType"`
}

