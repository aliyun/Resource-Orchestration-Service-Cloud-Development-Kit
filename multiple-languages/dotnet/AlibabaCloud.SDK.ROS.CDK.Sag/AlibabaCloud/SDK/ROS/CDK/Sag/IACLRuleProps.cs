using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::ACLRule`.</summary>
    [JsiiInterface(nativeType: typeof(IACLRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.ACLRuleProps")]
    public interface IACLRuleProps
    {
        /// <summary>Property aclId: Access control ID.</summary>
        [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}")]
        string AclId
        {
            get;
        }

        /// <summary>Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.</summary>
        [JsiiProperty(name: "destCidr", typeJson: "{\"primitive\":\"string\"}")]
        string DestCidr
        {
            get;
        }

        /// <summary>Property destPortRange: Destination port range, 80/80.</summary>
        [JsiiProperty(name: "destPortRange", typeJson: "{\"primitive\":\"string\"}")]
        string DestPortRange
        {
            get;
        }

        /// <summary>Property direction: Regular direction.</summary>
        /// <remarks>
        /// Value: in|out
        /// </remarks>
        [JsiiProperty(name: "direction", typeJson: "{\"primitive\":\"string\"}")]
        string Direction
        {
            get;
        }

        /// <summary>Property ipProtocol: Protocol, not case sensitive.</summary>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string IpProtocol
        {
            get;
        }

        /// <summary>Property policy: Access: accept|drop.</summary>
        [JsiiProperty(name: "policy", typeJson: "{\"primitive\":\"string\"}")]
        string Policy
        {
            get;
        }

        /// <summary>Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.</summary>
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}")]
        string SourceCidr
        {
            get;
        }

        /// <summary>Property sourcePortRange: Source port range, 80/80.</summary>
        [JsiiProperty(name: "sourcePortRange", typeJson: "{\"primitive\":\"string\"}")]
        string SourcePortRange
        {
            get;
        }

        /// <summary>Property description: Rule description information, ranging from 1 to 512 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property priority: Priority, ranging from 1 to 100.</summary>
        /// <remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IACLRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.ACLRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IACLRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aclId: Access control ID.</summary>
            [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}")]
            public string AclId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.</summary>
            [JsiiProperty(name: "destCidr", typeJson: "{\"primitive\":\"string\"}")]
            public string DestCidr
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property destPortRange: Destination port range, 80/80.</summary>
            [JsiiProperty(name: "destPortRange", typeJson: "{\"primitive\":\"string\"}")]
            public string DestPortRange
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property direction: Regular direction.</summary>
            /// <remarks>
            /// Value: in|out
            /// </remarks>
            [JsiiProperty(name: "direction", typeJson: "{\"primitive\":\"string\"}")]
            public string Direction
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property ipProtocol: Protocol, not case sensitive.</summary>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string IpProtocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property policy: Access: accept|drop.</summary>
            [JsiiProperty(name: "policy", typeJson: "{\"primitive\":\"string\"}")]
            public string Policy
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.</summary>
            [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceCidr
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property sourcePortRange: Source port range, 80/80.</summary>
            [JsiiProperty(name: "sourcePortRange", typeJson: "{\"primitive\":\"string\"}")]
            public string SourcePortRange
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Rule description information, ranging from 1 to 512 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property priority: Priority, ranging from 1 to 100.</summary>
            /// <remarks>
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
