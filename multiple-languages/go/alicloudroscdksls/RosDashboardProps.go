package alicloudroscdksls


// Properties for defining a `RosDashboard`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
type RosDashboardProps struct {
	Charts interface{} `field:"required" json:"charts" yaml:"charts"`
	DashboardName interface{} `field:"required" json:"dashboardName" yaml:"dashboardName"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
}

