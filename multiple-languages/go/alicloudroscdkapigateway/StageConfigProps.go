package alicloudroscdkapigateway


// Properties for defining a `StageConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-stageconfig
type StageConfigProps struct {
	// Property groupId: The id of the Group.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property stageName: The name of the Stage.
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
	// Property variables: Variables in the stage, key-value pairs.
	Variables interface{} `field:"required" json:"variables" yaml:"variables"`
}

