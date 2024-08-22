package alicloudroscdkdevops


// Properties for defining a `PipelineRun`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
type PipelineRunProps struct {
	// Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
	OrganizationId interface{} `field:"required" json:"organizationId" yaml:"organizationId"`
	// Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
	PipelineId interface{} `field:"required" json:"pipelineId" yaml:"pipelineId"`
	// Property params: Pipeline operating parameters.
	//
	// Keys:
	// - **branchModeBranchs**: Branch mode runs branches.
	// - **envs**: Running variables.
	// - **runningBranchs**: Running branches whose key is the warehouse address.
	// - **runningTags**: Running tags whose key is the warehouse address.
	Params interface{} `field:"optional" json:"params" yaml:"params"`
	// Property sync: Whether to wait synchronously for the result of the pipeline execution.
	//
	// If you select true, the resource will not be created until the pipeline is complete. **Default is false.**
	// Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
	Sync interface{} `field:"optional" json:"sync" yaml:"sync"`
	// Property timeout: Maximum wait time for pipeline execution in minutes.
	//
	// This parameter need only be configured if Sync is set to true. **Default is 10.**
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
}

