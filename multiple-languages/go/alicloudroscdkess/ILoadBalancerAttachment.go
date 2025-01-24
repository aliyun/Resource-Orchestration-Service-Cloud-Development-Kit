package alicloudroscdkess

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
)

// Represents a `LoadBalancerAttachment`.
type ILoadBalancerAttachment interface {
	alicloudroscdkcore.IResource
	Props() *LoadBalancerAttachmentProps
}

// The jsii proxy for ILoadBalancerAttachment
type jsiiProxy_ILoadBalancerAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILoadBalancerAttachment) Props() *LoadBalancerAttachmentProps {
	var returns *LoadBalancerAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

