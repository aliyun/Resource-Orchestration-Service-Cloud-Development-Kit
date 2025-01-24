package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `CodeSource`.
type ICodeSource interface {
	alicloudroscdkcore.IResource
	// Attribute Accessibility: Visibility of the code configuration.
	AttrAccessibility() interface{}
	// Attribute CodeBranch: Code repository branch.
	AttrCodeBranch() interface{}
	// Attribute CodeCommit: The code CommitId.
	AttrCodeCommit() interface{}
	// Attribute CodeRepo: Code repository address.
	AttrCodeRepo() interface{}
	// Attribute CodeRepoAccessToken: The Token used to access the code repository.
	AttrCodeRepoAccessToken() interface{}
	// Attribute CodeRepoUserName: The user name of the code repository.
	AttrCodeRepoUserName() interface{}
	// Attribute CodeSourcesId: The ID of the created code configuration.
	AttrCodeSourcesId() interface{}
	// Attribute CreateTime: The creation time of the code.
	AttrCreateTime() interface{}
	// Attribute Description: A detailed description of the code configuration.
	AttrDescription() interface{}
	// Attribute DisplayName: Code source configuration name.
	AttrDisplayName() interface{}
	// Attribute GmtModifyTime: Code configuration modification time.
	//
	// The time format is iso8601.
	AttrGmtModifyTime() interface{}
	// Attribute MountPath: The local Mount Directory of the code.
	AttrMountPath() interface{}
	// Attribute UserId: The ID of the creator of the code configuration source.
	AttrUserId() interface{}
	// Attribute WorkspaceId: The ID of the workspace.
	AttrWorkspaceId() interface{}
	Props() *CodeSourceProps
}

// The jsii proxy for ICodeSource
type jsiiProxy_ICodeSource struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICodeSource) AttrAccessibility() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessibility",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrCodeBranch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCodeBranch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrCodeCommit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCodeCommit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrCodeRepo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCodeRepo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrCodeRepoAccessToken() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCodeRepoAccessToken",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrCodeRepoUserName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCodeRepoUserName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrCodeSourcesId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCodeSourcesId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrDisplayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisplayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrGmtModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGmtModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrMountPath() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMountPath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) AttrWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICodeSource) Props() *CodeSourceProps {
	var returns *CodeSourceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

