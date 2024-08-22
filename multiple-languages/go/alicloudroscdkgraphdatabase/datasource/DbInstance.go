package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkgraphdatabase/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgraphdatabase/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::GraphDatabase::DbInstance`.
type DbInstance interface {
	alicloudroscdkcore.Resource
	// Attribute ConnectionString: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
	AttrConnectionString() alicloudroscdkcore.IResolvable
	// Attribute CreateTime: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
	AttrCreateTime() alicloudroscdkcore.IResolvable
	// Attribute CurrentMinorVersion: The current kernel image version.
	AttrCurrentMinorVersion() alicloudroscdkcore.IResolvable
	// Attribute DbInstanceCategory: The category of the db instance.
	AttrDbInstanceCategory() alicloudroscdkcore.IResolvable
	// Attribute DbInstanceCpu: For example, instances can be grouped according to Cpu core count.
	AttrDbInstanceCpu() alicloudroscdkcore.IResolvable
	// Attribute DbInstanceDescription: According to the practical example or notes.
	AttrDbInstanceDescription() alicloudroscdkcore.IResolvable
	// Attribute DbInstanceId: The ID of the GDB Instance.
	AttrDbInstanceId() alicloudroscdkcore.IResolvable
	// Attribute DBInstanceIPArray: IP ADDRESS whitelist for the instance group list.
	AttrDbInstanceIpArray() alicloudroscdkcore.IResolvable
	// Attribute DbInstanceMemory: Instance memory, which is measured in MB.
	AttrDbInstanceMemory() alicloudroscdkcore.IResolvable
	// Attribute DbInstanceNetworkType: The network type of the db instance.
	AttrDbInstanceNetworkType() alicloudroscdkcore.IResolvable
	// Attribute DbInstanceStorageType: Cloud Disk.
	AttrDbInstanceStorageType() alicloudroscdkcore.IResolvable
	// Attribute DbInstanceType: The type of the db instance.
	AttrDbInstanceType() alicloudroscdkcore.IResolvable
	// Attribute DbNodeClass: The class of the db node.
	AttrDbNodeClass() alicloudroscdkcore.IResolvable
	// Attribute DbNodeCount: The count of the db node.
	AttrDbNodeCount() alicloudroscdkcore.IResolvable
	// Attribute DbNodeStorage: Instance storage space, which is measured in GB.
	AttrDbNodeStorage() alicloudroscdkcore.IResolvable
	// Attribute DbVersion: Kernel Version 1.0 is represented as gremlin,1.
	AttrDbVersion() alicloudroscdkcore.IResolvable
	// Attribute EcsSecurityGroupRelations: Security group information array.
	AttrEcsSecurityGroupRelations() alicloudroscdkcore.IResolvable
	// Attribute Expired: The expire status of the db instance.
	AttrExpired() alicloudroscdkcore.IResolvable
	// Attribute ExpireTime: The instance after it expires time for subscription instance.
	AttrExpireTime() alicloudroscdkcore.IResolvable
	// Attribute LatestMinorVersion: The latest kernel image version.
	AttrLatestMinorVersion() alicloudroscdkcore.IResolvable
	// Attribute LockMode: Instance lock state.
	AttrLockMode() alicloudroscdkcore.IResolvable
	// Attribute LockReason: An instance is locked the reason.
	AttrLockReason() alicloudroscdkcore.IResolvable
	// Attribute MaintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
	AttrMaintainTime() alicloudroscdkcore.IResolvable
	// Attribute PaymentType: The DB instance attribute field representing the paid type is desirable.
	AttrPaymentType() alicloudroscdkcore.IResolvable
	// Attribute Port: Application Port.
	AttrPort() alicloudroscdkcore.IResolvable
	// Attribute PublicConnectionString: The public connection string ID of the DB instance.
	AttrPublicConnectionString() alicloudroscdkcore.IResolvable
	// Attribute PublicPort: The public port ID of the DB instance.
	AttrPublicPort() alicloudroscdkcore.IResolvable
	// Attribute ReadOnlyDbInstanceIds: The array of the readonly db instances.
	AttrReadOnlyDbInstanceIds() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: Resource Group ID.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute Tags: The tags of the GDB Instance.
	AttrTags() alicloudroscdkcore.IResolvable
	// Attribute VpcId: The vpc id of the db instance.
	AttrVpcId() alicloudroscdkcore.IResolvable
	// Attribute VSwitchId: The vswitch id of the DB instance.
	AttrVSwitchId() alicloudroscdkcore.IResolvable
	// Attribute ZoneId: The zone ID of the instance.
	AttrZoneId() alicloudroscdkcore.IResolvable
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Id() *string
	SetId(val *string)
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	// Returns a string-encoded token that resolves to the physical name that should be passed to the ROS resource.
	//
	// This value will resolve to one of the following:
	// - a concrete value (e.g. `"my-awesome-bucket"`)
	// - `undefined`, when a name should be generated by ROS
	// - a concrete name generated automatically during synthesis, in
	//    cross-environment scenarios.
	// Experimental.
	PhysicalName() *string
	Props() *DbInstanceProps
	SetProps(val *DbInstanceProps)
	Ref() *string
	Resource() alicloudroscdkcore.RosResource
	SetResource(val alicloudroscdkcore.RosResource)
	Scope() alicloudroscdkcore.Construct
	SetScope(val alicloudroscdkcore.Construct)
	// The stack in which this resource is defined.
	Stack() alicloudroscdkcore.Stack
	AddCondition(condition alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	AddDependency(resource alicloudroscdkcore.Resource)
	AddResourceDesc(desc *string)
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy)
	GeneratePhysicalName() *string
	GetAtt(name *string) alicloudroscdkcore.IResolvable
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
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	SetMetadata(key *string, value interface{})
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
}

// The jsii proxy struct for DbInstance
type jsiiProxy_DbInstance struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_DbInstance) AttrConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrCurrentMinorVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCurrentMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbInstanceCategory() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbInstanceCpu() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbInstanceDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbInstanceIpArray() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceIpArray",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbInstanceMemory() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceMemory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbInstanceNetworkType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbInstanceStorageType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbInstanceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbNodeClass() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbNodeClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbNodeCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbNodeCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbNodeStorage() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbNodeStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrDbVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrEcsSecurityGroupRelations() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEcsSecurityGroupRelations",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrExpired() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExpired",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrExpireTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrLatestMinorVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLatestMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrLockMode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLockMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrLockReason() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLockReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrMaintainTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrPublicConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrPublicPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrReadOnlyDbInstanceIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReadOnlyDbInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) Props() *DbInstanceProps {
	var returns *DbInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DbInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewDbInstance(scope alicloudroscdkcore.Construct, id *string, props *DbInstanceProps, enableResourcePropertyConstraint *bool) DbInstance {
	_init_.Initialize()

	if err := validateNewDbInstanceParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_DbInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-graphdatabase.datasource.DbInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewDbInstance_Override(d DbInstance, scope alicloudroscdkcore.Construct, id *string, props *DbInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-graphdatabase.datasource.DbInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		d,
	)
}

func (j *jsiiProxy_DbInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_DbInstance)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_DbInstance)SetProps(val *DbInstanceProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_DbInstance)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_DbInstance)SetScope(val alicloudroscdkcore.Construct) {
	if err := j.validateSetScopeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scope",
		val,
	)
}

// Return whether the given object is a Construct.
func DbInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateDbInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-graphdatabase.datasource.DbInstance",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DbInstance) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := d.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addCondition",
		[]interface{}{condition},
	)
}

func (d *jsiiProxy_DbInstance) AddCount(count interface{}) {
	if err := d.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addCount",
		[]interface{}{count},
	)
}

func (d *jsiiProxy_DbInstance) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := d.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addDependency",
		[]interface{}{resource},
	)
}

func (d *jsiiProxy_DbInstance) AddResourceDesc(desc *string) {
	if err := d.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (d *jsiiProxy_DbInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := d.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (d *jsiiProxy_DbInstance) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DbInstance) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := d.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		d,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DbInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		d,
		"onPrepare",
		nil, // no parameters
	)
}

func (d *jsiiProxy_DbInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := d.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_DbInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DbInstance) Prepare() {
	_jsii_.InvokeVoid(
		d,
		"prepare",
		nil, // no parameters
	)
}

func (d *jsiiProxy_DbInstance) SetMetadata(key *string, value interface{}) {
	if err := d.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (d *jsiiProxy_DbInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := d.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"synthesize",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_DbInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DbInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

