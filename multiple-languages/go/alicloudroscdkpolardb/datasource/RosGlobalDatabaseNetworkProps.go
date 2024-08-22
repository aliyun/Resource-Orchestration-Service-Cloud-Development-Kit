package datasource


// Properties for defining a `RosGlobalDatabaseNetwork`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetwork
type RosGlobalDatabaseNetworkProps struct {
	GdnId interface{} `field:"required" json:"gdnId" yaml:"gdnId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

