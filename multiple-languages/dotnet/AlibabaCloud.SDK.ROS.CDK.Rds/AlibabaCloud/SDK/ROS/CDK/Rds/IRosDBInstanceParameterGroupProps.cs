using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `RosDBInstanceParameterGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceparametergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBInstanceParameterGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceParameterGroupProps")]
    public interface IRosDBInstanceParameterGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Database InstanceId to update properties.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: parameters: Parameters to update for selected database instance.
        /// </remarks>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Parameters
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: forcerestart: whether restart database instance.
        /// </remarks>
        [JsiiProperty(name: "forcerestart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Forcerestart
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDBInstanceParameterGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceparametergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBInstanceParameterGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceParameterGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IRosDBInstanceParameterGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: Database InstanceId to update properties.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameters: Parameters to update for selected database instance.
            /// </remarks>
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Parameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: forcerestart: whether restart database instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forcerestart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Forcerestart
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
