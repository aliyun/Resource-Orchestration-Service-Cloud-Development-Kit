package alicloudroscdkfc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/internal"
)

// Represents a `Service`.
type IService interface {
	alicloudroscdkcore.IResource
	// Attribute InternetAccess: Whether enable Internet access.
	AttrInternetAccess() interface{}
	// Attribute LogProject: Log project of service.
	AttrLogProject() interface{}
	// Attribute Logstore: Log store of service.
	AttrLogstore() interface{}
	// Attribute Role: Role of service.
	AttrRole() interface{}
	// Attribute ServiceId: The service ID.
	AttrServiceId() interface{}
	// Attribute ServiceName: The service name.
	AttrServiceName() interface{}
	// Attribute Tags: Tags of service.
	AttrTags() interface{}
	// Attribute VpcId: VPC ID.
	AttrVpcId() interface{}
	Props() *ServiceProps
}

// The jsii proxy for IService
type jsiiProxy_IService struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IService) AttrInternetAccess() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetAccess",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrLogProject() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogProject",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrLogstore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogstore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrRole() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRole",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrServiceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IService) Props() *ServiceProps {
	var returns *ServiceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

