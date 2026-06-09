using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bailian
{
    /// <summary>Represents a `ApiKey`.</summary>
    [JsiiInterface(nativeType: typeof(IApiKey), fullyQualifiedName: "@alicloud/ros-cdk-bailian.IApiKey")]
    public interface IApiKey : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ApiKeyId: The id of the API key.</summary>
        [JsiiProperty(name: "attrApiKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrApiKeyId
        {
            get;
        }

        /// <summary>Attribute Key: The value of the API key.</summary>
        [JsiiProperty(name: "attrKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKey
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-bailian.ApiKeyProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Bailian.IApiKeyProps Props
        {
            get;
        }

        /// <summary>Represents a `ApiKey`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IApiKey), fullyQualifiedName: "@alicloud/ros-cdk-bailian.IApiKey")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bailian.IApiKey
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ApiKeyId: The id of the API key.</summary>
            [JsiiProperty(name: "attrApiKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrApiKeyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Key: The value of the API key.</summary>
            [JsiiProperty(name: "attrKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKey
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-bailian.ApiKeyProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Bailian.IApiKeyProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Bailian.IApiKeyProps>()!;
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
