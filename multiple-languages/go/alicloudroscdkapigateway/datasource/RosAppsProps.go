package datasource


// Properties for defining a `RosApps`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
type RosAppsProps struct {
	AppId interface{} `field:"optional" json:"appId" yaml:"appId"`
	AppOwner interface{} `field:"optional" json:"appOwner" yaml:"appOwner"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

