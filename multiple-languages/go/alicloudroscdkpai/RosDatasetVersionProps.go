package alicloudroscdkpai


// Properties for defining a `RosDatasetVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-datasetversion
type RosDatasetVersionProps struct {
	DatasetId interface{} `field:"required" json:"datasetId" yaml:"datasetId"`
	DataSourceType interface{} `field:"required" json:"dataSourceType" yaml:"dataSourceType"`
	Property interface{} `field:"required" json:"property" yaml:"property"`
	Uri interface{} `field:"required" json:"uri" yaml:"uri"`
	DataCount interface{} `field:"optional" json:"dataCount" yaml:"dataCount"`
	DataSize interface{} `field:"optional" json:"dataSize" yaml:"dataSize"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	SourceId interface{} `field:"optional" json:"sourceId" yaml:"sourceId"`
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
}

