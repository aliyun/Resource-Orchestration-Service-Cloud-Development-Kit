package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `Rule`.
type IRule interface {
	alicloudroscdkcore.IResource
	// Attribute Cookie: The cookie to be configured on the backend server.
	AttrCookie() interface{}
	// Attribute CookieTimeout: The timeout period of a cookie.
	AttrCookieTimeout() interface{}
	// Attribute Domain: The domain name that is configured in the forwarding rule.
	AttrDomain() interface{}
	// Attribute HealthCheck: Specifies whether to enable health checks.
	AttrHealthCheck() interface{}
	// Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks.
	//
	// Valid values: 1 to 65535.
	AttrHealthCheckConnectPort() interface{}
	// Attribute HealthCheckDomain: The domain name that is used for health checks.
	//
	// Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
	AttrHealthCheckDomain() interface{}
	// Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check.
	//
	// Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
	AttrHealthCheckHttpCode() interface{}
	// Attribute HealthCheckInterval: The time interval between two consecutive health checks.
	AttrHealthCheckInterval() interface{}
	// Attribute HealthCheckTimeout: The timeout period of a health check response.
	//
	// If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
	AttrHealthCheckTimeout() interface{}
	// Attribute HealthCheckUri: The URI that is used for health checks.
	AttrHealthCheckUri() interface{}
	// Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy.
	//
	// In this case, the health check state is changed from fail to success.
	AttrHealthyThreshold() interface{}
	// Attribute ListenerPort: The listener port that is used by the SLB instance.
	AttrListenerPort() interface{}
	// Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
	AttrListenerSync() interface{}
	// Attribute LoadBalancerId: The ID of the SLB instance.
	AttrLoadBalancerId() interface{}
	// Attribute RuleId: The ID of the forwarding rule.
	AttrRuleId() interface{}
	// Attribute RuleName: The name of the forwarding rule.
	AttrRuleName() interface{}
	// Attribute Scheduler: The scheduling algorithm.
	AttrScheduler() interface{}
	// Attribute StickySession: Indicates whether session persistence is enabled.
	//
	// Valid values: on and off.
	AttrStickySession() interface{}
	// Attribute StickySessionType: The method that is used to handle a cookie.
	AttrStickySessionType() interface{}
	// Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy.
	//
	// In this case, the health check state is changed from success to fail.
	AttrUnhealthyThreshold() interface{}
	// Attribute Url: The URL that is configured in the forwarding rule.
	AttrUrl() interface{}
	// Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.
	AttrVserverGroupId() interface{}
	Props() *RuleProps
}

// The jsii proxy for IRule
type jsiiProxy_IRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRule) AttrCookie() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCookie",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrCookieTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCookieTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrHealthCheck() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheck",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrHealthCheckConnectPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckConnectPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrHealthCheckDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrHealthCheckHttpCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckHttpCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrHealthCheckInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrHealthCheckTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrHealthCheckUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrHealthyThreshold() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthyThreshold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrListenerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrListenerSync() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerSync",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrScheduler() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduler",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrStickySession() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStickySession",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrStickySessionType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStickySessionType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrUnhealthyThreshold() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUnhealthyThreshold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrVserverGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVserverGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) Props() *RuleProps {
	var returns *RuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

