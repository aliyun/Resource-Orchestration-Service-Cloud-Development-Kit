package alicloudroscdkpai


// Properties for defining a `RosExperiment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
type RosExperimentProps struct {
	ArtifactUri interface{} `field:"required" json:"artifactUri" yaml:"artifactUri"`
	ExperimentName interface{} `field:"required" json:"experimentName" yaml:"experimentName"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	Accessibility interface{} `field:"optional" json:"accessibility" yaml:"accessibility"`
}

