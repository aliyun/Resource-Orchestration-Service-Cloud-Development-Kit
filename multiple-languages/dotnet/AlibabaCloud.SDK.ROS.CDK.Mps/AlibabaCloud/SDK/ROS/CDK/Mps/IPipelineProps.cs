using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mps
{
    /// <summary>Properties for defining a `ALIYUN::MPS::Pipeline`.</summary>
    [JsiiInterface(nativeType: typeof(IPipelineProps), fullyQualifiedName: "@alicloud/ros-cdk-mps.PipelineProps")]
    public interface IPipelineProps
    {
        /// <summary>Property name: The new name of the MPS queue.</summary>
        /// <remarks>
        /// The value can contain letters, digits, and special
        /// characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
        /// start with a special character.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic.</summary>
        /// <remarks>
        /// For more information, see NotifyConfig.
        /// </remarks>
        [JsiiProperty(name: "notifyConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mps.RosPipeline.NotifyConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NotifyConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property role: The role that is assigned to the current RAM user.</summary>
        /// <remarks>
        /// To obtain the role, you can log on to the RAM console and choose Identities &gt; Roles in the left-side navigation pane.
        /// </remarks>
        [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Role
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property speed: Pipe type.</summary>
        /// <remarks>
        /// Value:
        /// Boost: Double-speed transcoding
        /// Standard: ordinary pipe
        /// NarrowBandHDV2: Narrowband HD 2.0
        /// AIVideoCover: Smart Screenshots
        /// AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
        /// Default: Standard.
        /// </remarks>
        [JsiiProperty(name: "speed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Speed
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property speedLevel: Speed level.</summary>
        [JsiiProperty(name: "speedLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpeedLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property state: The new state of the MPS queue.</summary>
        /// <remarks>
        /// Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
        /// Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
        /// </remarks>
        [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? State
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::MPS::Pipeline`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPipelineProps), fullyQualifiedName: "@alicloud/ros-cdk-mps.PipelineProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mps.IPipelineProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: The new name of the MPS queue.</summary>
            /// <remarks>
            /// The value can contain letters, digits, and special
            /// characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
            /// start with a special character.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic.</summary>
            /// <remarks>
            /// For more information, see NotifyConfig.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notifyConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mps.RosPipeline.NotifyConfigProperty\"}]}}", isOptional: true)]
            public object? NotifyConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property role: The role that is assigned to the current RAM user.</summary>
            /// <remarks>
            /// To obtain the role, you can log on to the RAM console and choose Identities &gt; Roles in the left-side navigation pane.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Role
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property speed: Pipe type.</summary>
            /// <remarks>
            /// Value:
            /// Boost: Double-speed transcoding
            /// Standard: ordinary pipe
            /// NarrowBandHDV2: Narrowband HD 2.0
            /// AIVideoCover: Smart Screenshots
            /// AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
            /// Default: Standard.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "speed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Speed
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property speedLevel: Speed level.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "speedLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpeedLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property state: The new state of the MPS queue.</summary>
            /// <remarks>
            /// Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
            /// Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? State
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
