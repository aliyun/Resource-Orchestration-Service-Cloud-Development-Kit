using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb
{
    /// <summary>Properties for defining a `ALIYUN::NLB::SecurityGroupAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSecurityGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.RosSecurityGroupAttachmentProps")]
    public interface IRosSecurityGroupAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupIds: List of security group id.
        /// </remarks>
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityGroupIds
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::NLB::SecurityGroupAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSecurityGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.RosSecurityGroupAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.IRosSecurityGroupAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupIds: List of security group id.
            /// </remarks>
            [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
