package alicloudroscdkredis

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkredis/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute ArchitectureType: The architecture.
	AttrArchitectureType() interface{}
	// Attribute Bandwidth: The bandwidth of the instance.
	//
	// Unit: Mbit/s.
	AttrBandwidth() interface{}
	// Attribute Capacity: The storage capacity of the instance.
	//
	// Unit: MB.
	AttrCapacity() interface{}
	// Attribute ChargeType: The billing method of the instance.
	AttrChargeType() interface{}
	// Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance.
	AttrClassicInnerConnectionPort() interface{}
	// Attribute ClassicInnerConnectionString: The classic inner connection string of the instance.
	AttrClassicInnerConnectionString() interface{}
	// Attribute ConnectionDomain: Connection domain of created instance.
	AttrConnectionDomain() interface{}
	// Attribute Connections: The maximum number of connections supported by the instance.
	AttrConnections() interface{}
	// Attribute DirectConnectionPort: The direct connection port of the instance.
	AttrDirectConnectionPort() interface{}
	// Attribute DirectConnectionString: The direct connection string of the instance.
	AttrDirectConnectionString() interface{}
	// Attribute EngineVersion: The engine version of the instance.
	AttrEngineVersion() interface{}
	// Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders.
	AttrHasRenewChangeOrder() interface{}
	// Attribute InstanceClass: Redis instance type.
	AttrInstanceClass() interface{}
	// Attribute InstanceId: Instance id of created redis instance.
	AttrInstanceId() interface{}
	// Attribute InstanceName: Name of created redis instance.
	AttrInstanceName() interface{}
	// Attribute InstanceType: The engine type of the instance.
	AttrInstanceType() interface{}
	// Attribute NetworkType: The network type.
	AttrNetworkType() interface{}
	// Attribute NodeType: The type of node.
	AttrNodeType() interface{}
	// Attribute OrderId: Order Id of created instance.
	AttrOrderId() interface{}
	// Attribute PackageType: The plan type.
	AttrPackageType() interface{}
	// Attribute Port: Port of created instance.
	AttrPort() interface{}
	// Attribute PrivateIp: The internal IP address of the instance.
	AttrPrivateIp() interface{}
	// Attribute PublicConnectionPort: The public connection port of the instance.
	AttrPublicConnectionPort() interface{}
	// Attribute PublicConnectionString: The public connection string of the instance.
	AttrPublicConnectionString() interface{}
	// Attribute QPS: The queries per second (QPS) supported by the instance.
	AttrQps() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
	AttrResourceGroupId() interface{}
	// Attribute VpcId: The ID of the VPC.
	AttrVpcId() interface{}
	// Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance.
	AttrVpcPrivateConnectionPort() interface{}
	// Attribute VpcPrivateConnectionString: The vpc private connection string of the instance.
	AttrVpcPrivateConnectionString() interface{}
	// Attribute VSwitchId: The ID of the vSwitch.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: The ID of the zone.
	AttrZoneId() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrArchitectureType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArchitectureType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrClassicInnerConnectionPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClassicInnerConnectionPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrClassicInnerConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClassicInnerConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrConnectionDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrConnections() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDirectConnectionPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDirectConnectionPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDirectConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDirectConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEngineVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrHasRenewChangeOrder() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHasRenewChangeOrder",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrNodeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPackageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPackageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPrivateIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPublicConnectionPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicConnectionPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPublicConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrQps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcPrivateConnectionPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcPrivateConnectionPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcPrivateConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcPrivateConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

