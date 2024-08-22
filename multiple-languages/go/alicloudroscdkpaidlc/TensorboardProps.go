package alicloudroscdkpaidlc


// Properties for defining a `Tensorboard`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-tensorboard
type TensorboardProps struct {
	// Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
	DataSourceId interface{} `field:"required" json:"dataSourceId" yaml:"dataSourceId"`
	// Property displayName: Tensorboard name.
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	// Property cpu: CPU nuclear number.
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	// Property dataSources: Data source configuration.
	DataSources interface{} `field:"optional" json:"dataSources" yaml:"dataSources"`
	// Property dataSourceType: The type of dataset.
	//
	// Values: OSS,NAS.
	DataSourceType interface{} `field:"optional" json:"dataSourceType" yaml:"dataSourceType"`
	// Property jobId: Task ID.How to get the task ID, see Listjobs.
	JobId interface{} `field:"optional" json:"jobId" yaml:"jobId"`
	// Property maxRunningTimeMinutes: The longest running time, the unit is: minutes.
	MaxRunningTimeMinutes interface{} `field:"optional" json:"maxRunningTimeMinutes" yaml:"maxRunningTimeMinutes"`
	// Property memory: Memory size, the unit is: GB.
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	// Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	// Property sourceId: Source ID.
	SourceId interface{} `field:"optional" json:"sourceId" yaml:"sourceId"`
	// Property sourceType: Source type.
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
	// Property summaryPath: Summary directory.
	SummaryPath interface{} `field:"optional" json:"summaryPath" yaml:"summaryPath"`
	// Property summaryRelativePath: Summary relative directory.
	//
	// Summary relative directory and Summary directory are mutually exclusive.
	SummaryRelativePath interface{} `field:"optional" json:"summaryRelativePath" yaml:"summaryRelativePath"`
	// Property uri: URI of a dataset: When DataSourceType is OSS, the format is: OSS: \/\/ [OSS-BUCET].
	//
	// [Endpoint]\/[Path].
	// When the DataSourceType is NAS, the format is: nas:\/\/ [nas-filesystem-id]. [Region]\/[PATH].
	Uri interface{} `field:"optional" json:"uri" yaml:"uri"`
}

