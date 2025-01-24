package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkacm/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Namespaces`.
type INamespaces interface {
	alicloudroscdkcore.IResource
	// Attribute NamespaceIds: The list of namespace IDs.
	AttrNamespaceIds() interface{}
	// Attribute Namespaces: The list of namespaces.
	AttrNamespaces() interface{}
	Props() *NamespacesProps
}

// The jsii proxy for INamespaces
type jsiiProxy_INamespaces struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INamespaces) AttrNamespaceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespaces) AttrNamespaces() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaces",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespaces) Props() *NamespacesProps {
	var returns *NamespacesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

