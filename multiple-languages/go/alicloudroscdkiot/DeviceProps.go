package alicloudroscdkiot


// Properties for defining a `Device`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
type DeviceProps struct {
	// Property productKey: The identifier of the product to which the device to be registered belongs.
	ProductKey interface{} `field:"required" json:"productKey" yaml:"productKey"`
	// Property devEui: The DevEUI of the LoRaWAN device.
	//
	// This parameter is required when you create a LoRaWAN device.
	DevEui interface{} `field:"optional" json:"devEui" yaml:"devEui"`
	// Property deviceName: The DeviceName of the device.
	//
	// The name must be 4 to 32 characters in length, and
	// can contain letters, digits, hyphens (-), underscores (_), at signs (@), periods
	// (.), and colons (:).
	// You can use a combination of the DeviceName and ProductKey parameters to identify
	// a device.
	// >  If you do not specify this parameter, IoT Platform randomly generates a
	// DeviceName.
	DeviceName interface{} `field:"optional" json:"deviceName" yaml:"deviceName"`
	// Property iotInstanceId: The ID of the instance.
	//
	// You can view the instance ID on the Overview page in the
	// IoT Platform console.
	// >*   If your instance has an ID, you must configure this parameter. If you do not
	// set this parameter, the call fails.
	// >*   If your instance has no Overview page or ID, you do not need to set this
	// parameter.
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
	// Property nickname: The alias of the device.
	//
	// The alias must be 4 to 64 characters in length, and can
	// contain letters, digits, and underscores (_).
	// >  If you do not specify this parameter, IoT Platform does not generate an alias
	// for the device.
	Nickname interface{} `field:"optional" json:"nickname" yaml:"nickname"`
	// Property pinCode: The PIN code of the LoRaWAN device.
	//
	// This parameter is used to verify the DevEUI.
	// When you create a LoRaWAN device, set LoraNodeType to CUSTOMDEFINED. This
	// parameter is required.
	PinCode interface{} `field:"optional" json:"pinCode" yaml:"pinCode"`
}

