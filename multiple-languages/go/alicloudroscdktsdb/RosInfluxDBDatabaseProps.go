package alicloudroscdktsdb


// Properties for defining a `RosInfluxDBDatabase`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbdatabase
type RosInfluxDBDatabaseProps struct {
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
}

