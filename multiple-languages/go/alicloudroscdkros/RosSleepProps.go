package alicloudroscdkros


// Properties for defining a `RosSleep`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-sleep
type RosSleepProps struct {
	CreateDuration interface{} `field:"optional" json:"createDuration" yaml:"createDuration"`
	DeleteDuration interface{} `field:"optional" json:"deleteDuration" yaml:"deleteDuration"`
	Triggers interface{} `field:"optional" json:"triggers" yaml:"triggers"`
	UpdateDuration interface{} `field:"optional" json:"updateDuration" yaml:"updateDuration"`
	UpdateRollbackDuration interface{} `field:"optional" json:"updateRollbackDuration" yaml:"updateRollbackDuration"`
}

