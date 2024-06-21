using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `LaunchTemplates`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplates
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILaunchTemplatesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.LaunchTemplatesProps")]
    public interface ILaunchTemplatesProps
    {
        /// <summary>Property launchTemplateId: The ID of the launch template.</summary>
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property launchTemplateName: The name of the launch template.</summary>
        [JsiiProperty(name: "launchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateResourceGroupId: The ID of the enterprise resource group to which the template is launched.</summary>
        [JsiiProperty(name: "templateResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `LaunchTemplates`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplates
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILaunchTemplatesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.LaunchTemplatesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ILaunchTemplatesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property launchTemplateId: The ID of the launch template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchTemplateName: The name of the launch template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateResourceGroupId: The ID of the enterprise resource group to which the template is launched.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
