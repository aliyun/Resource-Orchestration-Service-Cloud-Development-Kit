package alicloudroscdkdrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdrds/internal"
)

// Represents a `DrdsInstance`.
type IDrdsInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute DrdsInstanceId: instance id.
	AttrDrdsInstanceId() interface{}
	// Attribute InternetEndpoint: Public endpoint.
	AttrInternetEndpoint() interface{}
	// Attribute IntranetEndpoint: VPC endpoint.
	AttrIntranetEndpoint() interface{}
	// Attribute OrderId: order number.
	AttrOrderId() interface{}
	Props() *DrdsInstanceProps
}

// The jsii proxy for IDrdsInstance
type jsiiProxy_IDrdsInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDrdsInstance) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrDrdsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDrdsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrInternetEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrIntranetEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIntranetEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) Props() *DrdsInstanceProps {
	var returns *DrdsInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

