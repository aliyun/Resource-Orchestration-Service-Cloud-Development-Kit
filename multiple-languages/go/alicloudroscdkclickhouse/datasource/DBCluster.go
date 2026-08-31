package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::ClickHouse::DBCluster`.
type DBCluster interface {
	alicloudroscdkcore.Resource
	IDBCluster
	// Attribute AliUid: Alibaba Cloud account.
	AttrAliUid() interface{}
	// Attribute Bid: The ID of the business process flow.
	AttrBid() interface{}
	// Attribute Category: Copy configuration, value description:.
	AttrCategory() interface{}
	// Attribute CommodityCode: Buy Product Code.
	AttrCommodityCode() interface{}
	// Attribute ConnectionString: Connection string.
	AttrConnectionString() interface{}
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute DBClusterId: Instance ID.
	AttrDbClusterId() interface{}
	// Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.
	AttrDbClusterIpArrayName() interface{}
	// Attribute DBClusterName: The cluster description information.
	AttrDbClusterName() interface{}
	// Attribute DbClusterNetworkType: Network type.
	//
	// Currently, only VPC is supported.
	AttrDbClusterNetworkType() interface{}
	// Attribute DBClusterType: Instance type.
	AttrDbClusterType() interface{}
	// Attribute DbNodeClass: Set the node type.
	AttrDbNodeClass() interface{}
	// Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
	AttrDbNodeCount() interface{}
	// Attribute DbNodeStorage: Single-node storage space.
	//
	// Value range: 100 GB to 32000GB.
	AttrDbNodeStorage() interface{}
	// Attribute EncryptionKey: Key management service KMS key ID.
	AttrEncryptionKey() interface{}
	// Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
	AttrEncryptionType() interface{}
	// Attribute Engine: Engine.
	AttrEngine() interface{}
	// Attribute EngineVersion: The engine version.
	AttrEngineVersion() interface{}
	// Attribute ExpireTime: The expiration time.
	AttrExpireTime() interface{}
	// Attribute IsExpired: If the instance has expired.
	AttrIsExpired() interface{}
	// Attribute LockMode: The lock mode.
	AttrLockMode() interface{}
	// Attribute LockReason: Lock reason.
	AttrLockReason() interface{}
	// Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
	AttrMaintainTime() interface{}
	// Attribute PaymentType: The paymen type of the resource.
	AttrPaymentType() interface{}
	// Attribute Port: Connection port.
	AttrPort() interface{}
	// Attribute PublicConnectionString: A public IP address for the connection.
	AttrPublicConnectionString() interface{}
	// Attribute PublicIpAddr: Public IP address.
	AttrPublicIpAddr() interface{}
	// Attribute PublicPort: Public network port.
	AttrPublicPort() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute ScaleOutStatus: Scale state.
	AttrScaleOutStatus() interface{}
	// Attribute SecurityIps: The whitelist supports the following two formats:.
	AttrSecurityIps() interface{}
	// Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
	AttrStorageType() interface{}
	// Attribute SupportBackup: Support fallback scheme.
	AttrSupportBackup() interface{}
	// Attribute SupportHttpsPort: The system supports http port number.
	AttrSupportHttpsPort() interface{}
	// Attribute SupportMysqlPort: Supports Mysql, and those of the ports.
	AttrSupportMysqlPort() interface{}
	// Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
	AttrSupportOss() interface{}
	// Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
	AttrVpcCloudInstanceId() interface{}
	// Attribute VpcId: VPC ID.
	AttrVpcId() interface{}
	// Attribute VpcIpAddr: VPC IP address.
	AttrVpcIpAddr() interface{}
	// Attribute VSwitchId: Switch ID.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: On behalf of the zone resource attribute field.
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
	Props() *DBClusterProps
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

// The jsii proxy struct for DBCluster
type jsiiProxy_DBCluster struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_IDBCluster
}

func (j *jsiiProxy_DBCluster) AttrAliUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAliUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrBid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrCommodityCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommodityCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrDbClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrDbClusterIpArrayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterIpArrayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrDbClusterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrDbClusterNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrDbClusterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrDbNodeClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrDbNodeCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrDbNodeStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrEncryptionKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncryptionKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrEncryptionType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncryptionType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrEngine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrEngineVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrExpireTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrIsExpired() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsExpired",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrLockMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrLockReason() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrMaintainTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrPublicConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrPublicIpAddr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrPublicPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrScaleOutStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScaleOutStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrSecurityIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrSupportBackup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSupportBackup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrSupportHttpsPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSupportHttpsPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrSupportMysqlPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSupportMysqlPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrSupportOss() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSupportOss",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrVpcCloudInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcCloudInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrVpcIpAddr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcIpAddr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) Props() *DBClusterProps {
	var returns *DBClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBCluster) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewDBCluster(scope alicloudroscdkcore.Construct, id *string, props *DBClusterProps, enableResourcePropertyConstraint *bool) DBCluster {
	_init_.Initialize()

	if err := validateNewDBClusterParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_DBCluster{}

	_jsii_.Create(
		"@alicloud/ros-cdk-clickhouse.datasource.DBCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewDBCluster_Override(d DBCluster, scope alicloudroscdkcore.Construct, id *string, props *DBClusterProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-clickhouse.datasource.DBCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		d,
	)
}

func (j *jsiiProxy_DBCluster)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_DBCluster)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_DBCluster)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_DBCluster)SetScope(val alicloudroscdkcore.Construct) {
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
func DBCluster_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateDBCluster_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-clickhouse.datasource.DBCluster",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBCluster) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := d.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addCondition",
		[]interface{}{condition},
	)
}

func (d *jsiiProxy_DBCluster) AddCount(count interface{}) {
	if err := d.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addCount",
		[]interface{}{count},
	)
}

func (d *jsiiProxy_DBCluster) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := d.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addDependency",
		[]interface{}{resource},
	)
}

func (d *jsiiProxy_DBCluster) AddResourceDesc(desc *string) {
	if err := d.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (d *jsiiProxy_DBCluster) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := d.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (d *jsiiProxy_DBCluster) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		d,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBCluster) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBCluster) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBCluster) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBCluster) GetAtt(name *string) alicloudroscdkcore.IResolvable {
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

func (d *jsiiProxy_DBCluster) OnPrepare() {
	_jsii_.InvokeVoid(
		d,
		"onPrepare",
		nil, // no parameters
	)
}

func (d *jsiiProxy_DBCluster) OnSynthesize(session constructs.ISynthesisSession) {
	if err := d.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_DBCluster) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBCluster) Prepare() {
	_jsii_.InvokeVoid(
		d,
		"prepare",
		nil, // no parameters
	)
}

func (d *jsiiProxy_DBCluster) SetMetadata(key *string, value interface{}) {
	if err := d.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (d *jsiiProxy_DBCluster) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := d.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"synthesize",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_DBCluster) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBCluster) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

