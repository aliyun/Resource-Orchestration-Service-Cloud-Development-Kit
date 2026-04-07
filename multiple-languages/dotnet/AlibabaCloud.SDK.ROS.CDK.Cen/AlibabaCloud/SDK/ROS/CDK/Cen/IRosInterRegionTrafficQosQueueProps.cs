using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosInterRegionTrafficQosQueue`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqosqueue
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInterRegionTrafficQosQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosInterRegionTrafficQosQueueProps")]
    public interface IRosInterRegionTrafficQosQueueProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63.
        /// </remarks>
        [JsiiProperty(name: "dscps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Dscps
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficQosPolicyId: The ID of the QoS policy.
        /// </remarks>
        [JsiiProperty(name: "trafficQosPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficQosPolicyId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The maximum absolute bandwidth value that can be allocated to the queue. Unit: Mbit\/s.
        /// * The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit\/s of bandwidth.
        /// * The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: interRegionTrafficQosQueueDescription: The description of the queue. This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "interRegionTrafficQosQueueDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InterRegionTrafficQosQueueDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: interRegionTrafficQosQueueName: The name of the queue. The name can be empty or 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "interRegionTrafficQosQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InterRegionTrafficQosQueueName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
        /// * Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth.
        /// * The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.
        /// </remarks>
        [JsiiProperty(name: "remainBandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RemainBandwidthPercent
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosInterRegionTrafficQosQueue`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqosqueue
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInterRegionTrafficQosQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosInterRegionTrafficQosQueueProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosInterRegionTrafficQosQueueProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63.
            /// </remarks>
            [JsiiProperty(name: "dscps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Dscps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficQosPolicyId: The ID of the QoS policy.
            /// </remarks>
            [JsiiProperty(name: "trafficQosPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficQosPolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: The maximum absolute bandwidth value that can be allocated to the queue. Unit: Mbit\/s.
            /// * The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit\/s of bandwidth.
            /// * The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: interRegionTrafficQosQueueDescription: The description of the queue. This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interRegionTrafficQosQueueDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InterRegionTrafficQosQueueDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: interRegionTrafficQosQueueName: The name of the queue. The name can be empty or 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interRegionTrafficQosQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InterRegionTrafficQosQueueName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
            /// * Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth.
            /// * The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remainBandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RemainBandwidthPercent
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
