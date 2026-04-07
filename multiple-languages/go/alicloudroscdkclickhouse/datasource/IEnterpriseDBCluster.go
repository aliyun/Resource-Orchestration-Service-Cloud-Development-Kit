package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EnterpriseDBCluster`.
type IEnterpriseDBCluster interface {
	alicloudroscdkcore.IResource
	// Attribute Category: Type, value description: enterprise: Enterprise Edition.
	AttrCategory() interface{}
	// Attribute ChargeType: The billing method.
	//
	// Enterprise Edition clusters use the pay-as-you-go billing method.
	AttrChargeType() interface{}
	// Attribute ComputingGroupIds: The list of computing group IDs.
	AttrComputingGroupIds() interface{}
	// Attribute CreateTime: The creation time of the cluster.
	AttrCreateTime() interface{}
	// Attribute DBInstanceId: The cluster ID.
	AttrDbInstanceId() interface{}
	// Attribute Description: The cluster description.
	AttrDescription() interface{}
	// Attribute DisabledPorts: The specified database port is disabled.
	//
	// Multiple ports separated by commas (,) are supported.
	AttrDisabledPorts() interface{}
	// Attribute Endpoints: List of Endpoint details.
	AttrEndpoints() interface{}
	// Attribute Engine: The engine type.
	AttrEngine() interface{}
	// Attribute EngineMinorVersion: The minor version number of the cluster engine.
	AttrEngineMinorVersion() interface{}
	// Attribute EngineVersion: The engine version.
	AttrEngineVersion() interface{}
	// Attribute InstanceNetworkType: The network type of the instance.
	AttrInstanceNetworkType() interface{}
	// Attribute MaintainEndTime: The end time of the maintenance window.
	AttrMaintainEndTime() interface{}
	// Attribute MaintainStartTime: The maintainable time start time.
	AttrMaintainStartTime() interface{}
	// Attribute MultiZones: The information about the zones.
	AttrMultiZones() interface{}
	// Attribute NodeCount: The number of nodes.
	//
	// The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
	AttrNodeCount() interface{}
	// Attribute Nodes: The Node information.
	AttrNodes() interface{}
	// Attribute NodeScaleMax: The maximum value of serverless node auto scaling.
	AttrNodeScaleMax() interface{}
	// Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.
	AttrNodeScaleMin() interface{}
	// Attribute ObjectStoreSize: The size of the object storage space.
	AttrObjectStoreSize() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute ScaleMax: The maximum capacity for elastic scaling.
	AttrScaleMax() interface{}
	// Attribute ScaleMin: The minimum capacity for elastic scaling.
	AttrScaleMin() interface{}
	// Attribute StorageQuota: Storage Pre-purchased Capacity (GB).
	AttrStorageQuota() interface{}
	// Attribute StorageSize: The size of the storage space.
	//
	// Unit: GB.
	AttrStorageSize() interface{}
	// Attribute StorageType: The storage type.
	AttrStorageType() interface{}
	// Attribute Tags: The details of the tags.
	AttrTags() interface{}
	// Attribute VpcId: The VPC ID.
	AttrVpcId() interface{}
	// Attribute VswitchId: The VSwitch ID.
	AttrVswitchId() interface{}
	// Attribute ZoneId: The zone ID.
	AttrZoneId() interface{}
	Props() *EnterpriseDBClusterProps
}

// The jsii proxy for IEnterpriseDBCluster
type jsiiProxy_IEnterpriseDBCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrComputingGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrComputingGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrDisabledPorts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisabledPorts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrEndpoints() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpoints",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrEngine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrEngineMinorVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngineMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrEngineVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrInstanceNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrMaintainEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrMaintainStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrMultiZones() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMultiZones",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrNodeCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodeCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrNodeScaleMax() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodeScaleMax",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrNodeScaleMin() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodeScaleMin",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrObjectStoreSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrObjectStoreSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrScaleMax() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScaleMax",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrScaleMin() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScaleMin",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrStorageQuota() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageQuota",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrStorageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrVswitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVswitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBCluster) Props() *EnterpriseDBClusterProps {
	var returns *EnterpriseDBClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

