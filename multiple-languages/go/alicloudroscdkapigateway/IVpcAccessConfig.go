package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `VpcAccessConfig`.
type IVpcAccessConfig interface {
	alicloudroscdkcore.IResource
	Props() *VpcAccessConfigProps
}

// The jsii proxy for IVpcAccessConfig
type jsiiProxy_IVpcAccessConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcAccessConfig) Props() *VpcAccessConfigProps {
	var returns *VpcAccessConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

