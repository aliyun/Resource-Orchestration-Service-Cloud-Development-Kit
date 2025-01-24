using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Represents a `Handshake`.</summary>
    [JsiiInterface(nativeType: typeof(IHandshake), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IHandshake")]
    public interface IHandshake : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute HandshakeId: This ID of Resource Manager handshake.</summary>
        [JsiiProperty(name: "attrHandshakeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHandshakeId
        {
            get;
        }

        /// <summary>Attribute MasterAccountId: Resource account master account ID.</summary>
        [JsiiProperty(name: "attrMasterAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMasterAccountId
        {
            get;
        }

        /// <summary>Attribute MasterAccountName: The name of the main account of the resource directory.</summary>
        [JsiiProperty(name: "attrMasterAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMasterAccountName
        {
            get;
        }

        /// <summary>Attribute Note: Remarks.</summary>
        [JsiiProperty(name: "attrNote", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNote
        {
            get;
        }

        /// <summary>Attribute ResourceDirectoryId: Resource directory ID.</summary>
        [JsiiProperty(name: "attrResourceDirectoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceDirectoryId
        {
            get;
        }

        /// <summary>Attribute TargetEntity: Invited account ID or login email.</summary>
        [JsiiProperty(name: "attrTargetEntity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetEntity
        {
            get;
        }

        /// <summary>Attribute TargetType: Type of account being invited.</summary>
        /// <remarks>
        /// Valid values: Account, Email
        /// </remarks>
        [JsiiProperty(name: "attrTargetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.HandshakeProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IHandshakeProps Props
        {
            get;
        }

        /// <summary>Represents a `Handshake`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHandshake), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IHandshake")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IHandshake
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute HandshakeId: This ID of Resource Manager handshake.</summary>
            [JsiiProperty(name: "attrHandshakeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHandshakeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MasterAccountId: Resource account master account ID.</summary>
            [JsiiProperty(name: "attrMasterAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMasterAccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MasterAccountName: The name of the main account of the resource directory.</summary>
            [JsiiProperty(name: "attrMasterAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMasterAccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Note: Remarks.</summary>
            [JsiiProperty(name: "attrNote", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNote
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceDirectoryId: Resource directory ID.</summary>
            [JsiiProperty(name: "attrResourceDirectoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceDirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetEntity: Invited account ID or login email.</summary>
            [JsiiProperty(name: "attrTargetEntity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetEntity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetType: Type of account being invited.</summary>
            /// <remarks>
            /// Valid values: Account, Email
            /// </remarks>
            [JsiiProperty(name: "attrTargetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.HandshakeProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IHandshakeProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IHandshakeProps>()!;
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
