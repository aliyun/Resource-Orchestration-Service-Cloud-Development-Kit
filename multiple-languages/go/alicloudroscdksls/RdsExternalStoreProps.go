package alicloudroscdksls


// Properties for defining a `RdsExternalStore`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore
type RdsExternalStoreProps struct {
	// Property db: The name of the database in the ApsaraDB RDS for MySQL instance.
	Db interface{} `field:"required" json:"db" yaml:"db"`
	// Property externalStoreName: The name of the external store.
	//
	// The name must be unique in a project and different from Logstore.
	ExternalStoreName interface{} `field:"required" json:"externalStoreName" yaml:"externalStoreName"`
	// Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
	Host interface{} `field:"required" json:"host" yaml:"host"`
	// Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.
	Password interface{} `field:"required" json:"password" yaml:"password"`
	// Property port: The internal or public port of the ApsaraDB RDS for MySQL instance.
	Port interface{} `field:"required" json:"port" yaml:"port"`
	// Property project: The name of the project.
	Project interface{} `field:"required" json:"project" yaml:"project"`
	// Property region: The region where the ApsaraDB RDS for MySQL instance resides.
	//
	// Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
	Region interface{} `field:"required" json:"region" yaml:"region"`
	// Property storeType: The storage type.
	//
	// Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
	StoreType interface{} `field:"required" json:"storeType" yaml:"storeType"`
	// Property table: The name of the database table in the ApsaraDB RDS for MySQL instance.
	Table interface{} `field:"required" json:"table" yaml:"table"`
	// Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.
	Username interface{} `field:"required" json:"username" yaml:"username"`
	// Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property instanceId: The id of the RDS instance.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
}

