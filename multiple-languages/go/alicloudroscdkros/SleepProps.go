package alicloudroscdkros


// Properties for defining a `Sleep`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-sleep
type SleepProps struct {
	// Property createDuration: The number of seconds to wait before resource creation.
	CreateDuration interface{} `field:"optional" json:"createDuration" yaml:"createDuration"`
	// Property deleteDuration: The number of seconds to wait before resource deletion.
	DeleteDuration interface{} `field:"optional" json:"deleteDuration" yaml:"deleteDuration"`
	// Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
	Triggers interface{} `field:"optional" json:"triggers" yaml:"triggers"`
	// Property updateDuration: The number of seconds to wait before resource update.
	//
	// It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
	UpdateDuration interface{} `field:"optional" json:"updateDuration" yaml:"updateDuration"`
	// Property updateRollbackDuration: The number of seconds to wait before resource update rollback.
	//
	// It only triggers when stack update failed and resource was updated.
	UpdateRollbackDuration interface{} `field:"optional" json:"updateRollbackDuration" yaml:"updateRollbackDuration"`
}

