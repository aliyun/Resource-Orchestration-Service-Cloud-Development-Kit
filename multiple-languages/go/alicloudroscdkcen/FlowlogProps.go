package alicloudroscdkcen


// Properties for defining a `Flowlog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-flowlog
type FlowlogProps struct {
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property description: The description of the flow log.
	//
	// The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property flowLogName: The flow log name.
	//
	// The name can be empty or 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
	FlowLogName interface{} `field:"optional" json:"flowLogName" yaml:"flowLogName"`
	// Property interval: The time window for collecting log data.
	//
	// Unit: seconds. Valid values: 60 and 600. Default value: 600.
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	// Property logFormatString: The strings that define the fields in the flow log.
	//
	// Format: ${Field 1}${Field 2}${Field 3}...{Field n}
	//      * If you do not configure this parameter, all fields are included in the flow log.
	//      * If you configure this parameter, start the string with ${srcaddr}${dstaddr}${bytes} because ${srcaddr}${dstaddr}${bytes} are required variables.
	LogFormatString interface{} `field:"optional" json:"logFormatString" yaml:"logFormatString"`
	// Property logStoreName: The Logstore that stores the captured traffic data.
	//
	// * If a Logstore is already created in the selected region, enter the name of the Logstore.
	// * If no Logstores are created in the selected region, enter a name and the system automatically creates a Logstore. The name of the Logstore. The name must meet the following requirements:
	//      ** The name must be unique in a project.
	//      ** The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
	//      ** The name must start and end with a lowercase letter or a digit.
	//      ** The name must be 3 to 63 characters in length.
	LogStoreName interface{} `field:"optional" json:"logStoreName" yaml:"logStoreName"`
	// Property projectName: The project that stores the captured traffic data.
	//
	// * If a project is already created in the selected region, enter the name of the project.
	// * If no projects are created in the selected region, enter a name and the system automatically creates a project.
	//      The project name must be unique in a region. You cannot change the name after the project is created. The name must meet the following requirements:
	//          ** The name must be globally unique.
	//          ** The name can contain only lowercase letters, digits, and hyphens (-).
	//          ** The name must start and end with a lowercase letter or a digit.
	//          ** The name must be 3 to 63 characters in length.
	ProjectName interface{} `field:"optional" json:"projectName" yaml:"projectName"`
	// Property tags: Tags of flow log.
	Tags *[]*RosFlowlog_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property transitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
	//
	// If you create the flow log for a transfer router, skip this parameter.
	TransitRouterAttachmentId interface{} `field:"optional" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	// Property transitRouterId: The ID of the transit router.
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
}

