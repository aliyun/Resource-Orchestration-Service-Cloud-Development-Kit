using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Represents a `InterRegionTrafficQosQueue`.</summary>
    [JsiiInterface(nativeType: typeof(IInterRegionTrafficQosQueue), fullyQualifiedName: "@alicloud/ros-cdk-cen.IInterRegionTrafficQosQueue")]
    public interface IInterRegionTrafficQosQueue : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidth
        {
            get;
        }

        /// <summary>Attribute Dscps: The DSCP value of the traffic packet to be matched in the current queue.</summary>
        [JsiiProperty(name: "attrDscps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDscps
        {
            get;
        }

        /// <summary>Attribute EffectiveBandwidth: The actual bandwidth value of the current queue.</summary>
        [JsiiProperty(name: "attrEffectiveBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEffectiveBandwidth
        {
            get;
        }

        /// <summary>Attribute InterRegionTrafficQosQueueDescription: The description of the queue.</summary>
        [JsiiProperty(name: "attrInterRegionTrafficQosQueueDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInterRegionTrafficQosQueueDescription
        {
            get;
        }

        /// <summary>Attribute InterRegionTrafficQosQueueId: The ID of the queue.</summary>
        [JsiiProperty(name: "attrInterRegionTrafficQosQueueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInterRegionTrafficQosQueueId
        {
            get;
        }

        /// <summary>Attribute InterRegionTrafficQosQueueName: The name of the queue.</summary>
        [JsiiProperty(name: "attrInterRegionTrafficQosQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInterRegionTrafficQosQueueName
        {
            get;
        }

        /// <summary>Attribute RemainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.</summary>
        [JsiiProperty(name: "attrRemainBandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemainBandwidthPercent
        {
            get;
        }

        /// <summary>Attribute TrafficQosPolicyId: The ID of the QoS policy.</summary>
        [JsiiProperty(name: "attrTrafficQosPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTrafficQosPolicyId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.InterRegionTrafficQosQueueProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosQueueProps Props
        {
            get;
        }

        /// <summary>Represents a `InterRegionTrafficQosQueue`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInterRegionTrafficQosQueue), fullyQualifiedName: "@alicloud/ros-cdk-cen.IInterRegionTrafficQosQueue")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosQueue
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// </remarks>
            [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Dscps: The DSCP value of the traffic packet to be matched in the current queue.</summary>
            [JsiiProperty(name: "attrDscps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDscps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EffectiveBandwidth: The actual bandwidth value of the current queue.</summary>
            [JsiiProperty(name: "attrEffectiveBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEffectiveBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InterRegionTrafficQosQueueDescription: The description of the queue.</summary>
            [JsiiProperty(name: "attrInterRegionTrafficQosQueueDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInterRegionTrafficQosQueueDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InterRegionTrafficQosQueueId: The ID of the queue.</summary>
            [JsiiProperty(name: "attrInterRegionTrafficQosQueueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInterRegionTrafficQosQueueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InterRegionTrafficQosQueueName: The name of the queue.</summary>
            [JsiiProperty(name: "attrInterRegionTrafficQosQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInterRegionTrafficQosQueueName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RemainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.</summary>
            [JsiiProperty(name: "attrRemainBandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemainBandwidthPercent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TrafficQosPolicyId: The ID of the QoS policy.</summary>
            [JsiiProperty(name: "attrTrafficQosPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTrafficQosPolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.InterRegionTrafficQosQueueProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosQueueProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosQueueProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
