using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `KvNamespace`.</summary>
    [JsiiInterface(nativeType: typeof(IKvNamespace), fullyQualifiedName: "@alicloud/ros-cdk-esa.IKvNamespace")]
    public interface IKvNamespace : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Description: The description of the namespace.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute KvCapacity: The available capacity of the namespace.</summary>
        /// <remarks>
        /// Unit: bytes.
        /// </remarks>
        [JsiiProperty(name: "attrKvCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKvCapacity
        {
            get;
        }

        /// <summary>Attribute KvCapacityString: The available capacity of the namespace.</summary>
        [JsiiProperty(name: "attrKvCapacityString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKvCapacityString
        {
            get;
        }

        /// <summary>Attribute KvCapacityUsed: The used capacity of the namespace.</summary>
        /// <remarks>
        /// Unit: bytes.
        /// </remarks>
        [JsiiProperty(name: "attrKvCapacityUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKvCapacityUsed
        {
            get;
        }

        /// <summary>Attribute KvCapacityUsedString: The used capacity of the namespace.</summary>
        [JsiiProperty(name: "attrKvCapacityUsedString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKvCapacityUsedString
        {
            get;
        }

        /// <summary>Attribute KvNamespace: The name of the namespace.</summary>
        [JsiiProperty(name: "attrKvNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKvNamespace
        {
            get;
        }

        /// <summary>Attribute NamespaceId: The ID of the namespace.</summary>
        [JsiiProperty(name: "attrNamespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNamespaceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.KvNamespaceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IKvNamespaceProps Props
        {
            get;
        }

        /// <summary>Represents a `KvNamespace`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IKvNamespace), fullyQualifiedName: "@alicloud/ros-cdk-esa.IKvNamespace")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IKvNamespace
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Description: The description of the namespace.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KvCapacity: The available capacity of the namespace.</summary>
            /// <remarks>
            /// Unit: bytes.
            /// </remarks>
            [JsiiProperty(name: "attrKvCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKvCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KvCapacityString: The available capacity of the namespace.</summary>
            [JsiiProperty(name: "attrKvCapacityString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKvCapacityString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KvCapacityUsed: The used capacity of the namespace.</summary>
            /// <remarks>
            /// Unit: bytes.
            /// </remarks>
            [JsiiProperty(name: "attrKvCapacityUsed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKvCapacityUsed
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KvCapacityUsedString: The used capacity of the namespace.</summary>
            [JsiiProperty(name: "attrKvCapacityUsedString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKvCapacityUsedString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KvNamespace: The name of the namespace.</summary>
            [JsiiProperty(name: "attrKvNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKvNamespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NamespaceId: The ID of the namespace.</summary>
            [JsiiProperty(name: "attrNamespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNamespaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.KvNamespaceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IKvNamespaceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IKvNamespaceProps>()!;
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
