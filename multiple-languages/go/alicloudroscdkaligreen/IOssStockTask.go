package alicloudroscdkaligreen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkaligreen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `OssStockTask`.
type IOssStockTask interface {
	alicloudroscdkcore.IResource
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
	Props() *OssStockTaskProps
}

// The jsii proxy for IOssStockTask
type jsiiProxy_IOssStockTask struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOssStockTask) AttrAudioAntispamFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioAntispamFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrAudioAutoFreezeOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrAudioMaxSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrAudioOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrAudioScanLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrAudioScenes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAudioScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrAutoFreezeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoFreezeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrBizType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBizType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrBuckets() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBuckets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrCallbackId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallbackId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrEndDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrImageAdFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageAdFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrImageAutoFreezeOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrImageLiveFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageLiveFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrImageOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrImagePornFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImagePornFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrImageScanLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrImageScenes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrImageTerrorismFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageTerrorismFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrScanImageNoFileType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScanImageNoFileType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrStartDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStartDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoAdFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoAdFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoAutoFreezeOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoAutoFreezeOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoFrameInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoFrameInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoLiveFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoLiveFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoMaxFrames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoMaxFrames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoMaxSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoMaxSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoOpened() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoOpened",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoPornFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoPornFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoScanLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoScanLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoScenes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoScenes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoTerrorismFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoTerrorismFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) AttrVideoVoiceAntispamFreezeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVideoVoiceAntispamFreezeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssStockTask) Props() *OssStockTaskProps {
	var returns *OssStockTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

