package alicloudroscdkdbs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkdbs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdbs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::DBS::Download`, which is used to create an advanced download task.
type RosDownload interface {
	alicloudroscdkcore.RosResource
	AttrBakSetId() alicloudroscdkcore.IResolvable
	AttrDownloadAddressInfo() alicloudroscdkcore.IResolvable
	AttrInstanceName() alicloudroscdkcore.IResolvable
	AttrTaskId() alicloudroscdkcore.IResolvable
	BakSetId() interface{}
	SetBakSetId(val interface{})
	BakSetSize() interface{}
	SetBakSetSize(val interface{})
	BakSetType() interface{}
	SetBakSetType(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeleteBackupSetInOss() interface{}
	SetDeleteBackupSetInOss(val interface{})
	DownloadAddressDuration() interface{}
	SetDownloadAddressDuration(val interface{})
	DownloadPointInTime() interface{}
	SetDownloadPointInTime(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	FormatType() interface{}
	SetFormatType(val interface{})
	InstanceName() interface{}
	SetInstanceName(val interface{})
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
	TargetBucket() interface{}
	SetTargetBucket(val interface{})
	TargetOssRegion() interface{}
	SetTargetOssRegion(val interface{})
	TargetPath() interface{}
	SetTargetPath(val interface{})
	TargetType() interface{}
	SetTargetType(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
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

// The jsii proxy struct for RosDownload
type jsiiProxy_RosDownload struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosDownload) AttrBakSetId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBakSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) AttrDownloadAddressInfo() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDownloadAddressInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) AttrInstanceName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) AttrTaskId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) BakSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"bakSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) BakSetSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"bakSetSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) BakSetType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"bakSetType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) DeleteBackupSetInOss() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deleteBackupSetInOss",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) DownloadAddressDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"downloadAddressDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) DownloadPointInTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"downloadPointInTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) FormatType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"formatType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) InstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) TargetBucket() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"targetBucket",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) TargetOssRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"targetOssRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) TargetPath() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"targetPath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) TargetType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"targetType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDownload) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosDownload(scope alicloudroscdkcore.Construct, id *string, props *RosDownloadProps, enableResourcePropertyConstraint *bool) RosDownload {
	_init_.Initialize()

	if err := validateNewRosDownloadParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosDownload{}

	_jsii_.Create(
		"@alicloud/ros-cdk-dbs.RosDownload",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosDownload_Override(r RosDownload, scope alicloudroscdkcore.Construct, id *string, props *RosDownloadProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-dbs.RosDownload",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosDownload)SetBakSetId(val interface{}) {
	if err := j.validateSetBakSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"bakSetId",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetBakSetSize(val interface{}) {
	if err := j.validateSetBakSetSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"bakSetSize",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetBakSetType(val interface{}) {
	if err := j.validateSetBakSetTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"bakSetType",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetDeleteBackupSetInOss(val interface{}) {
	if err := j.validateSetDeleteBackupSetInOssParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deleteBackupSetInOss",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetDownloadAddressDuration(val interface{}) {
	if err := j.validateSetDownloadAddressDurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"downloadAddressDuration",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetDownloadPointInTime(val interface{}) {
	if err := j.validateSetDownloadPointInTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"downloadPointInTime",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetFormatType(val interface{}) {
	if err := j.validateSetFormatTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"formatType",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetInstanceName(val interface{}) {
	if err := j.validateSetInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceName",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetTargetBucket(val interface{}) {
	if err := j.validateSetTargetBucketParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"targetBucket",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetTargetOssRegion(val interface{}) {
	if err := j.validateSetTargetOssRegionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"targetOssRegion",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetTargetPath(val interface{}) {
	if err := j.validateSetTargetPathParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"targetPath",
		val,
	)
}

func (j *jsiiProxy_RosDownload)SetTargetType(val interface{}) {
	if err := j.validateSetTargetTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"targetType",
		val,
	)
}

// Return whether the given object is a Construct.
func RosDownload_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDownload_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dbs.RosDownload",
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
func RosDownload_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDownload_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dbs.RosDownload",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosDownload_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosDownload_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dbs.RosDownload",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosDownload_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-dbs.RosDownload",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosDownload) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosDownload) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosDownload) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosDownload) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDownload) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosDownload) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosDownload) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosDownload) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosDownload) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosDownload) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDownload) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosDownload) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosDownload) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDownload) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDownload) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDownload) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosDownload) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDownload) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosDownload) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDownload) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDownload) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDownload) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

