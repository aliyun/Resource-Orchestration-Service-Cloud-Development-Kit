using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `RosTrFirewallRoutePolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTrFirewallRoutePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicyProps")]
    public interface IRosTrFirewallRoutePolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: firewallId: The instance ID of the VPC firewall.
        /// </remarks>
        [JsiiProperty(name: "firewallId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FirewallId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyDescription: The description of the traffic redirection instance.
        /// </remarks>
        [JsiiProperty(name: "policyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyDescription
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyName: The name of the traffic redirection instance.
        /// </remarks>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyType: The type of the traffic redirection scenario of the VPC firewall. Valid values:
        /// fullmesh: interconnected instances
        /// one_to_one: instance to instance
        /// end_to_end: instance to instances
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destCandidateList: The secondary traffic redirection instances.
        /// </remarks>
        [JsiiProperty(name: "destCandidateList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.DestCandidateListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestCandidateList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: srcCandidateList: The primary traffic redirection instances.
        /// </remarks>
        [JsiiProperty(name: "srcCandidateList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.SrcCandidateListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SrcCandidateList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTrFirewallRoutePolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTrFirewallRoutePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IRosTrFirewallRoutePolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: firewallId: The instance ID of the VPC firewall.
            /// </remarks>
            [JsiiProperty(name: "firewallId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FirewallId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyDescription: The description of the traffic redirection instance.
            /// </remarks>
            [JsiiProperty(name: "policyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyName: The name of the traffic redirection instance.
            /// </remarks>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyType: The type of the traffic redirection scenario of the VPC firewall. Valid values:
            /// fullmesh: interconnected instances
            /// one_to_one: instance to instance
            /// end_to_end: instance to instances
            /// </remarks>
            [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destCandidateList: The secondary traffic redirection instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destCandidateList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.DestCandidateListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DestCandidateList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: srcCandidateList: The primary traffic redirection instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "srcCandidateList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.SrcCandidateListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SrcCandidateList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
