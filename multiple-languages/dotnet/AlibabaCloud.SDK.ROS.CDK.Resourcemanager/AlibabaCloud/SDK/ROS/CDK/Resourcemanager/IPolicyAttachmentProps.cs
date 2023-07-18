using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::PolicyAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IPolicyAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.PolicyAttachmentProps")]
    public interface IPolicyAttachmentProps
    {
        /// <summary>Property policyName: The name of the policy.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyName
        {
            get;
        }

        /// <summary>Property policyType: The type of the policy.</summary>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyType
        {
            get;
        }

        /// <summary>Property principalName: The name of the object to which you want to attach the policy.</summary>
        [JsiiProperty(name: "principalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrincipalName
        {
            get;
        }

        /// <summary>Property principalType: The type of the object to which you want to attach the policy.</summary>
        /// <remarks>
        /// Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        /// </remarks>
        [JsiiProperty(name: "principalType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrincipalType
        {
            get;
        }

        /// <summary>Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IPolicyAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.PolicyAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IPolicyAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property policyName: The name of the policy.</summary>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyType: The type of the policy.</summary>
            [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property principalName: The name of the object to which you want to attach the policy.</summary>
            [JsiiProperty(name: "principalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrincipalName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property principalType: The type of the object to which you want to attach the policy.</summary>
            /// <remarks>
            /// Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
            /// </remarks>
            [JsiiProperty(name: "principalType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrincipalType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
