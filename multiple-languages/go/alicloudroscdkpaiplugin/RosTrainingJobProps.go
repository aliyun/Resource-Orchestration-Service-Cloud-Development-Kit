package alicloudroscdkpaiplugin


// Properties for defining a `RosTrainingJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
type RosTrainingJobProps struct {
	Algorithm interface{} `field:"required" json:"algorithm" yaml:"algorithm"`
	CampaignId interface{} `field:"required" json:"campaignId" yaml:"campaignId"`
	DataPath interface{} `field:"required" json:"dataPath" yaml:"dataPath"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	UserConfig interface{} `field:"required" json:"userConfig" yaml:"userConfig"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	WaitForTrainingFinish interface{} `field:"optional" json:"waitForTrainingFinish" yaml:"waitForTrainingFinish"`
}

