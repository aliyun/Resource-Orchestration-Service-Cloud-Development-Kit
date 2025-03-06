using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `PrefixLists`.</summary>
    [JsiiInterface(nativeType: typeof(IPrefixLists), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IPrefixLists")]
    public interface IPrefixLists : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute PrefixListIds: The list of prefix list IDs.</summary>
        [JsiiProperty(name: "attrPrefixListIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrefixListIds
        {
            get;
        }

        /// <summary>Attribute PrefixLists: The list of prefix lists.</summary>
        [JsiiProperty(name: "attrPrefixLists", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrefixLists
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.PrefixListsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IPrefixListsProps Props
        {
            get;
        }

        /// <summary>Represents a `PrefixLists`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPrefixLists), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IPrefixLists")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IPrefixLists
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute PrefixListIds: The list of prefix list IDs.</summary>
            [JsiiProperty(name: "attrPrefixListIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrefixListIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrefixLists: The list of prefix lists.</summary>
            [JsiiProperty(name: "attrPrefixLists", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrefixLists
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.PrefixListsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IPrefixListsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IPrefixListsProps>()!;
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
