using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CEN::TransitRouters`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRoutersProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.TransitRoutersProps")]
    public interface ITransitRoutersProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property regionId: The ID of the region where the transit router is deployed.</summary>
        /// <remarks>
        /// You can call the DescribeRegions operation to query region IDs.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterId: The ID of the transit router.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CEN::TransitRouters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITransitRoutersProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.TransitRoutersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRoutersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property regionId: The ID of the region where the transit router is deployed.</summary>
            /// <remarks>
            /// You can call the DescribeRegions operation to query region IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterId: The ID of the transit router.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
