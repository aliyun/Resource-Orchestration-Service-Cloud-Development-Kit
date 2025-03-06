using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Represents a `EventRule`.</summary>
    [JsiiInterface(nativeType: typeof(IEventRule), fullyQualifiedName: "@alicloud/ros-cdk-cms.IEventRule")]
    public interface IEventRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Data: Number of rows affected.</summary>
        [JsiiProperty(name: "attrData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrData
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.EventRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cms.IEventRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `EventRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEventRule), fullyQualifiedName: "@alicloud/ros-cdk-cms.IEventRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IEventRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Data: Number of rows affected.</summary>
            [JsiiProperty(name: "attrData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrData
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.EventRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cms.IEventRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms.IEventRuleProps>()!;
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
