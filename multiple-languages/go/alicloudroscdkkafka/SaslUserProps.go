package alicloudroscdkkafka


// Properties for defining a `SaslUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
type SaslUserProps struct {
	// Property instanceId: The instance ID.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property password: The password of the SASL user.
	Password interface{} `field:"required" json:"password" yaml:"password"`
	// Property username: The name of the SASL user.
	Username interface{} `field:"required" json:"username" yaml:"username"`
	// Property mechanism: The encryption method.
	//
	// Valid values:
	// SCRAM-SHA-512 (default)
	// SCRAM-SHA-256
	// Note
	// This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
	Mechanism interface{} `field:"optional" json:"mechanism" yaml:"mechanism"`
	// Property type: The type of the Simple Authentication and Security Layer (SASL) user.
	//
	// Valid values:
	// plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
	// SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
	// LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
	// Default value: plain.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

