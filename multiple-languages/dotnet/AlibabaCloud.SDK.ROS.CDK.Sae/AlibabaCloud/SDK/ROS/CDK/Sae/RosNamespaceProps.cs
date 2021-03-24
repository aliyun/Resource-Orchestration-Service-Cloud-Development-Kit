using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAE::Namespace`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.RosNamespaceProps")]
    public class RosNamespaceProps : AlibabaCloud.SDK.ROS.CDK.Sae.IRosNamespaceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NamespaceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceName: Namespace name
        /// </remarks>
        [JsiiProperty(name: "namespaceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NamespaceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceDescription: Namespace description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "namespaceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NamespaceDescription
        {
            get;
            set;
        }
    }
}
