using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceParameterGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDBInstanceParameterGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceParameterGroupProps")]
    public interface IRosDBInstanceParameterGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Database InstanceId to update properties.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: parameters: Parameters to update for selected database instance.
        /// </remarks>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Parameters
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: forcerestart: whether restart database instance.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosDBInstanceParameterGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceParameterGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IRosDBInstanceParameterGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: Database InstanceId to update properties.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameters: Parameters to update for selected database instance.
            /// </remarks>
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Parameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: forcerestart: whether restart database instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forcerestart", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Forcerestart
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
