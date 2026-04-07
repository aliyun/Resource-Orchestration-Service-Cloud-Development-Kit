package alicloudroscdkpolardb


// Properties for defining a `ApplicationEndpointAddress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-applicationendpointaddress
type ApplicationEndpointAddressProps struct {
	// Property applicationId: The id of the application.
	ApplicationId interface{} `field:"required" json:"applicationId" yaml:"applicationId"`
	// Property endpointId: The id of the endpoint.
	EndpointId interface{} `field:"required" json:"endpointId" yaml:"endpointId"`
	// Property netType: Network type for adding connection address.
	NetType interface{} `field:"required" json:"netType" yaml:"netType"`
}

