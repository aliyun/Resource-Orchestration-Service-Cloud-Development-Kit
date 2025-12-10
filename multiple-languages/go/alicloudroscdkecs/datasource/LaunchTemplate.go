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
	ILaunchTemplate
	// Attribute AutoReleaseTime: Automatic release time (UTC).
	//
	// The format is: yyyy-MM-ddTHH:mm:ssZ.
	AttrAutoReleaseTime() interface{}
	// Attribute CreatedBy: The creator of the launch template.
	AttrCreatedBy() interface{}
	// Attribute CreateTime: The time when the instance launch template was created.
	AttrCreateTime() interface{}
	// Attribute DataDisk: Data disk information list.
	AttrDataDisk() interface{}
	// Attribute DefaultVersionNumber: The default version number of the template.
	AttrDefaultVersionNumber() interface{}
	// Attribute DeletionProtection: Instance deletion protection attribute.
	AttrDeletionProtection() interface{}
	// Attribute DeploymentSetId: The ID of the deployment set.
	AttrDeploymentSetId() interface{}
	// Attribute Description: Instance description.
	//
	// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
	AttrDescription() interface{}
	// Attribute HostName: The hostname of the instance.
	AttrHostName() interface{}
	// Attribute ImageId: The ID of the image.
	AttrImageId() interface{}
	// Attribute ImageOwnerAlias: The source of the image.
	AttrImageOwnerAlias() interface{}
	// Attribute InstanceChargeType: The billing method of the instance.
	AttrInstanceChargeType() interface{}
	// Attribute InstanceName: The name of the instance.
	//
	// The length is 2~128 English or Chinese characters. It must start with a large or small letter or Chinese, and cannot start with' http:// 'or' https. It can contain numbers, colons (:), underscores (_), or dashes (-).
	AttrInstanceName() interface{}
	// Attribute InstanceType: The instance type.
	AttrInstanceType() interface{}
	// Attribute InternetChargeType: Network billing method.
	AttrInternetChargeType() interface{}
	// Attribute InternetMaxBandwidthIn: The maximum public inbound bandwidth, in Mbit/s.
	AttrInternetMaxBandwidthIn() interface{}
	// Attribute InternetMaxBandwidthOut: The maximum outbound bandwidth of the public network.
	//
	// The unit is Mbit/s. The value range is 0~100.
	AttrInternetMaxBandwidthOut() interface{}
	// Attribute IoOptimized: Whether to optimize the instance for I/O.
	AttrIoOptimized() interface{}
	// Attribute Ipv6AddressCount: Specify the number of randomly generated IPv6 addresses for the primary network card.
	//
	// The value range is 1 to 10.
	AttrIpv6AddressCount() interface{}
	// Attribute KeyPairName: The name of the key pair.
	AttrKeyPairName() interface{}
	// Attribute LatestVersionNumber: The latest version number of the template.
	AttrLatestVersionNumber() interface{}
	// Attribute LaunchTemplateId: The ID of the launch template.
	AttrLaunchTemplateId() interface{}
	// Attribute LaunchTemplateName: The name of the launch template.
	AttrLaunchTemplateName() interface{}
	// Attribute ModifiedTime: The time when the launch template was modified.
	AttrModifiedTime() interface{}
	// Attribute NetworkInterface: The elastic network interfaces (ENIs).
	AttrNetworkInterface() interface{}
	// Attribute NetworkType: The network type of the instance.
	AttrNetworkType() interface{}
	// Attribute PasswordInherit: Whether to use the password preset by the image.
	AttrPasswordInherit() interface{}
	// Attribute Period: The duration of the purchase of resources, in months.
	//
	// When creating an instance, the parameter 'InstanceChargeType' takes effect and is required only when the value of the parameter 'PrePaid' is 'PrePaid. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
	AttrPeriod() interface{}
	// Attribute PrivateIpAddress: The private IP address of the instance.
	AttrPrivateIpAddress() interface{}
	// Attribute RamRoleName: The instance RAM role name.
	AttrRamRoleName() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the instance, Elastic Block Storage (EBS) device, and ENI belong.
	AttrResourceGroupId() interface{}
	// Attribute SecurityEnhancementStrategy: Whether to turn on security reinforcement for the operating system.
	AttrSecurityEnhancementStrategy() interface{}
	// Attribute SecurityGroupIds: The IDs of one or more security groups to which you want to add the instance.
	AttrSecurityGroupIds() interface{}
	// Attribute SpotPriceLimit: Set the maximum price per hour for the instance.
	//
	// The maximum number of 3 decimal places is supported. The value of the parameter 'SpotStrategy' is 'SpotWithPriceLimit.
	AttrSpotPriceLimit() interface{}
	// Attribute SpotStrategy: The preemption policy for a pay-as-you-go instance.
	//
	// This parameter takes effect when the value of the parameter 'InstanceChargeType' is 'PostPaid.
	AttrSpotStrategy() interface{}
	// Attribute SystemDisk: System disk configuration.
	AttrSystemDisk() interface{}
	// Attribute Tags: The tags of the launch template.
	AttrTags() interface{}
	// Attribute TemplateResourceGroupId: Q.
	AttrTemplateResourceGroupId() interface{}
	// Attribute TemplateTag: The tags of the launch template.
	AttrTemplateTag() interface{}
	// Attribute UserData: The user-defined data of the instance must be encoded in Base64.
	//
	// The maximum original data is 16KB.
	AttrUserData() interface{}
	// Attribute VersionDescription: Instance launch template version description.
	//
	// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
	AttrVersionDescription() interface{}
	// Attribute VpcId: VPC Id.
	AttrVpcId() interface{}
	// Attribute VSwitchId: The ID of the vSwitch.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: The ID of the zone to which the instance belongs.
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
	Props() *LaunchTemplateProps
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

// The jsii proxy struct for LaunchTemplate
type jsiiProxy_LaunchTemplate struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_ILaunchTemplate
}

func (j *jsiiProxy_LaunchTemplate) AttrAutoReleaseTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrCreatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrDataDisk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrDefaultVersionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultVersionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrDeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrDeploymentSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrHostName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrImageOwnerAlias() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageOwnerAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInstanceChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInternetMaxBandwidthIn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthIn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrInternetMaxBandwidthOut() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrIoOptimized() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIoOptimized",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrIpv6AddressCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6AddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrKeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrLatestVersionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLatestVersionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrLaunchTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaunchTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrLaunchTemplateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaunchTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrNetworkInterface() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkInterface",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrPasswordInherit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPasswordInherit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrPrivateIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrRamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrSecurityEnhancementStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityEnhancementStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrSecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrSpotPriceLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrSpotStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrSystemDisk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSystemDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrTemplateResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrTemplateTag() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateTag",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrUserData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrVersionDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_LaunchTemplate) AttrZoneId() interface{} {
	var returns interface{}
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

func (j *jsiiProxy_LaunchTemplate) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
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

func (l *jsiiProxy_LaunchTemplate) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		l,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LaunchTemplate) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		l,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (l *jsiiProxy_LaunchTemplate) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		l,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
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

