package datasource


// Properties for defining a `RosDatasets`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets
type RosDatasetsProps struct {
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	SourceId interface{} `field:"optional" json:"sourceId" yaml:"sourceId"`
}

