using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `Ipv4Gateway`.</summary>
    [JsiiInterface(nativeType: typeof(IIpv4Gateway), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IIpv4Gateway")]
    public interface IIpv4Gateway : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Enabled: Enabled.</summary>
        [JsiiProperty(name: "attrEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnabled
        {
            get;
        }

        /// <summary>Attribute Ipv4GatewayDescription: Description information.</summary>
        [JsiiProperty(name: "attrIpv4GatewayDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv4GatewayDescription
        {
            get;
        }

        /// <summary>Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.</summary>
        [JsiiProperty(name: "attrIpv4GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv4GatewayId
        {
            get;
        }

        /// <summary>Attribute Ipv4GatewayName: Resource name.</summary>
        [JsiiProperty(name: "attrIpv4GatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv4GatewayName
        {
            get;
        }

        /// <summary>Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.</summary>
        [JsiiProperty(name: "attrIpv4GatewayRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv4GatewayRouteTableId
        {
            get;
        }

        /// <summary>Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.Ipv4GatewayProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IIpv4GatewayProps Props
        {
            get;
        }

        /// <summary>Represents a `Ipv4Gateway`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpv4Gateway), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IIpv4Gateway")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IIpv4Gateway
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Enabled: Enabled.</summary>
            [JsiiProperty(name: "attrEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv4GatewayDescription: Description information.</summary>
            [JsiiProperty(name: "attrIpv4GatewayDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv4GatewayDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.</summary>
            [JsiiProperty(name: "attrIpv4GatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv4GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv4GatewayName: Resource name.</summary>
            [JsiiProperty(name: "attrIpv4GatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv4GatewayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.</summary>
            [JsiiProperty(name: "attrIpv4GatewayRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv4GatewayRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.Ipv4GatewayProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IIpv4GatewayProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IIpv4GatewayProps>()!;
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
