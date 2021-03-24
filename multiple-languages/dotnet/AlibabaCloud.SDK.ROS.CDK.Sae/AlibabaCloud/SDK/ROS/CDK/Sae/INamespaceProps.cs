using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `ALIYUN::SAE::Namespace`.</summary>
    [JsiiInterface(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.NamespaceProps")]
    public interface INamespaceProps
    {
        /// <summary>Property namespaceId: Namespace ID.</summary>
        /// <remarks>
        /// Format: "regionId:logicalId" or "logicalId"
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}")]
        string NamespaceId
        {
            get;
        }

        /// <summary>Property namespaceName: Namespace name.</summary>
        [JsiiProperty(name: "namespaceName", typeJson: "{\"primitive\":\"string\"}")]
        string NamespaceName
        {
            get;
        }

        /// <summary>Property namespaceDescription: Namespace description.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(INamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.NamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.INamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property namespaceId: Namespace ID.</summary>
            /// <remarks>
            /// Format: "regionId:logicalId" or "logicalId"
            /// </remarks>
            [JsiiProperty(name: "namespaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string NamespaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property namespaceName: Namespace name.</summary>
            [JsiiProperty(name: "namespaceName", typeJson: "{\"primitive\":\"string\"}")]
            public string NamespaceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property namespaceDescription: Namespace description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NamespaceDescription
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
