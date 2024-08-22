package alicloudroscdkarms


// Properties for defining a `DeliverTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
type DeliverTaskProps struct {
	// Property targetList: The list of the target.
	TargetList interface{} `field:"required" json:"targetList" yaml:"targetList"`
	// Property taskName: The name of the task.
	TaskName interface{} `field:"required" json:"taskName" yaml:"taskName"`
	// Property dataSourceId: The ID of the data source.
	DataSourceId interface{} `field:"optional" json:"dataSourceId" yaml:"dataSourceId"`
	// Property dataSourceName: The name of the data source.
	DataSourceName interface{} `field:"optional" json:"dataSourceName" yaml:"dataSourceName"`
	// Property externalLabel: The external label of the task.
	ExternalLabel interface{} `field:"optional" json:"externalLabel" yaml:"externalLabel"`
	// Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
	FilterList interface{} `field:"optional" json:"filterList" yaml:"filterList"`
	// Property filterType: Whether the data filtering adopts the whitelist mechanism.
	//
	// Default value: true.
	FilterType interface{} `field:"optional" json:"filterType" yaml:"filterType"`
	// Property taskDescription: The description of the task.
	TaskDescription interface{} `field:"optional" json:"taskDescription" yaml:"taskDescription"`
}

