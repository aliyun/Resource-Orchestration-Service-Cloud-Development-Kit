using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::AttachPolicyToRole`.</summary>
    [JsiiInterface(nativeType: typeof(IAttachPolicyToRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AttachPolicyToRoleProps")]
    public interface IAttachPolicyToRoleProps
    {
        /// <summary>Property policyName: Authorization policy name.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"primitive\":\"string\"}")]
        string PolicyName
        {
            get;
        }

        /// <summary>Property policyType: Authorization policy type.</summary>
        /// <remarks>
        /// Value: "System" or "Custom".
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"primitive\":\"string\"}")]
        string PolicyType
        {
            get;
        }

        /// <summary>Property roleName: Role name.Example: dev.</summary>
        [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}")]
        string RoleName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::RAM::AttachPolicyToRole`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAttachPolicyToRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AttachPolicyToRoleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IAttachPolicyToRoleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property policyName: Authorization policy name.</summary>
            [JsiiProperty(name: "policyName", typeJson: "{\"primitive\":\"string\"}")]
            public string PolicyName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property policyType: Authorization policy type.</summary>
            /// <remarks>
            /// Value: "System" or "Custom".
            /// </remarks>
            [JsiiProperty(name: "policyType", typeJson: "{\"primitive\":\"string\"}")]
            public string PolicyType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property roleName: Role name.Example: dev.</summary>
            [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}")]
            public string RoleName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
