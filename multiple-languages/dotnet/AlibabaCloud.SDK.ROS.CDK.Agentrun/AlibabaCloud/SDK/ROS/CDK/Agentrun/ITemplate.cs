using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Agentrun
{
    /// <summary>Represents a `Template`.</summary>
    [JsiiInterface(nativeType: typeof(ITemplate), fullyQualifiedName: "@alicloud/ros-cdk-agentrun.ITemplate")]
    public interface ITemplate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute TemplateArn: The ARN of the template.</summary>
        [JsiiProperty(name: "attrTemplateArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplateArn
        {
            get;
        }

        /// <summary>Attribute TemplateId: The ID of the template.</summary>
        [JsiiProperty(name: "attrTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplateId
        {
            get;
        }

        /// <summary>Attribute TemplateName: The name of the template.</summary>
        [JsiiProperty(name: "attrTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplateName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-agentrun.TemplateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Agentrun.ITemplateProps Props
        {
            get;
        }

        /// <summary>Represents a `Template`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITemplate), fullyQualifiedName: "@alicloud/ros-cdk-agentrun.ITemplate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Agentrun.ITemplate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute TemplateArn: The ARN of the template.</summary>
            [JsiiProperty(name: "attrTemplateArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplateArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TemplateId: The ID of the template.</summary>
            [JsiiProperty(name: "attrTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TemplateName: The name of the template.</summary>
            [JsiiProperty(name: "attrTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-agentrun.TemplateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Agentrun.ITemplateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Agentrun.ITemplateProps>()!;
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
