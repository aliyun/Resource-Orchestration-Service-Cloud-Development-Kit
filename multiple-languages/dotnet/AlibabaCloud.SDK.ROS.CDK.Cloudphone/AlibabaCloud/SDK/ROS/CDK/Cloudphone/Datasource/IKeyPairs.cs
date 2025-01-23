using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource
{
    /// <summary>Represents a `KeyPairs`.</summary>
    [JsiiInterface(nativeType: typeof(IKeyPairs), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.datasource.IKeyPairs")]
    public interface IKeyPairs : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute KeyPairNames: The list of key pair names.</summary>
        [JsiiProperty(name: "attrKeyPairNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeyPairNames
        {
            get;
        }

        /// <summary>Attribute KeyPairs: The list of key pairs.</summary>
        [JsiiProperty(name: "attrKeyPairs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeyPairs
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudphone.datasource.KeyPairsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource.IKeyPairsProps Props
        {
            get;
        }

        /// <summary>Represents a `KeyPairs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IKeyPairs), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.datasource.IKeyPairs")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource.IKeyPairs
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute KeyPairNames: The list of key pair names.</summary>
            [JsiiProperty(name: "attrKeyPairNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeyPairNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KeyPairs: The list of key pairs.</summary>
            [JsiiProperty(name: "attrKeyPairs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeyPairs
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudphone.datasource.KeyPairsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource.IKeyPairsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource.IKeyPairsProps>()!;
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
