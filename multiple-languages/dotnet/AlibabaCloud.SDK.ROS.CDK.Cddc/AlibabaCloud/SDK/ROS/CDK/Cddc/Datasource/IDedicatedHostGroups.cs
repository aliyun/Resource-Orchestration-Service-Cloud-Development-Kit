using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource
{
    /// <summary>Represents a `DedicatedHostGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IDedicatedHostGroups), fullyQualifiedName: "@alicloud/ros-cdk-cddc.datasource.IDedicatedHostGroups")]
    public interface IDedicatedHostGroups : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.</summary>
        [JsiiProperty(name: "attrDedicatedHostGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHostGroupIds
        {
            get;
        }

        /// <summary>Attribute DedicatedHostGroups: The list of dedicated host groups.</summary>
        [JsiiProperty(name: "attrDedicatedHostGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHostGroups
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroupsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource.IDedicatedHostGroupsProps Props
        {
            get;
        }

        /// <summary>Represents a `DedicatedHostGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDedicatedHostGroups), fullyQualifiedName: "@alicloud/ros-cdk-cddc.datasource.IDedicatedHostGroups")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource.IDedicatedHostGroups
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.</summary>
            [JsiiProperty(name: "attrDedicatedHostGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHostGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DedicatedHostGroups: The list of dedicated host groups.</summary>
            [JsiiProperty(name: "attrDedicatedHostGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHostGroups
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroupsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource.IDedicatedHostGroupsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource.IDedicatedHostGroupsProps>()!;
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
