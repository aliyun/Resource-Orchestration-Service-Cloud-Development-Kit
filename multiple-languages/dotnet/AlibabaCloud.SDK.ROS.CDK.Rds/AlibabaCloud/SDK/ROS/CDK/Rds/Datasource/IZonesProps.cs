using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::RDS::Zones`.</summary>
    [JsiiInterface(nativeType: typeof(IZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.ZonesProps")]
    public interface IZonesProps
    {
        /// <summary>Property engine: The database engine that is run by the instance.</summary>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Engine
        {
            get;
        }

        /// <summary>Property category: The RDS edition of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Basic: RDS Basic Edition
        /// HighAvailability: RDS High-availability Edition
        /// AlwaysOn: RDS Cluster Edition
        /// Finance: RDS Enterprise Edition
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Category
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property commodityCode: The commodity code of the instance.</summary>
        [JsiiProperty(name: "commodityCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CommodityCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported.</summary>
        /// <remarks>
        /// Valid values:
        /// 1: returns the zones.
        /// 0: does not return the zones.
        /// Default value: 0.
        /// </remarks>
        [JsiiProperty(name: "dispenseMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DispenseMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engineVersion: The version of the database engine that is run by the instance.</summary>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EngineVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The ID of the zone in which the instance is located.</summary>
        /// <remarks>
        /// If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::RDS::Zones`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.ZonesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IZonesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property engine: The database engine that is run by the instance.</summary>
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Engine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property category: The RDS edition of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Basic: RDS Basic Edition
            /// HighAvailability: RDS High-availability Edition
            /// AlwaysOn: RDS Cluster Edition
            /// Finance: RDS Enterprise Edition
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Category
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property commodityCode: The commodity code of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "commodityCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommodityCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported.</summary>
            /// <remarks>
            /// Valid values:
            /// 1: returns the zones.
            /// 0: does not return the zones.
            /// Default value: 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dispenseMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DispenseMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property engineVersion: The version of the database engine that is run by the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EngineVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The ID of the zone in which the instance is located.</summary>
            /// <remarks>
            /// If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
