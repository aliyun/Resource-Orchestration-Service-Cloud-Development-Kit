using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::AttachPolicyToUser`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAttachPolicyToUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAttachPolicyToUserProps")]
    public interface IRosAttachPolicyToUserProps
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
        /// <strong>Property</strong>: userName: User name.Example: dev.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
        string UserName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::RAM::AttachPolicyToUser`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAttachPolicyToUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAttachPolicyToUserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosAttachPolicyToUserProps
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
            /// <strong>Property</strong>: userName: User name.Example: dev.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
            public string UserName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
