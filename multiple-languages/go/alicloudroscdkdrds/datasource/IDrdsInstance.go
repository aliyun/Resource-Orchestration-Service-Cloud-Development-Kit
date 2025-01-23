package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdrds/datasource/internal"
)

// Represents a `DrdsInstance`.
type IDrdsInstance interface {
	alicloudroscdkcore.IResource
	// Attribute CommodityCode: The commodity code of the service.
	AttrCommodityCode() interface{}
	// Attribute CreateTime: The timestamp that indicates when the instance is created.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the instance.
	AttrDescription() interface{}
	// Attribute DrdsInstanceId: The ID of the Drds instance.
	AttrDrdsInstanceId() interface{}
	// Attribute ExpireDate: The timestamp that indicates when the instance expires.
	AttrExpireDate() interface{}
	// Attribute InstanceSeries: The edition of the instance.
	//
	// Valid values:
	// starter: Starter Edition
	// enterprise: Enterprise Edition
	// standard: Standard Edition.
	AttrInstanceSeries() interface{}
	// Attribute InstanceSpec: The specification of the instance.
	AttrInstanceSpec() interface{}
	// Attribute InstRole: The role of the instance.
	//
	// Valid values:
	// MASTER: The instance is a primary instance.
	// SLAVE: The instance is a read-only instance to analyze complex queries.
	// SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
	AttrInstRole() interface{}
	// Attribute Label: The tag of the instance.
	//
	// Valid values:
	// NORMAL: The instance is a standard instance.
	// HA: The instance is a high-availability (HA) instance.
	// VPC: The instance is a VPC-based instance.
	AttrLabel() interface{}
	// Attribute MachineType: The machine type of the instance.
	//
	// Valid value: ecs.
	AttrMachineType() interface{}
	// Attribute MasterInstanceId: The ID of the primary instance.
	AttrMasterInstanceId() interface{}
	// Attribute MysqlVersion: Engine version.
	AttrMysqlVersion() interface{}
	// Attribute NetworkType: The network type of the instance.
	//
	// Valid values:
	// CLASSIC
	// VPC.
	AttrNetworkType() interface{}
	// Attribute OrderInstanceId: The ID of the purchased instance.
	AttrOrderInstanceId() interface{}
	// Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.
	AttrReadOnlyDbInstanceIds() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
	AttrResourceGroupId() interface{}
	// Attribute StorageType: The storage type of the Drds database.
	//
	// Valid values:
	// RDS
	// PolarDB.
	AttrStorageType() interface{}
	// Attribute Type: The type of the instance.
	//
	// Valid values:
	// PUBLIC: The returned instance is a shared instance.
	// PRIVATE: The returned instance is a dedicated instance.
	AttrType() interface{}
	// Attribute Version: The version of the instance.
	AttrVersion() interface{}
	// Attribute VersionAction: Indicates whether the version of the instance can be upgraded.
	AttrVersionAction() interface{}
	// Attribute Vips: The list of returned virtual IP addresses (VIPs).
	AttrVips() interface{}
	// Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.
	AttrVpcCloudInstanceId() interface{}
	// Attribute ZoneId: The ID of the zone in which the resource is located.
	AttrZoneId() interface{}
	Props() *DrdsInstanceProps
}

// The jsii proxy for IDrdsInstance
type jsiiProxy_IDrdsInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDrdsInstance) AttrCommodityCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommodityCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrDrdsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDrdsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrExpireDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrInstanceSeries() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceSeries",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrInstanceSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrInstRole() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstRole",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrLabel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLabel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrMachineType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMachineType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrMasterInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrMysqlVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMysqlVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrOrderInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrReadOnlyDbInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReadOnlyDbInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrVersionAction() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionAction",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrVips() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVips",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrVpcCloudInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcCloudInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstance) Props() *DrdsInstanceProps {
	var returns *DrdsInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

