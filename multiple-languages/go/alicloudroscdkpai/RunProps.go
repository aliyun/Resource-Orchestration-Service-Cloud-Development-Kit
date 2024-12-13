package alicloudroscdkpai


// Properties for defining a `Run`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
type RunProps struct {
	// Property experimentId: Resource attribute field of the experiment ID to which Run belongs.
	ExperimentId interface{} `field:"required" json:"experimentId" yaml:"experimentId"`
	// Property runName: The name of the Run.
	RunName interface{} `field:"optional" json:"runName" yaml:"runName"`
	// Property sourceId: Attribute Resource field representing the source task ID.
	SourceId interface{} `field:"optional" json:"sourceId" yaml:"sourceId"`
	// Property sourceType: Resource attribute fields representing the source type.
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
}

