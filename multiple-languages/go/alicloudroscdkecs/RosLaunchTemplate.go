package alicloudroscdkecs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ECS::LaunchTemplate`, which is used to create a launch template.
//
// You can use a launch template to create an Elastic Compute Service (ECS) instance.
type RosLaunchTemplate interface {
	alicloudroscdkcore.RosResource
	AttrDefaultVersionNumber() alicloudroscdkcore.IResolvable
	AttrLatestVersionNumber() alicloudroscdkcore.IResolvable
	AttrLaunchTemplateId() alicloudroscdkcore.IResolvable
	AttrLaunchTemplateName() alicloudroscdkcore.IResolvable
	AutoReleaseTime() interface{}
	SetAutoReleaseTime(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DeploymentSetId() interface{}
	SetDeploymentSetId(val interface{})
	Description() interface{}
	SetDescription(val interface{})
	DiskMappings() interface{}
	SetDiskMappings(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	HostName() interface{}
	SetHostName(val interface{})
	ImageId() interface{}
	SetImageId(val interface{})
	ImageOwnerAlias() interface{}
	SetImageOwnerAlias(val interface{})
	InstanceChargeType() interface{}
	SetInstanceChargeType(val interface{})
	InstanceName() interface{}
	SetInstanceName(val interface{})
	InstanceType() interface{}
	SetInstanceType(val interface{})
	InternetChargeType() interface{}
	SetInternetChargeType(val interface{})
	InternetMaxBandwidthOut() interface{}
	SetInternetMaxBandwidthOut(val interface{})
	IoOptimized() interface{}
	SetIoOptimized(val interface{})
	Ipv6AddressCount() interface{}
	SetIpv6AddressCount(val interface{})
	KeyPairName() interface{}
	SetKeyPairName(val interface{})
	LaunchTemplateName() interface{}
	SetLaunchTemplateName(val interface{})
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
	NetworkInterfaces() interface{}
	SetNetworkInterfaces(val interface{})
	NetworkType() interface{}
	SetNetworkType(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	PasswordInherit() interface{}
	SetPasswordInherit(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	PrivateIpAddress() interface{}
	SetPrivateIpAddress(val interface{})
	RamRoleName() interface{}
	SetRamRoleName(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	ResourceGroupId() interface{}
	SetResourceGroupId(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SecurityEnhancementStrategy() interface{}
	SetSecurityEnhancementStrategy(val interface{})
	SecurityGroupId() interface{}
	SetSecurityGroupId(val interface{})
	SecurityGroupIds() interface{}
	SetSecurityGroupIds(val interface{})
	SpotDuration() interface{}
	SetSpotDuration(val interface{})
	SpotPriceLimit() interface{}
	SetSpotPriceLimit(val interface{})
	SpotStrategy() interface{}
	SetSpotStrategy(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	SystemDiskCategory() interface{}
	SetSystemDiskCategory(val interface{})
	SystemDiskDeleteWithInstance() interface{}
	SetSystemDiskDeleteWithInstance(val interface{})
	SystemDiskDescription() interface{}
	SetSystemDiskDescription(val interface{})
	SystemDiskDiskName() interface{}
	SetSystemDiskDiskName(val interface{})
	SystemDiskPerformanceLevel() interface{}
	SetSystemDiskPerformanceLevel(val interface{})
	SystemDiskSize() interface{}
	SetSystemDiskSize(val interface{})
	Tags() *[]*RosLaunchTemplate_TagsProperty
	SetTags(val *[]*RosLaunchTemplate_TagsProperty)
	TemplateResourceGroupId() interface{}
	SetTemplateResourceGroupId(val interface{})
	TemplateTags() interface{}
	SetTemplateTags(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	UserData() interface{}
	SetUserData(val interface{})
	VersionDescription() interface{}
	SetVersionDescription(val interface{})
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

// The jsii proxy struct for RosLaunchTemplate
type jsiiProxy_RosLaunchTemplate struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosLaunchTemplate) AttrDefaultVersionNumber() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDefaultVersionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrLatestVersionNumber() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLatestVersionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrLaunchTemplateId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLaunchTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrLaunchTemplateName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLaunchTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AutoReleaseTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) DeploymentSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"deploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) DiskMappings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"diskMappings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) HostName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"hostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) ImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) ImageOwnerAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageOwnerAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) InstanceChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) InstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) InstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) InternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) InternetMaxBandwidthOut() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"internetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) IoOptimized() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ioOptimized",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) Ipv6AddressCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ipv6AddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) KeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"keyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) LaunchTemplateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) NetworkInterfaces() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkInterfaces",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) NetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"networkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) PasswordInherit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"passwordInherit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) PrivateIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"privateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) RamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ramRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) ResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"resourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SecurityEnhancementStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityEnhancementStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"securityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SpotDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"spotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SystemDiskCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SystemDiskDeleteWithInstance() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskDeleteWithInstance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SystemDiskDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SystemDiskDiskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskDiskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SystemDiskPerformanceLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskPerformanceLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) SystemDiskSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"systemDiskSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) Tags() *[]*RosLaunchTemplate_TagsProperty {
	var returns *[]*RosLaunchTemplate_TagsProperty
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) TemplateResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"templateResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) TemplateTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"templateTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) UserData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"userData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) VersionDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"versionDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) ZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"zoneId",
		&returns,
	)
	return returns
}


func NewRosLaunchTemplate(scope alicloudroscdkcore.Construct, id *string, props *RosLaunchTemplateProps, enableResourcePropertyConstraint *bool) RosLaunchTemplate {
	_init_.Initialize()

	if err := validateNewRosLaunchTemplateParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosLaunchTemplate{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosLaunchTemplate",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosLaunchTemplate_Override(r RosLaunchTemplate, scope alicloudroscdkcore.Construct, id *string, props *RosLaunchTemplateProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.RosLaunchTemplate",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetAutoReleaseTime(val interface{}) {
	if err := j.validateSetAutoReleaseTimeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoReleaseTime",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetDeploymentSetId(val interface{}) {
	if err := j.validateSetDeploymentSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"deploymentSetId",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetDiskMappings(val interface{}) {
	if err := j.validateSetDiskMappingsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"diskMappings",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetHostName(val interface{}) {
	if err := j.validateSetHostNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"hostName",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetImageId(val interface{}) {
	if err := j.validateSetImageIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageId",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetImageOwnerAlias(val interface{}) {
	if err := j.validateSetImageOwnerAliasParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageOwnerAlias",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetInstanceChargeType(val interface{}) {
	if err := j.validateSetInstanceChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceChargeType",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetInstanceName(val interface{}) {
	if err := j.validateSetInstanceNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceName",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetInstanceType(val interface{}) {
	if err := j.validateSetInstanceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceType",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetInternetChargeType(val interface{}) {
	if err := j.validateSetInternetChargeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetChargeType",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetInternetMaxBandwidthOut(val interface{}) {
	if err := j.validateSetInternetMaxBandwidthOutParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"internetMaxBandwidthOut",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetIoOptimized(val interface{}) {
	if err := j.validateSetIoOptimizedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ioOptimized",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetIpv6AddressCount(val interface{}) {
	if err := j.validateSetIpv6AddressCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ipv6AddressCount",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetKeyPairName(val interface{}) {
	if err := j.validateSetKeyPairNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"keyPairName",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetLaunchTemplateName(val interface{}) {
	if err := j.validateSetLaunchTemplateNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateName",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetNetworkInterfaces(val interface{}) {
	if err := j.validateSetNetworkInterfacesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkInterfaces",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetNetworkType(val interface{}) {
	if err := j.validateSetNetworkTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"networkType",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetPasswordInherit(val interface{}) {
	if err := j.validateSetPasswordInheritParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"passwordInherit",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetPrivateIpAddress(val interface{}) {
	if err := j.validateSetPrivateIpAddressParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"privateIpAddress",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetRamRoleName(val interface{}) {
	if err := j.validateSetRamRoleNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ramRoleName",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetResourceGroupId(val interface{}) {
	if err := j.validateSetResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"resourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSecurityEnhancementStrategy(val interface{}) {
	if err := j.validateSetSecurityEnhancementStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityEnhancementStrategy",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSecurityGroupId(val interface{}) {
	if err := j.validateSetSecurityGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupId",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSecurityGroupIds(val interface{}) {
	if err := j.validateSetSecurityGroupIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"securityGroupIds",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSpotDuration(val interface{}) {
	if err := j.validateSetSpotDurationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotDuration",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSpotPriceLimit(val interface{}) {
	if err := j.validateSetSpotPriceLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotPriceLimit",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSpotStrategy(val interface{}) {
	if err := j.validateSetSpotStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"spotStrategy",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSystemDiskCategory(val interface{}) {
	if err := j.validateSetSystemDiskCategoryParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskCategory",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSystemDiskDeleteWithInstance(val interface{}) {
	if err := j.validateSetSystemDiskDeleteWithInstanceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskDeleteWithInstance",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSystemDiskDescription(val interface{}) {
	if err := j.validateSetSystemDiskDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskDescription",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSystemDiskDiskName(val interface{}) {
	if err := j.validateSetSystemDiskDiskNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskDiskName",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSystemDiskPerformanceLevel(val interface{}) {
	if err := j.validateSetSystemDiskPerformanceLevelParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskPerformanceLevel",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetSystemDiskSize(val interface{}) {
	if err := j.validateSetSystemDiskSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"systemDiskSize",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetTags(val *[]*RosLaunchTemplate_TagsProperty) {
	if err := j.validateSetTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tags",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetTemplateResourceGroupId(val interface{}) {
	if err := j.validateSetTemplateResourceGroupIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"templateResourceGroupId",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetTemplateTags(val interface{}) {
	if err := j.validateSetTemplateTagsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"templateTags",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetUserData(val interface{}) {
	if err := j.validateSetUserDataParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"userData",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetVersionDescription(val interface{}) {
	if err := j.validateSetVersionDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"versionDescription",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetZoneId(val interface{}) {
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
func RosLaunchTemplate_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosLaunchTemplate_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosLaunchTemplate",
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
func RosLaunchTemplate_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosLaunchTemplate_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosLaunchTemplate",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosLaunchTemplate_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosLaunchTemplate_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.RosLaunchTemplate",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosLaunchTemplate_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-ecs.RosLaunchTemplate",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosLaunchTemplate) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosLaunchTemplate) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosLaunchTemplate) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLaunchTemplate) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosLaunchTemplate) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosLaunchTemplate) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosLaunchTemplate) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLaunchTemplate) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosLaunchTemplate) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

