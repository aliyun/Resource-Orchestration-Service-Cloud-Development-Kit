using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::ADInfo`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.RosADInfoProps")]
    public class RosADInfoProps : AlibabaCloud.SDK.ROS.CDK.Rds.IRosADInfoProps
    {
        /// <remarks>
        /// <strong>Property</strong>: adAccountName: Domain account name.
        /// </remarks>
        [JsiiProperty(name: "adAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AdAccountName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: addns: Active directory domain name.
        /// </remarks>
        [JsiiProperty(name: "addns", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Addns
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: adPassword: Domain password.
        /// </remarks>
        [JsiiProperty(name: "adPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AdPassword
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        /// </remarks>
        [JsiiProperty(name: "adServerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AdServerIpAddress
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DbInstanceId
        {
            get;
            set;
        }
    }
}
