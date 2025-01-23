package alicloudroscdkflink

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkflink/internal"
)

// Represents a `Namespace`.
type INamespace interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: Instance ID.
	AttrInstanceId() interface{}
	// Attribute Namespace: Project space name.
	AttrNamespace() interface{}
	Props() *NamespaceProps
}

// The jsii proxy for INamespace
type jsiiProxy_INamespace struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INamespace) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespace) AttrNamespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespace",
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

