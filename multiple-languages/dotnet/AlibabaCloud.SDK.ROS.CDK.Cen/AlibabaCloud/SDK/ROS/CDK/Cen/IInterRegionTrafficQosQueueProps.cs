using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `InterRegionTrafficQosQueue`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqosqueue
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInterRegionTrafficQosQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.InterRegionTrafficQosQueueProps")]
    public interface IInterRegionTrafficQosQueueProps
    {
        /// <summary>Property dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63.</summary>
        [JsiiProperty(name: "dscps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Dscps
        {
            get;
        }

        /// <summary>Property trafficQosPolicyId: The ID of the QoS policy.</summary>
        [JsiiProperty(name: "trafficQosPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficQosPolicyId
        {
            get;
        }

        /// <summary>Property bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        ///
        /// <list type="bullet">
        /// <description>The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit/s of bandwidth.</description>
        /// <description>The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.</description>
        /// </list>
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

        /// <summary>Property interRegionTrafficQosQueueDescription: The description of the queue.</summary>
        /// <remarks>
        /// This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
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

        /// <summary>Property interRegionTrafficQosQueueName: The name of the queue.</summary>
        /// <remarks>
        /// The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
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

        /// <summary>Property remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth.
        ///
        /// <list type="bullet">
        /// <description>The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.</description>
        /// </list></description>
        /// </list>
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

        /// <summary>Properties for defining a `InterRegionTrafficQosQueue`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqosqueue
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInterRegionTrafficQosQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.InterRegionTrafficQosQueueProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosQueueProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63.</summary>
            [JsiiProperty(name: "dscps", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Dscps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property trafficQosPolicyId: The ID of the QoS policy.</summary>
            [JsiiProperty(name: "trafficQosPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficQosPolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            ///
            /// <list type="bullet">
            /// <description>The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit/s of bandwidth.</description>
            /// <description>The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property interRegionTrafficQosQueueDescription: The description of the queue.</summary>
            /// <remarks>
            /// This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interRegionTrafficQosQueueDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InterRegionTrafficQosQueueDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property interRegionTrafficQosQueueName: The name of the queue.</summary>
            /// <remarks>
            /// The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interRegionTrafficQosQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InterRegionTrafficQosQueueName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth.
            ///
            /// <list type="bullet">
            /// <description>The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.</description>
            /// </list></description>
            /// </list>
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
