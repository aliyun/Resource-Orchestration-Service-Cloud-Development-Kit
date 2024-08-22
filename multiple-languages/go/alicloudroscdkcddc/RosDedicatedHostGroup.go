package alicloudroscdkcddc

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcddc/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcddc/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CDDC::DedicatedHostGroup`, which is used to create a dedicated cluster.
type RosDedicatedHostGroup interface {
	alicloudroscdkcore.RosResource
	AllocationPolicy() interface{}
	SetAllocationPolicy(val interface{})
	AttrAllocationPolicy() alicloudroscdkcore.IResolvable
	AttrBastionInstanceId() alicloudroscdkcore.IResolvable
	AttrCpuAllocatedAmount() alicloudroscdkcore.IResolvable
	AttrCpuAllocateRation() alicloudroscdkcore.IResolvable
	AttrCpuAllocationRatio() alicloudroscdkcore.IResolvable
	AttrDedicatedHostGroupDesc() alicloudroscdkcore.IResolvable
	AttrDedicatedHostGroupId() alicloudroscdkcore.IResolvable
	AttrDeployType() alicloudroscdkcore.IResolvable
	AttrDiskAllocatedAmount() alicloudroscdkcore.IResolvable
	AttrDiskAllocateRation() alicloudroscdkcore.IResolvable
	AttrDiskAllocationRatio() alicloudroscdkcore.IResolvable
	AttrDiskUsedAmount() alicloudroscdkcore.IResolvable
	AttrDiskUtility() alicloudroscdkcore.IResolvable
	AttrEngine() alicloudroscdkcore.IResolvable
	AttrHostNumber() alicloudroscdkcore.IResolvable
	AttrHostReplacePolicy() alicloudroscdkcore.IResolvable
	AttrInstanceNumber() alicloudroscdkcore.IResolvable
	AttrMemAllocatedAmount() alicloudroscdkcore.IResolvable
	AttrMemAllocateRation() alicloudroscdkcore.IResolvable
	AttrMemAllocationRatio() alicloudroscdkcore.IResolvable
	AttrMemUsedAmount() alicloudroscdkcore.IResolvable
	AttrMemUtility() alicloudroscdkcore.IResolvable
	AttrOpenPermission() alicloudroscdkcore.IResolvable
	AttrText() alicloudroscdkcore.IResolvable
	AttrVpcId() alicloudroscdkcore.IResolvable
	CpuAllocationRatio() interface{}
	SetCpuAllocationRatio(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DedicatedHostGroupDesc() interface{}
	SetDedicatedHostGroupDesc(val interface{})
	DiskAllocationRatio() interface{}
	SetDiskAllocationRatio(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Engine() interface{}
	SetEngine(val interface{})
	HostReplacePolicy() interface{}
	SetHostReplacePolicy(val interface{})
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
	MemAllocationRatio() interface{}
	SetMemAllocationRatio(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	OpenPermission() interface{}
	SetOpenPermission(val interface{})
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
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
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

// The jsii proxy struct for RosDedicatedHostGroup
type jsiiProxy_RosDedicatedHostGroup struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosDedicatedHostGroup) AllocationPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"allocationPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrAllocationPolicy() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAllocationPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrBastionInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBastionInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrCpuAllocatedAmount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCpuAllocatedAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrCpuAllocateRation() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCpuAllocateRation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrCpuAllocationRatio() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCpuAllocationRatio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrDedicatedHostGroupDesc() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDedicatedHostGroupDesc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrDedicatedHostGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDedicatedHostGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrDeployType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeployType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrDiskAllocatedAmount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDiskAllocatedAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrDiskAllocateRation() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDiskAllocateRation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrDiskAllocationRatio() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDiskAllocationRatio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrDiskUsedAmount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDiskUsedAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrDiskUtility() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDiskUtility",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrEngine() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrHostNumber() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHostNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrHostReplacePolicy() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHostReplacePolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrInstanceNumber() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrMemAllocatedAmount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMemAllocatedAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrMemAllocateRation() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMemAllocateRation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrMemAllocationRatio() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMemAllocationRatio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrMemUsedAmount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMemUsedAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrMemUtility() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMemUtility",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrOpenPermission() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOpenPermission",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrText() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrText",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) CpuAllocationRatio() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpuAllocationRatio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) DedicatedHostGroupDesc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dedicatedHostGroupDesc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) DiskAllocationRatio() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"diskAllocationRatio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) Engine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"engine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) HostReplacePolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostReplacePolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) MemAllocationRatio() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"memAllocationRatio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) OpenPermission() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"openPermission",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDedicatedHostGroup) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}


func NewRosDedicatedHostGroup(scope alicloudroscdkcore.Construct, id *string, props *RosDedicatedHostGroupProps, enableResourcePropertyConstraint *bool) RosDedicatedHostGroup {
	_init_.Initialize()

	if err := validateNewRosDedicatedHostGroupParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosDedicatedHostGroup{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cddc.RosDedicatedHostGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosDedicatedHostGroup_Override(r RosDedicatedHostGroup, scope alicloudroscdkcore.Construct, id *string, props *RosDedicatedHostGroupProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cddc.RosDedicatedHostGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosDedicatedHostGroup)SetAllocationPolicy(val interface{}) {
	if err := j.validateSetAllocationPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"allocationPolicy",
		val,
	)
}

func (j *jsiiProxy_RosDedicatedHostGroup)SetCpuAllocationRatio(val interface{}) {
	if err := j.validateSetCpuAllocationRatioParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpuAllocationRatio",
		val,
	)
}

func (j *jsiiProxy_RosDedicatedHostGroup)SetDedicatedHostGroupDesc(val interface{}) {
	if err := j.validateSetDedicatedHostGroupDescParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dedicatedHostGroupDesc",
		val,
	)
}

func (j *jsiiProxy_RosDedicatedHostGroup)SetDiskAllocationRatio(val interface{}) {
	if err := j.validateSetDiskAllocationRatioParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"diskAllocationRatio",
		val,
	)
}

func (j *jsiiProxy_RosDedicatedHostGroup)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosDedicatedHostGroup)SetEngine(val interface{}) {
	if err := j.validateSetEngineParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"engine",
		val,
	)
}

func (j *jsiiProxy_RosDedicatedHostGroup)SetHostReplacePolicy(val interface{}) {
	if err := j.validateSetHostReplacePolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostReplacePolicy",
		val,
	)
}

func (j *jsiiProxy_RosDedicatedHostGroup)SetMemAllocationRatio(val interface{}) {
	if err := j.validateSetMemAllocationRatioParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"memAllocationRatio",
		val,
	)
}

func (j *jsiiProxy_RosDedicatedHostGroup)SetOpenPermission(val interface{}) {
	if err := j.validateSetOpenPermissionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"openPermission",
		val,
	)
}

func (j *jsiiProxy_RosDedicatedHostGroup)SetVpcId(val interface{}) {
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
func RosDedicatedHostGroup_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDedicatedHostGroup_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cddc.RosDedicatedHostGroup",
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
func RosDedicatedHostGroup_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDedicatedHostGroup_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cddc.RosDedicatedHostGroup",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosDedicatedHostGroup_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosDedicatedHostGroup_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cddc.RosDedicatedHostGroup",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosDedicatedHostGroup_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cddc.RosDedicatedHostGroup",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosDedicatedHostGroup) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosDedicatedHostGroup) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDedicatedHostGroup) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosDedicatedHostGroup) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDedicatedHostGroup) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDedicatedHostGroup) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDedicatedHostGroup) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

