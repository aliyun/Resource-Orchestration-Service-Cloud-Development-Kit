using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `NatIpCidrs`.</summary>
    [JsiiInterface(nativeType: typeof(INatIpCidrs), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.INatIpCidrs")]
    public interface INatIpCidrs : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute NatIpCidrIds: The list of nat ip cidr IDs.</summary>
        [JsiiProperty(name: "attrNatIpCidrIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNatIpCidrIds
        {
            get;
        }

        /// <summary>Attribute NatIpCidrs: The list of nat ip cidrs.</summary>
        [JsiiProperty(name: "attrNatIpCidrs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNatIpCidrs
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.NatIpCidrsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatIpCidrsProps Props
        {
            get;
        }

        /// <summary>Represents a `NatIpCidrs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INatIpCidrs), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.INatIpCidrs")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatIpCidrs
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute NatIpCidrIds: The list of nat ip cidr IDs.</summary>
            [JsiiProperty(name: "attrNatIpCidrIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNatIpCidrIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NatIpCidrs: The list of nat ip cidrs.</summary>
            [JsiiProperty(name: "attrNatIpCidrs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNatIpCidrs
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.NatIpCidrsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatIpCidrsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatIpCidrsProps>()!;
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
