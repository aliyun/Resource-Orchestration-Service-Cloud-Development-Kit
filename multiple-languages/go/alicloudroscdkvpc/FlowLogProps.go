package alicloudroscdkvpc


// Properties for defining a `FlowLog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-flowlog
type FlowLogProps struct {
	// Property logStoreName: The log store name.
	LogStoreName interface{} `field:"required" json:"logStoreName" yaml:"logStoreName"`
	// Property projectName: The project name.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property resourceId: The resource id.
	ResourceId interface{} `field:"required" json:"resourceId" yaml:"resourceId"`
	// Property resourceType: The resource type.
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	// Property trafficType: The traffic type.
	TrafficType interface{} `field:"required" json:"trafficType" yaml:"trafficType"`
	// Property description: The Description of flow log.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property flowLogName: The flow log name.
	FlowLogName interface{} `field:"optional" json:"flowLogName" yaml:"flowLogName"`
}

