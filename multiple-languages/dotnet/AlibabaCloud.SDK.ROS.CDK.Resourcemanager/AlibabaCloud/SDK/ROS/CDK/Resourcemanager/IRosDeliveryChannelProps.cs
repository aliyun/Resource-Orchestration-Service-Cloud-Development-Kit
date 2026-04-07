using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `RosDeliveryChannel`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDeliveryChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannelProps")]
    public interface IRosDeliveryChannelProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelFilter: The effective scope of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty\"}]}}")]
        object DeliveryChannelFilter
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelName: The name of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeliveryChannelName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelDescription: The description of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliveryChannelDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelId: The ID of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliveryChannelId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enabledResourceChangeDelivery: Enable resource change delivery.
        /// </remarks>
        [JsiiProperty(name: "enabledResourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnabledResourceChangeDelivery
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
        /// </remarks>
        [JsiiProperty(name: "enabledResourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnabledResourceSnapshotDelivery
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceChangeDelivery: The delivery of resource configuration changes.
        /// </remarks>
        [JsiiProperty(name: "resourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceChangeDelivery
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
        /// </remarks>
        [JsiiProperty(name: "resourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceSnapshotDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDeliveryChannel`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDeliveryChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannelProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosDeliveryChannelProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: deliveryChannelFilter: The effective scope of the delivery channel.
            /// </remarks>
            [JsiiProperty(name: "deliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty\"}]}}")]
            public object DeliveryChannelFilter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: deliveryChannelName: The name of the delivery channel.
            /// </remarks>
            [JsiiProperty(name: "deliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeliveryChannelName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: deliveryChannelDescription: The description of the delivery channel.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliveryChannelDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deliveryChannelId: The ID of the delivery channel.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliveryChannelId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enabledResourceChangeDelivery: Enable resource change delivery.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enabledResourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnabledResourceChangeDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enabledResourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnabledResourceSnapshotDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceChangeDelivery: The delivery of resource configuration changes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty\"}]}}", isOptional: true)]
            public object? ResourceChangeDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty\"}]}}", isOptional: true)]
            public object? ResourceSnapshotDelivery
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
