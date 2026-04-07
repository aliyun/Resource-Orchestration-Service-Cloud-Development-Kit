using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hdr
{
    /// <summary>Properties for defining a `RosSitePair`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSitePairProps), fullyQualifiedName: "@alicloud/ros-cdk-hdr.RosSitePairProps")]
    public interface IRosSitePairProps
    {
        /// <remarks>
        /// <strong>Property</strong>: primarySiteName: The name of the primary site.
        /// </remarks>
        [JsiiProperty(name: "primarySiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimarySiteName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: primarySiteRegionId: The region ID of the primary site.
        /// </remarks>
        [JsiiProperty(name: "primarySiteRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimarySiteRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: primarySiteType: The type of the primary site. Valid values: VPC, VSwitch, VRouter.
        /// </remarks>
        [JsiiProperty(name: "primarySiteType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimarySiteType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: primarySiteVpcId: The VPC ID of the primary site.
        /// </remarks>
        [JsiiProperty(name: "primarySiteVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimarySiteVpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: secondarySiteName: The name of the secondary site.
        /// </remarks>
        [JsiiProperty(name: "secondarySiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecondarySiteName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: secondarySiteRegionId: The region ID of the secondary site.
        /// </remarks>
        [JsiiProperty(name: "secondarySiteRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecondarySiteRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: secondarySiteType: The type of the secondary site. Valid values: VPC, VSwitch, VRouter.
        /// </remarks>
        [JsiiProperty(name: "secondarySiteType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecondarySiteType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: secondarySiteVpcId: The VPC ID of the secondary site.
        /// </remarks>
        [JsiiProperty(name: "secondarySiteVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecondarySiteVpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: primarySiteZoneId: The zone ID of the primary site.
        /// </remarks>
        [JsiiProperty(name: "primarySiteZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrimarySiteZoneId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: secondarySiteZoneId: The zone ID of the secondary site.
        /// </remarks>
        [JsiiProperty(name: "secondarySiteZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondarySiteZoneId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sitePairType: The type of the site pair.
        /// </remarks>
        [JsiiProperty(name: "sitePairType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SitePairType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSitePair`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSitePairProps), fullyQualifiedName: "@alicloud/ros-cdk-hdr.RosSitePairProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hdr.IRosSitePairProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: primarySiteName: The name of the primary site.
            /// </remarks>
            [JsiiProperty(name: "primarySiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimarySiteName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: primarySiteRegionId: The region ID of the primary site.
            /// </remarks>
            [JsiiProperty(name: "primarySiteRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimarySiteRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: primarySiteType: The type of the primary site. Valid values: VPC, VSwitch, VRouter.
            /// </remarks>
            [JsiiProperty(name: "primarySiteType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimarySiteType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: primarySiteVpcId: The VPC ID of the primary site.
            /// </remarks>
            [JsiiProperty(name: "primarySiteVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimarySiteVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: secondarySiteName: The name of the secondary site.
            /// </remarks>
            [JsiiProperty(name: "secondarySiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecondarySiteName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: secondarySiteRegionId: The region ID of the secondary site.
            /// </remarks>
            [JsiiProperty(name: "secondarySiteRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecondarySiteRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: secondarySiteType: The type of the secondary site. Valid values: VPC, VSwitch, VRouter.
            /// </remarks>
            [JsiiProperty(name: "secondarySiteType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecondarySiteType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: secondarySiteVpcId: The VPC ID of the secondary site.
            /// </remarks>
            [JsiiProperty(name: "secondarySiteVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecondarySiteVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: primarySiteZoneId: The zone ID of the primary site.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "primarySiteZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrimarySiteZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secondarySiteZoneId: The zone ID of the secondary site.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secondarySiteZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecondarySiteZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sitePairType: The type of the site pair.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sitePairType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SitePairType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
