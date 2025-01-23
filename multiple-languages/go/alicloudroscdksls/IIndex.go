package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `Index`.
type IIndex interface {
	alicloudroscdkcore.IResource
	Props() *IndexProps
}

// The jsii proxy for IIndex
type jsiiProxy_IIndex struct {
	internal.Type__alicloudroscdkcoreIResource
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

