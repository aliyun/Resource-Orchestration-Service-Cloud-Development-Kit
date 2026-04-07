using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `RosJdbcDataSource`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-jdbcdatasource
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosJdbcDataSourceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.RosJdbcDataSourceProps")]
    public interface IRosJdbcDataSourceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The instance ID.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: jdbcUserName: The name of the database account.
        /// </remarks>
        [JsiiProperty(name: "jdbcUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object JdbcUserName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSourceDescription: Data Source Description.
        /// </remarks>
        [JsiiProperty(name: "dataSourceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSourceDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSourceName: Data Source Name.
        /// </remarks>
        [JsiiProperty(name: "dataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSourceName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSourceType: Data Source Type.
        /// </remarks>
        [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSourceType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: jdbcConnectionString: The JDBC connection string.
        /// </remarks>
        [JsiiProperty(name: "jdbcConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JdbcConnectionString
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: jdbcPassword: The password of the database account.
        /// </remarks>
        [JsiiProperty(name: "jdbcPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JdbcPassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosJdbcDataSource`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-jdbcdatasource
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosJdbcDataSourceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.RosJdbcDataSourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IRosJdbcDataSourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The instance ID.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: jdbcUserName: The name of the database account.
            /// </remarks>
            [JsiiProperty(name: "jdbcUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object JdbcUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSourceDescription: Data Source Description.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSourceName: Data Source Name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSourceType: Data Source Type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: jdbcConnectionString: The JDBC connection string.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jdbcConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JdbcConnectionString
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: jdbcPassword: The password of the database account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jdbcPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JdbcPassword
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
