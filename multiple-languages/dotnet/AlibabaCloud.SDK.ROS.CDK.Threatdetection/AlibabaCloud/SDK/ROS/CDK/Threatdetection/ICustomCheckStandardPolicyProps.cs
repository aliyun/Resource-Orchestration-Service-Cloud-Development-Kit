using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `CustomCheckStandardPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICustomCheckStandardPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.CustomCheckStandardPolicyProps")]
    public interface ICustomCheckStandardPolicyProps
    {
        /// <summary>Property policyShowName: The name of the custom policy.</summary>
        [JsiiProperty(name: "policyShowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyShowName
        {
            get;
        }

        /// <summary>Property policyType: The category type of the custom check policy: - STANDARD: standard.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>REQUIREMENT: requirement.</description>
        /// <description>SECTION: section.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyType
        {
            get;
        }

        /// <summary>Property dependentPolicyId: The ID of the parent policy.</summary>
        /// <remarks>
        /// (Dependency order from low to high: Section -&gt; Requirement -&gt; Standard)
        /// </remarks>
        [JsiiProperty(name: "dependentPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DependentPolicyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM).</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).</description>
        /// <description>RISK: Security Risk.</description>
        /// <description>COMPLIANCE: Compliance Risk.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CustomCheckStandardPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICustomCheckStandardPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.CustomCheckStandardPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.ICustomCheckStandardPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property policyShowName: The name of the custom policy.</summary>
            [JsiiProperty(name: "policyShowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyShowName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyType: The category type of the custom check policy: - STANDARD: standard.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>REQUIREMENT: requirement.</description>
            /// <description>SECTION: section.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dependentPolicyId: The ID of the parent policy.</summary>
            /// <remarks>
            /// (Dependency order from low to high: Section -&gt; Requirement -&gt; Standard)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dependentPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DependentPolicyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM).</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).</description>
            /// <description>RISK: Security Risk.</description>
            /// <description>COMPLIANCE: Compliance Risk.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
