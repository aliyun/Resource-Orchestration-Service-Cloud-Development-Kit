package alicloudroscdkehpc

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkehpc/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkehpc/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::EHPC::Cluster`, which is used to create an Elastic High Performance Computing (E-HPC) cluster.
type RosCluster interface {
	alicloudroscdkcore.RosResource
	AccountType() interface{}
	SetAccountType(val interface{})
	AdditionalVolumes() interface{}
	SetAdditionalVolumes(val interface{})
	Application() interface{}
	SetApplication(val interface{})
	AttrClusterId() alicloudroscdkcore.IResolvable
	AttrEcsInfo() alicloudroscdkcore.IResolvable
	AttrName() alicloudroscdkcore.IResolvable
	AttrSecurityGroupId() alicloudroscdkcore.IResolvable
	AutoRenew() interface{}
	SetAutoRenew(val interface{})
	AutoRenewPeriod() interface{}
	SetAutoRenewPeriod(val interface{})
	ClientVersion() interface{}
	SetClientVersion(val interface{})
	ComputeEnableHt() interface{}
	SetComputeEnableHt(val interface{})
	ComputeSpotPriceLimit() interface{}
	SetComputeSpotPriceLimit(val interface{})
	ComputeSpotStrategy() interface{}
	SetComputeSpotStrategy(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeployMode() interface{}
	SetDeployMode(val interface{})
	Description() interface{}
	SetDescription(val interface{})
	EcsChargeType() interface{}
	SetEcsChargeType(val interface{})
	EcsOrderComputeCount() interface{}
	SetEcsOrderComputeCount(val interface{})
	EcsOrderComputeInstanceType() interface{}
	SetEcsOrderComputeInstanceType(val interface{})
	EcsOrderLoginCount() interface{}
	SetEcsOrderLoginCount(val interface{})
	EcsOrderLoginInstanceType() interface{}
	SetEcsOrderLoginInstanceType(val interface{})
	EcsOrderManagerCount() interface{}
	SetEcsOrderManagerCount(val interface{})
	EcsOrderManagerInstanceType() interface{}
	SetEcsOrderManagerInstanceType(val interface{})
	EhpcVersion() interface{}
	SetEhpcVersion(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	HaEnable() interface{}
	SetHaEnable(val interface{})
	ImageId() interface{}
	SetImageId(val interface{})
	ImageOwnerAlias() interface{}
	SetImageOwnerAlias(val interface{})
	InputFileUrl() interface{}
	SetInputFileUrl(val interface{})
	IsComputeEss() interface{}
	SetIsComputeEss(val interface{})
	JobQueue() interface{}
	SetJobQueue(val interface{})
	KeyPairName() interface{}
	SetKeyPairName(val interface{})
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
	Name() interface{}
	SetName(val interface{})
	NetworkInterfaceTrafficMode() interface{}
	SetNetworkInterfaceTrafficMode(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	OsTag() interface{}
	SetOsTag(val interface{})
	Password() interface{}
	SetPassword(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PeriodUnit() interface{}
	SetPeriodUnit(val interface{})
	PostInstallScript() interface{}
	SetPostInstallScript(val interface{})
	RamNodeTypes() interface{}
	SetRamNodeTypes(val interface{})
	RamRoleName() interface{}
	SetRamRoleName(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RemoteDirectory() interface{}
	SetRemoteDirectory(val interface{})
	RemoteVisEnable() interface{}
	SetRemoteVisEnable(val interface{})
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SccClusterId() interface{}
	SetSccClusterId(val interface{})
	SchedulerType() interface{}
	SetSchedulerType(val interface{})
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	SecurityGroupName() interface{}
	SetSecurityGroupName(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	SystemDiskLevel() interface{}
	SetSystemDiskLevel(val interface{})
	SystemDiskSize() interface{}
	SetSystemDiskSize(val interface{})
	SystemDiskType() interface{}
	SetSystemDiskType(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VolumeId() interface{}
	SetVolumeId(val interface{})
	VolumeMountpoint() interface{}
	SetVolumeMountpoint(val interface{})
	VolumeProtocol() interface{}
	SetVolumeProtocol(val interface{})
	VolumeType() interface{}
	SetVolumeType(val interface{})
	VpcId() interface{}
	SetVpcId(val interface{})
	VSwitchId() interface{}
	SetVSwitchId(val interface{})
	WithoutElasticIp() interface{}
	SetWithoutElasticIp(val interface{})
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

// The jsii proxy struct for RosCluster
type jsiiProxy_RosCluster struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosCluster) AccountType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"accountType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AdditionalVolumes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"additionalVolumes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) Application() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"application",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrEcsInfo() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEcsInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrSecurityGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AutoRenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ClientVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clientVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ComputeEnableHt() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"computeEnableHt",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ComputeSpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"computeSpotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ComputeSpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"computeSpotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) DeployMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deployMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) EcsChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) EcsOrderComputeCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsOrderComputeCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) EcsOrderComputeInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsOrderComputeInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) EcsOrderLoginCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsOrderLoginCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) EcsOrderLoginInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsOrderLoginInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) EcsOrderManagerCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsOrderManagerCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) EcsOrderManagerInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ecsOrderManagerInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) EhpcVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ehpcVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) HaEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"haEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ImageOwnerAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageOwnerAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) InputFileUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"inputFileUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) IsComputeEss() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"isComputeEss",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) JobQueue() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"jobQueue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) KeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) Name() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) NetworkInterfaceTrafficMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkInterfaceTrafficMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) OsTag() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"osTag",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) Password() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"password",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) PostInstallScript() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"postInstallScript",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) RamNodeTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ramNodeTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) RamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ramRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) RemoteDirectory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"remoteDirectory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) RemoteVisEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"remoteVisEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) SccClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sccClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) SchedulerType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"schedulerType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) SecurityGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) SystemDiskLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) SystemDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) SystemDiskType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) VolumeId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"volumeId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) VolumeMountpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"volumeMountpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) VolumeProtocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"volumeProtocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) VolumeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"volumeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) WithoutElasticIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"withoutElasticIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosCluster(scope alicloudroscdkcore.Construct, id *string, props *RosClusterProps, enableResourcePropertyConstraint *bool) RosCluster {
	_init_.Initialize()

	if err := validateNewRosClusterParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosCluster{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ehpc.RosCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosCluster_Override(r RosCluster, scope alicloudroscdkcore.Construct, id *string, props *RosClusterProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ehpc.RosCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosCluster)SetAccountType(val interface{}) {
	if err := j.validateSetAccountTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"accountType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetAdditionalVolumes(val interface{}) {
	if err := j.validateSetAdditionalVolumesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"additionalVolumes",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetApplication(val interface{}) {
	if err := j.validateSetApplicationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"application",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetAutoRenewPeriod(val interface{}) {
	if err := j.validateSetAutoRenewPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenewPeriod",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetClientVersion(val interface{}) {
	if err := j.validateSetClientVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clientVersion",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetComputeEnableHt(val interface{}) {
	if err := j.validateSetComputeEnableHtParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"computeEnableHt",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetComputeSpotPriceLimit(val interface{}) {
	if err := j.validateSetComputeSpotPriceLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"computeSpotPriceLimit",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetComputeSpotStrategy(val interface{}) {
	if err := j.validateSetComputeSpotStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"computeSpotStrategy",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetDeployMode(val interface{}) {
	if err := j.validateSetDeployModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deployMode",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetEcsChargeType(val interface{}) {
	if err := j.validateSetEcsChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsChargeType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetEcsOrderComputeCount(val interface{}) {
	if err := j.validateSetEcsOrderComputeCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsOrderComputeCount",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetEcsOrderComputeInstanceType(val interface{}) {
	if err := j.validateSetEcsOrderComputeInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsOrderComputeInstanceType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetEcsOrderLoginCount(val interface{}) {
	if err := j.validateSetEcsOrderLoginCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsOrderLoginCount",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetEcsOrderLoginInstanceType(val interface{}) {
	if err := j.validateSetEcsOrderLoginInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsOrderLoginInstanceType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetEcsOrderManagerCount(val interface{}) {
	if err := j.validateSetEcsOrderManagerCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsOrderManagerCount",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetEcsOrderManagerInstanceType(val interface{}) {
	if err := j.validateSetEcsOrderManagerInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ecsOrderManagerInstanceType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetEhpcVersion(val interface{}) {
	if err := j.validateSetEhpcVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ehpcVersion",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetHaEnable(val interface{}) {
	if err := j.validateSetHaEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"haEnable",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetImageId(val interface{}) {
	if err := j.validateSetImageIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageId",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetImageOwnerAlias(val interface{}) {
	if err := j.validateSetImageOwnerAliasParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageOwnerAlias",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetInputFileUrl(val interface{}) {
	if err := j.validateSetInputFileUrlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"inputFileUrl",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetIsComputeEss(val interface{}) {
	if err := j.validateSetIsComputeEssParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"isComputeEss",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetJobQueue(val interface{}) {
	if err := j.validateSetJobQueueParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"jobQueue",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetKeyPairName(val interface{}) {
	if err := j.validateSetKeyPairNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keyPairName",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetName(val interface{}) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetNetworkInterfaceTrafficMode(val interface{}) {
	if err := j.validateSetNetworkInterfaceTrafficModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkInterfaceTrafficMode",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetOsTag(val interface{}) {
	if err := j.validateSetOsTagParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"osTag",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetPassword(val interface{}) {
	if err := j.validateSetPasswordParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"password",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetPostInstallScript(val interface{}) {
	if err := j.validateSetPostInstallScriptParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"postInstallScript",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetRamNodeTypes(val interface{}) {
	if err := j.validateSetRamNodeTypesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ramNodeTypes",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetRamRoleName(val interface{}) {
	if err := j.validateSetRamRoleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ramRoleName",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetRemoteDirectory(val interface{}) {
	if err := j.validateSetRemoteDirectoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"remoteDirectory",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetRemoteVisEnable(val interface{}) {
	if err := j.validateSetRemoteVisEnableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"remoteVisEnable",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetSccClusterId(val interface{}) {
	if err := j.validateSetSccClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sccClusterId",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetSchedulerType(val interface{}) {
	if err := j.validateSetSchedulerTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"schedulerType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetSecurityGroupName(val interface{}) {
	if err := j.validateSetSecurityGroupNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupName",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetSystemDiskLevel(val interface{}) {
	if err := j.validateSetSystemDiskLevelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskLevel",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetSystemDiskSize(val interface{}) {
	if err := j.validateSetSystemDiskSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskSize",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetSystemDiskType(val interface{}) {
	if err := j.validateSetSystemDiskTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetVolumeId(val interface{}) {
	if err := j.validateSetVolumeIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"volumeId",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetVolumeMountpoint(val interface{}) {
	if err := j.validateSetVolumeMountpointParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"volumeMountpoint",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetVolumeProtocol(val interface{}) {
	if err := j.validateSetVolumeProtocolParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"volumeProtocol",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetVolumeType(val interface{}) {
	if err := j.validateSetVolumeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"volumeType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetWithoutElasticIp(val interface{}) {
	if err := j.validateSetWithoutElasticIpParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"withoutElasticIp",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetZoneId(val interface{}) {
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
func RosCluster_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosCluster_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ehpc.RosCluster",
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
func RosCluster_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosCluster_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ehpc.RosCluster",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosCluster_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosCluster_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ehpc.RosCluster",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosCluster_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ehpc.RosCluster",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosCluster) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosCluster) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosCluster) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosCluster) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosCluster) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosCluster) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosCluster) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosCluster) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosCluster) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosCluster) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosCluster) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosCluster) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosCluster) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosCluster) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosCluster) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCluster) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosCluster) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosCluster) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosCluster) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosCluster) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCluster) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCluster) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

