package alicloudroscdkwaf3

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkwaf3/internal"
)

// Represents a `TGW`.
type ITgw interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: The ID of the WAF instance.
	AttrInstanceId() interface{}
	// Attribute Port: Access the cloud product port of WAF.
	AttrPort() interface{}
	// Attribute ResourceProduct: Access to WAF cloud products.
	AttrResourceProduct() interface{}
	// Attribute TgwId: The protection object ID of the transparent access resource.
	AttrTgwId() interface{}
	Props() *TGWProps
}

// The jsii proxy for ITgw
type jsiiProxy_ITgw struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITgw) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITgw) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITgw) AttrResourceProduct() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceProduct",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITgw) AttrTgwId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTgwId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITgw) Props() *TGWProps {
	var returns *TGWProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

