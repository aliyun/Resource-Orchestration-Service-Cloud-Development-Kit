package alicloudroscdkapigateway


// Properties for defining a `RosStageConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-stageconfig
type RosStageConfigProps struct {
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
	Variables interface{} `field:"required" json:"variables" yaml:"variables"`
}

