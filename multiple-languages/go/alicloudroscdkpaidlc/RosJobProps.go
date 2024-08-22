package alicloudroscdkpaidlc


// Properties for defining a `RosJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-job
type RosJobProps struct {
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	JobSpecs interface{} `field:"required" json:"jobSpecs" yaml:"jobSpecs"`
	JobType interface{} `field:"required" json:"jobType" yaml:"jobType"`
	UserCommand interface{} `field:"required" json:"userCommand" yaml:"userCommand"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	CodeSource interface{} `field:"optional" json:"codeSource" yaml:"codeSource"`
	DataSources interface{} `field:"optional" json:"dataSources" yaml:"dataSources"`
	Envs interface{} `field:"optional" json:"envs" yaml:"envs"`
	JobMaxRunningTimeMinutes interface{} `field:"optional" json:"jobMaxRunningTimeMinutes" yaml:"jobMaxRunningTimeMinutes"`
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	ResourceId interface{} `field:"optional" json:"resourceId" yaml:"resourceId"`
	Settings interface{} `field:"optional" json:"settings" yaml:"settings"`
	SuccessPolicy interface{} `field:"optional" json:"successPolicy" yaml:"successPolicy"`
	ThirdpartyLibDir interface{} `field:"optional" json:"thirdpartyLibDir" yaml:"thirdpartyLibDir"`
	ThirdpartyLibs interface{} `field:"optional" json:"thirdpartyLibs" yaml:"thirdpartyLibs"`
	UserVpc interface{} `field:"optional" json:"userVpc" yaml:"userVpc"`
}

