package alicloudroscdkdms

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkdms/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdms/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::DMS::Instance2`.
type RosInstance2 interface {
	alicloudroscdkcore.RosResource
	AttrHost() alicloudroscdkcore.IResolvable
	AttrInstanceId() alicloudroscdkcore.IResolvable
	AttrPort() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DatabasePassword() interface{}
	SetDatabasePassword(val interface{})
	DatabaseUser() interface{}
	SetDatabaseUser(val interface{})
	DataLinkName() interface{}
	SetDataLinkName(val interface{})
	DbaId() interface{}
	SetDbaId(val interface{})
	DdlOnline() interface{}
	SetDdlOnline(val interface{})
	EcsInstanceId() interface{}
	SetEcsInstanceId(val interface{})
	EcsRegion() interface{}
	SetEcsRegion(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EnableSellCommon() interface{}
	SetEnableSellCommon(val interface{})
	EnableSellSitd() interface{}
	SetEnableSellSitd(val interface{})
	EnableSellStable() interface{}
	SetEnableSellStable(val interface{})
	EnableSellTrust() interface{}
	SetEnableSellTrust(val interface{})
	EnvType() interface{}
	SetEnvType(val interface{})
	ExportTimeout() interface{}
	SetExportTimeout(val interface{})
	Host() interface{}
	SetHost(val interface{})
	InstanceAlias() interface{}
	SetInstanceAlias(val interface{})
	InstanceSource() interface{}
	SetInstanceSource(val interface{})
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
	NetworkType() interface{}
	SetNetworkType(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Port() interface{}
	SetPort(val interface{})
	QueryTimeout() interface{}
	SetQueryTimeout(val interface{})
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
	SafeRule() interface{}
	SetSafeRule(val interface{})
	Sid() interface{}
	SetSid(val interface{})
	SkipTest() interface{}
	SetSkipTest(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	TemplateId() interface{}
	SetTemplateId(val interface{})
	TemplateType() interface{}
	SetTemplateType(val interface{})
	Tid() interface{}
	SetTid(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	UseDsql() interface{}
	SetUseDsql(val interface{})
	UseSsl() interface{}
	SetUseSsl(val interface{})
	VpcId() interface{}
	SetVpcId(val interface{})
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

// The jsii proxy struct for RosInstance2
type jsiiProxy_RosInstance2 struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosInstance2) AttrHost() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) AttrPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) DatabasePassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"databasePassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) DatabaseUser() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"databaseUser",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) DataLinkName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dataLinkName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) DbaId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbaId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) DdlOnline() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ddlOnline",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) EcsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) EcsRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) EnableSellCommon() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableSellCommon",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) EnableSellSitd() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableSellSitd",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) EnableSellStable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableSellStable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) EnableSellTrust() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableSellTrust",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) EnvType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"envType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) ExportTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"exportTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) Host() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"host",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) InstanceAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) InstanceSource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceSource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) InstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) NetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) Port() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"port",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) QueryTimeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"queryTimeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) SafeRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"safeRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) Sid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) SkipTest() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"skipTest",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) TemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"templateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) TemplateType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"templateType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) Tid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) UseDsql() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"useDsql",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) UseSsl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"useSsl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance2) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}


func NewRosInstance2(scope alicloudroscdkcore.Construct, id *string, props *RosInstance2Props, enableResourcePropertyConstraint *bool) RosInstance2 {
	_init_.Initialize()

	if err := validateNewRosInstance2Parameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosInstance2{}

	_jsii_.Create(
		"@alicloud/ros-cdk-dms.RosInstance2",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosInstance2_Override(r RosInstance2, scope alicloudroscdkcore.Construct, id *string, props *RosInstance2Props, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-dms.RosInstance2",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosInstance2)SetDatabasePassword(val interface{}) {
	if err := j.validateSetDatabasePasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"databasePassword",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetDatabaseUser(val interface{}) {
	if err := j.validateSetDatabaseUserParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"databaseUser",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetDataLinkName(val interface{}) {
	if err := j.validateSetDataLinkNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dataLinkName",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetDbaId(val interface{}) {
	if err := j.validateSetDbaIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbaId",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetDdlOnline(val interface{}) {
	if err := j.validateSetDdlOnlineParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ddlOnline",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetEcsInstanceId(val interface{}) {
	if err := j.validateSetEcsInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsInstanceId",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetEcsRegion(val interface{}) {
	if err := j.validateSetEcsRegionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsRegion",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetEnableSellCommon(val interface{}) {
	if err := j.validateSetEnableSellCommonParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableSellCommon",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetEnableSellSitd(val interface{}) {
	if err := j.validateSetEnableSellSitdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableSellSitd",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetEnableSellStable(val interface{}) {
	if err := j.validateSetEnableSellStableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableSellStable",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetEnableSellTrust(val interface{}) {
	if err := j.validateSetEnableSellTrustParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableSellTrust",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetEnvType(val interface{}) {
	if err := j.validateSetEnvTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"envType",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetExportTimeout(val interface{}) {
	if err := j.validateSetExportTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"exportTimeout",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetHost(val interface{}) {
	if err := j.validateSetHostParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"host",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetInstanceAlias(val interface{}) {
	if err := j.validateSetInstanceAliasParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceAlias",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetInstanceSource(val interface{}) {
	if err := j.validateSetInstanceSourceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceSource",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetInstanceType(val interface{}) {
	if err := j.validateSetInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceType",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetNetworkType(val interface{}) {
	if err := j.validateSetNetworkTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkType",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetPort(val interface{}) {
	if err := j.validateSetPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"port",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetQueryTimeout(val interface{}) {
	if err := j.validateSetQueryTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"queryTimeout",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetSafeRule(val interface{}) {
	if err := j.validateSetSafeRuleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"safeRule",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetSid(val interface{}) {
	if err := j.validateSetSidParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sid",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetSkipTest(val interface{}) {
	if err := j.validateSetSkipTestParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"skipTest",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetTemplateId(val interface{}) {
	if err := j.validateSetTemplateIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"templateId",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetTemplateType(val interface{}) {
	if err := j.validateSetTemplateTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"templateType",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetTid(val interface{}) {
	if err := j.validateSetTidParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tid",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetUseDsql(val interface{}) {
	if err := j.validateSetUseDsqlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"useDsql",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetUseSsl(val interface{}) {
	if err := j.validateSetUseSslParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"useSsl",
		val,
	)
}

func (j *jsiiProxy_RosInstance2)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosInstance2_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance2_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dms.RosInstance2",
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
func RosInstance2_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance2_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dms.RosInstance2",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosInstance2_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosInstance2_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-dms.RosInstance2",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosInstance2_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-dms.RosInstance2",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosInstance2) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosInstance2) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosInstance2) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosInstance2) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance2) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosInstance2) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosInstance2) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosInstance2) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosInstance2) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosInstance2) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance2) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosInstance2) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosInstance2) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance2) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance2) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance2) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosInstance2) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance2) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosInstance2) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance2) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance2) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance2) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

