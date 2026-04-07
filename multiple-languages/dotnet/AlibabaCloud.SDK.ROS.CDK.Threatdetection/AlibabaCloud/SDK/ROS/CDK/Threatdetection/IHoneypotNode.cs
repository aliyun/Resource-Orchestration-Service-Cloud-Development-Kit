using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `HoneypotNode`.</summary>
    [JsiiInterface(nativeType: typeof(IHoneypotNode), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IHoneypotNode")]
    public interface IHoneypotNode : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.</summary>
        [JsiiProperty(name: "attrAllowHoneypotAccessInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAllowHoneypotAccessInternet
        {
            get;
        }

        /// <summary>Attribute AvailableProbeNum: The number of available probes.</summary>
        [JsiiProperty(name: "attrAvailableProbeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAvailableProbeNum
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the management node was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute NodeId: Honeypot management node id.</summary>
        [JsiiProperty(name: "attrNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodeId
        {
            get;
        }

        /// <summary>Attribute NodeName: The name of the management node.</summary>
        [JsiiProperty(name: "attrNodeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodeName
        {
            get;
        }

        /// <summary>Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.</summary>
        [JsiiProperty(name: "attrSecurityGroupProbeIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupProbeIpList
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.HoneypotNodeProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotNodeProps Props
        {
            get;
        }

        /// <summary>Represents a `HoneypotNode`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHoneypotNode), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IHoneypotNode")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotNode
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AllowHoneypotAccessInternet: Specifies whether to allow honeypots to access the Internet.</summary>
            [JsiiProperty(name: "attrAllowHoneypotAccessInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAllowHoneypotAccessInternet
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AvailableProbeNum: The number of available probes.</summary>
            [JsiiProperty(name: "attrAvailableProbeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAvailableProbeNum
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the management node was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NodeId: Honeypot management node id.</summary>
            [JsiiProperty(name: "attrNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NodeName: The name of the management node.</summary>
            [JsiiProperty(name: "attrNodeName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodeName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupProbeIpList: The CIDR blocks that are allowed to access the management node.</summary>
            [JsiiProperty(name: "attrSecurityGroupProbeIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupProbeIpList
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.HoneypotNodeProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotNodeProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotNodeProps>()!;
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
