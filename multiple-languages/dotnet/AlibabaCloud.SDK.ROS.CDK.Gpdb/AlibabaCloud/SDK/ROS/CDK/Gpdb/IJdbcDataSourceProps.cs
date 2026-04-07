using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `JdbcDataSource`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-jdbcdatasource
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IJdbcDataSourceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.JdbcDataSourceProps")]
    public interface IJdbcDataSourceProps
    {
        /// <summary>Property dbInstanceId: The instance ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property jdbcUserName: The name of the database account.</summary>
        [JsiiProperty(name: "jdbcUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object JdbcUserName
        {
            get;
        }

        /// <summary>Property dataSourceDescription: Data Source Description.</summary>
        [JsiiProperty(name: "dataSourceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSourceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataSourceName: Data Source Name.</summary>
        [JsiiProperty(name: "dataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSourceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataSourceType: Data Source Type.</summary>
        [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jdbcConnectionString: The JDBC connection string.</summary>
        [JsiiProperty(name: "jdbcConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JdbcConnectionString
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property jdbcPassword: The password of the database account.</summary>
        [JsiiProperty(name: "jdbcPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? JdbcPassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `JdbcDataSource`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-jdbcdatasource
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IJdbcDataSourceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.JdbcDataSourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IJdbcDataSourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: The instance ID.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property jdbcUserName: The name of the database account.</summary>
            [JsiiProperty(name: "jdbcUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object JdbcUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataSourceDescription: Data Source Description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataSourceName: Data Source Name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataSourceType: Data Source Type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jdbcConnectionString: The JDBC connection string.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "jdbcConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JdbcConnectionString
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property jdbcPassword: The password of the database account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "jdbcPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? JdbcPassword
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
