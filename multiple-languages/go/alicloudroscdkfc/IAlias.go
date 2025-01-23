package alicloudroscdkfc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/internal"
)

// Represents a `Alias`.
type IAlias interface {
	alicloudroscdkcore.IResource
	// Attribute AliasName: The alias name.
	AttrAliasName() interface{}
	// Attribute ServiceName: The service name.
	AttrServiceName() interface{}
	// Attribute VersionId: The version ID.
	AttrVersionId() interface{}
	Props() *AliasProps
}

// The jsii proxy for IAlias
type jsiiProxy_IAlias struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAlias) AttrAliasName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAliasName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlias) AttrServiceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlias) AttrVersionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlias) Props() *AliasProps {
	var returns *AliasProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

