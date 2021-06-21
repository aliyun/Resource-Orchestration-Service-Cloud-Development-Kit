using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::ControlPolicyAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IRosControlPolicyAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosControlPolicyAttachmentProps")]
    public interface IRosControlPolicyAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: policyId: PolicyId
        /// </remarks>
        [JsiiProperty(name: "policyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetId: TargetId
        /// </remarks>
        [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ResourceManager::ControlPolicyAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosControlPolicyAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosControlPolicyAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosControlPolicyAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: policyId: PolicyId
            /// </remarks>
            [JsiiProperty(name: "policyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetId: TargetId
            /// </remarks>
            [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
