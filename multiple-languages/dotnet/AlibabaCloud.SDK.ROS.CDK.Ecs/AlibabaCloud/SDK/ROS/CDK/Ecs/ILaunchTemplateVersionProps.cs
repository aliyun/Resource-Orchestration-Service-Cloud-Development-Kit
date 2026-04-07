using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `LaunchTemplateVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplateversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILaunchTemplateVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.LaunchTemplateVersionProps")]
    public interface ILaunchTemplateVersionProps
    {
        /// <summary>Property launchTemplateData: The configurations of the launch template.</summary>
        [JsiiProperty(name: "launchTemplateData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.LaunchTemplateDataProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LaunchTemplateData
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property launchTemplateId: The ID of the launch template.</summary>
        /// <remarks>
        /// You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
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

        /// <summary>Property launchTemplateName: The name of the launch template.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
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

        /// <summary>Property resourceGroupId: The ID of the resource group to which to assign the instance.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property versionDescription: The description of the launch template version.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
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

        /// <summary>Properties for defining a `LaunchTemplateVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplateversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILaunchTemplateVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.LaunchTemplateVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ILaunchTemplateVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property launchTemplateData: The configurations of the launch template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosLaunchTemplateVersion.LaunchTemplateDataProperty\"}]}}", isOptional: true)]
            public object? LaunchTemplateData
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchTemplateId: The ID of the launch template.</summary>
            /// <remarks>
            /// You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property launchTemplateName: The name of the launch template.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "launchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LaunchTemplateName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which to assign the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property versionDescription: The description of the launch template version.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
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
