package alicloudroscdkpai


// Properties for defining a `RosCodeSource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
type RosCodeSourceProps struct {
	Accessibility interface{} `field:"required" json:"accessibility" yaml:"accessibility"`
	CodeRepo interface{} `field:"required" json:"codeRepo" yaml:"codeRepo"`
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	MountPath interface{} `field:"required" json:"mountPath" yaml:"mountPath"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	CodeBranch interface{} `field:"optional" json:"codeBranch" yaml:"codeBranch"`
	CodeCommit interface{} `field:"optional" json:"codeCommit" yaml:"codeCommit"`
	CodeRepoAccessToken interface{} `field:"optional" json:"codeRepoAccessToken" yaml:"codeRepoAccessToken"`
	CodeRepoUserName interface{} `field:"optional" json:"codeRepoUserName" yaml:"codeRepoUserName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

