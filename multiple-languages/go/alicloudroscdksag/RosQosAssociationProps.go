package alicloudroscdksag


// Properties for defining a `RosQosAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation
type RosQosAssociationProps struct {
	QosId interface{} `field:"required" json:"qosId" yaml:"qosId"`
	SmartAgId interface{} `field:"required" json:"smartAgId" yaml:"smartAgId"`
}

