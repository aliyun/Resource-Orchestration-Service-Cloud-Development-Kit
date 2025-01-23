package alicloudroscdkclickhouse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `DBCluster`.
type IDBCluster interface {
	alicloudroscdkcore.IResource
	// Attribute AliUid: AliUid.
	AttrAliUid() interface{}
	// Attribute Bid: BusinessID.
	AttrBid() interface{}
	// Attribute Category: The edition of the cluster.
	AttrCategory() interface{}
	// Attribute CommodityCode: Product Code.
	AttrCommodityCode() interface{}
	// Attribute ConnectionString: ConnectionString.
	AttrConnectionString() interface{}
	// Attribute DBClusterDescription: The description of the cluster.
	AttrDbClusterDescription() interface{}
	// Attribute DBClusterId: The id of DBCluster.
	AttrDbClusterId() interface{}
	// Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC.
	AttrDbClusterNetworkType() interface{}
	// Attribute DBClusterType: The specification of the cluster.
	AttrDbClusterType() interface{}
	// Attribute DBClusterVersion: Version, value:  19.15.2.2.
	AttrDbClusterVersion() interface{}
	// Attribute DBNodeClass: DBNodeClass.
	AttrDbNodeClass() interface{}
	// Attribute DBNodeCount: The number of nodes.
	AttrDbNodeCount() interface{}
	// Attribute DBNodeStorage: The storage capacity of a single node.
	AttrDbNodeStorage() interface{}
	// Attribute DbNodeStorageType: Instance node storage type.
	//
	// Valid values:  cloud_essd, cloud_efficiency.
	AttrDbNodeStorageType() interface{}
	// Attribute EncryptionKey: KMS key ID.
	AttrEncryptionKey() interface{}
	// Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
	AttrEncryptionType() interface{}
	// Attribute Engine: Engine.
	AttrEngine() interface{}
	// Attribute EngineVersion: EngineVersion.
	AttrEngineVersion() interface{}
	// Attribute IsExpired: IsExpired.
	AttrIsExpired() interface{}
	// Attribute LockMode: LockMode.
	AttrLockMode() interface{}
	// Attribute LockReason: Reason for lock.
	AttrLockReason() interface{}
	// Attribute PaymentType: PayType.
	AttrPaymentType() interface{}
	// Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
	AttrPeriod() interface{}
	// Attribute Port: Connection port.
	AttrPort() interface{}
	// Attribute PublicConnectionString: Internet connection address.
	AttrPublicConnectionString() interface{}
	// Attribute PublicPort: PublicPort.
	AttrPublicPort() interface{}
	// Attribute StorageType: StorageType.
	AttrStorageType() interface{}
	// Attribute VpcCloudInstanceId: VpcCloudInstanceId.
	AttrVpcCloudInstanceId() interface{}
	// Attribute VpcId: VpcId.
	AttrVpcId() interface{}
	// Attribute VSwitchId: VSwitchId.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: ZoneId.
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

func (j *jsiiProxy_IDBCluster) AttrDbClusterDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterDescription",
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

func (j *jsiiProxy_IDBCluster) AttrDbClusterVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterVersion",
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

func (j *jsiiProxy_IDBCluster) AttrDbNodeStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeStorageType",
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

func (j *jsiiProxy_IDBCluster) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeriod",
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

func (j *jsiiProxy_IDBCluster) AttrPublicPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicPort",
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

