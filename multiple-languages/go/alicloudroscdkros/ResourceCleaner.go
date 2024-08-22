package alicloudroscdkros

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `ALIYUN::ROS::ResourceCleaner`, which is used to create a resource cleaner.
type ResourceCleaner interface {
	alicloudroscdkcore.Resource
	// Attribute CleanResult: The cleanup result.
	//
	// Valid values:
	// - Success: All resources are cleaned up successfully.
	// - ResourceFailure: Partial resources fail to clean up.
	// - Timeout: Timeout to clean up.
	// - CheckFailure: Pre check of cleanup fails.
	// - UnknownFailure: Unexpected failure.
	// - UserCancelled: Cleanup is cancelled by user.
	// - None: Cleanup is not triggered.
	AttrCleanResult() alicloudroscdkcore.IResolvable
	// Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
	//
	// Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
	// The format is the same as ResourceDetails.
	AttrNoCleanupResourceDetails() alicloudroscdkcore.IResolvable
	// Attribute NoCleanupResourcePartialDetails: The partial details of the resources that are scanned but filtered.
	//
	// Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
	// The format is the same as ResourcePartialDetails.
	AttrNoCleanupResourcePartialDetails() alicloudroscdkcore.IResolvable
	// Attribute ResourceDetails: The details of resources to be cleaned up.
	//
	// The value is a list of dict. The dict contains the fields below:
	// - ResourceType: Resource type of the resource.
	// - RegionId: Region ID of the resource.
	// - ResourceId: ID of the resource.
	// - ResourceName: Name of the resource.
	// - CleanupType: Cleanup type of the resource. Valid values:
	// - Normal: The resource can be deleted normally.
	// - DeleteWithInstance: The resource will be deleted with the resource it belongs to. If the resource it belongs to is filtered or excluded, the deletion probably fails. CleanupTypeReasons give more information.
	// - UnableToDelete: Unable to delete the resource. CleanupTypeReasons give more information.
	// - CleanupTypeReasons: The information of the related CleanupType.
	// - ResourceStatus: Status of the resource. Valid values:
	// - Deleting: The resource is deleting.
	// - Failure: The deletion of the resource failed.
	// - Success: The resource is deleted.
	// - Skipped: The deletion of the resource is skipped.
	// - Pending: The deletion of the resource is not started.
	// - ResourceStatusReason: The information of the related ResourceStatus.
	// - Dependencies: The resources that need to be deleted before the deletion of the resource. The value is a list of dict. The dict contains the fields below:
	// - ResourceType: Resource type of the dependency resource.
	// - RegionId: Region ID of the dependency resource.
	// - ResourceId: ID of the dependency resource.
	AttrResourceDetails() alicloudroscdkcore.IResolvable
	// Attribute ResourcePartialDetails: The partial details of resources to be cleaned up.
	//
	// The value is a list of dict. The dict contains the fields below:
	// - ResourceType: Resource type of the resource.
	// - RegionId: Region ID of the resource.
	// - ResourceId: ID of the resource.
	// - ResourceName: Name of the resource.
	// - ResourceStatus: Status of the resource. Valid values:
	// - Deleting: The resource is deleting.
	// - Failure: The deletion of the resource failed.
	// - Success: The resource is deleted.
	// - Skipped: The deletion of the resource is skipped.
	// - Pending: The deletion of the resource is not started.
	// - ResourceStatusReason: The information of the related ResourceStatus.
	AttrResourcePartialDetails() alicloudroscdkcore.IResolvable
	// Attribute ResourceSummary: The details of resources to be cleaned up.
	//
	// The value is a list of dict. The dict contains the fields below:
	// - ResourceType: Resource type of the resources.
	// - DeletingCount: Number of deleting resources of the resource type.
	// - SuccessCount: Number of deleted resources of the resource type.
	// - FailureCount: Number of resources that failed to delete of the resource type.
	// - SkippedCount: Number of skipped resources of the resource type.
	// - PendingCount: Number of resources that have not been deleted of the resource type.
	// - OtherCount: Number of other resources of the resource type.
	// - TotalCount: Number of total resources of the resource type.
	AttrResourceSummary() alicloudroscdkcore.IResolvable
	// Attribute ScanErrors: The scan errors.
	//
	// It takes effect only when property Mode is Loose.
	// The value is a list of dict. The dict contains the fields below:
	// - ResourceType: Resource type for scanning.
	// - RegionId: Region ID for scanning.
	// - ErrorMessage: Error message of scanning with specified resource type and region ID.
	AttrScanErrors() alicloudroscdkcore.IResolvable
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
	Props() *ResourceCleanerProps
	SetProps(val *ResourceCleanerProps)
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

// The jsii proxy struct for ResourceCleaner
type jsiiProxy_ResourceCleaner struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_ResourceCleaner) AttrCleanResult() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCleanResult",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) AttrNoCleanupResourceDetails() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNoCleanupResourceDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) AttrNoCleanupResourcePartialDetails() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNoCleanupResourcePartialDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) AttrResourceDetails() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) AttrResourcePartialDetails() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourcePartialDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) AttrResourceSummary() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceSummary",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) AttrScanErrors() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScanErrors",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) Props() *ResourceCleanerProps {
	var returns *ResourceCleanerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ResourceCleaner) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewResourceCleaner(scope alicloudroscdkcore.Construct, id *string, props *ResourceCleanerProps, enableResourcePropertyConstraint *bool) ResourceCleaner {
	_init_.Initialize()

	if err := validateNewResourceCleanerParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_ResourceCleaner{}

	_jsii_.Create(
		"@alicloud/ros-cdk-ros.ResourceCleaner",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewResourceCleaner_Override(r ResourceCleaner, scope alicloudroscdkcore.Construct, id *string, props *ResourceCleanerProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-ros.ResourceCleaner",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_ResourceCleaner)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_ResourceCleaner)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_ResourceCleaner)SetProps(val *ResourceCleanerProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_ResourceCleaner)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_ResourceCleaner)SetScope(val alicloudroscdkcore.Construct) {
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
func ResourceCleaner_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateResourceCleaner_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-ros.ResourceCleaner",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_ResourceCleaner) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{condition},
	)
}

func (r *jsiiProxy_ResourceCleaner) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_ResourceCleaner) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := r.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependency",
		[]interface{}{resource},
	)
}

func (r *jsiiProxy_ResourceCleaner) AddResourceDesc(desc *string) {
	if err := r.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_ResourceCleaner) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := r.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (r *jsiiProxy_ResourceCleaner) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_ResourceCleaner) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := r.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		r,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_ResourceCleaner) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_ResourceCleaner) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_ResourceCleaner) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_ResourceCleaner) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_ResourceCleaner) SetMetadata(key *string, value interface{}) {
	if err := r.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_ResourceCleaner) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_ResourceCleaner) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_ResourceCleaner) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

