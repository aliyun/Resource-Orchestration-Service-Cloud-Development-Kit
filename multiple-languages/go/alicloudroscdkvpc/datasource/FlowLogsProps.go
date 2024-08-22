package datasource


// Properties for defining a `FlowLogs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs
type FlowLogsProps struct {
	// Property description: The description of the flow log.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property flowLogId: The ID of a flow log.
	FlowLogId interface{} `field:"optional" json:"flowLogId" yaml:"flowLogId"`
	// Property flowLogName: The name of the flow log.
	FlowLogName interface{} `field:"optional" json:"flowLogName" yaml:"flowLogName"`
	// Property logStoreName: A LogStore that stores captured traffic.
	LogStoreName interface{} `field:"optional" json:"logStoreName" yaml:"logStoreName"`
	// Property projectName: Manage the captured traffic of the Project.
	ProjectName interface{} `field:"optional" json:"projectName" yaml:"projectName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceId: The ID of the resource group to which the flow log belongs.
	ResourceId interface{} `field:"optional" json:"resourceId" yaml:"resourceId"`
	// Property resourceType: The resource type of traffic to capture.
	//
	// Value:
	// NetworkInterface: Elastic NIC.
	// VSwitch: All ENIs within the VSwitch.
	// VPC: All ENIs in a VPC.
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
	// Property trafficType: The type of traffic collected.
	//
	// Value:
	// All: All traffic.
	// Allow: Traffic allowed by access control.
	// Drop: Traffic denied by access control.
	TrafficType interface{} `field:"optional" json:"trafficType" yaml:"trafficType"`
}

