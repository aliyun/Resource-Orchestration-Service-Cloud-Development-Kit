using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas.Datasource
{
    /// <summary>Represents a `AccessGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IAccessGroup), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.IAccessGroup")]
    public interface IAccessGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccessGroupName: The name of the permission group.</summary>
        [JsiiProperty(name: "attrAccessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccessGroupName
        {
            get;
        }

        /// <summary>Attribute AccessGroupType: Permission group types, including VPC and Classic.</summary>
        [JsiiProperty(name: "attrAccessGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccessGroupType
        {
            get;
        }

        /// <summary>Attribute Description: Permission group description information.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute MountTargetCount: The number of Mount points to which this permission group is applied.</summary>
        [JsiiProperty(name: "attrMountTargetCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMountTargetCount
        {
            get;
        }

        /// <summary>Attribute RuleCount: The number of permission group rules contained in this permission group.</summary>
        [JsiiProperty(name: "attrRuleCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleCount
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-nas.datasource.AccessGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IAccessGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `AccessGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccessGroup), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.IAccessGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IAccessGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccessGroupName: The name of the permission group.</summary>
            [JsiiProperty(name: "attrAccessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccessGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AccessGroupType: Permission group types, including VPC and Classic.</summary>
            [JsiiProperty(name: "attrAccessGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccessGroupType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Permission group description information.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MountTargetCount: The number of Mount points to which this permission group is applied.</summary>
            [JsiiProperty(name: "attrMountTargetCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMountTargetCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleCount: The number of permission group rules contained in this permission group.</summary>
            [JsiiProperty(name: "attrRuleCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleCount
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-nas.datasource.AccessGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IAccessGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IAccessGroupProps>()!;
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
