using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `MultiAccountDeliveryChannel`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMultiAccountDeliveryChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.MultiAccountDeliveryChannelProps")]
    public interface IMultiAccountDeliveryChannelProps
    {
        /// <summary>Property deliveryChannelDescription: The description of the delivery channel.</summary>
        [JsiiProperty(name: "deliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeliveryChannelDescription
        {
            get;
        }

        /// <summary>Property deliveryChannelFilter: The effective scope of the delivery channel.</summary>
        [JsiiProperty(name: "deliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty\"}]}}")]
        object DeliveryChannelFilter
        {
            get;
        }

        /// <summary>Property multiAccountDeliveryChannelName: The name of the delivery channel.</summary>
        [JsiiProperty(name: "multiAccountDeliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MultiAccountDeliveryChannelName
        {
            get;
        }

        /// <summary>Property multiAccountDeliveryChannelId: Delivery Channel id.</summary>
        [JsiiProperty(name: "multiAccountDeliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiAccountDeliveryChannelId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceChangeDelivery: The configurations for delivery of resource configuration change events.</summary>
        [JsiiProperty(name: "resourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceChangeDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.</summary>
        [JsiiProperty(name: "resourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceSnapshotDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `MultiAccountDeliveryChannel`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMultiAccountDeliveryChannelProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.MultiAccountDeliveryChannelProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IMultiAccountDeliveryChannelProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property deliveryChannelDescription: The description of the delivery channel.</summary>
            [JsiiProperty(name: "deliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeliveryChannelDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deliveryChannelFilter: The effective scope of the delivery channel.</summary>
            [JsiiProperty(name: "deliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty\"}]}}")]
            public object DeliveryChannelFilter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property multiAccountDeliveryChannelName: The name of the delivery channel.</summary>
            [JsiiProperty(name: "multiAccountDeliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MultiAccountDeliveryChannelName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property multiAccountDeliveryChannelId: Delivery Channel id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "multiAccountDeliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiAccountDeliveryChannelId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceChangeDelivery: The configurations for delivery of resource configuration change events.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty\"}]}}", isOptional: true)]
            public object? ResourceChangeDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty\"}]}}", isOptional: true)]
            public object? ResourceSnapshotDelivery
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
