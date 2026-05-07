using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dataworks
{
    /// <summary>Properties for defining a `DataSourceSharedRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-datasourcesharedrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDataSourceSharedRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.DataSourceSharedRuleProps")]
    public interface IDataSourceSharedRuleProps
    {
        /// <summary>Property dataSourceId: The ID of the data source, that is, the unique identifier of the data source.</summary>
        [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataSourceId
        {
            get;
        }

        /// <summary>Property envType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).</summary>
        [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvType
        {
            get;
        }

        /// <summary>Property targetProjectId: The ID of the project to which the data source is shared.</summary>
        [JsiiProperty(name: "targetProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetProjectId
        {
            get;
        }

        /// <summary>Property sharedUser: The target user of the data source permission policy, which is null to share to the project.</summary>
        [JsiiProperty(name: "sharedUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SharedUser
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DataSourceSharedRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-datasourcesharedrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDataSourceSharedRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.DataSourceSharedRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dataworks.IDataSourceSharedRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dataSourceId: The ID of the data source, that is, the unique identifier of the data source.</summary>
            [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataSourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property envType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).</summary>
            [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetProjectId: The ID of the project to which the data source is shared.</summary>
            [JsiiProperty(name: "targetProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetProjectId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sharedUser: The target user of the data source permission policy, which is null to share to the project.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sharedUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SharedUser
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
