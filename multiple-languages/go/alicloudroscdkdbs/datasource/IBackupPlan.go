package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdbs/datasource/internal"
)

// Represents a `BackupPlan`.
type IBackupPlan interface {
	alicloudroscdkcore.IResource
	// Attribute BackupGatewayId: The ID of the backup gateway.
	AttrBackupGatewayId() interface{}
	// Attribute BackupMethod: Backup method.
	AttrBackupMethod() interface{}
	// Attribute BackupObjects: The backup object.
	AttrBackupObjects() interface{}
	// Attribute BackupPeriod: Full backup cycle.
	AttrBackupPeriod() interface{}
	// Attribute BackupPlanId: The ID of the backup plan.
	AttrBackupPlanId() interface{}
	// Attribute BackupPlanName: The name of the backup plan.
	AttrBackupPlanName() interface{}
	// Attribute BackupRetentionPeriod: The retention time of backup data.
	//
	// Valid values: 0 to 1825. Default value: 730 days.
	AttrBackupRetentionPeriod() interface{}
	// Attribute BackupStartTime: The start time of full Backup.
	AttrBackupStartTime() interface{}
	// Attribute BackupStorageType: Built-in storage type:.
	AttrBackupStorageType() interface{}
	// Attribute CreateTime: The creation time of the backup plans.
	AttrCreateTime() interface{}
	// Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.
	AttrCrossAliyunId() interface{}
	// Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.
	AttrCrossRoleName() interface{}
	// Attribute DatabaseType: Database type.
	AttrDatabaseType() interface{}
	// Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.
	AttrDuplicationArchivePeriod() interface{}
	// Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access.
	//
	// The default time is 180 days.
	AttrDuplicationInfrequentAccessPeriod() interface{}
	// Attribute EnableBackupLog: Whether to enable incremental log Backup.
	AttrEnableBackupLog() interface{}
	// Attribute InstanceClass: Instance class.
	AttrInstanceClass() interface{}
	// Attribute OssBucketName: OSS Bucket name.
	AttrOssBucketName() interface{}
	// Attribute PaymentType: The payment type of the resource.
	AttrPaymentType() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SourceEndpointDatabaseName: The name of the database.
	AttrSourceEndpointDatabaseName() interface{}
	// Attribute SourceEndpointInstanceId: The ID of the database instance.
	AttrSourceEndpointInstanceId() interface{}
	// Attribute SourceEndpointInstanceType: The location of the database.
	AttrSourceEndpointInstanceType() interface{}
	// Attribute SourceEndpointRegion: The region of the database.
	AttrSourceEndpointRegion() interface{}
	// Attribute SourceEndpointSid: Oracle SID name.
	AttrSourceEndpointSid() interface{}
	// Attribute SourceEndpointUserName: Database account.
	AttrSourceEndpointUserName() interface{}
	Props() *BackupPlanProps
}

// The jsii proxy for IBackupPlan
type jsiiProxy_IBackupPlan struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBackupPlan) AttrBackupGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrBackupMethod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrBackupObjects() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupObjects",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrBackupPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrBackupPlanId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupPlanId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrBackupPlanName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupPlanName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrBackupRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrBackupStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrBackupStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrCrossAliyunId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCrossAliyunId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrCrossRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCrossRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrDatabaseType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatabaseType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrDuplicationArchivePeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDuplicationArchivePeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrDuplicationInfrequentAccessPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDuplicationInfrequentAccessPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrEnableBackupLog() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableBackupLog",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrInstanceClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrOssBucketName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOssBucketName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrSourceEndpointDatabaseName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceEndpointDatabaseName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrSourceEndpointInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceEndpointInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrSourceEndpointInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceEndpointInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrSourceEndpointRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceEndpointRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrSourceEndpointSid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceEndpointSid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) AttrSourceEndpointUserName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceEndpointUserName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackupPlan) Props() *BackupPlanProps {
	var returns *BackupPlanProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

