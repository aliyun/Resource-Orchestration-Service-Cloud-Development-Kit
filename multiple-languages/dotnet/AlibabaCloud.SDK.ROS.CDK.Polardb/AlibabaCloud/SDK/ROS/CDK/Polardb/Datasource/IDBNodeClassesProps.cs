using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::POLARDB::DBNodeClasses`.</summary>
    [JsiiInterface(nativeType: typeof(IDBNodeClassesProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.DBNodeClassesProps")]
    public interface IDBNodeClassesProps
    {
        /// <summary>Property payType: The billing method.</summary>
        /// <remarks>
        /// Valid values:
        /// Postpaid: the pay-as-you-go billing method
        /// Prepaid: the subscription billing method
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <summary>Property dbNodeClass: The node type.</summary>
        /// <remarks>
        /// For more information, see Specifications of compute nodes.
        /// </remarks>
        [JsiiProperty(name: "dbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbNodeClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbType: The database engine.</summary>
        /// <remarks>
        /// Valid values:
        /// MySQL
        /// PostgreSQL
        /// Oracle
        /// </remarks>
        [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbVersion: The version number of the database engine Valid values for the MySQL database engine: 5.6 5.7 8 Valid value for the PostgreSQL database engine: 11 Valid value for the Oracle database engine: 11 Note If you specify the DBType parameter, you must specify this parameter.</summary>
        [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.</summary>
        /// <remarks>
        /// Note You can call the DescribeRegions operation to query information about zones.
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

        /// <summary>Properties for defining a `DATASOURCE::POLARDB::DBNodeClasses`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBNodeClassesProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.DBNodeClassesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IDBNodeClassesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property payType: The billing method.</summary>
            /// <remarks>
            /// Valid values:
            /// Postpaid: the pay-as-you-go billing method
            /// Prepaid: the subscription billing method
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbNodeClass: The node type.</summary>
            /// <remarks>
            /// For more information, see Specifications of compute nodes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbNodeClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbType: The database engine.</summary>
            /// <remarks>
            /// Valid values:
            /// MySQL
            /// PostgreSQL
            /// Oracle
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbVersion: The version number of the database engine Valid values for the MySQL database engine: 5.6 5.7 8 Valid value for the PostgreSQL database engine: 11 Valid value for the Oracle database engine: 11 Note If you specify the DBType parameter, you must specify this parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.</summary>
            /// <remarks>
            /// Note You can call the DescribeRegions operation to query information about zones.
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
