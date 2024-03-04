using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `TrafficMirrorFilter`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITrafficMirrorFilterProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.TrafficMirrorFilterProps")]
    public interface ITrafficMirrorFilterProps
    {
        /// <summary>Property trafficMirrorFilterId: The first ID of the resource.</summary>
        [JsiiProperty(name: "trafficMirrorFilterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficMirrorFilterId
        {
            get;
        }

        /// <summary>Properties for defining a `TrafficMirrorFilter`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITrafficMirrorFilterProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.TrafficMirrorFilterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ITrafficMirrorFilterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property trafficMirrorFilterId: The first ID of the resource.</summary>
            [JsiiProperty(name: "trafficMirrorFilterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficMirrorFilterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
