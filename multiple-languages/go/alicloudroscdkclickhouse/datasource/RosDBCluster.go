package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `DATASOURCE::ClickHouse::DBCluster`, which is used to query the information about an ApsaraDB for ClickHouse cluster.
type RosDBCluster interface {
	alicloudroscdkcore.RosResource
	AttrAliUid() alicloudroscdkcore.IResolvable
	AttrBid() alicloudroscdkcore.IResolvable
	AttrCategory() alicloudroscdkcore.IResolvable
	AttrCommodityCode() alicloudroscdkcore.IResolvable
	AttrConnectionString() alicloudroscdkcore.IResolvable
	AttrCreateTime() alicloudroscdkcore.IResolvable
	AttrDbClusterId() alicloudroscdkcore.IResolvable
	AttrDbClusterIpArrayName() alicloudroscdkcore.IResolvable
	AttrDbClusterName() alicloudroscdkcore.IResolvable
	AttrDbClusterNetworkType() alicloudroscdkcore.IResolvable
	AttrDbClusterType() alicloudroscdkcore.IResolvable
	AttrDbNodeClass() alicloudroscdkcore.IResolvable
	AttrDbNodeCount() alicloudroscdkcore.IResolvable
	AttrDbNodeStorage() alicloudroscdkcore.IResolvable
	AttrEncryptionKey() alicloudroscdkcore.IResolvable
	AttrEncryptionType() alicloudroscdkcore.IResolvable
	AttrEngine() alicloudroscdkcore.IResolvable
	AttrEngineVersion() alicloudroscdkcore.IResolvable
	AttrExpireTime() alicloudroscdkcore.IResolvable
	AttrIsExpired() alicloudroscdkcore.IResolvable
	AttrLockMode() alicloudroscdkcore.IResolvable
	AttrLockReason() alicloudroscdkcore.IResolvable
	AttrMaintainTime() alicloudroscdkcore.IResolvable
	AttrPaymentType() alicloudroscdkcore.IResolvable
	AttrPort() alicloudroscdkcore.IResolvable
	AttrPublicConnectionString() alicloudroscdkcore.IResolvable
	AttrPublicIpAddr() alicloudroscdkcore.IResolvable
	AttrPublicPort() alicloudroscdkcore.IResolvable
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	AttrScaleOutStatus() alicloudroscdkcore.IResolvable
	AttrSecurityIps() alicloudroscdkcore.IResolvable
	AttrStorageType() alicloudroscdkcore.IResolvable
	AttrSupportBackup() alicloudroscdkcore.IResolvable
	AttrSupportHttpsPort() alicloudroscdkcore.IResolvable
	AttrSupportMysqlPort() alicloudroscdkcore.IResolvable
	AttrSupportOss() alicloudroscdkcore.IResolvable
	AttrVpcCloudInstanceId() alicloudroscdkcore.IResolvable
	AttrVpcId() alicloudroscdkcore.IResolvable
	AttrVpcIpAddr() alicloudroscdkcore.IResolvable
	AttrVSwitchId() alicloudroscdkcore.IResolvable
	AttrZoneId() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DbClusterId() interface{}
	SetDbClusterId(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
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
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RefreshOptions() interface{}
	SetRefreshOptions(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
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

// The jsii proxy struct for RosDBCluster
type jsiiProxy_RosDBCluster struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosDBCluster) AttrAliUid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAliUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrBid() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrCategory() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrCommodityCode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCommodityCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrDbClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrDbClusterIpArrayName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbClusterIpArrayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrDbClusterName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbClusterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrDbClusterNetworkType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbClusterNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrDbClusterType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbClusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrDbNodeClass() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbNodeClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrDbNodeCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbNodeCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrDbNodeStorage() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbNodeStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrEncryptionKey() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEncryptionKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrEncryptionType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEncryptionType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrEngine() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrEngineVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrExpireTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrIsExpired() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIsExpired",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrLockMode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLockMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrLockReason() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLockReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrMaintainTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrPublicConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrPublicIpAddr() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicIpAddr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrPublicPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPublicPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrScaleOutStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScaleOutStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrSecurityIps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrStorageType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrSupportBackup() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSupportBackup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrSupportHttpsPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSupportHttpsPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrSupportMysqlPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSupportMysqlPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrSupportOss() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSupportOss",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrVpcCloudInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcCloudInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrVpcIpAddr() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcIpAddr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) DbClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) RefreshOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"refreshOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosDBCluster(scope alicloudroscdkcore.Construct, id *string, props *RosDBClusterProps, enableResourcePropertyConstraint *bool) RosDBCluster {
	_init_.Initialize()

	if err := validateNewRosDBClusterParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosDBCluster{}

	_jsii_.Create(
		"@alicloud/ros-cdk-clickhouse.datasource.RosDBCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosDBCluster_Override(r RosDBCluster, scope alicloudroscdkcore.Construct, id *string, props *RosDBClusterProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-clickhouse.datasource.RosDBCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosDBCluster)SetDbClusterId(val interface{}) {
	if err := j.validateSetDbClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbClusterId",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetRefreshOptions(val interface{}) {
	if err := j.validateSetRefreshOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"refreshOptions",
		val,
	)
}

// Return whether the given object is a Construct.
func RosDBCluster_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDBCluster_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-clickhouse.datasource.RosDBCluster",
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
func RosDBCluster_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDBCluster_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-clickhouse.datasource.RosDBCluster",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosDBCluster_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosDBCluster_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-clickhouse.datasource.RosDBCluster",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosDBCluster_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-clickhouse.datasource.RosDBCluster",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosDBCluster) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosDBCluster) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosDBCluster) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosDBCluster) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDBCluster) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosDBCluster) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosDBCluster) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosDBCluster) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosDBCluster) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosDBCluster) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosDBCluster) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosDBCluster) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosDBCluster) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDBCluster) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDBCluster) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDBCluster) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosDBCluster) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosDBCluster) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosDBCluster) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosDBCluster) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDBCluster) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosDBCluster) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

