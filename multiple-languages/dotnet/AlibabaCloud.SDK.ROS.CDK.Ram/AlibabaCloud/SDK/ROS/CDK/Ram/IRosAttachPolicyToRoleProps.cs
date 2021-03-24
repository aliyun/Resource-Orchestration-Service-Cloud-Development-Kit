using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::AttachPolicyToRole`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAttachPolicyToRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAttachPolicyToRoleProps")]
    public interface IRosAttachPolicyToRoleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: policyName: Authorization policy name.
        /// </remarks>
        [JsiiProperty(name: "policyName", typeJson: "{\"primitive\":\"string\"}")]
        string PolicyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyType: Authorization policy type. Value: "System" or "Custom".
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"primitive\":\"string\"}")]
        string PolicyType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: roleName: Role name.Example: dev.
        /// </remarks>
        [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}")]
        string RoleName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::RAM::AttachPolicyToRole`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAttachPolicyToRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAttachPolicyToRoleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosAttachPolicyToRoleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: policyName: Authorization policy name.
            /// </remarks>
            [JsiiProperty(name: "policyName", typeJson: "{\"primitive\":\"string\"}")]
            public string PolicyName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyType: Authorization policy type. Value: "System" or "Custom".
            /// </remarks>
            [JsiiProperty(name: "policyType", typeJson: "{\"primitive\":\"string\"}")]
            public string PolicyType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: roleName: Role name.Example: dev.
            /// </remarks>
            [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}")]
            public string RoleName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
