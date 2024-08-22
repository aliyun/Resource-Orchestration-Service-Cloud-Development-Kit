package alicloudroscdkros


// Properties for defining a `WaitConditionHandle`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-waitconditionhandle
type WaitConditionHandleProps struct {
	// Property count: There are 3 preconditions that make Count taking effect: 1.Mode is set to Full. 2.Count >= 0. 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
	//
	// If Count takes effect, signals with id > Count will be deleted before update.
	// The default value is -1, which means no effect.
	// It is recommended to quote the same value with WaitCondition.Count.
	Count interface{} `field:"optional" json:"count" yaml:"count"`
	// Property mode: If set to Increment, all old signals will be deleted before update.
	//
	// In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
	//
	// If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
	//
	// Default to Full.
	Mode interface{} `field:"optional" json:"mode" yaml:"mode"`
}

