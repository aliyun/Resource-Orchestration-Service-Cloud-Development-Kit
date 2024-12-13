import * as ros from '@alicloud/ros-cdk-core';
import { RosOssStockTask } from './aligreen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOssStockTask as OssStockTaskProperty };

/**
 * Properties for defining a `OssStockTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
 */
export interface OssStockTaskProps {

    /**
     * Property buckets: The bucket configuration list of the oss stock scan task. Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img\/test_"],"Type":"exclude"}].
     */
    readonly buckets: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800
     */
    readonly startDate: string | ros.IResolvable;

    /**
     * Property audioAntispamFreezeConfig: Voice auto freeze configuration. Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
     */
    readonly audioAntispamFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property audioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    readonly audioAutoFreezeOpened?: boolean | ros.IResolvable;

    /**
     * Property audioMaxSize: Resource property field representing the maximum size of a single audio. 1~2048MB, the default is 200MB, more than not detected.
     */
    readonly audioMaxSize?: number | ros.IResolvable;

    /**
     * Property audioOpened: Oss stock scan task detect audio. true: scan audio, false: do not scan audio.
     */
    readonly audioOpened?: boolean | ros.IResolvable;

    /**
     * Property audioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000\/Bucket.
     */
    readonly audioScanLimit?: number | ros.IResolvable;

    /**
     * Property audioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to ["antispam"].
     */
    readonly audioScenes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property autoFreezeType: Automatic freeze type. Value: acl: modify permissions, copy: Move files.
     */
    readonly autoFreezeType?: string | ros.IResolvable;

    /**
     * Property bizType: Business scenarios used by the oss stock scan task.
     */
    readonly bizType?: string | ros.IResolvable;

    /**
     * Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
     */
    readonly callbackId?: number | ros.IResolvable;

    /**
     * Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point. Example: 2024-12-30 00:00:00 +0800
     */
    readonly endDate?: string | ros.IResolvable;

    /**
     * Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    readonly imageAdFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property imageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
     */
    readonly imageAutoFreezeOpened?: boolean | ros.IResolvable;

    /**
     * Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration. Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    readonly imageLiveFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property imageOpened: Oss stock scan task detect images. true: scan images, false: do not scan images.
     */
    readonly imageOpened?: boolean | ros.IResolvable;

    /**
     * Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    readonly imagePornFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property imageScanLimit: The upper limit for scanning images in the oss stock scan task. The default value is 10000 images per Bucket.
     */
    readonly imageScanLimit?: number | ros.IResolvable;

    /**
     * Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values:
     * porn: pornography detection
     * terrorism: terrorist content detection
     * ad: ad violation detection
     * live: undesirable scene detection.
     */
    readonly imageScenes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
     */
    readonly imageTerrorismFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property ossStockTaskName: The name of the oss stock scan task.
     */
    readonly ossStockTaskName?: string | ros.IResolvable;

    /**
     * Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes. true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
     */
    readonly scanImageNoFileType?: boolean | ros.IResolvable;

    /**
     * Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios. Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
     */
    readonly videoAdFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property videoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    readonly videoAutoFreezeOpened?: boolean | ros.IResolvable;

    /**
     * Property videoFrameInterval: Resource attribute field representing the framing frequency. 1~60 seconds\/frame, the default is 1 second\/frame.
     */
    readonly videoFrameInterval?: number | ros.IResolvable;

    /**
     * Property videoLiveFreezeConfig: Video automatic freeze live scene configuration. Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
     */
    readonly videoLiveFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut. 5 to 20000 frames, the default is 200 frames.
     */
    readonly videoMaxFrames?: number | ros.IResolvable;

    /**
     * Property videoMaxSize: Resource property field representing the maximum size of a single video. 1~2048MB, the default is 500MB, more than not detected.
     */
    readonly videoMaxSize?: number | ros.IResolvable;

    /**
     * Property videoOpened: Oss stock scan task detect video. true: scan video, false: do not scan video.
     */
    readonly videoOpened?: boolean | ros.IResolvable;

    /**
     * Property videoPornFreezeConfig: Video automatic freezing porn scene configuration. Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
     */
    readonly videoPornFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property videoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000\/Bucket.
     */
    readonly videoScanLimit?: number | ros.IResolvable;

    /**
     * Property videoScenes: The video detection scenarios included in the oss stock scan task.
     * porn: pornography detection
     * terrorism: terrorist content detection
     * ad: ad violation detection
     * live: undesirable scene detection
     * antispam: Video voice antispam.
     */
    readonly videoScenes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes. Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
     */
    readonly videoTerrorismFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video. Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
     */
    readonly videoVoiceAntispamFreezeConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Aligreen::OssStockTask`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOssStockTask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
 */
export class OssStockTask extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: OssStockTaskProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AudioAntispamFreezeConfig: Voice auto freeze configuration.
     */
    public readonly attrAudioAntispamFreezeConfig: ros.IResolvable;

    /**
     * Attribute AudioAutoFreezeOpened: Audio detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    public readonly attrAudioAutoFreezeOpened: ros.IResolvable;

    /**
     * Attribute AudioMaxSize: Resource property field representing the maximum size of a single audio.
     */
    public readonly attrAudioMaxSize: ros.IResolvable;

    /**
     * Attribute AudioOpened: oss stock scan task detect audio.
     */
    public readonly attrAudioOpened: ros.IResolvable;

    /**
     * Attribute AudioScanLimit: The upper limit of voice scan in the oss stock scan task. The default value is 1000/Bucket.
     */
    public readonly attrAudioScanLimit: ros.IResolvable;

    /**
     * Attribute AudioScenes: The audio detection scenarios included in the oss stock scan task. Set the value to antispam.
     */
    public readonly attrAudioScenes: ros.IResolvable;

    /**
     * Attribute AutoFreezeType: Automatic freeze type.
     */
    public readonly attrAutoFreezeType: ros.IResolvable;

    /**
     * Attribute BizType: Business scenarios used by the oss stock scan task.
     */
    public readonly attrBizType: ros.IResolvable;

    /**
     * Attribute Buckets: The bucket configuration list of the oss stock scan task.
     */
    public readonly attrBuckets: ros.IResolvable;

    /**
     * Attribute CallbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
     */
    public readonly attrCallbackId: ros.IResolvable;

    /**
     * Attribute EndDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
     */
    public readonly attrEndDate: ros.IResolvable;

    /**
     * Attribute ImageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
     */
    public readonly attrImageAdFreezeConfig: ros.IResolvable;

    /**
     * Attribute ImageAutoFreezeOpened: Picture detection auto freeze switch. Value: true: auto freeze, false: not auto freeze.
     */
    public readonly attrImageAutoFreezeOpened: ros.IResolvable;

    /**
     * Attribute ImageLiveFreezeConfig: Picture automatic freezing live scene configuration.
     */
    public readonly attrImageLiveFreezeConfig: ros.IResolvable;

    /**
     * Attribute ImageOpened: oss stock scan task detect images.
     */
    public readonly attrImageOpened: ros.IResolvable;

    /**
     * Attribute ImagePornFreezeConfig: Picture automatic freezing porn scene configuration.
     */
    public readonly attrImagePornFreezeConfig: ros.IResolvable;

    /**
     * Attribute ImageScanLimit: The upper limit for scanning images in the oss stock scan task.
     */
    public readonly attrImageScanLimit: ros.IResolvable;

    /**
     * Attribute ImageScenes: The image moderation scenario included in the oss stock scan task.
     */
    public readonly attrImageScenes: ros.IResolvable;

    /**
     * Attribute ImageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
     */
    public readonly attrImageTerrorismFreezeConfig: ros.IResolvable;

    /**
     * Attribute ScanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
     */
    public readonly attrScanImageNoFileType: ros.IResolvable;

    /**
     * Attribute StartDate: The start time of the file upload time range represents the files uploaded after scanning this time point.
     */
    public readonly attrStartDate: ros.IResolvable;

    /**
     * Attribute VideoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
     */
    public readonly attrVideoAdFreezeConfig: ros.IResolvable;

    /**
     * Attribute VideoAutoFreezeOpened: Video detection auto freeze switch. Value: true: automatically freeze, false: not automatically freeze.
     */
    public readonly attrVideoAutoFreezeOpened: ros.IResolvable;

    /**
     * Attribute VideoFrameInterval: Resource attribute field representing the framing frequency.
     */
    public readonly attrVideoFrameInterval: ros.IResolvable;

    /**
     * Attribute VideoLiveFreezeConfig: Video automatic freeze live scene configuration.
     */
    public readonly attrVideoLiveFreezeConfig: ros.IResolvable;

    /**
     * Attribute VideoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
     */
    public readonly attrVideoMaxFrames: ros.IResolvable;

    /**
     * Attribute VideoMaxSize: Resource property field representing the maximum size of a single video.
     */
    public readonly attrVideoMaxSize: ros.IResolvable;

    /**
     * Attribute VideoOpened: oss stock scan task detect video.
     */
    public readonly attrVideoOpened: ros.IResolvable;

    /**
     * Attribute VideoPornFreezeConfig: Video automatic freezing porn scene configuration.
     */
    public readonly attrVideoPornFreezeConfig: ros.IResolvable;

    /**
     * Attribute VideoScanLimit: The upper limit of video scanning in the oss stock scan task. The default value is 1000/Bucket.
     */
    public readonly attrVideoScanLimit: ros.IResolvable;

    /**
     * Attribute VideoScenes: The video detection scenarios included in the oss stock scan task.
     */
    public readonly attrVideoScenes: ros.IResolvable;

    /**
     * Attribute VideoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
     */
    public readonly attrVideoTerrorismFreezeConfig: ros.IResolvable;

    /**
     * Attribute VideoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
     */
    public readonly attrVideoVoiceAntispamFreezeConfig: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OssStockTaskProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosOssStockTask = new RosOssStockTask(this, id,  {
            imageOpened: props.imageOpened,
            audioAntispamFreezeConfig: props.audioAntispamFreezeConfig,
            ossStockTaskName: props.ossStockTaskName,
            scanImageNoFileType: props.scanImageNoFileType,
            audioOpened: props.audioOpened,
            buckets: props.buckets,
            startDate: props.startDate,
            imageLiveFreezeConfig: props.imageLiveFreezeConfig,
            imageAutoFreezeOpened: props.imageAutoFreezeOpened,
            autoFreezeType: props.autoFreezeType,
            imageScenes: props.imageScenes,
            audioMaxSize: props.audioMaxSize,
            videoTerrorismFreezeConfig: props.videoTerrorismFreezeConfig,
            videoOpened: props.videoOpened,
            imageTerrorismFreezeConfig: props.imageTerrorismFreezeConfig,
            callbackId: props.callbackId,
            imageScanLimit: props.imageScanLimit,
            bizType: props.bizType,
            imageAdFreezeConfig: props.imageAdFreezeConfig,
            audioScenes: props.audioScenes,
            videoFrameInterval: props.videoFrameInterval,
            endDate: props.endDate,
            imagePornFreezeConfig: props.imagePornFreezeConfig,
            videoLiveFreezeConfig: props.videoLiveFreezeConfig,
            audioAutoFreezeOpened: props.audioAutoFreezeOpened,
            videoScanLimit: props.videoScanLimit,
            videoPornFreezeConfig: props.videoPornFreezeConfig,
            videoAutoFreezeOpened: props.videoAutoFreezeOpened,
            videoVoiceAntispamFreezeConfig: props.videoVoiceAntispamFreezeConfig,
            audioScanLimit: props.audioScanLimit,
            videoScenes: props.videoScenes,
            videoAdFreezeConfig: props.videoAdFreezeConfig,
            videoMaxFrames: props.videoMaxFrames,
            videoMaxSize: props.videoMaxSize,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOssStockTask;
        this.attrAudioAntispamFreezeConfig = rosOssStockTask.attrAudioAntispamFreezeConfig;
        this.attrAudioAutoFreezeOpened = rosOssStockTask.attrAudioAutoFreezeOpened;
        this.attrAudioMaxSize = rosOssStockTask.attrAudioMaxSize;
        this.attrAudioOpened = rosOssStockTask.attrAudioOpened;
        this.attrAudioScanLimit = rosOssStockTask.attrAudioScanLimit;
        this.attrAudioScenes = rosOssStockTask.attrAudioScenes;
        this.attrAutoFreezeType = rosOssStockTask.attrAutoFreezeType;
        this.attrBizType = rosOssStockTask.attrBizType;
        this.attrBuckets = rosOssStockTask.attrBuckets;
        this.attrCallbackId = rosOssStockTask.attrCallbackId;
        this.attrEndDate = rosOssStockTask.attrEndDate;
        this.attrImageAdFreezeConfig = rosOssStockTask.attrImageAdFreezeConfig;
        this.attrImageAutoFreezeOpened = rosOssStockTask.attrImageAutoFreezeOpened;
        this.attrImageLiveFreezeConfig = rosOssStockTask.attrImageLiveFreezeConfig;
        this.attrImageOpened = rosOssStockTask.attrImageOpened;
        this.attrImagePornFreezeConfig = rosOssStockTask.attrImagePornFreezeConfig;
        this.attrImageScanLimit = rosOssStockTask.attrImageScanLimit;
        this.attrImageScenes = rosOssStockTask.attrImageScenes;
        this.attrImageTerrorismFreezeConfig = rosOssStockTask.attrImageTerrorismFreezeConfig;
        this.attrScanImageNoFileType = rosOssStockTask.attrScanImageNoFileType;
        this.attrStartDate = rosOssStockTask.attrStartDate;
        this.attrVideoAdFreezeConfig = rosOssStockTask.attrVideoAdFreezeConfig;
        this.attrVideoAutoFreezeOpened = rosOssStockTask.attrVideoAutoFreezeOpened;
        this.attrVideoFrameInterval = rosOssStockTask.attrVideoFrameInterval;
        this.attrVideoLiveFreezeConfig = rosOssStockTask.attrVideoLiveFreezeConfig;
        this.attrVideoMaxFrames = rosOssStockTask.attrVideoMaxFrames;
        this.attrVideoMaxSize = rosOssStockTask.attrVideoMaxSize;
        this.attrVideoOpened = rosOssStockTask.attrVideoOpened;
        this.attrVideoPornFreezeConfig = rosOssStockTask.attrVideoPornFreezeConfig;
        this.attrVideoScanLimit = rosOssStockTask.attrVideoScanLimit;
        this.attrVideoScenes = rosOssStockTask.attrVideoScenes;
        this.attrVideoTerrorismFreezeConfig = rosOssStockTask.attrVideoTerrorismFreezeConfig;
        this.attrVideoVoiceAntispamFreezeConfig = rosOssStockTask.attrVideoVoiceAntispamFreezeConfig;
    }
}
