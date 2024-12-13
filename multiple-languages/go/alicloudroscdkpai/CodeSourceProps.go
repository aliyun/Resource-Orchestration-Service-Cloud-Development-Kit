package alicloudroscdkpai


// Properties for defining a `CodeSource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
type CodeSourceProps struct {
	// Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator.
	//
	// - PUBLIC: In this workspace, it is visible to everyone.
	Accessibility interface{} `field:"required" json:"accessibility" yaml:"accessibility"`
	// Property codeRepo: Code repository address.
	CodeRepo interface{} `field:"required" json:"codeRepo" yaml:"codeRepo"`
	// Property displayName: Code source configuration name.
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property mountPath: The local Mount Directory of the code.
	MountPath interface{} `field:"required" json:"mountPath" yaml:"mountPath"`
	// Property workspaceId: The ID of the workspace.
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	// Property codeBranch: Code repository branch.
	CodeBranch interface{} `field:"optional" json:"codeBranch" yaml:"codeBranch"`
	// Property codeCommit: The code CommitId.
	CodeCommit interface{} `field:"optional" json:"codeCommit" yaml:"codeCommit"`
	// Property codeRepoAccessToken: The Token used to access the code repository.
	CodeRepoAccessToken interface{} `field:"optional" json:"codeRepoAccessToken" yaml:"codeRepoAccessToken"`
	// Property codeRepoUserName: The user name of the code repository.
	CodeRepoUserName interface{} `field:"optional" json:"codeRepoUserName" yaml:"codeRepoUserName"`
	// Property description: A detailed description of the code configuration.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

