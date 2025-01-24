package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/datasource/internal"
)

// Represents a `GitCodeRepo`.
type IGitCodeRepo interface {
	alicloudroscdkcore.IResource
	// Attribute AuthorizedUrl: Authorized url.
	AttrAuthorizedUrl() interface{}
	Props() *GitCodeRepoProps
}

// The jsii proxy for IGitCodeRepo
type jsiiProxy_IGitCodeRepo struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGitCodeRepo) AttrAuthorizedUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthorizedUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGitCodeRepo) Props() *GitCodeRepoProps {
	var returns *GitCodeRepoProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

