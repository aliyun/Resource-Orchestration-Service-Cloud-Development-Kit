package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `Kv`.
type IKv interface {
	alicloudroscdkcore.IResource
	// Attribute Value: The content of the key.
	//
	// If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
	AttrValue() interface{}
	Props() *KvProps
}

// The jsii proxy for IKv
type jsiiProxy_IKv struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IKv) AttrValue() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrValue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKv) Props() *KvProps {
	var returns *KvProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

