using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds.Datasource
{
    /// <summary>Properties for defining a `Databases`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDatabasesProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.DatabasesProps")]
    public interface IDatabasesProps
    {
        /// <summary>Property dbInstanceId: The ID of the RDS instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property dbName: The names of the databases whose information you want to query.</summary>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbStatus: The status of the databases whose information you want to query.</summary>
        [JsiiProperty(name: "dbStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Databases`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDatabasesProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.DatabasesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDatabasesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: The ID of the RDS instance.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbName: The names of the databases whose information you want to query.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbStatus: The status of the databases whose information you want to query.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbStatus
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
