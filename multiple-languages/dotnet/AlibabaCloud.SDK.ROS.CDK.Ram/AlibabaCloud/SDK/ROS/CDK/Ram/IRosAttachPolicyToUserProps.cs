using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `RosAttachPolicyToUser`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAttachPolicyToUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAttachPolicyToUserProps")]
    public interface IRosAttachPolicyToUserProps
    {
        /// <remarks>
        /// <strong>Property</strong>: policyName: Authorization policy name.
        /// </remarks>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyType: Authorization policy type. Value: "System" or "Custom".
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: userName: User name.Example: dev.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserName
        {
            get;
        }

        /// <summary>Properties for defining a `RosAttachPolicyToUser`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAttachPolicyToUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAttachPolicyToUserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosAttachPolicyToUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: policyName: Authorization policy name.
            /// </remarks>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyType: Authorization policy type. Value: "System" or "Custom".
            /// </remarks>
            [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: User name.Example: dev.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
