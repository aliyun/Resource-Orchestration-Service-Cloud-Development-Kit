package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `StreamingDataService`.
type IStreamingDataService interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: Create time.
	AttrCreateTime() interface{}
	// Attribute ModifyTime: Modify time.
	AttrModifyTime() interface{}
	// Attribute ServiceDescription: The description of the service.
	AttrServiceDescription() interface{}
	// Attribute ServiceId: Service ID.
	AttrServiceId() interface{}
	// Attribute ServiceIp: Service VIP.
	AttrServiceIp() interface{}
	// Attribute ServiceManaged: Service used by Cloud products, ture is used.
	AttrServiceManaged() interface{}
	// Attribute ServiceName: Service Name.
	AttrServiceName() interface{}
	// Attribute ServiceOwnerId: Service id of Cloud products.
	AttrServiceOwnerId() interface{}
	// Attribute ServicePort: Service vPort.
	AttrServicePort() interface{}
	// Attribute ServiceSpec: Resource Specifications.
	AttrServiceSpec() interface{}
	Props() *StreamingDataServiceProps
}

// The jsii proxy for IStreamingDataService
type jsiiProxy_IStreamingDataService struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStreamingDataService) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStreamingDataService) AttrModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStreamingDataService) AttrServiceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStreamingDataService) AttrServiceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStreamingDataService) AttrServiceIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStreamingDataService) AttrServiceManaged() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceManaged",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStreamingDataService) AttrServiceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStreamingDataService) AttrServiceOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStreamingDataService) AttrServicePort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServicePort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStreamingDataService) AttrServiceSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStreamingDataService) Props() *StreamingDataServiceProps {
	var returns *StreamingDataServiceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

