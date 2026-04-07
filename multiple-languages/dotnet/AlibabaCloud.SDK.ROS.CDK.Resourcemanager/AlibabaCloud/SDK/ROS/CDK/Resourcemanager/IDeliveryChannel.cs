using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Represents a `DeliveryChannel`.</summary>
    [JsiiInterface(nativeType: typeof(IDeliveryChannel), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IDeliveryChannel")]
    public interface IDeliveryChannel : AlibabaCloud.SDK.ROS.CDK.Core.IResource
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

        /// <summary>Attribute DeliveryChannelId: The ID of the delivery channel.</summary>
        [JsiiProperty(name: "attrDeliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeliveryChannelId
        {
            get;
        }

        /// <summary>Attribute DeliveryChannelName: The name of the delivery channel.</summary>
        [JsiiProperty(name: "attrDeliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeliveryChannelName
        {
            get;
        }

        /// <summary>Attribute ResourceChangeDelivery: The delivery of resource configuration changes.</summary>
        [JsiiProperty(name: "attrResourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceChangeDelivery
        {
            get;
        }

        /// <summary>Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.</summary>
        [JsiiProperty(name: "attrResourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceSnapshotDelivery
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.DeliveryChannelProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IDeliveryChannelProps Props
        {
            get;
        }

        /// <summary>Represents a `DeliveryChannel`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDeliveryChannel), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IDeliveryChannel")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IDeliveryChannel
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

            /// <summary>Attribute DeliveryChannelId: The ID of the delivery channel.</summary>
            [JsiiProperty(name: "attrDeliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeliveryChannelId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeliveryChannelName: The name of the delivery channel.</summary>
            [JsiiProperty(name: "attrDeliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeliveryChannelName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceChangeDelivery: The delivery of resource configuration changes.</summary>
            [JsiiProperty(name: "attrResourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceChangeDelivery
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.</summary>
            [JsiiProperty(name: "attrResourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceSnapshotDelivery
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.DeliveryChannelProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IDeliveryChannelProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IDeliveryChannelProps>()!;
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
