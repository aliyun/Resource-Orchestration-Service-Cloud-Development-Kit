using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Represents a `SlsGroups`.</summary>
    [JsiiInterface(nativeType: typeof(ISlsGroups), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.ISlsGroups")]
    public interface ISlsGroups : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute SlsGroupNames: The list of sls group names.</summary>
        [JsiiProperty(name: "attrSlsGroupNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSlsGroupNames
        {
            get;
        }

        /// <summary>Attribute SlsGroups: The list of sls groups.</summary>
        [JsiiProperty(name: "attrSlsGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSlsGroups
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.datasource.SlsGroupsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.ISlsGroupsProps Props
        {
            get;
        }

        /// <summary>Represents a `SlsGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISlsGroups), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.ISlsGroups")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.ISlsGroups
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute SlsGroupNames: The list of sls group names.</summary>
            [JsiiProperty(name: "attrSlsGroupNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSlsGroupNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SlsGroups: The list of sls groups.</summary>
            [JsiiProperty(name: "attrSlsGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSlsGroups
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.datasource.SlsGroupsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.ISlsGroupsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.ISlsGroupsProps>()!;
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
