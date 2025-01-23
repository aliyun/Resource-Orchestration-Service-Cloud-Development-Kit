package alicloudroscdkkms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/internal"
)

// Represents a `Key`.
type IKey interface {
	alicloudroscdkcore.IResource
	// Attribute KeyId: The globally unique identifier for the CMK.
	AttrKeyId() interface{}
	Props() *KeyProps
}

// The jsii proxy for IKey
type jsiiProxy_IKey struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IKey) AttrKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKey) Props() *KeyProps {
	var returns *KeyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

