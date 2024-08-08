package alicloudroscdkga


// Properties for defining a `RosApplicationMonitor`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
type RosApplicationMonitorProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	Address interface{} `field:"required" json:"address" yaml:"address"`
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
	TaskName interface{} `field:"required" json:"taskName" yaml:"taskName"`
	DetectEnable interface{} `field:"optional" json:"detectEnable" yaml:"detectEnable"`
	DetectThreshold interface{} `field:"optional" json:"detectThreshold" yaml:"detectThreshold"`
	DetectTimes interface{} `field:"optional" json:"detectTimes" yaml:"detectTimes"`
	OptionsJson interface{} `field:"optional" json:"optionsJson" yaml:"optionsJson"`
	SilenceTime interface{} `field:"optional" json:"silenceTime" yaml:"silenceTime"`
}

