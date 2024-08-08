package alicloudroscdkvpc


// Properties for defining a `HaVip`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havip
type HaVipProps struct {
	// Property vSwitchId: The ID of the vSwitch to which the HAVIP belongs.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property description: The description of the HAVIP.
	//
	// The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property ipAddress: The IP address of the HAVIP.
	//
	// The specified IP address must be an idle IP address that falls within the CIDR block of the vSwitch. If this parameter is not set, an idle IP address from the CIDR block of the vSwitch is randomly assigned to the HAVIP.
	IpAddress interface{} `field:"optional" json:"ipAddress" yaml:"ipAddress"`
	// Property name: The name of the HAVIP.
	//
	// The name must be 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property resourceGroupId: The ID of the resource group to which the HAVIP belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosHaVip_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

