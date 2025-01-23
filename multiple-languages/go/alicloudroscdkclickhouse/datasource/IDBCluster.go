package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `DBCluster`.
type IDBCluster interface {
	alicloudroscdkcore.IResource
	// Attribute AliUid: Alibaba Cloud account.
	AttrAliUid() interface{}
	// Attribute Bid: The ID of the business process flow.
	AttrBid() interface{}
	// Attribute Category: Copy configuration, value description:.
	AttrCategory() interface{}
	// Attribute CommodityCode: Buy Product Code.
	AttrCommodityCode() interface{}
	// Attribute ConnectionString: Connection string.
	AttrConnectionString() interface{}
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute DBClusterId: Instance ID.
	AttrDbClusterId() interface{}
	// Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.
	AttrDbClusterIpArrayName() interface{}
	// Attribute DBClusterName: The cluster description information.
	AttrDbClusterName() interface{}
	// Attribute DbClusterNetworkType: Network type.
	//
	// Currently, only VPC is supported.
	AttrDbClusterNetworkType() interface{}
	// Attribute DBClusterType: Instance type.
	AttrDbClusterType() interface{}
	// Attribute DbNodeClass: Set the node type.
	AttrDbNodeClass() interface{}
	// Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
	AttrDbNodeCount() interface{}
	// Attribute DbNodeStorage: Single-node storage space.
	//
	// Value range: 100 GB to 32000GB.
	AttrDbNodeStorage() interface{}
	// Attribute EncryptionKey: Key management service KMS key ID.
	AttrEncryptionKey() interface{}
	// Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
	AttrEncryptionType() interface{}
	// Attribute Engine: Engine.
	AttrEngine() interface{}
	// Attribute EngineVersion: The engine version.
	AttrEngineVersion() interface{}
	// Attribute ExpireTime: The expiration time.
	AttrExpireTime() interface{}
	// Attribute IsExpired: If the instance has expired.
	AttrIsExpired() interface{}
	// Attribute LockMode: The lock mode.
	AttrLockMode() interface{}
	// Attribute LockReason: Lock reason.
	AttrLockReason() interface{}
	// Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
	AttrMaintainTime() interface{}
	// Attribute PaymentType: The paymen type of the resource.
	AttrPaymentType() interface{}
	// Attribute Port: Connection port.
	AttrPort() interface{}
	// Attribute PublicConnectionString: A public IP address for the connection.
	AttrPublicConnectionString() interface{}
	// Attribute PublicIpAddr: Public IP address.
	AttrPublicIpAddr() interface{}
	// Attribute PublicPort: Public network port.
	AttrPublicPort() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute ScaleOutStatus: Scale state.
	AttrScaleOutStatus() interface{}
	// Attribute SecurityIps: The whitelist supports the following two formats:.
	AttrSecurityIps() interface{}
	// Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
	AttrStorageType() interface{}
	// Attribute SupportBackup: Support fallback scheme.
	AttrSupportBackup() interface{}
	// Attribute SupportHttpsPort: The system supports http port number.
	AttrSupportHttpsPort() interface{}
	// Attribute SupportMysqlPort: Supports Mysql, and those of the ports.
	AttrSupportMysqlPort() interface{}
	// Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
	AttrSupportOss() interface{}
	// Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
	AttrVpcCloudInstanceId() interface{}
	// Attribute VpcId: VPC ID.
	AttrVpcId() interface{}
	// Attribute VpcIpAddr: VPC IP address.
	AttrVpcIpAddr() interface{}
	// Attribute VSwitchId: Switch ID.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: On behalf of the zone resource attribute field.
	AttrZoneId() interface{}
	Props() *DBClusterProps
}

// The jsii proxy for IDBCluster
type jsiiProxy_IDBCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBCluster) AttrAliUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAliUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrBid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrCommodityCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommodityCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrDbClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrDbClusterIpArrayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterIpArrayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrDbClusterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrDbClusterNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrDbClusterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrDbNodeClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrDbNodeCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrDbNodeStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrEncryptionKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncryptionKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrEncryptionType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncryptionType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrEngine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrEngineVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrExpireTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrIsExpired() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsExpired",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrLockMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrLockReason() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrMaintainTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrPublicConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrPublicIpAddr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrPublicPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrScaleOutStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScaleOutStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrSecurityIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrSupportBackup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSupportBackup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrSupportHttpsPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSupportHttpsPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrSupportMysqlPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSupportMysqlPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrSupportOss() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSupportOss",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrVpcCloudInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcCloudInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrVpcIpAddr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcIpAddr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) Props() *DBClusterProps {
	var returns *DBClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

