using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Represents a `PrepayInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IPrepayInstance), fullyQualifiedName: "@alicloud/ros-cdk-redis.IPrepayInstance")]
    public interface IPrepayInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ArchitectureType: The architecture.</summary>
        [JsiiProperty(name: "attrArchitectureType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArchitectureType
        {
            get;
        }

        /// <summary>Attribute Bandwidth: The bandwidth of the instance.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidth
        {
            get;
        }

        /// <summary>Attribute Capacity: The storage capacity of the instance.</summary>
        /// <remarks>
        /// Unit: MB.
        /// </remarks>
        [JsiiProperty(name: "attrCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCapacity
        {
            get;
        }

        /// <summary>Attribute ChargeType: The billing method of the instance.</summary>
        [JsiiProperty(name: "attrChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChargeType
        {
            get;
        }

        /// <summary>Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance.</summary>
        [JsiiProperty(name: "attrClassicInnerConnectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClassicInnerConnectionPort
        {
            get;
        }

        /// <summary>Attribute ClassicInnerConnectionString: The classic inner connection string of the instance.</summary>
        [JsiiProperty(name: "attrClassicInnerConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClassicInnerConnectionString
        {
            get;
        }

        /// <summary>Attribute ConnectionDomain: Connection domain of created instance.</summary>
        [JsiiProperty(name: "attrConnectionDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionDomain
        {
            get;
        }

        /// <summary>Attribute Connections: The maximum number of connections supported by the instance.</summary>
        [JsiiProperty(name: "attrConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnections
        {
            get;
        }

        /// <summary>Attribute DirectConnectionPort: The direct connection port of the instance.</summary>
        [JsiiProperty(name: "attrDirectConnectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDirectConnectionPort
        {
            get;
        }

        /// <summary>Attribute DirectConnectionString: The direct connection string of the instance.</summary>
        [JsiiProperty(name: "attrDirectConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDirectConnectionString
        {
            get;
        }

        /// <summary>Attribute EngineVersion: The engine version of the instance.</summary>
        [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEngineVersion
        {
            get;
        }

        /// <summary>Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders.</summary>
        [JsiiProperty(name: "attrHasRenewChangeOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHasRenewChangeOrder
        {
            get;
        }

        /// <summary>Attribute InstanceClass: Redis instance type.</summary>
        [JsiiProperty(name: "attrInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceClass
        {
            get;
        }

        /// <summary>Attribute InstanceId: Instance id of created redis instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute InstanceName: Name of created redis instance.</summary>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceName
        {
            get;
        }

        /// <summary>Attribute InstanceType: The engine type of the instance.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceType
        {
            get;
        }

        /// <summary>Attribute NetworkType: The network type.</summary>
        [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkType
        {
            get;
        }

        /// <summary>Attribute NodeType: The type of node.</summary>
        [JsiiProperty(name: "attrNodeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodeType
        {
            get;
        }

        /// <summary>Attribute OrderId: Order Id of created instance.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOrderId
        {
            get;
        }

        /// <summary>Attribute PackageType: The plan type.</summary>
        [JsiiProperty(name: "attrPackageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPackageType
        {
            get;
        }

        /// <summary>Attribute Port: Port of created instance.</summary>
        [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPort
        {
            get;
        }

        /// <summary>Attribute PrivateIp: The internal IP address of the instance.</summary>
        [JsiiProperty(name: "attrPrivateIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateIp
        {
            get;
        }

        /// <summary>Attribute PublicConnectionPort: The public connection port of the instance.</summary>
        [JsiiProperty(name: "attrPublicConnectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicConnectionPort
        {
            get;
        }

        /// <summary>Attribute PublicConnectionString: The public connection string of the instance.</summary>
        [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicConnectionString
        {
            get;
        }

        /// <summary>Attribute QPS: The queries per second (QPS) supported by the instance.</summary>
        [JsiiProperty(name: "attrQps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQps
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute VpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance.</summary>
        [JsiiProperty(name: "attrVpcPrivateConnectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcPrivateConnectionPort
        {
            get;
        }

        /// <summary>Attribute VpcPrivateConnectionString: The vpc private connection string of the instance.</summary>
        [JsiiProperty(name: "attrVpcPrivateConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcPrivateConnectionString
        {
            get;
        }

        /// <summary>Attribute VSwitchId: The ID of the vSwitch.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        /// <summary>Attribute ZoneId: The ID of the zone.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-redis.PrepayInstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Redis.IPrepayInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `PrepayInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPrepayInstance), fullyQualifiedName: "@alicloud/ros-cdk-redis.IPrepayInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IPrepayInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ArchitectureType: The architecture.</summary>
            [JsiiProperty(name: "attrArchitectureType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArchitectureType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Bandwidth: The bandwidth of the instance.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// </remarks>
            [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Capacity: The storage capacity of the instance.</summary>
            /// <remarks>
            /// Unit: MB.
            /// </remarks>
            [JsiiProperty(name: "attrCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChargeType: The billing method of the instance.</summary>
            [JsiiProperty(name: "attrChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance.</summary>
            [JsiiProperty(name: "attrClassicInnerConnectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClassicInnerConnectionPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClassicInnerConnectionString: The classic inner connection string of the instance.</summary>
            [JsiiProperty(name: "attrClassicInnerConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClassicInnerConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConnectionDomain: Connection domain of created instance.</summary>
            [JsiiProperty(name: "attrConnectionDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Connections: The maximum number of connections supported by the instance.</summary>
            [JsiiProperty(name: "attrConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnections
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DirectConnectionPort: The direct connection port of the instance.</summary>
            [JsiiProperty(name: "attrDirectConnectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDirectConnectionPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DirectConnectionString: The direct connection string of the instance.</summary>
            [JsiiProperty(name: "attrDirectConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDirectConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EngineVersion: The engine version of the instance.</summary>
            [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders.</summary>
            [JsiiProperty(name: "attrHasRenewChangeOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHasRenewChangeOrder
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceClass: Redis instance type.</summary>
            [JsiiProperty(name: "attrInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: Instance id of created redis instance.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceName: Name of created redis instance.</summary>
            [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceType: The engine type of the instance.</summary>
            [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkType: The network type.</summary>
            [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NodeType: The type of node.</summary>
            [JsiiProperty(name: "attrNodeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OrderId: Order Id of created instance.</summary>
            [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOrderId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PackageType: The plan type.</summary>
            [JsiiProperty(name: "attrPackageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPackageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Port: Port of created instance.</summary>
            [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivateIp: The internal IP address of the instance.</summary>
            [JsiiProperty(name: "attrPrivateIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivateIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicConnectionPort: The public connection port of the instance.</summary>
            [JsiiProperty(name: "attrPublicConnectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicConnectionPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicConnectionString: The public connection string of the instance.</summary>
            [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QPS: The queries per second (QPS) supported by the instance.</summary>
            [JsiiProperty(name: "attrQps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The ID of the VPC.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance.</summary>
            [JsiiProperty(name: "attrVpcPrivateConnectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcPrivateConnectionPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcPrivateConnectionString: The vpc private connection string of the instance.</summary>
            [JsiiProperty(name: "attrVpcPrivateConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcPrivateConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: The ID of the vSwitch.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: The ID of the zone.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-redis.PrepayInstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Redis.IPrepayInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Redis.IPrepayInstanceProps>()!;
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
