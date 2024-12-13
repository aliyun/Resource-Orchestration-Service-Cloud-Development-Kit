using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `TrFirewallRoutePolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITrFirewallRoutePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.TrFirewallRoutePolicyProps")]
    public interface ITrFirewallRoutePolicyProps
    {
        /// <summary>Property firewallId: The instance ID of the VPC firewall.</summary>
        [JsiiProperty(name: "firewallId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FirewallId
        {
            get;
        }

        /// <summary>Property policyDescription: The description of the traffic redirection instance.</summary>
        [JsiiProperty(name: "policyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyDescription
        {
            get;
        }

        /// <summary>Property policyName: The name of the traffic redirection instance.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyName
        {
            get;
        }

        /// <summary>Property policyType: The type of the traffic redirection scenario of the VPC firewall.</summary>
        /// <remarks>
        /// Valid values:
        /// fullmesh: interconnected instances
        /// one_to_one: instance to instance
        /// end_to_end: instance to instances
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyType
        {
            get;
        }

        /// <summary>Property destCandidateList: The secondary traffic redirection instances.</summary>
        [JsiiProperty(name: "destCandidateList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.DestCandidateListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestCandidateList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property srcCandidateList: The primary traffic redirection instances.</summary>
        [JsiiProperty(name: "srcCandidateList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.SrcCandidateListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SrcCandidateList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TrFirewallRoutePolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITrFirewallRoutePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.TrFirewallRoutePolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.ITrFirewallRoutePolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property firewallId: The instance ID of the VPC firewall.</summary>
            [JsiiProperty(name: "firewallId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FirewallId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyDescription: The description of the traffic redirection instance.</summary>
            [JsiiProperty(name: "policyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyName: The name of the traffic redirection instance.</summary>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyType: The type of the traffic redirection scenario of the VPC firewall.</summary>
            /// <remarks>
            /// Valid values:
            /// fullmesh: interconnected instances
            /// one_to_one: instance to instance
            /// end_to_end: instance to instances
            /// </remarks>
            [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destCandidateList: The secondary traffic redirection instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "destCandidateList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.DestCandidateListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DestCandidateList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property srcCandidateList: The primary traffic redirection instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "srcCandidateList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.SrcCandidateListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SrcCandidateList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
