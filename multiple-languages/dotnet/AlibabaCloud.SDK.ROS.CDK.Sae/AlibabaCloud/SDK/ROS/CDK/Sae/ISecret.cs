using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Represents a `Secret`.</summary>
    [JsiiInterface(nativeType: typeof(ISecret), fullyQualifiedName: "@alicloud/ros-cdk-sae.ISecret")]
    public interface ISecret : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute NamespaceId: The namespace ID that the Secret instance belongs to.</summary>
        [JsiiProperty(name: "attrNamespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNamespaceId
        {
            get;
        }

        /// <summary>Attribute SecretId: The ID of the secret.</summary>
        [JsiiProperty(name: "attrSecretId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecretId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-sae.SecretProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Sae.ISecretProps Props
        {
            get;
        }

        /// <summary>Represents a `Secret`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISecret), fullyQualifiedName: "@alicloud/ros-cdk-sae.ISecret")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.ISecret
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute NamespaceId: The namespace ID that the Secret instance belongs to.</summary>
            [JsiiProperty(name: "attrNamespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNamespaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecretId: The ID of the secret.</summary>
            [JsiiProperty(name: "attrSecretId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecretId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-sae.SecretProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Sae.ISecretProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Sae.ISecretProps>()!;
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
