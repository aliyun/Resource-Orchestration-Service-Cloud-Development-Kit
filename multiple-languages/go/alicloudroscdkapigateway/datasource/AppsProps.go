package datasource


// Properties for defining a `Apps`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
type AppsProps struct {
	// Property appId: Unique ID of the app.
	AppId interface{} `field:"optional" json:"appId" yaml:"appId"`
	// Property appOwner: Alibaba Cloud account ID of the app owner.
	AppOwner interface{} `field:"optional" json:"appOwner" yaml:"appOwner"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

