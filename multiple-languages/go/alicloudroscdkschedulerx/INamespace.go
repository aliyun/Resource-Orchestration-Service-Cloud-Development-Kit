package alicloudroscdkschedulerx

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkschedulerx/internal"
)

// Represents a `Namespace`.
type INamespace interface {
	alicloudroscdkcore.IResource
	// Attribute NamespaceUid: The ID of the namespace.
	AttrNamespaceUid() interface{}
	Props() *NamespaceProps
}

// The jsii proxy for INamespace
type jsiiProxy_INamespace struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INamespace) AttrNamespaceUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceUid",
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

