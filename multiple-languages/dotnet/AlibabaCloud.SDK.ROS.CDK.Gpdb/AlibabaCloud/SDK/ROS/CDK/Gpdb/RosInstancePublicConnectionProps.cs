using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GPDB::InstancePublicConnection`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-gpdb.RosInstancePublicConnectionProps")]
    public class RosInstancePublicConnectionProps : AlibabaCloud.SDK.ROS.CDK.Gpdb.IRosInstancePublicConnectionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: connectionStringPrefix: The endpoint that is used to connect to the specified database.
        /// </remarks>
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ConnectionStringPrefix
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: port: The port number of the instance.
        /// </remarks>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Port
        {
            get;
            set;
        }
    }
}
