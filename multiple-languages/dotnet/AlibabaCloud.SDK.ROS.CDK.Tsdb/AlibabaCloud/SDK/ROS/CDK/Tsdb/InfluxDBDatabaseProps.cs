using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Tsdb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::TSDB::InfluxDBDatabase`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-tsdb.InfluxDBDatabaseProps")]
    public class InfluxDBDatabaseProps : AlibabaCloud.SDK.ROS.CDK.Tsdb.IInfluxDBDatabaseProps
    {
        /// <summary>Property dbName: The name of database.</summary>
        /// <remarks>
        /// The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbName
        {
            get;
            set;
        }

        /// <summary>Property instanceId: The ID of TSDB for InfluxDB.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceId
        {
            get;
            set;
        }
    }
}
