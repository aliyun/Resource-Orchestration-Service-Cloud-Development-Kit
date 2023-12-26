using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `AttachPolicyToUser`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAttachPolicyToUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AttachPolicyToUserProps")]
    public interface IAttachPolicyToUserProps
    {
        /// <summary>Property policyName: Authorization policy name.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyName
        {
            get;
        }

        /// <summary>Property policyType: Authorization policy type.</summary>
        /// <remarks>
        /// Value: "System" or "Custom".
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyType
        {
            get;
        }

        /// <summary>Property userName: User name.Example: dev.</summary>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserName
        {
            get;
        }

        /// <summary>Properties for defining a `AttachPolicyToUser`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAttachPolicyToUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AttachPolicyToUserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IAttachPolicyToUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property policyName: Authorization policy name.</summary>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyType: Authorization policy type.</summary>
            /// <remarks>
            /// Value: "System" or "Custom".
            /// </remarks>
            [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userName: User name.Example: dev.</summary>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
