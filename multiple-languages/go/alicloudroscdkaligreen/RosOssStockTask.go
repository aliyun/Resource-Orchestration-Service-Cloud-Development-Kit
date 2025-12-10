package alicloudroscdkaligreen

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkaligreen/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkaligreen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::Aligreen::OssStockTask`.
type RosOssStockTask interface {
	alicloudroscdkcore.RosResource
	AttrAudioAntispamFreezeConfig() alicloudroscdkcore.IResolvable
	AttrAudioAutoFreezeOpened() alicloudroscdkcore.IResolvable
	AttrAudioMaxSize() alicloudroscdkcore.IResolvable
	AttrAudioOpened() alicloudroscdkcore.IResolvable
	AttrAudioScanLimit() alicloudroscdkcore.IResolvable
	AttrAudioScenes() alicloudroscdkcore.IResolvable
	AttrAutoFreezeType() alicloudroscdkcore.IResolvable
	AttrBizType() alicloudroscdkcore.IResolvable
	AttrBuckets() alicloudroscdkcore.IResolvable
	AttrCallbackId() alicloudroscdkcore.IResolvable
	AttrEndDate() alicloudroscdkcore.IResolvable
	AttrImageAdFreezeConfig() alicloudroscdkcore.IResolvable
	AttrImageAutoFreezeOpened() alicloudroscdkcore.IResolvable
	AttrImageLiveFreezeConfig() alicloudroscdkcore.IResolvable
	AttrImageOpened() alicloudroscdkcore.IResolvable
	AttrImagePornFreezeConfig() alicloudroscdkcore.IResolvable
	AttrImageScanLimit() alicloudroscdkcore.IResolvable
	AttrImageScenes() alicloudroscdkcore.IResolvable
	AttrImageTerrorismFreezeConfig() alicloudroscdkcore.IResolvable
	AttrScanImageNoFileType() alicloudroscdkcore.IResolvable
	AttrStartDate() alicloudroscdkcore.IResolvable
	AttrVideoAdFreezeConfig() alicloudroscdkcore.IResolvable
	AttrVideoAutoFreezeOpened() alicloudroscdkcore.IResolvable
	AttrVideoFrameInterval() alicloudroscdkcore.IResolvable
	AttrVideoLiveFreezeConfig() alicloudroscdkcore.IResolvable
	AttrVideoMaxFrames() alicloudroscdkcore.IResolvable
	AttrVideoMaxSize() alicloudroscdkcore.IResolvable
	AttrVideoOpened() alicloudroscdkcore.IResolvable
	AttrVideoPornFreezeConfig() alicloudroscdkcore.IResolvable
	AttrVideoScanLimit() alicloudroscdkcore.IResolvable
	AttrVideoScenes() alicloudroscdkcore.IResolvable
	AttrVideoTerrorismFreezeConfig() alicloudroscdkcore.IResolvable
	AttrVideoVoiceAntispamFreezeConfig() alicloudroscdkcore.IResolvable
	AudioAntispamFreezeConfig() interface{}
	SetAudioAntispamFreezeConfig(val interface{})
	AudioAutoFreezeOpened() interface{}
	SetAudioAutoFreezeOpened(val interface{})
	AudioMaxSize() interface{}
	SetAudioMaxSize(val interface{})
	AudioOpened() interface{}
	SetAudioOpened(val interface{})
	AudioScanLimit() interface{}
	SetAudioScanLimit(val interface{})
	AudioScenes() interface{}
	SetAudioScenes(val interface{})
	AutoFreezeType() interface{}
	SetAutoFreezeType(val interface{})
	BizType() interface{}
	SetBizType(val interface{})
	Buckets() interface{}
	SetBuckets(val interface{})
	CallbackId() interface{}
	SetCallbackId(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EndDate() interface{}
	SetEndDate(val interface{})
	ImageAdFreezeConfig() interface{}
	SetImageAdFreezeConfig(val interface{})
	ImageAutoFreezeOpened() interface{}
	SetImageAutoFreezeOpened(val interface{})
	ImageLiveFreezeConfig() interface{}
	SetImageLiveFreezeConfig(val interface{})
	ImageOpened() interface{}
	SetImageOpened(val interface{})
	ImagePornFreezeConfig() interface{}
	SetImagePornFreezeConfig(val interface{})
	ImageScanLimit() interface{}
	SetImageScanLimit(val interface{})
	ImageScenes() interface{}
	SetImageScenes(val interface{})
	ImageTerrorismFreezeConfig() interface{}
	SetImageTerrorismFreezeConfig(val interface{})
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
	OssStockTaskName() interface{}
	SetOssStockTaskName(val interface{})
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
	ScanImageNoFileType() interface{}
	SetScanImageNoFileType(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StartDate() interface{}
	SetStartDate(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VideoAdFreezeConfig() interface{}
	SetVideoAdFreezeConfig(val interface{})
	VideoAutoFreezeOpened() interface{}
	SetVideoAutoFreezeOpened(val interface{})
	VideoFrameInterval() interface{}
	SetVideoFrameInterval(val interface{})
	VideoLiveFreezeConfig() interface{}
	SetVideoLiveFreezeConfig(val interface{})
	VideoMaxFrames() interface{}
	SetVideoMaxFrames(val interface{})
	VideoMaxSize() interface{}
	SetVideoMaxSize(val interface{})
	VideoOpened() interface{}
	SetVideoOpened(val interface{})
	VideoPornFreezeConfig() interface{}
	SetVideoPornFreezeConfig(val interface{})
	VideoScanLimit() interface{}
	SetVideoScanLimit(val interface{})
	VideoScenes() interface{}
	SetVideoScenes(val interface{})
	VideoTerrorismFreezeConfig() interface{}
	SetVideoTerrorismFreezeConfig(val interface{})
	VideoVoiceAntispamFreezeConfig() interface{}
	SetVideoVoiceAntispamFreezeConfig(val interface{})
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
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDesc() *string
	FetchRosDependency() *[]*string
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

// The jsii proxy struct for RosOssStockTask
type jsiiProxy_RosOssStockTask struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosOssStockTask) AttrAudioAntispamFreezeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAudioAntispamFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrAudioAutoFreezeOpened() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAudioAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrAudioMaxSize() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAudioMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrAudioOpened() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAudioOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrAudioScanLimit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAudioScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrAudioScenes() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAudioScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrAutoFreezeType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoFreezeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrBizType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBizType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrBuckets() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBuckets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrCallbackId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCallbackId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrEndDate() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEndDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrImageAdFreezeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageAdFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrImageAutoFreezeOpened() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrImageLiveFreezeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageLiveFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrImageOpened() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrImagePornFreezeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImagePornFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrImageScanLimit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrImageScenes() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrImageTerrorismFreezeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrImageTerrorismFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrScanImageNoFileType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrScanImageNoFileType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrStartDate() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStartDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoAdFreezeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoAdFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoAutoFreezeOpened() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoFrameInterval() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoFrameInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoLiveFreezeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoLiveFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoMaxFrames() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoMaxFrames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoMaxSize() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoOpened() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoPornFreezeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoPornFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoScanLimit() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoScenes() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoTerrorismFreezeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoTerrorismFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AttrVideoVoiceAntispamFreezeConfig() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVideoVoiceAntispamFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AudioAntispamFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"audioAntispamFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AudioAutoFreezeOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"audioAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AudioMaxSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"audioMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AudioOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"audioOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AudioScanLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"audioScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AudioScenes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"audioScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) AutoFreezeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"autoFreezeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) BizType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"bizType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) Buckets() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"buckets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) CallbackId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"callbackId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) EndDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"endDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) ImageAdFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageAdFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) ImageAutoFreezeOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) ImageLiveFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageLiveFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) ImageOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) ImagePornFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imagePornFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) ImageScanLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) ImageScenes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) ImageTerrorismFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"imageTerrorismFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) OssStockTaskName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"ossStockTaskName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) ScanImageNoFileType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"scanImageNoFileType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) StartDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"startDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoAdFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoAdFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoAutoFreezeOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoFrameInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoFrameInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoLiveFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoLiveFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoMaxFrames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoMaxFrames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoMaxSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoPornFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoPornFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoScanLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoScenes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoTerrorismFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoTerrorismFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosOssStockTask) VideoVoiceAntispamFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"videoVoiceAntispamFreezeConfig",
		&returns,
	)
	return returns
}


func NewRosOssStockTask(scope alicloudroscdkcore.Construct, id *string, props *RosOssStockTaskProps, enableResourcePropertyConstraint *bool) RosOssStockTask {
	_init_.Initialize()

	if err := validateNewRosOssStockTaskParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosOssStockTask{}

	_jsii_.Create(
		"@alicloud/ros-cdk-aligreen.RosOssStockTask",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosOssStockTask_Override(r RosOssStockTask, scope alicloudroscdkcore.Construct, id *string, props *RosOssStockTaskProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-aligreen.RosOssStockTask",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetAudioAntispamFreezeConfig(val interface{}) {
	if err := j.validateSetAudioAntispamFreezeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"audioAntispamFreezeConfig",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetAudioAutoFreezeOpened(val interface{}) {
	if err := j.validateSetAudioAutoFreezeOpenedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"audioAutoFreezeOpened",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetAudioMaxSize(val interface{}) {
	if err := j.validateSetAudioMaxSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"audioMaxSize",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetAudioOpened(val interface{}) {
	if err := j.validateSetAudioOpenedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"audioOpened",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetAudioScanLimit(val interface{}) {
	if err := j.validateSetAudioScanLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"audioScanLimit",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetAudioScenes(val interface{}) {
	if err := j.validateSetAudioScenesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"audioScenes",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetAutoFreezeType(val interface{}) {
	if err := j.validateSetAutoFreezeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"autoFreezeType",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetBizType(val interface{}) {
	if err := j.validateSetBizTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"bizType",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetBuckets(val interface{}) {
	if err := j.validateSetBucketsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"buckets",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetCallbackId(val interface{}) {
	if err := j.validateSetCallbackIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"callbackId",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetEndDate(val interface{}) {
	if err := j.validateSetEndDateParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"endDate",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetImageAdFreezeConfig(val interface{}) {
	if err := j.validateSetImageAdFreezeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageAdFreezeConfig",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetImageAutoFreezeOpened(val interface{}) {
	if err := j.validateSetImageAutoFreezeOpenedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageAutoFreezeOpened",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetImageLiveFreezeConfig(val interface{}) {
	if err := j.validateSetImageLiveFreezeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageLiveFreezeConfig",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetImageOpened(val interface{}) {
	if err := j.validateSetImageOpenedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageOpened",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetImagePornFreezeConfig(val interface{}) {
	if err := j.validateSetImagePornFreezeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imagePornFreezeConfig",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetImageScanLimit(val interface{}) {
	if err := j.validateSetImageScanLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageScanLimit",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetImageScenes(val interface{}) {
	if err := j.validateSetImageScenesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageScenes",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetImageTerrorismFreezeConfig(val interface{}) {
	if err := j.validateSetImageTerrorismFreezeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"imageTerrorismFreezeConfig",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetOssStockTaskName(val interface{}) {
	if err := j.validateSetOssStockTaskNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"ossStockTaskName",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetScanImageNoFileType(val interface{}) {
	if err := j.validateSetScanImageNoFileTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scanImageNoFileType",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetStartDate(val interface{}) {
	if err := j.validateSetStartDateParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"startDate",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoAdFreezeConfig(val interface{}) {
	if err := j.validateSetVideoAdFreezeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoAdFreezeConfig",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoAutoFreezeOpened(val interface{}) {
	if err := j.validateSetVideoAutoFreezeOpenedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoAutoFreezeOpened",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoFrameInterval(val interface{}) {
	if err := j.validateSetVideoFrameIntervalParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoFrameInterval",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoLiveFreezeConfig(val interface{}) {
	if err := j.validateSetVideoLiveFreezeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoLiveFreezeConfig",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoMaxFrames(val interface{}) {
	if err := j.validateSetVideoMaxFramesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoMaxFrames",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoMaxSize(val interface{}) {
	if err := j.validateSetVideoMaxSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoMaxSize",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoOpened(val interface{}) {
	if err := j.validateSetVideoOpenedParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoOpened",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoPornFreezeConfig(val interface{}) {
	if err := j.validateSetVideoPornFreezeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoPornFreezeConfig",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoScanLimit(val interface{}) {
	if err := j.validateSetVideoScanLimitParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoScanLimit",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoScenes(val interface{}) {
	if err := j.validateSetVideoScenesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoScenes",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoTerrorismFreezeConfig(val interface{}) {
	if err := j.validateSetVideoTerrorismFreezeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoTerrorismFreezeConfig",
		val,
	)
}

func (j *jsiiProxy_RosOssStockTask)SetVideoVoiceAntispamFreezeConfig(val interface{}) {
	if err := j.validateSetVideoVoiceAntispamFreezeConfigParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"videoVoiceAntispamFreezeConfig",
		val,
	)
}

// Return whether the given object is a Construct.
func RosOssStockTask_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosOssStockTask_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-aligreen.RosOssStockTask",
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
func RosOssStockTask_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosOssStockTask_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-aligreen.RosOssStockTask",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosOssStockTask_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosOssStockTask_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-aligreen.RosOssStockTask",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosOssStockTask_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-aligreen.RosOssStockTask",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosOssStockTask) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosOssStockTask) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosOssStockTask) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosOssStockTask) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosOssStockTask) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosOssStockTask) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosOssStockTask) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosOssStockTask) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosOssStockTask) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosOssStockTask) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosOssStockTask) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosOssStockTask) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOssStockTask) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOssStockTask) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOssStockTask) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosOssStockTask) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosOssStockTask) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosOssStockTask) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOssStockTask) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosOssStockTask) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosOssStockTask) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosOssStockTask) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosOssStockTask) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOssStockTask) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosOssStockTask) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

