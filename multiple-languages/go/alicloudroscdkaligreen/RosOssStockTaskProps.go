package alicloudroscdkaligreen


// Properties for defining a `RosOssStockTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-ossstocktask
type RosOssStockTaskProps struct {
	Buckets interface{} `field:"required" json:"buckets" yaml:"buckets"`
	StartDate interface{} `field:"required" json:"startDate" yaml:"startDate"`
	AudioAntispamFreezeConfig interface{} `field:"optional" json:"audioAntispamFreezeConfig" yaml:"audioAntispamFreezeConfig"`
	AudioAutoFreezeOpened interface{} `field:"optional" json:"audioAutoFreezeOpened" yaml:"audioAutoFreezeOpened"`
	AudioMaxSize interface{} `field:"optional" json:"audioMaxSize" yaml:"audioMaxSize"`
	AudioOpened interface{} `field:"optional" json:"audioOpened" yaml:"audioOpened"`
	AudioScanLimit interface{} `field:"optional" json:"audioScanLimit" yaml:"audioScanLimit"`
	AudioScenes interface{} `field:"optional" json:"audioScenes" yaml:"audioScenes"`
	AutoFreezeType interface{} `field:"optional" json:"autoFreezeType" yaml:"autoFreezeType"`
	BizType interface{} `field:"optional" json:"bizType" yaml:"bizType"`
	CallbackId interface{} `field:"optional" json:"callbackId" yaml:"callbackId"`
	EndDate interface{} `field:"optional" json:"endDate" yaml:"endDate"`
	ImageAdFreezeConfig interface{} `field:"optional" json:"imageAdFreezeConfig" yaml:"imageAdFreezeConfig"`
	ImageAutoFreezeOpened interface{} `field:"optional" json:"imageAutoFreezeOpened" yaml:"imageAutoFreezeOpened"`
	ImageLiveFreezeConfig interface{} `field:"optional" json:"imageLiveFreezeConfig" yaml:"imageLiveFreezeConfig"`
	ImageOpened interface{} `field:"optional" json:"imageOpened" yaml:"imageOpened"`
	ImagePornFreezeConfig interface{} `field:"optional" json:"imagePornFreezeConfig" yaml:"imagePornFreezeConfig"`
	ImageScanLimit interface{} `field:"optional" json:"imageScanLimit" yaml:"imageScanLimit"`
	ImageScenes interface{} `field:"optional" json:"imageScenes" yaml:"imageScenes"`
	ImageTerrorismFreezeConfig interface{} `field:"optional" json:"imageTerrorismFreezeConfig" yaml:"imageTerrorismFreezeConfig"`
	OssStockTaskName interface{} `field:"optional" json:"ossStockTaskName" yaml:"ossStockTaskName"`
	ScanImageNoFileType interface{} `field:"optional" json:"scanImageNoFileType" yaml:"scanImageNoFileType"`
	VideoAdFreezeConfig interface{} `field:"optional" json:"videoAdFreezeConfig" yaml:"videoAdFreezeConfig"`
	VideoAutoFreezeOpened interface{} `field:"optional" json:"videoAutoFreezeOpened" yaml:"videoAutoFreezeOpened"`
	VideoFrameInterval interface{} `field:"optional" json:"videoFrameInterval" yaml:"videoFrameInterval"`
	VideoLiveFreezeConfig interface{} `field:"optional" json:"videoLiveFreezeConfig" yaml:"videoLiveFreezeConfig"`
	VideoMaxFrames interface{} `field:"optional" json:"videoMaxFrames" yaml:"videoMaxFrames"`
	VideoMaxSize interface{} `field:"optional" json:"videoMaxSize" yaml:"videoMaxSize"`
	VideoOpened interface{} `field:"optional" json:"videoOpened" yaml:"videoOpened"`
	VideoPornFreezeConfig interface{} `field:"optional" json:"videoPornFreezeConfig" yaml:"videoPornFreezeConfig"`
	VideoScanLimit interface{} `field:"optional" json:"videoScanLimit" yaml:"videoScanLimit"`
	VideoScenes interface{} `field:"optional" json:"videoScenes" yaml:"videoScenes"`
	VideoTerrorismFreezeConfig interface{} `field:"optional" json:"videoTerrorismFreezeConfig" yaml:"videoTerrorismFreezeConfig"`
	VideoVoiceAntispamFreezeConfig interface{} `field:"optional" json:"videoVoiceAntispamFreezeConfig" yaml:"videoVoiceAntispamFreezeConfig"`
}

