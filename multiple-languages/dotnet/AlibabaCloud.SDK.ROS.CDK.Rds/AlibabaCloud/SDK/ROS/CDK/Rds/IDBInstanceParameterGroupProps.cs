using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceParameterGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IDBInstanceParameterGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.DBInstanceParameterGroupProps")]
    public interface IDBInstanceParameterGroupProps
    {
        /// <summary>Property dbInstanceId: Database InstanceId to update properties.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceId
        {
            get;
        }

        /// <summary>Property parameters: Parameters to update for selected database instance.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Parameters
        {
            get;
        }

        /// <summary>Property forcerestart: whether restart database instance.</summary>
        [JsiiProperty(name: "forcerestart", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Forcerestart
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
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property parameters: Parameters to update for selected database instance.</summary>
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Parameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property forcerestart: whether restart database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "forcerestart", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Forcerestart
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
