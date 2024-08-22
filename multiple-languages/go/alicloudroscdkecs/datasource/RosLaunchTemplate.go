package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::LaunchTemplate`.
type RosLaunchTemplate interface {
	alicloudroscdkcore.RosResource
	AttrAutoReleaseTime() alicloudroscdkcore.IResolvable
	AttrCreatedBy() alicloudroscdkcore.IResolvable
	AttrCreateTime() alicloudroscdkcore.IResolvable
	AttrDataDisk() alicloudroscdkcore.IResolvable
	AttrDefaultVersionNumber() alicloudroscdkcore.IResolvable
	AttrDeletionProtection() alicloudroscdkcore.IResolvable
	AttrDeploymentSetId() alicloudroscdkcore.IResolvable
	AttrDescription() alicloudroscdkcore.IResolvable
	AttrHostName() alicloudroscdkcore.IResolvable
	AttrImageId() alicloudroscdkcore.IResolvable
	AttrImageOwnerAlias() alicloudroscdkcore.IResolvable
	AttrInstanceChargeType() alicloudroscdkcore.IResolvable
	AttrInstanceName() alicloudroscdkcore.IResolvable
	AttrInstanceType() alicloudroscdkcore.IResolvable
	AttrInternetChargeType() alicloudroscdkcore.IResolvable
	AttrInternetMaxBandwidthIn() alicloudroscdkcore.IResolvable
	AttrInternetMaxBandwidthOut() alicloudroscdkcore.IResolvable
	AttrIoOptimized() alicloudroscdkcore.IResolvable
	AttrIpv6AddressCount() alicloudroscdkcore.IResolvable
	AttrKeyPairName() alicloudroscdkcore.IResolvable
	AttrLatestVersionNumber() alicloudroscdkcore.IResolvable
	AttrLaunchTemplateId() alicloudroscdkcore.IResolvable
	AttrLaunchTemplateName() alicloudroscdkcore.IResolvable
	AttrModifiedTime() alicloudroscdkcore.IResolvable
	AttrNetworkInterface() alicloudroscdkcore.IResolvable
	AttrNetworkType() alicloudroscdkcore.IResolvable
	AttrPasswordInherit() alicloudroscdkcore.IResolvable
	AttrPeriod() alicloudroscdkcore.IResolvable
	AttrPrivateIpAddress() alicloudroscdkcore.IResolvable
	AttrRamRoleName() alicloudroscdkcore.IResolvable
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	AttrSecurityEnhancementStrategy() alicloudroscdkcore.IResolvable
	AttrSecurityGroupIds() alicloudroscdkcore.IResolvable
	AttrSpotPriceLimit() alicloudroscdkcore.IResolvable
	AttrSpotStrategy() alicloudroscdkcore.IResolvable
	AttrSystemDisk() alicloudroscdkcore.IResolvable
	AttrTags() alicloudroscdkcore.IResolvable
	AttrTemplateResourceGroupId() alicloudroscdkcore.IResolvable
	AttrTemplateTag() alicloudroscdkcore.IResolvable
	AttrUserData() alicloudroscdkcore.IResolvable
	AttrVersionDescription() alicloudroscdkcore.IResolvable
	AttrVpcId() alicloudroscdkcore.IResolvable
	AttrVSwitchId() alicloudroscdkcore.IResolvable
	AttrZoneId() alicloudroscdkcore.IResolvable
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	LaunchTemplateId() interface{}
	SetLaunchTemplateId(val interface{})
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

// The jsii proxy struct for RosLaunchTemplate
type jsiiProxy_RosLaunchTemplate struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosLaunchTemplate) AttrAutoReleaseTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrCreatedBy() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrDataDisk() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDataDisk",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_RosLaunchTemplate) AttrDeletionProtection() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrDeploymentSetId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDeploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrHostName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrImageId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrImageOwnerAlias() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageOwnerAlias",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrInstanceChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrInstanceName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrInstanceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrInternetChargeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrInternetMaxBandwidthIn() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthIn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrInternetMaxBandwidthOut() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetMaxBandwidthOut",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrIoOptimized() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIoOptimized",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrIpv6AddressCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIpv6AddressCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrKeyPairName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrKeyPairName",
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

func (j *jsiiProxy_RosLaunchTemplate) AttrModifiedTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrNetworkInterface() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkInterface",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrNetworkType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrPasswordInherit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPasswordInherit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrPeriod() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrPrivateIpAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPrivateIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrRamRoleName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrSecurityEnhancementStrategy() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityEnhancementStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrSecurityGroupIds() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrSpotPriceLimit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSpotPriceLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrSpotStrategy() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSpotStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrSystemDisk() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSystemDisk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrTemplateResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTemplateResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrTemplateTag() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTemplateTag",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrUserData() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrUserData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrVersionDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVersionDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
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

func (j *jsiiProxy_RosLaunchTemplate) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosLaunchTemplate) LaunchTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"launchTemplateId",
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

func (j *jsiiProxy_RosLaunchTemplate) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
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

func (j *jsiiProxy_RosLaunchTemplate) RefreshOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"refreshOptions",
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

func (j *jsiiProxy_RosLaunchTemplate) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
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


func NewRosLaunchTemplate(scope alicloudroscdkcore.Construct, id *string, props *RosLaunchTemplateProps, enableResourcePropertyConstraint *bool) RosLaunchTemplate {
	_init_.Initialize()

	if err := validateNewRosLaunchTemplateParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosLaunchTemplate{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.datasource.RosLaunchTemplate",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosLaunchTemplate_Override(r RosLaunchTemplate, scope alicloudroscdkcore.Construct, id *string, props *RosLaunchTemplateProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ecs.datasource.RosLaunchTemplate",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
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

func (j *jsiiProxy_RosLaunchTemplate)SetLaunchTemplateId(val interface{}) {
	if err := j.validateSetLaunchTemplateIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"launchTemplateId",
		val,
	)
}

func (j *jsiiProxy_RosLaunchTemplate)SetRefreshOptions(val interface{}) {
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
func RosLaunchTemplate_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosLaunchTemplate_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ecs.datasource.RosLaunchTemplate",
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
		"@alicloud/ros-cdk-ecs.datasource.RosLaunchTemplate",
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
		"@alicloud/ros-cdk-ecs.datasource.RosLaunchTemplate",
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
		"@alicloud/ros-cdk-ecs.datasource.RosLaunchTemplate",
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

