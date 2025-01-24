using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Represents a `OIDCProvider`.</summary>
    [JsiiInterface(nativeType: typeof(IOIDCProvider), fullyQualifiedName: "@alicloud/ros-cdk-ram.IOIDCProvider")]
    public interface IOIDCProvider : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute OIDCProviderName: The name of the OIDC IdP.</summary>
        /// <remarks>
        /// The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
        /// The name can be up to 128 characters in length.
        /// </remarks>
        [JsiiProperty(name: "attrOidcProviderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOidcProviderName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.OIDCProviderProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ram.IOIDCProviderProps Props
        {
            get;
        }

        /// <summary>Represents a `OIDCProvider`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IOIDCProvider), fullyQualifiedName: "@alicloud/ros-cdk-ram.IOIDCProvider")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IOIDCProvider
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute OIDCProviderName: The name of the OIDC IdP.</summary>
            /// <remarks>
            /// The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
            /// The name can be up to 128 characters in length.
            /// </remarks>
            [JsiiProperty(name: "attrOidcProviderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOidcProviderName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.OIDCProviderProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ram.IOIDCProviderProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ram.IOIDCProviderProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
