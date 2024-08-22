package alicloudroscdkpai


// Properties for defining a `RosDataset`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
type RosDatasetProps struct {
	DatasetName interface{} `field:"required" json:"datasetName" yaml:"datasetName"`
	DataSourceType interface{} `field:"required" json:"dataSourceType" yaml:"dataSourceType"`
	Property interface{} `field:"required" json:"property" yaml:"property"`
	Uri interface{} `field:"required" json:"uri" yaml:"uri"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	Accessibility interface{} `field:"optional" json:"accessibility" yaml:"accessibility"`
	DataType interface{} `field:"optional" json:"dataType" yaml:"dataType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	SourceId interface{} `field:"optional" json:"sourceId" yaml:"sourceId"`
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
}

