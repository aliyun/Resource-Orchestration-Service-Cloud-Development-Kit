using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `VpcFirewallConfigure`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVpcFirewallConfigureProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.VpcFirewallConfigureProps")]
    public interface IVpcFirewallConfigureProps
    {
        /// <summary>Property firewallSwitch: The status of the VPC firewall after you create the firewall.</summary>
        /// <remarks>
        /// Valid values:
        /// open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
        /// close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
        /// </remarks>
        [JsiiProperty(name: "firewallSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FirewallSwitch
        {
            get;
        }

        /// <summary>Property localVpcCidrTableList: The CIDR blocks of the local VPC.</summary>
        [JsiiProperty(name: "localVpcCidrTableList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.LocalVpcCidrTableListProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object LocalVpcCidrTableList
        {
            get;
        }

        /// <summary>Property localVpcId: The ID of the local VPC.</summary>
        [JsiiProperty(name: "localVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalVpcId
        {
            get;
        }

        /// <summary>Property localVpcRegion: The region ID of the local VPC.</summary>
        [JsiiProperty(name: "localVpcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalVpcRegion
        {
            get;
        }

        /// <summary>Property peerVpcCidrTableList: The CIDR blocks of the peer VPC.</summary>
        [JsiiProperty(name: "peerVpcCidrTableList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object PeerVpcCidrTableList
        {
            get;
        }

        /// <summary>Property peerVpcId: The ID of the peer VPC.</summary>
        [JsiiProperty(name: "peerVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeerVpcId
        {
            get;
        }

        /// <summary>Property peerVpcRegion: The region ID of the peer VPC.</summary>
        [JsiiProperty(name: "peerVpcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeerVpcRegion
        {
            get;
        }

        /// <summary>Property vpcFirewallName: The instance name of the VPC firewall.</summary>
        [JsiiProperty(name: "vpcFirewallName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcFirewallName
        {
            get;
        }

        /// <summary>Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.</summary>
        [JsiiProperty(name: "memberUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MemberUid
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `VpcFirewallConfigure`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVpcFirewallConfigureProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.VpcFirewallConfigureProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IVpcFirewallConfigureProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property firewallSwitch: The status of the VPC firewall after you create the firewall.</summary>
            /// <remarks>
            /// Valid values:
            /// open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
            /// close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
            /// </remarks>
            [JsiiProperty(name: "firewallSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FirewallSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property localVpcCidrTableList: The CIDR blocks of the local VPC.</summary>
            [JsiiProperty(name: "localVpcCidrTableList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.LocalVpcCidrTableListProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object LocalVpcCidrTableList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property localVpcId: The ID of the local VPC.</summary>
            [JsiiProperty(name: "localVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property localVpcRegion: The region ID of the local VPC.</summary>
            [JsiiProperty(name: "localVpcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalVpcRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property peerVpcCidrTableList: The CIDR blocks of the peer VPC.</summary>
            [JsiiProperty(name: "peerVpcCidrTableList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object PeerVpcCidrTableList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property peerVpcId: The ID of the peer VPC.</summary>
            [JsiiProperty(name: "peerVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeerVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property peerVpcRegion: The region ID of the peer VPC.</summary>
            [JsiiProperty(name: "peerVpcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeerVpcRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcFirewallName: The instance name of the VPC firewall.</summary>
            [JsiiProperty(name: "vpcFirewallName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcFirewallName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "memberUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MemberUid
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
