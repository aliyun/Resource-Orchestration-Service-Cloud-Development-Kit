package alicloudroscdkarms


// Properties for defining a `XTraceApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
type XTraceAppProps struct {
	// Property xTraceAppName: The name of the resource.
	XTraceAppName interface{} `field:"required" json:"xTraceAppName" yaml:"xTraceAppName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of The tags of the resource..
	Tags *[]*RosXTraceApp_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

