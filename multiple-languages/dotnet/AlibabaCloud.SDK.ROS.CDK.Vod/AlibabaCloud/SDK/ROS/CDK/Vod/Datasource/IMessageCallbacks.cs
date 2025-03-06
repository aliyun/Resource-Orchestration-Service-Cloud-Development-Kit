using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod.Datasource
{
    /// <summary>Represents a `MessageCallbacks`.</summary>
    [JsiiInterface(nativeType: typeof(IMessageCallbacks), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.IMessageCallbacks")]
    public interface IMessageCallbacks : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AppIds: The list of app IDs.</summary>
        [JsiiProperty(name: "attrAppIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppIds
        {
            get;
        }

        /// <summary>Attribute MessageCallbacks: The list of message callbacks.</summary>
        [JsiiProperty(name: "attrMessageCallbacks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMessageCallbacks
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vod.datasource.MessageCallbacksProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallbacksProps Props
        {
            get;
        }

        /// <summary>Represents a `MessageCallbacks`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMessageCallbacks), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.IMessageCallbacks")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallbacks
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AppIds: The list of app IDs.</summary>
            [JsiiProperty(name: "attrAppIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MessageCallbacks: The list of message callbacks.</summary>
            [JsiiProperty(name: "attrMessageCallbacks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMessageCallbacks
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vod.datasource.MessageCallbacksProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallbacksProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallbacksProps>()!;
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
