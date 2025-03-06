using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Represents a `PatchBaseline`.</summary>
    [JsiiInterface(nativeType: typeof(IPatchBaseline), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.IPatchBaseline")]
    public interface IPatchBaseline : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ApprovalRules: Accept the rules.</summary>
        [JsiiProperty(name: "attrApprovalRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrApprovalRules
        {
            get;
        }

        /// <summary>Attribute ApprovedPatches: Approved patch list.</summary>
        [JsiiProperty(name: "attrApprovedPatches", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrApprovedPatches
        {
            get;
        }

        /// <summary>Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.</summary>
        [JsiiProperty(name: "attrApprovedPatchesEnableNonSecurity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrApprovedPatchesEnableNonSecurity
        {
            get;
        }

        /// <summary>Attribute CreatedBy: Patch baseline creator.</summary>
        [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreatedBy
        {
            get;
        }

        /// <summary>Attribute CreateTime: Creation time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: Patches baseline description information.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute IsDefault: Whether it is the default patch baseline.</summary>
        [JsiiProperty(name: "attrIsDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsDefault
        {
            get;
        }

        /// <summary>Attribute OperationSystem: Operating system type.</summary>
        [JsiiProperty(name: "attrOperationSystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOperationSystem
        {
            get;
        }

        /// <summary>Attribute PatchBaselineId: Patch baseline ID.</summary>
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

        /// <summary>Attribute RejectedPatches: Reject the name of the patch.</summary>
        [JsiiProperty(name: "attrRejectedPatches", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRejectedPatches
        {
            get;
        }

        /// <summary>Attribute RejectedPatchesAction: The operation of rejecting the patch.</summary>
        [JsiiProperty(name: "attrRejectedPatchesAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRejectedPatchesAction
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: Approve whether the patch includes updates other than security.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute ShareType: Patch baseline sharing type.</summary>
        [JsiiProperty(name: "attrShareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrShareType
        {
            get;
        }

        /// <summary>Attribute Sources: Patch source configuration list.</summary>
        [JsiiProperty(name: "attrSources", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSources
        {
            get;
        }

        /// <summary>Attribute Tags: Tags of patch baseline.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute UpdatedBy: Patch baseline updater.</summary>
        [JsiiProperty(name: "attrUpdatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdatedBy
        {
            get;
        }

        /// <summary>Attribute UpdatedDate: Update time.</summary>
        [JsiiProperty(name: "attrUpdatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdatedDate
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.datasource.PatchBaselineProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IPatchBaselineProps Props
        {
            get;
        }

        /// <summary>Represents a `PatchBaseline`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPatchBaseline), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.IPatchBaseline")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IPatchBaseline
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ApprovalRules: Accept the rules.</summary>
            [JsiiProperty(name: "attrApprovalRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrApprovalRules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ApprovedPatches: Approved patch list.</summary>
            [JsiiProperty(name: "attrApprovedPatches", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrApprovedPatches
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.</summary>
            [JsiiProperty(name: "attrApprovedPatchesEnableNonSecurity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrApprovedPatchesEnableNonSecurity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreatedBy: Patch baseline creator.</summary>
            [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreatedBy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Creation time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Patches baseline description information.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IsDefault: Whether it is the default patch baseline.</summary>
            [JsiiProperty(name: "attrIsDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsDefault
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OperationSystem: Operating system type.</summary>
            [JsiiProperty(name: "attrOperationSystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOperationSystem
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PatchBaselineId: Patch baseline ID.</summary>
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

            /// <summary>Attribute RejectedPatches: Reject the name of the patch.</summary>
            [JsiiProperty(name: "attrRejectedPatches", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRejectedPatches
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RejectedPatchesAction: The operation of rejecting the patch.</summary>
            [JsiiProperty(name: "attrRejectedPatchesAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRejectedPatchesAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: Approve whether the patch includes updates other than security.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ShareType: Patch baseline sharing type.</summary>
            [JsiiProperty(name: "attrShareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrShareType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Sources: Patch source configuration list.</summary>
            [JsiiProperty(name: "attrSources", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSources
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: Tags of patch baseline.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdatedBy: Patch baseline updater.</summary>
            [JsiiProperty(name: "attrUpdatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdatedBy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdatedDate: Update time.</summary>
            [JsiiProperty(name: "attrUpdatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdatedDate
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.datasource.PatchBaselineProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IPatchBaselineProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IPatchBaselineProps>()!;
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
