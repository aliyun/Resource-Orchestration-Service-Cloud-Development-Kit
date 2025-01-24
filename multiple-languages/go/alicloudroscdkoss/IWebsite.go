package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `Website`.
type IWebsite interface {
	alicloudroscdkcore.IResource
	Props() *WebsiteProps
}

// The jsii proxy for IWebsite
type jsiiProxy_IWebsite struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWebsite) Props() *WebsiteProps {
	var returns *WebsiteProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

