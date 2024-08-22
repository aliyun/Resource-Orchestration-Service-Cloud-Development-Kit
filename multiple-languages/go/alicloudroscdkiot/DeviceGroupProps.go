package alicloudroscdkiot


// Properties for defining a `DeviceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-devicegroup
type DeviceGroupProps struct {
	// Property groupName: The name of the group.
	//
	// The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	// Property groupDesc: The description of the group.
	//
	// You can enter a description with up to 100 characters.
	GroupDesc interface{} `field:"optional" json:"groupDesc" yaml:"groupDesc"`
	// Property iotInstanceId: Public instance does not pass this parameter;
	//
	// instance that you need to buy the incoming instance ID.
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
	// Property superGroupId: The ID of the parent group.
	//
	// If you want to create a first-level group, do not enter this parameter.
	SuperGroupId interface{} `field:"optional" json:"superGroupId" yaml:"superGroupId"`
}

