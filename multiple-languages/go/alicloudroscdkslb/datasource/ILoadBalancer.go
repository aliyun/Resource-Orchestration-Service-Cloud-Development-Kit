package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `LoadBalancer`.
type ILoadBalancer interface {
	alicloudroscdkcore.IResource
	// Attribute Address: The service IP address of the CLB instance.
	AttrAddress() interface{}
	// Attribute AddressIpVersion: The version of the IP address.
	//
	// Valid values: ipv4 and ipv6.
	AttrAddressIpVersion() interface{}
	// Attribute AddressType: The address type of the CLB instance.
	AttrAddressType() interface{}
	// Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.
	AttrAutoReleaseTime() interface{}
	// Attribute BackendServers: The backend servers of the CLB instance.
	AttrBackendServers() interface{}
	// Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
	AttrBandwidth() interface{}
	// Attribute CreateTime: The time when the CLB instance was created.
	AttrCreateTime() interface{}
	// Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
	AttrCreateTimeStamp() interface{}
	// Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
	AttrDeleteProtection() interface{}
	// Attribute EndTime: The time when the CLB instance expires.
	AttrEndTime() interface{}
	// Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
	AttrEndTimeStamp() interface{}
	// Attribute InstanceChargeType: Instance billing method.
	AttrInstanceChargeType() interface{}
	// Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.
	AttrInternetChargeType() interface{}
	// Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.
	AttrListenerPortsAndProtocal() interface{}
	// Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.
	AttrListenerPortsAndProtocol() interface{}
	// Attribute LoadBalancerId: The CLB instance ID.
	AttrLoadBalancerId() interface{}
	// Attribute LoadBalancerName: The name of the CLB instance.
	AttrLoadBalancerName() interface{}
	// Attribute LoadBalancerSpec: The specification of the CLB instance.
	AttrLoadBalancerSpec() interface{}
	// Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
	AttrMasterZoneId() interface{}
	// Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
	AttrModificationProtectionReason() interface{}
	// Attribute ModificationProtectionStatus: Load balancing modifies the protection state.
	AttrModificationProtectionStatus() interface{}
	// Attribute NetworkType: The network type of the CLB instance.
	AttrNetworkType() interface{}
	// Attribute PaymentType: Load balancing instance payment type.
	AttrPaymentType() interface{}
	// Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.
	AttrRegionIdAlias() interface{}
	// Attribute RenewalCycUnit: The auto-renewal cycle.
	//
	// Valid values: Year and Month. Default value: Month.
	AttrRenewalCycUnit() interface{}
	// Attribute RenewalDuration: The auto-renewal duration.
	//
	// This parameter is valid only if RenewalStatus is set to AutoRenewal.
	AttrRenewalDuration() interface{}
	// Attribute RenewalStatus: Indicates whether auto-renewal is enabled.
	AttrRenewalStatus() interface{}
	// Attribute ResourceGroupId: The resource group ID.
	AttrResourceGroupId() interface{}
	// Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
	AttrSlaveZoneId() interface{}
	// Attribute Tags: The tags of the CLB instance.
	AttrTags() interface{}
	// Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
	AttrVpcId() interface{}
	// Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
	AttrVSwitchId() interface{}
	Props() *LoadBalancerProps
}

// The jsii proxy for ILoadBalancer
type jsiiProxy_ILoadBalancer struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILoadBalancer) AttrAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddress",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_ILoadBalancer) AttrAutoReleaseTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrBackendServers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackendServers",
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

func (j *jsiiProxy_ILoadBalancer) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrCreateTimeStamp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTimeStamp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrDeleteProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeleteProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrEndTimeStamp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndTimeStamp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrInstanceChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrInternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrListenerPortsAndProtocal() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerPortsAndProtocal",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrListenerPortsAndProtocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerPortsAndProtocol",
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

func (j *jsiiProxy_ILoadBalancer) AttrModificationProtectionReason() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModificationProtectionReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrModificationProtectionStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModificationProtectionStatus",
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

func (j *jsiiProxy_ILoadBalancer) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrRegionIdAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRegionIdAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrRenewalCycUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRenewalCycUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrRenewalDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRenewalDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILoadBalancer) AttrRenewalStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRenewalStatus",
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

