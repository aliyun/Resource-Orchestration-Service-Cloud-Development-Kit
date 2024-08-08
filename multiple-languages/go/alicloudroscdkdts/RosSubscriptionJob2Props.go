package alicloudroscdkdts


// Properties for defining a `RosSubscriptionJob2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
type RosSubscriptionJob2Props struct {
	DbList interface{} `field:"required" json:"dbList" yaml:"dbList"`
	DtsJobName interface{} `field:"required" json:"dtsJobName" yaml:"dtsJobName"`
	SourceEndpoint interface{} `field:"required" json:"sourceEndpoint" yaml:"sourceEndpoint"`
	SubscriptionInstance interface{} `field:"required" json:"subscriptionInstance" yaml:"subscriptionInstance"`
	Checkpoint interface{} `field:"optional" json:"checkpoint" yaml:"checkpoint"`
	DedicatedClusterId interface{} `field:"optional" json:"dedicatedClusterId" yaml:"dedicatedClusterId"`
	DelayNotice interface{} `field:"optional" json:"delayNotice" yaml:"delayNotice"`
	DelayPhone interface{} `field:"optional" json:"delayPhone" yaml:"delayPhone"`
	DelayRuleTime interface{} `field:"optional" json:"delayRuleTime" yaml:"delayRuleTime"`
	DtsBisLabel interface{} `field:"optional" json:"dtsBisLabel" yaml:"dtsBisLabel"`
	DtsInstanceId interface{} `field:"optional" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	DtsJobId interface{} `field:"optional" json:"dtsJobId" yaml:"dtsJobId"`
	ErrorNotice interface{} `field:"optional" json:"errorNotice" yaml:"errorNotice"`
	ErrorPhone interface{} `field:"optional" json:"errorPhone" yaml:"errorPhone"`
	Reserve interface{} `field:"optional" json:"reserve" yaml:"reserve"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	SubscriptionDataType interface{} `field:"optional" json:"subscriptionDataType" yaml:"subscriptionDataType"`
}

