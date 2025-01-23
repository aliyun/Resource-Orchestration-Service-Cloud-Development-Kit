package alicloudroscdkcr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/internal"
)

// Represents a `Repository`.
type IRepository interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
	AttrInstanceId() interface{}
	// Attribute RepoId: The repository ID.
	AttrRepoId() interface{}
	// Attribute RepoName: The name of the repository.
	AttrRepoName() interface{}
	// Attribute RepoNamespace: The name of the namespace to which the repository belongs.
	AttrRepoNamespace() interface{}
	// Attribute RepoType: The type of the repository.
	AttrRepoType() interface{}
	Props() *RepositoryProps
}

// The jsii proxy for IRepository
type jsiiProxy_IRepository struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRepository) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRepository) AttrRepoId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRepoId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRepository) AttrRepoName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRepoName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRepository) AttrRepoNamespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRepoNamespace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRepository) AttrRepoType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRepoType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRepository) Props() *RepositoryProps {
	var returns *RepositoryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

