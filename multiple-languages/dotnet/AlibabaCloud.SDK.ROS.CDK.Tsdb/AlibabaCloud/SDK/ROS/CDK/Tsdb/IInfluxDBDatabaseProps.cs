using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Tsdb
{
    /// <summary>Properties for defining a `ALIYUN::TSDB::InfluxDBDatabase`.</summary>
    [JsiiInterface(nativeType: typeof(IInfluxDBDatabaseProps), fullyQualifiedName: "@alicloud/ros-cdk-tsdb.InfluxDBDatabaseProps")]
    public interface IInfluxDBDatabaseProps
    {
        /// <summary>Property dbName: The name of database.</summary>
        /// <remarks>
        /// The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbName
        {
            get;
        }

        /// <summary>Property instanceId: The ID of TSDB for InfluxDB.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::TSDB::InfluxDBDatabase`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInfluxDBDatabaseProps), fullyQualifiedName: "@alicloud/ros-cdk-tsdb.InfluxDBDatabaseProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Tsdb.IInfluxDBDatabaseProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbName: The name of database.</summary>
            /// <remarks>
            /// The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
            /// </remarks>
            [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of TSDB for InfluxDB.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
