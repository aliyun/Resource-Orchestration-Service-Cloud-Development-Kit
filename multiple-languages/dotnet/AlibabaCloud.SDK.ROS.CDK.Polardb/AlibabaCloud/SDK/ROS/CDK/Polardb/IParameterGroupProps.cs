using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ParameterGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IParameterGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.ParameterGroupProps")]
    public interface IParameterGroupProps
    {
        /// <summary>Property dbType: The type of the database engine.</summary>
        [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbType
        {
            get;
        }

        /// <summary>Property dbVersion: The version of the database engine.</summary>
        [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbVersion
        {
            get;
        }

        /// <summary>Property parameterGroupName: The name of the parameter template.</summary>
        [JsiiProperty(name: "parameterGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ParameterGroupName
        {
            get;
        }

        /// <summary>Property parameters: The list of the parameters.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosParameterGroup.ParametersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Parameters
        {
            get;
        }

        /// <summary>Property parameterGroupDesc: The description of the parameter template.</summary>
        [JsiiProperty(name: "parameterGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParameterGroupDesc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ParameterGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IParameterGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.ParameterGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IParameterGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbType: The type of the database engine.</summary>
            [JsiiProperty(name: "dbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbVersion: The version of the database engine.</summary>
            [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property parameterGroupName: The name of the parameter template.</summary>
            [JsiiProperty(name: "parameterGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ParameterGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property parameters: The list of the parameters.</summary>
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosParameterGroup.ParametersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Parameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property parameterGroupDesc: The description of the parameter template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parameterGroupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ParameterGroupDesc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
