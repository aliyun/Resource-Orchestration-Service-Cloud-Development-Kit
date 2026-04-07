using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bastionhost
{
    /// <summary>Properties for defining a `PasswordTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPasswordTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.PasswordTaskProps")]
    public interface IPasswordTaskProps
    {
        /// <summary>Property instanceId: The ID of the BastionHost instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property name: The name of the password task.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property taskScheduleType: The schedule type of the password task.</summary>
        [JsiiProperty(name: "taskScheduleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskScheduleType
        {
            get;
        }

        /// <summary>Property comment: The comment of the password task.</summary>
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Comment
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property credentialType: The credential type of the password task.</summary>
        [JsiiProperty(name: "credentialType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CredentialType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyPairGenerateConfig: The key pair generate config of the password task.</summary>
        [JsiiProperty(name: "keyPairGenerateConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyPairGenerateConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property passwordGenerateConfig: The password generate config of the password task.</summary>
        [JsiiProperty(name: "passwordGenerateConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PasswordGenerateConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property passwordGenerateType: The password generate type of the password task.</summary>
        [JsiiProperty(name: "passwordGenerateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PasswordGenerateType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property taskScheduleConfig: The schedule config of the password task.</summary>
        [JsiiProperty(name: "taskScheduleConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TaskScheduleConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PasswordTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPasswordTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.PasswordTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bastionhost.IPasswordTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the BastionHost instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the password task.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property taskScheduleType: The schedule type of the password task.</summary>
            [JsiiProperty(name: "taskScheduleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskScheduleType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property comment: The comment of the password task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property credentialType: The credential type of the password task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "credentialType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CredentialType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyPairGenerateConfig: The key pair generate config of the password task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairGenerateConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPairGenerateConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property passwordGenerateConfig: The password generate config of the password task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "passwordGenerateConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? PasswordGenerateConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property passwordGenerateType: The password generate type of the password task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "passwordGenerateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PasswordGenerateType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property taskScheduleConfig: The schedule config of the password task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "taskScheduleConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? TaskScheduleConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
