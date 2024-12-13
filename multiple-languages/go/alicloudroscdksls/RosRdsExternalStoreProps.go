package alicloudroscdksls


// Properties for defining a `RosRdsExternalStore`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore
type RosRdsExternalStoreProps struct {
	Db interface{} `field:"required" json:"db" yaml:"db"`
	ExternalStoreName interface{} `field:"required" json:"externalStoreName" yaml:"externalStoreName"`
	Host interface{} `field:"required" json:"host" yaml:"host"`
	Password interface{} `field:"required" json:"password" yaml:"password"`
	Port interface{} `field:"required" json:"port" yaml:"port"`
	Project interface{} `field:"required" json:"project" yaml:"project"`
	Region interface{} `field:"required" json:"region" yaml:"region"`
	StoreType interface{} `field:"required" json:"storeType" yaml:"storeType"`
	Table interface{} `field:"required" json:"table" yaml:"table"`
	Username interface{} `field:"required" json:"username" yaml:"username"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
}

