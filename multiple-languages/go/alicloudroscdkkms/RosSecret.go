package alicloudroscdkkms

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::KMS::Secret`, which is used to create a secret and store the initial version of the secret.
type RosSecret interface {
	alicloudroscdkcore.RosResource
	AttrArn() alicloudroscdkcore.IResolvable
	AttrSecretName() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Description() interface{}
	SetDescription(val interface{})
	DkmsInstanceId() interface{}
	SetDkmsInstanceId(val interface{})
	EnableAutomaticRotation() interface{}
	SetEnableAutomaticRotation(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EncryptionKeyId() interface{}
	SetEncryptionKeyId(val interface{})
	ExtendedConfig() interface{}
	SetExtendedConfig(val interface{})
	ForceDeleteWithoutRecovery() interface{}
	SetForceDeleteWithoutRecovery(val interface{})
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
	RecoveryWindowInDays() interface{}
	SetRecoveryWindowInDays(val interface{})
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
	RotationInterval() interface{}
	SetRotationInterval(val interface{})
	SecretData() interface{}
	SetSecretData(val interface{})
	SecretDataType() interface{}
	SetSecretDataType(val interface{})
	SecretName() interface{}
	SetSecretName(val interface{})
	SecretType() interface{}
	SetSecretType(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VersionId() interface{}
	SetVersionId(val interface{})
	VersionStages() interface{}
	SetVersionStages(val interface{})
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

// The jsii proxy struct for RosSecret
type jsiiProxy_RosSecret struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosSecret) AttrArn() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) AttrSecretName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecretName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) DkmsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dkmsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) EnableAutomaticRotation() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAutomaticRotation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) EncryptionKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"encryptionKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) ExtendedConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"extendedConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) ForceDeleteWithoutRecovery() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"forceDeleteWithoutRecovery",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) RecoveryWindowInDays() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"recoveryWindowInDays",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) RotationInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rotationInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) SecretData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"secretData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) SecretDataType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"secretDataType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) SecretName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"secretName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) SecretType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"secretType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) VersionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"versionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosSecret) VersionStages() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"versionStages",
		&returns,
	)
	return returns
}


func NewRosSecret(scope alicloudroscdkcore.Construct, id *string, props *RosSecretProps, enableResourcePropertyConstraint *bool) RosSecret {
	_init_.Initialize()

	if err := validateNewRosSecretParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosSecret{}

	_jsii_.Create(
		"@alicloud/ros-cdk-kms.RosSecret",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosSecret_Override(r RosSecret, scope alicloudroscdkcore.Construct, id *string, props *RosSecretProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-kms.RosSecret",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosSecret)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetDkmsInstanceId(val interface{}) {
	if err := j.validateSetDkmsInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dkmsInstanceId",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetEnableAutomaticRotation(val interface{}) {
	if err := j.validateSetEnableAutomaticRotationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableAutomaticRotation",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetEncryptionKeyId(val interface{}) {
	if err := j.validateSetEncryptionKeyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"encryptionKeyId",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetExtendedConfig(val interface{}) {
	if err := j.validateSetExtendedConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"extendedConfig",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetForceDeleteWithoutRecovery(val interface{}) {
	if err := j.validateSetForceDeleteWithoutRecoveryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"forceDeleteWithoutRecovery",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetRecoveryWindowInDays(val interface{}) {
	if err := j.validateSetRecoveryWindowInDaysParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"recoveryWindowInDays",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetRotationInterval(val interface{}) {
	if err := j.validateSetRotationIntervalParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rotationInterval",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetSecretData(val interface{}) {
	if err := j.validateSetSecretDataParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"secretData",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetSecretDataType(val interface{}) {
	if err := j.validateSetSecretDataTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"secretDataType",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetSecretName(val interface{}) {
	if err := j.validateSetSecretNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"secretName",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetSecretType(val interface{}) {
	if err := j.validateSetSecretTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"secretType",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetVersionId(val interface{}) {
	if err := j.validateSetVersionIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"versionId",
		val,
	)
}

func (j *jsiiProxy_RosSecret)SetVersionStages(val interface{}) {
	if err := j.validateSetVersionStagesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"versionStages",
		val,
	)
}

// Return whether the given object is a Construct.
func RosSecret_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosSecret_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-kms.RosSecret",
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
func RosSecret_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosSecret_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-kms.RosSecret",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosSecret_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosSecret_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-kms.RosSecret",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosSecret_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-kms.RosSecret",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosSecret) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosSecret) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosSecret) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosSecret) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosSecret) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosSecret) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosSecret) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosSecret) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosSecret) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosSecret) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosSecret) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosSecret) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosSecret) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosSecret) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosSecret) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSecret) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosSecret) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosSecret) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosSecret) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosSecret) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSecret) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosSecret) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

