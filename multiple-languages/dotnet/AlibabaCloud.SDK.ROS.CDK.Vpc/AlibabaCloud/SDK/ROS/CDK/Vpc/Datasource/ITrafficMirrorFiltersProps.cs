using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::TrafficMirrorFilters`.</summary>
    [JsiiInterface(nativeType: typeof(ITrafficMirrorFiltersProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.TrafficMirrorFiltersProps")]
    public interface ITrafficMirrorFiltersProps
    {
        /// <summary>Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(ITrafficMirrorFiltersProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.TrafficMirrorFiltersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ITrafficMirrorFiltersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "trafficMirrorFilterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrafficMirrorFilterName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
