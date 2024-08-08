package alicloudroscdkpaidlc


// Properties for defining a `RosTensorboard`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-tensorboard
type RosTensorboardProps struct {
	DataSourceId interface{} `field:"required" json:"dataSourceId" yaml:"dataSourceId"`
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	DataSources interface{} `field:"optional" json:"dataSources" yaml:"dataSources"`
	DataSourceType interface{} `field:"optional" json:"dataSourceType" yaml:"dataSourceType"`
	JobId interface{} `field:"optional" json:"jobId" yaml:"jobId"`
	MaxRunningTimeMinutes interface{} `field:"optional" json:"maxRunningTimeMinutes" yaml:"maxRunningTimeMinutes"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	SourceId interface{} `field:"optional" json:"sourceId" yaml:"sourceId"`
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
	SummaryPath interface{} `field:"optional" json:"summaryPath" yaml:"summaryPath"`
	SummaryRelativePath interface{} `field:"optional" json:"summaryRelativePath" yaml:"summaryRelativePath"`
	Uri interface{} `field:"optional" json:"uri" yaml:"uri"`
}

