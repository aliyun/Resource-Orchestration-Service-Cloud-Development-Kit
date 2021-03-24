using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CR::Namespace`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.NamespaceProps")]
    public class NamespaceProps : AlibabaCloud.SDK.ROS.CDK.Cr.INamespaceProps
    {
        /// <summary>Property namespace: domain name.</summary>
        [JsiiProperty(name: "namespace", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Namespace
        {
            get;
            set;
        }

        /// <summary>Property autoCreate: whether auto create repository.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoCreate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoCreate
        {
            get;
            set;
        }

        /// <summary>Property defaultVisibility: repository default visibility, public or private.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "defaultVisibility", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DefaultVisibility
        {
            get;
            set;
        }
    }
}
