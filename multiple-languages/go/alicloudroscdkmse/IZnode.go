package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `Znode`.
type IZnode interface {
	alicloudroscdkcore.IResource
	Props() *ZnodeProps
}

// The jsii proxy for IZnode
type jsiiProxy_IZnode struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IZnode) Props() *ZnodeProps {
	var returns *ZnodeProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

