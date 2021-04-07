using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceParameterGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IDBInstanceParameterGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.DBInstanceParameterGroupProps")]
    public interface IDBInstanceParameterGroupProps
    {
        /// <summary>Property dbInstanceId: Database InstanceId to update properties.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property parameters: Parameters to update for selected database instance.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Parameters
        {
            get;
        }

        /// <summary>Property forcerestart: whether restart database instance.</summary>
        [JsiiProperty(name: "forcerestart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Forcerestart
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceParameterGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBInstanceParameterGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.DBInstanceParameterGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IDBInstanceParameterGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: Database InstanceId to update properties.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property parameters: Parameters to update for selected database instance.</summary>
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Parameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property forcerestart: whether restart database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "forcerestart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Forcerestart
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
