package alicloudroscdksas

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdksas/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksas/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::SAS::Instance`, which is used to purchase Security Center.
type RosInstance interface {
	alicloudroscdkcore.RosResource
	AntiRansomware() interface{}
	SetAntiRansomware(val interface{})
	AttrInstanceId() alicloudroscdkcore.IResolvable
	AutoPay() interface{}
	SetAutoPay(val interface{})
	AutoRenew() interface{}
	SetAutoRenew(val interface{})
	CloudHoneypot() interface{}
	SetCloudHoneypot(val interface{})
	ConfigurationAssessment() interface{}
	SetConfigurationAssessment(val interface{})
	ContainerImageScan() interface{}
	SetContainerImageScan(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Edition() interface{}
	SetEdition(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	LogAnalysis() interface{}
	SetLogAnalysis(val interface{})
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
	MaliciousFileDetectionSdk() interface{}
	SetMaliciousFileDetectionSdk(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	Period() interface{}
	SetPeriod(val interface{})
	PeriodUnit() interface{}
	SetPeriodUnit(val interface{})
	ProtectedServers() interface{}
	SetProtectedServers(val interface{})
	QuotaForApplicationProtection() interface{}
	SetQuotaForApplicationProtection(val interface{})
	QuotaForCloudHoneypot() interface{}
	SetQuotaForCloudHoneypot(val interface{})
	QuotaForConfigurationAssessment() interface{}
	SetQuotaForConfigurationAssessment(val interface{})
	QuotaForMaliciousFileDetectionSdk() interface{}
	SetQuotaForMaliciousFileDetectionSdk(val interface{})
	QuotaForVulnerabilityFixing() interface{}
	SetQuotaForVulnerabilityFixing(val interface{})
	QuotaForWebTamperProofing() interface{}
	SetQuotaForWebTamperProofing(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	ThreatAnalysis() interface{}
	SetThreatAnalysis(val interface{})
	ThreatAnalysisLogStorageCapacity() interface{}
	SetThreatAnalysisLogStorageCapacity(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VCore() interface{}
	SetVCore(val interface{})
	VulnerabilityFixing() interface{}
	SetVulnerabilityFixing(val interface{})
	WebTamperProtection() interface{}
	SetWebTamperProtection(val interface{})
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

// The jsii proxy struct for RosInstance
type jsiiProxy_RosInstance struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosInstance) AntiRansomware() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"antiRansomware",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AutoPay() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoPay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) CloudHoneypot() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cloudHoneypot",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ConfigurationAssessment() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"configurationAssessment",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ContainerImageScan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"containerImageScan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Edition() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"edition",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) LogAnalysis() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"logAnalysis",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) MaliciousFileDetectionSdk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"maliciousFileDetectionSdk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Period() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"period",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) PeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"periodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ProtectedServers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"protectedServers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) QuotaForApplicationProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"quotaForApplicationProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) QuotaForCloudHoneypot() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"quotaForCloudHoneypot",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) QuotaForConfigurationAssessment() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"quotaForConfigurationAssessment",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) QuotaForMaliciousFileDetectionSdk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"quotaForMaliciousFileDetectionSdk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) QuotaForVulnerabilityFixing() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"quotaForVulnerabilityFixing",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) QuotaForWebTamperProofing() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"quotaForWebTamperProofing",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ThreatAnalysis() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"threatAnalysis",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) ThreatAnalysisLogStorageCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"threatAnalysisLogStorageCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) VCore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vCore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) VulnerabilityFixing() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vulnerabilityFixing",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) WebTamperProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"webTamperProtection",
		&returns,
	)
	return returns
}


func NewRosInstance(scope alicloudroscdkcore.Construct, id *string, props *RosInstanceProps, enableResourcePropertyConstraint *bool) RosInstance {
	_init_.Initialize()

	if err := validateNewRosInstanceParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-sas.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosInstance_Override(r RosInstance, scope alicloudroscdkcore.Construct, id *string, props *RosInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-sas.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosInstance)SetAntiRansomware(val interface{}) {
	if err := j.validateSetAntiRansomwareParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"antiRansomware",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetAutoPay(val interface{}) {
	if err := j.validateSetAutoPayParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoPay",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetAutoRenew(val interface{}) {
	if err := j.validateSetAutoRenewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoRenew",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetCloudHoneypot(val interface{}) {
	if err := j.validateSetCloudHoneypotParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cloudHoneypot",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetConfigurationAssessment(val interface{}) {
	if err := j.validateSetConfigurationAssessmentParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"configurationAssessment",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetContainerImageScan(val interface{}) {
	if err := j.validateSetContainerImageScanParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"containerImageScan",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetEdition(val interface{}) {
	if err := j.validateSetEditionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"edition",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetLogAnalysis(val interface{}) {
	if err := j.validateSetLogAnalysisParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"logAnalysis",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetMaliciousFileDetectionSdk(val interface{}) {
	if err := j.validateSetMaliciousFileDetectionSdkParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"maliciousFileDetectionSdk",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPeriod(val interface{}) {
	if err := j.validateSetPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"period",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPeriodUnit(val interface{}) {
	if err := j.validateSetPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"periodUnit",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetProtectedServers(val interface{}) {
	if err := j.validateSetProtectedServersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"protectedServers",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetQuotaForApplicationProtection(val interface{}) {
	if err := j.validateSetQuotaForApplicationProtectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"quotaForApplicationProtection",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetQuotaForCloudHoneypot(val interface{}) {
	if err := j.validateSetQuotaForCloudHoneypotParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"quotaForCloudHoneypot",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetQuotaForConfigurationAssessment(val interface{}) {
	if err := j.validateSetQuotaForConfigurationAssessmentParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"quotaForConfigurationAssessment",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetQuotaForMaliciousFileDetectionSdk(val interface{}) {
	if err := j.validateSetQuotaForMaliciousFileDetectionSdkParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"quotaForMaliciousFileDetectionSdk",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetQuotaForVulnerabilityFixing(val interface{}) {
	if err := j.validateSetQuotaForVulnerabilityFixingParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"quotaForVulnerabilityFixing",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetQuotaForWebTamperProofing(val interface{}) {
	if err := j.validateSetQuotaForWebTamperProofingParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"quotaForWebTamperProofing",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetThreatAnalysis(val interface{}) {
	if err := j.validateSetThreatAnalysisParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"threatAnalysis",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetThreatAnalysisLogStorageCapacity(val interface{}) {
	if err := j.validateSetThreatAnalysisLogStorageCapacityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"threatAnalysisLogStorageCapacity",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetVCore(val interface{}) {
	if err := j.validateSetVCoreParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vCore",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetVulnerabilityFixing(val interface{}) {
	if err := j.validateSetVulnerabilityFixingParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vulnerabilityFixing",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetWebTamperProtection(val interface{}) {
	if err := j.validateSetWebTamperProtectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"webTamperProtection",
		val,
	)
}

// Return whether the given object is a Construct.
func RosInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-sas.RosInstance",
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
func RosInstance_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-sas.RosInstance",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosInstance_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosInstance_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-sas.RosInstance",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosInstance_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-sas.RosInstance",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosInstance) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosInstance) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosInstance) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosInstance) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosInstance) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosInstance) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosInstance) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosInstance) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosInstance) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosInstance) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosInstance) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosInstance) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosInstance) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

