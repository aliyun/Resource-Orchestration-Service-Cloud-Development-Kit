using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosCustomCheckStandardPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCustomCheckStandardPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosCustomCheckStandardPolicyProps")]
    public interface IRosCustomCheckStandardPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: policyShowName: The name of the custom policy.
        /// </remarks>
        [JsiiProperty(name: "policyShowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyShowName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyType: The category type of the custom check policy:
        /// - STANDARD: standard.
        /// - REQUIREMENT: requirement.
        /// - SECTION: section.
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dependentPolicyId: The ID of the parent policy.
        /// (Dependency order from low to high: Section -> Requirement -> Standard)
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

        /// <remarks>
        /// <strong>Property</strong>: type: The category name of the associated policy (required when PolicyType is STANDARD):
        /// - AISPM: AI Security Posture Management (AISPM).
        /// - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).
        /// - RISK: Security Risk.
        /// - COMPLIANCE: Compliance Risk.
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

        /// <summary>Properties for defining a `RosCustomCheckStandardPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCustomCheckStandardPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosCustomCheckStandardPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosCustomCheckStandardPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: policyShowName: The name of the custom policy.
            /// </remarks>
            [JsiiProperty(name: "policyShowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyShowName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyType: The category type of the custom check policy:
            /// - STANDARD: standard.
            /// - REQUIREMENT: requirement.
            /// - SECTION: section.
            /// </remarks>
            [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dependentPolicyId: The ID of the parent policy.
            /// (Dependency order from low to high: Section -> Requirement -> Standard)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dependentPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DependentPolicyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The category name of the associated policy (required when PolicyType is STANDARD):
            /// - AISPM: AI Security Posture Management (AISPM).
            /// - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).
            /// - RISK: Security Risk.
            /// - COMPLIANCE: Compliance Risk.
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
