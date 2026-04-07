using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `DeliveryChannel`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDeliveryChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.DeliveryChannelProps")]
    public interface IDeliveryChannelProps
    {
        /// <summary>Property deliveryChannelFilter: The effective scope of the delivery channel.</summary>
        [JsiiProperty(name: "deliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty\"}]}}")]
        object DeliveryChannelFilter
        {
            get;
        }

        /// <summary>Property deliveryChannelName: The name of the delivery channel.</summary>
        [JsiiProperty(name: "deliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeliveryChannelName
        {
            get;
        }

        /// <summary>Property deliveryChannelDescription: The description of the delivery channel.</summary>
        [JsiiProperty(name: "deliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliveryChannelDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deliveryChannelId: The ID of the delivery channel.</summary>
        [JsiiProperty(name: "deliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliveryChannelId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enabledResourceChangeDelivery: Enable resource change delivery.</summary>
        [JsiiProperty(name: "enabledResourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnabledResourceChangeDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.</summary>
        [JsiiProperty(name: "enabledResourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnabledResourceSnapshotDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceChangeDelivery: The delivery of resource configuration changes.</summary>
        [JsiiProperty(name: "resourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceChangeDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.</summary>
        [JsiiProperty(name: "resourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceSnapshotDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DeliveryChannel`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDeliveryChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.DeliveryChannelProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IDeliveryChannelProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property deliveryChannelFilter: The effective scope of the delivery channel.</summary>
            [JsiiProperty(name: "deliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty\"}]}}")]
            public object DeliveryChannelFilter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deliveryChannelName: The name of the delivery channel.</summary>
            [JsiiProperty(name: "deliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeliveryChannelName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deliveryChannelDescription: The description of the delivery channel.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliveryChannelDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deliveryChannelId: The ID of the delivery channel.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliveryChannelId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enabledResourceChangeDelivery: Enable resource change delivery.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enabledResourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnabledResourceChangeDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enabledResourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnabledResourceSnapshotDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceChangeDelivery: The delivery of resource configuration changes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty\"}]}}", isOptional: true)]
            public object? ResourceChangeDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty\"}]}}", isOptional: true)]
            public object? ResourceSnapshotDelivery
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
