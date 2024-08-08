package alicloudroscdkacm


// Properties for defining a `Configuration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-configuration
type ConfigurationProps struct {
	// Property content: The contents of the configuration.
	Content interface{} `field:"required" json:"content" yaml:"content"`
	// Property dataId: The ID of the configuration.
	//
	// Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
	// The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
	// The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
	DataId interface{} `field:"required" json:"dataId" yaml:"dataId"`
	// Property namespaceId: ID of namespace.
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	// Property appName: Configuration application name.
	AppName interface{} `field:"optional" json:"appName" yaml:"appName"`
	// Property desc: Configuration description explains.
	Desc interface{} `field:"optional" json:"desc" yaml:"desc"`
	// Property group: Group.
	Group interface{} `field:"optional" json:"group" yaml:"group"`
	// Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas.
	Tags *string `field:"optional" json:"tags" yaml:"tags"`
	// Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text\/html, properties.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

