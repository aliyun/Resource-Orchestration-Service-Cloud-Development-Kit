using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>Represents a `CompliancePack`.</summary>
    [JsiiInterface(nativeType: typeof(ICompliancePack), fullyQualifiedName: "@alicloud/ros-cdk-config.ICompliancePack")]
    public interface ICompliancePack : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccountId: Aliyun User Id.</summary>
        [JsiiProperty(name: "attrAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccountId
        {
            get;
        }

        /// <summary>Attribute CompliancePackId: Compliance Package ID.</summary>
        [JsiiProperty(name: "attrCompliancePackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCompliancePackId
        {
            get;
        }

        /// <summary>Attribute CompliancePackName: Compliance Package Name.</summary>
        [JsiiProperty(name: "attrCompliancePackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCompliancePackName
        {
            get;
        }

        /// <summary>Attribute CompliancePackTemplateId: Compliance Package Template Id.</summary>
        [JsiiProperty(name: "attrCompliancePackTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCompliancePackTemplateId
        {
            get;
        }

        /// <summary>Attribute Description: Description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute RiskLevel: Ris Level, valid values: 1 | 2 | 3.</summary>
        [JsiiProperty(name: "attrRiskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRiskLevel
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-config.CompliancePackProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Config.ICompliancePackProps Props
        {
            get;
        }

        /// <summary>Represents a `CompliancePack`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICompliancePack), fullyQualifiedName: "@alicloud/ros-cdk-config.ICompliancePack")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Config.ICompliancePack
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccountId: Aliyun User Id.</summary>
            [JsiiProperty(name: "attrAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CompliancePackId: Compliance Package ID.</summary>
            [JsiiProperty(name: "attrCompliancePackId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCompliancePackId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CompliancePackName: Compliance Package Name.</summary>
            [JsiiProperty(name: "attrCompliancePackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCompliancePackName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CompliancePackTemplateId: Compliance Package Template Id.</summary>
            [JsiiProperty(name: "attrCompliancePackTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCompliancePackTemplateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RiskLevel: Ris Level, valid values: 1 | 2 | 3.</summary>
            [JsiiProperty(name: "attrRiskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRiskLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-config.CompliancePackProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Config.ICompliancePackProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Config.ICompliancePackProps>()!;
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
