using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Represents a `DefaultPatchBaseline`.</summary>
    [JsiiInterface(nativeType: typeof(IDefaultPatchBaseline), fullyQualifiedName: "@alicloud/ros-cdk-oos.IDefaultPatchBaseline")]
    public interface IDefaultPatchBaseline : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.</summary>
        [JsiiProperty(name: "attrApprovalRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrApprovalRules
        {
            get;
        }

        /// <summary>Attribute CreatedBy: The creator of the patch baseline.</summary>
        [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreatedBy
        {
            get;
        }

        /// <summary>Attribute CreatedDate: The time when the patch baseline was created.</summary>
        [JsiiProperty(name: "attrCreatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreatedDate
        {
            get;
        }

        /// <summary>Attribute Description: The description of the patch baseline.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute OperationSystem: The type of the operating system.</summary>
        [JsiiProperty(name: "attrOperationSystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOperationSystem
        {
            get;
        }

        /// <summary>Attribute PatchBaselineId: The ID of the patch baseline.</summary>
        [JsiiProperty(name: "attrPatchBaselineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPatchBaselineId
        {
            get;
        }

        /// <summary>Attribute PatchBaselineName: The name of the patch baseline.</summary>
        [JsiiProperty(name: "attrPatchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPatchBaselineName
        {
            get;
        }

        /// <summary>Attribute ShareType: The share type of the patch baseline.</summary>
        [JsiiProperty(name: "attrShareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrShareType
        {
            get;
        }

        /// <summary>Attribute UpdatedBy: The user who last modified the patch baseline.</summary>
        [JsiiProperty(name: "attrUpdatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdatedBy
        {
            get;
        }

        /// <summary>Attribute UpdatedDate: The time when the patch baseline was last modified.</summary>
        [JsiiProperty(name: "attrUpdatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdatedDate
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.DefaultPatchBaselineProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oos.IDefaultPatchBaselineProps Props
        {
            get;
        }

        /// <summary>Represents a `DefaultPatchBaseline`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDefaultPatchBaseline), fullyQualifiedName: "@alicloud/ros-cdk-oos.IDefaultPatchBaseline")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IDefaultPatchBaseline
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.</summary>
            [JsiiProperty(name: "attrApprovalRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrApprovalRules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreatedBy: The creator of the patch baseline.</summary>
            [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreatedBy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreatedDate: The time when the patch baseline was created.</summary>
            [JsiiProperty(name: "attrCreatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreatedDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the patch baseline.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OperationSystem: The type of the operating system.</summary>
            [JsiiProperty(name: "attrOperationSystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOperationSystem
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PatchBaselineId: The ID of the patch baseline.</summary>
            [JsiiProperty(name: "attrPatchBaselineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPatchBaselineId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PatchBaselineName: The name of the patch baseline.</summary>
            [JsiiProperty(name: "attrPatchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPatchBaselineName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ShareType: The share type of the patch baseline.</summary>
            [JsiiProperty(name: "attrShareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrShareType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdatedBy: The user who last modified the patch baseline.</summary>
            [JsiiProperty(name: "attrUpdatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdatedBy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdatedDate: The time when the patch baseline was last modified.</summary>
            [JsiiProperty(name: "attrUpdatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdatedDate
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.DefaultPatchBaselineProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oos.IDefaultPatchBaselineProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oos.IDefaultPatchBaselineProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
