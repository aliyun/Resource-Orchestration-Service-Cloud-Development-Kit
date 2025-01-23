package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Signature`.
type ISignature interface {
	alicloudroscdkcore.IResource
	// Attribute SignatureId: The id of the created signature.
	AttrSignatureId() interface{}
	Props() *SignatureProps
}

// The jsii proxy for ISignature
type jsiiProxy_ISignature struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISignature) AttrSignatureId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSignatureId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISignature) Props() *SignatureProps {
	var returns *SignatureProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

