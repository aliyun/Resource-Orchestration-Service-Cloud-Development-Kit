package alicloudroscdkmse


// Properties for defining a `GatewayRoute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
type GatewayRouteProps struct {
	// Property domainIdList: The list of domain IDs in JSON format.
	DomainIdList interface{} `field:"required" json:"domainIdList" yaml:"domainIdList"`
	// Property gatewayUniqueId: The unique ID of the gateway.
	GatewayUniqueId interface{} `field:"required" json:"gatewayUniqueId" yaml:"gatewayUniqueId"`
	// Property name: The name of the route.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property description: The description of the route.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property destinationType: The type of destination service.
	//
	// Valid values:
	// - Single: single service
	// - Multiple: multiple services
	// - VersionOriented: tag-based routing
	// - Mock: mock response
	// - Redirect: redirect.
	DestinationType interface{} `field:"optional" json:"destinationType" yaml:"destinationType"`
	// Property directResponseJson: Configuration for mock response.
	DirectResponseJson interface{} `field:"optional" json:"directResponseJson" yaml:"directResponseJson"`
	// Property domainId: The ID of the domain.
	DomainId interface{} `field:"optional" json:"domainId" yaml:"domainId"`
	// Property fallback: Whether to enable fallback service.
	Fallback interface{} `field:"optional" json:"fallback" yaml:"fallback"`
	// Property fallbackServices: The list of fallback services.
	FallbackServices interface{} `field:"optional" json:"fallbackServices" yaml:"fallbackServices"`
	// Property gatewayId: The ID of the gateway.
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	// Property policies: The JSON string of route policies.
	Policies interface{} `field:"optional" json:"policies" yaml:"policies"`
	// Property predicates: Matching rules for the route.
	Predicates interface{} `field:"optional" json:"predicates" yaml:"predicates"`
	// Property redirectJson: Configuration for redirect.
	RedirectJson interface{} `field:"optional" json:"redirectJson" yaml:"redirectJson"`
	// Property routeOrder: The order of the route.
	//
	// Smaller values indicate higher priority.
	RouteOrder interface{} `field:"optional" json:"routeOrder" yaml:"routeOrder"`
	// Property routeType: The type of the route.
	//
	// Valid value: Op (control route).
	RouteType interface{} `field:"optional" json:"routeType" yaml:"routeType"`
	// Property services: The list of backend services.
	//
	// Required when DestinationType is Single, Multiple, or VersionOriented.
	Services interface{} `field:"optional" json:"services" yaml:"services"`
}

