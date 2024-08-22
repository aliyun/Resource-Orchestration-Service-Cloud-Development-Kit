package alicloudroscdklindorm

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdklindorm/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdklindorm/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::Lindorm::MultiZoneInstance`, which is used to create a multi-zone Lindorm instance.
type RosMultiZoneInstance interface {
	alicloudroscdkcore.RosResource
	ArbiterVSwitchId() interface{}
	SetArbiterVSwitchId(val interface{})
	ArbiterZoneId() interface{}
	SetArbiterZoneId(val interface{})
	AttrAuthInfos() alicloudroscdkcore.IResolvable
	AttrInstanceId() alicloudroscdkcore.IResolvable
	AttrJdbcUrlList() alicloudroscdkcore.IResolvable
	ColdStorage() interface{}
	SetColdStorage(val interface{})
	CoreSingleStorage() interface{}
	SetCoreSingleStorage(val interface{})
	CoreSpec() interface{}
	SetCoreSpec(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DiskCategory() interface{}
	SetDiskCategory(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	FilestoreNum() interface{}
	SetFilestoreNum(val interface{})
	FilestoreSpec() interface{}
	SetFilestoreSpec(val interface{})
	InstanceChargeType() interface{}
	SetInstanceChargeType(val interface{})
	InstanceName() interface{}
	SetInstanceName(val interface{})
	LindormNum() interface{}
	SetLindormNum(val interface{})
	LindormSpec() interface{}
	SetLindormSpec(val interface{})
	LogDiskCategory() interface{}
	SetLogDiskCategory(val interface{})
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
	LogNum() interface{}
	SetLogNum(val interface{})
	LogSingleStorage() interface{}
	SetLogSingleStorage(val interface{})
	LogSpec() interface{}
	SetLogSpec(val interface{})
	MultiZoneCombination() interface{}
	SetMultiZoneCombination(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Period() interface{}
	SetPeriod(val interface{})
	PeriodUnit() interface{}
	SetPeriodUnit(val interface{})
	PrimaryVSwitchId() interface{}
	SetPrimaryVSwitchId(val interface{})
	PrimaryZoneId() interface{}
	SetPrimaryZoneId(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SecurityIpList() interface{}
	SetSecurityIpList(val interface{})
	SolrNum() interface{}
	SetSolrNum(val interface{})
	SolrSpec() interface{}
	SetSolrSpec(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StandbyVSwitchId() interface{}
	SetStandbyVSwitchId(val interface{})
	StandbyZoneId() interface{}
	SetStandbyZoneId(val interface{})
	StreamNum() interface{}
	SetStreamNum(val interface{})
	StreamSpec() interface{}
	SetStreamSpec(val interface{})
	TsdbNum() interface{}
	SetTsdbNum(val interface{})
	TsdbSpec() interface{}
	SetTsdbSpec(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VpcId() interface{}
	SetVpcId(val interface{})
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

// The jsii proxy struct for RosMultiZoneInstance
type jsiiProxy_RosMultiZoneInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosMultiZoneInstance) ArbiterVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"arbiterVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) ArbiterZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"arbiterZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) AttrAuthInfos() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAuthInfos",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) AttrJdbcUrlList() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrJdbcUrlList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) ColdStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"coldStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) CoreSingleStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"coreSingleStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) CoreSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"coreSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) DiskCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"diskCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) FilestoreNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"filestoreNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) FilestoreSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"filestoreSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) InstanceChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) InstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) LindormNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"lindormNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) LindormSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"lindormSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) LogDiskCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logDiskCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) LogNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) LogSingleStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logSingleStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) LogSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) MultiZoneCombination() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"multiZoneCombination",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) PrimaryVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"primaryVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) PrimaryZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"primaryZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) SecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) SolrNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"solrNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) SolrSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"solrSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) StandbyVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"standbyVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) StandbyZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"standbyZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) StreamNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"streamNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) StreamSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"streamSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) TsdbNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tsdbNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) TsdbSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tsdbSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMultiZoneInstance) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}


func NewRosMultiZoneInstance(scope alicloudroscdkcore.Construct, id *string, props *RosMultiZoneInstanceProps, enableResourcePropertyConstraint *bool) RosMultiZoneInstance {
	_init_.Initialize()

	if err := validateNewRosMultiZoneInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosMultiZoneInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-lindorm.RosMultiZoneInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosMultiZoneInstance_Override(r RosMultiZoneInstance, scope alicloudroscdkcore.Construct, id *string, props *RosMultiZoneInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-lindorm.RosMultiZoneInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetArbiterVSwitchId(val interface{}) {
	if err := j.validateSetArbiterVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"arbiterVSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetArbiterZoneId(val interface{}) {
	if err := j.validateSetArbiterZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"arbiterZoneId",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetColdStorage(val interface{}) {
	if err := j.validateSetColdStorageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"coldStorage",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetCoreSingleStorage(val interface{}) {
	if err := j.validateSetCoreSingleStorageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"coreSingleStorage",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetCoreSpec(val interface{}) {
	if err := j.validateSetCoreSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"coreSpec",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetDiskCategory(val interface{}) {
	if err := j.validateSetDiskCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"diskCategory",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetFilestoreNum(val interface{}) {
	if err := j.validateSetFilestoreNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"filestoreNum",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetFilestoreSpec(val interface{}) {
	if err := j.validateSetFilestoreSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"filestoreSpec",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetInstanceChargeType(val interface{}) {
	if err := j.validateSetInstanceChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceChargeType",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetInstanceName(val interface{}) {
	if err := j.validateSetInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceName",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetLindormNum(val interface{}) {
	if err := j.validateSetLindormNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"lindormNum",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetLindormSpec(val interface{}) {
	if err := j.validateSetLindormSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"lindormSpec",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetLogDiskCategory(val interface{}) {
	if err := j.validateSetLogDiskCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logDiskCategory",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetLogNum(val interface{}) {
	if err := j.validateSetLogNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logNum",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetLogSingleStorage(val interface{}) {
	if err := j.validateSetLogSingleStorageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logSingleStorage",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetLogSpec(val interface{}) {
	if err := j.validateSetLogSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logSpec",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetMultiZoneCombination(val interface{}) {
	if err := j.validateSetMultiZoneCombinationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"multiZoneCombination",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetPrimaryVSwitchId(val interface{}) {
	if err := j.validateSetPrimaryVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"primaryVSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetPrimaryZoneId(val interface{}) {
	if err := j.validateSetPrimaryZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"primaryZoneId",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetSecurityIpList(val interface{}) {
	if err := j.validateSetSecurityIpListParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityIpList",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetSolrNum(val interface{}) {
	if err := j.validateSetSolrNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"solrNum",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetSolrSpec(val interface{}) {
	if err := j.validateSetSolrSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"solrSpec",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetStandbyVSwitchId(val interface{}) {
	if err := j.validateSetStandbyVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"standbyVSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetStandbyZoneId(val interface{}) {
	if err := j.validateSetStandbyZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"standbyZoneId",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetStreamNum(val interface{}) {
	if err := j.validateSetStreamNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"streamNum",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetStreamSpec(val interface{}) {
	if err := j.validateSetStreamSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"streamSpec",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetTsdbNum(val interface{}) {
	if err := j.validateSetTsdbNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tsdbNum",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetTsdbSpec(val interface{}) {
	if err := j.validateSetTsdbSpecParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tsdbSpec",
		val,
	)
}

func (j *jsiiProxy_RosMultiZoneInstance)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosMultiZoneInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosMultiZoneInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-lindorm.RosMultiZoneInstance",
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
func RosMultiZoneInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosMultiZoneInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-lindorm.RosMultiZoneInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosMultiZoneInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosMultiZoneInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-lindorm.RosMultiZoneInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosMultiZoneInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-lindorm.RosMultiZoneInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosMultiZoneInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosMultiZoneInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosMultiZoneInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosMultiZoneInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosMultiZoneInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosMultiZoneInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosMultiZoneInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

