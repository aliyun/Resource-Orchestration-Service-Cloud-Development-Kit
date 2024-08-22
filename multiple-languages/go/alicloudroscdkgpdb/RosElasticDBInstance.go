package alicloudroscdkgpdb

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::GPDB::ElasticDBInstance`, which is used to create an AnalyticDB for PostgreSQL instance in elastic storage mode.
type RosElasticDBInstance interface {
	alicloudroscdkcore.RosResource
	AttrConnectionString() alicloudroscdkcore.IResolvable
	AttrDbInstanceId() alicloudroscdkcore.IResolvable
	AttrOrderId() alicloudroscdkcore.IResolvable
	AttrPort() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DbInstanceCategory() interface{}
	SetDbInstanceCategory(val interface{})
	DbInstanceDescription() interface{}
	SetDbInstanceDescription(val interface{})
	DbInstanceMode() interface{}
	SetDbInstanceMode(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EncryptionKey() interface{}
	SetEncryptionKey(val interface{})
	EncryptionType() interface{}
	SetEncryptionType(val interface{})
	EngineVersion() interface{}
	SetEngineVersion(val interface{})
	InstanceSpec() interface{}
	SetInstanceSpec(val interface{})
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
	MasterNodeNum() interface{}
	SetMasterNodeNum(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	PayType() interface{}
	SetPayType(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PeriodUnit() interface{}
	SetPeriodUnit(val interface{})
	PrivateIpAddress() interface{}
	SetPrivateIpAddress(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SecurityIpList() interface{}
	SetSecurityIpList(val interface{})
	SegNodeNum() interface{}
	SetSegNodeNum(val interface{})
	SegStorageType() interface{}
	SetSegStorageType(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StorageSize() interface{}
	SetStorageSize(val interface{})
	Tags() *[]*RosElasticDBInstance_TagsProperty
	SetTags(val *[]*RosElasticDBInstance_TagsProperty)
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

// The jsii proxy struct for RosElasticDBInstance
type jsiiProxy_RosElasticDBInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosElasticDBInstance) AttrConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) AttrDbInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) AttrOrderId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) AttrPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) DbInstanceCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) DbInstanceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) DbInstanceMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) EncryptionKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"encryptionKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) EncryptionType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"encryptionType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) EngineVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"engineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) InstanceSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) MasterNodeNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterNodeNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) PayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"payType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) PrivateIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"privateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) SecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) SegNodeNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"segNodeNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) SegStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"segStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) StorageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) Tags() *[]*RosElasticDBInstance_TagsProperty {
	var returns *[]*RosElasticDBInstance_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosElasticDBInstance) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosElasticDBInstance(scope alicloudroscdkcore.Construct, id *string, props *RosElasticDBInstanceProps, enableResourcePropertyConstraint *bool) RosElasticDBInstance {
	_init_.Initialize()

	if err := validateNewRosElasticDBInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosElasticDBInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-gpdb.RosElasticDBInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosElasticDBInstance_Override(r RosElasticDBInstance, scope alicloudroscdkcore.Construct, id *string, props *RosElasticDBInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-gpdb.RosElasticDBInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetDbInstanceCategory(val interface{}) {
	if err := j.validateSetDbInstanceCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceCategory",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetDbInstanceDescription(val interface{}) {
	if err := j.validateSetDbInstanceDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceDescription",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetDbInstanceMode(val interface{}) {
	if err := j.validateSetDbInstanceModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceMode",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetEncryptionKey(val interface{}) {
	if err := j.validateSetEncryptionKeyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"encryptionKey",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetEncryptionType(val interface{}) {
	if err := j.validateSetEncryptionTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"encryptionType",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetEngineVersion(val interface{}) {
	if err := j.validateSetEngineVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"engineVersion",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetInstanceSpec(val interface{}) {
	if err := j.validateSetInstanceSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceSpec",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetMasterNodeNum(val interface{}) {
	if err := j.validateSetMasterNodeNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterNodeNum",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetPayType(val interface{}) {
	if err := j.validateSetPayTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"payType",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetPrivateIpAddress(val interface{}) {
	if err := j.validateSetPrivateIpAddressParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"privateIpAddress",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetSecurityIpList(val interface{}) {
	if err := j.validateSetSecurityIpListParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityIpList",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetSegNodeNum(val interface{}) {
	if err := j.validateSetSegNodeNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"segNodeNum",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetSegStorageType(val interface{}) {
	if err := j.validateSetSegStorageTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"segStorageType",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetStorageSize(val interface{}) {
	if err := j.validateSetStorageSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageSize",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetTags(val *[]*RosElasticDBInstance_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosElasticDBInstance)SetZoneId(val interface{}) {
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
func RosElasticDBInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosElasticDBInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-gpdb.RosElasticDBInstance",
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
func RosElasticDBInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosElasticDBInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-gpdb.RosElasticDBInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosElasticDBInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosElasticDBInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-gpdb.RosElasticDBInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosElasticDBInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-gpdb.RosElasticDBInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosElasticDBInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosElasticDBInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosElasticDBInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosElasticDBInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosElasticDBInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosElasticDBInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosElasticDBInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosElasticDBInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosElasticDBInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

