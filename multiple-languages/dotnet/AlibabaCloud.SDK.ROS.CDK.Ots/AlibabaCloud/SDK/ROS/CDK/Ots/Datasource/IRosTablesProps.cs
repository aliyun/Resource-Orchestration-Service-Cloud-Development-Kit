using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::OTS::Tables`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTablesProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.datasource.RosTablesProps")]
    public interface IRosTablesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceName: The name of the instance to which the table belongs.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: tableName: The name of table.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosTablesProps), fullyQualifiedName: "@alicloud/ros-cdk-ots.datasource.RosTablesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ots.Datasource.IRosTablesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The name of the instance to which the table belongs.
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: tableName: The name of table.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TableName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
