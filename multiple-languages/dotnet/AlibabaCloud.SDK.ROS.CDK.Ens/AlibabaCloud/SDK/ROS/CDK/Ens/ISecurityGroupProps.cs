using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `SecurityGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-securitygroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecurityGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.SecurityGroupProps")]
    public interface ISecurityGroupProps
    {
        /// <summary>Property description: The description of the security group.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
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

        /// <summary>Property securityGroupEgress: egress rules for the security group.</summary>
        [JsiiProperty(name: "securityGroupEgress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ens.RosSecurityGroup.SecurityGroupEgressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupEgress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupIngress: Ingress rules for the security group.</summary>
        [JsiiProperty(name: "securityGroupIngress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ens.RosSecurityGroup.SecurityGroupIngressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupIngress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupName: The name of the security group.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). By default, this parameter is empty.
        /// </remarks>
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SecurityGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-securitygroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecurityGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.SecurityGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.ISecurityGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property description: The description of the security group.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupEgress: egress rules for the security group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupEgress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ens.RosSecurityGroup.SecurityGroupEgressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityGroupEgress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupIngress: Ingress rules for the security group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupIngress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ens.RosSecurityGroup.SecurityGroupIngressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityGroupIngress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupName: The name of the security group.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). By default, this parameter is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
