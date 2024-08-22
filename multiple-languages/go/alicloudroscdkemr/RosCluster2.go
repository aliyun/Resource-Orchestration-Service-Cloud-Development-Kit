package alicloudroscdkemr

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::Cluster2`, which is used to create an E-MapReduce (EMR) cluster.
type RosCluster2 interface {
	alicloudroscdkcore.RosResource
	ApplicationConfigs() interface{}
	SetApplicationConfigs(val interface{})
	Applications() interface{}
	SetApplications(val interface{})
	AttrApplicationLinks() alicloudroscdkcore.IResolvable
	AttrClusterId() alicloudroscdkcore.IResolvable
	BootstrapScripts() interface{}
	SetBootstrapScripts(val interface{})
	ClusterName() interface{}
	SetClusterName(val interface{})
	ClusterType() interface{}
	SetClusterType(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeployMode() interface{}
	SetDeployMode(val interface{})
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
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	NodeAttributes() interface{}
	SetNodeAttributes(val interface{})
	NodeGroups() interface{}
	SetNodeGroups(val interface{})
	PaymentType() interface{}
	SetPaymentType(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ReleaseVersion() interface{}
	SetReleaseVersion(val interface{})
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SecurityMode() interface{}
	SetSecurityMode(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	SubscriptionConfig() interface{}
	SetSubscriptionConfig(val interface{})
	Tags() *[]*RosCluster2_TagsProperty
	SetTags(val *[]*RosCluster2_TagsProperty)
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

// The jsii proxy struct for RosCluster2
type jsiiProxy_RosCluster2 struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosCluster2) ApplicationConfigs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"applicationConfigs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) Applications() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"applications",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) AttrApplicationLinks() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrApplicationLinks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) AttrClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) BootstrapScripts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"bootstrapScripts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) ClusterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) ClusterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) DeployMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deployMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) NodeAttributes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nodeAttributes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) NodeGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nodeGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) PaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"paymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) ReleaseVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"releaseVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) SecurityMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) SubscriptionConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"subscriptionConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) Tags() *[]*RosCluster2_TagsProperty {
	var returns *[]*RosCluster2_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster2) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosCluster2(scope alicloudroscdkcore.Construct, id *string, props *RosCluster2Props, enableResourcePropertyConstraint *bool) RosCluster2 {
	_init_.Initialize()

	if err := validateNewRosCluster2Parameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosCluster2{}

	_jsii_.Create(
		"@alicloud/ros-cdk-emr.RosCluster2",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosCluster2_Override(r RosCluster2, scope alicloudroscdkcore.Construct, id *string, props *RosCluster2Props, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-emr.RosCluster2",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosCluster2)SetApplicationConfigs(val interface{}) {
	if err := j.validateSetApplicationConfigsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"applicationConfigs",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetApplications(val interface{}) {
	if err := j.validateSetApplicationsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"applications",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetBootstrapScripts(val interface{}) {
	if err := j.validateSetBootstrapScriptsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"bootstrapScripts",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetClusterName(val interface{}) {
	if err := j.validateSetClusterNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterName",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetClusterType(val interface{}) {
	if err := j.validateSetClusterTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterType",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetDeployMode(val interface{}) {
	if err := j.validateSetDeployModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deployMode",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetNodeAttributes(val interface{}) {
	if err := j.validateSetNodeAttributesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nodeAttributes",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetNodeGroups(val interface{}) {
	if err := j.validateSetNodeGroupsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nodeGroups",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetPaymentType(val interface{}) {
	if err := j.validateSetPaymentTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"paymentType",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetReleaseVersion(val interface{}) {
	if err := j.validateSetReleaseVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"releaseVersion",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetSecurityMode(val interface{}) {
	if err := j.validateSetSecurityModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityMode",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetSubscriptionConfig(val interface{}) {
	if err := j.validateSetSubscriptionConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"subscriptionConfig",
		val,
	)
}

func (j *jsiiProxy_RosCluster2)SetTags(val *[]*RosCluster2_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

// Return whether the given object is a Construct.
func RosCluster2_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosCluster2_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-emr.RosCluster2",
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
func RosCluster2_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosCluster2_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-emr.RosCluster2",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosCluster2_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosCluster2_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-emr.RosCluster2",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosCluster2_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-emr.RosCluster2",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosCluster2) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosCluster2) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosCluster2) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosCluster2) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosCluster2) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosCluster2) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosCluster2) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosCluster2) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosCluster2) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosCluster2) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosCluster2) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosCluster2) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosCluster2) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosCluster2) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosCluster2) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCluster2) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosCluster2) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosCluster2) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosCluster2) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosCluster2) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCluster2) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCluster2) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

