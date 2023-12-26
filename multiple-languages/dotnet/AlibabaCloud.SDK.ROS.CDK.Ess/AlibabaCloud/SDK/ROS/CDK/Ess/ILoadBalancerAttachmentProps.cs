using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `LoadBalancerAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-loadbalancerattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILoadBalancerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.LoadBalancerAttachmentProps")]
    public interface ILoadBalancerAttachmentProps
    {
        /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScalingGroupId
        {
            get;
        }

        /// <summary>Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance.</summary>
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

        /// <summary>Property loadBalancerConfigs: Load balancer configuration list.</summary>
        [JsiiProperty(name: "loadBalancerConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosLoadBalancerAttachment.LoadBalancerConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerConfigs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group.</summary>
        /// <remarks>
        /// Valid values of N: 1 to 5.
        /// </remarks>
        [JsiiProperty(name: "loadBalancers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `LoadBalancerAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-loadbalancerattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.LoadBalancerAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.ILoadBalancerAttachmentProps
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

            /// <summary>Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance.</summary>
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

            /// <summary>Property loadBalancerConfigs: Load balancer configuration list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosLoadBalancerAttachment.LoadBalancerConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LoadBalancerConfigs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group.</summary>
            /// <remarks>
            /// Valid values of N: 1 to 5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LoadBalancers
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
