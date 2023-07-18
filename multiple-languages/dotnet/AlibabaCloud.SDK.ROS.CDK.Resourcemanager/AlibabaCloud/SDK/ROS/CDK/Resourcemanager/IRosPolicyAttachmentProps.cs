using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::PolicyAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IRosPolicyAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosPolicyAttachmentProps")]
    public interface IRosPolicyAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: policyName: The name of the policy
        /// </remarks>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyType: The type of the policy
        /// </remarks>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: principalName: The name of the object to which you want to attach the policy
        /// </remarks>
        [JsiiProperty(name: "principalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrincipalName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        /// </remarks>
        [JsiiProperty(name: "principalType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrincipalType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ResourceManager::PolicyAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosPolicyAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosPolicyAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosPolicyAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: policyName: The name of the policy
            /// </remarks>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyType: The type of the policy
            /// </remarks>
            [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: principalName: The name of the object to which you want to attach the policy
            /// </remarks>
            [JsiiProperty(name: "principalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrincipalName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
            /// </remarks>
            [JsiiProperty(name: "principalType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrincipalType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
