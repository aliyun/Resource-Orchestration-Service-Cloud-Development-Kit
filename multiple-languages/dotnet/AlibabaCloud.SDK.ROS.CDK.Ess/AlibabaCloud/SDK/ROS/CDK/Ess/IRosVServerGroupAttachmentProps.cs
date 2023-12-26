using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `RosVServerGroupAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-vservergroupattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVServerGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosVServerGroupAttachmentProps")]
    public interface IRosVServerGroupAttachmentProps
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
        /// <strong>Property</strong>: vServerGroups: A list of vserver groups attached on scaling group
        /// </remarks>
        [JsiiProperty(name: "vServerGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosVServerGroupAttachment.VServerGroupsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object VServerGroups
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: forceAttach: If instances of scaling group are attached\/removed from slb backend server when attach\/detach vserver group from scaling group.
        /// Valid values:
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

        /// <summary>Properties for defining a `RosVServerGroupAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-vservergroupattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVServerGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosVServerGroupAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IRosVServerGroupAttachmentProps
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
            /// <strong>Property</strong>: vServerGroups: A list of vserver groups attached on scaling group
            /// </remarks>
            [JsiiProperty(name: "vServerGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosVServerGroupAttachment.VServerGroupsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object VServerGroups
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: forceAttach: If instances of scaling group are attached\/removed from slb backend server when attach\/detach vserver group from scaling group.
            /// Valid values:
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
