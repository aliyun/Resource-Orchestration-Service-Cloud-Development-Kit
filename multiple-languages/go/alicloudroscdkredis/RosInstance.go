package alicloudroscdkredis

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkredis/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkredis/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::REDIS::Instance`, which is used to create an ApsaraDB for Redis instance.
type RosInstance interface {
	alicloudroscdkcore.RosResource
	AttrArchitectureType() alicloudroscdkcore.IResolvable
	AttrBandwidth() alicloudroscdkcore.IResolvable
	AttrCapacity() alicloudroscdkcore.IResolvable
	AttrChargeType() alicloudroscdkcore.IResolvable
	AttrClassicInnerConnectionPort() alicloudroscdkcore.IResolvable
	AttrClassicInnerConnectionString() alicloudroscdkcore.IResolvable
	AttrConnectionDomain() alicloudroscdkcore.IResolvable
	AttrConnections() alicloudroscdkcore.IResolvable
	AttrDirectConnectionPort() alicloudroscdkcore.IResolvable
	AttrDirectConnectionString() alicloudroscdkcore.IResolvable
	AttrEngineVersion() alicloudroscdkcore.IResolvable
	AttrHasRenewChangeOrder() alicloudroscdkcore.IResolvable
	AttrInstanceClass() alicloudroscdkcore.IResolvable
	AttrInstanceId() alicloudroscdkcore.IResolvable
	AttrInstanceName() alicloudroscdkcore.IResolvable
	AttrInstanceType() alicloudroscdkcore.IResolvable
	AttrNetworkType() alicloudroscdkcore.IResolvable
	AttrNodeType() alicloudroscdkcore.IResolvable
	AttrOrderId() alicloudroscdkcore.IResolvable
	AttrPackageType() alicloudroscdkcore.IResolvable
	AttrPort() alicloudroscdkcore.IResolvable
	AttrPrivateIp() alicloudroscdkcore.IResolvable
	AttrPublicConnectionPort() alicloudroscdkcore.IResolvable
	AttrPublicConnectionString() alicloudroscdkcore.IResolvable
	AttrQps() alicloudroscdkcore.IResolvable
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	AttrVpcId() alicloudroscdkcore.IResolvable
	AttrVpcPrivateConnectionPort() alicloudroscdkcore.IResolvable
	AttrVpcPrivateConnectionString() alicloudroscdkcore.IResolvable
	AttrVSwitchId() alicloudroscdkcore.IResolvable
	AttrZoneId() alicloudroscdkcore.IResolvable
	AutoRenewDuration() interface{}
	SetAutoRenewDuration(val interface{})
	BackupPolicy() interface{}
	SetBackupPolicy(val interface{})
	ChargeType() interface{}
	SetChargeType(val interface{})
	Connections() interface{}
	SetConnections(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeletionForce() interface{}
	SetDeletionForce(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EngineVersion() interface{}
	SetEngineVersion(val interface{})
	EvictionPolicy() interface{}
	SetEvictionPolicy(val interface{})
	InstanceClass() interface{}
	SetInstanceClass(val interface{})
	InstanceMaintainTime() interface{}
	SetInstanceMaintainTime(val interface{})
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
	NodeType() interface{}
	SetNodeType(val interface{})
	Password() interface{}
	SetPassword(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PeriodUnit() interface{}
	SetPeriodUnit(val interface{})
	ProductType() interface{}
	SetProductType(val interface{})
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
	SecondaryZoneId() interface{}
	SetSecondaryZoneId(val interface{})
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	ShardCount() interface{}
	SetShardCount(val interface{})
	SslEnabled() interface{}
	SetSslEnabled(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosInstance_TagsProperty
	SetTags(val *[]*RosInstance_TagsProperty)
	TairConfig() interface{}
	SetTairConfig(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VpcId() interface{}
	SetVpcId(val interface{})
	VpcPasswordFree() interface{}
	SetVpcPasswordFree(val interface{})
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

// The jsii proxy struct for RosInstance
type jsiiProxy_RosInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosInstance) AttrArchitectureType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrArchitectureType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrBandwidth() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrCapacity() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrClassicInnerConnectionPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClassicInnerConnectionPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrClassicInnerConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClassicInnerConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrConnectionDomain() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConnectionDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrConnections() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConnections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrDirectConnectionPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDirectConnectionPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrDirectConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDirectConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrEngineVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrHasRenewChangeOrder() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHasRenewChangeOrder",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInstanceClass() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInstanceName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInstanceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrNetworkType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrNodeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNodeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrOrderId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrPackageType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPackageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrPrivateIp() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrPublicConnectionPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicConnectionPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrPublicConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrQps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrQps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrVpcPrivateConnectionPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcPrivateConnectionPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrVpcPrivateConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcPrivateConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AutoRenewDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenewDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) BackupPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backupPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"chargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Connections() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) DeletionForce() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deletionForce",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) EngineVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"engineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) EvictionPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"evictionPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) InstanceClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) InstanceMaintainTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceMaintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) InstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) NodeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nodeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Password() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"password",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ProductType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"productType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SecondaryZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"secondaryZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ShardCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"shardCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SslEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sslEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Tags() *[]*RosInstance_TagsProperty {
	var returns *[]*RosInstance_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) TairConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tairConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) VpcPasswordFree() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcPasswordFree",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosInstance(scope alicloudroscdkcore.Construct, id *string, props *RosInstanceProps, enableResourcePropertyConstraint *bool) RosInstance {
	_init_.Initialize()

	if err := validateNewRosInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-redis.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosInstance_Override(r RosInstance, scope alicloudroscdkcore.Construct, id *string, props *RosInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-redis.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosInstance)SetAutoRenewDuration(val interface{}) {
	if err := j.validateSetAutoRenewDurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenewDuration",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetBackupPolicy(val interface{}) {
	if err := j.validateSetBackupPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backupPolicy",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetChargeType(val interface{}) {
	if err := j.validateSetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"chargeType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetConnections(val interface{}) {
	if err := j.validateSetConnectionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connections",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetDeletionForce(val interface{}) {
	if err := j.validateSetDeletionForceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deletionForce",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetEngineVersion(val interface{}) {
	if err := j.validateSetEngineVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"engineVersion",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetEvictionPolicy(val interface{}) {
	if err := j.validateSetEvictionPolicyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"evictionPolicy",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetInstanceClass(val interface{}) {
	if err := j.validateSetInstanceClassParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceClass",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetInstanceMaintainTime(val interface{}) {
	if err := j.validateSetInstanceMaintainTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceMaintainTime",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetInstanceName(val interface{}) {
	if err := j.validateSetInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceName",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetNodeType(val interface{}) {
	if err := j.validateSetNodeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nodeType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPassword(val interface{}) {
	if err := j.validateSetPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"password",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetProductType(val interface{}) {
	if err := j.validateSetProductTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"productType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSecondaryZoneId(val interface{}) {
	if err := j.validateSetSecondaryZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"secondaryZoneId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetShardCount(val interface{}) {
	if err := j.validateSetShardCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"shardCount",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSslEnabled(val interface{}) {
	if err := j.validateSetSslEnabledParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sslEnabled",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetTags(val *[]*RosInstance_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetTairConfig(val interface{}) {
	if err := j.validateSetTairConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tairConfig",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetVpcPasswordFree(val interface{}) {
	if err := j.validateSetVpcPasswordFreeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcPasswordFree",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetZoneId(val interface{}) {
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
func RosInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-redis.RosInstance",
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
func RosInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-redis.RosInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-redis.RosInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-redis.RosInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

