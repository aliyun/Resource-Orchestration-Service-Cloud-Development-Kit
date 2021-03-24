using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::SslVpnClientCert`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.SslVpnClientCertProps")]
    public class SslVpnClientCertProps : AlibabaCloud.SDK.ROS.CDK.Vpc.ISslVpnClientCertProps
    {
        /// <summary>Property sslVpnServerId: ID of the SSL-VPN server.</summary>
        [JsiiProperty(name: "sslVpnServerId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SslVpnServerId
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the client certificate.</summary>
        /// <remarks>
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }
    }
}
