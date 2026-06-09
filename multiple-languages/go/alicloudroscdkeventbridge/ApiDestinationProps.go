package alicloudroscdkeventbridge


// Properties for defining a `ApiDestination`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
type ApiDestinationProps struct {
	// Property apiDestinationName: The name of the api.
	//
	// The maximum length is 127 characters. Minimum length 2 characters.
	ApiDestinationName interface{} `field:"required" json:"apiDestinationName" yaml:"apiDestinationName"`
	// Property connectionName: The connection configuration name.
	//
	// The maximum length is 127 characters. Minimum length 2 characters.
	// - Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.
	ConnectionName interface{} `field:"required" json:"connectionName" yaml:"connectionName"`
	// Property httpApiParameters: Configuration information for API endpoints.
	HttpApiParameters interface{} `field:"required" json:"httpApiParameters" yaml:"httpApiParameters"`
	// Property description: The description of the api.
	//
	// It must be no more than 255 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

