using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Represents a `Key`.</summary>
    [JsiiInterface(nativeType: typeof(IKey), fullyQualifiedName: "@alicloud/ros-cdk-kms.IKey")]
    public interface IKey : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute KeyId: The globally unique identifier for the CMK.</summary>
        [JsiiProperty(name: "attrKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeyId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-kms.KeyProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Kms.IKeyProps Props
        {
            get;
        }

        /// <summary>Represents a `Key`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IKey), fullyQualifiedName: "@alicloud/ros-cdk-kms.IKey")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.IKey
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute KeyId: The globally unique identifier for the CMK.</summary>
            [JsiiProperty(name: "attrKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeyId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-kms.KeyProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Kms.IKeyProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Kms.IKeyProps>()!;
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
