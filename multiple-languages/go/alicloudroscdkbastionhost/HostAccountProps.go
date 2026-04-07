package alicloudroscdkbastionhost


// Properties for defining a `HostAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
type HostAccountProps struct {
	// Property hostAccountName: The name of the host account.
	HostAccountName interface{} `field:"required" json:"hostAccountName" yaml:"hostAccountName"`
	// Property hostId: The ID of the host.
	HostId interface{} `field:"required" json:"hostId" yaml:"hostId"`
	// Property instanceId: The ID of the bastion host instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property protocolName: The protocol name of the host account.
	//
	// Valid values: SSH, RDP.
	ProtocolName interface{} `field:"required" json:"protocolName" yaml:"protocolName"`
	// Property hostShareKeyId: The ID of the host share key.
	//
	// This parameter is required when the protocol is SSH.
	HostShareKeyId interface{} `field:"optional" json:"hostShareKeyId" yaml:"hostShareKeyId"`
	// Property passPhrase: The passphrase of the host account.
	//
	// This parameter is required when the protocol is SSH and the private key is encrypted.
	PassPhrase interface{} `field:"optional" json:"passPhrase" yaml:"passPhrase"`
	// Property password: The password of the host account.
	//
	// This parameter is required when the protocol is SSH or RDP.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property privateKey: The private key of the host account.
	//
	// This parameter is required when the protocol is SSH.
	PrivateKey interface{} `field:"optional" json:"privateKey" yaml:"privateKey"`
	// Property privilegeType: The privilege type of the host account.
	//
	// Valid values: Normal, Administrator.
	PrivilegeType interface{} `field:"optional" json:"privilegeType" yaml:"privilegeType"`
	// Property rotationMode: The rotation mode of the host account.
	//
	// Valid values: Manual, Automatic.
	RotationMode interface{} `field:"optional" json:"rotationMode" yaml:"rotationMode"`
}

