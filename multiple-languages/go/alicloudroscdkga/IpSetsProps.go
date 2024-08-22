package alicloudroscdkga


// Properties for defining a `IpSets`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets
type IpSetsProps struct {
	// Property accelerateRegion:.
	AccelerateRegion interface{} `field:"required" json:"accelerateRegion" yaml:"accelerateRegion"`
	// Property acceleratorId: The ID of the GA instance.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
}

