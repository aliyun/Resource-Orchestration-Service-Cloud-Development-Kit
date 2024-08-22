package alicloudroscdksag


// Properties for defining a `QosAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation
type QosAssociationProps struct {
	// Property qosId: The instance ID of the QoS policy.
	QosId interface{} `field:"required" json:"qosId" yaml:"qosId"`
	// Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
	SmartAgId interface{} `field:"required" json:"smartAgId" yaml:"smartAgId"`
}

