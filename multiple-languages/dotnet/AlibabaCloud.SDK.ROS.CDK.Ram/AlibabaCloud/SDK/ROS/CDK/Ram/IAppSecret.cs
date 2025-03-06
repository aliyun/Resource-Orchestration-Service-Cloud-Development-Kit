using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Represents a `AppSecret`.</summary>
    [JsiiInterface(nativeType: typeof(IAppSecret), fullyQualifiedName: "@alicloud/ros-cdk-ram.IAppSecret")]
    public interface IAppSecret : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AppSecretId: The ID of the application secret.</summary>
        [JsiiProperty(name: "attrAppSecretId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppSecretId
        {
            get;
        }

        /// <summary>Attribute AppSecretValue: The content of the application secret.</summary>
        /// <remarks>
        /// This value can be used as the client secret for open authorization.
        /// </remarks>
        [JsiiProperty(name: "attrAppSecretValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppSecretValue
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.AppSecretProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ram.IAppSecretProps Props
        {
            get;
        }

        /// <summary>Represents a `AppSecret`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAppSecret), fullyQualifiedName: "@alicloud/ros-cdk-ram.IAppSecret")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IAppSecret
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AppSecretId: The ID of the application secret.</summary>
            [JsiiProperty(name: "attrAppSecretId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppSecretId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AppSecretValue: The content of the application secret.</summary>
            /// <remarks>
            /// This value can be used as the client secret for open authorization.
            /// </remarks>
            [JsiiProperty(name: "attrAppSecretValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppSecretValue
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.AppSecretProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ram.IAppSecretProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ram.IAppSecretProps>()!;
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
