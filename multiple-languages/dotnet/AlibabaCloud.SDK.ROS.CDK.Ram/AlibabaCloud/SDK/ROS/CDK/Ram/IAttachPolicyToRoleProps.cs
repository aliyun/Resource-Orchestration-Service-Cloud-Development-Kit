using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `AttachPolicyToRole`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAttachPolicyToRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AttachPolicyToRoleProps")]
    public interface IAttachPolicyToRoleProps
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

        /// <summary>Property roleName: Role name.Example: dev.</summary>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RoleName
        {
            get;
        }

        /// <summary>Properties for defining a `AttachPolicyToRole`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAttachPolicyToRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AttachPolicyToRoleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IAttachPolicyToRoleProps
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

            /// <summary>Property roleName: Role name.Example: dev.</summary>
            [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RoleName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
