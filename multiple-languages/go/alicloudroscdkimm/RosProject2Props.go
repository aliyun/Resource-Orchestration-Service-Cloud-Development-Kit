package alicloudroscdkimm


// Properties for defining a `RosProject2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
type RosProject2Props struct {
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	DatasetMaxBindCount interface{} `field:"optional" json:"datasetMaxBindCount" yaml:"datasetMaxBindCount"`
	DatasetMaxEntityCount interface{} `field:"optional" json:"datasetMaxEntityCount" yaml:"datasetMaxEntityCount"`
	DatasetMaxFileCount interface{} `field:"optional" json:"datasetMaxFileCount" yaml:"datasetMaxFileCount"`
	DatasetMaxRelationCount interface{} `field:"optional" json:"datasetMaxRelationCount" yaml:"datasetMaxRelationCount"`
	DatasetMaxTotalFileSize interface{} `field:"optional" json:"datasetMaxTotalFileSize" yaml:"datasetMaxTotalFileSize"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ProjectMaxDatasetCount interface{} `field:"optional" json:"projectMaxDatasetCount" yaml:"projectMaxDatasetCount"`
	ServiceRole interface{} `field:"optional" json:"serviceRole" yaml:"serviceRole"`
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
}

