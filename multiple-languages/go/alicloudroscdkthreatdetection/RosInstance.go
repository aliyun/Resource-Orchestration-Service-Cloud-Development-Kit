package alicloudroscdkthreatdetection

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::ThreatDetection::Instance`, which is used to purchase Security Center (SAS).
type RosInstance interface {
	alicloudroscdkcore.RosResource
	AttrBuyNumber() alicloudroscdkcore.IResolvable
	AttrContainerImageScan() alicloudroscdkcore.IResolvable
	AttrContainerImageScanNew() alicloudroscdkcore.IResolvable
	AttrCreateTime() alicloudroscdkcore.IResolvable
	AttrHoneypot() alicloudroscdkcore.IResolvable
	AttrHoneypotSwitch() alicloudroscdkcore.IResolvable
	AttrInstanceId() alicloudroscdkcore.IResolvable
	AttrPaymentType() alicloudroscdkcore.IResolvable
	AttrRaspCount() alicloudroscdkcore.IResolvable
	AttrRenewalPeriodUnit() alicloudroscdkcore.IResolvable
	AttrRenewalStatus() alicloudroscdkcore.IResolvable
	AttrRenewPeriod() alicloudroscdkcore.IResolvable
	AttrSasAntiRansomware() alicloudroscdkcore.IResolvable
	AttrSasCspm() alicloudroscdkcore.IResolvable
	AttrSasCspmSwitch() alicloudroscdkcore.IResolvable
	AttrSasSc() alicloudroscdkcore.IResolvable
	AttrSasSdk() alicloudroscdkcore.IResolvable
	AttrSasSdkSwitch() alicloudroscdkcore.IResolvable
	AttrSasSlsStorage() alicloudroscdkcore.IResolvable
	AttrSasWebguardBoolean() alicloudroscdkcore.IResolvable
	AttrSasWebguardOrderNum() alicloudroscdkcore.IResolvable
	AttrThreatAnalysis() alicloudroscdkcore.IResolvable
	AttrThreatAnalysisSwitch() alicloudroscdkcore.IResolvable
	AttrVCore() alicloudroscdkcore.IResolvable
	AttrVersionCode() alicloudroscdkcore.IResolvable
	AttrVulCount() alicloudroscdkcore.IResolvable
	AttrVulSwitch() alicloudroscdkcore.IResolvable
	BuyNumber() interface{}
	SetBuyNumber(val interface{})
	ContainerImageScan() interface{}
	SetContainerImageScan(val interface{})
	ContainerImageScanNew() interface{}
	SetContainerImageScanNew(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Honeypot() interface{}
	SetHoneypot(val interface{})
	HoneypotSwitch() interface{}
	SetHoneypotSwitch(val interface{})
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
	ModifyType() interface{}
	SetModifyType(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	PaymentType() interface{}
	SetPaymentType(val interface{})
	Period() interface{}
	SetPeriod(val interface{})
	ProductType() interface{}
	SetProductType(val interface{})
	RaspCount() interface{}
	SetRaspCount(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RenewalPeriodUnit() interface{}
	SetRenewalPeriodUnit(val interface{})
	RenewalStatus() interface{}
	SetRenewalStatus(val interface{})
	RenewPeriod() interface{}
	SetRenewPeriod(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	SasAntiRansomware() interface{}
	SetSasAntiRansomware(val interface{})
	SasCspm() interface{}
	SetSasCspm(val interface{})
	SasCspmSwitch() interface{}
	SetSasCspmSwitch(val interface{})
	SasSc() interface{}
	SetSasSc(val interface{})
	SasSdk() interface{}
	SetSasSdk(val interface{})
	SasSdkSwitch() interface{}
	SetSasSdkSwitch(val interface{})
	SasSlsStorage() interface{}
	SetSasSlsStorage(val interface{})
	SasWebguardBoolean() interface{}
	SetSasWebguardBoolean(val interface{})
	SasWebguardOrderNum() interface{}
	SetSasWebguardOrderNum(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	ThreatAnalysis() interface{}
	SetThreatAnalysis(val interface{})
	ThreatAnalysisSwitch() interface{}
	SetThreatAnalysisSwitch(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VCore() interface{}
	SetVCore(val interface{})
	VersionCode() interface{}
	SetVersionCode(val interface{})
	VulCount() interface{}
	SetVulCount(val interface{})
	VulSwitch() interface{}
	SetVulSwitch(val interface{})
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

func (j *jsiiProxy_RosInstance) AttrBuyNumber() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBuyNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrContainerImageScan() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrContainerImageScan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrContainerImageScanNew() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrContainerImageScanNew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrHoneypot() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHoneypot",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrHoneypotSwitch() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHoneypotSwitch",
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

func (j *jsiiProxy_RosInstance) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrRaspCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRaspCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrRenewalPeriodUnit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRenewalPeriodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrRenewalStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRenewalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrRenewPeriod() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSasAntiRansomware() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSasAntiRansomware",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSasCspm() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSasCspm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSasCspmSwitch() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSasCspmSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSasSc() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSasSc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSasSdk() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSasSdk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSasSdkSwitch() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSasSdkSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSasSlsStorage() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSasSlsStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSasWebguardBoolean() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSasWebguardBoolean",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrSasWebguardOrderNum() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSasWebguardOrderNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrThreatAnalysis() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrThreatAnalysis",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrThreatAnalysisSwitch() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrThreatAnalysisSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrVCore() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVCore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrVersionCode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVersionCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrVulCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVulCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) AttrVulSwitch() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVulSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) BuyNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"buyNumber",
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

func (j *jsiiProxy_RosInstance) ContainerImageScanNew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"containerImageScanNew",
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

func (j *jsiiProxy_RosInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) Honeypot() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"honeypot",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) HoneypotSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"honeypotSwitch",
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

func (j *jsiiProxy_RosInstance) ModifyType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"modifyType",
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

func (j *jsiiProxy_RosInstance) PaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"paymentType",
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

func (j *jsiiProxy_RosInstance) ProductType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"productType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RaspCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"raspCount",
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

func (j *jsiiProxy_RosInstance) RenewalPeriodUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"renewalPeriodUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RenewalStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"renewalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) RenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"renewPeriod",
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

func (j *jsiiProxy_RosInstance) SasAntiRansomware() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sasAntiRansomware",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SasCspm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sasCspm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SasCspmSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sasCspmSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SasSc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sasSc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SasSdk() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sasSdk",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SasSdkSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sasSdkSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SasSlsStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sasSlsStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SasWebguardBoolean() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sasWebguardBoolean",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) SasWebguardOrderNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sasWebguardOrderNum",
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

func (j *jsiiProxy_RosInstance) ThreatAnalysisSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"threatAnalysisSwitch",
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

func (j *jsiiProxy_RosInstance) VersionCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"versionCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) VulCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vulCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosInstance) VulSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vulSwitch",
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
		"@alicloud/ros-cdk-threatdetection.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosInstance_Override(r RosInstance, scope alicloudroscdkcore.Construct, id *string, props *RosInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-threatdetection.RosInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosInstance)SetBuyNumber(val interface{}) {
	if err := j.validateSetBuyNumberParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"buyNumber",
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

func (j *jsiiProxy_RosInstance)SetContainerImageScanNew(val interface{}) {
	if err := j.validateSetContainerImageScanNewParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"containerImageScanNew",
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

func (j *jsiiProxy_RosInstance)SetHoneypot(val interface{}) {
	if err := j.validateSetHoneypotParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"honeypot",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetHoneypotSwitch(val interface{}) {
	if err := j.validateSetHoneypotSwitchParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"honeypotSwitch",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetModifyType(val interface{}) {
	if err := j.validateSetModifyTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"modifyType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetPaymentType(val interface{}) {
	if err := j.validateSetPaymentTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"paymentType",
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

func (j *jsiiProxy_RosInstance)SetProductType(val interface{}) {
	if err := j.validateSetProductTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"productType",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetRaspCount(val interface{}) {
	if err := j.validateSetRaspCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"raspCount",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetRenewalPeriodUnit(val interface{}) {
	if err := j.validateSetRenewalPeriodUnitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"renewalPeriodUnit",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetRenewalStatus(val interface{}) {
	if err := j.validateSetRenewalStatusParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"renewalStatus",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetRenewPeriod(val interface{}) {
	if err := j.validateSetRenewPeriodParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"renewPeriod",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSasAntiRansomware(val interface{}) {
	if err := j.validateSetSasAntiRansomwareParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sasAntiRansomware",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSasCspm(val interface{}) {
	if err := j.validateSetSasCspmParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sasCspm",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSasCspmSwitch(val interface{}) {
	if err := j.validateSetSasCspmSwitchParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sasCspmSwitch",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSasSc(val interface{}) {
	if err := j.validateSetSasScParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sasSc",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSasSdk(val interface{}) {
	if err := j.validateSetSasSdkParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sasSdk",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSasSdkSwitch(val interface{}) {
	if err := j.validateSetSasSdkSwitchParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sasSdkSwitch",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSasSlsStorage(val interface{}) {
	if err := j.validateSetSasSlsStorageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sasSlsStorage",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSasWebguardBoolean(val interface{}) {
	if err := j.validateSetSasWebguardBooleanParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sasWebguardBoolean",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetSasWebguardOrderNum(val interface{}) {
	if err := j.validateSetSasWebguardOrderNumParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sasWebguardOrderNum",
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

func (j *jsiiProxy_RosInstance)SetThreatAnalysisSwitch(val interface{}) {
	if err := j.validateSetThreatAnalysisSwitchParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"threatAnalysisSwitch",
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

func (j *jsiiProxy_RosInstance)SetVersionCode(val interface{}) {
	if err := j.validateSetVersionCodeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"versionCode",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetVulCount(val interface{}) {
	if err := j.validateSetVulCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vulCount",
		val,
	)
}

func (j *jsiiProxy_RosInstance)SetVulSwitch(val interface{}) {
	if err := j.validateSetVulSwitchParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vulSwitch",
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
		"@alicloud/ros-cdk-threatdetection.RosInstance",
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
		"@alicloud/ros-cdk-threatdetection.RosInstance",
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
		"@alicloud/ros-cdk-threatdetection.RosInstance",
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
		"@alicloud/ros-cdk-threatdetection.RosInstance",
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

