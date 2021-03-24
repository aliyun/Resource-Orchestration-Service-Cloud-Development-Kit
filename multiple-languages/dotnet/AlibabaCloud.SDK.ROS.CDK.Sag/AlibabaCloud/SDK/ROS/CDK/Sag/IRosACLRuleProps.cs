using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::ACLRule`.</summary>
    [JsiiInterface(nativeType: typeof(IRosACLRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosACLRuleProps")]
    public interface IRosACLRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aclId: Access control ID.
        /// </remarks>
        [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}")]
        string AclId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destCidr: Destination address, CIDR format and IP address range in IPv4 format.
        /// </remarks>
        [JsiiProperty(name: "destCidr", typeJson: "{\"primitive\":\"string\"}")]
        string DestCidr
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destPortRange: Destination port range, 80/80.
        /// </remarks>
        [JsiiProperty(name: "destPortRange", typeJson: "{\"primitive\":\"string\"}")]
        string DestPortRange
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: direction: Regular direction.
        /// Value: in|out
        /// </remarks>
        [JsiiProperty(name: "direction", typeJson: "{\"primitive\":\"string\"}")]
        string Direction
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipProtocol: Protocol, not case sensitive.
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string IpProtocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policy: Access: accept|drop
        /// </remarks>
        [JsiiProperty(name: "policy", typeJson: "{\"primitive\":\"string\"}")]
        string Policy
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
        /// </remarks>
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}")]
        string SourceCidr
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourcePortRange: Source port range, 80/80.
        /// </remarks>
        [JsiiProperty(name: "sourcePortRange", typeJson: "{\"primitive\":\"string\"}")]
        string SourcePortRange
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Rule description information, ranging from 1 to 512 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: Priority, ranging from 1 to 100.
        /// Default: 1
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Priority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::ACLRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosACLRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosACLRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosACLRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aclId: Access control ID.
            /// </remarks>
            [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}")]
            public string AclId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destCidr: Destination address, CIDR format and IP address range in IPv4 format.
            /// </remarks>
            [JsiiProperty(name: "destCidr", typeJson: "{\"primitive\":\"string\"}")]
            public string DestCidr
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destPortRange: Destination port range, 80/80.
            /// </remarks>
            [JsiiProperty(name: "destPortRange", typeJson: "{\"primitive\":\"string\"}")]
            public string DestPortRange
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: direction: Regular direction.
            /// Value: in|out
            /// </remarks>
            [JsiiProperty(name: "direction", typeJson: "{\"primitive\":\"string\"}")]
            public string Direction
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipProtocol: Protocol, not case sensitive.
            /// </remarks>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string IpProtocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policy: Access: accept|drop
            /// </remarks>
            [JsiiProperty(name: "policy", typeJson: "{\"primitive\":\"string\"}")]
            public string Policy
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
            /// </remarks>
            [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceCidr
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourcePortRange: Source port range, 80/80.
            /// </remarks>
            [JsiiProperty(name: "sourcePortRange", typeJson: "{\"primitive\":\"string\"}")]
            public string SourcePortRange
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Rule description information, ranging from 1 to 512 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: Priority, ranging from 1 to 100.
            /// Default: 1
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Priority
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
