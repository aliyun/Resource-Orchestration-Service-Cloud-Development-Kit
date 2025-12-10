using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `ApplicationGroupDeployment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationgroupdeployment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApplicationGroupDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.ApplicationGroupDeploymentProps")]
    public interface IApplicationGroupDeploymentProps
    {
        /// <summary>Property applicationName: The name of the application.</summary>
        [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApplicationName
        {
            get;
        }

        /// <summary>Property name: The name of the application group.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property deployParameters: The deploy parameters of the application group to be deployed.</summary>
        [JsiiProperty(name: "deployParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeployParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property revisionId: The ID of the revision.</summary>
        [JsiiProperty(name: "revisionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RevisionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ApplicationGroupDeployment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationgroupdeployment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApplicationGroupDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.ApplicationGroupDeploymentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IApplicationGroupDeploymentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property applicationName: The name of the application.</summary>
            [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApplicationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the application group.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deployParameters: The deploy parameters of the application group to be deployed.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deployParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeployParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property revisionId: The ID of the revision.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "revisionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RevisionId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
