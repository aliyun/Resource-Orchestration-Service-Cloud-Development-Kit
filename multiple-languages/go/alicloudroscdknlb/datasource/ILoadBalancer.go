package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/datasource/internal"
)

// Represents a `LoadBalancer`.
type ILoadBalancer interface {
	alicloudroscdkcore.IResource
	// Attribute AddressIpVersion: The protocol version.
	AttrAddressIpVersion() interface{}
	// Attribute AddressType: The IPv4 network type of the NLB instance.
	AttrAddressType() interface{}
	// Attribute BandwidthPackageId: The ID of the EIP bandwidth plan.
	AttrBandwidthPackageId() interface{}
	// Attribute Cps: The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address).
	AttrCps() interface{}
	// Attribute CreateTime: The time when the NLB instance was created.
	AttrCreateTime() interface{}
	// Attribute CrossZoneEnabled: Indicates whether the NLB instance is accessible across zones.
	AttrCrossZoneEnabled() interface{}
	// Attribute DeletionProtectionConfig: The configuration of the deletion protection feature.
	AttrDeletionProtectionConfig() interface{}
	// Attribute DNSName: The domain name of the NLB instance.
	AttrDnsName() interface{}
	// Attribute Ipv6AddressType: The IPv6 network type of the NLB instance.
	AttrIpv6AddressType() interface{}
	// Attribute LoadBalancerBillingConfig: The billing information of the NLB instance.
	AttrLoadBalancerBillingConfig() interface{}
	// Attribute LoadBalancerBusinessStatus: The status of workloads on the NLB instance.
	AttrLoadBalancerBusinessStatus() interface{}
	// Attribute LoadBalancerId: ID of the LoadBalancer.
	AttrLoadBalancerId() interface{}
	// Attribute LoadBalancerName: The NLB instance name.
	AttrLoadBalancerName() interface{}
	// Attribute LoadBalancerStatus: The NLB instance status.
	AttrLoadBalancerStatus() interface{}
	// Attribute LoadBalancerType: The type of the Server Load Balancer (SLB) instance.
	//
	// Set the value to network, which specifies NLB.
	AttrLoadBalancerType() interface{}
	// Attribute ModificationProtectionConfig: The configuration of the configuration read-only mode.
	AttrModificationProtectionConfig() interface{}
	// Attribute OperationLocks: The information about the locked NLB instance.
	AttrOperationLocks() interface{}
	// Attribute RegionId: The region ID of the NLB instance.
	AttrRegionId() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SecurityGroupIds: The ID of the security group associated with the NLB instance.
	AttrSecurityGroupIds() interface{}
	// Attribute Tags: The tags of the resource.
	AttrTags() interface{}
	// Attribute VpcId: The VPC ID of the NLB instance.
	AttrVpcId() interface{}
	// Attribute ZoneMappings: The list of zones and vSwitches in the zones.
	AttrZoneMappings() interface{}
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

func (j *jsiiProxy_ILoadBalancer) AttrBandwidthPackageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrCps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrCrossZoneEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCrossZoneEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrDeletionProtectionConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeletionProtectionConfig",
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

func (j *jsiiProxy_ILoadBalancer) AttrIpv6AddressType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6AddressType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrLoadBalancerBillingConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerBillingConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrLoadBalancerBusinessStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerBusinessStatus",
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

func (j *jsiiProxy_ILoadBalancer) AttrLoadBalancerStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrLoadBalancerType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrModificationProtectionConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModificationProtectionConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrOperationLocks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperationLocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRegionId",
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

func (j *jsiiProxy_ILoadBalancer) AttrSecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
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

