package alicloudroscdkdms


// Properties for defining a `RosScriptExecution`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-scriptexecution
type RosScriptExecutionProps struct {
	DbId interface{} `field:"required" json:"dbId" yaml:"dbId"`
	Logic interface{} `field:"required" json:"logic" yaml:"logic"`
	Script interface{} `field:"required" json:"script" yaml:"script"`
	Tid interface{} `field:"optional" json:"tid" yaml:"tid"`
}

