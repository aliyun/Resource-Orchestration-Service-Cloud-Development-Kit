using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::CustomerGateway`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.CustomerGatewayProps")]
    public class CustomerGatewayProps : AlibabaCloud.SDK.ROS.CDK.Vpc.ICustomerGatewayProps
    {
        /// <summary>Property ipAddress: The IP address of the user gateway.</summary>
        [JsiiProperty(name: "ipAddress", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string IpAddress
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the user gateway.</summary>
        /// <remarks>
        /// The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the user gateway.</summary>
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
