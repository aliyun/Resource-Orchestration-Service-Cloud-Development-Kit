using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `HoneypotProbe`.</summary>
    [JsiiInterface(nativeType: typeof(IHoneypotProbe), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IHoneypotProbe")]
    public interface IHoneypotProbe : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.</summary>
        [JsiiProperty(name: "attrArp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArp
        {
            get;
        }

        /// <summary>Attribute ControlNodeId: The ID of the management node.</summary>
        [JsiiProperty(name: "attrControlNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrControlNodeId
        {
            get;
        }

        /// <summary>Attribute DisplayName: The name of the probe.</summary>
        [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDisplayName
        {
            get;
        }

        /// <summary>Attribute HoneypotBindList: The configuration of the probe.</summary>
        [JsiiProperty(name: "attrHoneypotBindList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHoneypotBindList
        {
            get;
        }

        /// <summary>Attribute HoneypotProbeId: The ID of the probe.</summary>
        [JsiiProperty(name: "attrHoneypotProbeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHoneypotProbeId
        {
            get;
        }

        /// <summary>Attribute Ping: Specifies whether to enable ping scan.</summary>
        [JsiiProperty(name: "attrPing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPing
        {
            get;
        }

        /// <summary>Attribute ProbeType: The type of the probe.</summary>
        [JsiiProperty(name: "attrProbeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProbeType
        {
            get;
        }

        /// <summary>Attribute ProbeVersion: The version of the probe.</summary>
        [JsiiProperty(name: "attrProbeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProbeVersion
        {
            get;
        }

        /// <summary>Attribute ServiceIpList: Listen to the IP address list.</summary>
        [JsiiProperty(name: "attrServiceIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceIpList
        {
            get;
        }

        /// <summary>Attribute Uuid: The UUID of the instance.</summary>
        [JsiiProperty(name: "attrUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUuid
        {
            get;
        }

        /// <summary>Attribute VpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.HoneypotProbeProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotProbeProps Props
        {
            get;
        }

        /// <summary>Represents a `HoneypotProbe`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHoneypotProbe), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IHoneypotProbe")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotProbe
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.</summary>
            [JsiiProperty(name: "attrArp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ControlNodeId: The ID of the management node.</summary>
            [JsiiProperty(name: "attrControlNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrControlNodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DisplayName: The name of the probe.</summary>
            [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HoneypotBindList: The configuration of the probe.</summary>
            [JsiiProperty(name: "attrHoneypotBindList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHoneypotBindList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HoneypotProbeId: The ID of the probe.</summary>
            [JsiiProperty(name: "attrHoneypotProbeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHoneypotProbeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ping: Specifies whether to enable ping scan.</summary>
            [JsiiProperty(name: "attrPing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPing
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProbeType: The type of the probe.</summary>
            [JsiiProperty(name: "attrProbeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProbeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProbeVersion: The version of the probe.</summary>
            [JsiiProperty(name: "attrProbeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProbeVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceIpList: Listen to the IP address list.</summary>
            [JsiiProperty(name: "attrServiceIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceIpList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Uuid: The UUID of the instance.</summary>
            [JsiiProperty(name: "attrUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The ID of the VPC.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.HoneypotProbeProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotProbeProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotProbeProps>()!;
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
