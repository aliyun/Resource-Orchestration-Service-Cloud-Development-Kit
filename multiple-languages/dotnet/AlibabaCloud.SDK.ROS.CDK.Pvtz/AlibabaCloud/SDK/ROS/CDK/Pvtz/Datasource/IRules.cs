using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource
{
    /// <summary>Represents a `Rules`.</summary>
    [JsiiInterface(nativeType: typeof(IRules), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.datasource.IRules")]
    public interface IRules : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute RuleIds: The list of rule IDs.</summary>
        [JsiiProperty(name: "attrRuleIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleIds
        {
            get;
        }

        /// <summary>Attribute Rules: The list of rules.</summary>
        [JsiiProperty(name: "attrRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRules
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pvtz.datasource.RulesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource.IRulesProps Props
        {
            get;
        }

        /// <summary>Represents a `Rules`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRules), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.datasource.IRules")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource.IRules
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute RuleIds: The list of rule IDs.</summary>
            [JsiiProperty(name: "attrRuleIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Rules: The list of rules.</summary>
            [JsiiProperty(name: "attrRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRules
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pvtz.datasource.RulesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource.IRulesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource.IRulesProps>()!;
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
