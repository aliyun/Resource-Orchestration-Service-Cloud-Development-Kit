package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CenBandwidthLimit`.
type ICenBandwidthLimit interface {
	alicloudroscdkcore.IResource
	Props() *CenBandwidthLimitProps
}

// The jsii proxy for ICenBandwidthLimit
type jsiiProxy_ICenBandwidthLimit struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICenBandwidthLimit) Props() *CenBandwidthLimitProps {
	var returns *CenBandwidthLimitProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

