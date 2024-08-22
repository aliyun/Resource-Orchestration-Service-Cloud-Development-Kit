package alicloudroscdkfc

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::FC::Function`, which is used to create a function.
//
// Functions must be associated with services. All functions of a service share the same attributes as the service, such as service authorization and log configurations.
type RosFunction interface {
	alicloudroscdkcore.RosResource
	AsyncConfiguration() interface{}
	SetAsyncConfiguration(val interface{})
	AttrArn() alicloudroscdkcore.IResolvable
	AttrFunctionId() alicloudroscdkcore.IResolvable
	AttrFunctionName() alicloudroscdkcore.IResolvable
	AttrServiceId() alicloudroscdkcore.IResolvable
	AttrServiceName() alicloudroscdkcore.IResolvable
	CaPort() interface{}
	SetCaPort(val interface{})
	Code() interface{}
	SetCode(val interface{})
	Cpu() interface{}
	SetCpu(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	CustomContainerConfig() interface{}
	SetCustomContainerConfig(val interface{})
	CustomDns() interface{}
	SetCustomDns(val interface{})
	CustomHealthCheckConfig() interface{}
	SetCustomHealthCheckConfig(val interface{})
	CustomRuntimeConfig() interface{}
	SetCustomRuntimeConfig(val interface{})
	Description() interface{}
	SetDescription(val interface{})
	DiskSize() interface{}
	SetDiskSize(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EnvironmentVariables() interface{}
	SetEnvironmentVariables(val interface{})
	FunctionName() interface{}
	SetFunctionName(val interface{})
	GpuMemorySize() interface{}
	SetGpuMemorySize(val interface{})
	Handler() interface{}
	SetHandler(val interface{})
	InitializationTimeout() interface{}
	SetInitializationTimeout(val interface{})
	Initializer() interface{}
	SetInitializer(val interface{})
	InstanceConcurrency() interface{}
	SetInstanceConcurrency(val interface{})
	InstanceLifecycleConfig() interface{}
	SetInstanceLifecycleConfig(val interface{})
	InstanceSoftConcurrency() interface{}
	SetInstanceSoftConcurrency(val interface{})
	InstanceType() interface{}
	SetInstanceType(val interface{})
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
	MemorySize() interface{}
	SetMemorySize(val interface{})
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
	Runtime() interface{}
	SetRuntime(val interface{})
	ServiceName() interface{}
	SetServiceName(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Timeout() interface{}
	SetTimeout(val interface{})
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

// The jsii proxy struct for RosFunction
type jsiiProxy_RosFunction struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosFunction) AsyncConfiguration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"asyncConfiguration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) AttrArn() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) AttrFunctionId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFunctionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) AttrFunctionName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrFunctionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) AttrServiceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrServiceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) AttrServiceName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrServiceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) CaPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"caPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) Code() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"code",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) Cpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) CustomContainerConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"customContainerConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) CustomDns() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"customDns",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) CustomHealthCheckConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"customHealthCheckConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) CustomRuntimeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"customRuntimeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) DiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"diskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) EnvironmentVariables() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"environmentVariables",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) FunctionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"functionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) GpuMemorySize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"gpuMemorySize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) Handler() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"handler",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) InitializationTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"initializationTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) Initializer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"initializer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) InstanceConcurrency() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceConcurrency",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) InstanceLifecycleConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceLifecycleConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) InstanceSoftConcurrency() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceSoftConcurrency",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) InstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) MemorySize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"memorySize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) Runtime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"runtime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) ServiceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serviceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) Timeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosFunction) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosFunction(scope alicloudroscdkcore.Construct, id *string, props *RosFunctionProps, enableResourcePropertyConstraint *bool) RosFunction {
	_init_.Initialize()

	if err := validateNewRosFunctionParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosFunction{}

	_jsii_.Create(
		"@alicloud/ros-cdk-fc.RosFunction",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosFunction_Override(r RosFunction, scope alicloudroscdkcore.Construct, id *string, props *RosFunctionProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-fc.RosFunction",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosFunction)SetAsyncConfiguration(val interface{}) {
	if err := j.validateSetAsyncConfigurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"asyncConfiguration",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetCaPort(val interface{}) {
	if err := j.validateSetCaPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"caPort",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetCode(val interface{}) {
	if err := j.validateSetCodeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"code",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetCpu(val interface{}) {
	if err := j.validateSetCpuParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpu",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetCustomContainerConfig(val interface{}) {
	if err := j.validateSetCustomContainerConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"customContainerConfig",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetCustomDns(val interface{}) {
	if err := j.validateSetCustomDnsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"customDns",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetCustomHealthCheckConfig(val interface{}) {
	if err := j.validateSetCustomHealthCheckConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"customHealthCheckConfig",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetCustomRuntimeConfig(val interface{}) {
	if err := j.validateSetCustomRuntimeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"customRuntimeConfig",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetDiskSize(val interface{}) {
	if err := j.validateSetDiskSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"diskSize",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetEnvironmentVariables(val interface{}) {
	if err := j.validateSetEnvironmentVariablesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"environmentVariables",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetFunctionName(val interface{}) {
	if err := j.validateSetFunctionNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"functionName",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetGpuMemorySize(val interface{}) {
	if err := j.validateSetGpuMemorySizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"gpuMemorySize",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetHandler(val interface{}) {
	if err := j.validateSetHandlerParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"handler",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetInitializationTimeout(val interface{}) {
	if err := j.validateSetInitializationTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"initializationTimeout",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetInitializer(val interface{}) {
	if err := j.validateSetInitializerParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"initializer",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetInstanceConcurrency(val interface{}) {
	if err := j.validateSetInstanceConcurrencyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceConcurrency",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetInstanceLifecycleConfig(val interface{}) {
	if err := j.validateSetInstanceLifecycleConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceLifecycleConfig",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetInstanceSoftConcurrency(val interface{}) {
	if err := j.validateSetInstanceSoftConcurrencyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceSoftConcurrency",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetInstanceType(val interface{}) {
	if err := j.validateSetInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceType",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetMemorySize(val interface{}) {
	if err := j.validateSetMemorySizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"memorySize",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetRuntime(val interface{}) {
	if err := j.validateSetRuntimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"runtime",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetServiceName(val interface{}) {
	if err := j.validateSetServiceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serviceName",
		val,
	)
}

func (j *jsiiProxy_RosFunction)SetTimeout(val interface{}) {
	if err := j.validateSetTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeout",
		val,
	)
}

// Return whether the given object is a Construct.
func RosFunction_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosFunction_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-fc.RosFunction",
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
func RosFunction_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosFunction_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-fc.RosFunction",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosFunction_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosFunction_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-fc.RosFunction",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosFunction_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-fc.RosFunction",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosFunction) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosFunction) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosFunction) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosFunction) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosFunction) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosFunction) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosFunction) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosFunction) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosFunction) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosFunction) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosFunction) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosFunction) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosFunction) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosFunction) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosFunction) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosFunction) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosFunction) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosFunction) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosFunction) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosFunction) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosFunction) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosFunction) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

