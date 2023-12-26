using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `TrafficMirrorSessionSourcesAddition`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITrafficMirrorSessionSourcesAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.TrafficMirrorSessionSourcesAdditionProps")]
    public interface ITrafficMirrorSessionSourcesAdditionProps
    {
        /// <summary>Property trafficMirrorSessionId: The ID of the traffic mirror session.</summary>
        [JsiiProperty(name: "trafficMirrorSessionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficMirrorSessionId
        {
            get;
        }

        /// <summary>Property trafficMirrorSourceIds: undefined.</summary>
        [JsiiProperty(name: "trafficMirrorSourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object TrafficMirrorSourceIds
        {
            get;
        }

        /// <summary>Properties for defining a `TrafficMirrorSessionSourcesAddition`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITrafficMirrorSessionSourcesAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.TrafficMirrorSessionSourcesAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficMirrorSessionSourcesAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property trafficMirrorSessionId: The ID of the traffic mirror session.</summary>
            [JsiiProperty(name: "trafficMirrorSessionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficMirrorSessionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property trafficMirrorSourceIds: undefined.</summary>
            [JsiiProperty(name: "trafficMirrorSourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object TrafficMirrorSourceIds
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
