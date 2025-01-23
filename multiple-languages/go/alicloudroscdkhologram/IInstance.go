package alicloudroscdkhologram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhologram/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute AutoRenewal: Whether automatic renewal is enabled.
	AttrAutoRenewal() interface{}
	// Attribute ColdStorageSize: Instance low-frequency storage space.
	//
	// Unit: GB.
	AttrColdStorageSize() interface{}
	// Attribute CommodityCode: The commodity code.
	AttrCommodityCode() interface{}
	// Attribute ComputeNodeCount: Number of compute nodes.
	AttrComputeNodeCount() interface{}
	// Attribute Cpu: Instance specifications.
	AttrCpu() interface{}
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute EnableHiveAccess: Whether data Lake acceleration is enabled.
	AttrEnableHiveAccess() interface{}
	// Attribute Endpoints: List of domain names.
	AttrEndpoints() interface{}
	// Attribute ExpirationTime: Expiration time.
	AttrExpirationTime() interface{}
	// Attribute GatewayCount: Number of gateway nodes.
	AttrGatewayCount() interface{}
	// Attribute GatewayCpu: Cpu resources of the Gateway.
	AttrGatewayCpu() interface{}
	// Attribute GatewayMemory: Gateway memory resources.
	AttrGatewayMemory() interface{}
	// Attribute InstanceId: Resource attribute fields that represent the resource's primary key.
	AttrInstanceId() interface{}
	// Attribute InstanceName: The name of the resource.
	AttrInstanceName() interface{}
	// Attribute InstanceOwner: The instance owner.
	AttrInstanceOwner() interface{}
	// Attribute InstanceType: The instance type.
	AttrInstanceType() interface{}
	// Attribute Memory: Memory.
	AttrMemory() interface{}
	// Attribute PaymentType: The payment type of the resource.
	AttrPaymentType() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute StorageSize: The standard storage space of the instance.
	//
	// Unit: GB.
	AttrStorageSize() interface{}
	// Attribute SuspendReason: Reason for suspension.
	AttrSuspendReason() interface{}
	// Attribute Tags: Instance tag.
	AttrTags() interface{}
	// Attribute Version: The instance version.
	AttrVersion() interface{}
	// Attribute ZoneId: The zone Id.
	AttrZoneId() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrAutoRenewal() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoRenewal",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrColdStorageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrColdStorageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCommodityCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommodityCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrComputeNodeCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrComputeNodeCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEnableHiveAccess() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableHiveAccess",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEndpoints() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpoints",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrExpirationTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpirationTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrGatewayCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrGatewayCpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrGatewayMemory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayMemory",
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

func (j *jsiiProxy_IInstance) AttrInstanceOwner() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceOwner",
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

func (j *jsiiProxy_IInstance) AttrMemory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMemory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
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

func (j *jsiiProxy_IInstance) AttrStorageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSuspendReason() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSuspendReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersion",
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

