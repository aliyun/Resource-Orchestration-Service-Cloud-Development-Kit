package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `PrometheusUrl`.
type IPrometheusUrl interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: Cluster ID.
	AttrClusterId() interface{}
	// Attribute ClusterType: Cluster type.
	AttrClusterType() interface{}
	// Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
	AttrGrafanaUrl() interface{}
	// Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
	AttrInternetGrafanaUrl() interface{}
	// Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
	AttrInternetOpenTelemetryUrl() interface{}
	// Attribute InternetPushGatewayUrl: Internet push gateway URL.
	AttrInternetPushGatewayUrl() interface{}
	// Attribute InternetRemoteReadUrl: Internet remote read URL.
	AttrInternetRemoteReadUrl() interface{}
	// Attribute InternetRemoteWriteUrl: Internet remote write URL.
	AttrInternetRemoteWriteUrl() interface{}
	// Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
	AttrOpenTelemetryUrl() interface{}
	// Attribute PushGatewayUrl: Internal push gateway URL.
	AttrPushGatewayUrl() interface{}
	// Attribute RemoteReadUrl: Internal remote read URL.
	AttrRemoteReadUrl() interface{}
	// Attribute RemoteWriteUrl: Internal remote write URL.
	AttrRemoteWriteUrl() interface{}
	// Attribute Token: The token for Grafana read URL.
	AttrToken() interface{}
	Props() *PrometheusUrlProps
}

// The jsii proxy for IPrometheusUrl
type jsiiProxy_IPrometheusUrl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPrometheusUrl) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrClusterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrGrafanaUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrafanaUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrInternetGrafanaUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetGrafanaUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrInternetOpenTelemetryUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetOpenTelemetryUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrInternetPushGatewayUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetPushGatewayUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrInternetRemoteReadUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetRemoteReadUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrInternetRemoteWriteUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetRemoteWriteUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrOpenTelemetryUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOpenTelemetryUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrPushGatewayUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPushGatewayUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrRemoteReadUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemoteReadUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrRemoteWriteUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemoteWriteUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) AttrToken() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrToken",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusUrl) Props() *PrometheusUrlProps {
	var returns *PrometheusUrlProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

