using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `RosApplicationGroupDeployment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationgroupdeployment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApplicationGroupDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosApplicationGroupDeploymentProps")]
    public interface IRosApplicationGroupDeploymentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: applicationName: The name of the application.
        /// </remarks>
        [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApplicationName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the application group.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: deployParameters: The deploy parameters of the application group to be deployed.
        /// </remarks>
        [JsiiProperty(name: "deployParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeployParameters
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: revisionId: The ID of the revision.
        /// </remarks>
        [JsiiProperty(name: "revisionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RevisionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosApplicationGroupDeployment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationgroupdeployment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApplicationGroupDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosApplicationGroupDeploymentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IRosApplicationGroupDeploymentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: applicationName: The name of the application.
            /// </remarks>
            [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApplicationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the application group.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: deployParameters: The deploy parameters of the application group to be deployed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deployParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeployParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: revisionId: The ID of the revision.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "revisionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RevisionId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
