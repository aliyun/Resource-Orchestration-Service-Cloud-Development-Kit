package alicloudroscdkapig


// Properties for defining a `RosRoute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
type RosRouteProps struct {
	Backend interface{} `field:"required" json:"backend" yaml:"backend"`
	EnvironmentInfo interface{} `field:"required" json:"environmentInfo" yaml:"environmentInfo"`
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	Match interface{} `field:"required" json:"match" yaml:"match"`
	RouteName interface{} `field:"required" json:"routeName" yaml:"routeName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DomainIds interface{} `field:"optional" json:"domainIds" yaml:"domainIds"`
	DomainInfos interface{} `field:"optional" json:"domainInfos" yaml:"domainInfos"`
}

