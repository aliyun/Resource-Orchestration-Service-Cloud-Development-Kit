package alicloudroscdksae

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdksae/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksae/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::Application`, which is used to create an application in Serverless App Engine (SAE).
type RosApplication interface {
	alicloudroscdkcore.RosResource
	AcrAssumeRoleArn() interface{}
	SetAcrAssumeRoleArn(val interface{})
	AcrInstanceId() interface{}
	SetAcrInstanceId(val interface{})
	AppDescription() interface{}
	SetAppDescription(val interface{})
	AppName() interface{}
	SetAppName(val interface{})
	AppSource() interface{}
	SetAppSource(val interface{})
	AssociateEip() interface{}
	SetAssociateEip(val interface{})
	AttrAppId() alicloudroscdkcore.IResolvable
	AttrChangeOrderId() alicloudroscdkcore.IResolvable
	AutoConfig() interface{}
	SetAutoConfig(val interface{})
	BaseAppId() interface{}
	SetBaseAppId(val interface{})
	Command() interface{}
	SetCommand(val interface{})
	CommandArgs() interface{}
	SetCommandArgs(val interface{})
	ConfigMapMountDesc() interface{}
	SetConfigMapMountDesc(val interface{})
	Cpu() interface{}
	SetCpu(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	CustomHostAlias() interface{}
	SetCustomHostAlias(val interface{})
	Deploy() interface{}
	SetDeploy(val interface{})
	EdasContainerVersion() interface{}
	SetEdasContainerVersion(val interface{})
	EnableEbpf() interface{}
	SetEnableEbpf(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Envs() interface{}
	SetEnvs(val interface{})
	ImagePullSecrets() interface{}
	SetImagePullSecrets(val interface{})
	ImageUrl() interface{}
	SetImageUrl(val interface{})
	JarStartArgs() interface{}
	SetJarStartArgs(val interface{})
	JarStartOptions() interface{}
	SetJarStartOptions(val interface{})
	Jdk() interface{}
	SetJdk(val interface{})
	KafkaConfigs() interface{}
	SetKafkaConfigs(val interface{})
	Liveness() interface{}
	SetLiveness(val interface{})
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
	Memory() interface{}
	SetMemory(val interface{})
	MicroRegistration() interface{}
	SetMicroRegistration(val interface{})
	MicroRegistrationConfig() interface{}
	SetMicroRegistrationConfig(val interface{})
	MountDesc() interface{}
	SetMountDesc(val interface{})
	MountHost() interface{}
	SetMountHost(val interface{})
	NamespaceId() interface{}
	SetNamespaceId(val interface{})
	NasConfigs() interface{}
	SetNasConfigs(val interface{})
	NasId() interface{}
	SetNasId(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	OssAkId() interface{}
	SetOssAkId(val interface{})
	OssAkSecret() interface{}
	SetOssAkSecret(val interface{})
	OssMountDescs() interface{}
	SetOssMountDescs(val interface{})
	PackageType() interface{}
	SetPackageType(val interface{})
	PackageUrl() interface{}
	SetPackageUrl(val interface{})
	PackageVersion() interface{}
	SetPackageVersion(val interface{})
	Php() interface{}
	SetPhp(val interface{})
	PhpArmsConfigLocation() interface{}
	SetPhpArmsConfigLocation(val interface{})
	PhpConfig() interface{}
	SetPhpConfig(val interface{})
	PhpConfigLocation() interface{}
	SetPhpConfigLocation(val interface{})
	PostStart() interface{}
	SetPostStart(val interface{})
	PreStop() interface{}
	SetPreStop(val interface{})
	ProgrammingLanguage() interface{}
	SetProgrammingLanguage(val interface{})
	PvtzDiscoverySvc() interface{}
	SetPvtzDiscoverySvc(val interface{})
	Python() interface{}
	SetPython(val interface{})
	PythonModules() interface{}
	SetPythonModules(val interface{})
	Readiness() interface{}
	SetReadiness(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	Replicas() interface{}
	SetReplicas(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SaeVersion() interface{}
	SetSaeVersion(val interface{})
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	ServiceTags() interface{}
	SetServiceTags(val interface{})
	SlsConfigs() interface{}
	SetSlsConfigs(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	Tags() *[]*RosApplication_TagsProperty
	SetTags(val *[]*RosApplication_TagsProperty)
	TerminationGracePeriodSeconds() interface{}
	SetTerminationGracePeriodSeconds(val interface{})
	Timezone() interface{}
	SetTimezone(val interface{})
	TomcatConfig() interface{}
	SetTomcatConfig(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VpcId() interface{}
	SetVpcId(val interface{})
	VSwitchId() interface{}
	SetVSwitchId(val interface{})
	WarStartOptions() interface{}
	SetWarStartOptions(val interface{})
	WebContainer() interface{}
	SetWebContainer(val interface{})
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

// The jsii proxy struct for RosApplication
type jsiiProxy_RosApplication struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosApplication) AcrAssumeRoleArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"acrAssumeRoleArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) AcrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"acrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) AppDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"appDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) AppName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"appName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) AppSource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"appSource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) AssociateEip() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"associateEip",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) AttrAppId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) AttrChangeOrderId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrChangeOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) AutoConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) BaseAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"baseAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Command() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"command",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) CommandArgs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"commandArgs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) ConfigMapMountDesc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"configMapMountDesc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Cpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) CustomHostAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"customHostAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Deploy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deploy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) EdasContainerVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"edasContainerVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) EnableEbpf() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableEbpf",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Envs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"envs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) ImagePullSecrets() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imagePullSecrets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) ImageUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) JarStartArgs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"jarStartArgs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) JarStartOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"jarStartOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Jdk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"jdk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) KafkaConfigs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"kafkaConfigs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Liveness() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"liveness",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Memory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"memory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) MicroRegistration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"microRegistration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) MicroRegistrationConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"microRegistrationConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) MountDesc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"mountDesc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) MountHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"mountHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) NamespaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"namespaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) NasConfigs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nasConfigs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) NasId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nasId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) OssAkId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ossAkId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) OssAkSecret() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ossAkSecret",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) OssMountDescs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ossMountDescs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) PackageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"packageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) PackageUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"packageUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) PackageVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"packageVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Php() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"php",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) PhpArmsConfigLocation() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"phpArmsConfigLocation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) PhpConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"phpConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) PhpConfigLocation() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"phpConfigLocation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) PostStart() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"postStart",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) PreStop() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"preStop",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) ProgrammingLanguage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"programmingLanguage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) PvtzDiscoverySvc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pvtzDiscoverySvc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Python() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"python",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) PythonModules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pythonModules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Readiness() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"readiness",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Replicas() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"replicas",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) SaeVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"saeVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) ServiceTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"serviceTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) SlsConfigs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"slsConfigs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Tags() *[]*RosApplication_TagsProperty {
	var returns *[]*RosApplication_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) TerminationGracePeriodSeconds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"terminationGracePeriodSeconds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) Timezone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"timezone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) TomcatConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tomcatConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) WarStartOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"warStartOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosApplication) WebContainer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"webContainer",
		&returns,
	)
	return returns
}


func NewRosApplication(scope alicloudroscdkcore.Construct, id *string, props *RosApplicationProps, enableResourcePropertyConstraint *bool) RosApplication {
	_init_.Initialize()

	if err := validateNewRosApplicationParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosApplication{}

	_jsii_.Create(
		"@alicloud/ros-cdk-sae.RosApplication",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosApplication_Override(r RosApplication, scope alicloudroscdkcore.Construct, id *string, props *RosApplicationProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-sae.RosApplication",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosApplication)SetAcrAssumeRoleArn(val interface{}) {
	if err := j.validateSetAcrAssumeRoleArnParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"acrAssumeRoleArn",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetAcrInstanceId(val interface{}) {
	if err := j.validateSetAcrInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"acrInstanceId",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetAppDescription(val interface{}) {
	if err := j.validateSetAppDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"appDescription",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetAppName(val interface{}) {
	if err := j.validateSetAppNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"appName",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetAppSource(val interface{}) {
	if err := j.validateSetAppSourceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"appSource",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetAssociateEip(val interface{}) {
	if err := j.validateSetAssociateEipParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"associateEip",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetAutoConfig(val interface{}) {
	if err := j.validateSetAutoConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoConfig",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetBaseAppId(val interface{}) {
	if err := j.validateSetBaseAppIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"baseAppId",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetCommand(val interface{}) {
	if err := j.validateSetCommandParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"command",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetCommandArgs(val interface{}) {
	if err := j.validateSetCommandArgsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"commandArgs",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetConfigMapMountDesc(val interface{}) {
	if err := j.validateSetConfigMapMountDescParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"configMapMountDesc",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetCpu(val interface{}) {
	if err := j.validateSetCpuParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cpu",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetCustomHostAlias(val interface{}) {
	if err := j.validateSetCustomHostAliasParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"customHostAlias",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetDeploy(val interface{}) {
	if err := j.validateSetDeployParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deploy",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetEdasContainerVersion(val interface{}) {
	if err := j.validateSetEdasContainerVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"edasContainerVersion",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetEnableEbpf(val interface{}) {
	if err := j.validateSetEnableEbpfParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableEbpf",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetEnvs(val interface{}) {
	if err := j.validateSetEnvsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"envs",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetImagePullSecrets(val interface{}) {
	if err := j.validateSetImagePullSecretsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imagePullSecrets",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetImageUrl(val interface{}) {
	if err := j.validateSetImageUrlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageUrl",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetJarStartArgs(val interface{}) {
	if err := j.validateSetJarStartArgsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"jarStartArgs",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetJarStartOptions(val interface{}) {
	if err := j.validateSetJarStartOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"jarStartOptions",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetJdk(val interface{}) {
	if err := j.validateSetJdkParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"jdk",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetKafkaConfigs(val interface{}) {
	if err := j.validateSetKafkaConfigsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"kafkaConfigs",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetLiveness(val interface{}) {
	if err := j.validateSetLivenessParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"liveness",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetMemory(val interface{}) {
	if err := j.validateSetMemoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"memory",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetMicroRegistration(val interface{}) {
	if err := j.validateSetMicroRegistrationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"microRegistration",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetMicroRegistrationConfig(val interface{}) {
	if err := j.validateSetMicroRegistrationConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"microRegistrationConfig",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetMountDesc(val interface{}) {
	if err := j.validateSetMountDescParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"mountDesc",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetMountHost(val interface{}) {
	if err := j.validateSetMountHostParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"mountHost",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetNamespaceId(val interface{}) {
	if err := j.validateSetNamespaceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"namespaceId",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetNasConfigs(val interface{}) {
	if err := j.validateSetNasConfigsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nasConfigs",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetNasId(val interface{}) {
	if err := j.validateSetNasIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nasId",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetOssAkId(val interface{}) {
	if err := j.validateSetOssAkIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ossAkId",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetOssAkSecret(val interface{}) {
	if err := j.validateSetOssAkSecretParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ossAkSecret",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetOssMountDescs(val interface{}) {
	if err := j.validateSetOssMountDescsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ossMountDescs",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPackageType(val interface{}) {
	if err := j.validateSetPackageTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"packageType",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPackageUrl(val interface{}) {
	if err := j.validateSetPackageUrlParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"packageUrl",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPackageVersion(val interface{}) {
	if err := j.validateSetPackageVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"packageVersion",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPhp(val interface{}) {
	if err := j.validateSetPhpParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"php",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPhpArmsConfigLocation(val interface{}) {
	if err := j.validateSetPhpArmsConfigLocationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"phpArmsConfigLocation",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPhpConfig(val interface{}) {
	if err := j.validateSetPhpConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"phpConfig",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPhpConfigLocation(val interface{}) {
	if err := j.validateSetPhpConfigLocationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"phpConfigLocation",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPostStart(val interface{}) {
	if err := j.validateSetPostStartParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"postStart",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPreStop(val interface{}) {
	if err := j.validateSetPreStopParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"preStop",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetProgrammingLanguage(val interface{}) {
	if err := j.validateSetProgrammingLanguageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"programmingLanguage",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPvtzDiscoverySvc(val interface{}) {
	if err := j.validateSetPvtzDiscoverySvcParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pvtzDiscoverySvc",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPython(val interface{}) {
	if err := j.validateSetPythonParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"python",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetPythonModules(val interface{}) {
	if err := j.validateSetPythonModulesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pythonModules",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetReadiness(val interface{}) {
	if err := j.validateSetReadinessParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"readiness",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetReplicas(val interface{}) {
	if err := j.validateSetReplicasParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"replicas",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetSaeVersion(val interface{}) {
	if err := j.validateSetSaeVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"saeVersion",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetServiceTags(val interface{}) {
	if err := j.validateSetServiceTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"serviceTags",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetSlsConfigs(val interface{}) {
	if err := j.validateSetSlsConfigsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"slsConfigs",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetTags(val *[]*RosApplication_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetTerminationGracePeriodSeconds(val interface{}) {
	if err := j.validateSetTerminationGracePeriodSecondsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"terminationGracePeriodSeconds",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetTimezone(val interface{}) {
	if err := j.validateSetTimezoneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"timezone",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetTomcatConfig(val interface{}) {
	if err := j.validateSetTomcatConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tomcatConfig",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetWarStartOptions(val interface{}) {
	if err := j.validateSetWarStartOptionsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"warStartOptions",
		val,
	)
}

func (j *jsiiProxy_RosApplication)SetWebContainer(val interface{}) {
	if err := j.validateSetWebContainerParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"webContainer",
		val,
	)
}

// Return whether the given object is a Construct.
func RosApplication_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosApplication_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-sae.RosApplication",
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
func RosApplication_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosApplication_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-sae.RosApplication",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosApplication_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosApplication_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-sae.RosApplication",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosApplication_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-sae.RosApplication",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosApplication) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosApplication) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosApplication) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosApplication) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosApplication) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosApplication) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosApplication) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosApplication) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosApplication) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosApplication) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosApplication) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosApplication) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosApplication) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosApplication) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosApplication) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosApplication) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosApplication) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosApplication) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosApplication) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosApplication) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosApplication) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosApplication) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

