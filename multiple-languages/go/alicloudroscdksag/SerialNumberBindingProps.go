package alicloudroscdksag


// Properties for defining a `SerialNumberBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-serialnumberbinding
type SerialNumberBindingProps struct {
	// Property serialNumber: The serial number (SN) of the SAG device.
	SerialNumber interface{} `field:"required" json:"serialNumber" yaml:"serialNumber"`
	// Property smartAgId: The ID of the SAG instance.
	SmartAgId interface{} `field:"required" json:"smartAgId" yaml:"smartAgId"`
}

