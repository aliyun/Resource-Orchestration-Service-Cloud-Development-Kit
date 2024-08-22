package alicloudroscdkrds

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::DBInstance`, which is used to create an ApsaraDB RDS instance.
type RosDBInstance interface {
	alicloudroscdkcore.RosResource
	AllocatePublicConnection() interface{}
	SetAllocatePublicConnection(val interface{})
	ArchiveBackupKeepCount() interface{}
	SetArchiveBackupKeepCount(val interface{})
	ArchiveBackupKeepPolicy() interface{}
	SetArchiveBackupKeepPolicy(val interface{})
	ArchiveBackupRetentionPeriod() interface{}
	SetArchiveBackupRetentionPeriod(val interface{})
	AttrDbInstanceId() alicloudroscdkcore.IResolvable
	AttrInnerConnectionString() alicloudroscdkcore.IResolvable
	AttrInnerIpAddress() alicloudroscdkcore.IResolvable
	AttrInnerPort() alicloudroscdkcore.IResolvable
	AttrPublicConnectionString() alicloudroscdkcore.IResolvable
	AttrPublicIpAddress() alicloudroscdkcore.IResolvable
	AttrPublicPort() alicloudroscdkcore.IResolvable
	AutoRenew() interface{}
	SetAutoRenew(val interface{})
	BackUpCategory() interface{}
	SetBackUpCategory(val interface{})
	BackupPolicyMode() interface{}
	SetBackupPolicyMode(val interface{})
	BackupRetentionPeriod() interface{}
	SetBackupRetentionPeriod(val interface{})
	BurstingEnabled() interface{}
	SetBurstingEnabled(val interface{})
	Category() interface{}
	SetCategory(val interface{})
	ColdDataEnabled() interface{}
	SetColdDataEnabled(val interface{})
	CompressType() interface{}
	SetCompressType(val interface{})
	ConnectionMode() interface{}
	SetConnectionMode(val interface{})
	ConnectionStringPrefix() interface{}
	SetConnectionStringPrefix(val interface{})
	ConnectionStringType() interface{}
	SetConnectionStringType(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DbInstanceClass() interface{}
	SetDbInstanceClass(val interface{})
	DbInstanceDescription() interface{}
	SetDbInstanceDescription(val interface{})
	DbInstanceNetType() interface{}
	SetDbInstanceNetType(val interface{})
	DbInstanceStorage() interface{}
	SetDbInstanceStorage(val interface{})
	DbInstanceStorageType() interface{}
	SetDbInstanceStorageType(val interface{})
	DbIsIgnoreCase() interface{}
	SetDbIsIgnoreCase(val interface{})
	DbMappings() interface{}
	SetDbMappings(val interface{})
	DbParamGroupId() interface{}
	SetDbParamGroupId(val interface{})
	DbTimeZone() interface{}
	SetDbTimeZone(val interface{})
	DedicatedHostGroupId() interface{}
	SetDedicatedHostGroupId(val interface{})
	EnableBackupLog() interface{}
	SetEnableBackupLog(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EncryptionKey() interface{}
	SetEncryptionKey(val interface{})
	Engine() interface{}
	SetEngine(val interface{})
	EngineVersion() interface{}
	SetEngineVersion(val interface{})
	HighSpaceUsageProtection() interface{}
	SetHighSpaceUsageProtection(val interface{})
	InstanceNetworkType() interface{}
	SetInstanceNetworkType(val interface{})
	IoAccelerationEnabled() interface{}
	SetIoAccelerationEnabled(val interface{})
	LocalLogRetentionHours() interface{}
	SetLocalLogRetentionHours(val interface{})
	LocalLogRetentionSpace() interface{}
	SetLocalLogRetentionSpace(val interface{})
	LogBackupFrequency() interface{}
	SetLogBackupFrequency(val interface{})
	LogBackupLocalRetentionNumber() interface{}
	SetLogBackupLocalRetentionNumber(val interface{})
	LogBackupRetentionPeriod() interface{}
	SetLogBackupRetentionPeriod(val interface{})
	// The logical ID for this stack element.
	//
	// The logical ID of the element
	// is calculated from the path of the resource node in the construct tree.
	//
	// To override this value, use `overrideLogicalId(newLogicalId)`.
	//
	// Returns: the logical ID as a stringified token. This value will only get
	// resolved during synthesis.
	LogicalId() *string
	MaintainTime() interface{}
	SetMaintainTime(val interface{})
	MasterUsername() interface{}
	SetMasterUsername(val interface{})
	MasterUserPassword() interface{}
	SetMasterUserPassword(val interface{})
	MasterUserType() interface{}
	SetMasterUserType(val interface{})
	MultiAz() interface{}
	SetMultiAz(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	PayType() interface{}
	SetPayType(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PeriodType() interface{}
	SetPeriodType(val interface{})
	Port() interface{}
	SetPort(val interface{})
	PreferredBackupPeriod() interface{}
	SetPreferredBackupPeriod(val interface{})
	PreferredBackupTime() interface{}
	SetPreferredBackupTime(val interface{})
	PrivateIpAddress() interface{}
	SetPrivateIpAddress(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ReleasedKeepPolicy() interface{}
	SetReleasedKeepPolicy(val interface{})
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	RoleArn() interface{}
	SetRoleArn(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	SecurityIpList() interface{}
	SetSecurityIpList(val interface{})
	ServerlessConfig() interface{}
	SetServerlessConfig(val interface{})
	SlaveZoneIds() interface{}
	SetSlaveZoneIds(val interface{})
	SqlCollectorStatus() interface{}
	SetSqlCollectorStatus(val interface{})
	SslSetting() interface{}
	SetSslSetting(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StorageAutoScale() interface{}
	SetStorageAutoScale(val interface{})
	StorageThreshold() interface{}
	SetStorageThreshold(val interface{})
	StorageUpperBound() interface{}
	SetStorageUpperBound(val interface{})
	Tags() *map[string]interface{}
	SetTags(val *map[string]interface{})
	TargetDedicatedHostIdForLog() interface{}
	SetTargetDedicatedHostIdForLog(val interface{})
	TargetDedicatedHostIdForMaster() interface{}
	SetTargetDedicatedHostIdForMaster(val interface{})
	TargetDedicatedHostIdForSlave() interface{}
	SetTargetDedicatedHostIdForSlave(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VpcId() interface{}
	SetVpcId(val interface{})
	VSwitchId() interface{}
	SetVSwitchId(val interface{})
	ZoneId() interface{}
	SetZoneId(val interface{})
	AddCondition(con alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	// Syntactic sugar for `addOverride(path, undefined)`.
	AddDeletionOverride(path *string)
	// Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.
	//
	// This can be used for resources across stacks (or nested stack) boundaries
	// and the dependency will automatically be transferred to the relevant scope.
	AddDependsOn(target alicloudroscdkcore.RosResource)
	AddDesc(desc *string)
	AddMetaData(key *string, value interface{})
	// Adds an override to the synthesized ROS resource.
	//
	// To add a
	// property override, either use `addPropertyOverride` or prefix `path` with
	// "Properties." (i.e. `Properties.TopicName`).
	//
	// If the override is nested, separate each nested level using a dot (.) in the path parameter.
	// If there is an array as part of the nesting, specify the index in the path.
	//
	// For example,
	// ```typescript
	// addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
	// addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')
	// ```
	// would add the overrides
	// ```json
	// "Properties": {
	//    "GlobalSecondaryIndexes": [
	//      {
	//        "Projection": {
	//          "NonKeyAttributes": [ "myattribute" ]
	//          ...
	//        }
	//        ...
	//      },
	//      {
	//        "ProjectionType": "INCLUDE"
	//        ...
	//      },
	//    ]
	//    ...
	// }
	// ```.
	AddOverride(path *string, value interface{})
	// Adds an override that deletes the value of a property from the resource definition.
	AddPropertyDeletionOverride(propertyPath *string)
	// Adds an override to a resource property.
	//
	// Syntactic sugar for `addOverride("Properties.<...>", value)`.
	AddPropertyOverride(propertyPath *string, value interface{})
	AddRosDependency(target *string)
	// Sets the deletion policy of the resource based on the removal policy specified.
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions)
	// Returns a token for an runtime attribute of this resource.
	//
	// Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
	// in case there is no generated attribute.
	GetAtt(attributeName *string) alicloudroscdkcore.Reference
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	OnPrepare()
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	OnSynthesize(session constructs.ISynthesisSession)
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	OnValidate() *[]*string
	// Overrides the auto-generated logical ID with a specific ID.
	OverrideLogicalId(newLogicalId *string)
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	RenderProperties(props *map[string]interface{}) *map[string]interface{}
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	//
	// Returns: a string representation of this resource.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
	ValidateProperties(_properties interface{})
}

// The jsii proxy struct for RosDBInstance
type jsiiProxy_RosDBInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosDBInstance) AllocatePublicConnection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"allocatePublicConnection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ArchiveBackupKeepCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"archiveBackupKeepCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ArchiveBackupKeepPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"archiveBackupKeepPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ArchiveBackupRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"archiveBackupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) AttrDbInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) AttrInnerConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInnerConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) AttrInnerIpAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInnerIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) AttrInnerPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInnerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) AttrPublicConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) AttrPublicIpAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) AttrPublicPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) BackUpCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backUpCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) BackupPolicyMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backupPolicyMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) BackupRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) BurstingEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"burstingEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) Category() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"category",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ColdDataEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"coldDataEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) CompressType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"compressType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ConnectionMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connectionMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ConnectionStringPrefix() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connectionStringPrefix",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ConnectionStringType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connectionStringType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) DbInstanceClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) DbInstanceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) DbInstanceNetType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceNetType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) DbInstanceStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) DbInstanceStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) DbIsIgnoreCase() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbIsIgnoreCase",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) DbMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbMappings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) DbParamGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbParamGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) DbTimeZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbTimeZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) DedicatedHostGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dedicatedHostGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) EnableBackupLog() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableBackupLog",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) EncryptionKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"encryptionKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) Engine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"engine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) EngineVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"engineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) HighSpaceUsageProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"highSpaceUsageProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) InstanceNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) IoAccelerationEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ioAccelerationEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) LocalLogRetentionHours() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"localLogRetentionHours",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) LocalLogRetentionSpace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"localLogRetentionSpace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) LogBackupFrequency() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logBackupFrequency",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) LogBackupLocalRetentionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logBackupLocalRetentionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) LogBackupRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logBackupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) MaintainTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) MasterUsername() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterUsername",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) MasterUserPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterUserPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) MasterUserType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterUserType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) MultiAz() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"multiAz",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) PayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"payType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) PeriodType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) Port() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"port",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) PreferredBackupPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"preferredBackupPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) PreferredBackupTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"preferredBackupTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) PrivateIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"privateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ReleasedKeepPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"releasedKeepPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) RoleArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"roleArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) SecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ServerlessConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serverlessConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) SlaveZoneIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"slaveZoneIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) SqlCollectorStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sqlCollectorStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) SslSetting() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sslSetting",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) StorageAutoScale() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageAutoScale",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) StorageThreshold() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageThreshold",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) StorageUpperBound() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageUpperBound",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) Tags() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) TargetDedicatedHostIdForLog() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"targetDedicatedHostIdForLog",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) TargetDedicatedHostIdForMaster() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"targetDedicatedHostIdForMaster",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) TargetDedicatedHostIdForSlave() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"targetDedicatedHostIdForSlave",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosDBInstance(scope alicloudroscdkcore.Construct, id *string, props *RosDBInstanceProps, enableResourcePropertyConstraint *bool) RosDBInstance {
	_init_.Initialize()

	if err := validateNewRosDBInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosDBInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-rds.RosDBInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosDBInstance_Override(r RosDBInstance, scope alicloudroscdkcore.Construct, id *string, props *RosDBInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-rds.RosDBInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosDBInstance)SetAllocatePublicConnection(val interface{}) {
	if err := j.validateSetAllocatePublicConnectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"allocatePublicConnection",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetArchiveBackupKeepCount(val interface{}) {
	if err := j.validateSetArchiveBackupKeepCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"archiveBackupKeepCount",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetArchiveBackupKeepPolicy(val interface{}) {
	if err := j.validateSetArchiveBackupKeepPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"archiveBackupKeepPolicy",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetArchiveBackupRetentionPeriod(val interface{}) {
	if err := j.validateSetArchiveBackupRetentionPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"archiveBackupRetentionPeriod",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetBackUpCategory(val interface{}) {
	if err := j.validateSetBackUpCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backUpCategory",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetBackupPolicyMode(val interface{}) {
	if err := j.validateSetBackupPolicyModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backupPolicyMode",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetBackupRetentionPeriod(val interface{}) {
	if err := j.validateSetBackupRetentionPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backupRetentionPeriod",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetBurstingEnabled(val interface{}) {
	if err := j.validateSetBurstingEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"burstingEnabled",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetCategory(val interface{}) {
	if err := j.validateSetCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"category",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetColdDataEnabled(val interface{}) {
	if err := j.validateSetColdDataEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"coldDataEnabled",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetCompressType(val interface{}) {
	if err := j.validateSetCompressTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"compressType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetConnectionMode(val interface{}) {
	if err := j.validateSetConnectionModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connectionMode",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetConnectionStringPrefix(val interface{}) {
	if err := j.validateSetConnectionStringPrefixParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connectionStringPrefix",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetConnectionStringType(val interface{}) {
	if err := j.validateSetConnectionStringTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connectionStringType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDbInstanceClass(val interface{}) {
	if err := j.validateSetDbInstanceClassParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceClass",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDbInstanceDescription(val interface{}) {
	if err := j.validateSetDbInstanceDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceDescription",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDbInstanceNetType(val interface{}) {
	if err := j.validateSetDbInstanceNetTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceNetType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDbInstanceStorage(val interface{}) {
	if err := j.validateSetDbInstanceStorageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceStorage",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDbInstanceStorageType(val interface{}) {
	if err := j.validateSetDbInstanceStorageTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceStorageType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDbIsIgnoreCase(val interface{}) {
	if err := j.validateSetDbIsIgnoreCaseParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbIsIgnoreCase",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDbMappings(val interface{}) {
	if err := j.validateSetDbMappingsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbMappings",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDbParamGroupId(val interface{}) {
	if err := j.validateSetDbParamGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbParamGroupId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDbTimeZone(val interface{}) {
	if err := j.validateSetDbTimeZoneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbTimeZone",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDedicatedHostGroupId(val interface{}) {
	if err := j.validateSetDedicatedHostGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dedicatedHostGroupId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetEnableBackupLog(val interface{}) {
	if err := j.validateSetEnableBackupLogParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableBackupLog",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetEncryptionKey(val interface{}) {
	if err := j.validateSetEncryptionKeyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"encryptionKey",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetEngine(val interface{}) {
	if err := j.validateSetEngineParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"engine",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetEngineVersion(val interface{}) {
	if err := j.validateSetEngineVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"engineVersion",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetHighSpaceUsageProtection(val interface{}) {
	if err := j.validateSetHighSpaceUsageProtectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"highSpaceUsageProtection",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetInstanceNetworkType(val interface{}) {
	if err := j.validateSetInstanceNetworkTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceNetworkType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetIoAccelerationEnabled(val interface{}) {
	if err := j.validateSetIoAccelerationEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ioAccelerationEnabled",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetLocalLogRetentionHours(val interface{}) {
	if err := j.validateSetLocalLogRetentionHoursParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"localLogRetentionHours",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetLocalLogRetentionSpace(val interface{}) {
	if err := j.validateSetLocalLogRetentionSpaceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"localLogRetentionSpace",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetLogBackupFrequency(val interface{}) {
	if err := j.validateSetLogBackupFrequencyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logBackupFrequency",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetLogBackupLocalRetentionNumber(val interface{}) {
	if err := j.validateSetLogBackupLocalRetentionNumberParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logBackupLocalRetentionNumber",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetLogBackupRetentionPeriod(val interface{}) {
	if err := j.validateSetLogBackupRetentionPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logBackupRetentionPeriod",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetMaintainTime(val interface{}) {
	if err := j.validateSetMaintainTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maintainTime",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetMasterUsername(val interface{}) {
	if err := j.validateSetMasterUsernameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterUsername",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetMasterUserPassword(val interface{}) {
	if err := j.validateSetMasterUserPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterUserPassword",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetMasterUserType(val interface{}) {
	if err := j.validateSetMasterUserTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterUserType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetMultiAz(val interface{}) {
	if err := j.validateSetMultiAzParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"multiAz",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetPayType(val interface{}) {
	if err := j.validateSetPayTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"payType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetPeriodType(val interface{}) {
	if err := j.validateSetPeriodTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetPort(val interface{}) {
	if err := j.validateSetPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"port",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetPreferredBackupPeriod(val interface{}) {
	if err := j.validateSetPreferredBackupPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"preferredBackupPeriod",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetPreferredBackupTime(val interface{}) {
	if err := j.validateSetPreferredBackupTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"preferredBackupTime",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetPrivateIpAddress(val interface{}) {
	if err := j.validateSetPrivateIpAddressParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"privateIpAddress",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetReleasedKeepPolicy(val interface{}) {
	if err := j.validateSetReleasedKeepPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"releasedKeepPolicy",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetRoleArn(val interface{}) {
	if err := j.validateSetRoleArnParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"roleArn",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetSecurityIpList(val interface{}) {
	if err := j.validateSetSecurityIpListParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityIpList",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetServerlessConfig(val interface{}) {
	if err := j.validateSetServerlessConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serverlessConfig",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetSlaveZoneIds(val interface{}) {
	if err := j.validateSetSlaveZoneIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"slaveZoneIds",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetSqlCollectorStatus(val interface{}) {
	if err := j.validateSetSqlCollectorStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sqlCollectorStatus",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetSslSetting(val interface{}) {
	if err := j.validateSetSslSettingParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sslSetting",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetStorageAutoScale(val interface{}) {
	if err := j.validateSetStorageAutoScaleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageAutoScale",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetStorageThreshold(val interface{}) {
	if err := j.validateSetStorageThresholdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageThreshold",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetStorageUpperBound(val interface{}) {
	if err := j.validateSetStorageUpperBoundParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageUpperBound",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetTags(val *map[string]interface{}) {
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetTargetDedicatedHostIdForLog(val interface{}) {
	if err := j.validateSetTargetDedicatedHostIdForLogParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"targetDedicatedHostIdForLog",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetTargetDedicatedHostIdForMaster(val interface{}) {
	if err := j.validateSetTargetDedicatedHostIdForMasterParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"targetDedicatedHostIdForMaster",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetTargetDedicatedHostIdForSlave(val interface{}) {
	if err := j.validateSetTargetDedicatedHostIdForSlaveParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"targetDedicatedHostIdForSlave",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetZoneId(val interface{}) {
	if err := j.validateSetZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"zoneId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosDBInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDBInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-rds.RosDBInstance",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Returns `true` if a construct is a stack element (i.e. part of the synthesized template).
//
// Uses duck-typing instead of `instanceof` to allow stack elements from different
// versions of this library to be included in the same stack.
//
// Returns: The construct as a stack element or undefined if it is not a stack element.
func RosDBInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDBInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-rds.RosDBInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosDBInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosDBInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-rds.RosDBInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosDBInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-rds.RosDBInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosDBInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosDBInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosDBInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosDBInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDBInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosDBInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosDBInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosDBInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosDBInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosDBInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDBInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosDBInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
	if err := r.validateGetAttParameters(attributeName); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.Reference

	_jsii_.Invoke(
		r,
		"getAtt",
		[]interface{}{attributeName},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDBInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDBInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDBInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDBInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosDBInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDBInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
	if err := r.validateRenderPropertiesParameters(props); err != nil {
		panic(err)
	}
	var returns *map[string]interface{}

	_jsii_.Invoke(
		r,
		"renderProperties",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDBInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDBInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDBInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDBInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

