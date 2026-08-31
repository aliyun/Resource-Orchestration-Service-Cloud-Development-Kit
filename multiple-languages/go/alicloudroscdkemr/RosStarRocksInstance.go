package alicloudroscdkemr

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::EMR::StarRocksInstance`.
type RosStarRocksInstance interface {
	alicloudroscdkcore.RosResource
	AdminPassword() interface{}
	SetAdminPassword(val interface{})
	AttrAclId() alicloudroscdkcore.IResolvable
	AttrArchitecture() alicloudroscdkcore.IResolvable
	AttrCreateTime() alicloudroscdkcore.IResolvable
	AttrEnableAutoMinorVersionUpgrade() alicloudroscdkcore.IResolvable
	AttrEnabledAuditLoader() alicloudroscdkcore.IResolvable
	AttrEnableSsl() alicloudroscdkcore.IResolvable
	AttrEncrypted() alicloudroscdkcore.IResolvable
	AttrExpireTime() alicloudroscdkcore.IResolvable
	AttrInstanceId() alicloudroscdkcore.IResolvable
	AttrInstanceName() alicloudroscdkcore.IResolvable
	AttrIsolateLeader() alicloudroscdkcore.IResolvable
	AttrKmsKeyId() alicloudroscdkcore.IResolvable
	AttrMaintainablePeriod() alicloudroscdkcore.IResolvable
	AttrMinorVersion() alicloudroscdkcore.IResolvable
	AttrMonitorType() alicloudroscdkcore.IResolvable
	AttrOssLocation() alicloudroscdkcore.IResolvable
	AttrPackageType() alicloudroscdkcore.IResolvable
	AttrPayType() alicloudroscdkcore.IResolvable
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	AttrRunMode() alicloudroscdkcore.IResolvable
	AttrRunningTime() alicloudroscdkcore.IResolvable
	AttrSecurityGroupManaged() alicloudroscdkcore.IResolvable
	AttrSgId() alicloudroscdkcore.IResolvable
	AttrTags() alicloudroscdkcore.IResolvable
	AttrVersion() alicloudroscdkcore.IResolvable
	AttrVpcId() alicloudroscdkcore.IResolvable
	AttrVswitches() alicloudroscdkcore.IResolvable
	AutoRenew() interface{}
	SetAutoRenew(val interface{})
	BackendNodeGroups() interface{}
	SetBackendNodeGroups(val interface{})
	ClusterZoneId() interface{}
	SetClusterZoneId(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Duration() interface{}
	SetDuration(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Encrypted() interface{}
	SetEncrypted(val interface{})
	FrontendNodeGroups() interface{}
	SetFrontendNodeGroups(val interface{})
	InstanceName() interface{}
	SetInstanceName(val interface{})
	KmsKeyId() interface{}
	SetKmsKeyId(val interface{})
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
	ObserverNodeGroups() interface{}
	SetObserverNodeGroups(val interface{})
	OrderId() interface{}
	SetOrderId(val interface{})
	OssAccessingRoleName() interface{}
	SetOssAccessingRoleName(val interface{})
	PackageType() interface{}
	SetPackageType(val interface{})
	PayType() interface{}
	SetPayType(val interface{})
	PricingCycle() interface{}
	SetPricingCycle(val interface{})
	PromotionOptionNo() interface{}
	SetPromotionOptionNo(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	ResourceType() interface{}
	SetResourceType(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	RunMode() interface{}
	SetRunMode(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosStarRocksInstance_TagsProperty
	SetTags(val *[]*RosStarRocksInstance_TagsProperty)
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	Version() interface{}
	SetVersion(val interface{})
	VpcId() interface{}
	SetVpcId(val interface{})
	Vswitches() interface{}
	SetVswitches(val interface{})
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
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDesc() *string
	FetchRosDependency() *[]*string
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

// The jsii proxy struct for RosStarRocksInstance
type jsiiProxy_RosStarRocksInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosStarRocksInstance) AdminPassword() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"adminPassword",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrAclId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrArchitecture() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrArchitecture",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrEnableAutoMinorVersionUpgrade() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEnableAutoMinorVersionUpgrade",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrEnabledAuditLoader() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEnabledAuditLoader",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrEnableSsl() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEnableSsl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrEncrypted() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEncrypted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrExpireTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrInstanceName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrIsolateLeader() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIsolateLeader",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrKmsKeyId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrKmsKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrMaintainablePeriod() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaintainablePeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrMinorVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrMonitorType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMonitorType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrOssLocation() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOssLocation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrPackageType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPackageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrPayType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPayType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrRunMode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRunMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrRunningTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRunningTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrSecurityGroupManaged() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityGroupManaged",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrSgId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSgId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AttrVswitches() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVswitches",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) BackendNodeGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backendNodeGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) ClusterZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) Duration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"duration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) Encrypted() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"encrypted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) FrontendNodeGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"frontendNodeGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) InstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) KmsKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"kmsKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) ObserverNodeGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"observerNodeGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) OrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"orderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) OssAccessingRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ossAccessingRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) PackageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"packageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) PayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"payType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) PricingCycle() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pricingCycle",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) PromotionOptionNo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"promotionOptionNo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) ResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) RunMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"runMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) Tags() *[]*RosStarRocksInstance_TagsProperty {
	var returns *[]*RosStarRocksInstance_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) Version() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"version",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStarRocksInstance) Vswitches() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vswitches",
		&returns,
	)
	return returns
}


func NewRosStarRocksInstance(scope alicloudroscdkcore.Construct, id *string, props *RosStarRocksInstanceProps, enableResourcePropertyConstraint *bool) RosStarRocksInstance {
	_init_.Initialize()

	if err := validateNewRosStarRocksInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosStarRocksInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-emr.RosStarRocksInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosStarRocksInstance_Override(r RosStarRocksInstance, scope alicloudroscdkcore.Construct, id *string, props *RosStarRocksInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-emr.RosStarRocksInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetAdminPassword(val interface{}) {
	if err := j.validateSetAdminPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"adminPassword",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetBackendNodeGroups(val interface{}) {
	if err := j.validateSetBackendNodeGroupsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backendNodeGroups",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetClusterZoneId(val interface{}) {
	if err := j.validateSetClusterZoneIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterZoneId",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetDuration(val interface{}) {
	if err := j.validateSetDurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"duration",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetEncrypted(val interface{}) {
	if err := j.validateSetEncryptedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"encrypted",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetFrontendNodeGroups(val interface{}) {
	if err := j.validateSetFrontendNodeGroupsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"frontendNodeGroups",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetInstanceName(val interface{}) {
	if err := j.validateSetInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceName",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetKmsKeyId(val interface{}) {
	if err := j.validateSetKmsKeyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"kmsKeyId",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetObserverNodeGroups(val interface{}) {
	if err := j.validateSetObserverNodeGroupsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"observerNodeGroups",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetOrderId(val interface{}) {
	if err := j.validateSetOrderIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"orderId",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetOssAccessingRoleName(val interface{}) {
	if err := j.validateSetOssAccessingRoleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ossAccessingRoleName",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetPackageType(val interface{}) {
	if err := j.validateSetPackageTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"packageType",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetPayType(val interface{}) {
	if err := j.validateSetPayTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"payType",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetPricingCycle(val interface{}) {
	if err := j.validateSetPricingCycleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pricingCycle",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetPromotionOptionNo(val interface{}) {
	if err := j.validateSetPromotionOptionNoParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"promotionOptionNo",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetResourceType(val interface{}) {
	if err := j.validateSetResourceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceType",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetRunMode(val interface{}) {
	if err := j.validateSetRunModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"runMode",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetTags(val *[]*RosStarRocksInstance_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetVersion(val interface{}) {
	if err := j.validateSetVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"version",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosStarRocksInstance)SetVswitches(val interface{}) {
	if err := j.validateSetVswitchesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vswitches",
		val,
	)
}

// Return whether the given object is a Construct.
func RosStarRocksInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosStarRocksInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-emr.RosStarRocksInstance",
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
func RosStarRocksInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosStarRocksInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-emr.RosStarRocksInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosStarRocksInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosStarRocksInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-emr.RosStarRocksInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosStarRocksInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-emr.RosStarRocksInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosStarRocksInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosStarRocksInstance) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosStarRocksInstance) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosStarRocksInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosStarRocksInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosStarRocksInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosStarRocksInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosStarRocksInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosStarRocksInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosStarRocksInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosStarRocksInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosStarRocksInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

