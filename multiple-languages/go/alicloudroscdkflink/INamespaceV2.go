package alicloudroscdkflink

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkflink/internal"
)

// Represents a `NamespaceV2`.
type INamespaceV2 interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: Instance ID.
	AttrInstanceId() interface{}
	// Attribute Namespace: Project space name.
	AttrNamespace() interface{}
	Props() *NamespaceV2Props
}

// The jsii proxy for INamespaceV2
type jsiiProxy_INamespaceV2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INamespaceV2) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespaceV2) AttrNamespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INamespaceV2) Props() *NamespaceV2Props {
	var returns *NamespaceV2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

