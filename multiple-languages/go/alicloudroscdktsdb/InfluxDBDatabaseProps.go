package alicloudroscdktsdb


// Properties for defining a `InfluxDBDatabase`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbdatabase
type InfluxDBDatabaseProps struct {
	// Property dbName: The name of database.
	//
	// The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
	// Property instanceId: The ID of TSDB for InfluxDB.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
}

