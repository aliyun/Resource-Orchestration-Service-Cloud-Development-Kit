package alicloudroscdkedas


// Properties for defining a `SwimmingLane`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglane
type SwimmingLaneProps struct {
	// Property entryRules: The entry rules of the swimming lane.
	EntryRules interface{} `field:"required" json:"entryRules" yaml:"entryRules"`
	// Property groupId: The group ID of the swimming lane.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property logicalRegionId: The RegionId of the logical region.
	//
	// Format: `physicalRegion:customNamespaceIdentifier`.
	LogicalRegionId interface{} `field:"required" json:"logicalRegionId" yaml:"logicalRegionId"`
	// Property name: The name of the swimming lane.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property tag: The tag of the swimming lane.
	Tag interface{} `field:"required" json:"tag" yaml:"tag"`
	// Property appInfos: Application information involved in the swimming lane.
	AppInfos interface{} `field:"optional" json:"appInfos" yaml:"appInfos"`
	// Property enableRules: Whether to enable flow control rules.
	EnableRules interface{} `field:"optional" json:"enableRules" yaml:"enableRules"`
}

