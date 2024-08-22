package alicloudroscdkrds

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::DBInstanceClone`, which is used to restore historical data of an instance to a new instance.
//
// The new instance is the clone of the instance.
type RosDBInstanceClone interface {
	alicloudroscdkcore.RosResource
	AllocatePublicConnection() interface{}
	SetAllocatePublicConnection(val interface{})
	AttrDbInstanceId() alicloudroscdkcore.IResolvable
	AttrInnerConnectionString() alicloudroscdkcore.IResolvable
	AttrInnerIpAddress() alicloudroscdkcore.IResolvable
	AttrInnerPort() alicloudroscdkcore.IResolvable
	AttrPublicConnectionString() alicloudroscdkcore.IResolvable
	AttrPublicIpAddress() alicloudroscdkcore.IResolvable
	AttrPublicPort() alicloudroscdkcore.IResolvable
	BackupId() interface{}
	SetBackupId(val interface{})
	BackupRetentionPeriod() interface{}
	SetBackupRetentionPeriod(val interface{})
	BackupType() interface{}
	SetBackupType(val interface{})
	Category() interface{}
	SetCategory(val interface{})
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
	DbInstanceId() interface{}
	SetDbInstanceId(val interface{})
	DbInstanceStorage() interface{}
	SetDbInstanceStorage(val interface{})
	DbInstanceStorageType() interface{}
	SetDbInstanceStorageType(val interface{})
	DbMappings() interface{}
	SetDbMappings(val interface{})
	DbNames() interface{}
	SetDbNames(val interface{})
	DedicatedHostGroupId() interface{}
	SetDedicatedHostGroupId(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	InstanceNetworkType() interface{}
	SetInstanceNetworkType(val interface{})
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
	RestoreTable() interface{}
	SetRestoreTable(val interface{})
	RestoreTime() interface{}
	SetRestoreTime(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	SecurityIpList() interface{}
	SetSecurityIpList(val interface{})
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
	TableMeta() interface{}
	SetTableMeta(val interface{})
	Tags() *map[string]interface{}
	SetTags(val *map[string]interface{})
	TimeoutInMinutes() interface{}
	SetTimeoutInMinutes(val interface{})
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

// The jsii proxy struct for RosDBInstanceClone
type jsiiProxy_RosDBInstanceClone struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosDBInstanceClone) AllocatePublicConnection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"allocatePublicConnection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) AttrDbInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) AttrInnerConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInnerConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) AttrInnerIpAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInnerIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) AttrInnerPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInnerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) AttrPublicConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) AttrPublicIpAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) AttrPublicPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) BackupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) BackupRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) BackupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) Category() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"category",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) ConnectionStringPrefix() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connectionStringPrefix",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) ConnectionStringType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connectionStringType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) DbInstanceClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) DbInstanceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) DbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) DbInstanceStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) DbInstanceStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) DbMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbMappings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) DbNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) DedicatedHostGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dedicatedHostGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) InstanceNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) MaintainTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) MasterUsername() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterUsername",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) MasterUserPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterUserPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) MasterUserType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterUserType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) PayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"payType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) PeriodType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) Port() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"port",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) PreferredBackupPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"preferredBackupPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) PreferredBackupTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"preferredBackupTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) PrivateIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"privateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) RestoreTable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"restoreTable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) RestoreTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"restoreTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) SecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) SlaveZoneIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"slaveZoneIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) SqlCollectorStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sqlCollectorStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) SslSetting() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sslSetting",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) TableMeta() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tableMeta",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) Tags() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) TimeoutInMinutes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeoutInMinutes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstanceClone) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosDBInstanceClone(scope alicloudroscdkcore.Construct, id *string, props *RosDBInstanceCloneProps, enableResourcePropertyConstraint *bool) RosDBInstanceClone {
	_init_.Initialize()

	if err := validateNewRosDBInstanceCloneParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosDBInstanceClone{}

	_jsii_.Create(
		"@alicloud/ros-cdk-rds.RosDBInstanceClone",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosDBInstanceClone_Override(r RosDBInstanceClone, scope alicloudroscdkcore.Construct, id *string, props *RosDBInstanceCloneProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-rds.RosDBInstanceClone",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetAllocatePublicConnection(val interface{}) {
	if err := j.validateSetAllocatePublicConnectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"allocatePublicConnection",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetBackupId(val interface{}) {
	if err := j.validateSetBackupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backupId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetBackupRetentionPeriod(val interface{}) {
	if err := j.validateSetBackupRetentionPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backupRetentionPeriod",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetBackupType(val interface{}) {
	if err := j.validateSetBackupTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backupType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetCategory(val interface{}) {
	if err := j.validateSetCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"category",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetConnectionStringPrefix(val interface{}) {
	if err := j.validateSetConnectionStringPrefixParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connectionStringPrefix",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetConnectionStringType(val interface{}) {
	if err := j.validateSetConnectionStringTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connectionStringType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetDbInstanceClass(val interface{}) {
	if err := j.validateSetDbInstanceClassParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceClass",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetDbInstanceDescription(val interface{}) {
	if err := j.validateSetDbInstanceDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceDescription",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetDbInstanceId(val interface{}) {
	if err := j.validateSetDbInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetDbInstanceStorage(val interface{}) {
	if err := j.validateSetDbInstanceStorageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceStorage",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetDbInstanceStorageType(val interface{}) {
	if err := j.validateSetDbInstanceStorageTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceStorageType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetDbMappings(val interface{}) {
	if err := j.validateSetDbMappingsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbMappings",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetDbNames(val interface{}) {
	if err := j.validateSetDbNamesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbNames",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetDedicatedHostGroupId(val interface{}) {
	if err := j.validateSetDedicatedHostGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dedicatedHostGroupId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetInstanceNetworkType(val interface{}) {
	if err := j.validateSetInstanceNetworkTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceNetworkType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetMaintainTime(val interface{}) {
	if err := j.validateSetMaintainTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maintainTime",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetMasterUsername(val interface{}) {
	if err := j.validateSetMasterUsernameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterUsername",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetMasterUserPassword(val interface{}) {
	if err := j.validateSetMasterUserPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterUserPassword",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetMasterUserType(val interface{}) {
	if err := j.validateSetMasterUserTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterUserType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetPayType(val interface{}) {
	if err := j.validateSetPayTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"payType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetPeriodType(val interface{}) {
	if err := j.validateSetPeriodTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetPort(val interface{}) {
	if err := j.validateSetPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"port",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetPreferredBackupPeriod(val interface{}) {
	if err := j.validateSetPreferredBackupPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"preferredBackupPeriod",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetPreferredBackupTime(val interface{}) {
	if err := j.validateSetPreferredBackupTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"preferredBackupTime",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetPrivateIpAddress(val interface{}) {
	if err := j.validateSetPrivateIpAddressParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"privateIpAddress",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetRestoreTable(val interface{}) {
	if err := j.validateSetRestoreTableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"restoreTable",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetRestoreTime(val interface{}) {
	if err := j.validateSetRestoreTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"restoreTime",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetSecurityIpList(val interface{}) {
	if err := j.validateSetSecurityIpListParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityIpList",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetSlaveZoneIds(val interface{}) {
	if err := j.validateSetSlaveZoneIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"slaveZoneIds",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetSqlCollectorStatus(val interface{}) {
	if err := j.validateSetSqlCollectorStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sqlCollectorStatus",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetSslSetting(val interface{}) {
	if err := j.validateSetSslSettingParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sslSetting",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetTableMeta(val interface{}) {
	if err := j.validateSetTableMetaParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tableMeta",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetTags(val *map[string]interface{}) {
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetTimeoutInMinutes(val interface{}) {
	if err := j.validateSetTimeoutInMinutesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeoutInMinutes",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosDBInstanceClone)SetZoneId(val interface{}) {
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
func RosDBInstanceClone_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDBInstanceClone_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-rds.RosDBInstanceClone",
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
func RosDBInstanceClone_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDBInstanceClone_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-rds.RosDBInstanceClone",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosDBInstanceClone_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosDBInstanceClone_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-rds.RosDBInstanceClone",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosDBInstanceClone_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-rds.RosDBInstanceClone",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosDBInstanceClone) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosDBInstanceClone) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDBInstanceClone) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDBInstanceClone) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDBInstanceClone) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosDBInstanceClone) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDBInstanceClone) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDBInstanceClone) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDBInstanceClone) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

