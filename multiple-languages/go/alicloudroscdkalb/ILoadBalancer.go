package alicloudroscdkalb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `LoadBalancer`.
type ILoadBalancer interface {
	alicloudroscdkcore.IResource
	// Attribute AddressType: The type of IP address that the ALB instance uses to provide services.
	AttrAddressType() interface{}
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute DNSName: The domain name of the ALB instance.
	AttrDnsName() interface{}
	// Attribute LoadBalancerEdition: The edition of the ALB instance.
	AttrLoadBalancerEdition() interface{}
	// Attribute LoadBalancerId: The ID of the ALB instance.
	AttrLoadBalancerId() interface{}
	// Attribute VpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
	AttrVpcId() interface{}
	// Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
	AttrZoneMappings() interface{}
	Props() *LoadBalancerProps
}

// The jsii proxy for ILoadBalancer
type jsiiProxy_ILoadBalancer struct {
	internal.Type__alicloudroscdkcoreIResource
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

func (j *jsiiProxy_ILoadBalancer) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrDnsName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDnsName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrLoadBalancerEdition() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerEdition",
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

func (j *jsiiProxy_ILoadBalancer) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrZoneMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneMappings",
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

