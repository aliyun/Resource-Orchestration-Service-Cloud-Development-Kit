package alicloudroscdksag


// Properties for defining a `RosSerialNumberBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-serialnumberbinding
type RosSerialNumberBindingProps struct {
	SerialNumber interface{} `field:"required" json:"serialNumber" yaml:"serialNumber"`
	SmartAgId interface{} `field:"required" json:"smartAgId" yaml:"smartAgId"`
}

