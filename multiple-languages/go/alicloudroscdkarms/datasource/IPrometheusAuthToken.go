package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `PrometheusAuthToken`.
type IPrometheusAuthToken interface {
	alicloudroscdkcore.IResource
	// Attribute Token: The token for Grafana read URL.
	AttrToken() interface{}
	Props() *PrometheusAuthTokenProps
}

// The jsii proxy for IPrometheusAuthToken
type jsiiProxy_IPrometheusAuthToken struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPrometheusAuthToken) AttrToken() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrToken",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrometheusAuthToken) Props() *PrometheusAuthTokenProps {
	var returns *PrometheusAuthTokenProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

