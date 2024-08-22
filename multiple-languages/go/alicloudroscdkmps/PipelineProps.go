package alicloudroscdkmps


// Properties for defining a `Pipeline`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline
type PipelineProps struct {
	// Property name: The new name of the MPS queue.
	//
	// The value can contain letters, digits, and special
	// characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
	// start with a special character.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic.
	//
	// For more information, see NotifyConfig.
	NotifyConfig interface{} `field:"optional" json:"notifyConfig" yaml:"notifyConfig"`
	// Property role: The role that is assigned to the current RAM user.
	//
	// To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
	Role interface{} `field:"optional" json:"role" yaml:"role"`
	// Property speed: Pipe type.
	//
	// Value:
	// Boost: Double-speed transcoding
	// Standard: ordinary pipe
	// NarrowBandHDV2: Narrowband HD 2.0
	// AIVideoCover: Smart Screenshots
	// AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
	// Default: Standard.
	Speed interface{} `field:"optional" json:"speed" yaml:"speed"`
	// Property speedLevel: Speed level.
	SpeedLevel interface{} `field:"optional" json:"speedLevel" yaml:"speedLevel"`
	// Property state: The new state of the MPS queue.
	//
	// Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
	// Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
	State interface{} `field:"optional" json:"state" yaml:"state"`
}

