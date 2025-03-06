using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `HaVip`.</summary>
    [JsiiInterface(nativeType: typeof(IHaVip), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IHaVip")]
    public interface IHaVip : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AssociatedEipAddresses: EIP bound to HaVip.</summary>
        [JsiiProperty(name: "attrAssociatedEipAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAssociatedEipAddresses
        {
            get;
        }

        /// <summary>Attribute AssociatedInstances: An ECS instance that is bound to HaVip.</summary>
        [JsiiProperty(name: "attrAssociatedInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAssociatedInstances
        {
            get;
        }

        /// <summary>Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.</summary>
        [JsiiProperty(name: "attrAssociatedInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAssociatedInstanceType
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the  resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: Dependence of a HaVip instance.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute HaVipId: The  ID of the resource.</summary>
        [JsiiProperty(name: "attrHaVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHaVipId
        {
            get;
        }

        /// <summary>Attribute HaVipName: The name of the HaVip instance.</summary>
        [JsiiProperty(name: "attrHaVipName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHaVipName
        {
            get;
        }

        /// <summary>Attribute IpAddress: IP address of private network.</summary>
        [JsiiProperty(name: "attrIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpAddress
        {
            get;
        }

        /// <summary>Attribute MasterInstanceId: The primary instance ID bound to HaVip.</summary>
        [JsiiProperty(name: "attrMasterInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMasterInstanceId
        {
            get;
        }

        /// <summary>Attribute VpcId: The VPC ID to which the HaVip instance belongs.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VSwitchId: The switch ID to which the HaVip instance belongs.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.HaVipProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IHaVipProps Props
        {
            get;
        }

        /// <summary>Represents a `HaVip`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHaVip), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IHaVip")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IHaVip
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AssociatedEipAddresses: EIP bound to HaVip.</summary>
            [JsiiProperty(name: "attrAssociatedEipAddresses", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAssociatedEipAddresses
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AssociatedInstances: An ECS instance that is bound to HaVip.</summary>
            [JsiiProperty(name: "attrAssociatedInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAssociatedInstances
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AssociatedInstanceType: The type of the instance that is bound to the VIIP.</summary>
            [JsiiProperty(name: "attrAssociatedInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAssociatedInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the  resource.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: Dependence of a HaVip instance.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HaVipId: The  ID of the resource.</summary>
            [JsiiProperty(name: "attrHaVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHaVipId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HaVipName: The name of the HaVip instance.</summary>
            [JsiiProperty(name: "attrHaVipName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHaVipName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpAddress: IP address of private network.</summary>
            [JsiiProperty(name: "attrIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MasterInstanceId: The primary instance ID bound to HaVip.</summary>
            [JsiiProperty(name: "attrMasterInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMasterInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The VPC ID to which the HaVip instance belongs.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: The switch ID to which the HaVip instance belongs.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.HaVipProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IHaVipProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IHaVipProps>()!;
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
