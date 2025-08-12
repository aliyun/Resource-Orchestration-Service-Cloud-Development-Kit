package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `EdgeContainerApp`.
type IEdgeContainerApp interface {
	alicloudroscdkcore.IResource
	// Attribute AppStatus: The status of the application.
	AttrAppStatus() interface{}
	// Attribute CreateTime: The time when the application was created.
	AttrCreateTime() interface{}
	// Attribute DomainName: The domain name that is associated with the application.
	//
	// If no domain name is associated with the application, the value is an empty string.
	AttrDomainName() interface{}
	// Attribute EdgeContainerAppName: The name of the application.
	AttrEdgeContainerAppName() interface{}
	// Attribute GatewayType: The type of the gateway.
	AttrGatewayType() interface{}
	// Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.
	AttrHealthCheckFailTimes() interface{}
	// Attribute HealthCheckHost: The domain name that is used for health checks.
	AttrHealthCheckHost() interface{}
	// Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.
	AttrHealthCheckHttpCode() interface{}
	// Attribute HealthCheckInterval: The interval between two consecutive health checks.
	//
	// Unit: seconds.
	AttrHealthCheckInterval() interface{}
	// Attribute HealthCheckMethod: The HTTP request method for health checks.
	AttrHealthCheckMethod() interface{}
	// Attribute HealthCheckPort: The port used for health checks.
	//
	// Valid values: 1 to 65535. Default value: 80.
	AttrHealthCheckPort() interface{}
	// Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
	AttrHealthCheckSuccTimes() interface{}
	// Attribute HealthCheckTimeout: The timeout period of a health check response.
	AttrHealthCheckTimeout() interface{}
	// Attribute HealthCheckType: The health check type.
	AttrHealthCheckType() interface{}
	// Attribute HealthCheckUri: The URI used for health checks.
	AttrHealthCheckUri() interface{}
	// Attribute QuicCid: Indicates whether QUIC is enabled.
	AttrQuicCid() interface{}
	// Attribute Remarks: The remarks.
	//
	// This parameter is empty by default.
	AttrRemarks() interface{}
	// Attribute ServicePort: The server port.
	AttrServicePort() interface{}
	// Attribute TargetPort: The backend port, which is also the service port of the application.
	AttrTargetPort() interface{}
	// Attribute UpdateTime: The time when the application was last modified.
	//
	// The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
	AttrUpdateTime() interface{}
	// Attribute VersionCount: The number of versions of the application.
	AttrVersionCount() interface{}
	Props() *EdgeContainerAppProps
}

// The jsii proxy for IEdgeContainerApp
type jsiiProxy_IEdgeContainerApp struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEdgeContainerApp) AttrAppStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrDomainName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrEdgeContainerAppName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEdgeContainerAppName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrGatewayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrHealthCheckFailTimes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckFailTimes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrHealthCheckHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrHealthCheckHttpCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckHttpCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrHealthCheckInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrHealthCheckMethod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrHealthCheckPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrHealthCheckSuccTimes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckSuccTimes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrHealthCheckTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrHealthCheckType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrHealthCheckUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrQuicCid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQuicCid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrRemarks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemarks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrServicePort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServicePort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrTargetPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) AttrVersionCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEdgeContainerApp) Props() *EdgeContainerAppProps {
	var returns *EdgeContainerAppProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

