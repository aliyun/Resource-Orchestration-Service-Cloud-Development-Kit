using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `RosServerGroupAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-servergroupattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosServerGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosServerGroupAttachmentProps")]
    public interface IRosServerGroupAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: scalingGroupId: The ID of the scaling group.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serverGroups: A collection of information about server groups.
        /// </remarks>
        [JsiiProperty(name: "serverGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosServerGroupAttachment.ServerGroupsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ServerGroups
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. Valid values:
        /// true
        /// false
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "forceAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ForceAttach
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosServerGroupAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-servergroupattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosServerGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosServerGroupAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IRosServerGroupAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingGroupId: The ID of the scaling group.
            /// </remarks>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverGroups: A collection of information about server groups.
            /// </remarks>
            [JsiiProperty(name: "serverGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosServerGroupAttachment.ServerGroupsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ServerGroups
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. Valid values:
            /// true
            /// false
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forceAttach", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ForceAttach
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
