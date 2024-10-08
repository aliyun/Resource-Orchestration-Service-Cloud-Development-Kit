package alicloudroscdkebs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `ALIYUN::EBS::DiskReplicaGroup`, which is used to create a replication pair-consistent group.
type DiskReplicaGroup interface {
	alicloudroscdkcore.Resource
	// Attribute Description: The description of the consistent replication group.
	AttrDescription() alicloudroscdkcore.IResolvable
	// Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
	AttrDestinationRegionId() alicloudroscdkcore.IResolvable
	// Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
	AttrDestinationZoneId() alicloudroscdkcore.IResolvable
	// Attribute DiskReplicaGroupName: Consistent replication group name.
	AttrDiskReplicaGroupName() alicloudroscdkcore.IResolvable
	// Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.
	//
	// This parameter provides the return value as a timestamp. Unit: seconds.
	AttrLastRecoverPoint() alicloudroscdkcore.IResolvable
	// Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
	AttrPairIds() alicloudroscdkcore.IResolvable
	// Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
	AttrPairNumber() alicloudroscdkcore.IResolvable
	// Attribute PrimaryRegion: The initial source region of the replication group.
	AttrPrimaryRegion() alicloudroscdkcore.IResolvable
	// Attribute PrimaryZone: The initial source available area of the replication group.
	AttrPrimaryZone() alicloudroscdkcore.IResolvable
	// Attribute ReplicaGroupId: The ID of the consistent replication group.
	AttrReplicaGroupId() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: resource group ID of enterprise.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute RPO: The RPO value set by the consistency group in seconds.
	AttrRpo() alicloudroscdkcore.IResolvable
	// Attribute Site: Site information sources for replication pairs and consistent replication groups.
	//
	// Possible values:.
	AttrSite() alicloudroscdkcore.IResolvable
	// Attribute SourceRegionId: The ID of the region to which the production site belongs.
	AttrSourceRegionId() alicloudroscdkcore.IResolvable
	// Attribute SourceZoneId: The ID of the zone to which the production site belongs.
	AttrSourceZoneId() alicloudroscdkcore.IResolvable
	// Attribute StandbyRegion: The initial destination region of the replication group.
	AttrStandbyRegion() alicloudroscdkcore.IResolvable
	// Attribute StandbyZone: The initial destination zone of the replication group.
	AttrStandbyZone() alicloudroscdkcore.IResolvable
	// Attribute Tags: The tags of the disk replica group.
	AttrTags() alicloudroscdkcore.IResolvable
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
	Props() *DiskReplicaGroupProps
	SetProps(val *DiskReplicaGroupProps)
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

// The jsii proxy struct for DiskReplicaGroup
type jsiiProxy_DiskReplicaGroup struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_DiskReplicaGroup) AttrDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrDestinationRegionId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDestinationRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrDestinationZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDestinationZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrDiskReplicaGroupName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDiskReplicaGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrLastRecoverPoint() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLastRecoverPoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrPairIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPairIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrPairNumber() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPairNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrPrimaryRegion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrimaryRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrPrimaryZone() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrimaryZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrReplicaGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReplicaGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrRpo() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRpo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrSite() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSite",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrSourceRegionId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSourceRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrSourceZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSourceZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrStandbyRegion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStandbyRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrStandbyZone() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStandbyZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) Props() *DiskReplicaGroupProps {
	var returns *DiskReplicaGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DiskReplicaGroup) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewDiskReplicaGroup(scope alicloudroscdkcore.Construct, id *string, props *DiskReplicaGroupProps, enableResourcePropertyConstraint *bool) DiskReplicaGroup {
	_init_.Initialize()

	if err := validateNewDiskReplicaGroupParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_DiskReplicaGroup{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ebs.DiskReplicaGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewDiskReplicaGroup_Override(d DiskReplicaGroup, scope alicloudroscdkcore.Construct, id *string, props *DiskReplicaGroupProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ebs.DiskReplicaGroup",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		d,
	)
}

func (j *jsiiProxy_DiskReplicaGroup)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_DiskReplicaGroup)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_DiskReplicaGroup)SetProps(val *DiskReplicaGroupProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_DiskReplicaGroup)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_DiskReplicaGroup)SetScope(val alicloudroscdkcore.Construct) {
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
func DiskReplicaGroup_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateDiskReplicaGroup_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ebs.DiskReplicaGroup",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DiskReplicaGroup) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := d.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addCondition",
		[]interface{}{condition},
	)
}

func (d *jsiiProxy_DiskReplicaGroup) AddCount(count interface{}) {
	if err := d.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addCount",
		[]interface{}{count},
	)
}

func (d *jsiiProxy_DiskReplicaGroup) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := d.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addDependency",
		[]interface{}{resource},
	)
}

func (d *jsiiProxy_DiskReplicaGroup) AddResourceDesc(desc *string) {
	if err := d.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (d *jsiiProxy_DiskReplicaGroup) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := d.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (d *jsiiProxy_DiskReplicaGroup) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DiskReplicaGroup) GetAtt(name *string) alicloudroscdkcore.IResolvable {
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

func (d *jsiiProxy_DiskReplicaGroup) OnPrepare() {
	_jsii_.InvokeVoid(
		d,
		"onPrepare",
		nil, // no parameters
	)
}

func (d *jsiiProxy_DiskReplicaGroup) OnSynthesize(session constructs.ISynthesisSession) {
	if err := d.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_DiskReplicaGroup) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DiskReplicaGroup) Prepare() {
	_jsii_.InvokeVoid(
		d,
		"prepare",
		nil, // no parameters
	)
}

func (d *jsiiProxy_DiskReplicaGroup) SetMetadata(key *string, value interface{}) {
	if err := d.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (d *jsiiProxy_DiskReplicaGroup) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := d.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"synthesize",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_DiskReplicaGroup) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DiskReplicaGroup) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

