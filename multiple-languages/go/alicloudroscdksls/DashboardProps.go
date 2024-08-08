package alicloudroscdksls


// Properties for defining a `Dashboard`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
type DashboardProps struct {
	// Property charts: Chart list.
	Charts interface{} `field:"required" json:"charts" yaml:"charts"`
	// Property dashboardName: Dashboard name.
	DashboardName interface{} `field:"required" json:"dashboardName" yaml:"dashboardName"`
	// Property projectName: Project name: 1.
	//
	// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
	// 2. Must start and end with lowercase letters and numbers.
	// 3. The name length is 3-63 characters.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property description: Dashboard description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property displayName: Dashboard display name.
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
}

