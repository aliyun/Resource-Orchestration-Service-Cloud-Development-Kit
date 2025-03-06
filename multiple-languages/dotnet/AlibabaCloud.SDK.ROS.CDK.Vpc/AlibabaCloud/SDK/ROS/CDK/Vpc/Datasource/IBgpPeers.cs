using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `BgpPeers`.</summary>
    [JsiiInterface(nativeType: typeof(IBgpPeers), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IBgpPeers")]
    public interface IBgpPeers : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BgpPeerIds: The list of The BGP peer ids.</summary>
        [JsiiProperty(name: "attrBgpPeerIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBgpPeerIds
        {
            get;
        }

        /// <summary>Attribute BgpPeers: The list of The BGP peers.</summary>
        [JsiiProperty(name: "attrBgpPeers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBgpPeers
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.BgpPeersProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeersProps Props
        {
            get;
        }

        /// <summary>Represents a `BgpPeers`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBgpPeers), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IBgpPeers")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeers
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BgpPeerIds: The list of The BGP peer ids.</summary>
            [JsiiProperty(name: "attrBgpPeerIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBgpPeerIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BgpPeers: The list of The BGP peers.</summary>
            [JsiiProperty(name: "attrBgpPeers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBgpPeers
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.BgpPeersProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeersProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeersProps>()!;
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
