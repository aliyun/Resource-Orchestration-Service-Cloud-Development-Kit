package alicloudroscdkbailian


// Properties for defining a `ApiKey`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
type ApiKeyProps struct {
	// Property authSetModel: The model of the authentication.
	AuthSetModel interface{} `field:"optional" json:"authSetModel" yaml:"authSetModel"`
	// Property description: The description of the API key.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

