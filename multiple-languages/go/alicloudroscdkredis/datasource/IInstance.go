package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkredis/datasource/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute ArchitectureType: Architecture type.
	AttrArchitectureType() interface{}
	// Attribute Bandwidth: Bandwidth.
	AttrBandwidth() interface{}
	// Attribute Capacity: Capacity.
	AttrCapacity() interface{}
	// Attribute CloudType: Cloud category.
	AttrCloudType() interface{}
	// Attribute Config: Config.
	AttrConfig() interface{}
	// Attribute ConnectionDomain: Connection domain.
	AttrConnectionDomain() interface{}
	// Attribute CreateTime: Create time.
	AttrCreateTime() interface{}
	// Attribute DBInstanceId: Database instance id.
	AttrDbInstanceId() interface{}
	// Attribute DBInstanceName: Instance name.
	AttrDbInstanceName() interface{}
	// Attribute EndTime: End time.
	AttrEndTime() interface{}
	// Attribute EngineVersion: Engine version.
	AttrEngineVersion() interface{}
	// Attribute HasRenewChangeOrder: Has renew change order.
	AttrHasRenewChangeOrder() interface{}
	// Attribute InstanceClass: Instance class.
	AttrInstanceClass() interface{}
	// Attribute InstanceReleaseProtection: Instance release protection.
	AttrInstanceReleaseProtection() interface{}
	// Attribute InstanceType: Instance type.
	AttrInstanceType() interface{}
	// Attribute IsRds: is RDS.
	AttrIsRds() interface{}
	// Attribute MaintainEndTime: Maintain end time.
	AttrMaintainEndTime() interface{}
	// Attribute MaintainStartTime: Maintain start time.
	AttrMaintainStartTime() interface{}
	// Attribute NetworkType: Network type.
	AttrNetworkType() interface{}
	// Attribute PackageType: Package type.
	AttrPackageType() interface{}
	// Attribute PaymentType: Payment type.
	AttrPaymentType() interface{}
	// Attribute Port: Port.
	AttrPort() interface{}
	// Attribute PrivateIp: Private IP.
	AttrPrivateIp() interface{}
	// Attribute Qps: QPS.
	AttrQps() interface{}
	// Attribute ReadOnlyCount: The number of read-only nodes.
	//
	// This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
	AttrReadOnlyCount() interface{}
	// Attribute ReplacateId: Replacate id.
	AttrReplacateId() interface{}
	// Attribute ResourceGroupId: Resource group id.
	AttrResourceGroupId() interface{}
	// Attribute SecondaryZoneId: The ID of the standby zone.
	AttrSecondaryZoneId() interface{}
	// Attribute SecurityGroupId: Security group id.
	AttrSecurityGroupId() interface{}
	// Attribute SecurityIpGroupAttribute: Security IP group attribute.
	AttrSecurityIpGroupAttribute() interface{}
	// Attribute SecurityIpGroupName: Security IP group name.
	AttrSecurityIpGroupName() interface{}
	// Attribute SecurityIps: Security IPs.
	AttrSecurityIps() interface{}
	// Attribute ShardCount: The number of slices.
	//
	// This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
	AttrShardCount() interface{}
	// Attribute Tags: Tags.
	AttrTags() interface{}
	// Attribute VpcAuthMode: Vpc auth mode.
	AttrVpcAuthMode() interface{}
	// Attribute VpcCloudInstanceId: Vpc cloud instance id.
	AttrVpcCloudInstanceId() interface{}
	// Attribute VpcId: Vpc id.
	AttrVpcId() interface{}
	// Attribute VSwitchId: Vswitch id.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: Zone id.
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

func (j *jsiiProxy_IInstance) AttrCloudType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCloudType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfig",
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

func (j *jsiiProxy_IInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDbInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndTime",
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

func (j *jsiiProxy_IInstance) AttrInstanceReleaseProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceReleaseProtection",
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

func (j *jsiiProxy_IInstance) AttrIsRds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsRds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrMaintainEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrMaintainStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainStartTime",
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

func (j *jsiiProxy_IInstance) AttrPackageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPackageType",
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

func (j *jsiiProxy_IInstance) AttrQps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrReadOnlyCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReadOnlyCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrReplacateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplacateId",
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

func (j *jsiiProxy_IInstance) AttrSecondaryZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecondaryZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecurityIpGroupAttribute() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpGroupAttribute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecurityIpGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecurityIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrShardCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrShardCount",
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

func (j *jsiiProxy_IInstance) AttrVpcAuthMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcAuthMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcCloudInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcCloudInstanceId",
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

