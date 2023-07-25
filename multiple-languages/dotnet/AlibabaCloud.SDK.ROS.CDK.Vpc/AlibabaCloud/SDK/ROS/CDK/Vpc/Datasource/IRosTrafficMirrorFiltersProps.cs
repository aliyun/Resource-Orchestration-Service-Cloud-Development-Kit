using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::TrafficMirrorFilters`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTrafficMirrorFiltersProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFiltersProps")]
    public interface IRosTrafficMirrorFiltersProps
    {
        /// <remarks>
        /// <strong>Property</strong>: trafficMirrorFilterName: The name of the TrafficMirrorFilter.
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorFilterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrafficMirrorFilterName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::TrafficMirrorFilters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosTrafficMirrorFiltersProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFiltersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosTrafficMirrorFiltersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficMirrorFilterName: The name of the TrafficMirrorFilter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trafficMirrorFilterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrafficMirrorFilterName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
