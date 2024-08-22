package alicloudroscdkiot


// Properties for defining a `RosDevice`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
type RosDeviceProps struct {
	ProductKey interface{} `field:"required" json:"productKey" yaml:"productKey"`
	DevEui interface{} `field:"optional" json:"devEui" yaml:"devEui"`
	DeviceName interface{} `field:"optional" json:"deviceName" yaml:"deviceName"`
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
	Nickname interface{} `field:"optional" json:"nickname" yaml:"nickname"`
	PinCode interface{} `field:"optional" json:"pinCode" yaml:"pinCode"`
}

