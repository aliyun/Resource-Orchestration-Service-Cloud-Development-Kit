package alicloudroscdkgraphdatabase

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgraphdatabase/internal"
)

// Represents a `DbInstance`.
type IDbInstance interface {
	alicloudroscdkcore.IResource
	// Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
	AttrConnectionString() interface{}
	// Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
	AttrCreateTime() interface{}
	// Attribute CurrentMinorVersion: The current kernel image version.
	AttrCurrentMinorVersion() interface{}
	// Attribute DbInstanceCategory: The category of the db instance.
	AttrDbInstanceCategory() interface{}
	// Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
	AttrDbInstanceCpu() interface{}
	// Attribute DbInstanceDescription: According to the practical example or notes.
	AttrDbInstanceDescription() interface{}
	// Attribute DbInstanceId: The first ID of the resource.
	AttrDbInstanceId() interface{}
	// Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
	AttrDbInstanceIpArray() interface{}
	// Attribute DbInstanceMemory: Instance memory, which is measured in MB.
	AttrDbInstanceMemory() interface{}
	// Attribute DbInstanceNetworkType: The network type of the db instance.
	AttrDbInstanceNetworkType() interface{}
	// Attribute DbInstanceStorageType: Cloud Disk.
	AttrDbInstanceStorageType() interface{}
	// Attribute DbInstanceType: The type of the db instance.
	AttrDbInstanceType() interface{}
	// Attribute DbNodeClass: The class of the db node.
	AttrDbNodeClass() interface{}
	// Attribute DbNodeCount: The count of the db node.
	AttrDbNodeCount() interface{}
	// Attribute DbNodeStorage: Instance storage space, which is measured in GB.
	AttrDbNodeStorage() interface{}
	// Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
	AttrDbVersion() interface{}
	// Attribute EcsSecurityGroupRelations: Security group information array.
	AttrEcsSecurityGroupRelations() interface{}
	// Attribute Expired: The expire status of the db instance.
	AttrExpired() interface{}
	// Attribute ExpireTime: The instance after it expires time for subscription instance.
	AttrExpireTime() interface{}
	// Attribute LatestMinorVersion: The latest kernel image version.
	AttrLatestMinorVersion() interface{}
	// Attribute LockMode: Instance lock state.
	AttrLockMode() interface{}
	// Attribute LockReason: An instance is locked the reason.
	AttrLockReason() interface{}
	// Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
	AttrMaintainTime() interface{}
	// Attribute PaymentType: The resource attribute field representing the paid type is desirable:.
	AttrPaymentType() interface{}
	// Attribute Port: Application Port.
	AttrPort() interface{}
	// Attribute PublicConnectionString: The public connection string ID of the resource.
	AttrPublicConnectionString() interface{}
	// Attribute PublicPort: The public port ID of the resource.
	AttrPublicPort() interface{}
	// Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
	AttrReadOnlyDbInstanceIds() interface{}
	// Attribute ResourceGroupId: Resource Group ID.
	AttrResourceGroupId() interface{}
	// Attribute Tags: resource Tag group.
	AttrTags() interface{}
	// Attribute VpcId: The vpc id of the db instance.
	AttrVpcId() interface{}
	// Attribute VSwitchId: The vpc switch id of the resource.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: ZoneId.
	AttrZoneId() interface{}
	Props() *DbInstanceProps
}

// The jsii proxy for IDbInstance
type jsiiProxy_IDbInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDbInstance) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrCurrentMinorVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCurrentMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbInstanceCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbInstanceCpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbInstanceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbInstanceIpArray() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceIpArray",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbInstanceMemory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceMemory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbInstanceNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbInstanceStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbNodeClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbNodeCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbNodeStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrDbVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrEcsSecurityGroupRelations() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEcsSecurityGroupRelations",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrExpired() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpired",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrExpireTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrLatestMinorVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLatestMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrLockMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrLockReason() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrMaintainTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrPublicConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrPublicPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrReadOnlyDbInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReadOnlyDbInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstance) Props() *DbInstanceProps {
	var returns *DbInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

