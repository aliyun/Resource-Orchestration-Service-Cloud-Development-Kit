using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mps
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MPS::Pipeline`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mps.RosPipelineProps")]
    public class RosPipelineProps : AlibabaCloud.SDK.ROS.CDK.Mps.IRosPipelineProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The new name of the MPS queue. The value can contain letters, digits, and special
        /// characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
        /// start with a special character.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue
        /// or topic. For more information, see NotifyConfig.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "notifyConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mps.RosPipeline.NotifyConfigProperty\"}]}}", isOptional: true)]
        public object? NotifyConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Role
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: speed: Pipe type. Value:
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
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: speedLevel: Speed level.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "speedLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SpeedLevel
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: state: The new state of the MPS queue.
        /// Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
        /// Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? State
        {
            get;
            set;
        }
    }
}
