using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `CustomCheckItem`.</summary>
    [JsiiInterface(nativeType: typeof(ICustomCheckItem), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.ICustomCheckItem")]
    public interface ICustomCheckItem : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AssistInfo: Check Item Description Help Information.</summary>
        [JsiiProperty(name: "attrAssistInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAssistInfo
        {
            get;
        }

        /// <summary>Attribute CheckId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrCheckId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCheckId
        {
            get;
        }

        /// <summary>Attribute CheckRule: Check Item Check Rules.</summary>
        [JsiiProperty(name: "attrCheckRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCheckRule
        {
            get;
        }

        /// <summary>Attribute CheckShowName: Check item display name.</summary>
        [JsiiProperty(name: "attrCheckShowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCheckShowName
        {
            get;
        }

        /// <summary>Attribute Description: Check item description information.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute InstanceSubType: Asset subtype to which the check item belongs.</summary>
        [JsiiProperty(name: "attrInstanceSubType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceSubType
        {
            get;
        }

        /// <summary>Attribute InstanceType: Asset type to which the check item belongs.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceType
        {
            get;
        }

        /// <summary>Attribute Remark: Remarks.</summary>
        [JsiiProperty(name: "attrRemark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemark
        {
            get;
        }

        /// <summary>Attribute RiskLevel: Risk level of inspection items.</summary>
        [JsiiProperty(name: "attrRiskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRiskLevel
        {
            get;
        }

        /// <summary>Attribute SectionIds: CHECK SECTION OF INSPECTIONS.</summary>
        [JsiiProperty(name: "attrSectionIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSectionIds
        {
            get;
        }

        /// <summary>Attribute Solution: Check Item Solution.</summary>
        [JsiiProperty(name: "attrSolution", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSolution
        {
            get;
        }

        /// <summary>Attribute Vendor: Vendor to which the item belongs.</summary>
        [JsiiProperty(name: "attrVendor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVendor
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.CustomCheckItemProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.ICustomCheckItemProps Props
        {
            get;
        }

        /// <summary>Represents a `CustomCheckItem`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICustomCheckItem), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.ICustomCheckItem")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.ICustomCheckItem
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AssistInfo: Check Item Description Help Information.</summary>
            [JsiiProperty(name: "attrAssistInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAssistInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CheckId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrCheckId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCheckId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CheckRule: Check Item Check Rules.</summary>
            [JsiiProperty(name: "attrCheckRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCheckRule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CheckShowName: Check item display name.</summary>
            [JsiiProperty(name: "attrCheckShowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCheckShowName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Check item description information.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceSubType: Asset subtype to which the check item belongs.</summary>
            [JsiiProperty(name: "attrInstanceSubType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceSubType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceType: Asset type to which the check item belongs.</summary>
            [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Remark: Remarks.</summary>
            [JsiiProperty(name: "attrRemark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemark
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RiskLevel: Risk level of inspection items.</summary>
            [JsiiProperty(name: "attrRiskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRiskLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SectionIds: CHECK SECTION OF INSPECTIONS.</summary>
            [JsiiProperty(name: "attrSectionIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSectionIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Solution: Check Item Solution.</summary>
            [JsiiProperty(name: "attrSolution", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSolution
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Vendor: Vendor to which the item belongs.</summary>
            [JsiiProperty(name: "attrVendor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVendor
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.CustomCheckItemProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.ICustomCheckItemProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.ICustomCheckItemProps>()!;
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
