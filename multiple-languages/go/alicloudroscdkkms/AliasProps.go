package alicloudroscdkkms


// Properties for defining a `Alias`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
type AliasProps struct {
	// Property aliasName: The alias of the CMK.
	//
	// The alias must be 1 to 255 characters in length and must contain the prefix
	// `alias\/`. The alias cannot be prefixed with the reserved word `alias\/acs`.
	AliasName interface{} `field:"required" json:"aliasName" yaml:"aliasName"`
	// Property keyId: Globally unique identifier of the CMK.
	KeyId interface{} `field:"required" json:"keyId" yaml:"keyId"`
}

