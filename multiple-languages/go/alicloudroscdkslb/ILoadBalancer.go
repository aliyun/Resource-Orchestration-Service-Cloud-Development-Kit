package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `LoadBalancer`.
type ILoadBalancer interface {
	alicloudroscdkcore.IResource
	// Attribute AddressIPVersion: IP version.
	AttrAddressIpVersion() interface{}
	// Attribute AddressType: The address type of the load balancer.
	//
	// "intranet" or "internet".
	AttrAddressType() interface{}
	// Attribute Bandwidth: The bandwidth for network.
	AttrBandwidth() interface{}
	// Attribute IpAddress: The ip address of the load balancer.
	AttrIpAddress() interface{}
	// Attribute LoadBalancerId: The id of load balance created.
	AttrLoadBalancerId() interface{}
	// Attribute LoadBalancerName: Name of created load balancer.
	AttrLoadBalancerName() interface{}
	// Attribute LoadBalancerSpec: The specification of the Server Load Balancer instance.
	AttrLoadBalancerSpec() interface{}
	// Attribute MasterZoneId: The master zone id to create load balancer instance.
	AttrMasterZoneId() interface{}
	// Attribute NetworkType: The network type of the load balancer.
	//
	// "vpc" or "classic" network.
	AttrNetworkType() interface{}
	// Attribute OrderId: The order ID.
	AttrOrderId() interface{}
	// Attribute PayType: The billing method of the instance to be created.
	AttrPayType() interface{}
	// Attribute ResourceGroupId: Resource group id.
	AttrResourceGroupId() interface{}
	// Attribute SlaveZoneId: The slave zone id to create load balancer instance.
	AttrSlaveZoneId() interface{}
	// Attribute VpcId: Vpc id.
	AttrVpcId() interface{}
	// Attribute VSwitchId: VSwitch id.
	AttrVSwitchId() interface{}
	Props() *LoadBalancerProps
}

// The jsii proxy for ILoadBalancer
type jsiiProxy_ILoadBalancer struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILoadBalancer) AttrAddressIpVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddressIpVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrAddressType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddressType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrLoadBalancerName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrLoadBalancerSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrMasterZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrPayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPayType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrSlaveZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlaveZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) Props() *LoadBalancerProps {
	var returns *LoadBalancerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

