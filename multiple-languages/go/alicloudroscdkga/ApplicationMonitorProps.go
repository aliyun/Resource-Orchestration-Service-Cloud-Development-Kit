package alicloudroscdkga


// Properties for defining a `ApplicationMonitor`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
type ApplicationMonitorProps struct {
	// Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property address: The URL or IP address that you want to probe.
	Address interface{} `field:"required" json:"address" yaml:"address"`
	// Property listenerId: The ID of the listener on which you want to perform the origin probing task.
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
	// Property taskName: The name of the origin probing task.
	//
	// The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
	TaskName interface{} `field:"required" json:"taskName" yaml:"taskName"`
	// Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
	DetectEnable interface{} `field:"optional" json:"detectEnable" yaml:"detectEnable"`
	// Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature.
	//
	// Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
	DetectThreshold interface{} `field:"optional" json:"detectThreshold" yaml:"detectThreshold"`
	// Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered.
	//
	// Valid values: 1 to 20. Default value: 1.
	DetectTimes interface{} `field:"optional" json:"detectTimes" yaml:"detectTimes"`
	// Property optionsJson: The extended options of the listener protocol that is used by the origin probing task.
	//
	// The options vary based on the listener protocol.
	OptionsJson interface{} `field:"optional" json:"optionsJson" yaml:"optionsJson"`
	// Property silenceTime: The silence period of the automatic diagnostics feature.
	//
	// This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
	SilenceTime interface{} `field:"optional" json:"silenceTime" yaml:"silenceTime"`
}

