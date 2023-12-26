using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Properties for defining a `CenBandwidthPackages`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICenBandwidthPackagesProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.CenBandwidthPackagesProps")]
    public interface ICenBandwidthPackagesProps
    {
        /// <summary>Property filter: Filter value when querying resources.</summary>
        [JsiiProperty(name: "filter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.RosCenBandwidthPackages.FilterProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Filter
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property includeReservationData: Specifies whether to include renewal data.</summary>
        [JsiiProperty(name: "includeReservationData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IncludeReservationData
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isOrKey: The logical operator between the filter conditions.</summary>
        [JsiiProperty(name: "isOrKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsOrKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CenBandwidthPackages`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICenBandwidthPackagesProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.CenBandwidthPackagesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ICenBandwidthPackagesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property filter: Filter value when querying resources.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "filter", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.RosCenBandwidthPackages.FilterProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Filter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property includeReservationData: Specifies whether to include renewal data.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "includeReservationData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncludeReservationData
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isOrKey: The logical operator between the filter conditions.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "isOrKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsOrKey
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
