package alicloudroscdkacm

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkacm/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Namespace`.
type INamespace interface {
	alicloudroscdkcore.IResource
	// Attribute Endpoint: Endpoint.
	AttrEndpoint() interface{}
	// Attribute NamespaceId: ID namespace.
	AttrNamespaceId() interface{}
	Props() *NamespaceProps
}

// The jsii proxy for INamespace
type jsiiProxy_INamespace struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INamespace) AttrEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrNamespaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) Props() *NamespaceProps {
	var returns *NamespaceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

