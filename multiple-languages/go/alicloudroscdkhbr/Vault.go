package alicloudroscdkhbr

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `ALIYUN::HBR::Vault`, which is used to create a backup vault.
type Vault interface {
	alicloudroscdkcore.Resource
	// Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
	AttrBackupPlanStatistics() alicloudroscdkcore.IResolvable
	// Attribute BytesDone: The amount of data that is backed up.
	//
	// Unit: bytes.
	AttrBytesDone() alicloudroscdkcore.IResolvable
	// Attribute CreateTime: The time when the backup vault was created.
	//
	// This value is a UNIX timestamp. Unit: seconds.
	AttrCreateTime() alicloudroscdkcore.IResolvable
	// Attribute Dedup: Indicates whether the deduplication feature is enabled.
	AttrDedup() alicloudroscdkcore.IResolvable
	// Attribute Description: The description of the backup vault.
	AttrDescription() alicloudroscdkcore.IResolvable
	// Attribute IndexAvailable: Indicates whether indexes are available.
	//
	// Indexes are available when they are not being updated.
	AttrIndexAvailable() alicloudroscdkcore.IResolvable
	// Attribute IndexLevel: The index level.
	//
	// - **OFF**: No indexes are created.
	// - **META**: Metadata indexes are created.
	// - **ALL**: Full-text indexes are created.
	AttrIndexLevel() alicloudroscdkcore.IResolvable
	// Attribute IndexUpdateTime: The time when the index was updated.
	AttrIndexUpdateTime() alicloudroscdkcore.IResolvable
	// Attribute LatestReplicationTime: The time when the last remote backup was synchronized.
	//
	// This value is a UNIX timestamp. Unit: seconds.
	AttrLatestReplicationTime() alicloudroscdkcore.IResolvable
	// Attribute PaymentType: PaymentType.
	AttrPaymentType() alicloudroscdkcore.IResolvable
	// Attribute RedundancyType: The data redundancy type of the backup vault.
	//
	// Valid values:
	// - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
	// - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
	AttrRedundancyType() alicloudroscdkcore.IResolvable
	// Attribute Replication: Indicates whether the backup vault is a remote backup vault.
	//
	// Valid values:
	// - **true**: The backup vault is a remote backup vault.
	// - **false**: The backup vault is an on-premises backup vault.
	AttrReplication() alicloudroscdkcore.IResolvable
	// Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
	AttrReplicationProgress() alicloudroscdkcore.IResolvable
	// Attribute ReplicationSourceRegionId: The ID of the region where the remote backup vault resides.
	AttrReplicationSourceRegionId() alicloudroscdkcore.IResolvable
	// Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
	AttrReplicationSourceVaultId() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute Retention: The retention period of the backup vault.
	//
	// Unit: days.
	AttrRetention() alicloudroscdkcore.IResolvable
	// Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
	AttrSearchEnabled() alicloudroscdkcore.IResolvable
	// Attribute SourceTypes: The information about the data source.
	AttrSourceTypes() alicloudroscdkcore.IResolvable
	// Attribute StorageSize: The usage of the backup vault.
	//
	// Unit: bytes.
	AttrStorageSize() alicloudroscdkcore.IResolvable
	// Attribute Tags: The tags of the backup vault.
	AttrTags() alicloudroscdkcore.IResolvable
	// Attribute TrialInfo: The free trial information.
	AttrTrialInfo() alicloudroscdkcore.IResolvable
	// Attribute UpdatedTime: The time when the backup vault was updated.
	//
	// This value is a UNIX timestamp. Unit: seconds.
	AttrUpdatedTime() alicloudroscdkcore.IResolvable
	// Attribute VaultId: The ID of the backup vault.
	AttrVaultId() alicloudroscdkcore.IResolvable
	// Attribute VaultName: The name of the backup vault.
	AttrVaultName() alicloudroscdkcore.IResolvable
	// Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.
	//
	// This parameter is available only for remote backup vaults. Valid values:
	// - **UNKNOWN_ERROR*: An unknown error occurs.
	// - **SOURCE_VAULT_ALREADY_HAS_REPLICATION**: A mirror vault is configured for the source vault.
	AttrVaultStatusMessage() alicloudroscdkcore.IResolvable
	// Attribute VaultStorageClass: The storage type of the backup vault.
	//
	// Valid value: **STANDARD**, which indicates standard storage.
	AttrVaultStorageClass() alicloudroscdkcore.IResolvable
	// Attribute VaultType: The type of the backup vault.
	//
	// Valid value: **STANDARD**, which indicates a standard backup vault.
	AttrVaultType() alicloudroscdkcore.IResolvable
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
	Props() *VaultProps
	SetProps(val *VaultProps)
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

// The jsii proxy struct for Vault
type jsiiProxy_Vault struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_Vault) AttrBackupPlanStatistics() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBackupPlanStatistics",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrBytesDone() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBytesDone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrDedup() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDedup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrIndexAvailable() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIndexAvailable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrIndexLevel() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIndexLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrIndexUpdateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIndexUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrLatestReplicationTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLatestReplicationTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrRedundancyType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRedundancyType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrReplication() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReplication",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrReplicationProgress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReplicationProgress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrReplicationSourceRegionId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReplicationSourceRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrReplicationSourceVaultId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReplicationSourceVaultId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrRetention() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRetention",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrSearchEnabled() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSearchEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrSourceTypes() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSourceTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrStorageSize() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStorageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrTrialInfo() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTrialInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrUpdatedTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUpdatedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrVaultId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVaultId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrVaultName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVaultName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrVaultStatusMessage() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVaultStatusMessage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrVaultStorageClass() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVaultStorageClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) AttrVaultType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVaultType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) Props() *VaultProps {
	var returns *VaultProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Vault) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewVault(scope alicloudroscdkcore.Construct, id *string, props *VaultProps, enableResourcePropertyConstraint *bool) Vault {
	_init_.Initialize()

	if err := validateNewVaultParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Vault{}

	_jsii_.Create(
		"@alicloud/ros-cdk-hbr.Vault",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewVault_Override(v Vault, scope alicloudroscdkcore.Construct, id *string, props *VaultProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-hbr.Vault",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		v,
	)
}

func (j *jsiiProxy_Vault)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_Vault)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_Vault)SetProps(val *VaultProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_Vault)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_Vault)SetScope(val alicloudroscdkcore.Construct) {
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
func Vault_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateVault_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-hbr.Vault",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (v *jsiiProxy_Vault) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := v.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"addCondition",
		[]interface{}{condition},
	)
}

func (v *jsiiProxy_Vault) AddCount(count interface{}) {
	if err := v.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"addCount",
		[]interface{}{count},
	)
}

func (v *jsiiProxy_Vault) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := v.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"addDependency",
		[]interface{}{resource},
	)
}

func (v *jsiiProxy_Vault) AddResourceDesc(desc *string) {
	if err := v.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (v *jsiiProxy_Vault) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := v.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (v *jsiiProxy_Vault) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		v,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (v *jsiiProxy_Vault) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := v.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		v,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (v *jsiiProxy_Vault) OnPrepare() {
	_jsii_.InvokeVoid(
		v,
		"onPrepare",
		nil, // no parameters
	)
}

func (v *jsiiProxy_Vault) OnSynthesize(session constructs.ISynthesisSession) {
	if err := v.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (v *jsiiProxy_Vault) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		v,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (v *jsiiProxy_Vault) Prepare() {
	_jsii_.InvokeVoid(
		v,
		"prepare",
		nil, // no parameters
	)
}

func (v *jsiiProxy_Vault) SetMetadata(key *string, value interface{}) {
	if err := v.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (v *jsiiProxy_Vault) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := v.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		v,
		"synthesize",
		[]interface{}{session},
	)
}

func (v *jsiiProxy_Vault) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		v,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (v *jsiiProxy_Vault) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		v,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

