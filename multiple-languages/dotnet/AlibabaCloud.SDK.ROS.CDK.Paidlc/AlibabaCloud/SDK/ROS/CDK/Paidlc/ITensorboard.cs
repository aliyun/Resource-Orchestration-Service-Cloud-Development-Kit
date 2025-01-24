using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paidlc
{
    /// <summary>Represents a `Tensorboard`.</summary>
    [JsiiInterface(nativeType: typeof(ITensorboard), fullyQualifiedName: "@alicloud/ros-cdk-paidlc.ITensorboard")]
    public interface ITensorboard : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute TensorboardId: Tensorboard id.</summary>
        [JsiiProperty(name: "attrTensorboardId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTensorboardId
        {
            get;
        }

        /// <summary>Attribute TensorboardUrl: Tensorboard url.</summary>
        [JsiiProperty(name: "attrTensorboardUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTensorboardUrl
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-paidlc.TensorboardProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Paidlc.ITensorboardProps Props
        {
            get;
        }

        /// <summary>Represents a `Tensorboard`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITensorboard), fullyQualifiedName: "@alicloud/ros-cdk-paidlc.ITensorboard")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paidlc.ITensorboard
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute TensorboardId: Tensorboard id.</summary>
            [JsiiProperty(name: "attrTensorboardId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTensorboardId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TensorboardUrl: Tensorboard url.</summary>
            [JsiiProperty(name: "attrTensorboardUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTensorboardUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-paidlc.TensorboardProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Paidlc.ITensorboardProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Paidlc.ITensorboardProps>()!;
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
