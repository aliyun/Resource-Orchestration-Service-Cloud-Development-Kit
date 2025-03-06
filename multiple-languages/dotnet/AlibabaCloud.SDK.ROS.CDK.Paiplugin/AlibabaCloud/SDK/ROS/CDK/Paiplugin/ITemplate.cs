using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paiplugin
{
    /// <summary>Represents a `Template`.</summary>
    [JsiiInterface(nativeType: typeof(ITemplate), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.ITemplate")]
    public interface ITemplate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreatedTime: The creation time of the Signature.</summary>
        [JsiiProperty(name: "attrCreatedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreatedTime
        {
            get;
        }

        /// <summary>Attribute Description: Application instructions.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute Id: The ID of the Signature.</summary>
        [JsiiProperty(name: "attrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrId
        {
            get;
        }

        /// <summary>Attribute Name: The name of the Signature.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrName
        {
            get;
        }

        /// <summary>Attribute Reason: Review recommendations.</summary>
        [JsiiProperty(name: "attrReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReason
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-paiplugin.TemplateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Paiplugin.ITemplateProps Props
        {
            get;
        }

        /// <summary>Represents a `Template`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITemplate), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.ITemplate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paiplugin.ITemplate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreatedTime: The creation time of the Signature.</summary>
            [JsiiProperty(name: "attrCreatedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreatedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Application instructions.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Id: The ID of the Signature.</summary>
            [JsiiProperty(name: "attrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Name: The name of the Signature.</summary>
            [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Reason: Review recommendations.</summary>
            [JsiiProperty(name: "attrReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReason
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-paiplugin.TemplateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Paiplugin.ITemplateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Paiplugin.ITemplateProps>()!;
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
