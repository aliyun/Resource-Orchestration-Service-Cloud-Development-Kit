using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosTrafficMirrorSessionSourcesAddition`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTrafficMirrorSessionSourcesAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosTrafficMirrorSessionSourcesAdditionProps")]
    public interface IRosTrafficMirrorSessionSourcesAdditionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: trafficMirrorSessionId: The ID of the traffic mirror session.
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorSessionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficMirrorSessionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficMirrorSourceIds: undefined
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorSourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object TrafficMirrorSourceIds
        {
            get;
        }

        /// <summary>Properties for defining a `RosTrafficMirrorSessionSourcesAddition`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTrafficMirrorSessionSourcesAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosTrafficMirrorSessionSourcesAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosTrafficMirrorSessionSourcesAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficMirrorSessionId: The ID of the traffic mirror session.
            /// </remarks>
            [JsiiProperty(name: "trafficMirrorSessionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficMirrorSessionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficMirrorSourceIds: undefined
            /// </remarks>
            [JsiiProperty(name: "trafficMirrorSourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object TrafficMirrorSourceIds
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
