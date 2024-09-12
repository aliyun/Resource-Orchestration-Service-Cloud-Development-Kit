package alicloudroscdkpolardb

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBCluster`, which is used to create a PolarDB cluster.
type RosDBCluster interface {
	alicloudroscdkcore.RosResource
	AllowShutDown() interface{}
	SetAllowShutDown(val interface{})
	Architecture() interface{}
	SetArchitecture(val interface{})
	AttrClusterConnectionString() alicloudroscdkcore.IResolvable
	AttrClusterEndpointId() alicloudroscdkcore.IResolvable
	AttrColdStorageInstanceId() alicloudroscdkcore.IResolvable
	AttrCustomConnectionStrings() alicloudroscdkcore.IResolvable
	AttrCustomEndpointIds() alicloudroscdkcore.IResolvable
	AttrDbClusterDescription() alicloudroscdkcore.IResolvable
	AttrDbClusterId() alicloudroscdkcore.IResolvable
	AttrDbNodeIds() alicloudroscdkcore.IResolvable
	AttrOrderId() alicloudroscdkcore.IResolvable
	AttrPrimaryConnectionString() alicloudroscdkcore.IResolvable
	AttrPrimaryConnectionStrings() alicloudroscdkcore.IResolvable
	AttrPrimaryEndpointId() alicloudroscdkcore.IResolvable
	AttrPrimaryEndpointIds() alicloudroscdkcore.IResolvable
	AutoRenewPeriod() interface{}
	SetAutoRenewPeriod(val interface{})
	BackupRetentionPolicyOnClusterDeletion() interface{}
	SetBackupRetentionPolicyOnClusterDeletion(val interface{})
	CloneDataPoint() interface{}
	SetCloneDataPoint(val interface{})
	ClusterNetworkType() interface{}
	SetClusterNetworkType(val interface{})
	ColdStorageOption() interface{}
	SetColdStorageOption(val interface{})
	CreationCategory() interface{}
	SetCreationCategory(val interface{})
	CreationOption() interface{}
	SetCreationOption(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DbClusterDescription() interface{}
	SetDbClusterDescription(val interface{})
	DbClusterParameters() interface{}
	SetDbClusterParameters(val interface{})
	DbMinorVersion() interface{}
	SetDbMinorVersion(val interface{})
	DbNodeClass() interface{}
	SetDbNodeClass(val interface{})
	DbNodeNum() interface{}
	SetDbNodeNum(val interface{})
	DbType() interface{}
	SetDbType(val interface{})
	DbVersion() interface{}
	SetDbVersion(val interface{})
	DefaultTimeZone() interface{}
	SetDefaultTimeZone(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	GdnId() interface{}
	SetGdnId(val interface{})
	HotStandbyCluster() interface{}
	SetHotStandbyCluster(val interface{})
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
	LoosePolarLogBin() interface{}
	SetLoosePolarLogBin(val interface{})
	LooseXEngine() interface{}
	SetLooseXEngine(val interface{})
	LooseXEngineUseMemoryPct() interface{}
	SetLooseXEngineUseMemoryPct(val interface{})
	LowerCaseTableNames() interface{}
	SetLowerCaseTableNames(val interface{})
	MaintainTime() interface{}
	SetMaintainTime(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	ParameterGroupId() interface{}
	SetParameterGroupId(val interface{})
	PayType() interface{}
	SetPayType(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PeriodUnit() interface{}
	SetPeriodUnit(val interface{})
	ProvisionedIops() interface{}
	SetProvisionedIops(val interface{})
	ProxyClass() interface{}
	SetProxyClass(val interface{})
	ProxyType() interface{}
	SetProxyType(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RenewalStatus() interface{}
	SetRenewalStatus(val interface{})
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	RestartMasterNode() interface{}
	SetRestartMasterNode(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	ScaleMax() interface{}
	SetScaleMax(val interface{})
	ScaleMin() interface{}
	SetScaleMin(val interface{})
	ScaleRoNumMax() interface{}
	SetScaleRoNumMax(val interface{})
	ScaleRoNumMin() interface{}
	SetScaleRoNumMin(val interface{})
	SecurityGroupIds() interface{}
	SetSecurityGroupIds(val interface{})
	SecurityIpList() interface{}
	SetSecurityIpList(val interface{})
	ServerlessType() interface{}
	SetServerlessType(val interface{})
	SourceResourceId() interface{}
	SetSourceResourceId(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StandbyAz() interface{}
	SetStandbyAz(val interface{})
	StorageAutoScale() interface{}
	SetStorageAutoScale(val interface{})
	StoragePayType() interface{}
	SetStoragePayType(val interface{})
	StorageSpace() interface{}
	SetStorageSpace(val interface{})
	StorageType() interface{}
	SetStorageType(val interface{})
	StorageUpperBound() interface{}
	SetStorageUpperBound(val interface{})
	StrictConsistency() interface{}
	SetStrictConsistency(val interface{})
	Tags() *[]*RosDBCluster_TagsProperty
	SetTags(val *[]*RosDBCluster_TagsProperty)
	TdeStatus() interface{}
	SetTdeStatus(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VpcId() interface{}
	SetVpcId(val interface{})
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

// The jsii proxy struct for RosDBCluster
type jsiiProxy_RosDBCluster struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosDBCluster) AllowShutDown() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"allowShutDown",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) Architecture() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"architecture",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrClusterConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrClusterEndpointId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrColdStorageInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrColdStorageInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrCustomConnectionStrings() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCustomConnectionStrings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrCustomEndpointIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCustomEndpointIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrDbClusterDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbClusterDescription",
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

func (j *jsiiProxy_RosDBCluster) AttrDbNodeIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbNodeIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrOrderId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrPrimaryConnectionString() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrimaryConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrPrimaryConnectionStrings() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrimaryConnectionStrings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrPrimaryEndpointId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrimaryEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AttrPrimaryEndpointIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrimaryEndpointIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) AutoRenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) BackupRetentionPolicyOnClusterDeletion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"backupRetentionPolicyOnClusterDeletion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) CloneDataPoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cloneDataPoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) ClusterNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) ColdStorageOption() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"coldStorageOption",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) CreationCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"creationCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) CreationOption() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"creationOption",
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

func (j *jsiiProxy_RosDBCluster) DbClusterDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbClusterDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) DbClusterParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbClusterParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) DbMinorVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) DbNodeClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbNodeClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) DbNodeNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbNodeNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) DbType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) DbVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"dbVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) DefaultTimeZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"defaultTimeZone",
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

func (j *jsiiProxy_RosDBCluster) GdnId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"gdnId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) HotStandbyCluster() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hotStandbyCluster",
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

func (j *jsiiProxy_RosDBCluster) LoosePolarLogBin() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"loosePolarLogBin",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) LooseXEngine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"looseXEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) LooseXEngineUseMemoryPct() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"looseXEngineUseMemoryPct",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) LowerCaseTableNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"lowerCaseTableNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) MaintainTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maintainTime",
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

func (j *jsiiProxy_RosDBCluster) ParameterGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"parameterGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) PayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"payType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) ProvisionedIops() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"provisionedIops",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) ProxyClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"proxyClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) ProxyType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"proxyType",
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

func (j *jsiiProxy_RosDBCluster) RenewalStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"renewalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) RestartMasterNode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"restartMasterNode",
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

func (j *jsiiProxy_RosDBCluster) ScaleMax() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scaleMax",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) ScaleMin() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scaleMin",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) ScaleRoNumMax() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scaleRoNumMax",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) ScaleRoNumMin() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scaleRoNumMin",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) SecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) SecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) ServerlessType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serverlessType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) SourceResourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceResourceId",
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

func (j *jsiiProxy_RosDBCluster) StandbyAz() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"standbyAz",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) StorageAutoScale() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageAutoScale",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) StoragePayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storagePayType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) StorageSpace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageSpace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) StorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) StorageUpperBound() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageUpperBound",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) StrictConsistency() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"strictConsistency",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) Tags() *[]*RosDBCluster_TagsProperty {
	var returns *[]*RosDBCluster_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) TdeStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tdeStatus",
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

func (j *jsiiProxy_RosDBCluster) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosDBCluster) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
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
		"@alicloud/ros-cdk-polardb.RosDBCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosDBCluster_Override(r RosDBCluster, scope alicloudroscdkcore.Construct, id *string, props *RosDBClusterProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-polardb.RosDBCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosDBCluster)SetAllowShutDown(val interface{}) {
	if err := j.validateSetAllowShutDownParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"allowShutDown",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetArchitecture(val interface{}) {
	if err := j.validateSetArchitectureParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"architecture",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetAutoRenewPeriod(val interface{}) {
	if err := j.validateSetAutoRenewPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenewPeriod",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetBackupRetentionPolicyOnClusterDeletion(val interface{}) {
	if err := j.validateSetBackupRetentionPolicyOnClusterDeletionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"backupRetentionPolicyOnClusterDeletion",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetCloneDataPoint(val interface{}) {
	if err := j.validateSetCloneDataPointParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cloneDataPoint",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetClusterNetworkType(val interface{}) {
	if err := j.validateSetClusterNetworkTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterNetworkType",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetColdStorageOption(val interface{}) {
	if err := j.validateSetColdStorageOptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"coldStorageOption",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetCreationCategory(val interface{}) {
	if err := j.validateSetCreationCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"creationCategory",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetCreationOption(val interface{}) {
	if err := j.validateSetCreationOptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"creationOption",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetDbClusterDescription(val interface{}) {
	if err := j.validateSetDbClusterDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbClusterDescription",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetDbClusterParameters(val interface{}) {
	if err := j.validateSetDbClusterParametersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbClusterParameters",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetDbMinorVersion(val interface{}) {
	if err := j.validateSetDbMinorVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbMinorVersion",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetDbNodeClass(val interface{}) {
	if err := j.validateSetDbNodeClassParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbNodeClass",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetDbNodeNum(val interface{}) {
	if err := j.validateSetDbNodeNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbNodeNum",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetDbType(val interface{}) {
	if err := j.validateSetDbTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbType",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetDbVersion(val interface{}) {
	if err := j.validateSetDbVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"dbVersion",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetDefaultTimeZone(val interface{}) {
	if err := j.validateSetDefaultTimeZoneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"defaultTimeZone",
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

func (j *jsiiProxy_RosDBCluster)SetGdnId(val interface{}) {
	if err := j.validateSetGdnIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"gdnId",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetHotStandbyCluster(val interface{}) {
	if err := j.validateSetHotStandbyClusterParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hotStandbyCluster",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetLoosePolarLogBin(val interface{}) {
	if err := j.validateSetLoosePolarLogBinParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"loosePolarLogBin",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetLooseXEngine(val interface{}) {
	if err := j.validateSetLooseXEngineParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"looseXEngine",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetLooseXEngineUseMemoryPct(val interface{}) {
	if err := j.validateSetLooseXEngineUseMemoryPctParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"looseXEngineUseMemoryPct",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetLowerCaseTableNames(val interface{}) {
	if err := j.validateSetLowerCaseTableNamesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"lowerCaseTableNames",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetMaintainTime(val interface{}) {
	if err := j.validateSetMaintainTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maintainTime",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetParameterGroupId(val interface{}) {
	if err := j.validateSetParameterGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"parameterGroupId",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetPayType(val interface{}) {
	if err := j.validateSetPayTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"payType",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetProvisionedIops(val interface{}) {
	if err := j.validateSetProvisionedIopsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"provisionedIops",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetProxyClass(val interface{}) {
	if err := j.validateSetProxyClassParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"proxyClass",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetProxyType(val interface{}) {
	if err := j.validateSetProxyTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"proxyType",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetRenewalStatus(val interface{}) {
	if err := j.validateSetRenewalStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"renewalStatus",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetRestartMasterNode(val interface{}) {
	if err := j.validateSetRestartMasterNodeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"restartMasterNode",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetScaleMax(val interface{}) {
	if err := j.validateSetScaleMaxParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scaleMax",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetScaleMin(val interface{}) {
	if err := j.validateSetScaleMinParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scaleMin",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetScaleRoNumMax(val interface{}) {
	if err := j.validateSetScaleRoNumMaxParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scaleRoNumMax",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetScaleRoNumMin(val interface{}) {
	if err := j.validateSetScaleRoNumMinParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scaleRoNumMin",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetSecurityGroupIds(val interface{}) {
	if err := j.validateSetSecurityGroupIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupIds",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetSecurityIpList(val interface{}) {
	if err := j.validateSetSecurityIpListParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityIpList",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetServerlessType(val interface{}) {
	if err := j.validateSetServerlessTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serverlessType",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetSourceResourceId(val interface{}) {
	if err := j.validateSetSourceResourceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceResourceId",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetStandbyAz(val interface{}) {
	if err := j.validateSetStandbyAzParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"standbyAz",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetStorageAutoScale(val interface{}) {
	if err := j.validateSetStorageAutoScaleParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageAutoScale",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetStoragePayType(val interface{}) {
	if err := j.validateSetStoragePayTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storagePayType",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetStorageSpace(val interface{}) {
	if err := j.validateSetStorageSpaceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageSpace",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetStorageType(val interface{}) {
	if err := j.validateSetStorageTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageType",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetStorageUpperBound(val interface{}) {
	if err := j.validateSetStorageUpperBoundParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageUpperBound",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetStrictConsistency(val interface{}) {
	if err := j.validateSetStrictConsistencyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"strictConsistency",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetTags(val *[]*RosDBCluster_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetTdeStatus(val interface{}) {
	if err := j.validateSetTdeStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tdeStatus",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosDBCluster)SetZoneId(val interface{}) {
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
func RosDBCluster_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosDBCluster_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-polardb.RosDBCluster",
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
		"@alicloud/ros-cdk-polardb.RosDBCluster",
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
		"@alicloud/ros-cdk-polardb.RosDBCluster",
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
		"@alicloud/ros-cdk-polardb.RosDBCluster",
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

