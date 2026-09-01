package alicloudroscdkmps


// Properties for defining a `TranscodeJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-transcodejob
type TranscodeJobProps struct {
	// Property input: Job input.
	//
	// > - In ApsaraVideo Media Processing APIs, the Object value must be URL-encoded
	// using UTF-8 encoding.
	// - The OSS region must match the region where MPS is deployed.
	Input interface{} `field:"required" json:"input" yaml:"input"`
	// Property outputBucket: The name of the OSS bucket where the output files are stored.
	OutputBucket interface{} `field:"required" json:"outputBucket" yaml:"outputBucket"`
	// Property outputs: The output configuration of the job.
	//
	// Consists of a list of Output objects, JSON array, with a maximum size of 30.
	Outputs interface{} `field:"required" json:"outputs" yaml:"outputs"`
	// Property pipelineId: The ID of the pipeline.
	PipelineId interface{} `field:"required" json:"pipelineId" yaml:"pipelineId"`
	// Property outputLocation: The OSS region (OSS Region) where the output bucket resides.
	//
	// - The OSS bucket must be in the same region as the ApsaraVideo Media Processing
	// service.
	// - Follows the OSS bucket definition.
	OutputLocation interface{} `field:"optional" json:"outputLocation" yaml:"outputLocation"`
}

