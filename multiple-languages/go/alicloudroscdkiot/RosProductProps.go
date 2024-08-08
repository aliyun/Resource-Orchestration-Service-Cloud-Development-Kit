package alicloudroscdkiot


// Properties for defining a `RosProduct`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-product
type RosProductProps struct {
	NodeType interface{} `field:"required" json:"nodeType" yaml:"nodeType"`
	ProductName interface{} `field:"required" json:"productName" yaml:"productName"`
	AliyunCommodityCode interface{} `field:"optional" json:"aliyunCommodityCode" yaml:"aliyunCommodityCode"`
	AuthType interface{} `field:"optional" json:"authType" yaml:"authType"`
	CategoryKey interface{} `field:"optional" json:"categoryKey" yaml:"categoryKey"`
	DataFormat interface{} `field:"optional" json:"dataFormat" yaml:"dataFormat"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Id2 interface{} `field:"optional" json:"id2" yaml:"id2"`
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
	JoinPermissionId interface{} `field:"optional" json:"joinPermissionId" yaml:"joinPermissionId"`
	NetType interface{} `field:"optional" json:"netType" yaml:"netType"`
	ProtocolType interface{} `field:"optional" json:"protocolType" yaml:"protocolType"`
	PublishAuto interface{} `field:"optional" json:"publishAuto" yaml:"publishAuto"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

