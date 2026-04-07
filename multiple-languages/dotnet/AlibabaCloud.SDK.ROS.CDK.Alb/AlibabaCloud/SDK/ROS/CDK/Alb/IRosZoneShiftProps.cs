using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `RosZoneShift`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-zoneshift
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosZoneShiftProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosZoneShiftProps")]
    public interface IRosZoneShiftProps
    {
        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the load balancer.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneMappings: The list of zone mappings. Each element contains VSwitchId and ZoneId.
        /// </remarks>
        [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosZoneShift.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ZoneMappings
        {
            get;
        }

        /// <summary>Properties for defining a `RosZoneShift`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-zoneshift
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosZoneShiftProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosZoneShiftProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IRosZoneShiftProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The ID of the load balancer.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneMappings: The list of zone mappings. Each element contains VSwitchId and ZoneId.
            /// </remarks>
            [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosZoneShift.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ZoneMappings
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
