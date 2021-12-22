using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::DhcpOptionsSetAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDhcpOptionsSetAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosDhcpOptionsSetAttachmentProps")]
    public interface IRosDhcpOptionsSetAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dhcpOptionsSetId: The ID of the DHCP options set.
        /// </remarks>
        [JsiiProperty(name: "dhcpOptionsSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DhcpOptionsSetId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::DhcpOptionsSetAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDhcpOptionsSetAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosDhcpOptionsSetAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosDhcpOptionsSetAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dhcpOptionsSetId: The ID of the DHCP options set.
            /// </remarks>
            [JsiiProperty(name: "dhcpOptionsSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DhcpOptionsSetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
