package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `ExternalDataService`.
type IExternalDataService interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute ModifyTime: Last modification time.
	AttrModifyTime() interface{}
	// Attribute ServiceDescription: Service Description.
	AttrServiceDescription() interface{}
	// Attribute ServiceId: Service ID.
	AttrServiceId() interface{}
	// Attribute ServiceName: Service Name.
	AttrServiceName() interface{}
	// Attribute ServiceSpec: Service Specifications.
	AttrServiceSpec() interface{}
	Props() *ExternalDataServiceProps
}

// The jsii proxy for IExternalDataService
type jsiiProxy_IExternalDataService struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IExternalDataService) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExternalDataService) AttrModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExternalDataService) AttrServiceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExternalDataService) AttrServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExternalDataService) AttrServiceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExternalDataService) AttrServiceSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExternalDataService) Props() *ExternalDataServiceProps {
	var returns *ExternalDataServiceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

