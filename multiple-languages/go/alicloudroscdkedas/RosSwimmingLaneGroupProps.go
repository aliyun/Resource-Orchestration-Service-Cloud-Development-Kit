package alicloudroscdkedas


// Properties for defining a `RosSwimmingLaneGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglanegroup
type RosSwimmingLaneGroupProps struct {
	AppIds interface{} `field:"required" json:"appIds" yaml:"appIds"`
	EntryApp interface{} `field:"required" json:"entryApp" yaml:"entryApp"`
	LogicalRegionId interface{} `field:"required" json:"logicalRegionId" yaml:"logicalRegionId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
}

