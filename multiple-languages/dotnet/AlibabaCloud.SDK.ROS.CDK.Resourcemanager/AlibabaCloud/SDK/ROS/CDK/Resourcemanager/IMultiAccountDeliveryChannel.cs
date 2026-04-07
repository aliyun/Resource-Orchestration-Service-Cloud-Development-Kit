using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Represents a `MultiAccountDeliveryChannel`.</summary>
    [JsiiInterface(nativeType: typeof(IMultiAccountDeliveryChannel), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IMultiAccountDeliveryChannel")]
    public interface IMultiAccountDeliveryChannel : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DeliveryChannelDescription: The description of the delivery channel.</summary>
        [JsiiProperty(name: "attrDeliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeliveryChannelDescription
        {
            get;
        }

        /// <summary>Attribute DeliveryChannelFilter: The effective scope of the delivery channel.</summary>
        [JsiiProperty(name: "attrDeliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeliveryChannelFilter
        {
            get;
        }

        /// <summary>Attribute MultiAccountDeliveryChannelId: The delivery channel ID.</summary>
        [JsiiProperty(name: "attrMultiAccountDeliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMultiAccountDeliveryChannelId
        {
            get;
        }

        /// <summary>Attribute MultiAccountDeliveryChannelName: The name of the delivery channel.</summary>
        [JsiiProperty(name: "attrMultiAccountDeliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMultiAccountDeliveryChannelName
        {
            get;
        }

        /// <summary>Attribute ResourceChangeDelivery: The configurations for delivery of resource configuration change events.</summary>
        [JsiiProperty(name: "attrResourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceChangeDelivery
        {
            get;
        }

        /// <summary>Attribute ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.</summary>
        [JsiiProperty(name: "attrResourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceSnapshotDelivery
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.MultiAccountDeliveryChannelProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IMultiAccountDeliveryChannelProps Props
        {
            get;
        }

        /// <summary>Represents a `MultiAccountDeliveryChannel`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMultiAccountDeliveryChannel), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IMultiAccountDeliveryChannel")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IMultiAccountDeliveryChannel
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DeliveryChannelDescription: The description of the delivery channel.</summary>
            [JsiiProperty(name: "attrDeliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeliveryChannelDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeliveryChannelFilter: The effective scope of the delivery channel.</summary>
            [JsiiProperty(name: "attrDeliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeliveryChannelFilter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MultiAccountDeliveryChannelId: The delivery channel ID.</summary>
            [JsiiProperty(name: "attrMultiAccountDeliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMultiAccountDeliveryChannelId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MultiAccountDeliveryChannelName: The name of the delivery channel.</summary>
            [JsiiProperty(name: "attrMultiAccountDeliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMultiAccountDeliveryChannelName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceChangeDelivery: The configurations for delivery of resource configuration change events.</summary>
            [JsiiProperty(name: "attrResourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceChangeDelivery
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.</summary>
            [JsiiProperty(name: "attrResourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceSnapshotDelivery
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.MultiAccountDeliveryChannelProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IMultiAccountDeliveryChannelProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IMultiAccountDeliveryChannelProps>()!;
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
