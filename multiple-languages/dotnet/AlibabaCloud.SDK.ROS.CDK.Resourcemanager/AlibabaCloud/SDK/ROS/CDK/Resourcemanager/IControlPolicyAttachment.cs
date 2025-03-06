using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Represents a `ControlPolicyAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IControlPolicyAttachment), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IControlPolicyAttachment")]
    public interface IControlPolicyAttachment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AttachDate: AttachDate.</summary>
        [JsiiProperty(name: "attrAttachDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAttachDate
        {
            get;
        }

        /// <summary>Attribute Description: Description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute PolicyId: PolicyId.</summary>
        [JsiiProperty(name: "attrPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolicyId
        {
            get;
        }

        /// <summary>Attribute PolicyName: PolicyName.</summary>
        [JsiiProperty(name: "attrPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolicyName
        {
            get;
        }

        /// <summary>Attribute PolicyType: PolicyType.</summary>
        [JsiiProperty(name: "attrPolicyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolicyType
        {
            get;
        }

        /// <summary>Attribute TargetId: TargetId.</summary>
        [JsiiProperty(name: "attrTargetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.ControlPolicyAttachmentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IControlPolicyAttachmentProps Props
        {
            get;
        }

        /// <summary>Represents a `ControlPolicyAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IControlPolicyAttachment), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IControlPolicyAttachment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IControlPolicyAttachment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AttachDate: AttachDate.</summary>
            [JsiiProperty(name: "attrAttachDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAttachDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolicyId: PolicyId.</summary>
            [JsiiProperty(name: "attrPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolicyName: PolicyName.</summary>
            [JsiiProperty(name: "attrPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolicyType: PolicyType.</summary>
            [JsiiProperty(name: "attrPolicyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetId: TargetId.</summary>
            [JsiiProperty(name: "attrTargetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.ControlPolicyAttachmentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IControlPolicyAttachmentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IControlPolicyAttachmentProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
