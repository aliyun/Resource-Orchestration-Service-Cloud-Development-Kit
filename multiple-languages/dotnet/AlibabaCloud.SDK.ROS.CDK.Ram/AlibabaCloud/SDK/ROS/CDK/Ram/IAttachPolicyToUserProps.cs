using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::AttachPolicyToUser`.</summary>
    [JsiiInterface(nativeType: typeof(IAttachPolicyToUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AttachPolicyToUserProps")]
    public interface IAttachPolicyToUserProps
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

        /// <summary>Property userName: User name.Example: dev.</summary>
        [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
        string UserName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::RAM::AttachPolicyToUser`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAttachPolicyToUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AttachPolicyToUserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IAttachPolicyToUserProps
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

            /// <summary>Property userName: User name.Example: dev.</summary>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
            public string UserName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
