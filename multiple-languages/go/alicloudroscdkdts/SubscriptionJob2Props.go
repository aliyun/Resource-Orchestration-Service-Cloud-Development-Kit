package alicloudroscdkdts


// Properties for defining a `SubscriptionJob2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
type SubscriptionJob2Props struct {
	// Property dbList: The objects for which you want to track data changes.
	DbList interface{} `field:"required" json:"dbList" yaml:"dbList"`
	// Property dtsJobName: The name of the DTS instance.
	DtsJobName interface{} `field:"required" json:"dtsJobName" yaml:"dtsJobName"`
	// Property sourceEndpoint: Source instance configuration.
	SourceEndpoint interface{} `field:"required" json:"sourceEndpoint" yaml:"sourceEndpoint"`
	// Property subscriptionInstance: Subscription instance configuration.
	SubscriptionInstance interface{} `field:"required" json:"subscriptionInstance" yaml:"subscriptionInstance"`
	// Property checkpoint: The start offset of incremental data migration or synchronization.
	//
	// This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
	Checkpoint interface{} `field:"optional" json:"checkpoint" yaml:"checkpoint"`
	// Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
	DedicatedClusterId interface{} `field:"optional" json:"dedicatedClusterId" yaml:"dedicatedClusterId"`
	// Property delayNotice: Specifies whether to monitor the task latency.
	//
	// Valid values: **true** and **false**.
	DelayNotice interface{} `field:"optional" json:"delayNotice" yaml:"delayNotice"`
	// Property delayPhone: The mobile numbers that receive latency-related alerts.
	//
	// Separate multiple mobile numbers with commas (,).
	// **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
	DelayPhone interface{} `field:"optional" json:"delayPhone" yaml:"delayPhone"`
	// Property delayRuleTime: The threshold for latency alerts.
	//
	// Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
	DelayRuleTime interface{} `field:"optional" json:"delayRuleTime" yaml:"delayRuleTime"`
	// Property dtsBisLabel: The environment tag of the DTS instance.
	//
	// Valid values: **normal** and **online**.
	DtsBisLabel interface{} `field:"optional" json:"dtsBisLabel" yaml:"dtsBisLabel"`
	// Property dtsInstanceId: The ID of the DTS instance.
	DtsInstanceId interface{} `field:"optional" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	// Property dtsJobId: The ID of the DTS task.
	DtsJobId interface{} `field:"optional" json:"dtsJobId" yaml:"dtsJobId"`
	// Property errorNotice: Specifies whether to monitor the task status.
	//
	// Valid values: **true** and **false**.
	ErrorNotice interface{} `field:"optional" json:"errorNotice" yaml:"errorNotice"`
	// Property errorPhone: The mobile numbers that receive status-related alerts.
	//
	// Separate multiple mobile numbers with commas (,).
	// **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
	ErrorPhone interface{} `field:"optional" json:"errorPhone" yaml:"errorPhone"`
	// Property reserve: The reserved parameter of DTS.
	//
	// You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
	Reserve interface{} `field:"optional" json:"reserve" yaml:"reserve"`
	// Property status: The status of the resource.
	//
	// Valid values:
	// - **Subscribing**: Start the task.
	// - **Suspending**: Suspend the task.
	// - **Stopping**: Stop the task.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property subscriptionDataType: Subscription data type.
	SubscriptionDataType interface{} `field:"optional" json:"subscriptionDataType" yaml:"subscriptionDataType"`
}

