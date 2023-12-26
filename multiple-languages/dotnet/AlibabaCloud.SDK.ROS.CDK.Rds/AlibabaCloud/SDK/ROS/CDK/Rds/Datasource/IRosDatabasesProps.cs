using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds.Datasource
{
    /// <summary>Properties for defining a `RosDatabases`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDatabasesProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.RosDatabasesProps")]
    public interface IRosDatabasesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the RDS instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbName: The names of the databases whose information you want to query.
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbStatus: The status of the databases whose information you want to query.
        /// </remarks>
        [JsiiProperty(name: "dbStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDatabases`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDatabasesProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.RosDatabasesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IRosDatabasesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The ID of the RDS instance.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbName: The names of the databases whose information you want to query.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbStatus: The status of the databases whose information you want to query.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbStatus
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
