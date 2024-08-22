package alicloudroscdkapigateway


// Properties for defining a `RosDeployment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-deployment
type RosDeploymentProps struct {
	ApiId interface{} `field:"required" json:"apiId" yaml:"apiId"`
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	HistoryVersion interface{} `field:"optional" json:"historyVersion" yaml:"historyVersion"`
}

