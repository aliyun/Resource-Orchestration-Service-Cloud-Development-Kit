using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::POLARDB::ParameterGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IRosParameterGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.RosParameterGroupsProps")]
    public interface IRosParameterGroupsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbType: The type of the database engine.
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
        /// <strong>Property</strong>: dbVersion: The version of the database engine.
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

        /// <summary>Properties for defining a `DATASOURCE::POLARDB::ParameterGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosParameterGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.RosParameterGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IRosParameterGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbType: The type of the database engine.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbVersion: The version of the database engine.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
