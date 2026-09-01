package alicloudroscdkess


// Properties for defining a `AlarmTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtask
type AlarmTaskProps struct {
	// Property alarmAction: The list of unique identifiers of the scaling rules that are associated with the event-triggered task.
	AlarmAction interface{} `field:"required" json:"alarmAction" yaml:"alarmAction"`
	// Property metricName: The name of the metric.
	//
	// Valid values of MetricName vary based on the value of
	// MetricType.
	// *   If you set MetricType to custom, the valid values of MetricName are your
	// custom metrics.
	// *   If you set MetricType to system, MetricName has the following valid values:
	// *   CpuUtilization: (ECS) the CPU utilization. Unit: %.
	// *   IntranetTx: the outbound traffic over the internal network from an ECS
	// instance. Unit: KB\/min.
	// *   IntranetRx: the inbound traffic over the internal network to an ECS instance.
	// Unit: KB\/min.
	// *   VpcInternetTx: the outbound traffic over the Internet from an ECS instance
	// that resides in a virtual private cloud (VPC). Unit: KB\/min.
	// *   VpcInternetRx: the inbound traffic over the Internet to an ECS instance that
	// resides in a VPC. Unit: KB\/min.
	// *   SystemDiskReadBps: the number of bytes read from the system disk that is used
	// by an ECS instance per second.
	// *   SystemDiskWriteBps: the number of bytes written to the system disk that is
	// used by an ECS instance per second.
	// *   SystemDiskReadOps: the number of read operations on the system disk that is
	// used by an ECS instance per second.
	// *   SystemDiskWriteOps: the number of write operations on the system disk that is
	// used by an ECS instance per second.
	// *   CpuUtilizationAgent: the CPU utilization of an agent. Unit: %.
	// *   GpuMemoryFreeUtilizationAgent: the percentage of idle GPU memory of an agent.
	// *   GpuMemoryUtilizationAgent: the GPU memory usage of an agent. Unit: %.
	// *   MemoryUtilization: the memory usage of an agent. Unit: %.
	// *   LoadAverage: the average system load of an agent.
	// *   TcpConnection: the total number of TCP connections of an agent.
	// *   TcpConnection: the number of established TCP connections of an agent.
	// *   PackagesNetOut: the number of packets that are sent by the internal network
	// interface controller (NIC) used by an agent.
	// *   PackagesNetIn: the number of packets that are received by the internal NIC
	// used by an agent.
	// *   EciPodCpuUtilization: the CPU utilization of an elastic container instance.
	// Unit: %.
	// *   EciPodMemoryUtilization: the memory usage of an elastic container instance.
	// Unit: %.
	MetricName interface{} `field:"required" json:"metricName" yaml:"metricName"`
	// Property scalingGroupId: The ID of the scaling group.
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property threshold: The threshold of a metric in the multi-metric alert rule.
	//
	// If the threshold is
	// reached the specified number of times within the specified period, a scaling rule
	// is executed.
	Threshold interface{} `field:"required" json:"threshold" yaml:"threshold"`
	// Property comparisonOperator: The operator that is used to compare the metric value and the metric threshold.
	//
	// Valid values:
	// *   If the metric value is greater than or equal to the metric threshold, set the
	// value to `>=`.
	// *   If the metric value is less than or equal to the metric threshold, set the
	// value to `<=`.
	// *   If the metric value is greater than the metric threshold, set the value to
	// `>`.
	// *   If the metric value is less than the metric threshold, set the value to `<`.
	ComparisonOperator interface{} `field:"optional" json:"comparisonOperator" yaml:"comparisonOperator"`
	// Property description: The description of the event-triggered task.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property dimensions: Dimensions.
	Dimensions interface{} `field:"optional" json:"dimensions" yaml:"dimensions"`
	// Property evaluationCount: The number of times that the threshold must be reached before a scaling rule can be executed.
	//
	// For example, if you set this parameter to 3, the average CPU
	// utilization must reach or exceed 80% three times in a row before a scaling rule
	// is triggered.
	EvaluationCount interface{} `field:"optional" json:"evaluationCount" yaml:"evaluationCount"`
	// Property groupId: The ID of the application group to which the custom metric belongs.
	//
	// This
	// parameter must be specified when MetricType is set to custom.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	// Property metricType: The type of the metric.
	//
	// Valid values:
	// *   system: system metrics of CloudMonitor
	// *   custom: custom metrics that are reported to CloudMonitor.
	MetricType interface{} `field:"optional" json:"metricType" yaml:"metricType"`
	// Property name: The name of the event-triggered task.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property period: The period of time during which statistics about the metric is collected.
	//
	// Unit:
	// seconds. Valid values:
	// *   15
	// *   60
	// *   120
	// *   300
	// *   900
	// > If your scaling group is of the ECS type and uses CloudMonitor metrics, you can
	// set Period to 15. In other cases, you can set Period to 60, 120, 300, or 900. In
	// most cases, the name of a CloudMonitor metric contains Agent.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property statistics: The method that is used to aggregate statistics for the metric.
	//
	// Valid values:
	// *   Average
	// *   Minimum
	// *   Maximum.
	Statistics interface{} `field:"optional" json:"statistics" yaml:"statistics"`
}

