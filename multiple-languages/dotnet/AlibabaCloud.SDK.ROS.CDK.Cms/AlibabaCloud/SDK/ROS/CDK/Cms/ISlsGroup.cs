using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Represents a `SlsGroup`.</summary>
    [JsiiInterface(nativeType: typeof(ISlsGroup), fullyQualifiedName: "@alicloud/ros-cdk-cms.ISlsGroup")]
    public interface ISlsGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The creation time of the Logstore group.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute SlsGroupConfig: The configurations of the Logstore group.</summary>
        [JsiiProperty(name: "attrSlsGroupConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSlsGroupConfig
        {
            get;
        }

        /// <summary>Attribute SlsGroupDescription: The description of the Logstore group.</summary>
        [JsiiProperty(name: "attrSlsGroupDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSlsGroupDescription
        {
            get;
        }

        /// <summary>Attribute SlsGroupName: The name of the Logstore group.</summary>
        [JsiiProperty(name: "attrSlsGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSlsGroupName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.SlsGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cms.ISlsGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `SlsGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISlsGroup), fullyQualifiedName: "@alicloud/ros-cdk-cms.ISlsGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.ISlsGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The creation time of the Logstore group.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SlsGroupConfig: The configurations of the Logstore group.</summary>
            [JsiiProperty(name: "attrSlsGroupConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSlsGroupConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SlsGroupDescription: The description of the Logstore group.</summary>
            [JsiiProperty(name: "attrSlsGroupDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSlsGroupDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SlsGroupName: The name of the Logstore group.</summary>
            [JsiiProperty(name: "attrSlsGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSlsGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.SlsGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cms.ISlsGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms.ISlsGroupProps>()!;
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
