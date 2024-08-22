package alicloudroscdkpaiplugin


// Properties for defining a `TrainingJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
type TrainingJobProps struct {
	// Property algorithm: The algorithm used in training.
	Algorithm interface{} `field:"required" json:"algorithm" yaml:"algorithm"`
	// Property campaignId: The related campaign Id.
	CampaignId interface{} `field:"required" json:"campaignId" yaml:"campaignId"`
	// Property dataPath: The training data path in OSS bucket.
	DataPath interface{} `field:"required" json:"dataPath" yaml:"dataPath"`
	// Property name: The name of training job.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
	UserConfig interface{} `field:"required" json:"userConfig" yaml:"userConfig"`
	// Property remark: The remark of training job.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	// Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes.
	WaitForTrainingFinish interface{} `field:"optional" json:"waitForTrainingFinish" yaml:"waitForTrainingFinish"`
}

