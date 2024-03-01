using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosTrafficMirrorFilter`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTrafficMirrorFilterProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFilterProps")]
    public interface IRosTrafficMirrorFilterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: trafficMirrorFilterId: The first ID of the resource.
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorFilterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficMirrorFilterId
        {
            get;
        }

        /// <summary>Properties for defining a `RosTrafficMirrorFilter`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTrafficMirrorFilterProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFilterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosTrafficMirrorFilterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficMirrorFilterId: The first ID of the resource.
            /// </remarks>
            [JsiiProperty(name: "trafficMirrorFilterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficMirrorFilterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
