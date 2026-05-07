using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Agentrun
{
    /// <summary>Properties for defining a `Template`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-agentrun.TemplateProps")]
    public interface ITemplateProps
    {
        /// <summary>Property templateName: The name of the template.</summary>
        [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TemplateName
        {
            get;
        }

        /// <summary>Property allowAnonymousManage: Whether to allow anonymous management.</summary>
        [JsiiProperty(name: "allowAnonymousManage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllowAnonymousManage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property armsConfiguration: The ARMS configuration.</summary>
        [JsiiProperty(name: "armsConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.ArmsConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ArmsConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property containerConfiguration: The container configuration.</summary>
        /// <remarks>
        /// Only images based on Browser/Code Interpreter base images are allowed.
        /// </remarks>
        [JsiiProperty(name: "containerConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.ContainerConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContainerConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cpu: The CPU resource configuration (unit: cores).</summary>
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cpu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property credentialConfiguration: The credential configuration.</summary>
        [JsiiProperty(name: "credentialConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.CredentialConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CredentialConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the template.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskSize: The disk size (unit: MB).</summary>
        [JsiiProperty(name: "diskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAgent: Whether to enable the sandbox agent.</summary>
        [JsiiProperty(name: "enableAgent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAgent
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property environmentVariables: The environment variables.</summary>
        [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvironmentVariables
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property executionRoleArn: The execution role ARN.</summary>
        [JsiiProperty(name: "executionRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExecutionRoleArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logConfiguration: The log configuration.</summary>
        [JsiiProperty(name: "logConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.LogConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property memory: The memory resource configuration (unit: MB).</summary>
        [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Memory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nasConfig: The NAS configuration.</summary>
        [JsiiProperty(name: "nasConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.NasConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NasConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkConfiguration: The network configuration.</summary>
        [JsiiProperty(name: "networkConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.NetworkConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ossConfiguration: The OSS configuration.</summary>
        [JsiiProperty(name: "ossConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.OssConfigurationProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.</summary>
        [JsiiProperty(name: "sandboxIdleTimeoutInSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SandboxIdleTimeoutInSeconds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateConfiguration: The template configuration (flexible object structure, varies by templateType).</summary>
        [JsiiProperty(name: "templateConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateType: The type of the template.</summary>
        [JsiiProperty(name: "templateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workspaceId: The workspace ID.</summary>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkspaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Template`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-agentrun.TemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Agentrun.ITemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property templateName: The name of the template.</summary>
            [JsiiProperty(name: "templateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property allowAnonymousManage: Whether to allow anonymous management.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "allowAnonymousManage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowAnonymousManage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property armsConfiguration: The ARMS configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "armsConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.ArmsConfigurationProperty\"}]}}", isOptional: true)]
            public object? ArmsConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property containerConfiguration: The container configuration.</summary>
            /// <remarks>
            /// Only images based on Browser/Code Interpreter base images are allowed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "containerConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.ContainerConfigurationProperty\"}]}}", isOptional: true)]
            public object? ContainerConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cpu: The CPU resource configuration (unit: cores).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property credentialConfiguration: The credential configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "credentialConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.CredentialConfigurationProperty\"}]}}", isOptional: true)]
            public object? CredentialConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskSize: The disk size (unit: MB).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAgent: Whether to enable the sandbox agent.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableAgent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAgent
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property environmentVariables: The environment variables.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? EnvironmentVariables
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property executionRoleArn: The execution role ARN.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "executionRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExecutionRoleArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logConfiguration: The log configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.LogConfigurationProperty\"}]}}", isOptional: true)]
            public object? LogConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property memory: The memory resource configuration (unit: MB).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Memory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nasConfig: The NAS configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "nasConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.NasConfigProperty\"}]}}", isOptional: true)]
            public object? NasConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkConfiguration: The network configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "networkConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.NetworkConfigurationProperty\"}]}}", isOptional: true)]
            public object? NetworkConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ossConfiguration: The OSS configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ossConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-agentrun.RosTemplate.OssConfigurationProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? OssConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sandboxIdleTimeoutInSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SandboxIdleTimeoutInSeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateConfiguration: The template configuration (flexible object structure, varies by templateType).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? TemplateConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateType: The type of the template.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workspaceId: The workspace ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkspaceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
