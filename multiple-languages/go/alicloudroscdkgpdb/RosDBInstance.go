package alicloudroscdkgpdb

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::GPDB::DBInstance`, which is used to create an AnalyticDB for PostgreSQL instance in reserved storage mode.
type RosDBInstance interface {
	alicloudroscdkcore.RosResource
	AttrConnectionString() alicloudroscdkcore.IResolvable
	AttrDbInstanceId() alicloudroscdkcore.IResolvable
	AttrOrderId() alicloudroscdkcore.IResolvable
	AttrPort() alicloudroscdkcore.IResolvable
	CreateSampleData() interface{}
	SetCreateSampleData(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DbInstanceCategory() interface{}
	SetDbInstanceCategory(val interface{})
	DbInstanceClass() interface{}
	SetDbInstanceClass(val interface{})
	DbInstanceDescription() interface{}
	SetDbInstanceDescription(val interface{})
	DbInstanceGroupCount() interface{}
	SetDbInstanceGroupCount(val interface{})
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
	IdleTime() interface{}
	SetIdleTime(val interface{})
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
	ProdType() interface{}
	SetProdType(val interface{})
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
	SegDiskPerformanceLevel() interface{}
	SetSegDiskPerformanceLevel(val interface{})
	SegNodeNum() interface{}
	SetSegNodeNum(val interface{})
	SegStorageType() interface{}
	SetSegStorageType(val interface{})
	ServerlessMode() interface{}
	SetServerlessMode(val interface{})
	ServerlessResource() interface{}
	SetServerlessResource(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StorageSize() interface{}
	SetStorageSize(val interface{})
	Tags() *[]*RosDBInstance_TagsProperty
	SetTags(val *[]*RosDBInstance_TagsProperty)
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VectorConfigurationStatus() interface{}
	SetVectorConfigurationStatus(val interface{})
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

func (j *jsiiProxy_RosDBInstance) AttrConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConnectionString",
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

func (j *jsiiProxy_RosDBInstance) AttrOrderId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) AttrPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) CreateSampleData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"createSampleData",
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

func (j *jsiiProxy_RosDBInstance) DbInstanceCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceCategory",
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

func (j *jsiiProxy_RosDBInstance) DbInstanceGroupCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceGroupCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) DbInstanceMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbInstanceMode",
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

func (j *jsiiProxy_RosDBInstance) EncryptionType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"encryptionType",
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

func (j *jsiiProxy_RosDBInstance) IdleTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"idleTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) InstanceSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceSpec",
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

func (j *jsiiProxy_RosDBInstance) MasterNodeNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"masterNodeNum",
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

func (j *jsiiProxy_RosDBInstance) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
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

func (j *jsiiProxy_RosDBInstance) ProdType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"prodType",
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

func (j *jsiiProxy_RosDBInstance) SecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) SegDiskPerformanceLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"segDiskPerformanceLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) SegNodeNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"segNodeNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) SegStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"segStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ServerlessMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serverlessMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) ServerlessResource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serverlessResource",
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

func (j *jsiiProxy_RosDBInstance) StorageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBInstance) Tags() *[]*RosDBInstance_TagsProperty {
	var returns *[]*RosDBInstance_TagsProperty
	_jsii_.Get(
		j,
		"tags",
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

func (j *jsiiProxy_RosDBInstance) VectorConfigurationStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vectorConfigurationStatus",
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
		"@alicloud/ros-cdk-gpdb.RosDBInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosDBInstance_Override(r RosDBInstance, scope alicloudroscdkcore.Construct, id *string, props *RosDBInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-gpdb.RosDBInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosDBInstance)SetCreateSampleData(val interface{}) {
	if err := j.validateSetCreateSampleDataParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"createSampleData",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDbInstanceCategory(val interface{}) {
	if err := j.validateSetDbInstanceCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceCategory",
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

func (j *jsiiProxy_RosDBInstance)SetDbInstanceGroupCount(val interface{}) {
	if err := j.validateSetDbInstanceGroupCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceGroupCount",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetDbInstanceMode(val interface{}) {
	if err := j.validateSetDbInstanceModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbInstanceMode",
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

func (j *jsiiProxy_RosDBInstance)SetEncryptionType(val interface{}) {
	if err := j.validateSetEncryptionTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"encryptionType",
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

func (j *jsiiProxy_RosDBInstance)SetIdleTime(val interface{}) {
	if err := j.validateSetIdleTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"idleTime",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetInstanceSpec(val interface{}) {
	if err := j.validateSetInstanceSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceSpec",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetMasterNodeNum(val interface{}) {
	if err := j.validateSetMasterNodeNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"masterNodeNum",
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

func (j *jsiiProxy_RosDBInstance)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
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

func (j *jsiiProxy_RosDBInstance)SetProdType(val interface{}) {
	if err := j.validateSetProdTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"prodType",
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

func (j *jsiiProxy_RosDBInstance)SetSegDiskPerformanceLevel(val interface{}) {
	if err := j.validateSetSegDiskPerformanceLevelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"segDiskPerformanceLevel",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetSegNodeNum(val interface{}) {
	if err := j.validateSetSegNodeNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"segNodeNum",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetSegStorageType(val interface{}) {
	if err := j.validateSetSegStorageTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"segStorageType",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetServerlessMode(val interface{}) {
	if err := j.validateSetServerlessModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serverlessMode",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetServerlessResource(val interface{}) {
	if err := j.validateSetServerlessResourceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serverlessResource",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetStorageSize(val interface{}) {
	if err := j.validateSetStorageSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageSize",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetTags(val *[]*RosDBInstance_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosDBInstance)SetVectorConfigurationStatus(val interface{}) {
	if err := j.validateSetVectorConfigurationStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vectorConfigurationStatus",
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
		"@alicloud/ros-cdk-gpdb.RosDBInstance",
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
		"@alicloud/ros-cdk-gpdb.RosDBInstance",
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
		"@alicloud/ros-cdk-gpdb.RosDBInstance",
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
		"@alicloud/ros-cdk-gpdb.RosDBInstance",
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

