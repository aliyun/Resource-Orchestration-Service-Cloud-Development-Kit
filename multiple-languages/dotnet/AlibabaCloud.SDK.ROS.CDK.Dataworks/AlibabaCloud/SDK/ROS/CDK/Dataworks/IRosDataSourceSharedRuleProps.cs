using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dataworks
{
    /// <summary>Properties for defining a `RosDataSourceSharedRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-datasourcesharedrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDataSourceSharedRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.RosDataSourceSharedRuleProps")]
    public interface IRosDataSourceSharedRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dataSourceId: The ID of the data source, that is, the unique identifier of the data source.
        /// </remarks>
        [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataSourceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: envType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
        /// </remarks>
        [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetProjectId: The ID of the project to which the data source is shared.
        /// </remarks>
        [JsiiProperty(name: "targetProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetProjectId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sharedUser: The target user of the data source permission policy, which is null to share to the project.
        /// </remarks>
        [JsiiProperty(name: "sharedUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SharedUser
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDataSourceSharedRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-datasourcesharedrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDataSourceSharedRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.RosDataSourceSharedRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dataworks.IRosDataSourceSharedRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSourceId: The ID of the data source, that is, the unique identifier of the data source.
            /// </remarks>
            [JsiiProperty(name: "dataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataSourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: envType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
            /// </remarks>
            [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetProjectId: The ID of the project to which the data source is shared.
            /// </remarks>
            [JsiiProperty(name: "targetProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetProjectId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sharedUser: The target user of the data source permission policy, which is null to share to the project.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sharedUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SharedUser
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
