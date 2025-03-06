using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Represents a `SimpleOfficeSite`.</summary>
    [JsiiInterface(nativeType: typeof(ISimpleOfficeSite), fullyQualifiedName: "@alicloud/ros-cdk-ecd.ISimpleOfficeSite")]
    public interface ISimpleOfficeSite : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute OfficeSiteId: The ID of the workspace.</summary>
        [JsiiProperty(name: "attrOfficeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOfficeSiteId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecd.SimpleOfficeSiteProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecd.ISimpleOfficeSiteProps Props
        {
            get;
        }

        /// <summary>Represents a `SimpleOfficeSite`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISimpleOfficeSite), fullyQualifiedName: "@alicloud/ros-cdk-ecd.ISimpleOfficeSite")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.ISimpleOfficeSite
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute OfficeSiteId: The ID of the workspace.</summary>
            [JsiiProperty(name: "attrOfficeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOfficeSiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecd.SimpleOfficeSiteProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecd.ISimpleOfficeSiteProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecd.ISimpleOfficeSiteProps>()!;
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
