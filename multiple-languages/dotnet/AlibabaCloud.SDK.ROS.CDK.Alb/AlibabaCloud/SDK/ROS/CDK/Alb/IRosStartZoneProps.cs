using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `RosStartZone`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-startzone
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosStartZoneProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosStartZoneProps")]
    public interface IRosStartZoneProps
    {
        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the ALB instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneMappings: The list of zone mappings. Each element contains VSwitchId and ZoneId.
        /// </remarks>
        [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosStartZone.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ZoneMappings
        {
            get;
        }

        /// <summary>Properties for defining a `RosStartZone`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-startzone
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosStartZoneProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosStartZoneProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IRosStartZoneProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The ID of the ALB instance.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneMappings: The list of zone mappings. Each element contains VSwitchId and ZoneId.
            /// </remarks>
            [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosStartZone.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ZoneMappings
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
