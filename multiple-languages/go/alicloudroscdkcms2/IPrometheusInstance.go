package alicloudroscdkcms2

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms2/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `PrometheusInstance`.
type IPrometheusInstance interface {
	alicloudroscdkcore.IResource
	// Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.
	AttrHttpApiInterUrl() interface{}
	// Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.
	AttrHttpApiIntraUrl() interface{}
	// Attribute PrometheusInstanceId: The ID of the Prometheus instance.
	AttrPrometheusInstanceId() interface{}
	// Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.
	AttrPushGatewayInterUrl() interface{}
	// Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.
	AttrPushGatewayIntraUrl() interface{}
	// Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.
	AttrRemoteReadInterUrl() interface{}
	// Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.
	AttrRemoteReadIntraUrl() interface{}
	// Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.
	AttrRemoteWriteInterUrl() interface{}
	// Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.
	AttrRemoteWriteIntraUrl() interface{}
	Props() *PrometheusInstanceProps
}

// The jsii proxy for IPrometheusInstance
type jsiiProxy_IPrometheusInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPrometheusInstance) AttrHttpApiInterUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpApiInterUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusInstance) AttrHttpApiIntraUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpApiIntraUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusInstance) AttrPrometheusInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrometheusInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusInstance) AttrPushGatewayInterUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPushGatewayInterUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusInstance) AttrPushGatewayIntraUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPushGatewayIntraUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusInstance) AttrRemoteReadInterUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemoteReadInterUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusInstance) AttrRemoteReadIntraUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemoteReadIntraUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusInstance) AttrRemoteWriteInterUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemoteWriteInterUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusInstance) AttrRemoteWriteIntraUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemoteWriteIntraUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusInstance) Props() *PrometheusInstanceProps {
	var returns *PrometheusInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

