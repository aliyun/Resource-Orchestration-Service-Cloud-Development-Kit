package alicloudroscdkesa

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::EdgeContainerApp`.
type RosEdgeContainerApp interface {
	alicloudroscdkcore.RosResource
	AttrAppStatus() alicloudroscdkcore.IResolvable
	AttrCreateTime() alicloudroscdkcore.IResolvable
	AttrDomainName() alicloudroscdkcore.IResolvable
	AttrEdgeContainerAppName() alicloudroscdkcore.IResolvable
	AttrGatewayType() alicloudroscdkcore.IResolvable
	AttrHealthCheckFailTimes() alicloudroscdkcore.IResolvable
	AttrHealthCheckHost() alicloudroscdkcore.IResolvable
	AttrHealthCheckHttpCode() alicloudroscdkcore.IResolvable
	AttrHealthCheckInterval() alicloudroscdkcore.IResolvable
	AttrHealthCheckMethod() alicloudroscdkcore.IResolvable
	AttrHealthCheckPort() alicloudroscdkcore.IResolvable
	AttrHealthCheckSuccTimes() alicloudroscdkcore.IResolvable
	AttrHealthCheckTimeout() alicloudroscdkcore.IResolvable
	AttrHealthCheckType() alicloudroscdkcore.IResolvable
	AttrHealthCheckUri() alicloudroscdkcore.IResolvable
	AttrQuicCid() alicloudroscdkcore.IResolvable
	AttrRemarks() alicloudroscdkcore.IResolvable
	AttrServicePort() alicloudroscdkcore.IResolvable
	AttrTargetPort() alicloudroscdkcore.IResolvable
	AttrUpdateTime() alicloudroscdkcore.IResolvable
	AttrVersionCount() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EdgeContainerAppName() interface{}
	SetEdgeContainerAppName(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	HealthCheckFailTimes() interface{}
	SetHealthCheckFailTimes(val interface{})
	HealthCheckHost() interface{}
	SetHealthCheckHost(val interface{})
	HealthCheckHttpCode() interface{}
	SetHealthCheckHttpCode(val interface{})
	HealthCheckInterval() interface{}
	SetHealthCheckInterval(val interface{})
	HealthCheckMethod() interface{}
	SetHealthCheckMethod(val interface{})
	HealthCheckPort() interface{}
	SetHealthCheckPort(val interface{})
	HealthCheckSuccTimes() interface{}
	SetHealthCheckSuccTimes(val interface{})
	HealthCheckTimeout() interface{}
	SetHealthCheckTimeout(val interface{})
	HealthCheckType() interface{}
	SetHealthCheckType(val interface{})
	HealthCheckUri() interface{}
	SetHealthCheckUri(val interface{})
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
	Remarks() interface{}
	SetRemarks(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	ServicePort() interface{}
	SetServicePort(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	TargetPort() interface{}
	SetTargetPort(val interface{})
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

// The jsii proxy struct for RosEdgeContainerApp
type jsiiProxy_RosEdgeContainerApp struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrAppStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAppStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrDomainName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDomainName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrEdgeContainerAppName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEdgeContainerAppName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrGatewayType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrGatewayType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrHealthCheckFailTimes() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckFailTimes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrHealthCheckHost() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrHealthCheckHttpCode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckHttpCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrHealthCheckInterval() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrHealthCheckMethod() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrHealthCheckPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrHealthCheckSuccTimes() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckSuccTimes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrHealthCheckTimeout() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrHealthCheckType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrHealthCheckUri() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthCheckUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrQuicCid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrQuicCid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrRemarks() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRemarks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrServicePort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrServicePort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrTargetPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTargetPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrUpdateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) AttrVersionCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVersionCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) EdgeContainerAppName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"edgeContainerAppName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) HealthCheckFailTimes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckFailTimes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) HealthCheckHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) HealthCheckHttpCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckHttpCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) HealthCheckInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) HealthCheckMethod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) HealthCheckPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) HealthCheckSuccTimes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckSuccTimes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) HealthCheckTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) HealthCheckType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) HealthCheckUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"healthCheckUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) Remarks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"remarks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) ServicePort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"servicePort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) TargetPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"targetPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosEdgeContainerApp) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosEdgeContainerApp(scope alicloudroscdkcore.Construct, id *string, props *RosEdgeContainerAppProps, enableResourcePropertyConstraint *bool) RosEdgeContainerApp {
	_init_.Initialize()

	if err := validateNewRosEdgeContainerAppParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosEdgeContainerApp{}

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosEdgeContainerApp",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosEdgeContainerApp_Override(r RosEdgeContainerApp, scope alicloudroscdkcore.Construct, id *string, props *RosEdgeContainerAppProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-esa.RosEdgeContainerApp",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetEdgeContainerAppName(val interface{}) {
	if err := j.validateSetEdgeContainerAppNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"edgeContainerAppName",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetHealthCheckFailTimes(val interface{}) {
	if err := j.validateSetHealthCheckFailTimesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckFailTimes",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetHealthCheckHost(val interface{}) {
	if err := j.validateSetHealthCheckHostParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckHost",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetHealthCheckHttpCode(val interface{}) {
	if err := j.validateSetHealthCheckHttpCodeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckHttpCode",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetHealthCheckInterval(val interface{}) {
	if err := j.validateSetHealthCheckIntervalParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckInterval",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetHealthCheckMethod(val interface{}) {
	if err := j.validateSetHealthCheckMethodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckMethod",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetHealthCheckPort(val interface{}) {
	if err := j.validateSetHealthCheckPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckPort",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetHealthCheckSuccTimes(val interface{}) {
	if err := j.validateSetHealthCheckSuccTimesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckSuccTimes",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetHealthCheckTimeout(val interface{}) {
	if err := j.validateSetHealthCheckTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckTimeout",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetHealthCheckType(val interface{}) {
	if err := j.validateSetHealthCheckTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckType",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetHealthCheckUri(val interface{}) {
	if err := j.validateSetHealthCheckUriParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"healthCheckUri",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetRemarks(val interface{}) {
	if err := j.validateSetRemarksParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"remarks",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetServicePort(val interface{}) {
	if err := j.validateSetServicePortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"servicePort",
		val,
	)
}

func (j *jsiiProxy_RosEdgeContainerApp)SetTargetPort(val interface{}) {
	if err := j.validateSetTargetPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"targetPort",
		val,
	)
}

// Return whether the given object is a Construct.
func RosEdgeContainerApp_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosEdgeContainerApp_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosEdgeContainerApp",
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
func RosEdgeContainerApp_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosEdgeContainerApp_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosEdgeContainerApp",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosEdgeContainerApp_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosEdgeContainerApp_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-esa.RosEdgeContainerApp",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosEdgeContainerApp_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-esa.RosEdgeContainerApp",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosEdgeContainerApp) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEdgeContainerApp) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEdgeContainerApp) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEdgeContainerApp) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosEdgeContainerApp) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEdgeContainerApp) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosEdgeContainerApp) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosEdgeContainerApp) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEdgeContainerApp) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosEdgeContainerApp) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

