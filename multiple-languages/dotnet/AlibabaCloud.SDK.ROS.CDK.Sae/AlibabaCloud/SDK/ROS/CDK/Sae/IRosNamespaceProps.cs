using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `ALIYUN::SAE::Namespace`.</summary>
    [JsiiInterface(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosNamespaceProps")]
    public interface IRosNamespaceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}")]
        string NamespaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceName: Namespace name
        /// </remarks>
        [JsiiProperty(name: "namespaceName", typeJson: "{\"primitive\":\"string\"}")]
        string NamespaceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceDescription: Namespace description
        /// </remarks>
        [JsiiProperty(name: "namespaceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NamespaceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SAE::Namespace`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosNamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.IRosNamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
            /// </remarks>
            [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string NamespaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceName: Namespace name
            /// </remarks>
            [JsiiProperty(name: "namespaceName", typeJson: "{\"primitive\":\"string\"}")]
            public string NamespaceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceDescription: Namespace description
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NamespaceDescription
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
