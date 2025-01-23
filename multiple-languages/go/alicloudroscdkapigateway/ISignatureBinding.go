package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SignatureBinding`.
type ISignatureBinding interface {
	alicloudroscdkcore.IResource
	Props() *SignatureBindingProps
}

// The jsii proxy for ISignatureBinding
type jsiiProxy_ISignatureBinding struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISignatureBinding) Props() *SignatureBindingProps {
	var returns *SignatureBindingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

