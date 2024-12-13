package alicloudroscdkapig


// Properties for defining a `Route`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
type RouteProps struct {
	// Property backend: Backend service configuration for routing.
	Backend interface{} `field:"required" json:"backend" yaml:"backend"`
	// Property environmentInfo: The information if the environment.
	EnvironmentInfo interface{} `field:"required" json:"environmentInfo" yaml:"environmentInfo"`
	// Property httpApiId: The ID of the API.
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	// Property match: The match rule of route resource.
	Match interface{} `field:"required" json:"match" yaml:"match"`
	// Property routeName: The name of the route.
	RouteName interface{} `field:"required" json:"routeName" yaml:"routeName"`
	// Property description: The description of route.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property domainIds: The list of domain name IDs.
	DomainIds interface{} `field:"optional" json:"domainIds" yaml:"domainIds"`
	// Property domainInfos: Domain items.
	DomainInfos interface{} `field:"optional" json:"domainInfos" yaml:"domainInfos"`
}

