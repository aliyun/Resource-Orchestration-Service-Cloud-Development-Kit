package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::LaunchTemplate`.
type LaunchTemplate interface {
	alicloudroscdkcore.Resource
	// Attribute AutoReleaseTime: Automatic release time.
	//
	// According to the [ISO8601](~~ 25696 ~~) standard, and need to use UTC time. The format is: yyyy-MM-ddTHH:mm:ssZ.
	AttrAutoReleaseTime() alicloudroscdkcore.IResolvable
	// Attribute CreatedBy: The creator of the launch template.
	AttrCreatedBy() alicloudroscdkcore.IResolvable
	// Attribute CreateTime: The time when the instance launch template was created.
	AttrCreateTime() alicloudroscdkcore.IResolvable
	// Attribute DataDisk: Data disk information list.
	AttrDataDisk() alicloudroscdkcore.IResolvable
	// Attribute DefaultVersionNumber: The default version number of the template.
	AttrDefaultVersionNumber() alicloudroscdkcore.IResolvable
	// Attribute DeletionProtection: Instance deletion protection attribute.
	AttrDeletionProtection() alicloudroscdkcore.IResolvable
	// Attribute DeploymentSetId: The ID of the deployment set.
	AttrDeploymentSetId() alicloudroscdkcore.IResolvable
	// Attribute Description: Instance description.
	//
	// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
	AttrDescription() alicloudroscdkcore.IResolvable
	// Attribute HostName: The hostname of the instance.
	AttrHostName() alicloudroscdkcore.IResolvable
	// Attribute ImageId: The ID of the image.
	AttrImageId() alicloudroscdkcore.IResolvable
	// Attribute ImageOwnerAlias: The source of the image.
	AttrImageOwnerAlias() alicloudroscdkcore.IResolvable
	// Attribute InstanceChargeType: The billing method of the instance.
	AttrInstanceChargeType() alicloudroscdkcore.IResolvable
	// Attribute InstanceName: The name of the instance.
	//
	// The length is 2~128 English or Chinese characters. It must start with a large or small letter or Chinese, and cannot start with' http:// 'or' https. It can contain numbers, colons (:), underscores (_), or dashes (-).
	AttrInstanceName() alicloudroscdkcore.IResolvable
	// Attribute InstanceType: The instance type.
	AttrInstanceType() alicloudroscdkcore.IResolvable
	// Attribute InternetChargeType: Network billing method.
	AttrInternetChargeType() alicloudroscdkcore.IResolvable
	// Attribute InternetMaxBandwidthIn: The maximum public inbound bandwidth, in Mbit/s.
	AttrInternetMaxBandwidthIn() alicloudroscdkcore.IResolvable
	// Attribute InternetMaxBandwidthOut: The maximum outbound bandwidth of the public network.
	//
	// The unit is Mbit/s. The value range is 0~100.
	AttrInternetMaxBandwidthOut() alicloudroscdkcore.IResolvable
	// Attribute IoOptimized: Whether to optimize the instance for I/O.
	AttrIoOptimized() alicloudroscdkcore.IResolvable
	// Attribute Ipv6AddressCount: Specify the number of randomly generated IPv6 addresses for the primary network card.
	//
	// The value range is 1 to 10.
	AttrIpv6AddressCount() alicloudroscdkcore.IResolvable
	// Attribute KeyPairName: The name of the key pair.
	AttrKeyPairName() alicloudroscdkcore.IResolvable
	// Attribute LatestVersionNumber: The latest version number of the template.
	AttrLatestVersionNumber() alicloudroscdkcore.IResolvable
	// Attribute LaunchTemplateId: The ID of the launch template.
	AttrLaunchTemplateId() alicloudroscdkcore.IResolvable
	// Attribute LaunchTemplateName: The name of the launch template.
	AttrLaunchTemplateName() alicloudroscdkcore.IResolvable
	// Attribute ModifiedTime: The time when the launch template was modified.
	AttrModifiedTime() alicloudroscdkcore.IResolvable
	// Attribute NetworkInterface: The elastic network interfaces (ENIs).
	AttrNetworkInterface() alicloudroscdkcore.IResolvable
	// Attribute NetworkType: The network type of the instance.
	AttrNetworkType() alicloudroscdkcore.IResolvable
	// Attribute PasswordInherit: Whether to use the password preset by the image.
	AttrPasswordInherit() alicloudroscdkcore.IResolvable
	// Attribute Period: The duration of the purchase of resources, in months.
	//
	// When creating an instance, the parameter 'InstanceChargeType' takes effect and is required only when the value of the parameter 'PrePaid' is 'PrePaid. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
	AttrPeriod() alicloudroscdkcore.IResolvable
	// Attribute PrivateIpAddress: The private IP address of the instance.
	AttrPrivateIpAddress() alicloudroscdkcore.IResolvable
	// Attribute RamRoleName: The instance RAM role name.
	//
	// You can use the RAM API [ListRoles](~~ 28713 ~~) to query the created instance RAM roles.
	AttrRamRoleName() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: The ID of the resource group to which the instance, Elastic Block Storage (EBS) device, and ENI belong.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute SecurityEnhancementStrategy: Whether to turn on security reinforcement for the operating system.
	AttrSecurityEnhancementStrategy() alicloudroscdkcore.IResolvable
	// Attribute SecurityGroupIds: The IDs of one or more security groups to which you want to add the instance.
	AttrSecurityGroupIds() alicloudroscdkcore.IResolvable
	// Attribute SpotPriceLimit: Set the maximum price per hour for the instance.
	//
	// The maximum number of 3 decimal places is supported. The value of the parameter 'SpotStrategy' is 'SpotWithPriceLimit.
	AttrSpotPriceLimit() alicloudroscdkcore.IResolvable
	// Attribute SpotStrategy: The preemption policy for a pay-as-you-go instance.
	//
	// This parameter takes effect when the value of the parameter 'InstanceChargeType' is 'PostPaid.
	AttrSpotStrategy() alicloudroscdkcore.IResolvable
	// Attribute SystemDisk: System disk configuration.
	AttrSystemDisk() alicloudroscdkcore.IResolvable
	// Attribute Tags: The tags of the launch template.
	AttrTags() alicloudroscdkcore.IResolvable
	// Attribute TemplateResourceGroupId: Q.
	AttrTemplateResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute TemplateTag: The tags of the launch template.
	AttrTemplateTag() alicloudroscdkcore.IResolvable
	// Attribute UserData: The user-defined data of the instance must be encoded in Base64.
	//
	// The maximum original data is 16KB.
	AttrUserData() alicloudroscdkcore.IResolvable
	// Attribute VersionDescription: Instance launch template version description.
	//
	// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
	AttrVersionDescription() alicloudroscdkcore.IResolvable
	// Attribute VpcId: VPC Id.
	AttrVpcId() alicloudroscdkcore.IResolvable
	// Attribute VSwitchId: The ID of the vSwitch.
	AttrVSwitchId() alicloudroscdkcore.IResolvable
	// Attribute ZoneId: The ID of the zone to which the instance belongs.
	AttrZoneId() alicloudroscdkcore.IResolvable
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
	Props() *LaunchTemplateProps
	SetProps(val *LaunchTemplateProps)
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

// The jsii proxy struct for LaunchTemplate
type jsiiProxy_LaunchTemplate struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_LaunchTemplate) AttrAutoReleaseTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrCreatedBy() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrDataDisk() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDataDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrDefaultVersionNumber() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDefaultVersionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrDeletionProtection() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrDeploymentSetId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrHostName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrImageId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrImageOwnerAlias() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageOwnerAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInstanceChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInstanceName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInstanceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInternetChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInternetMaxBandwidthIn() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthIn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInternetMaxBandwidthOut() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrIoOptimized() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIoOptimized",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrIpv6AddressCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpv6AddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrKeyPairName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrKeyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrLatestVersionNumber() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLatestVersionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrLaunchTemplateId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLaunchTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrLaunchTemplateName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLaunchTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrModifiedTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrNetworkInterface() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkInterface",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrNetworkType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrPasswordInherit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPasswordInherit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrPeriod() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrPrivateIpAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrRamRoleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrSecurityEnhancementStrategy() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityEnhancementStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrSecurityGroupIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrSpotPriceLimit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSpotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrSpotStrategy() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSpotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrSystemDisk() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSystemDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrTemplateResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTemplateResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrTemplateTag() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTemplateTag",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrUserData() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUserData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrVersionDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVersionDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) Props() *LaunchTemplateProps {
	var returns *LaunchTemplateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewLaunchTemplate(scope alicloudroscdkcore.Construct, id *string, props *LaunchTemplateProps, enableResourcePropertyConstraint *bool) LaunchTemplate {
	_init_.Initialize()

	if err := validateNewLaunchTemplateParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_LaunchTemplate{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.datasource.LaunchTemplate",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewLaunchTemplate_Override(l LaunchTemplate, scope alicloudroscdkcore.Construct, id *string, props *LaunchTemplateProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.datasource.LaunchTemplate",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		l,
	)
}

func (j *jsiiProxy_LaunchTemplate)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_LaunchTemplate)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_LaunchTemplate)SetProps(val *LaunchTemplateProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_LaunchTemplate)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_LaunchTemplate)SetScope(val alicloudroscdkcore.Construct) {
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
func LaunchTemplate_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateLaunchTemplate_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.datasource.LaunchTemplate",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LaunchTemplate) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := l.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addCondition",
		[]interface{}{condition},
	)
}

func (l *jsiiProxy_LaunchTemplate) AddCount(count interface{}) {
	if err := l.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addCount",
		[]interface{}{count},
	)
}

func (l *jsiiProxy_LaunchTemplate) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := l.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addDependency",
		[]interface{}{resource},
	)
}

func (l *jsiiProxy_LaunchTemplate) AddResourceDesc(desc *string) {
	if err := l.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (l *jsiiProxy_LaunchTemplate) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := l.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (l *jsiiProxy_LaunchTemplate) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		l,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LaunchTemplate) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := l.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		l,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LaunchTemplate) OnPrepare() {
	_jsii_.InvokeVoid(
		l,
		"onPrepare",
		nil, // no parameters
	)
}

func (l *jsiiProxy_LaunchTemplate) OnSynthesize(session constructs.ISynthesisSession) {
	if err := l.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (l *jsiiProxy_LaunchTemplate) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		l,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LaunchTemplate) Prepare() {
	_jsii_.InvokeVoid(
		l,
		"prepare",
		nil, // no parameters
	)
}

func (l *jsiiProxy_LaunchTemplate) SetMetadata(key *string, value interface{}) {
	if err := l.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (l *jsiiProxy_LaunchTemplate) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := l.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		l,
		"synthesize",
		[]interface{}{session},
	)
}

func (l *jsiiProxy_LaunchTemplate) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		l,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LaunchTemplate) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		l,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

