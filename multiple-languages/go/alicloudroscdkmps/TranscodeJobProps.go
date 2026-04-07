package alicloudroscdkmps


// Properties for defining a `TranscodeJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-transcodejob
type TranscodeJobProps struct {
	// Property input: The input configuration of the job.
	//
	// For more information, see Input details.
	Input interface{} `field:"required" json:"input" yaml:"input"`
	// Property outputBucket: The name of the OSS bucket where the output files are stored.
	OutputBucket interface{} `field:"required" json:"outputBucket" yaml:"outputBucket"`
	// Property outputs: The output configuration of the job.
	//
	// Consists of a list of Output objects, JSON array, with a maximum size of 30.
	Outputs interface{} `field:"required" json:"outputs" yaml:"outputs"`
	// Property pipelineId: The ID of the pipeline.
	PipelineId interface{} `field:"required" json:"pipelineId" yaml:"pipelineId"`
	// Property outputLocation: The region of the OSS bucket where the output files are stored.
	OutputLocation interface{} `field:"optional" json:"outputLocation" yaml:"outputLocation"`
}

