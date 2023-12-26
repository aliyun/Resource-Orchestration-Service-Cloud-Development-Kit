using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds.Datasource
{
    /// <summary>Properties for defining a `DBInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.DBInstanceProps")]
    public interface IDBInstanceProps
    {
        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.DBInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDBInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: The ID of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
