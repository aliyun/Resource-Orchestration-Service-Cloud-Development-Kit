using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `Policy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.PolicyProps")]
    public interface IPolicyProps
    {
        /// <summary>Property policyName: The name of the policy.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyName
        {
            get;
        }

        /// <summary>Property policyType: The type of the backup policy.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>STANDARD: A standard backup policy. It supports data sources other than ECS
        /// instance backup.</description>
        /// <description>UDM_ECS_ONLY: A backup policy that supports only ECS instance backups.
        /// If you do not specify this parameter, Cloud Backup automatically sets the policy
        /// type based on whether a backup vault is specified in the policy rules:</description>
        /// <description>If a backup vault is specified in the rules, the policy type is set to
        /// STANDARD.</description>
        /// <description>If no backup vault is specified in the rules, the policy type is set to
        /// UDM_ECS_ONLY.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyType
        {
            get;
        }

        /// <summary>Property rules: The rules of the policy.</summary>
        [JsiiProperty(name: "rules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosPolicy.RulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Rules
        {
            get;
        }

        /// <summary>Property policyDescription: The description of the policy.</summary>
        [JsiiProperty(name: "policyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolicyDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Policy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.PolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property policyName: The name of the policy.</summary>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyType: The type of the backup policy.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>STANDARD: A standard backup policy. It supports data sources other than ECS
            /// instance backup.</description>
            /// <description>UDM_ECS_ONLY: A backup policy that supports only ECS instance backups.
            /// If you do not specify this parameter, Cloud Backup automatically sets the policy
            /// type based on whether a backup vault is specified in the policy rules:</description>
            /// <description>If a backup vault is specified in the rules, the policy type is set to
            /// STANDARD.</description>
            /// <description>If no backup vault is specified in the rules, the policy type is set to
            /// UDM_ECS_ONLY.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property rules: The rules of the policy.</summary>
            [JsiiProperty(name: "rules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosPolicy.RulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Rules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyDescription: The description of the policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "policyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PolicyDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
