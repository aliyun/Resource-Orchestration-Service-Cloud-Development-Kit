package alicloudroscdkesa


// Properties for defining a `RosEdgeContainerApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
type RosEdgeContainerAppProps struct {
	EdgeContainerAppName interface{} `field:"required" json:"edgeContainerAppName" yaml:"edgeContainerAppName"`
	ServicePort interface{} `field:"required" json:"servicePort" yaml:"servicePort"`
	TargetPort interface{} `field:"required" json:"targetPort" yaml:"targetPort"`
	HealthCheckFailTimes interface{} `field:"optional" json:"healthCheckFailTimes" yaml:"healthCheckFailTimes"`
	HealthCheckHost interface{} `field:"optional" json:"healthCheckHost" yaml:"healthCheckHost"`
	HealthCheckHttpCode interface{} `field:"optional" json:"healthCheckHttpCode" yaml:"healthCheckHttpCode"`
	HealthCheckInterval interface{} `field:"optional" json:"healthCheckInterval" yaml:"healthCheckInterval"`
	HealthCheckMethod interface{} `field:"optional" json:"healthCheckMethod" yaml:"healthCheckMethod"`
	HealthCheckPort interface{} `field:"optional" json:"healthCheckPort" yaml:"healthCheckPort"`
	HealthCheckSuccTimes interface{} `field:"optional" json:"healthCheckSuccTimes" yaml:"healthCheckSuccTimes"`
	HealthCheckTimeout interface{} `field:"optional" json:"healthCheckTimeout" yaml:"healthCheckTimeout"`
	HealthCheckType interface{} `field:"optional" json:"healthCheckType" yaml:"healthCheckType"`
	HealthCheckUri interface{} `field:"optional" json:"healthCheckUri" yaml:"healthCheckUri"`
	Remarks interface{} `field:"optional" json:"remarks" yaml:"remarks"`
}

