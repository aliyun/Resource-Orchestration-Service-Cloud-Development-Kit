package alicloudroscdkpai


// Properties for defining a `RosModelVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
type RosModelVersionProps struct {
	ModelId interface{} `field:"required" json:"modelId" yaml:"modelId"`
	Uri interface{} `field:"required" json:"uri" yaml:"uri"`
	ApprovalStatus interface{} `field:"optional" json:"approvalStatus" yaml:"approvalStatus"`
	ExtraInfo interface{} `field:"optional" json:"extraInfo" yaml:"extraInfo"`
	FormatType interface{} `field:"optional" json:"formatType" yaml:"formatType"`
	FrameworkType interface{} `field:"optional" json:"frameworkType" yaml:"frameworkType"`
	InferenceSpec interface{} `field:"optional" json:"inferenceSpec" yaml:"inferenceSpec"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	Metrics interface{} `field:"optional" json:"metrics" yaml:"metrics"`
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	SourceId interface{} `field:"optional" json:"sourceId" yaml:"sourceId"`
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
	TrainingSpec interface{} `field:"optional" json:"trainingSpec" yaml:"trainingSpec"`
	VersionDescription interface{} `field:"optional" json:"versionDescription" yaml:"versionDescription"`
	VersionName interface{} `field:"optional" json:"versionName" yaml:"versionName"`
}

