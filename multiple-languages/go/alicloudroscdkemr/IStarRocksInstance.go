package alicloudroscdkemr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/internal"
)

// Represents a `StarRocksInstance`.
type IStarRocksInstance interface {
	alicloudroscdkcore.IResource
	// Attribute AclId: Access control ID.
	AttrAclId() interface{}
	// Attribute Architecture: Architecture of StarRocks instance.
	AttrArchitecture() interface{}
	// Attribute CreateTime: The creation time of the StarRocks instance.
	AttrCreateTime() interface{}
	// Attribute EnableAutoMinorVersionUpgrade: Whether minor version automatic upgrades are supported.
	AttrEnableAutoMinorVersionUpgrade() interface{}
	// Attribute EnabledAuditLoader: Whether enable audit loader.
	AttrEnabledAuditLoader() interface{}
	// Attribute EnableSsl: Enable SSL.
	AttrEnableSsl() interface{}
	// Attribute Encrypted: Whether encrypted.
	AttrEncrypted() interface{}
	// Attribute ExpireTime: StarRocks Instance expire time.
	AttrExpireTime() interface{}
	// Attribute InstanceId: The ID of the StarRocks instance.
	AttrInstanceId() interface{}
	// Attribute InstanceName: The name of the StarRocks instance.
	AttrInstanceName() interface{}
	// Attribute IsolateLeader: Whether leader FE is isolated.
	AttrIsolateLeader() interface{}
	// Attribute KmsKeyId: The ID of the Key Management Service (KMS) key.
	AttrKmsKeyId() interface{}
	// Attribute MaintainablePeriod: StarRocks Instance maintainable period.
	AttrMaintainablePeriod() interface{}
	// Attribute MinorVersion: StarRocks Instance minor version.
	AttrMinorVersion() interface{}
	// Attribute MonitorType: Monitor Type.
	AttrMonitorType() interface{}
	// Attribute OssLocation: OSS Location.
	AttrOssLocation() interface{}
	// Attribute PackageType: The package type of the StarRocks instance.
	AttrPackageType() interface{}
	// Attribute PayType: The pay type of the StarRocks instance.
	AttrPayType() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the StarRocks instance belongs..
	AttrResourceGroupId() interface{}
	// Attribute RunMode: The run mode of the StarRocks instance.
	AttrRunMode() interface{}
	// Attribute RunningTime: StarRocks Instance running time.
	AttrRunningTime() interface{}
	// Attribute SecurityGroupManaged: Whether security group is managed.
	AttrSecurityGroupManaged() interface{}
	// Attribute SgId: Security Group ID of StarRocks instance.
	AttrSgId() interface{}
	// Attribute Tags: Tag list of the StarRocks instance.
	AttrTags() interface{}
	// Attribute Version: The version of the StarRocks instance.
	AttrVersion() interface{}
	// Attribute VpcId: The VPC ID of the StarRocks instance.
	AttrVpcId() interface{}
	// Attribute Vswitches: The VSwitches info of the StarRocks instance.
	AttrVswitches() interface{}
	Props() *StarRocksInstanceProps
}

// The jsii proxy for IStarRocksInstance
type jsiiProxy_IStarRocksInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStarRocksInstance) AttrAclId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrArchitecture() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArchitecture",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrEnableAutoMinorVersionUpgrade() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableAutoMinorVersionUpgrade",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrEnabledAuditLoader() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnabledAuditLoader",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrEnableSsl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableSsl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrEncrypted() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncrypted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrExpireTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrIsolateLeader() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsolateLeader",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrKmsKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKmsKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrMaintainablePeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainablePeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrMinorVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrMonitorType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMonitorType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrOssLocation() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOssLocation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrPackageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPackageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrPayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPayType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrRunMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRunMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrRunningTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRunningTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrSecurityGroupManaged() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupManaged",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrSgId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSgId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) AttrVswitches() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVswitches",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStarRocksInstance) Props() *StarRocksInstanceProps {
	var returns *StarRocksInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

