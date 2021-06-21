using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::ControlPolicyAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IControlPolicyAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ControlPolicyAttachmentProps")]
    public interface IControlPolicyAttachmentProps
    {
        /// <summary>Property policyId: PolicyId.</summary>
        [JsiiProperty(name: "policyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyId
        {
            get;
        }

        /// <summary>Property targetId: TargetId.</summary>
        [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ResourceManager::ControlPolicyAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IControlPolicyAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ControlPolicyAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IControlPolicyAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property policyId: PolicyId.</summary>
            [JsiiProperty(name: "policyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetId: TargetId.</summary>
            [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
