package alicloudroscdkcddc

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcddc/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcddc/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CDDC::MyBase`, which is used to create a host in a Proprietary MyBase dedicated cluster in ApsaraDB for MyBase.
type RosMyBase interface {
	alicloudroscdkcore.RosResource
	AttrInstanceIds() alicloudroscdkcore.IResolvable
	AttrOrderIds() alicloudroscdkcore.IResolvable
	AutoRenew() interface{}
	SetAutoRenew(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DedicatedHostGroupDescription() interface{}
	SetDedicatedHostGroupDescription(val interface{})
	DedicatedHostGroupId() interface{}
	SetDedicatedHostGroupId(val interface{})
	EcsClassList() interface{}
	SetEcsClassList(val interface{})
	EcsDeploymentSetId() interface{}
	SetEcsDeploymentSetId(val interface{})
	EcsHostName() interface{}
	SetEcsHostName(val interface{})
	EcsInstanceName() interface{}
	SetEcsInstanceName(val interface{})
	EcsUniqueSuffix() interface{}
	SetEcsUniqueSuffix(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Engine() interface{}
	SetEngine(val interface{})
	ImageId() interface{}
	SetImageId(val interface{})
	InternetChargeType() interface{}
	SetInternetChargeType(val interface{})
	InternetMaxBandwidthOut() interface{}
	SetInternetMaxBandwidthOut(val interface{})
	KeyPairName() interface{}
	SetKeyPairName(val interface{})
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
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	OsPassword() interface{}
	SetOsPassword(val interface{})
	PasswordInherit() interface{}
	SetPasswordInherit(val interface{})
	PayType() interface{}
	SetPayType(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PeriodType() interface{}
	SetPeriodType(val interface{})
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
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	UserData() interface{}
	SetUserData(val interface{})
	UserDataInBase64() interface{}
	SetUserDataInBase64(val interface{})
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

// The jsii proxy struct for RosMyBase
type jsiiProxy_RosMyBase struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosMyBase) AttrInstanceIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) AttrOrderIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOrderIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) DedicatedHostGroupDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dedicatedHostGroupDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) DedicatedHostGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dedicatedHostGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) EcsClassList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsClassList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) EcsDeploymentSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsDeploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) EcsHostName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsHostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) EcsInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) EcsUniqueSuffix() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsUniqueSuffix",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) Engine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"engine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) ImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) InternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) InternetMaxBandwidthOut() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) KeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) OsPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"osPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) PasswordInherit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"passwordInherit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) PayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"payType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) PeriodType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) UserData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"userData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) UserDataInBase64() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"userDataInBase64",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosMyBase) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosMyBase(scope alicloudroscdkcore.Construct, id *string, props *RosMyBaseProps, enableResourcePropertyConstraint *bool) RosMyBase {
	_init_.Initialize()

	if err := validateNewRosMyBaseParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosMyBase{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cddc.RosMyBase",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosMyBase_Override(r RosMyBase, scope alicloudroscdkcore.Construct, id *string, props *RosMyBaseProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cddc.RosMyBase",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosMyBase)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetDedicatedHostGroupDescription(val interface{}) {
	if err := j.validateSetDedicatedHostGroupDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dedicatedHostGroupDescription",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetDedicatedHostGroupId(val interface{}) {
	if err := j.validateSetDedicatedHostGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dedicatedHostGroupId",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetEcsClassList(val interface{}) {
	if err := j.validateSetEcsClassListParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsClassList",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetEcsDeploymentSetId(val interface{}) {
	if err := j.validateSetEcsDeploymentSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsDeploymentSetId",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetEcsHostName(val interface{}) {
	if err := j.validateSetEcsHostNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsHostName",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetEcsInstanceName(val interface{}) {
	if err := j.validateSetEcsInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsInstanceName",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetEcsUniqueSuffix(val interface{}) {
	if err := j.validateSetEcsUniqueSuffixParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsUniqueSuffix",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetEngine(val interface{}) {
	if err := j.validateSetEngineParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"engine",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetImageId(val interface{}) {
	if err := j.validateSetImageIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageId",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetInternetChargeType(val interface{}) {
	if err := j.validateSetInternetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetChargeType",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetInternetMaxBandwidthOut(val interface{}) {
	if err := j.validateSetInternetMaxBandwidthOutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetMaxBandwidthOut",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetKeyPairName(val interface{}) {
	if err := j.validateSetKeyPairNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keyPairName",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetOsPassword(val interface{}) {
	if err := j.validateSetOsPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"osPassword",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetPasswordInherit(val interface{}) {
	if err := j.validateSetPasswordInheritParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"passwordInherit",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetPayType(val interface{}) {
	if err := j.validateSetPayTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"payType",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetPeriodType(val interface{}) {
	if err := j.validateSetPeriodTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodType",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetUserData(val interface{}) {
	if err := j.validateSetUserDataParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"userData",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetUserDataInBase64(val interface{}) {
	if err := j.validateSetUserDataInBase64Parameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"userDataInBase64",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosMyBase)SetZoneId(val interface{}) {
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
func RosMyBase_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosMyBase_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cddc.RosMyBase",
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
func RosMyBase_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosMyBase_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cddc.RosMyBase",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosMyBase_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosMyBase_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cddc.RosMyBase",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosMyBase_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cddc.RosMyBase",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosMyBase) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosMyBase) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosMyBase) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosMyBase) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosMyBase) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosMyBase) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosMyBase) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosMyBase) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosMyBase) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosMyBase) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosMyBase) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosMyBase) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosMyBase) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosMyBase) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosMyBase) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosMyBase) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosMyBase) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosMyBase) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosMyBase) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosMyBase) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosMyBase) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosMyBase) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

