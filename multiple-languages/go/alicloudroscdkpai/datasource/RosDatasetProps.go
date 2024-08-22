package datasource


// Properties for defining a `RosDataset`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
type RosDatasetProps struct {
	DatasetId interface{} `field:"required" json:"datasetId" yaml:"datasetId"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

