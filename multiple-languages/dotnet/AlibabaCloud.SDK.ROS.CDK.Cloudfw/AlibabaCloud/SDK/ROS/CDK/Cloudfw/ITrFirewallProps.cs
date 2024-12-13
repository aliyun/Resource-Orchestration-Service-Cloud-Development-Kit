using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `TrFirewall`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewall
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITrFirewallProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.TrFirewallProps")]
    public interface ITrFirewallProps
    {
        /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property firewallName: The name of the firewall.</summary>
        [JsiiProperty(name: "firewallName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FirewallName
        {
            get;
        }

        /// <summary>Property regionNo: The region ID of the route router.</summary>
        [JsiiProperty(name: "regionNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RegionNo
        {
            get;
        }

        /// <summary>Property routeMode: The routing mode of the VPC firewall.</summary>
        /// <remarks>
        /// Valid values:
        /// managed: automatic mode
        /// manual: manual mode
        /// </remarks>
        [JsiiProperty(name: "routeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteMode
        {
            get;
        }

        /// <summary>Property transitRouterId: The ID of the transit router.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterId
        {
            get;
        }

        /// <summary>Property firewallDescription: The description of the firewall.</summary>
        [JsiiProperty(name: "firewallDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FirewallDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.</summary>
        [JsiiProperty(name: "firewallSubnetCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FirewallSubnetCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.</summary>
        [JsiiProperty(name: "firewallVpcCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FirewallVpcCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.</summary>
        [JsiiProperty(name: "firewallVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FirewallVpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode.</summary>
        [JsiiProperty(name: "firewallVswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FirewallVswitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.</summary>
        [JsiiProperty(name: "trAttachmentMasterCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrAttachmentMasterCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trAttachmentMasterZone: The primary zone for the vSwitch.</summary>
        [JsiiProperty(name: "trAttachmentMasterZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrAttachmentMasterZone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.</summary>
        [JsiiProperty(name: "trAttachmentSlaveCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrAttachmentSlaveCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trAttachmentSlaveZone: The secondary zone for the vSwitch.</summary>
        [JsiiProperty(name: "trAttachmentSlaveZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrAttachmentSlaveZone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TrFirewall`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewall
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITrFirewallProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.TrFirewallProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.ITrFirewallProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property firewallName: The name of the firewall.</summary>
            [JsiiProperty(name: "firewallName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FirewallName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property regionNo: The region ID of the route router.</summary>
            [JsiiProperty(name: "regionNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RegionNo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routeMode: The routing mode of the VPC firewall.</summary>
            /// <remarks>
            /// Valid values:
            /// managed: automatic mode
            /// manual: manual mode
            /// </remarks>
            [JsiiProperty(name: "routeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterId: The ID of the transit router.</summary>
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property firewallDescription: The description of the firewall.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "firewallDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FirewallDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "firewallSubnetCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FirewallSubnetCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "firewallVpcCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FirewallVpcCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "firewallVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FirewallVpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "firewallVswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FirewallVswitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "trAttachmentMasterCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrAttachmentMasterCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trAttachmentMasterZone: The primary zone for the vSwitch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "trAttachmentMasterZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrAttachmentMasterZone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "trAttachmentSlaveCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrAttachmentSlaveCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trAttachmentSlaveZone: The secondary zone for the vSwitch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "trAttachmentSlaveZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrAttachmentSlaveZone
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
