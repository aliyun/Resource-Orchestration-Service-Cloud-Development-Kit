package alicloudroscdkoos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/internal"
)

// Represents a `ApplicationConnectionBind`.
type IApplicationConnectionBind interface {
	alicloudroscdkcore.IResource
	Props() *ApplicationConnectionBindProps
}

// The jsii proxy for IApplicationConnectionBind
type jsiiProxy_IApplicationConnectionBind struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplicationConnectionBind) Props() *ApplicationConnectionBindProps {
	var returns *ApplicationConnectionBindProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

