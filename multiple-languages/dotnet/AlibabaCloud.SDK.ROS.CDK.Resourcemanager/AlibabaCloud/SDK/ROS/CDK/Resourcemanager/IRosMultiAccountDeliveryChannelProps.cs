using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `RosMultiAccountDeliveryChannel`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosMultiAccountDeliveryChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannelProps")]
    public interface IRosMultiAccountDeliveryChannelProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelDescription: The description of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeliveryChannelDescription
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelFilter: The effective scope of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty\"}]}}")]
        object DeliveryChannelFilter
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: multiAccountDeliveryChannelName: The name of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "multiAccountDeliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MultiAccountDeliveryChannelName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: multiAccountDeliveryChannelId: Delivery Channel id.
        /// </remarks>
        [JsiiProperty(name: "multiAccountDeliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiAccountDeliveryChannelId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceChangeDelivery: The configurations for delivery of resource configuration change events.
        /// </remarks>
        [JsiiProperty(name: "resourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceChangeDelivery
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
        /// </remarks>
        [JsiiProperty(name: "resourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceSnapshotDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosMultiAccountDeliveryChannel`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosMultiAccountDeliveryChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannelProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosMultiAccountDeliveryChannelProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: deliveryChannelDescription: The description of the delivery channel.
            /// </remarks>
            [JsiiProperty(name: "deliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeliveryChannelDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: deliveryChannelFilter: The effective scope of the delivery channel.
            /// </remarks>
            [JsiiProperty(name: "deliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty\"}]}}")]
            public object DeliveryChannelFilter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: multiAccountDeliveryChannelName: The name of the delivery channel.
            /// </remarks>
            [JsiiProperty(name: "multiAccountDeliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MultiAccountDeliveryChannelName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: multiAccountDeliveryChannelId: Delivery Channel id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiAccountDeliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiAccountDeliveryChannelId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceChangeDelivery: The configurations for delivery of resource configuration change events.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty\"}]}}", isOptional: true)]
            public object? ResourceChangeDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty\"}]}}", isOptional: true)]
            public object? ResourceSnapshotDelivery
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
