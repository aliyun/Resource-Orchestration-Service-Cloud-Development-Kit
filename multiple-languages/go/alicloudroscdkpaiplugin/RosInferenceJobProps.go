package alicloudroscdkpaiplugin


// Properties for defining a `RosInferenceJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
type RosInferenceJobProps struct {
	Algorithm interface{} `field:"required" json:"algorithm" yaml:"algorithm"`
	CampaignId interface{} `field:"required" json:"campaignId" yaml:"campaignId"`
	DataPath interface{} `field:"required" json:"dataPath" yaml:"dataPath"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	TargetPath interface{} `field:"required" json:"targetPath" yaml:"targetPath"`
	TrainingJobId interface{} `field:"required" json:"trainingJobId" yaml:"trainingJobId"`
	UserConfig interface{} `field:"required" json:"userConfig" yaml:"userConfig"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	WaitForInferenceFinish interface{} `field:"optional" json:"waitForInferenceFinish" yaml:"waitForInferenceFinish"`
}

