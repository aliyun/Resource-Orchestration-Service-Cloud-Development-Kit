package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `AccessKey`.
type IAccessKey interface {
	alicloudroscdkcore.IResource
	// Attribute AccessKeyId: Id of access key.
	AttrAccessKeyId() interface{}
	// Attribute AccessKeySecret: Secret of access key.
	AttrAccessKeySecret() interface{}
	// Attribute Status: Status of access key.
	AttrStatus() interface{}
	Props() *AccessKeyProps
}

// The jsii proxy for IAccessKey
type jsiiProxy_IAccessKey struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessKey) AttrAccessKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessKey) AttrAccessKeySecret() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessKeySecret",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessKey) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessKey) Props() *AccessKeyProps {
	var returns *AccessKeyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

