package alicloudroscdkelasticsearchserverless


// Properties for defining a `App`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
type AppProps struct {
	// Property appName: The name of the elastic search serverless version app.
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	// Property authentication: The authentication of the app.
	//
	// Currently only supports specifying passwords for initial users.
	Authentication interface{} `field:"required" json:"authentication" yaml:"authentication"`
	// Property quotaInfo: The quota info of the app.
	QuotaInfo interface{} `field:"required" json:"quotaInfo" yaml:"quotaInfo"`
	// Property appVersion: The version of the app.
	AppVersion interface{} `field:"optional" json:"appVersion" yaml:"appVersion"`
	// Property description: The description of the app.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property network: The public network of the app.
	Network interface{} `field:"optional" json:"network" yaml:"network"`
	// Property privateNetwork: The private network of the app.
	PrivateNetwork interface{} `field:"optional" json:"privateNetwork" yaml:"privateNetwork"`
}

