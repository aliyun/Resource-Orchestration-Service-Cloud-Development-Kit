package alicloudroscdkpolardb


// Properties for defining a `DBClusterAccessWhiteList`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
type DBClusterAccessWhiteListProps struct {
	// Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified.
	//
	// Each
	// whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
	// addresses with a comma (,). The following two formats are supported:
	// IP address: for example, 10.23.12.24.
	// Classless inter-domain routing (CIDR) block: for example, 10.23.12.24\/24, where the
	// suffix \/24 indicates the number of bits for the prefix of the IP address. The suffix
	// ranges from 1 to 32.
	SecurityIps interface{} `field:"required" json:"securityIps" yaml:"securityIps"`
	// Property dbClusterIpArrayName: The name of the IP address whitelist group.
	//
	// If you do not specify this parameter,
	// the Default whitelist group is modified by default.
	// Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
	DbClusterIpArrayName interface{} `field:"optional" json:"dbClusterIpArrayName" yaml:"dbClusterIpArrayName"`
}

