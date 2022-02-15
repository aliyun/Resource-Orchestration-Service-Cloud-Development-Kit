using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAE::Namespace`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.NamespaceProps")]
    public class NamespaceProps : AlibabaCloud.SDK.ROS.CDK.Sae.INamespaceProps
    {
        /// <summary>Property namespaceId: Namespace ID.</summary>
        /// <remarks>
        /// Format: "regionId:logicalId" or "logicalId"
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NamespaceId
        {
            get;
            set;
        }

        /// <summary>Property namespaceName: Namespace name.</summary>
        [JsiiProperty(name: "namespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NamespaceName
        {
            get;
            set;
        }

        /// <summary>Property namespaceDescription: Namespace description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "namespaceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NamespaceDescription
        {
            get;
            set;
        }
    }
}
