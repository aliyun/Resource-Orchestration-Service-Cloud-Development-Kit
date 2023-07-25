using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::OTS::Tables`.</summary>
    [JsiiInterface(nativeType: typeof(ITablesProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.datasource.TablesProps")]
    public interface ITablesProps
    {
        /// <summary>Property instanceName: The name of the instance to which the table belongs.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <summary>Property tableName: The name of table.</summary>
        [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TableName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::OTS::Tables`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITablesProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.datasource.TablesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.Datasource.ITablesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceName: The name of the instance to which the table belongs.</summary>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property tableName: The name of table.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TableName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
