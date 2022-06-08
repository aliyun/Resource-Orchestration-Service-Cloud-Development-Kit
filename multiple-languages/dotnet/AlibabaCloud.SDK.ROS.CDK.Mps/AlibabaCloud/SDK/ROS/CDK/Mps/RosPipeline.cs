using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mps
{
    /// <summary>A ROS template type:  `ALIYUN::MPS::Pipeline`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Mps.RosPipeline), fullyQualifiedName: "@alicloud/ros-cdk-mps.RosPipeline", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-mps.RosPipelineProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosPipeline : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::MPS::Pipeline`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosPipeline(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mps.IRosPipelineProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosPipeline(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosPipeline(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Mps.RosPipeline))!;

        /// <remarks>
        /// <strong>Attribute</strong>: PipelineId: The ID of the MPS queue.
        /// </remarks>
        [JsiiProperty(name: "attrPipelineId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPipelineId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The new name of the MPS queue. The value can contain letters, digits, and special
        /// characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
        /// start with a special character.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Name
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue
        /// or topic. For more information, see NotifyConfig.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "notifyConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mps.RosPipeline.NotifyConfigProperty\"}]}}", isOptional: true)]
        public virtual object? NotifyConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Role
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
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
        public virtual object? Speed
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: speedLevel: Speed level.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "speedLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SpeedLevel
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: state: The new state of the MPS queue.
        /// Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
        /// Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? State
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(INotifyConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-mps.RosPipeline.NotifyConfigProperty")]
        public interface INotifyConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: queueName: undefined
            /// </remarks>
            [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? QueueName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: topic: undefined
            /// </remarks>
            [JsiiProperty(name: "topic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Topic
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(INotifyConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-mps.RosPipeline.NotifyConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mps.RosPipeline.INotifyConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: queueName: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? QueueName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: topic: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "topic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Topic
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-mps.RosPipeline.NotifyConfigProperty")]
        public class NotifyConfigProperty : AlibabaCloud.SDK.ROS.CDK.Mps.RosPipeline.INotifyConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: queueName: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: topic: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "topic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Topic
            {
                get;
                set;
            }
        }
    }
}
