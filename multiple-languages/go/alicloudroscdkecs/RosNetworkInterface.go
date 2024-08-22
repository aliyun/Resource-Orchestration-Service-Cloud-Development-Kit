package alicloudroscdkecs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::NetworkInterface`, which is used to create an elastic network interface (ENI).
type RosNetworkInterface interface {
	alicloudroscdkcore.RosResource
	AttrMacAddress() alicloudroscdkcore.IResolvable
	AttrNetworkInterfaceId() alicloudroscdkcore.IResolvable
	AttrPrivateIpAddress() alicloudroscdkcore.IResolvable
	AttrSecondaryPrivateIpAddresses() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeleteOnRelease() interface{}
	SetDeleteOnRelease(val interface{})
	Description() interface{}
	SetDescription(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Ipv4PrefixCount() interface{}
	SetIpv4PrefixCount(val interface{})
	Ipv4Prefixes() interface{}
	SetIpv4Prefixes(val interface{})
	Ipv6AddressCount() interface{}
	SetIpv6AddressCount(val interface{})
	Ipv6Addresses() interface{}
	SetIpv6Addresses(val interface{})
	Ipv6PrefixCount() interface{}
	SetIpv6PrefixCount(val interface{})
	Ipv6Prefixes() interface{}
	SetIpv6Prefixes(val interface{})
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
	NetworkInterfaceName() interface{}
	SetNetworkInterfaceName(val interface{})
	NetworkInterfaceTrafficMode() interface{}
	SetNetworkInterfaceTrafficMode(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	PrimaryIpAddress() interface{}
	SetPrimaryIpAddress(val interface{})
	PrivateIpAddresses() interface{}
	SetPrivateIpAddresses(val interface{})
	QueueNumber() interface{}
	SetQueueNumber(val interface{})
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
	RxQueueSize() interface{}
	SetRxQueueSize(val interface{})
	SecondaryPrivateIpAddressCount() interface{}
	SetSecondaryPrivateIpAddressCount(val interface{})
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	SecurityGroupIds() interface{}
	SetSecurityGroupIds(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosNetworkInterface_TagsProperty
	SetTags(val *[]*RosNetworkInterface_TagsProperty)
	TxQueueSize() interface{}
	SetTxQueueSize(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VSwitchId() interface{}
	SetVSwitchId(val interface{})
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

// The jsii proxy struct for RosNetworkInterface
type jsiiProxy_RosNetworkInterface struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosNetworkInterface) AttrMacAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMacAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) AttrNetworkInterfaceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) AttrPrivateIpAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) AttrSecondaryPrivateIpAddresses() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecondaryPrivateIpAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) DeleteOnRelease() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deleteOnRelease",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) Ipv4PrefixCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv4PrefixCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) Ipv4Prefixes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv4Prefixes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) Ipv6AddressCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6AddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) Ipv6Addresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6Addresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) Ipv6PrefixCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6PrefixCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) Ipv6Prefixes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6Prefixes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) NetworkInterfaceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkInterfaceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) NetworkInterfaceTrafficMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkInterfaceTrafficMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) PrimaryIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"primaryIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) PrivateIpAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"privateIpAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) QueueNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"queueNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) RxQueueSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rxQueueSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) SecondaryPrivateIpAddressCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"secondaryPrivateIpAddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) SecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) Tags() *[]*RosNetworkInterface_TagsProperty {
	var returns *[]*RosNetworkInterface_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) TxQueueSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"txQueueSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosNetworkInterface) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}


func NewRosNetworkInterface(scope alicloudroscdkcore.Construct, id *string, props *RosNetworkInterfaceProps, enableResourcePropertyConstraint *bool) RosNetworkInterface {
	_init_.Initialize()

	if err := validateNewRosNetworkInterfaceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosNetworkInterface{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosNetworkInterface",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosNetworkInterface_Override(r RosNetworkInterface, scope alicloudroscdkcore.Construct, id *string, props *RosNetworkInterfaceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosNetworkInterface",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetDeleteOnRelease(val interface{}) {
	if err := j.validateSetDeleteOnReleaseParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deleteOnRelease",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetIpv4PrefixCount(val interface{}) {
	if err := j.validateSetIpv4PrefixCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv4PrefixCount",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetIpv4Prefixes(val interface{}) {
	if err := j.validateSetIpv4PrefixesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv4Prefixes",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetIpv6AddressCount(val interface{}) {
	if err := j.validateSetIpv6AddressCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6AddressCount",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetIpv6Addresses(val interface{}) {
	if err := j.validateSetIpv6AddressesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6Addresses",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetIpv6PrefixCount(val interface{}) {
	if err := j.validateSetIpv6PrefixCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6PrefixCount",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetIpv6Prefixes(val interface{}) {
	if err := j.validateSetIpv6PrefixesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6Prefixes",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetNetworkInterfaceName(val interface{}) {
	if err := j.validateSetNetworkInterfaceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkInterfaceName",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetNetworkInterfaceTrafficMode(val interface{}) {
	if err := j.validateSetNetworkInterfaceTrafficModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkInterfaceTrafficMode",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetPrimaryIpAddress(val interface{}) {
	if err := j.validateSetPrimaryIpAddressParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"primaryIpAddress",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetPrivateIpAddresses(val interface{}) {
	if err := j.validateSetPrivateIpAddressesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"privateIpAddresses",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetQueueNumber(val interface{}) {
	if err := j.validateSetQueueNumberParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"queueNumber",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetRxQueueSize(val interface{}) {
	if err := j.validateSetRxQueueSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rxQueueSize",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetSecondaryPrivateIpAddressCount(val interface{}) {
	if err := j.validateSetSecondaryPrivateIpAddressCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"secondaryPrivateIpAddressCount",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetSecurityGroupIds(val interface{}) {
	if err := j.validateSetSecurityGroupIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupIds",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetTags(val *[]*RosNetworkInterface_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetTxQueueSize(val interface{}) {
	if err := j.validateSetTxQueueSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"txQueueSize",
		val,
	)
}

func (j *jsiiProxy_RosNetworkInterface)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosNetworkInterface_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosNetworkInterface_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosNetworkInterface",
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
func RosNetworkInterface_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosNetworkInterface_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosNetworkInterface",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosNetworkInterface_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosNetworkInterface_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosNetworkInterface",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosNetworkInterface_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ecs.RosNetworkInterface",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosNetworkInterface) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosNetworkInterface) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosNetworkInterface) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosNetworkInterface) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosNetworkInterface) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosNetworkInterface) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosNetworkInterface) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosNetworkInterface) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosNetworkInterface) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosNetworkInterface) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosNetworkInterface) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosNetworkInterface) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosNetworkInterface) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosNetworkInterface) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosNetworkInterface) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosNetworkInterface) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosNetworkInterface) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosNetworkInterface) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosNetworkInterface) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosNetworkInterface) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosNetworkInterface) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosNetworkInterface) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

