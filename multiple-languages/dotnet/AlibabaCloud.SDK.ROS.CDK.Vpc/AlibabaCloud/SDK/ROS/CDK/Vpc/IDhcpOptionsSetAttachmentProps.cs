using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `DhcpOptionsSetAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDhcpOptionsSetAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.DhcpOptionsSetAttachmentProps")]
    public interface IDhcpOptionsSetAttachmentProps
    {
        /// <summary>Property dhcpOptionsSetId: The ID of the DHCP options set.</summary>
        [JsiiProperty(name: "dhcpOptionsSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DhcpOptionsSetId
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Properties for defining a `DhcpOptionsSetAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionssetattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDhcpOptionsSetAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.DhcpOptionsSetAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IDhcpOptionsSetAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dhcpOptionsSetId: The ID of the DHCP options set.</summary>
            [JsiiProperty(name: "dhcpOptionsSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DhcpOptionsSetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
