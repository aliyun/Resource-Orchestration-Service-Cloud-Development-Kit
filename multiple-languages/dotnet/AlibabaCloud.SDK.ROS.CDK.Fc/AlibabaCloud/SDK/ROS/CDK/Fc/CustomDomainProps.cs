using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::CustomDomain`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.CustomDomainProps")]
    public class CustomDomainProps : AlibabaCloud.SDK.ROS.CDK.Fc.ICustomDomainProps
    {
        /// <summary>Property domainName: domain name.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DomainName
        {
            get;
            set;
        }

        /// <summary>Property protocol: HTTP or HTTP,HTTPS.</summary>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Protocol
        {
            get;
            set;
        }

        /// <summary>Property apiVersion: api version.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "apiVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ApiVersion
        {
            get;
            set;
        }

        /// <summary>Property certConfig: certificate info.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "certConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? CertConfig
        {
            get;
            set;
        }

        /// <summary>Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "routeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? RouteConfig
        {
            get;
            set;
        }
    }
}
