package alicloudroscdkgraphdatabase

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkgraphdatabase/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgraphdatabase/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::GraphDatabase::DbInstance`, which is used to create a Graph Database (GDB) instance.
type RosDbInstance interface {
	alicloudroscdkcore.RosResource
	AttrConnectionString() alicloudroscdkcore.IResolvable
	AttrCreateTime() alicloudroscdkcore.IResolvable
	AttrCurrentMinorVersion() alicloudroscdkcore.IResolvable
	AttrDbInstanceCategory() alicloudroscdkcore.IResolvable
	AttrDbInstanceCpu() alicloudroscdkcore.IResolvable
	AttrDbInstanceDescription() alicloudroscdkcore.IResolvable
	AttrDbInstanceId() alicloudroscdkcore.IResolvable
	AttrDbInstanceIpArray() alicloudroscdkcore.IResolvable
	AttrDbInstanceMemory() alicloudroscdkcore.IResolvable
	AttrDbInstanceNetworkType() alicloudroscdkcore.IResolvable
	AttrDbInstanceStorageType() alicloudroscdkcore.IResolvable
	AttrDbInstanceType() alicloudroscdkcore.IResolvable
	AttrDbNodeClass() alicloudroscdkcore.IResolvable
	AttrDbNodeCount() alicloudroscdkcore.IResolvable
	AttrDbNodeStorage() alicloudroscdkcore.IResolvable
	AttrDbVersion() alicloudroscdkcore.IResolvable
	AttrEcsSecurityGroupRelations() alicloudroscdkcore.IResolvable
	AttrExpired() alicloudroscdkcore.IResolvable
	AttrExpireTime() alicloudroscdkcore.IResolvable
	AttrLatestMinorVersion() alicloudroscdkcore.IResolvable
	AttrLockMode() alicloudroscdkcore.IResolvable
	AttrLockReason() alicloudroscdkcore.IResolvable
	AttrMaintainTime() alicloudroscdkcore.IResolvable
	AttrPaymentType() alicloudroscdkcore.IResolvable
	AttrPort() alicloudroscdkcore.IResolvable
	AttrPublicConnectionString() alicloudroscdkcore.IResolvable
	AttrPublicPort() alicloudroscdkcore.IResolvable
	AttrReadOnlyDbInstanceIds() alicloudroscdkcore.IResolvable
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	AttrTags() alicloudroscdkcore.IResolvable
	AttrVpcId() alicloudroscdkcore.IResolvable
	AttrVSwitchId() alicloudroscdkcore.IResolvable
	AttrZoneId() alicloudroscdkcore.IResolvable
	BackupSetId() interface{}
	SetBackupSetId(val interface{})
	CreateType() interface{}
	SetCreateType(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DbInstanceCategory() interface{}
	SetDbInstanceCategory(val interface{})
	DbInstanceDescription() interface{}
	SetDbInstanceDescription(val interface{})
	DbInstanceIpArray() interface{}
	SetDbInstanceIpArray(val interface{})
	DbInstanceNetworkType() interface{}
	SetDbInstanceNetworkType(val interface{})
	DbInstanceStorageType() interface{}
	SetDbInstanceStorageType(val interface{})
	DbNodeClass() interface{}
	SetDbNodeClass(val interface{})
	DbNodeStorage() interface{}
	SetDbNodeStorage(val interface{})
	DbVersion() interface{}
	SetDbVersion(val interface{})
	EcsSecurityGroupRelations() interface{}
	SetEcsSecurityGroupRelations(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
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
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	PaymentType() interface{}
	SetPaymentType(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	RestoreType() interface{}
	SetRestoreType(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SourceDbInstanceId() interface{}
	SetSourceDbInstanceId(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosDbInstance_TagsProperty
	SetTags(val *[]*RosDbInstance_TagsProperty)
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

// The jsii proxy struct for RosDbInstance
type jsiiProxy_RosDbInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosDbInstance) AttrConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrCurrentMinorVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCurrentMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbInstanceCategory() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbInstanceCpu() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbInstanceDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbInstanceIpArray() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceIpArray",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbInstanceMemory() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceMemory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbInstanceNetworkType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbInstanceStorageType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbInstanceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbNodeClass() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbNodeClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbNodeCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbNodeCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbNodeStorage() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbNodeStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrDbVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrEcsSecurityGroupRelations() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEcsSecurityGroupRelations",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrExpired() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExpired",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrExpireTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrLatestMinorVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLatestMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrLockMode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLockMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrLockReason() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLockReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrMaintainTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrPublicConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrPublicPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrReadOnlyDbInstanceIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReadOnlyDbInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) BackupSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backupSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) CreateType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"createType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) DbInstanceCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) DbInstanceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) DbInstanceIpArray() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceIpArray",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) DbInstanceNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) DbInstanceStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) DbNodeClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbNodeClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) DbNodeStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbNodeStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) DbVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) EcsSecurityGroupRelations() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsSecurityGroupRelations",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) MaintainTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) PaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"paymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) RestoreType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"restoreType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) SourceDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) Tags() *[]*RosDbInstance_TagsProperty {
	var returns *[]*RosDbInstance_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDbInstance) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosDbInstance(scope alicloudroscdkcore.Construct, id *string, props *RosDbInstanceProps, enableResourcePropertyConstraint *bool) RosDbInstance {
	_init_.Initialize()

	if err := validateNewRosDbInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosDbInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-graphdatabase.RosDbInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosDbInstance_Override(r RosDbInstance, scope alicloudroscdkcore.Construct, id *string, props *RosDbInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-graphdatabase.RosDbInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosDbInstance)SetBackupSetId(val interface{}) {
	if err := j.validateSetBackupSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backupSetId",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetCreateType(val interface{}) {
	if err := j.validateSetCreateTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"createType",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetDbInstanceCategory(val interface{}) {
	if err := j.validateSetDbInstanceCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceCategory",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetDbInstanceDescription(val interface{}) {
	if err := j.validateSetDbInstanceDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceDescription",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetDbInstanceIpArray(val interface{}) {
	if err := j.validateSetDbInstanceIpArrayParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceIpArray",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetDbInstanceNetworkType(val interface{}) {
	if err := j.validateSetDbInstanceNetworkTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceNetworkType",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetDbInstanceStorageType(val interface{}) {
	if err := j.validateSetDbInstanceStorageTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceStorageType",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetDbNodeClass(val interface{}) {
	if err := j.validateSetDbNodeClassParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbNodeClass",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetDbNodeStorage(val interface{}) {
	if err := j.validateSetDbNodeStorageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbNodeStorage",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetDbVersion(val interface{}) {
	if err := j.validateSetDbVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbVersion",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetEcsSecurityGroupRelations(val interface{}) {
	if err := j.validateSetEcsSecurityGroupRelationsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsSecurityGroupRelations",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetMaintainTime(val interface{}) {
	if err := j.validateSetMaintainTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maintainTime",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetPaymentType(val interface{}) {
	if err := j.validateSetPaymentTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"paymentType",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetRestoreType(val interface{}) {
	if err := j.validateSetRestoreTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"restoreType",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetSourceDbInstanceId(val interface{}) {
	if err := j.validateSetSourceDbInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceDbInstanceId",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetTags(val *[]*RosDbInstance_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosDbInstance)SetZoneId(val interface{}) {
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
func RosDbInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDbInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-graphdatabase.RosDbInstance",
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
func RosDbInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDbInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-graphdatabase.RosDbInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosDbInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosDbInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-graphdatabase.RosDbInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosDbInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-graphdatabase.RosDbInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosDbInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosDbInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosDbInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosDbInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDbInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosDbInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosDbInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosDbInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosDbInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosDbInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDbInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosDbInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosDbInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDbInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDbInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDbInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosDbInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDbInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosDbInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDbInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDbInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDbInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

