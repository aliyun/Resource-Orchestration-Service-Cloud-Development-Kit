package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `LoadBalancerTCPListener`.
type ILoadBalancerTCPListener interface {
	alicloudroscdkcore.IResource
	// Attribute AclId: The ID of the network ACL that is associated with the listener.
	AttrAclId() interface{}
	// Attribute AclIds: The ID list of the network ACL that is associated with the listener.
	AttrAclIds() interface{}
	// Attribute AclStatus: Indicates whether access control is enabled.
	AttrAclStatus() interface{}
	// Attribute AclType: The type of the ACL.
	AttrAclType() interface{}
	// Attribute BackendServerPort: The backend port used by the CLB instance.
	AttrBackendServerPort() interface{}
	// Attribute Bandwidth: The maximum bandwidth of the listener.
	//
	// Unit: Mbit/s.
	AttrBandwidth() interface{}
	// Attribute ConnectionDrain: Indicates whether connection draining is enabled.
	//
	// If ConnectionDrain is set to on, the parameter is returned.
	AttrConnectionDrain() interface{}
	// Attribute ConnectionDrainTimeout: The timeout period of connection draining.
	//
	// If ConnectionDrain is set to on, the parameter is returned.
	AttrConnectionDrainTimeout() interface{}
	// Attribute Description: The description of the listener.
	AttrDescription() interface{}
	// Attribute EstablishedTimeout: The timeout period of a connection.
	AttrEstablishedTimeout() interface{}
	// Attribute HealthCheck: Indicates whether the health check feature is enabled.
	AttrHealthCheck() interface{}
	// Attribute HealthCheckConnectPort: The port that is used for health checks.
	AttrHealthCheckConnectPort() interface{}
	// Attribute HealthCheckConnectTimeout: The timeout period.
	//
	// Unit: seconds.
	AttrHealthCheckConnectTimeout() interface{}
	// Attribute HealthCheckDomain: The domain name that is used for health checks.
	AttrHealthCheckDomain() interface{}
	// Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.
	AttrHealthCheckHttpCode() interface{}
	// Attribute HealthCheckInterval: The interval between two consecutive health checks.
	//
	// Valid values: 1 to 50. Unit: seconds.
	AttrHealthCheckInterval() interface{}
	// Attribute HealthCheckMethod: The health check method.
	AttrHealthCheckMethod() interface{}
	// Attribute HealthCheckType: The health check method that is used by the TCP listener.
	AttrHealthCheckType() interface{}
	// Attribute HealthCheckUri: The URL that is used for health checks.
	AttrHealthCheckUri() interface{}
	// Attribute HealthyThreshold: The healthy threshold.
	//
	// The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
	AttrHealthyThreshold() interface{}
	// Attribute ListenerPort: The frontend port used by the CLB instance.
	AttrListenerPort() interface{}
	// Attribute LoadBalancerId: The ID of the CLB instance.
	AttrLoadBalancerId() interface{}
	// Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
	AttrMasterSlaveServerGroupId() interface{}
	// Attribute PersistenceTimeout: The timeout period of session persistence.
	AttrPersistenceTimeout() interface{}
	// Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
	AttrProxyProtocolV2Enabled() interface{}
	// Attribute Scheduler: The scheduling algorithm.
	AttrScheduler() interface{}
	// Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
	AttrSynProxy() interface{}
	// Attribute UnhealthyThreshold: The unhealthy threshold.
	//
	// The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
	AttrUnhealthyThreshold() interface{}
	// Attribute VServerGroupId: The ID of the associated server group.
	AttrVServerGroupId() interface{}
	Props() *LoadBalancerTCPListenerProps
}

// The jsii proxy for ILoadBalancerTCPListener
type jsiiProxy_ILoadBalancerTCPListener struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrAclId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrAclIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrAclStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrAclType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrBackendServerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackendServerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrConnectionDrain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionDrain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrConnectionDrainTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionDrainTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrEstablishedTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEstablishedTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrHealthCheck() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheck",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrHealthCheckConnectPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckConnectPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrHealthCheckConnectTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckConnectTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrHealthCheckDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrHealthCheckHttpCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckHttpCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrHealthCheckInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrHealthCheckMethod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrHealthCheckType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrHealthCheckUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthCheckUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrHealthyThreshold() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHealthyThreshold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrListenerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrMasterSlaveServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterSlaveServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrPersistenceTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPersistenceTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrProxyProtocolV2Enabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProxyProtocolV2Enabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrScheduler() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduler",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrSynProxy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSynProxy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrUnhealthyThreshold() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUnhealthyThreshold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) AttrVServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancerTCPListener) Props() *LoadBalancerTCPListenerProps {
	var returns *LoadBalancerTCPListenerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

