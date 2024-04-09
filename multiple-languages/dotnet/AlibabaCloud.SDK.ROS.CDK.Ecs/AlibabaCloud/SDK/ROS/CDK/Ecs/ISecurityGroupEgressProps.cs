using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `SecurityGroupEgress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegress
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecurityGroupEgressProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SecurityGroupEgressProps")]
    public interface ISecurityGroupEgressProps
    {
        /// <summary>Property ipProtocol: Ip protocol for in rule.</summary>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpProtocol
        {
            get;
        }

        /// <summary>Property portRange: Ip protocol relative port range.</summary>
        /// <remarks>
        /// For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
        /// </remarks>
        [JsiiProperty(name: "portRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PortRange
        {
            get;
        }

        /// <summary>Property description: Description of the security group rule, [1, 512] characters.</summary>
        /// <remarks>
        /// The default is empty.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destCidrIp: The destination IPv4 CIDR block to which you want to control access.</summary>
        /// <remarks>
        /// CIDR blocks and IPv4 addresses are supported.
        /// </remarks>
        [JsiiProperty(name: "destCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestCidrIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destGroupId: The destination security group ID to which access permissions need to be set.</summary>
        /// <remarks>
        /// Set at least one of the DestGroupId, DestCidrIp, Ipv6DestCidrIp, or DestPrefixListId parameters.
        ///
        /// <list type="bullet">
        /// <description>If DestGroupId is specified without the DestCidrIp parameter, the NicType parameter can only take the value intranet.</description>
        /// <description>If both DestGroupId and DestCidrIp are specified, DestCidrIp is assumed to prevail.
        /// You should pay attention to:</description>
        /// <description>Enterprise Security groups do not support authorized security group access.</description>
        /// <description>The maximum number of authorized security groups supported by ordinary security groups is 20.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "destGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>If neither DestGroupOwnerId nor DestGroupOwnerAccount is set, it is considered to set the access rights of your other security group.</description>
        /// <description>If you have set the parameter DestCidrIp, the parameter DestGroupOwnerId is invalid.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "destGroupOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestGroupOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destPrefixListId: The ID of the destination prefix list to which you want to control access.</summary>
        /// <remarks>
        /// You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
        /// If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
        /// If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
        /// </remarks>
        [JsiiProperty(name: "destPrefixListId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestPrefixListId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set.</summary>
        /// <remarks>
        /// CIDR format and IPv6 format IP address range are supported.
        /// </remarks>
        [JsiiProperty(name: "ipv6DestCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6DestCidrIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nicType: Network type, could be 'internet' or 'intranet'.</summary>
        /// <remarks>
        /// Default value is internet.
        /// </remarks>
        [JsiiProperty(name: "nicType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NicType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access).</summary>
        /// <remarks>
        /// Default value is accept.
        /// </remarks>
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property priority: Authorization policies priority range[1, 100].</summary>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Priority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: Id of the security group.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SecurityGroupEgress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegress
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecurityGroupEgressProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SecurityGroupEgressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ISecurityGroupEgressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipProtocol: Ip protocol for in rule.</summary>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property portRange: Ip protocol relative port range.</summary>
            /// <remarks>
            /// For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
            /// </remarks>
            [JsiiProperty(name: "portRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PortRange
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Description of the security group rule, [1, 512] characters.</summary>
            /// <remarks>
            /// The default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destCidrIp: The destination IPv4 CIDR block to which you want to control access.</summary>
            /// <remarks>
            /// CIDR blocks and IPv4 addresses are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestCidrIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destGroupId: The destination security group ID to which access permissions need to be set.</summary>
            /// <remarks>
            /// Set at least one of the DestGroupId, DestCidrIp, Ipv6DestCidrIp, or DestPrefixListId parameters.
            ///
            /// <list type="bullet">
            /// <description>If DestGroupId is specified without the DestCidrIp parameter, the NicType parameter can only take the value intranet.</description>
            /// <description>If both DestGroupId and DestCidrIp are specified, DestCidrIp is assumed to prevail.
            /// You should pay attention to:</description>
            /// <description>Enterprise Security groups do not support authorized security group access.</description>
            /// <description>The maximum number of authorized security groups supported by ordinary security groups is 20.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destGroupOwnerId: When setting security group rules across accounts, the Ali Cloud account ID of the destination security group.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>If neither DestGroupOwnerId nor DestGroupOwnerAccount is set, it is considered to set the access rights of your other security group.</description>
            /// <description>If you have set the parameter DestCidrIp, the parameter DestGroupOwnerId is invalid.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destGroupOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestGroupOwnerId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destPrefixListId: The ID of the destination prefix list to which you want to control access.</summary>
            /// <remarks>
            /// You can call the DescribePrefixLists operation to query the IDs of available prefix lists.Take note of the following items:
            /// If a security group is in the classic network, you cannot configure prefix lists in the security group rules. For information about the limits on security groups and prefix lists, see the "Security group limits" in Limits.
            /// If you specify DestCidrIp, Ipv6DestCidrIp, or DestGroupId, DestPrefixListId is ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPrefixListId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPrefixListId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6DestCidrIp: Destination IPv6 CIDR address block for which access rights need to be set.</summary>
            /// <remarks>
            /// CIDR format and IPv6 format IP address range are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6DestCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6DestCidrIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nicType: Network type, could be 'internet' or 'intranet'.</summary>
            /// <remarks>
            /// Default value is internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nicType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NicType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access).</summary>
            /// <remarks>
            /// Default value is accept.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Policy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property priority: Authorization policies priority range[1, 100].</summary>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: Id of the security group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
