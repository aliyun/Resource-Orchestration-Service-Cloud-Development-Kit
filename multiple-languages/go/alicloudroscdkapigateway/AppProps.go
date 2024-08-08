package alicloudroscdkapigateway


// Properties for defining a `App`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-app
type AppProps struct {
	// Property appName: The name of the App.Need [4, 26] Chinese\English\Number characters or "_",and should start with Chinese\/English character.
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	// Property appCode: The app code of the APP.
	//
	// The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-),and AppCode is globally unique.
	AppCode interface{} `field:"optional" json:"appCode" yaml:"appCode"`
	// Property appKey: The key of the APP.
	//
	// The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-),
	// and AppKey is globally unique.
	AppKey interface{} `field:"optional" json:"appKey" yaml:"appKey"`
	// Property appSecret: The secret of the APP.
	//
	// The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-).
	AppSecret interface{} `field:"optional" json:"appSecret" yaml:"appSecret"`
	// Property description: Description of the App, less than 180 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property tags: Tags to attach to app.
	//
	// Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosApp_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

