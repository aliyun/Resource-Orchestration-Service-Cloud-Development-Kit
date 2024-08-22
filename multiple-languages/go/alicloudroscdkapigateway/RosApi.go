package alicloudroscdkapigateway

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ApiGateway::Api`, which is used to create an API.
type RosApi interface {
	alicloudroscdkcore.RosResource
	AllowSignatureMethod() interface{}
	SetAllowSignatureMethod(val interface{})
	ApiName() interface{}
	SetApiName(val interface{})
	AppCodeAuthType() interface{}
	SetAppCodeAuthType(val interface{})
	AttrApiId() alicloudroscdkcore.IResolvable
	AuthType() interface{}
	SetAuthType(val interface{})
	ConstParameters() interface{}
	SetConstParameters(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Description() interface{}
	SetDescription(val interface{})
	DisableInternet() interface{}
	SetDisableInternet(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	ErrorCodeSamples() interface{}
	SetErrorCodeSamples(val interface{})
	FailResultSample() interface{}
	SetFailResultSample(val interface{})
	ForceNonceCheck() interface{}
	SetForceNonceCheck(val interface{})
	GroupId() interface{}
	SetGroupId(val interface{})
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
	OpenIdConnectConfig() interface{}
	SetOpenIdConnectConfig(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RequestConfig() interface{}
	SetRequestConfig(val interface{})
	RequestParameters() interface{}
	SetRequestParameters(val interface{})
	ResultBodyModel() interface{}
	SetResultBodyModel(val interface{})
	ResultDescriptions() interface{}
	SetResultDescriptions(val interface{})
	ResultSample() interface{}
	SetResultSample(val interface{})
	ResultType() interface{}
	SetResultType(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	ServiceConfig() interface{}
	SetServiceConfig(val interface{})
	ServiceParameters() interface{}
	SetServiceParameters(val interface{})
	ServiceParametersMap() interface{}
	SetServiceParametersMap(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	SystemParameters() interface{}
	SetSystemParameters(val interface{})
	Tags() *[]*RosApi_TagsProperty
	SetTags(val *[]*RosApi_TagsProperty)
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	Visibility() interface{}
	SetVisibility(val interface{})
	WebSocketApiType() interface{}
	SetWebSocketApiType(val interface{})
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

// The jsii proxy struct for RosApi
type jsiiProxy_RosApi struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosApi) AllowSignatureMethod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"allowSignatureMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) ApiName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"apiName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) AppCodeAuthType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"appCodeAuthType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) AttrApiId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrApiId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) AuthType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"authType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) ConstParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"constParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) DisableInternet() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"disableInternet",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) ErrorCodeSamples() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"errorCodeSamples",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) FailResultSample() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"failResultSample",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) ForceNonceCheck() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"forceNonceCheck",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) GroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"groupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) OpenIdConnectConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"openIdConnectConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) RequestConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"requestConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) RequestParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"requestParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) ResultBodyModel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resultBodyModel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) ResultDescriptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resultDescriptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) ResultSample() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resultSample",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) ResultType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resultType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) ServiceConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serviceConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) ServiceParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serviceParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) ServiceParametersMap() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serviceParametersMap",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) SystemParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) Tags() *[]*RosApi_TagsProperty {
	var returns *[]*RosApi_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) Visibility() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"visibility",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApi) WebSocketApiType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"webSocketApiType",
		&returns,
	)
	return returns
}


func NewRosApi(scope alicloudroscdkcore.Construct, id *string, props *RosApiProps, enableResourcePropertyConstraint *bool) RosApi {
	_init_.Initialize()

	if err := validateNewRosApiParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosApi{}

	_jsii_.Create(
		"@alicloud/ros-cdk-apigateway.RosApi",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosApi_Override(r RosApi, scope alicloudroscdkcore.Construct, id *string, props *RosApiProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-apigateway.RosApi",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosApi)SetAllowSignatureMethod(val interface{}) {
	if err := j.validateSetAllowSignatureMethodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"allowSignatureMethod",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetApiName(val interface{}) {
	if err := j.validateSetApiNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"apiName",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetAppCodeAuthType(val interface{}) {
	if err := j.validateSetAppCodeAuthTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"appCodeAuthType",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetAuthType(val interface{}) {
	if err := j.validateSetAuthTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"authType",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetConstParameters(val interface{}) {
	if err := j.validateSetConstParametersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"constParameters",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetDisableInternet(val interface{}) {
	if err := j.validateSetDisableInternetParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"disableInternet",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetErrorCodeSamples(val interface{}) {
	if err := j.validateSetErrorCodeSamplesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"errorCodeSamples",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetFailResultSample(val interface{}) {
	if err := j.validateSetFailResultSampleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"failResultSample",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetForceNonceCheck(val interface{}) {
	if err := j.validateSetForceNonceCheckParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"forceNonceCheck",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetGroupId(val interface{}) {
	if err := j.validateSetGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"groupId",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetOpenIdConnectConfig(val interface{}) {
	if err := j.validateSetOpenIdConnectConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"openIdConnectConfig",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetRequestConfig(val interface{}) {
	if err := j.validateSetRequestConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"requestConfig",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetRequestParameters(val interface{}) {
	if err := j.validateSetRequestParametersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"requestParameters",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetResultBodyModel(val interface{}) {
	if err := j.validateSetResultBodyModelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resultBodyModel",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetResultDescriptions(val interface{}) {
	if err := j.validateSetResultDescriptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resultDescriptions",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetResultSample(val interface{}) {
	if err := j.validateSetResultSampleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resultSample",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetResultType(val interface{}) {
	if err := j.validateSetResultTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resultType",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetServiceConfig(val interface{}) {
	if err := j.validateSetServiceConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serviceConfig",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetServiceParameters(val interface{}) {
	if err := j.validateSetServiceParametersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serviceParameters",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetServiceParametersMap(val interface{}) {
	if err := j.validateSetServiceParametersMapParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serviceParametersMap",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetSystemParameters(val interface{}) {
	if err := j.validateSetSystemParametersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemParameters",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetTags(val *[]*RosApi_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetVisibility(val interface{}) {
	if err := j.validateSetVisibilityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"visibility",
		val,
	)
}

func (j *jsiiProxy_RosApi)SetWebSocketApiType(val interface{}) {
	if err := j.validateSetWebSocketApiTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"webSocketApiType",
		val,
	)
}

// Return whether the given object is a Construct.
func RosApi_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosApi_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-apigateway.RosApi",
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
func RosApi_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosApi_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-apigateway.RosApi",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosApi_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosApi_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-apigateway.RosApi",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosApi_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-apigateway.RosApi",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosApi) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosApi) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosApi) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosApi) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosApi) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosApi) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosApi) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosApi) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosApi) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosApi) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosApi) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosApi) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosApi) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosApi) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosApi) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosApi) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosApi) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosApi) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosApi) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosApi) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosApi) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosApi) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

