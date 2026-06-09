package alicloudroscdkapig

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::APIG::HttpApi`, which is used to create an HTTP API.
type RosHttpApi interface {
	alicloudroscdkcore.RosResource
	AgentProtocols() interface{}
	SetAgentProtocols(val interface{})
	AiProtocols() interface{}
	SetAiProtocols(val interface{})
	AttrHttpApiId() alicloudroscdkcore.IResolvable
	AuthConfig() interface{}
	SetAuthConfig(val interface{})
	BasePath() interface{}
	SetBasePath(val interface{})
	BelongGatewayId() interface{}
	SetBelongGatewayId(val interface{})
	BuiltinRouteNames() interface{}
	SetBuiltinRouteNames(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeployConfigs() interface{}
	SetDeployConfigs(val interface{})
	Description() interface{}
	SetDescription(val interface{})
	EnableAuth() interface{}
	SetEnableAuth(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	FirstByteTimeout() interface{}
	SetFirstByteTimeout(val interface{})
	HttpApiName() interface{}
	SetHttpApiName(val interface{})
	IngressConfig() interface{}
	SetIngressConfig(val interface{})
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
	ModelCategory() interface{}
	SetModelCategory(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	OnlyChangeConfig() interface{}
	SetOnlyChangeConfig(val interface{})
	Protocols() interface{}
	SetProtocols(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RemoveBasePathOnForward() interface{}
	SetRemoveBasePathOnForward(val interface{})
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Strategy() interface{}
	SetStrategy(val interface{})
	Type() interface{}
	SetType(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VersionConfig() interface{}
	SetVersionConfig(val interface{})
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
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDesc() *string
	FetchRosDependency() *[]*string
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

// The jsii proxy struct for RosHttpApi
type jsiiProxy_RosHttpApi struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosHttpApi) AgentProtocols() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"agentProtocols",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) AiProtocols() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"aiProtocols",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) AttrHttpApiId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHttpApiId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) AuthConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"authConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) BasePath() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"basePath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) BelongGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"belongGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) BuiltinRouteNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"builtinRouteNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) DeployConfigs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deployConfigs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) EnableAuth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAuth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) FirstByteTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"firstByteTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) HttpApiName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"httpApiName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) IngressConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ingressConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) ModelCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"modelCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) OnlyChangeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"onlyChangeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) Protocols() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"protocols",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) RemoveBasePathOnForward() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"removeBasePathOnForward",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) Strategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"strategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) Type() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"type",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosHttpApi) VersionConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"versionConfig",
		&returns,
	)
	return returns
}


func NewRosHttpApi(scope alicloudroscdkcore.Construct, id *string, props *RosHttpApiProps, enableResourcePropertyConstraint *bool) RosHttpApi {
	_init_.Initialize()

	if err := validateNewRosHttpApiParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosHttpApi{}

	_jsii_.Create(
		"@alicloud/ros-cdk-apig.RosHttpApi",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosHttpApi_Override(r RosHttpApi, scope alicloudroscdkcore.Construct, id *string, props *RosHttpApiProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-apig.RosHttpApi",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosHttpApi)SetAgentProtocols(val interface{}) {
	if err := j.validateSetAgentProtocolsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"agentProtocols",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetAiProtocols(val interface{}) {
	if err := j.validateSetAiProtocolsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"aiProtocols",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetAuthConfig(val interface{}) {
	if err := j.validateSetAuthConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"authConfig",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetBasePath(val interface{}) {
	if err := j.validateSetBasePathParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"basePath",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetBelongGatewayId(val interface{}) {
	if err := j.validateSetBelongGatewayIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"belongGatewayId",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetBuiltinRouteNames(val interface{}) {
	if err := j.validateSetBuiltinRouteNamesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"builtinRouteNames",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetDeployConfigs(val interface{}) {
	if err := j.validateSetDeployConfigsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deployConfigs",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetEnableAuth(val interface{}) {
	if err := j.validateSetEnableAuthParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableAuth",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetFirstByteTimeout(val interface{}) {
	if err := j.validateSetFirstByteTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"firstByteTimeout",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetHttpApiName(val interface{}) {
	if err := j.validateSetHttpApiNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"httpApiName",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetIngressConfig(val interface{}) {
	if err := j.validateSetIngressConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ingressConfig",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetModelCategory(val interface{}) {
	if err := j.validateSetModelCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"modelCategory",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetOnlyChangeConfig(val interface{}) {
	if err := j.validateSetOnlyChangeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"onlyChangeConfig",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetProtocols(val interface{}) {
	if err := j.validateSetProtocolsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"protocols",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetRemoveBasePathOnForward(val interface{}) {
	if err := j.validateSetRemoveBasePathOnForwardParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"removeBasePathOnForward",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetStrategy(val interface{}) {
	if err := j.validateSetStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"strategy",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetType(val interface{}) {
	if err := j.validateSetTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"type",
		val,
	)
}

func (j *jsiiProxy_RosHttpApi)SetVersionConfig(val interface{}) {
	if err := j.validateSetVersionConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"versionConfig",
		val,
	)
}

// Return whether the given object is a Construct.
func RosHttpApi_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosHttpApi_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-apig.RosHttpApi",
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
func RosHttpApi_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosHttpApi_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-apig.RosHttpApi",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosHttpApi_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosHttpApi_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-apig.RosHttpApi",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosHttpApi_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-apig.RosHttpApi",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosHttpApi) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosHttpApi) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosHttpApi) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosHttpApi) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosHttpApi) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosHttpApi) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosHttpApi) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosHttpApi) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosHttpApi) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosHttpApi) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosHttpApi) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosHttpApi) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpApi) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpApi) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpApi) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosHttpApi) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosHttpApi) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosHttpApi) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpApi) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosHttpApi) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosHttpApi) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosHttpApi) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosHttpApi) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpApi) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosHttpApi) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

