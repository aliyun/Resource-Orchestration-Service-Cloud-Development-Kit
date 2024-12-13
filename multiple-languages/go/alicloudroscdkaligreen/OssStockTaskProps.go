package alicloudroscdkaligreen


// Properties for defining a `OssStockTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
type OssStockTaskProps struct {
	// Property buckets: The bucket configuration list of the oss stock scan task.
	//
	// Example:[{"Bucket":"bucket_01","Selected":true,"Prefixes":["img\/test_"],"Type":"exclude"}].
	Buckets interface{} `field:"required" json:"buckets" yaml:"buckets"`
	// Property startDate: The start time of the file upload time range represents the files uploaded after scanning this time point.Example: 2024-08-01 00:00:00 +0800.
	StartDate interface{} `field:"required" json:"startDate" yaml:"startDate"`
	// Property audioAntispamFreezeConfig: Voice auto freeze configuration.
	//
	// Example:{"Type": "suggestion", "Value" : "block" }. The results are frozen according to the suggestion in the speech detection results.
	AudioAntispamFreezeConfig interface{} `field:"optional" json:"audioAntispamFreezeConfig" yaml:"audioAntispamFreezeConfig"`
	// Property audioAutoFreezeOpened: Audio detection auto freeze switch.
	//
	// Value: true: automatically freeze, false: not automatically freeze.
	AudioAutoFreezeOpened interface{} `field:"optional" json:"audioAutoFreezeOpened" yaml:"audioAutoFreezeOpened"`
	// Property audioMaxSize: Resource property field representing the maximum size of a single audio.
	//
	// 1~2048MB, the default is 200MB, more than not detected.
	AudioMaxSize interface{} `field:"optional" json:"audioMaxSize" yaml:"audioMaxSize"`
	// Property audioOpened: Oss stock scan task detect audio.
	//
	// true: scan audio, false: do not scan audio.
	AudioOpened interface{} `field:"optional" json:"audioOpened" yaml:"audioOpened"`
	// Property audioScanLimit: The upper limit of voice scan in the oss stock scan task.
	//
	// The default value is 1000\/Bucket.
	AudioScanLimit interface{} `field:"optional" json:"audioScanLimit" yaml:"audioScanLimit"`
	// Property audioScenes: The audio detection scenarios included in the oss stock scan task.
	//
	// Set the value to ["antispam"].
	AudioScenes interface{} `field:"optional" json:"audioScenes" yaml:"audioScenes"`
	// Property autoFreezeType: Automatic freeze type.
	//
	// Value: acl: modify permissions, copy: Move files.
	AutoFreezeType interface{} `field:"optional" json:"autoFreezeType" yaml:"autoFreezeType"`
	// Property bizType: Business scenarios used by the oss stock scan task.
	BizType interface{} `field:"optional" json:"bizType" yaml:"bizType"`
	// Property callbackId: The ID of the primary key of the notification message bound to the oss stock scan task.
	CallbackId interface{} `field:"optional" json:"callbackId" yaml:"callbackId"`
	// Property endDate: The end time of the file upload time range indicates the scanning of files uploaded before this time point.
	//
	// Example: 2024-12-30 00:00:00 +0800.
	EndDate interface{} `field:"optional" json:"endDate" yaml:"endDate"`
	// Property imageAdFreezeConfig: Picture automatically freezes the configuration of ad scenes.
	//
	// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
	ImageAdFreezeConfig interface{} `field:"optional" json:"imageAdFreezeConfig" yaml:"imageAdFreezeConfig"`
	// Property imageAutoFreezeOpened: Picture detection auto freeze switch.
	//
	// Value: true: auto freeze, false: not auto freeze.
	ImageAutoFreezeOpened interface{} `field:"optional" json:"imageAutoFreezeOpened" yaml:"imageAutoFreezeOpened"`
	// Property imageLiveFreezeConfig: Picture automatic freezing live scene configuration.
	//
	// Example:{"Type":"suggestion","Value":"block,review"}. The result will be frozen according to the suggestion in the picture detection result.
	ImageLiveFreezeConfig interface{} `field:"optional" json:"imageLiveFreezeConfig" yaml:"imageLiveFreezeConfig"`
	// Property imageOpened: Oss stock scan task detect images.
	//
	// true: scan images, false: do not scan images.
	ImageOpened interface{} `field:"optional" json:"imageOpened" yaml:"imageOpened"`
	// Property imagePornFreezeConfig: Picture automatic freezing porn scene configuration.
	//
	// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
	ImagePornFreezeConfig interface{} `field:"optional" json:"imagePornFreezeConfig" yaml:"imagePornFreezeConfig"`
	// Property imageScanLimit: The upper limit for scanning images in the oss stock scan task.
	//
	// The default value is 10000 images per Bucket.
	ImageScanLimit interface{} `field:"optional" json:"imageScanLimit" yaml:"imageScanLimit"`
	// Property imageScenes: The image moderation scenario included in the oss stock scan task.Valid values: porn: pornography detection terrorism: terrorist content detection ad: ad violation detection live: undesirable scene detection.
	ImageScenes interface{} `field:"optional" json:"imageScenes" yaml:"imageScenes"`
	// Property imageTerrorismFreezeConfig: The picture automatically freezes the configuration of terrorism scenes.
	//
	// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the picture detection result.
	ImageTerrorismFreezeConfig interface{} `field:"optional" json:"imageTerrorismFreezeConfig" yaml:"imageTerrorismFreezeConfig"`
	// Property ossStockTaskName: The name of the oss stock scan task.
	OssStockTaskName interface{} `field:"optional" json:"ossStockTaskName" yaml:"ossStockTaskName"`
	// Property scanImageNoFileType: Whether the oss stock scan task detects images with file names without suffixes.
	//
	// true: Detect pictures with file names without suffixes, false: Do not detect pictures with file names without suffixes.
	ScanImageNoFileType interface{} `field:"optional" json:"scanImageNoFileType" yaml:"scanImageNoFileType"`
	// Property videoAdFreezeConfig: The video automatically freezes the configuration of ad scenarios.
	//
	// Example:{"Type":"suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
	VideoAdFreezeConfig interface{} `field:"optional" json:"videoAdFreezeConfig" yaml:"videoAdFreezeConfig"`
	// Property videoAutoFreezeOpened: Video detection auto freeze switch.
	//
	// Value: true: automatically freeze, false: not automatically freeze.
	VideoAutoFreezeOpened interface{} `field:"optional" json:"videoAutoFreezeOpened" yaml:"videoAutoFreezeOpened"`
	// Property videoFrameInterval: Resource attribute field representing the framing frequency.
	//
	// 1~60 seconds\/frame, the default is 1 second\/frame.
	VideoFrameInterval interface{} `field:"optional" json:"videoFrameInterval" yaml:"videoFrameInterval"`
	// Property videoLiveFreezeConfig: Video automatic freeze live scene configuration.
	//
	// Example:{"Type" : "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
	VideoLiveFreezeConfig interface{} `field:"optional" json:"videoLiveFreezeConfig" yaml:"videoLiveFreezeConfig"`
	// Property videoMaxFrames: A resource attribute field that represents the upper limit of a single video frame cut.
	//
	// 5 to 20000 frames, the default is 200 frames.
	VideoMaxFrames interface{} `field:"optional" json:"videoMaxFrames" yaml:"videoMaxFrames"`
	// Property videoMaxSize: Resource property field representing the maximum size of a single video.
	//
	// 1~2048MB, the default is 500MB, more than not detected.
	VideoMaxSize interface{} `field:"optional" json:"videoMaxSize" yaml:"videoMaxSize"`
	// Property videoOpened: Oss stock scan task detect video.
	//
	// true: scan video, false: do not scan video.
	VideoOpened interface{} `field:"optional" json:"videoOpened" yaml:"videoOpened"`
	// Property videoPornFreezeConfig: Video automatic freezing porn scene configuration.
	//
	// Example: {"Type": "suggestion", "Value": "block,review"}. The result will be frozen according to the suggestion in the video detection result.
	VideoPornFreezeConfig interface{} `field:"optional" json:"videoPornFreezeConfig" yaml:"videoPornFreezeConfig"`
	// Property videoScanLimit: The upper limit of video scanning in the oss stock scan task.
	//
	// The default value is 1000\/Bucket.
	VideoScanLimit interface{} `field:"optional" json:"videoScanLimit" yaml:"videoScanLimit"`
	// Property videoScenes: The video detection scenarios included in the oss stock scan task.
	//
	// porn: pornography detection
	// terrorism: terrorist content detection
	// ad: ad violation detection
	// live: undesirable scene detection
	// antispam: Video voice antispam.
	VideoScenes interface{} `field:"optional" json:"videoScenes" yaml:"videoScenes"`
	// Property videoTerrorismFreezeConfig: The video automatically freezes the configuration of terrorism scenes.
	//
	// Example:{"Type": "suggestion","Value":"block,review"}. The results will be frozen according to the suggestion in the video detection results.
	VideoTerrorismFreezeConfig interface{} `field:"optional" json:"videoTerrorismFreezeConfig" yaml:"videoTerrorismFreezeConfig"`
	// Property videoVoiceAntispamFreezeConfig: Voice auto freeze configuration in video.
	//
	// Example:{"Type": "suggestion", "Value" : "block" }. The results will be frozen according to the suggestion in the video detection results.
	VideoVoiceAntispamFreezeConfig interface{} `field:"optional" json:"videoVoiceAntispamFreezeConfig" yaml:"videoVoiceAntispamFreezeConfig"`
}

