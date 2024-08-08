package alicloudroscdkapigateway


// Properties for defining a `Deployment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-deployment
type DeploymentProps struct {
	// Property apiId: The id of the API.
	ApiId interface{} `field:"required" json:"apiId" yaml:"apiId"`
	// Property groupId: The id of the Group.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property stageName: Bind traffic in this stage.
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
	// Property description: Description of the deployment, less than 180 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property historyVersion: The history version.
	HistoryVersion interface{} `field:"optional" json:"historyVersion" yaml:"historyVersion"`
}

