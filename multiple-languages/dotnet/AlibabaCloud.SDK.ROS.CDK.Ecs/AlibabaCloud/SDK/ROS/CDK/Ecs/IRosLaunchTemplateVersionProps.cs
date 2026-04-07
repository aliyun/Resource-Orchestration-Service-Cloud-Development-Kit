using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RosLaunchTemplateVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplateversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosLaunchTemplateVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosLaunchTemplateVersionProps")]
    public interface IRosLaunchTemplateVersionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: launchTemplateData: The configurations of the launch template.
        /// </remarks>
        [JsiiProperty(name: "launchTemplateData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.LaunchTemplateDataProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateData
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateId: The ID of the launch template. You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
        /// </remarks>
        [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: launchTemplateName: The name of the launch template. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "launchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which to assign the instance.
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

        /// <remarks>
        /// <strong>Property</strong>: versionDescription: The description of the launch template version. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VersionDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosLaunchTemplateVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplateversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosLaunchTemplateVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosLaunchTemplateVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosLaunchTemplateVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: launchTemplateData: The configurations of the launch template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.LaunchTemplateDataProperty\"}]}}", isOptional: true)]
            public object? LaunchTemplateData
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: launchTemplateId: The ID of the launch template. You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: launchTemplateName: The name of the launch template. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which to assign the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: versionDescription: The description of the launch template version. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VersionDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
