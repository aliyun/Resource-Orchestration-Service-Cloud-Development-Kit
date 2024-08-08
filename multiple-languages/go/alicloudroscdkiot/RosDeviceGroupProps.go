package alicloudroscdkiot


// Properties for defining a `RosDeviceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-devicegroup
type RosDeviceGroupProps struct {
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	GroupDesc interface{} `field:"optional" json:"groupDesc" yaml:"groupDesc"`
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
	SuperGroupId interface{} `field:"optional" json:"superGroupId" yaml:"superGroupId"`
}

