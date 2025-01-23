package alicloudroscdkrocketmq5

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq5/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: Instance ID created.
	AttrInstanceId() interface{}
	// Attribute InstanceName: Instance name.
	AttrInstanceName() interface{}
	// Attribute InternetEndpoint: Internet endpoint.
	AttrInternetEndpoint() interface{}
	// Attribute VpcEndpoint: VPC endpoint.
	AttrVpcEndpoint() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInternetEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

