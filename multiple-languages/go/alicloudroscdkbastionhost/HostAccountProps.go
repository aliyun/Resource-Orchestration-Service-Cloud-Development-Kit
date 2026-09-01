package alicloudroscdkbastionhost


// Properties for defining a `HostAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
type HostAccountProps struct {
	// Property hostAccountName: The name of the new host account.
	//
	// The name can be up to 128 characters long.
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
	// Property privateKey: The private key of the new host account.
	//
	// The value is a Base64-encoded string.
	// > This parameter is used only when ProtocolName is set to SSH. You do not need to
	// set this parameter if ProtocolName is set to RDP. You can set both a password and
	// a private key for the host account. When connecting to the asset, Bastionhost
	// prioritizes the private key for the connection.
	PrivateKey interface{} `field:"optional" json:"privateKey" yaml:"privateKey"`
	// Property privilegeType: The permission type of the account.
	//
	// If you do not set this parameter, the default
	// value is Normal.
	// - Privileged: privileged account
	// - Normal: normal account
	// > This parameter is supported only in Bastionhost V3.2.47 and later.
	PrivilegeType interface{} `field:"optional" json:"privilegeType" yaml:"privilegeType"`
	// Property rotationMode: The password change mode for the account.
	//
	// If you do not set this parameter, the
	// default value is Self.
	// - Privileged: Use a privileged account to change the password.
	// - Self: Do not use a privileged account to change the password.
	// > This parameter is supported only in Bastionhost V3.2.47 and later.
	RotationMode interface{} `field:"optional" json:"rotationMode" yaml:"rotationMode"`
}

