using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource
{
    /// <summary>Properties for defining a `ParameterGroups`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IParameterGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.ParameterGroupsProps")]
    public interface IParameterGroupsProps
    {
        /// <summary>Property dbType: The type of the database engine.</summary>
        [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbVersion: The version of the database engine.</summary>
        [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ParameterGroups`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IParameterGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.ParameterGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IParameterGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbType: The type of the database engine.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbVersion: The version of the database engine.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
