using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `PublicIpAddressPools`.</summary>
    [JsiiInterface(nativeType: typeof(IPublicIpAddressPools), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IPublicIpAddressPools")]
    public interface IPublicIpAddressPools : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute PublicIpAddressPoolIds: The list of public ip address pool IDs.</summary>
        [JsiiProperty(name: "attrPublicIpAddressPoolIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicIpAddressPoolIds
        {
            get;
        }

        /// <summary>Attribute PublicIpAddressPools: The list of public ip address pools.</summary>
        [JsiiProperty(name: "attrPublicIpAddressPools", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicIpAddressPools
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.PublicIpAddressPoolsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IPublicIpAddressPoolsProps Props
        {
            get;
        }

        /// <summary>Represents a `PublicIpAddressPools`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPublicIpAddressPools), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IPublicIpAddressPools")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IPublicIpAddressPools
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute PublicIpAddressPoolIds: The list of public ip address pool IDs.</summary>
            [JsiiProperty(name: "attrPublicIpAddressPoolIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicIpAddressPoolIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicIpAddressPools: The list of public ip address pools.</summary>
            [JsiiProperty(name: "attrPublicIpAddressPools", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicIpAddressPools
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.PublicIpAddressPoolsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IPublicIpAddressPoolsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IPublicIpAddressPoolsProps>()!;
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
