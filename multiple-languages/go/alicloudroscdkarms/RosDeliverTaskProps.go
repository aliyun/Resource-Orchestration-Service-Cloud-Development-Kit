package alicloudroscdkarms


// Properties for defining a `RosDeliverTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
type RosDeliverTaskProps struct {
	TargetList interface{} `field:"required" json:"targetList" yaml:"targetList"`
	TaskName interface{} `field:"required" json:"taskName" yaml:"taskName"`
	DataSourceId interface{} `field:"optional" json:"dataSourceId" yaml:"dataSourceId"`
	DataSourceName interface{} `field:"optional" json:"dataSourceName" yaml:"dataSourceName"`
	ExternalLabel interface{} `field:"optional" json:"externalLabel" yaml:"externalLabel"`
	FilterList interface{} `field:"optional" json:"filterList" yaml:"filterList"`
	FilterType interface{} `field:"optional" json:"filterType" yaml:"filterType"`
	TaskDescription interface{} `field:"optional" json:"taskDescription" yaml:"taskDescription"`
}

