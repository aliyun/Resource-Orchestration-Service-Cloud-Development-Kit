package alicloudroscdkarms


// Properties for defining a `RosXTraceApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
type RosXTraceAppProps struct {
	XTraceAppName interface{} `field:"required" json:"xTraceAppName" yaml:"xTraceAppName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosXTraceApp_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

