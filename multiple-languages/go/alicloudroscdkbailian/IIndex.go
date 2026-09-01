package alicloudroscdkbailian

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbailian/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Index`.
type IIndex interface {
	alicloudroscdkcore.IResource
	// Attribute Id: The unique ID of the knowledge base index.
	AttrId() interface{}
	Props() *IndexProps
}

// The jsii proxy for IIndex
type jsiiProxy_IIndex struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIndex) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIndex) Props() *IndexProps {
	var returns *IndexProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

