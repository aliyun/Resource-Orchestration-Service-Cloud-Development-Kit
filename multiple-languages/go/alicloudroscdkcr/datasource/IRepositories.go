package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/datasource/internal"
)

// Represents a `Repositories`.
type IRepositories interface {
	alicloudroscdkcore.IResource
	// Attribute RepoNames: The list of repository names.
	AttrRepoNames() interface{}
	// Attribute Repos: The list of repositories.
	AttrRepos() interface{}
	Props() *RepositoriesProps
}

// The jsii proxy for IRepositories
type jsiiProxy_IRepositories struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRepositories) AttrRepoNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRepoNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRepositories) AttrRepos() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRepos",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRepositories) Props() *RepositoriesProps {
	var returns *RepositoriesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

