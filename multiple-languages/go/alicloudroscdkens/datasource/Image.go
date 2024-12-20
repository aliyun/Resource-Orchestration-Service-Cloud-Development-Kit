package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::ENS::Image`.
type Image interface {
	alicloudroscdkcore.Resource
	// Attribute Architecture: The image architecture.
	//
	// Valid values:
	// - **i386**
	// - **x86_64**.
	AttrArchitecture() alicloudroscdkcore.IResolvable
	// Attribute ComputeType: Computing type.
	//
	// ens_vm/ens: x86 computing. bare_metal: x86 bare machine or x86 bare metal. arm_vm: ARM computing. arm_bare_metal: ARM bare machine or ARM bare metal. pcfarm: heterogeneous computing.
	AttrComputeType() alicloudroscdkcore.IResolvable
	// Attribute CreateTime: The image creation time.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrCreateTime() alicloudroscdkcore.IResolvable
	// Attribute ImageId: The ID of the image.
	AttrImageId() alicloudroscdkcore.IResolvable
	// Attribute ImageName: The name of the image.
	AttrImageName() alicloudroscdkcore.IResolvable
	// Attribute ImageOwnerAlias: The source of the image.
	//
	// Valid values:
	// - **others**: a custom image that is shared by other Alibaba Cloud accounts.
	// - **self**: your own custom image.
	AttrImageOwnerAlias() alicloudroscdkcore.IResolvable
	// Attribute ImageSize: The size of the image.
	//
	// Unit: GiB.
	AttrImageSize() alicloudroscdkcore.IResolvable
	// Attribute InstanceId: The ID of the instance corresponding to the image.
	AttrInstanceId() alicloudroscdkcore.IResolvable
	// Attribute OsVersion: The operating system version.
	AttrOsVersion() alicloudroscdkcore.IResolvable
	// Attribute Platform: The type of operating system used by the image.
	//
	// Valid values:
	// - **centos**
	// - **ubuntu**
	// - **alios**
	// - **debian**
	// - **rhel**
	// - **windows**.
	AttrPlatform() alicloudroscdkcore.IResolvable
	// Attribute SnapshotId: The ID of the snapshot corresponding to the image.
	AttrSnapshotId() alicloudroscdkcore.IResolvable
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
	Props() *ImageProps
	SetProps(val *ImageProps)
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

// The jsii proxy struct for Image
type jsiiProxy_Image struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_Image) AttrArchitecture() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrArchitecture",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) AttrComputeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrComputeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) AttrImageId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) AttrImageName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) AttrImageOwnerAlias() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageOwnerAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) AttrImageSize() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) AttrOsVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOsVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) AttrPlatform() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPlatform",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) AttrSnapshotId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSnapshotId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) Props() *ImageProps {
	var returns *ImageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Image) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewImage(scope alicloudroscdkcore.Construct, id *string, props *ImageProps, enableResourcePropertyConstraint *bool) Image {
	_init_.Initialize()

	if err := validateNewImageParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Image{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ens.datasource.Image",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewImage_Override(i Image, scope alicloudroscdkcore.Construct, id *string, props *ImageProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ens.datasource.Image",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		i,
	)
}

func (j *jsiiProxy_Image)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_Image)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_Image)SetProps(val *ImageProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_Image)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_Image)SetScope(val alicloudroscdkcore.Construct) {
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
func Image_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateImage_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ens.datasource.Image",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Image) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := i.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addCondition",
		[]interface{}{condition},
	)
}

func (i *jsiiProxy_Image) AddCount(count interface{}) {
	if err := i.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addCount",
		[]interface{}{count},
	)
}

func (i *jsiiProxy_Image) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := i.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addDependency",
		[]interface{}{resource},
	)
}

func (i *jsiiProxy_Image) AddResourceDesc(desc *string) {
	if err := i.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (i *jsiiProxy_Image) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := i.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (i *jsiiProxy_Image) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Image) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := i.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		i,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Image) OnPrepare() {
	_jsii_.InvokeVoid(
		i,
		"onPrepare",
		nil, // no parameters
	)
}

func (i *jsiiProxy_Image) OnSynthesize(session constructs.ISynthesisSession) {
	if err := i.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (i *jsiiProxy_Image) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Image) Prepare() {
	_jsii_.InvokeVoid(
		i,
		"prepare",
		nil, // no parameters
	)
}

func (i *jsiiProxy_Image) SetMetadata(key *string, value interface{}) {
	if err := i.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (i *jsiiProxy_Image) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := i.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"synthesize",
		[]interface{}{session},
	)
}

func (i *jsiiProxy_Image) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Image) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

