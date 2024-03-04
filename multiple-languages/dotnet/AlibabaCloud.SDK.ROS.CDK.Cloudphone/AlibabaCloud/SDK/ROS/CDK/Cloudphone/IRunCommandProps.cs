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
        /// <summary>Property command: The command to be executed.</summary>
        /// <remarks>
        /// The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-).
        /// </remarks>
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

            /// <summary>Property command: The command to be executed.</summary>
            /// <remarks>
            /// The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-).
            /// </remarks>
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
        }
    }
}
