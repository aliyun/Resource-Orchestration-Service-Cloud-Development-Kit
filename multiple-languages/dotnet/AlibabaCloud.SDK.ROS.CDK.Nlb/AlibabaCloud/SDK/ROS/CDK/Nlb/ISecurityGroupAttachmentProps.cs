using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb
{
    /// <summary>Properties for defining a `SecurityGroupAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecurityGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.SecurityGroupAttachmentProps")]
    public interface ISecurityGroupAttachmentProps
    {
        /// <summary>Property loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Property securityGroupIds: List of security group id.</summary>
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityGroupIds
        {
            get;
        }

        /// <summary>Properties for defining a `SecurityGroupAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecurityGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.SecurityGroupAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.ISecurityGroupAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityGroupIds: List of security group id.</summary>
            [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
