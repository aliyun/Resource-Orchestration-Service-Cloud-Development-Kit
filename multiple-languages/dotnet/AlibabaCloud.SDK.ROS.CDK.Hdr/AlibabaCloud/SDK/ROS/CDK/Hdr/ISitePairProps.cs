using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hdr
{
    /// <summary>Properties for defining a `SitePair`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISitePairProps), fullyQualifiedName: "@alicloud/ros-cdk-hdr.SitePairProps")]
    public interface ISitePairProps
    {
        /// <summary>Property primarySiteName: The name of the primary site.</summary>
        [JsiiProperty(name: "primarySiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimarySiteName
        {
            get;
        }

        /// <summary>Property primarySiteRegionId: The region ID of the primary site.</summary>
        [JsiiProperty(name: "primarySiteRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimarySiteRegionId
        {
            get;
        }

        /// <summary>Property primarySiteType: The type of the primary site.</summary>
        /// <remarks>
        /// Valid values: VPC, VSwitch, VRouter.
        /// </remarks>
        [JsiiProperty(name: "primarySiteType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimarySiteType
        {
            get;
        }

        /// <summary>Property primarySiteVpcId: The VPC ID of the primary site.</summary>
        [JsiiProperty(name: "primarySiteVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimarySiteVpcId
        {
            get;
        }

        /// <summary>Property secondarySiteName: The name of the secondary site.</summary>
        [JsiiProperty(name: "secondarySiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecondarySiteName
        {
            get;
        }

        /// <summary>Property secondarySiteRegionId: The region ID of the secondary site.</summary>
        [JsiiProperty(name: "secondarySiteRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecondarySiteRegionId
        {
            get;
        }

        /// <summary>Property secondarySiteType: The type of the secondary site.</summary>
        /// <remarks>
        /// Valid values: VPC, VSwitch, VRouter.
        /// </remarks>
        [JsiiProperty(name: "secondarySiteType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecondarySiteType
        {
            get;
        }

        /// <summary>Property secondarySiteVpcId: The VPC ID of the secondary site.</summary>
        [JsiiProperty(name: "secondarySiteVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecondarySiteVpcId
        {
            get;
        }

        /// <summary>Property primarySiteZoneId: The zone ID of the primary site.</summary>
        [JsiiProperty(name: "primarySiteZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrimarySiteZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secondarySiteZoneId: The zone ID of the secondary site.</summary>
        [JsiiProperty(name: "secondarySiteZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondarySiteZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sitePairType: The type of the site pair.</summary>
        [JsiiProperty(name: "sitePairType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SitePairType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SitePair`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISitePairProps), fullyQualifiedName: "@alicloud/ros-cdk-hdr.SitePairProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hdr.ISitePairProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property primarySiteName: The name of the primary site.</summary>
            [JsiiProperty(name: "primarySiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimarySiteName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property primarySiteRegionId: The region ID of the primary site.</summary>
            [JsiiProperty(name: "primarySiteRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimarySiteRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property primarySiteType: The type of the primary site.</summary>
            /// <remarks>
            /// Valid values: VPC, VSwitch, VRouter.
            /// </remarks>
            [JsiiProperty(name: "primarySiteType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimarySiteType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property primarySiteVpcId: The VPC ID of the primary site.</summary>
            [JsiiProperty(name: "primarySiteVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimarySiteVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property secondarySiteName: The name of the secondary site.</summary>
            [JsiiProperty(name: "secondarySiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecondarySiteName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property secondarySiteRegionId: The region ID of the secondary site.</summary>
            [JsiiProperty(name: "secondarySiteRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecondarySiteRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property secondarySiteType: The type of the secondary site.</summary>
            /// <remarks>
            /// Valid values: VPC, VSwitch, VRouter.
            /// </remarks>
            [JsiiProperty(name: "secondarySiteType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecondarySiteType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property secondarySiteVpcId: The VPC ID of the secondary site.</summary>
            [JsiiProperty(name: "secondarySiteVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecondarySiteVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property primarySiteZoneId: The zone ID of the primary site.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "primarySiteZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrimarySiteZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secondarySiteZoneId: The zone ID of the secondary site.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "secondarySiteZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecondarySiteZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sitePairType: The type of the site pair.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sitePairType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SitePairType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
