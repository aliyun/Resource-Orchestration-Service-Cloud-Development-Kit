package alicloudroscdkmse


// Properties for defining a `RosGatewayRoute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
type RosGatewayRouteProps struct {
	DomainIdList interface{} `field:"required" json:"domainIdList" yaml:"domainIdList"`
	GatewayUniqueId interface{} `field:"required" json:"gatewayUniqueId" yaml:"gatewayUniqueId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DestinationType interface{} `field:"optional" json:"destinationType" yaml:"destinationType"`
	DirectResponseJson interface{} `field:"optional" json:"directResponseJson" yaml:"directResponseJson"`
	DomainId interface{} `field:"optional" json:"domainId" yaml:"domainId"`
	Fallback interface{} `field:"optional" json:"fallback" yaml:"fallback"`
	FallbackServices interface{} `field:"optional" json:"fallbackServices" yaml:"fallbackServices"`
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	Policies interface{} `field:"optional" json:"policies" yaml:"policies"`
	Predicates interface{} `field:"optional" json:"predicates" yaml:"predicates"`
	RedirectJson interface{} `field:"optional" json:"redirectJson" yaml:"redirectJson"`
	RouteOrder interface{} `field:"optional" json:"routeOrder" yaml:"routeOrder"`
	RouteType interface{} `field:"optional" json:"routeType" yaml:"routeType"`
	Services interface{} `field:"optional" json:"services" yaml:"services"`
}

