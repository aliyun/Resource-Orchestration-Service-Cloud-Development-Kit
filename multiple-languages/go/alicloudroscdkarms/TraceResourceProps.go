package alicloudroscdkarms


// Properties for defining a `TraceResource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-traceresource
type TraceResourceProps struct {
	// Property appType: The application type of the trace resource.
	//
	// Allowed values: default, trace, cms.
	AppType interface{} `field:"optional" json:"appType" yaml:"appType"`
	// Property createAllResource: Whether to create all trace resources.
	CreateAllResource interface{} `field:"optional" json:"createAllResource" yaml:"createAllResource"`
	// Property workspace: The workspace of the trace resource.
	Workspace interface{} `field:"optional" json:"workspace" yaml:"workspace"`
}

