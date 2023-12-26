using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `VServerGroupAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-vservergroupattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVServerGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.VServerGroupAttachmentProps")]
    public interface IVServerGroupAttachmentProps
    {
        /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingGroupId
        {
            get;
        }

        /// <summary>Property vServerGroups: A list of vserver groups attached on scaling group.</summary>
        [JsiiProperty(name: "vServerGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosVServerGroupAttachment.VServerGroupsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object VServerGroups
        {
            get;
        }

        /// <summary>Property forceAttach: If instances of scaling group are attached\/removed from slb backend server when attach\/detach vserver group from scaling group.</summary>
        /// <remarks>
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

        /// <summary>Properties for defining a `VServerGroupAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-vservergroupattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVServerGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.VServerGroupAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IVServerGroupAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vServerGroups: A list of vserver groups attached on scaling group.</summary>
            [JsiiProperty(name: "vServerGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosVServerGroupAttachment.VServerGroupsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object VServerGroups
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property forceAttach: If instances of scaling group are attached\/removed from slb backend server when attach\/detach vserver group from scaling group.</summary>
            /// <remarks>
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
