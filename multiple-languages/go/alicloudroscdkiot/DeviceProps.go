package alicloudroscdkiot


// Properties for defining a `Device`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
type DeviceProps struct {
	// Property productKey: The identifier of the product to which the device to be registered belongs.
	ProductKey interface{} `field:"required" json:"productKey" yaml:"productKey"`
	// Property devEui: DevEUI LoRaWAN equipment.
	//
	// When you create a LoRaWAN devices, this will pass.
	DevEui interface{} `field:"optional" json:"devEui" yaml:"devEui"`
	// Property deviceName: The name of the device that you want to register.
	//
	// The device name must consist of
	// 4 to 32 characters, including English letters, digits, and special characters, for
	// example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
	// DeviceName is used with ProductKey to identify a specified device.
	// Note If you do not specify this parameter, the system will generate a name for the device.
	DeviceName interface{} `field:"optional" json:"deviceName" yaml:"deviceName"`
	// Property iotInstanceId: Public instance does not pass this parameter;
	//
	// instance that you need to buy the incoming instance ID.
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
	// Property nickname: Add a nickname for the device.
	//
	// A nickname can be 4-64 characters in length, and can
	// contain Chinese characters, English letters, numbers and underscores (_). A Chinese
	// character counts as two characters.
	Nickname interface{} `field:"optional" json:"nickname" yaml:"nickname"`
	// Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
	//
	// When you create a LoRaWAN devices, this will pass.
	PinCode interface{} `field:"optional" json:"pinCode" yaml:"pinCode"`
}

