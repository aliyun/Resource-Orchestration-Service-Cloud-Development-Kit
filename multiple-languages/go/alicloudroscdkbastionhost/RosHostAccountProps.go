package alicloudroscdkbastionhost


// Properties for defining a `RosHostAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
type RosHostAccountProps struct {
	HostAccountName interface{} `field:"required" json:"hostAccountName" yaml:"hostAccountName"`
	HostId interface{} `field:"required" json:"hostId" yaml:"hostId"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	ProtocolName interface{} `field:"required" json:"protocolName" yaml:"protocolName"`
	HostShareKeyId interface{} `field:"optional" json:"hostShareKeyId" yaml:"hostShareKeyId"`
	PassPhrase interface{} `field:"optional" json:"passPhrase" yaml:"passPhrase"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	PrivateKey interface{} `field:"optional" json:"privateKey" yaml:"privateKey"`
	PrivilegeType interface{} `field:"optional" json:"privilegeType" yaml:"privilegeType"`
	RotationMode interface{} `field:"optional" json:"rotationMode" yaml:"rotationMode"`
}

