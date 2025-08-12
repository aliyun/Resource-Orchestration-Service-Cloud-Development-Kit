using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Represents a `MetricRuleTemplateDeployment`.</summary>
    [JsiiInterface(nativeType: typeof(IMetricRuleTemplateDeployment), fullyQualifiedName: "@alicloud/ros-cdk-cms.IMetricRuleTemplateDeployment")]
    public interface IMetricRuleTemplateDeployment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute GroupId: The ID of the group that applied the template to.</summary>
        [JsiiProperty(name: "attrGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGroupId
        {
            get;
        }

        /// <summary>Attribute RuleIds: The IDs of rhe generated rules.</summary>
        [JsiiProperty(name: "attrRuleIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.MetricRuleTemplateDeploymentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cms.IMetricRuleTemplateDeploymentProps Props
        {
            get;
        }

        /// <summary>Represents a `MetricRuleTemplateDeployment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMetricRuleTemplateDeployment), fullyQualifiedName: "@alicloud/ros-cdk-cms.IMetricRuleTemplateDeployment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IMetricRuleTemplateDeployment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute GroupId: The ID of the group that applied the template to.</summary>
            [JsiiProperty(name: "attrGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleIds: The IDs of rhe generated rules.</summary>
            [JsiiProperty(name: "attrRuleIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.MetricRuleTemplateDeploymentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cms.IMetricRuleTemplateDeploymentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms.IMetricRuleTemplateDeploymentProps>()!;
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
