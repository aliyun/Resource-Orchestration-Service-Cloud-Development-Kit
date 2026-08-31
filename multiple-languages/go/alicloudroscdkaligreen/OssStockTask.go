package alicloudroscdkaligreen

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkaligreen/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkaligreen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `ALIYUN::Aligreen::OssStockTask`.
type OssStockTask interface {
	alicloudroscdkcore.Resource
	IOssStockTask
	// Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.
	AttrAudioAntispamFreezeConfig() interface{}
	// Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch.
	//
	// Value: true: automatically freeze, false: not automatically freeze.
	AttrAudioAutoFreezeOpened() interface{}
	// Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.
	AttrAudioMaxSize() interface{}
	// Attribute AudioOpened: oss stock scan task detect audio.
	AttrAudioOpened() interface{}
	// Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task.
	//
	// The default value is 1000/Bucket.
	AttrAudioScanLimit() interface{}
	// Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task.
	//
	// Set the value to antispam.
	AttrAudioScenes() interface{}
	// Attribute AutoFreezeType: Automatic freeze type.
	AttrAutoFreezeType() interface{}
	// Attribute BizType: Business scenarios used by the oss stock scan task.
	AttrBizType() interface{}
	// Attribute Buckets: The bucket configuration list of the oss stock scan task.
	AttrBuckets() interface{}
	// Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
	AttrCallbackId() interface{}
	// Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
	AttrEndDate() interface{}
	// Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
	AttrImageAdFreezeConfig() interface{}
	// Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch.
	//
	// Value: true: auto freeze, false: not auto freeze.
	AttrImageAutoFreezeOpened() interface{}
	// Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.
	AttrImageLiveFreezeConfig() interface{}
	// Attribute ImageOpened: oss stock scan task detect images.
	AttrImageOpened() interface{}
	// Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.
	AttrImagePornFreezeConfig() interface{}
	// Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.
	AttrImageScanLimit() interface{}
	// Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.
	AttrImageScenes() interface{}
	// Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
	AttrImageTerrorismFreezeConfig() interface{}
	// Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
	AttrScanImageNoFileType() interface{}
	// Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.
	AttrStartDate() interface{}
	// Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
	AttrVideoAdFreezeConfig() interface{}
	// Attribute VideoAutoFreezeOpened: Video detection auto freeze switch.
	//
	// Value: true: automatically freeze, false: not automatically freeze.
	AttrVideoAutoFreezeOpened() interface{}
	// Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.
	AttrVideoFrameInterval() interface{}
	// Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.
	AttrVideoLiveFreezeConfig() interface{}
	// Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
	AttrVideoMaxFrames() interface{}
	// Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.
	AttrVideoMaxSize() interface{}
	// Attribute VideoOpened: oss stock scan task detect video.
	AttrVideoOpened() interface{}
	// Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.
	AttrVideoPornFreezeConfig() interface{}
	// Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task.
	//
	// The default value is 1000/Bucket.
	AttrVideoScanLimit() interface{}
	// Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.
	AttrVideoScenes() interface{}
	// Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
	AttrVideoTerrorismFreezeConfig() interface{}
	// Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
	AttrVideoVoiceAntispamFreezeConfig() interface{}
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
	Props() *OssStockTaskProps
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

// The jsii proxy struct for OssStockTask
type jsiiProxy_OssStockTask struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_IOssStockTask
}

func (j *jsiiProxy_OssStockTask) AttrAudioAntispamFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioAntispamFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrAudioAutoFreezeOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrAudioMaxSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrAudioOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrAudioScanLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrAudioScenes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrAutoFreezeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoFreezeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrBizType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBizType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrBuckets() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBuckets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrCallbackId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallbackId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrEndDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrImageAdFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageAdFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrImageAutoFreezeOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrImageLiveFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageLiveFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrImageOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrImagePornFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImagePornFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrImageScanLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrImageScenes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrImageTerrorismFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageTerrorismFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrScanImageNoFileType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScanImageNoFileType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrStartDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStartDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoAdFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoAdFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoAutoFreezeOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoFrameInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoFrameInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoLiveFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoLiveFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoMaxFrames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoMaxFrames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoMaxSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoPornFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoPornFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoScanLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoScenes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoTerrorismFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoTerrorismFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) AttrVideoVoiceAntispamFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoVoiceAntispamFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) Props() *OssStockTaskProps {
	var returns *OssStockTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_OssStockTask) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewOssStockTask(scope alicloudroscdkcore.Construct, id *string, props *OssStockTaskProps, enableResourcePropertyConstraint *bool) OssStockTask {
	_init_.Initialize()

	if err := validateNewOssStockTaskParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_OssStockTask{}

	_jsii_.Create(
		"@alicloud/ros-cdk-aligreen.OssStockTask",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewOssStockTask_Override(o OssStockTask, scope alicloudroscdkcore.Construct, id *string, props *OssStockTaskProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-aligreen.OssStockTask",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		o,
	)
}

func (j *jsiiProxy_OssStockTask)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_OssStockTask)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_OssStockTask)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_OssStockTask)SetScope(val alicloudroscdkcore.Construct) {
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
func OssStockTask_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateOssStockTask_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-aligreen.OssStockTask",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (o *jsiiProxy_OssStockTask) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := o.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		o,
		"addCondition",
		[]interface{}{condition},
	)
}

func (o *jsiiProxy_OssStockTask) AddCount(count interface{}) {
	if err := o.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		o,
		"addCount",
		[]interface{}{count},
	)
}

func (o *jsiiProxy_OssStockTask) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := o.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		o,
		"addDependency",
		[]interface{}{resource},
	)
}

func (o *jsiiProxy_OssStockTask) AddResourceDesc(desc *string) {
	if err := o.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		o,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (o *jsiiProxy_OssStockTask) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := o.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		o,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (o *jsiiProxy_OssStockTask) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		o,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (o *jsiiProxy_OssStockTask) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		o,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (o *jsiiProxy_OssStockTask) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		o,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (o *jsiiProxy_OssStockTask) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		o,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (o *jsiiProxy_OssStockTask) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := o.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		o,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (o *jsiiProxy_OssStockTask) OnPrepare() {
	_jsii_.InvokeVoid(
		o,
		"onPrepare",
		nil, // no parameters
	)
}

func (o *jsiiProxy_OssStockTask) OnSynthesize(session constructs.ISynthesisSession) {
	if err := o.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		o,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (o *jsiiProxy_OssStockTask) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		o,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (o *jsiiProxy_OssStockTask) Prepare() {
	_jsii_.InvokeVoid(
		o,
		"prepare",
		nil, // no parameters
	)
}

func (o *jsiiProxy_OssStockTask) SetMetadata(key *string, value interface{}) {
	if err := o.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		o,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (o *jsiiProxy_OssStockTask) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := o.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		o,
		"synthesize",
		[]interface{}{session},
	)
}

func (o *jsiiProxy_OssStockTask) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		o,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (o *jsiiProxy_OssStockTask) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		o,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

