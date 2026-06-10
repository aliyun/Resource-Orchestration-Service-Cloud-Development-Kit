package alicloudroscdkdts


// Properties for defining a `JobMonitorRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-jobmonitorrule
type JobMonitorRuleProps struct {
	// Property dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
	DtsJobId interface{} `field:"required" json:"dtsJobId" yaml:"dtsJobId"`
	// Property type: Monitoring rules of type, the return value: - **delay**: delay alarm.
	//
	// - **error**: abnormal alarm.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property delayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
	DelayRuleTime interface{} `field:"optional" json:"delayRuleTime" yaml:"delayRuleTime"`
	// Property period: The statistical period of the incremental verification task.
	//
	// Unit: minutes.
	// > currently supported values are 1 minute, 3 minutes, 5 minutes and 30 minutes.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property phones: The alarm is triggered after notification of the contact phone number.
	Phones interface{} `field:"optional" json:"phones" yaml:"phones"`
	// Property state: Whether to enable monitoring rules, return value: - **Y**: enable.
	//
	// - **N**: Inactive.
	State interface{} `field:"optional" json:"state" yaml:"state"`
	// Property times: The number of cycles of the incremental verification task.
	Times interface{} `field:"optional" json:"times" yaml:"times"`
}

