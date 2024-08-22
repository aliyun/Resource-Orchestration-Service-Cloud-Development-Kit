package datasource


// Properties for defining a `RosGlobalDatabaseNetworks`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
type RosGlobalDatabaseNetworksProps struct {
	DbClusterId interface{} `field:"optional" json:"dbClusterId" yaml:"dbClusterId"`
	GdnId interface{} `field:"optional" json:"gdnId" yaml:"gdnId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

