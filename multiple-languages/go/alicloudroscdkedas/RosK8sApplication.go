package alicloudroscdkedas

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkedas/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::EDAS::K8sApplication`, which is used to create an application in a Kubernetes cluster.
type RosK8sApplication interface {
	alicloudroscdkcore.RosResource
	ApplicationDescription() interface{}
	SetApplicationDescription(val interface{})
	AppName() interface{}
	SetAppName(val interface{})
	AttrAppId() alicloudroscdkcore.IResolvable
	AttrAppName() alicloudroscdkcore.IResolvable
	AttrChangeOrderId() alicloudroscdkcore.IResolvable
	AttrClusterId() alicloudroscdkcore.IResolvable
	AttrCsClusterId() alicloudroscdkcore.IResolvable
	ClusterId() interface{}
	SetClusterId(val interface{})
	Command() interface{}
	SetCommand(val interface{})
	CommandArgs() interface{}
	SetCommandArgs(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeployAcrossNodes() interface{}
	SetDeployAcrossNodes(val interface{})
	DeployAcrossZones() interface{}
	SetDeployAcrossZones(val interface{})
	EdasContainerVersion() interface{}
	SetEdasContainerVersion(val interface{})
	EnableAhas() interface{}
	SetEnableAhas(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Envs() interface{}
	SetEnvs(val interface{})
	ImageUrl() interface{}
	SetImageUrl(val interface{})
	InternetSlbId() interface{}
	SetInternetSlbId(val interface{})
	InternetSlbPort() interface{}
	SetInternetSlbPort(val interface{})
	InternetSlbProtocol() interface{}
	SetInternetSlbProtocol(val interface{})
	InternetTargetPort() interface{}
	SetInternetTargetPort(val interface{})
	IntranetSlbId() interface{}
	SetIntranetSlbId(val interface{})
	IntranetSlbPort() interface{}
	SetIntranetSlbPort(val interface{})
	IntranetSlbProtocol() interface{}
	SetIntranetSlbProtocol(val interface{})
	IntranetTargetPort() interface{}
	SetIntranetTargetPort(val interface{})
	IsMultilingualApp() interface{}
	SetIsMultilingualApp(val interface{})
	JavaStartUpConfig() interface{}
	SetJavaStartUpConfig(val interface{})
	Jdk() interface{}
	SetJdk(val interface{})
	LimitCpu() interface{}
	SetLimitCpu(val interface{})
	LimitMem() interface{}
	SetLimitMem(val interface{})
	Liveness() interface{}
	SetLiveness(val interface{})
	LocalVolume() interface{}
	SetLocalVolume(val interface{})
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
	LogicalRegionId() interface{}
	SetLogicalRegionId(val interface{})
	MountDescs() interface{}
	SetMountDescs(val interface{})
	Namespace() interface{}
	SetNamespace(val interface{})
	NasId() interface{}
	SetNasId(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	PackageType() interface{}
	SetPackageType(val interface{})
	PackageUrl() interface{}
	SetPackageUrl(val interface{})
	PackageVersion() interface{}
	SetPackageVersion(val interface{})
	PostStart() interface{}
	SetPostStart(val interface{})
	PreStop() interface{}
	SetPreStop(val interface{})
	Readiness() interface{}
	SetReadiness(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	Replicas() interface{}
	SetReplicas(val interface{})
	RepoId() interface{}
	SetRepoId(val interface{})
	RequestsCpu() interface{}
	SetRequestsCpu(val interface{})
	RequestsMem() interface{}
	SetRequestsMem(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	RuntimeClassName() interface{}
	SetRuntimeClassName(val interface{})
	SlsConfigs() interface{}
	SetSlsConfigs(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StorageType() interface{}
	SetStorageType(val interface{})
	Timeout() interface{}
	SetTimeout(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	UriEncoding() interface{}
	SetUriEncoding(val interface{})
	UseBodyEncoding() interface{}
	SetUseBodyEncoding(val interface{})
	WebContainer() interface{}
	SetWebContainer(val interface{})
	WebContainerConfig() interface{}
	SetWebContainerConfig(val interface{})
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

// The jsii proxy struct for RosK8sApplication
type jsiiProxy_RosK8sApplication struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosK8sApplication) ApplicationDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"applicationDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) AppName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"appName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) AttrAppId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) AttrAppName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAppName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) AttrChangeOrderId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrChangeOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) AttrClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) AttrCsClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCsClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) ClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) Command() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"command",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) CommandArgs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"commandArgs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) DeployAcrossNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deployAcrossNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) DeployAcrossZones() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deployAcrossZones",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) EdasContainerVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"edasContainerVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) EnableAhas() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableAhas",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) Envs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"envs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) ImageUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) InternetSlbId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) InternetSlbPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetSlbPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) InternetSlbProtocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetSlbProtocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) InternetTargetPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetTargetPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) IntranetSlbId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"intranetSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) IntranetSlbPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"intranetSlbPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) IntranetSlbProtocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"intranetSlbProtocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) IntranetTargetPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"intranetTargetPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) IsMultilingualApp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"isMultilingualApp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) JavaStartUpConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"javaStartUpConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) Jdk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"jdk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) LimitCpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"limitCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) LimitMem() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"limitMem",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) Liveness() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"liveness",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) LocalVolume() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"localVolume",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) LogicalRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logicalRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) MountDescs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"mountDescs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) Namespace() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"namespace",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) NasId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nasId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) PackageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"packageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) PackageUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"packageUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) PackageVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"packageVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) PostStart() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"postStart",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) PreStop() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"preStop",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) Readiness() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"readiness",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) Replicas() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"replicas",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) RepoId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"repoId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) RequestsCpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"requestsCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) RequestsMem() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"requestsMem",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) RuntimeClassName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"runtimeClassName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) SlsConfigs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"slsConfigs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) StorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"storageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) Timeout() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timeout",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) UriEncoding() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"uriEncoding",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) UseBodyEncoding() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"useBodyEncoding",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) WebContainer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"webContainer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosK8sApplication) WebContainerConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"webContainerConfig",
		&returns,
	)
	return returns
}


func NewRosK8sApplication(scope alicloudroscdkcore.Construct, id *string, props *RosK8sApplicationProps, enableResourcePropertyConstraint *bool) RosK8sApplication {
	_init_.Initialize()

	if err := validateNewRosK8sApplicationParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosK8sApplication{}

	_jsii_.Create(
		"@alicloud/ros-cdk-edas.RosK8sApplication",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosK8sApplication_Override(r RosK8sApplication, scope alicloudroscdkcore.Construct, id *string, props *RosK8sApplicationProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-edas.RosK8sApplication",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetApplicationDescription(val interface{}) {
	if err := j.validateSetApplicationDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"applicationDescription",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetAppName(val interface{}) {
	if err := j.validateSetAppNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"appName",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetClusterId(val interface{}) {
	if err := j.validateSetClusterIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterId",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetCommand(val interface{}) {
	if err := j.validateSetCommandParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"command",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetCommandArgs(val interface{}) {
	if err := j.validateSetCommandArgsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"commandArgs",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetDeployAcrossNodes(val interface{}) {
	if err := j.validateSetDeployAcrossNodesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deployAcrossNodes",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetDeployAcrossZones(val interface{}) {
	if err := j.validateSetDeployAcrossZonesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deployAcrossZones",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetEdasContainerVersion(val interface{}) {
	if err := j.validateSetEdasContainerVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"edasContainerVersion",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetEnableAhas(val interface{}) {
	if err := j.validateSetEnableAhasParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableAhas",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetEnvs(val interface{}) {
	if err := j.validateSetEnvsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"envs",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetImageUrl(val interface{}) {
	if err := j.validateSetImageUrlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageUrl",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetInternetSlbId(val interface{}) {
	if err := j.validateSetInternetSlbIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetSlbId",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetInternetSlbPort(val interface{}) {
	if err := j.validateSetInternetSlbPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetSlbPort",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetInternetSlbProtocol(val interface{}) {
	if err := j.validateSetInternetSlbProtocolParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetSlbProtocol",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetInternetTargetPort(val interface{}) {
	if err := j.validateSetInternetTargetPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetTargetPort",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetIntranetSlbId(val interface{}) {
	if err := j.validateSetIntranetSlbIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"intranetSlbId",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetIntranetSlbPort(val interface{}) {
	if err := j.validateSetIntranetSlbPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"intranetSlbPort",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetIntranetSlbProtocol(val interface{}) {
	if err := j.validateSetIntranetSlbProtocolParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"intranetSlbProtocol",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetIntranetTargetPort(val interface{}) {
	if err := j.validateSetIntranetTargetPortParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"intranetTargetPort",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetIsMultilingualApp(val interface{}) {
	if err := j.validateSetIsMultilingualAppParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"isMultilingualApp",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetJavaStartUpConfig(val interface{}) {
	if err := j.validateSetJavaStartUpConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"javaStartUpConfig",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetJdk(val interface{}) {
	if err := j.validateSetJdkParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"jdk",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetLimitCpu(val interface{}) {
	if err := j.validateSetLimitCpuParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"limitCpu",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetLimitMem(val interface{}) {
	if err := j.validateSetLimitMemParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"limitMem",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetLiveness(val interface{}) {
	if err := j.validateSetLivenessParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"liveness",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetLocalVolume(val interface{}) {
	if err := j.validateSetLocalVolumeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"localVolume",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetLogicalRegionId(val interface{}) {
	if err := j.validateSetLogicalRegionIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logicalRegionId",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetMountDescs(val interface{}) {
	if err := j.validateSetMountDescsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"mountDescs",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetNamespace(val interface{}) {
	if err := j.validateSetNamespaceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"namespace",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetNasId(val interface{}) {
	if err := j.validateSetNasIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nasId",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetPackageType(val interface{}) {
	if err := j.validateSetPackageTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"packageType",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetPackageUrl(val interface{}) {
	if err := j.validateSetPackageUrlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"packageUrl",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetPackageVersion(val interface{}) {
	if err := j.validateSetPackageVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"packageVersion",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetPostStart(val interface{}) {
	if err := j.validateSetPostStartParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"postStart",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetPreStop(val interface{}) {
	if err := j.validateSetPreStopParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"preStop",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetReadiness(val interface{}) {
	if err := j.validateSetReadinessParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"readiness",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetReplicas(val interface{}) {
	if err := j.validateSetReplicasParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"replicas",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetRepoId(val interface{}) {
	if err := j.validateSetRepoIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"repoId",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetRequestsCpu(val interface{}) {
	if err := j.validateSetRequestsCpuParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"requestsCpu",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetRequestsMem(val interface{}) {
	if err := j.validateSetRequestsMemParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"requestsMem",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetRuntimeClassName(val interface{}) {
	if err := j.validateSetRuntimeClassNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"runtimeClassName",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetSlsConfigs(val interface{}) {
	if err := j.validateSetSlsConfigsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"slsConfigs",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetStorageType(val interface{}) {
	if err := j.validateSetStorageTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"storageType",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetTimeout(val interface{}) {
	if err := j.validateSetTimeoutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timeout",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetUriEncoding(val interface{}) {
	if err := j.validateSetUriEncodingParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"uriEncoding",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetUseBodyEncoding(val interface{}) {
	if err := j.validateSetUseBodyEncodingParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"useBodyEncoding",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetWebContainer(val interface{}) {
	if err := j.validateSetWebContainerParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"webContainer",
		val,
	)
}

func (j *jsiiProxy_RosK8sApplication)SetWebContainerConfig(val interface{}) {
	if err := j.validateSetWebContainerConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"webContainerConfig",
		val,
	)
}

// Return whether the given object is a Construct.
func RosK8sApplication_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosK8sApplication_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-edas.RosK8sApplication",
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
func RosK8sApplication_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosK8sApplication_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-edas.RosK8sApplication",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosK8sApplication_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosK8sApplication_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-edas.RosK8sApplication",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosK8sApplication_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-edas.RosK8sApplication",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosK8sApplication) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosK8sApplication) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosK8sApplication) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosK8sApplication) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosK8sApplication) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosK8sApplication) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosK8sApplication) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosK8sApplication) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosK8sApplication) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosK8sApplication) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosK8sApplication) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosK8sApplication) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosK8sApplication) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosK8sApplication) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosK8sApplication) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosK8sApplication) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosK8sApplication) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosK8sApplication) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosK8sApplication) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosK8sApplication) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosK8sApplication) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosK8sApplication) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

