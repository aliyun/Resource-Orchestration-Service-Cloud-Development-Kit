package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Disk`, which is used to query the information about a cloud disk.
type Disk interface {
	alicloudroscdkcore.Resource
	IDisk
	// Attribute AttachedTime: The attached time.
	AttrAttachedTime() interface{}
	// Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
	AttrAutoSnapshotPolicyId() interface{}
	// Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
	AttrBurstingEnabled() interface{}
	// Attribute Category: Disk type.
	AttrCategory() interface{}
	// Attribute CreateTime: The creation time.
	AttrCreateTime() interface{}
	// Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
	AttrDeleteAutoSnapshot() interface{}
	// Attribute DeleteWithInstance: Whether to release with the instance.
	AttrDeleteWithInstance() interface{}
	// Attribute Description: The description.
	AttrDescription() interface{}
	// Attribute DetachedTime: Unloading time.
	AttrDetachedTime() interface{}
	// Attribute Device: Cloud disk or the device name of the mounted instance on the site.
	AttrDevice() interface{}
	// Attribute DiskId: The disk id.
	AttrDiskId() interface{}
	// Attribute DiskName: The disk name.
	AttrDiskName() interface{}
	// Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
	AttrEnableAutomatedSnapshotPolicy() interface{}
	// Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
	AttrEnableAutoSnapshot() interface{}
	// Attribute Encrypted: Whether the disk is encrypted.
	AttrEncrypted() interface{}
	// Attribute ExpiredTime: The expiration time of a monthly disk.
	AttrExpiredTime() interface{}
	// Attribute ImageId: The image id.
	AttrImageId() interface{}
	// Attribute InstanceId: The instance id.
	AttrInstanceId() interface{}
	// Attribute Iops: Number of read/write (I/O) operations per second.
	AttrIops() interface{}
	// Attribute IopsRead: Number of reads per second.
	AttrIopsRead() interface{}
	// Attribute IopsWrite: Number of writes per second.
	AttrIopsWrite() interface{}
	// Attribute KmsKeyId: The KMS keyId.
	AttrKmsKeyId() interface{}
	// Attribute MountInstanceNum: Number of instances mounted on shared storage.
	AttrMountInstanceNum() interface{}
	// Attribute MountInstances: Disk mount instances.
	AttrMountInstances() interface{}
	// Attribute MultiAttach: Whether to enable the multi-Mount feature.
	AttrMultiAttach() interface{}
	// Attribute OperationLocks: Resource locking information.
	AttrOperationLocks() interface{}
	// Attribute PaymentType: Payment method for disk.
	AttrPaymentType() interface{}
	// Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
	AttrPerformanceLevel() interface{}
	// Attribute Portable: Whether the disk is unmountable.
	AttrPortable() interface{}
	// Attribute ProductCode: The product logo of the cloud market.
	AttrProductCode() interface{}
	// Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk.
	//
	// Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
	AttrProvisionedIops() interface{}
	// Attribute ResourceGroupId: The resource group id.
	AttrResourceGroupId() interface{}
	// Attribute Size: Disk size.
	AttrSize() interface{}
	// Attribute SnapshotId: The source snapshot id.
	AttrSnapshotId() interface{}
	// Attribute StorageClusterId: The ID of the dedicated block storage cluster.
	//
	// If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
	AttrStorageClusterId() interface{}
	// Attribute StorageSetId: The ID of the Save set.
	AttrStorageSetId() interface{}
	// Attribute StorageSetPartitionNumber: Number of Save set partitions.
	//
	// Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
	AttrStorageSetPartitionNumber() interface{}
	// Attribute Tags: The tags.
	AttrTags() interface{}
	// Attribute ZoneId: ID of the free zone to which the disk belongs.
	AttrZoneId() interface{}
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	// The environment this resource belongs to.
	//
	// For resources that are created and managed by the CDK
	// (generally, those created by creating new class instances like Role, Bucket, etc.),
	// this is always the same as the environment of the stack they belong to;
	// however, for imported resources
	// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
	// that might be different than the stack they were imported into.
	Env() alicloudroscdkcore.IResourceEnvironment
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
	Props() *DiskProps
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
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDependency() *[]*string
	FetchResourceDesc() *string
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

// The jsii proxy struct for Disk
type jsiiProxy_Disk struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_IDisk
}

func (j *jsiiProxy_Disk) AttrAttachedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttachedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrAutoSnapshotPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoSnapshotPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrBurstingEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBurstingEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrDeleteAutoSnapshot() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeleteAutoSnapshot",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrDeleteWithInstance() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeleteWithInstance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrDetachedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDetachedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrDevice() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDevice",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrDiskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrDiskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrEnableAutomatedSnapshotPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableAutomatedSnapshotPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrEnableAutoSnapshot() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableAutoSnapshot",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrEncrypted() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncrypted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrIops() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIops",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrIopsRead() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIopsRead",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrIopsWrite() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIopsWrite",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrKmsKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKmsKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrMountInstanceNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMountInstanceNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrMountInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMountInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrMultiAttach() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMultiAttach",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrOperationLocks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperationLocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrPerformanceLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPerformanceLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrPortable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPortable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrProductCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProductCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrProvisionedIops() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProvisionedIops",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrSnapshotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrStorageClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrStorageSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrStorageSetPartitionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageSetPartitionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) Props() *DiskProps {
	var returns *DiskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Disk) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewDisk(scope alicloudroscdkcore.Construct, id *string, props *DiskProps, enableResourcePropertyConstraint *bool) Disk {
	_init_.Initialize()

	if err := validateNewDiskParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Disk{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.datasource.Disk",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewDisk_Override(d Disk, scope alicloudroscdkcore.Construct, id *string, props *DiskProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.datasource.Disk",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		d,
	)
}

func (j *jsiiProxy_Disk)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_Disk)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_Disk)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_Disk)SetScope(val alicloudroscdkcore.Construct) {
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
func Disk_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateDisk_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.datasource.Disk",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_Disk) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := d.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addCondition",
		[]interface{}{condition},
	)
}

func (d *jsiiProxy_Disk) AddCount(count interface{}) {
	if err := d.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addCount",
		[]interface{}{count},
	)
}

func (d *jsiiProxy_Disk) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := d.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addDependency",
		[]interface{}{resource},
	)
}

func (d *jsiiProxy_Disk) AddResourceDesc(desc *string) {
	if err := d.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (d *jsiiProxy_Disk) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := d.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (d *jsiiProxy_Disk) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		d,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_Disk) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_Disk) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_Disk) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_Disk) GetAtt(name *string) alicloudroscdkcore.IResolvable {
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

func (d *jsiiProxy_Disk) OnPrepare() {
	_jsii_.InvokeVoid(
		d,
		"onPrepare",
		nil, // no parameters
	)
}

func (d *jsiiProxy_Disk) OnSynthesize(session constructs.ISynthesisSession) {
	if err := d.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_Disk) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_Disk) Prepare() {
	_jsii_.InvokeVoid(
		d,
		"prepare",
		nil, // no parameters
	)
}

func (d *jsiiProxy_Disk) SetMetadata(key *string, value interface{}) {
	if err := d.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (d *jsiiProxy_Disk) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := d.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"synthesize",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_Disk) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_Disk) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

