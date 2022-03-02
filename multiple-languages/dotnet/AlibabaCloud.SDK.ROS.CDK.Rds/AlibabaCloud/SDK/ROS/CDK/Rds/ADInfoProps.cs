using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::ADInfo`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.ADInfoProps")]
    public class ADInfoProps : AlibabaCloud.SDK.ROS.CDK.Rds.IADInfoProps
    {
        /// <summary>Property adAccountName: Domain account name.</summary>
        [JsiiProperty(name: "adAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AdAccountName
        {
            get;
            set;
        }

        /// <summary>Property addns: Active directory domain name.</summary>
        [JsiiProperty(name: "addns", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Addns
        {
            get;
            set;
        }

        /// <summary>Property adPassword: Domain password.</summary>
        [JsiiProperty(name: "adPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AdPassword
        {
            get;
            set;
        }

        /// <summary>Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.</summary>
        [JsiiProperty(name: "adServerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AdServerIpAddress
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
    }
}
