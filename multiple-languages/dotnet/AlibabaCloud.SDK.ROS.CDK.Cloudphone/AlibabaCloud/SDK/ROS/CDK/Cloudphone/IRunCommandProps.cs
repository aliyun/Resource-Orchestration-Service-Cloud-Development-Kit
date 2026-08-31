using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudphone
{
    /// <summary>Properties for defining a `RunCommand`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRunCommandProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.RunCommandProps")]
    public interface IRunCommandProps
    {
        /// <summary>Property command: The command that you want to run.\ The name can be up to 1024 bytes in length and can contain only letters, digits, underscores (_), periods (.), slashes (\/), colons (:), and hyphens (-).</summary>
        [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Command
        {
            get;
        }

        /// <summary>Property instanceIds: ID of the instance executing the command.</summary>
        /// <remarks>
        /// Range of n: 1 ~ 10
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object InstanceIds
        {
            get;
        }

        /// <summary>Property runAgainOn: The stage of executing the command again.</summary>
        [JsiiProperty(name: "runAgainOn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RunAgainOn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RunCommand`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRunCommandProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.RunCommandProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudphone.IRunCommandProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property command: The command that you want to run.\ The name can be up to 1024 bytes in length and can contain only letters, digits, underscores (_), periods (.), slashes (\/), colons (:), and hyphens (-).</summary>
            [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Command
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceIds: ID of the instance executing the command.</summary>
            /// <remarks>
            /// Range of n: 1 ~ 10
            /// </remarks>
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object InstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property runAgainOn: The stage of executing the command again.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "runAgainOn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RunAgainOn
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
