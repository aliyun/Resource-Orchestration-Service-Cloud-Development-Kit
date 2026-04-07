package alicloudroscdkmps


// Properties for defining a `RosTranscodeJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-transcodejob
type RosTranscodeJobProps struct {
	Input interface{} `field:"required" json:"input" yaml:"input"`
	OutputBucket interface{} `field:"required" json:"outputBucket" yaml:"outputBucket"`
	Outputs interface{} `field:"required" json:"outputs" yaml:"outputs"`
	PipelineId interface{} `field:"required" json:"pipelineId" yaml:"pipelineId"`
	OutputLocation interface{} `field:"optional" json:"outputLocation" yaml:"outputLocation"`
}

