package alicloudroscdkcms


// Properties for defining a `RosSiteMonitor`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-sitemonitor
type RosSiteMonitorProps struct {
	Address interface{} `field:"required" json:"address" yaml:"address"`
	TaskName interface{} `field:"required" json:"taskName" yaml:"taskName"`
	TaskType interface{} `field:"required" json:"taskType" yaml:"taskType"`
	AlertIds interface{} `field:"optional" json:"alertIds" yaml:"alertIds"`
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	IspCities interface{} `field:"optional" json:"ispCities" yaml:"ispCities"`
	OptionsJson interface{} `field:"optional" json:"optionsJson" yaml:"optionsJson"`
}

