package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/datasource/internal"
)

// Represents a `Namespaces`.
type INamespaces interface {
	alicloudroscdkcore.IResource
	// Attribute NamespaceNames: The list of namespace names.
	AttrNamespaceNames() interface{}
	// Attribute Namespaces: The list of namespaces.
	AttrNamespaces() interface{}
	Props() *NamespacesProps
}

// The jsii proxy for INamespaces
type jsiiProxy_INamespaces struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INamespaces) AttrNamespaceNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceNames",
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

