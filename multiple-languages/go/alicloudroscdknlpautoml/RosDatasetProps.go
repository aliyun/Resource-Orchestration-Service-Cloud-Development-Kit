package alicloudroscdknlpautoml


// Properties for defining a `RosDataset`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
type RosDatasetProps struct {
	DatasetName interface{} `field:"required" json:"datasetName" yaml:"datasetName"`
	ProjectId interface{} `field:"required" json:"projectId" yaml:"projectId"`
	DatasetRecord interface{} `field:"optional" json:"datasetRecord" yaml:"datasetRecord"`
}

