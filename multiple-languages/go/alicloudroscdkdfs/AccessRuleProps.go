package alicloudroscdkdfs


// Properties for defining a `AccessRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessrule
type AccessRuleProps struct {
	// Property accessGroupId: The resource ID of Access Group.
	AccessGroupId interface{} `field:"required" json:"accessGroupId" yaml:"accessGroupId"`
	// Property networkSegment: The NetworkSegment of the Access Rule.
	NetworkSegment interface{} `field:"required" json:"networkSegment" yaml:"networkSegment"`
	// Property rwAccessType: The read\/write permission of the authorized object on the file system.
	//
	// Values:
	// RDWR (default) : read and write.
	// RDONLY: read-only.
	RwAccessType interface{} `field:"required" json:"rwAccessType" yaml:"rwAccessType"`
	// Property description: The Description of the Access Rule.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property priority: The Priority of the Access Rule.
	//
	// Valid values: 1 to 100.
	// NOTE: When multiple rules are matched by the same authorized object,
	// the high-priority rule takes effect. 1 is the highest priority.
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
}

