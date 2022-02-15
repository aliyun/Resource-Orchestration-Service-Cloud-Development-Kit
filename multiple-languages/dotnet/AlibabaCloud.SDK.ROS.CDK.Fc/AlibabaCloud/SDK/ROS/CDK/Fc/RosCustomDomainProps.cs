using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::CustomDomain`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosCustomDomainProps")]
    public class RosCustomDomainProps : AlibabaCloud.SDK.ROS.CDK.Fc.IRosCustomDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: domain name
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DomainName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: HTTP or HTTP,HTTPS
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Protocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: apiVersion: api version
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "apiVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ApiVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: certConfig: certificate info
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty\"}]}}", isOptional: true)]
        public object? CertConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "routeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty\"}]}}", isOptional: true)]
        public object? RouteConfig
        {
            get;
            set;
        }
    }
}
