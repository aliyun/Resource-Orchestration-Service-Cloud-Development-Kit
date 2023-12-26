using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource
{
    /// <summary>Properties for defining a `RosDBClusters`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbclusters
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.RosDBClustersProps")]
    public interface IRosDBClustersProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the cluster.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbType: The database engine that the cluster runs.
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
        /// <strong>Property</strong>: dbVersion: The version of the database engine that the cluster runs.
        /// The range of the MySQL version number is as follows:
        /// *** 5.6 * * *
        /// *** 5.7 * * *
        /// *** 8.0 * * *
        /// The value range of PostgreSQL version number is as follows:
        /// *** 11 * * *
        /// *** 14 * * *
        /// The Oracle version number is 11.
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
        /// <strong>Property</strong>: description: The description of the cluster.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: expired: Indicates whether the cluster has expired.
        /// Valid values:
        /// true
        /// false
        /// </remarks>
        [JsiiProperty(name: "expired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Expired
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDBClusters`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbclusters
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.RosDBClustersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IRosDBClustersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: The ID of the cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbType: The database engine that the cluster runs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbVersion: The version of the database engine that the cluster runs.
            /// The range of the MySQL version number is as follows:
            /// *** 5.6 * * *
            /// *** 5.7 * * *
            /// *** 8.0 * * *
            /// The value range of PostgreSQL version number is as follows:
            /// *** 11 * * *
            /// *** 14 * * *
            /// The Oracle version number is 11.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: expired: Indicates whether the cluster has expired.
            /// Valid values:
            /// true
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Expired
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
