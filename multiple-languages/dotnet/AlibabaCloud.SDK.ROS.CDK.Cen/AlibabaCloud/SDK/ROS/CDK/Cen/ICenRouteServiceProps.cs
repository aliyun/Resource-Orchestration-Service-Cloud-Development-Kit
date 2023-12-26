using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `CenRouteService`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenrouteservice
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICenRouteServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenRouteServiceProps")]
    public interface ICenRouteServiceProps
    {
        /// <summary>Property accessRegionId: The region where the cloud service is deployed.</summary>
        [JsiiProperty(name: "accessRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessRegionId
        {
            get;
        }

        /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property host: The domain or IP address of the cloud service.</summary>
        [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Host
        {
            get;
        }

        /// <summary>Property hostRegionId: The region where the cloud service is deployed.</summary>
        /// <remarks>
        /// You can call the DescribeRegions operation to query region IDs.
        /// Note The HostRegionId and AccessRegionIds.N must be set to the same value.
        /// </remarks>
        [JsiiProperty(name: "hostRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HostRegionId
        {
            get;
        }

        /// <summary>Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.</summary>
        [JsiiProperty(name: "hostVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HostVpcId
        {
            get;
        }

        /// <summary>Property conflictIgnore: Whether to ignore conflict when creating.</summary>
        /// <remarks>
        /// If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
        /// Default false.
        /// </remarks>
        [JsiiProperty(name: "conflictIgnore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConflictIgnore
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the cloud service.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CenRouteService`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenrouteservice
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICenRouteServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenRouteServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ICenRouteServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessRegionId: The region where the cloud service is deployed.</summary>
            [JsiiProperty(name: "accessRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property host: The domain or IP address of the cloud service.</summary>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Host
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property hostRegionId: The region where the cloud service is deployed.</summary>
            /// <remarks>
            /// You can call the DescribeRegions operation to query region IDs.
            /// Note The HostRegionId and AccessRegionIds.N must be set to the same value.
            /// </remarks>
            [JsiiProperty(name: "hostRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HostRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.</summary>
            [JsiiProperty(name: "hostVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HostVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property conflictIgnore: Whether to ignore conflict when creating.</summary>
            /// <remarks>
            /// If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
            /// Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "conflictIgnore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConflictIgnore
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the cloud service.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
