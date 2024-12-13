using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `RosVpcFirewallConfigure`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpcFirewallConfigureProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigureProps")]
    public interface IRosVpcFirewallConfigureProps
    {
        /// <remarks>
        /// <strong>Property</strong>: firewallSwitch: The status of the VPC firewall after you create the firewall. Valid values:
        /// open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
        /// close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
        /// </remarks>
        [JsiiProperty(name: "firewallSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FirewallSwitch
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: localVpcCidrTableList: The CIDR blocks of the local VPC.
        /// </remarks>
        [JsiiProperty(name: "localVpcCidrTableList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.LocalVpcCidrTableListProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object LocalVpcCidrTableList
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: localVpcId: The ID of the local VPC.
        /// </remarks>
        [JsiiProperty(name: "localVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalVpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: localVpcRegion: The region ID of the local VPC.
        /// </remarks>
        [JsiiProperty(name: "localVpcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalVpcRegion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: peerVpcCidrTableList: The CIDR blocks of the peer VPC.
        /// </remarks>
        [JsiiProperty(name: "peerVpcCidrTableList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object PeerVpcCidrTableList
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: peerVpcId: The ID of the peer VPC.
        /// </remarks>
        [JsiiProperty(name: "peerVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeerVpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: peerVpcRegion: The region ID of the peer VPC.
        /// </remarks>
        [JsiiProperty(name: "peerVpcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeerVpcRegion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcFirewallName: The instance name of the VPC firewall.
        /// </remarks>
        [JsiiProperty(name: "vpcFirewallName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcFirewallName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: memberUid: The UID of the member that is managed by your Alibaba Cloud account.
        /// </remarks>
        [JsiiProperty(name: "memberUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MemberUid
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVpcFirewallConfigure`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpcFirewallConfigureProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigureProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IRosVpcFirewallConfigureProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: firewallSwitch: The status of the VPC firewall after you create the firewall. Valid values:
            /// open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
            /// close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
            /// </remarks>
            [JsiiProperty(name: "firewallSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FirewallSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: localVpcCidrTableList: The CIDR blocks of the local VPC.
            /// </remarks>
            [JsiiProperty(name: "localVpcCidrTableList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.LocalVpcCidrTableListProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object LocalVpcCidrTableList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: localVpcId: The ID of the local VPC.
            /// </remarks>
            [JsiiProperty(name: "localVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: localVpcRegion: The region ID of the local VPC.
            /// </remarks>
            [JsiiProperty(name: "localVpcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalVpcRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: peerVpcCidrTableList: The CIDR blocks of the peer VPC.
            /// </remarks>
            [JsiiProperty(name: "peerVpcCidrTableList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object PeerVpcCidrTableList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: peerVpcId: The ID of the peer VPC.
            /// </remarks>
            [JsiiProperty(name: "peerVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeerVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: peerVpcRegion: The region ID of the peer VPC.
            /// </remarks>
            [JsiiProperty(name: "peerVpcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeerVpcRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcFirewallName: The instance name of the VPC firewall.
            /// </remarks>
            [JsiiProperty(name: "vpcFirewallName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcFirewallName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: memberUid: The UID of the member that is managed by your Alibaba Cloud account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "memberUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MemberUid
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
