package alicloudroscdksls


type RosAlert_QueryListProperty struct {
	End interface{} `field:"required" json:"end" yaml:"end"`
	Query interface{} `field:"required" json:"query" yaml:"query"`
	Start interface{} `field:"required" json:"start" yaml:"start"`
	TimeSpanType interface{} `field:"required" json:"timeSpanType" yaml:"timeSpanType"`
	ChartTitle interface{} `field:"optional" json:"chartTitle" yaml:"chartTitle"`
	DashboardId interface{} `field:"optional" json:"dashboardId" yaml:"dashboardId"`
	LogStore interface{} `field:"optional" json:"logStore" yaml:"logStore"`
	PowerSqlMode interface{} `field:"optional" json:"powerSqlMode" yaml:"powerSqlMode"`
	Project interface{} `field:"optional" json:"project" yaml:"project"`
	Region interface{} `field:"optional" json:"region" yaml:"region"`
	RoleArn interface{} `field:"optional" json:"roleArn" yaml:"roleArn"`
	Store interface{} `field:"optional" json:"store" yaml:"store"`
	StoreType interface{} `field:"optional" json:"storeType" yaml:"storeType"`
}

