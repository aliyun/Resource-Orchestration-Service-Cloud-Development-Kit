package alicloudroscdkbss


// Properties for defining a `RosWaitOrder`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
type RosWaitOrderProps struct {
	OrderIds interface{} `field:"required" json:"orderIds" yaml:"orderIds"`
	CancelOnDelete interface{} `field:"optional" json:"cancelOnDelete" yaml:"cancelOnDelete"`
	WaitForOrderProduced interface{} `field:"optional" json:"waitForOrderProduced" yaml:"waitForOrderProduced"`
}

