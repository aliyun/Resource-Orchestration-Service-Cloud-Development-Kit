using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RosMultiAccountDeliveryChannel`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannelProps")]
    public class RosMultiAccountDeliveryChannelProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosMultiAccountDeliveryChannelProps
    {
        private object _deliveryChannelDescription;

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelDescription: The description of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DeliveryChannelDescription
        {
            get => _deliveryChannelDescription;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _deliveryChannelDescription = value;
            }
        }

        private object _deliveryChannelFilter;

        /// <remarks>
        /// <strong>Property</strong>: deliveryChannelFilter: The effective scope of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "deliveryChannelFilter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty\"}]}}")]
        public object DeliveryChannelFilter
        {
            get => _deliveryChannelFilter;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosMultiAccountDeliveryChannel.IDeliveryChannelFilterProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosMultiAccountDeliveryChannel.IDeliveryChannelFilterProperty).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosMultiAccountDeliveryChannel.IDeliveryChannelFilterProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _deliveryChannelFilter = value;
            }
        }

        private object _multiAccountDeliveryChannelName;

        /// <remarks>
        /// <strong>Property</strong>: multiAccountDeliveryChannelName: The name of the delivery channel.
        /// </remarks>
        [JsiiProperty(name: "multiAccountDeliveryChannelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object MultiAccountDeliveryChannelName
        {
            get => _multiAccountDeliveryChannelName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _multiAccountDeliveryChannelName = value;
            }
        }

        private object? _multiAccountDeliveryChannelId;

        /// <remarks>
        /// <strong>Property</strong>: multiAccountDeliveryChannelId: Delivery Channel id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "multiAccountDeliveryChannelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MultiAccountDeliveryChannelId
        {
            get => _multiAccountDeliveryChannelId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _multiAccountDeliveryChannelId = value;
            }
        }

        private object? _resourceChangeDelivery;

        /// <remarks>
        /// <strong>Property</strong>: resourceChangeDelivery: The configurations for delivery of resource configuration change events.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceChangeDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty\"}]}}", isOptional: true)]
        public object? ResourceChangeDelivery
        {
            get => _resourceChangeDelivery;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosMultiAccountDeliveryChannel.IResourceChangeDeliveryProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosMultiAccountDeliveryChannel.IResourceChangeDeliveryProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceChangeDelivery = value;
            }
        }

        private object? _resourceSnapshotDelivery;

        /// <remarks>
        /// <strong>Property</strong>: resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceSnapshotDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty\"}]}}", isOptional: true)]
        public object? ResourceSnapshotDelivery
        {
            get => _resourceSnapshotDelivery;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosMultiAccountDeliveryChannel.IResourceSnapshotDeliveryProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.RosMultiAccountDeliveryChannel.IResourceSnapshotDeliveryProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceSnapshotDelivery = value;
            }
        }
    }
}
