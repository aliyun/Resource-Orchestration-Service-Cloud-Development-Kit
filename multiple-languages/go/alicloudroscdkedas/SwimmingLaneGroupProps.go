package alicloudroscdkedas


// Properties for defining a `SwimmingLaneGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglanegroup
type SwimmingLaneGroupProps struct {
	// Property appIds: The list of application IDs involved in the swimming lane group.
	AppIds interface{} `field:"required" json:"appIds" yaml:"appIds"`
	// Property entryApp: The entry application.
	//
	// Format: EDAS:{application ID}.
	EntryApp interface{} `field:"required" json:"entryApp" yaml:"entryApp"`
	// Property logicalRegionId: The RegionId of the custom namespace.
	//
	// Format: `physical Region:custom namespace identifier`.
	LogicalRegionId interface{} `field:"required" json:"logicalRegionId" yaml:"logicalRegionId"`
	// Property name: The name of the swimming lane group.
	//
	// The value can be up to 64 characters in length.
	Name interface{} `field:"required" json:"name" yaml:"name"`
}

