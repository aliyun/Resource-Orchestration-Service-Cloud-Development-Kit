using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `RosParameterGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosParameterGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosParameterGroupProps")]
    public interface IRosParameterGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbType: The type of the database engine.
        /// </remarks>
        [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbVersion: The version of the database engine.
        /// </remarks>
        [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: parameterGroupName: The name of the parameter template.
        /// </remarks>
        [JsiiProperty(name: "parameterGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ParameterGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: parameters: The list of the parameters.
        /// </remarks>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosParameterGroup.ParametersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Parameters
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: parameterGroupDesc: The description of the parameter template.
        /// </remarks>
        [JsiiProperty(name: "parameterGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParameterGroupDesc
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosParameterGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosParameterGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosParameterGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosParameterGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbType: The type of the database engine.
            /// </remarks>
            [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbVersion: The version of the database engine.
            /// </remarks>
            [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameterGroupName: The name of the parameter template.
            /// </remarks>
            [JsiiProperty(name: "parameterGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ParameterGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameters: The list of the parameters.
            /// </remarks>
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosParameterGroup.ParametersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Parameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameterGroupDesc: The description of the parameter template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parameterGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ParameterGroupDesc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
