using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Represents a `ProtocolMountTarget`.</summary>
    [JsiiInterface(nativeType: typeof(IProtocolMountTarget), fullyQualifiedName: "@alicloud/ros-cdk-nas.IProtocolMountTarget")]
    public interface IProtocolMountTarget : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ExportId: The protocol service exports directory ID.</summary>
        [JsiiProperty(name: "attrExportId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExportId
        {
            get;
        }

        /// <summary>Attribute FileSystemId: File system ID.</summary>
        [JsiiProperty(name: "attrFileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFileSystemId
        {
            get;
        }

        /// <summary>Attribute ProtocolMountTargetDomain: The protocol mount target domain.</summary>
        [JsiiProperty(name: "attrProtocolMountTargetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProtocolMountTargetDomain
        {
            get;
        }

        /// <summary>Attribute ProtocolServiceId: Protocol service ID.</summary>
        [JsiiProperty(name: "attrProtocolServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProtocolServiceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-nas.ProtocolMountTargetProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Nas.IProtocolMountTargetProps Props
        {
            get;
        }

        /// <summary>Represents a `ProtocolMountTarget`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IProtocolMountTarget), fullyQualifiedName: "@alicloud/ros-cdk-nas.IProtocolMountTarget")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IProtocolMountTarget
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ExportId: The protocol service exports directory ID.</summary>
            [JsiiProperty(name: "attrExportId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExportId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FileSystemId: File system ID.</summary>
            [JsiiProperty(name: "attrFileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProtocolMountTargetDomain: The protocol mount target domain.</summary>
            [JsiiProperty(name: "attrProtocolMountTargetDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProtocolMountTargetDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProtocolServiceId: Protocol service ID.</summary>
            [JsiiProperty(name: "attrProtocolServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProtocolServiceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-nas.ProtocolMountTargetProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Nas.IProtocolMountTargetProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Nas.IProtocolMountTargetProps>()!;
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
