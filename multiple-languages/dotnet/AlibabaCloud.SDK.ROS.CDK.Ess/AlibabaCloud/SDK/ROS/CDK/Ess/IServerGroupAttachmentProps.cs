using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ALIYUN::ESS::ServerGroupAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IServerGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ServerGroupAttachmentProps")]
    public interface IServerGroupAttachmentProps
    {
        /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingGroupId
        {
            get;
        }

        /// <summary>Property serverGroups: A collection of information about server groups.</summary>
        [JsiiProperty(name: "serverGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosServerGroupAttachment.ServerGroupsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ServerGroups
        {
            get;
        }

        /// <summary>Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance.</summary>
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

        /// <summary>Properties for defining a `ALIYUN::ESS::ServerGroupAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IServerGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.ServerGroupAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IServerGroupAttachmentProps
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

            /// <summary>Property serverGroups: A collection of information about server groups.</summary>
            [JsiiProperty(name: "serverGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosServerGroupAttachment.ServerGroupsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ServerGroups
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance.</summary>
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
