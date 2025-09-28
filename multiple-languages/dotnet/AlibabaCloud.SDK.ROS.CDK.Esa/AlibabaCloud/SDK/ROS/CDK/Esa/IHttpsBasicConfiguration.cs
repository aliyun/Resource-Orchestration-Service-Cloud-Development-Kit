using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `HttpsBasicConfiguration`.</summary>
    [JsiiInterface(nativeType: typeof(IHttpsBasicConfiguration), fullyQualifiedName: "@alicloud/ros-cdk-esa.IHttpsBasicConfiguration")]
    public interface IHttpsBasicConfiguration : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.</summary>
        [JsiiProperty(name: "attrCiphersuite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCiphersuite
        {
            get;
        }

        /// <summary>Attribute CiphersuiteGroup: Cipher suite group.</summary>
        /// <remarks>
        /// Default is all cipher suites.
        /// </remarks>
        [JsiiProperty(name: "attrCiphersuiteGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCiphersuiteGroup
        {
            get;
        }

        /// <summary>Attribute ConfigId: ConfigId of the configuration.</summary>
        [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigId
        {
            get;
        }

        /// <summary>Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.</summary>
        [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigType
        {
            get;
        }

        /// <summary>Attribute Http2: Indicates whether HTTP2 is enabled.</summary>
        /// <remarks>
        /// Default is on.
        /// </remarks>
        [JsiiProperty(name: "attrHttp2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHttp2
        {
            get;
        }

        /// <summary>Attribute Http3: Whether to enable HTTP3, which is enabled by default.</summary>
        [JsiiProperty(name: "attrHttp3", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHttp3
        {
            get;
        }

        /// <summary>Attribute Https: Whether to enable HTTPS.</summary>
        /// <remarks>
        /// Default is enabled.
        /// </remarks>
        [JsiiProperty(name: "attrHttps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHttps
        {
            get;
        }

        /// <summary>Attribute OcspStapling: Indicates whether OCSP is enabled.</summary>
        /// <remarks>
        /// Default is off.
        /// </remarks>
        [JsiiProperty(name: "attrOcspStapling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOcspStapling
        {
            get;
        }

        /// <summary>Attribute Rule: Rule content, using conditional expressions to match user requests.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRule
        {
            get;
        }

        /// <summary>Attribute RuleEnable: Rule switch.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleEnable
        {
            get;
        }

        /// <summary>Attribute RuleName: Rule name.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleName
        {
            get;
        }

        /// <summary>Attribute Sequence: Order of rule execution.</summary>
        /// <remarks>
        /// The smaller the value, the higher the priority for execution.
        /// </remarks>
        [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSequence
        {
            get;
        }

        /// <summary>Attribute Tls10: Whether to enable TLS1.0. Default is disabled.</summary>
        [JsiiProperty(name: "attrTls10", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTls10
        {
            get;
        }

        /// <summary>Attribute Tls11: Whether to enable TLS1.1. Default is enabled.</summary>
        [JsiiProperty(name: "attrTls11", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTls11
        {
            get;
        }

        /// <summary>Attribute Tls12: Whether to enable TLS1.2. Default is enabled.</summary>
        [JsiiProperty(name: "attrTls12", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTls12
        {
            get;
        }

        /// <summary>Attribute Tls13: Whether to enable TLS1.3. Default is enabled.</summary>
        [JsiiProperty(name: "attrTls13", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTls13
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.HttpsBasicConfigurationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsBasicConfigurationProps Props
        {
            get;
        }

        /// <summary>Represents a `HttpsBasicConfiguration`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHttpsBasicConfiguration), fullyQualifiedName: "@alicloud/ros-cdk-esa.IHttpsBasicConfiguration")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsBasicConfiguration
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.</summary>
            [JsiiProperty(name: "attrCiphersuite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCiphersuite
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CiphersuiteGroup: Cipher suite group.</summary>
            /// <remarks>
            /// Default is all cipher suites.
            /// </remarks>
            [JsiiProperty(name: "attrCiphersuiteGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCiphersuiteGroup
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigId: ConfigId of the configuration.</summary>
            [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.</summary>
            [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Http2: Indicates whether HTTP2 is enabled.</summary>
            /// <remarks>
            /// Default is on.
            /// </remarks>
            [JsiiProperty(name: "attrHttp2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHttp2
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Http3: Whether to enable HTTP3, which is enabled by default.</summary>
            [JsiiProperty(name: "attrHttp3", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHttp3
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Https: Whether to enable HTTPS.</summary>
            /// <remarks>
            /// Default is enabled.
            /// </remarks>
            [JsiiProperty(name: "attrHttps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHttps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OcspStapling: Indicates whether OCSP is enabled.</summary>
            /// <remarks>
            /// Default is off.
            /// </remarks>
            [JsiiProperty(name: "attrOcspStapling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOcspStapling
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Rule: Rule content, using conditional expressions to match user requests.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiProperty(name: "attrRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleEnable: Rule switch.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiProperty(name: "attrRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleName: Rule name.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Sequence: Order of rule execution.</summary>
            /// <remarks>
            /// The smaller the value, the higher the priority for execution.
            /// </remarks>
            [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSequence
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tls10: Whether to enable TLS1.0. Default is disabled.</summary>
            [JsiiProperty(name: "attrTls10", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTls10
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tls11: Whether to enable TLS1.1. Default is enabled.</summary>
            [JsiiProperty(name: "attrTls11", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTls11
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tls12: Whether to enable TLS1.2. Default is enabled.</summary>
            [JsiiProperty(name: "attrTls12", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTls12
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tls13: Whether to enable TLS1.3. Default is enabled.</summary>
            [JsiiProperty(name: "attrTls13", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTls13
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.HttpsBasicConfigurationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsBasicConfigurationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsBasicConfigurationProps>()!;
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
