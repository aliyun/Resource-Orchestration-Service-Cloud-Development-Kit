using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CEN::CenBandwidthPackages`.</summary>
    [JsiiInterface(nativeType: typeof(IRosCenBandwidthPackagesProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.RosCenBandwidthPackagesProps")]
    public interface IRosCenBandwidthPackagesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: filter: Filter value when querying resources
        /// </remarks>
        [JsiiProperty(name: "filter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.RosCenBandwidthPackages.FilterProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Filter
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: includeReservationData: Specifies whether to include renewal data.
        /// </remarks>
        [JsiiProperty(name: "includeReservationData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IncludeReservationData
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: isOrKey: The logical operator between the filter conditions.
        /// </remarks>
        [JsiiProperty(name: "isOrKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsOrKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CEN::CenBandwidthPackages`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosCenBandwidthPackagesProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.RosCenBandwidthPackagesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.IRosCenBandwidthPackagesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: filter: Filter value when querying resources
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.RosCenBandwidthPackages.FilterProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Filter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: includeReservationData: Specifies whether to include renewal data.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "includeReservationData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncludeReservationData
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: isOrKey: The logical operator between the filter conditions.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isOrKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsOrKey
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
