using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Represents a `Domain`.</summary>
    [JsiiInterface(nativeType: typeof(IDomain), fullyQualifiedName: "@alicloud/ros-cdk-apig.IDomain")]
    public interface IDomain : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CertIdentifier: The tls Certificate identification.</summary>
        [JsiiProperty(name: "attrCertIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCertIdentifier
        {
            get;
        }

        /// <summary>Attribute DomainId: The ID of the Domain.</summary>
        [JsiiProperty(name: "attrDomainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainId
        {
            get;
        }

        /// <summary>Attribute DomainName: The name of the Domain.</summary>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainName
        {
            get;
        }

        /// <summary>Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.</summary>
        [JsiiProperty(name: "attrForceHttps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrForceHttps
        {
            get;
        }

        /// <summary>Attribute Http2Option: Whether to enable http2 settings.</summary>
        [JsiiProperty(name: "attrHttp2Option", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHttp2Option
        {
            get;
        }

        /// <summary>Attribute Protocol: The types of protocols.</summary>
        [JsiiProperty(name: "attrProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProtocol
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute TlsCipherSuitesConfig: The configuration of the TLS encryption suite.</summary>
        [JsiiProperty(name: "attrTlsCipherSuitesConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTlsCipherSuitesConfig
        {
            get;
        }

        /// <summary>Attribute TlsMax: The maximum version of the TLS protocol.</summary>
        /// <remarks>
        /// The maximum version of the TLS protocol is 1.3.
        /// </remarks>
        [JsiiProperty(name: "attrTlsMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTlsMax
        {
            get;
        }

        /// <summary>Attribute TlsMin: The minimum version of the TLS protocol.</summary>
        /// <remarks>
        /// The minimum version of the TLS protocol is 1.0.
        /// </remarks>
        [JsiiProperty(name: "attrTlsMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTlsMin
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.DomainProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apig.IDomainProps Props
        {
            get;
        }

        /// <summary>Represents a `Domain`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomain), fullyQualifiedName: "@alicloud/ros-cdk-apig.IDomain")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IDomain
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CertIdentifier: The tls Certificate identification.</summary>
            [JsiiProperty(name: "attrCertIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCertIdentifier
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DomainId: The ID of the Domain.</summary>
            [JsiiProperty(name: "attrDomainId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DomainName: The name of the Domain.</summary>
            [JsiiProperty(name: "attrDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.</summary>
            [JsiiProperty(name: "attrForceHttps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrForceHttps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Http2Option: Whether to enable http2 settings.</summary>
            [JsiiProperty(name: "attrHttp2Option", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHttp2Option
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Protocol: The types of protocols.</summary>
            [JsiiProperty(name: "attrProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TlsCipherSuitesConfig: The configuration of the TLS encryption suite.</summary>
            [JsiiProperty(name: "attrTlsCipherSuitesConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTlsCipherSuitesConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TlsMax: The maximum version of the TLS protocol.</summary>
            /// <remarks>
            /// The maximum version of the TLS protocol is 1.3.
            /// </remarks>
            [JsiiProperty(name: "attrTlsMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTlsMax
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TlsMin: The minimum version of the TLS protocol.</summary>
            /// <remarks>
            /// The minimum version of the TLS protocol is 1.0.
            /// </remarks>
            [JsiiProperty(name: "attrTlsMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTlsMin
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.DomainProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apig.IDomainProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apig.IDomainProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
