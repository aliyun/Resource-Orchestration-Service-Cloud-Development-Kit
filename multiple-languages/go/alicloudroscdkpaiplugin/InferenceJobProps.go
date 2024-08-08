package alicloudroscdkpaiplugin


// Properties for defining a `InferenceJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
type InferenceJobProps struct {
	// Property algorithm: The algorithm of inference job.
	Algorithm interface{} `field:"required" json:"algorithm" yaml:"algorithm"`
	// Property campaignId: The campaign id of inference job.
	CampaignId interface{} `field:"required" json:"campaignId" yaml:"campaignId"`
	// Property dataPath: The input data path of inference job.
	DataPath interface{} `field:"required" json:"dataPath" yaml:"dataPath"`
	// Property name: The name of inference job.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property targetPath: The output result path of inference job.
	TargetPath interface{} `field:"required" json:"targetPath" yaml:"targetPath"`
	// Property trainingJobId: The training job id of inference job.
	TrainingJobId interface{} `field:"required" json:"trainingJobId" yaml:"trainingJobId"`
	// Property userConfig: The user config of inference job.
	UserConfig interface{} `field:"required" json:"userConfig" yaml:"userConfig"`
	// Property remark: The remark of inference job.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	// Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes.
	WaitForInferenceFinish interface{} `field:"optional" json:"waitForInferenceFinish" yaml:"waitForInferenceFinish"`
}

