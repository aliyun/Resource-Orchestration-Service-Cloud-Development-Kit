using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GPDB::InstancePublicConnection`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-gpdb.InstancePublicConnectionProps")]
    public class InstancePublicConnectionProps : AlibabaCloud.SDK.ROS.CDK.Gpdb.IInstancePublicConnectionProps
    {
        /// <summary>Property connectionStringPrefix: The endpoint that is used to connect to the specified database.</summary>
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ConnectionStringPrefix
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbInstanceId
        {
            get;
            set;
        }

        /// <summary>Property port: The port number of the instance.</summary>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Port
        {
            get;
            set;
        }
    }
}
