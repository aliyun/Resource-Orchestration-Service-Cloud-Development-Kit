using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbase
{
    /// <summary>Represents a `MultiZoneCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IMultiZoneCluster), fullyQualifiedName: "@alicloud/ros-cdk-hbase.IMultiZoneCluster")]
    public interface IMultiZoneCluster : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ClusterId: The ID of the instance.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterId
        {
            get;
        }

        /// <summary>Attribute ServiceConnAddrs: LIST of ServiceConnAddr.</summary>
        [JsiiProperty(name: "attrServiceConnAddrs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceConnAddrs
        {
            get;
        }

        /// <summary>Attribute SlbConnAddrs: LIST of SlbConnAddr.</summary>
        [JsiiProperty(name: "attrSlbConnAddrs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSlbConnAddrs
        {
            get;
        }

        /// <summary>Attribute ThriftConn: Thrift Connection address list.</summary>
        [JsiiProperty(name: "attrThriftConn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrThriftConn
        {
            get;
        }

        /// <summary>Attribute UiProxyConnAddrInfo: WebUI connection information list.</summary>
        [JsiiProperty(name: "attrUiProxyConnAddrInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUiProxyConnAddrInfo
        {
            get;
        }

        /// <summary>Attribute ZkConnAddrs: List of ZkConnAddr.</summary>
        [JsiiProperty(name: "attrZkConnAddrs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZkConnAddrs
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbase.MultiZoneClusterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Hbase.IMultiZoneClusterProps Props
        {
            get;
        }

        /// <summary>Represents a `MultiZoneCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMultiZoneCluster), fullyQualifiedName: "@alicloud/ros-cdk-hbase.IMultiZoneCluster")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbase.IMultiZoneCluster
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ClusterId: The ID of the instance.</summary>
            [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceConnAddrs: LIST of ServiceConnAddr.</summary>
            [JsiiProperty(name: "attrServiceConnAddrs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceConnAddrs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SlbConnAddrs: LIST of SlbConnAddr.</summary>
            [JsiiProperty(name: "attrSlbConnAddrs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSlbConnAddrs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ThriftConn: Thrift Connection address list.</summary>
            [JsiiProperty(name: "attrThriftConn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrThriftConn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UiProxyConnAddrInfo: WebUI connection information list.</summary>
            [JsiiProperty(name: "attrUiProxyConnAddrInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUiProxyConnAddrInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZkConnAddrs: List of ZkConnAddr.</summary>
            [JsiiProperty(name: "attrZkConnAddrs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZkConnAddrs
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbase.MultiZoneClusterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Hbase.IMultiZoneClusterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hbase.IMultiZoneClusterProps>()!;
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
