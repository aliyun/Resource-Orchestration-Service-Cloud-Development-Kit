package alicloudroscdkkms


// Properties for defining a `Alias`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
type AliasProps struct {
	// Property aliasName: - The display name of the key.
	//
	// You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias\/ must be included.
	AliasName interface{} `field:"required" json:"aliasName" yaml:"aliasName"`
	// Property keyId: Globally unique identifier of the CMK.
	KeyId interface{} `field:"required" json:"keyId" yaml:"keyId"`
}

