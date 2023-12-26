using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `Connection`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-connection
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.ConnectionProps")]
    public interface IConnectionProps
    {
        /// <summary>Property dbInstanceId: RDS instance ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property port: The port of the database service.</summary>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Port
        {
            get;
        }

        /// <summary>Property babelfishPort: The Tabular Data Stream (TDS) port of the instance for which Babelfish is enabled.</summary>
        /// <remarks>
        /// Note This parameter applies only to ApsaraDB RDS for PostgreSQL instances.
        /// For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see Introduction to Babelfish.
        /// </remarks>
        [JsiiProperty(name: "babelfishPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BabelfishPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property connectionStringPrefix: The prefix of the endpoint.</summary>
        /// <remarks>
        /// Only the prefix of the CurrentConnectionString parameter value can be modified.
        /// The prefix must be 5 to 40 characters in length and can contain letters, digits, and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionStringPrefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property generalGroupName: The name of the dedicated cluster to which the instance belongs.</summary>
        /// <remarks>
        /// This parameter takes effect only when the instance runs MySQL on RDS
        /// Standard Edition and is created in a dedicated cluster.
        /// </remarks>
        [JsiiProperty(name: "generalGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GeneralGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Connection`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-connection
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.ConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: RDS instance ID.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property port: The port of the database service.</summary>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Port
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property babelfishPort: The Tabular Data Stream (TDS) port of the instance for which Babelfish is enabled.</summary>
            /// <remarks>
            /// Note This parameter applies only to ApsaraDB RDS for PostgreSQL instances.
            /// For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see Introduction to Babelfish.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "babelfishPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BabelfishPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property connectionStringPrefix: The prefix of the endpoint.</summary>
            /// <remarks>
            /// Only the prefix of the CurrentConnectionString parameter value can be modified.
            /// The prefix must be 5 to 40 characters in length and can contain letters, digits, and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectionStringPrefix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property generalGroupName: The name of the dedicated cluster to which the instance belongs.</summary>
            /// <remarks>
            /// This parameter takes effect only when the instance runs MySQL on RDS
            /// Standard Edition and is created in a dedicated cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "generalGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GeneralGroupName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
