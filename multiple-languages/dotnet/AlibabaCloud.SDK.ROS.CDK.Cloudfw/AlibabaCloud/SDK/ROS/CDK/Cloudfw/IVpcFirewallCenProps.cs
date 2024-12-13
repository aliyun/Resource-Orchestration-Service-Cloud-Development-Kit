using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `VpcFirewallCen`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcen
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVpcFirewallCenProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.VpcFirewallCenProps")]
    public interface IVpcFirewallCenProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property firewallSwitch: Specifies whether to enable the VPC firewall.</summary>
        /// <remarks>
        /// Valid values:
        /// open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
        /// close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
        /// </remarks>
        [JsiiProperty(name: "firewallSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FirewallSwitch
        {
            get;
        }

        /// <summary>Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs.</summary>
        /// <remarks>
        /// If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
        /// </remarks>
        [JsiiProperty(name: "firewallVpcZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FirewallVpcZoneId
        {
            get;
        }

        /// <summary>Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall.</summary>
        [JsiiProperty(name: "networkInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkInstanceId
        {
            get;
        }

        /// <summary>Property vpcFirewallName: The instance name of the VPC firewall.</summary>
        [JsiiProperty(name: "vpcFirewallName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcFirewallName
        {
            get;
        }

        /// <summary>Property vpcRegion: The ID of the region to which the VPC belongs.</summary>
        [JsiiProperty(name: "vpcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcRegion
        {
            get;
        }

        /// <summary>Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall.</summary>
        /// <remarks>
        /// You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
        /// </remarks>
        [JsiiProperty(name: "firewallVpcCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FirewallVpcCidrBlock
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216\/29 is automatically allocated.</summary>
        [JsiiProperty(name: "firewallVSwitchCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FirewallVSwitchCidrBlock
        {
            get
            {
                return null;
            }
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

        /// <summary>Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `VpcFirewallCen`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcen
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVpcFirewallCenProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.VpcFirewallCenProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IVpcFirewallCenProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property firewallSwitch: Specifies whether to enable the VPC firewall.</summary>
            /// <remarks>
            /// Valid values:
            /// open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
            /// close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
            /// </remarks>
            [JsiiProperty(name: "firewallSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FirewallSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs.</summary>
            /// <remarks>
            /// If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
            /// </remarks>
            [JsiiProperty(name: "firewallVpcZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FirewallVpcZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall.</summary>
            [JsiiProperty(name: "networkInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcFirewallName: The instance name of the VPC firewall.</summary>
            [JsiiProperty(name: "vpcFirewallName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcFirewallName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcRegion: The ID of the region to which the VPC belongs.</summary>
            [JsiiProperty(name: "vpcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall.</summary>
            /// <remarks>
            /// You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "firewallVpcCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FirewallVpcCidrBlock
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216\/29 is automatically allocated.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "firewallVSwitchCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FirewallVSwitchCidrBlock
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "memberUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MemberUid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
