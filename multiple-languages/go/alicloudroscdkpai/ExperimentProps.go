package alicloudroscdkpai


// Properties for defining a `Experiment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
type ExperimentProps struct {
	// Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
	ArtifactUri interface{} `field:"required" json:"artifactUri" yaml:"artifactUri"`
	// Property experimentName: Name is the name of the experiment, unique in a namespace.
	ExperimentName interface{} `field:"required" json:"experimentName" yaml:"experimentName"`
	// Property workspaceId: WorkspaceId is the workspace id which contains the experiment.
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	// Property accessibility: Experimental Visibility.
	Accessibility interface{} `field:"optional" json:"accessibility" yaml:"accessibility"`
}

