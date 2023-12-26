using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource
{
    /// <summary>Properties for defining a `RosDBNodeClasses`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbnodeclasses
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBNodeClassesProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.RosDBNodeClassesProps")]
    public interface IRosDBNodeClassesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: payType: The billing method. Valid values:
        /// Postpaid: the pay-as-you-go billing method
        /// Prepaid: the subscription billing method
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbNodeClass: The node type. For more information, see Specifications of compute nodes.
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

        /// <remarks>
        /// <strong>Property</strong>: dbType: The database engine. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: dbVersion: The version number of the database engine
        /// Valid values for the MySQL database engine:
        /// 5.6
        /// 5.7
        /// 8
        /// Valid value for the PostgreSQL database engine: 11
        /// Valid value for the Oracle database engine: 11
        /// Note If you specify the DBType parameter, you must specify this parameter
        /// </remarks>
        [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone where PolarDB resources that you want to query reside.
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

        /// <summary>Properties for defining a `RosDBNodeClasses`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbnodeclasses
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBNodeClassesProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.RosDBNodeClassesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IRosDBNodeClassesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: The billing method. Valid values:
            /// Postpaid: the pay-as-you-go billing method
            /// Prepaid: the subscription billing method
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbNodeClass: The node type. For more information, see Specifications of compute nodes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbNodeClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbType: The database engine. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: dbVersion: The version number of the database engine
            /// Valid values for the MySQL database engine:
            /// 5.6
            /// 5.7
            /// 8
            /// Valid value for the PostgreSQL database engine: 11
            /// Valid value for the Oracle database engine: 11
            /// Note If you specify the DBType parameter, you must specify this parameter
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone where PolarDB resources that you want to query reside.
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
