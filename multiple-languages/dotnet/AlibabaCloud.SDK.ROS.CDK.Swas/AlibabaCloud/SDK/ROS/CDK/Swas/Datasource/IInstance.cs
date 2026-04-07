using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Swas.Datasource
{
    /// <summary>Represents a `Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-swas.datasource.IInstance")]
    public interface IInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BusinessStatus: The business status of the instance.</summary>
        [JsiiProperty(name: "attrBusinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBusinessStatus
        {
            get;
        }

        /// <summary>Attribute ChargeType: The billing method of the instance.</summary>
        [JsiiProperty(name: "attrChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChargeType
        {
            get;
        }

        /// <summary>Attribute Combination: Indicates whether the instance is a combination instance.</summary>
        [JsiiProperty(name: "attrCombination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCombination
        {
            get;
        }

        /// <summary>Attribute CreationTime: The creation time of the instance.</summary>
        [JsiiProperty(name: "attrCreationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreationTime
        {
            get;
        }

        /// <summary>Attribute DdosStatus: The anti-DDoS status of the instance.</summary>
        [JsiiProperty(name: "attrDdosStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDdosStatus
        {
            get;
        }

        /// <summary>Attribute DisableReason: The reason why the instance is disabled.</summary>
        [JsiiProperty(name: "attrDisableReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDisableReason
        {
            get;
        }

        /// <summary>Attribute Disks: The disks of the instance.</summary>
        [JsiiProperty(name: "attrDisks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDisks
        {
            get;
        }

        /// <summary>Attribute ExpiredTime: The expiration time of the instance.</summary>
        [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpiredTime
        {
            get;
        }

        /// <summary>Attribute Image: The image information of the instance.</summary>
        [JsiiProperty(name: "attrImage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImage
        {
            get;
        }

        /// <summary>Attribute ImageId: The ID of the image used by the instance.</summary>
        [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageId
        {
            get;
        }

        /// <summary>Attribute InnerIpAddress: The private IP address of the instance.</summary>
        [JsiiProperty(name: "attrInnerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInnerIpAddress
        {
            get;
        }

        /// <summary>Attribute InstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute InstanceName: The name of the instance.</summary>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceName
        {
            get;
        }

        /// <summary>Attribute NetworkAttributes: The network attributes of the instance.</summary>
        [JsiiProperty(name: "attrNetworkAttributes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkAttributes
        {
            get;
        }

        /// <summary>Attribute PlanId: The plan ID of the instance.</summary>
        [JsiiProperty(name: "attrPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPlanId
        {
            get;
        }

        /// <summary>Attribute PlanType: The plan type of the instance.</summary>
        [JsiiProperty(name: "attrPlanType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPlanType
        {
            get;
        }

        /// <summary>Attribute PublicIpAddress: The public IP address of the instance.</summary>
        [JsiiProperty(name: "attrPublicIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicIpAddress
        {
            get;
        }

        /// <summary>Attribute RegionId: The ID of the region where the instance is deployed.</summary>
        [JsiiProperty(name: "attrRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRegionId
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute ResourceSpec: The resource specification of the instance.</summary>
        [JsiiProperty(name: "attrResourceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceSpec
        {
            get;
        }

        /// <summary>Attribute Status: The status of the instance.</summary>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatus
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the instance.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute Uuid: The unique identifier of the instance.</summary>
        [JsiiProperty(name: "attrUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUuid
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-swas.datasource.InstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Swas.Datasource.IInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-swas.datasource.IInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Swas.Datasource.IInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BusinessStatus: The business status of the instance.</summary>
            [JsiiProperty(name: "attrBusinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBusinessStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChargeType: The billing method of the instance.</summary>
            [JsiiProperty(name: "attrChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Combination: Indicates whether the instance is a combination instance.</summary>
            [JsiiProperty(name: "attrCombination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCombination
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreationTime: The creation time of the instance.</summary>
            [JsiiProperty(name: "attrCreationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreationTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DdosStatus: The anti-DDoS status of the instance.</summary>
            [JsiiProperty(name: "attrDdosStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDdosStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DisableReason: The reason why the instance is disabled.</summary>
            [JsiiProperty(name: "attrDisableReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDisableReason
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Disks: The disks of the instance.</summary>
            [JsiiProperty(name: "attrDisks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDisks
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpiredTime: The expiration time of the instance.</summary>
            [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpiredTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Image: The image information of the instance.</summary>
            [JsiiProperty(name: "attrImage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageId: The ID of the image used by the instance.</summary>
            [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InnerIpAddress: The private IP address of the instance.</summary>
            [JsiiProperty(name: "attrInnerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInnerIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceName: The name of the instance.</summary>
            [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkAttributes: The network attributes of the instance.</summary>
            [JsiiProperty(name: "attrNetworkAttributes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkAttributes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PlanId: The plan ID of the instance.</summary>
            [JsiiProperty(name: "attrPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPlanId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PlanType: The plan type of the instance.</summary>
            [JsiiProperty(name: "attrPlanType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPlanType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicIpAddress: The public IP address of the instance.</summary>
            [JsiiProperty(name: "attrPublicIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RegionId: The ID of the region where the instance is deployed.</summary>
            [JsiiProperty(name: "attrRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceSpec: The resource specification of the instance.</summary>
            [JsiiProperty(name: "attrResourceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Status: The status of the instance.</summary>
            [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the instance.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Uuid: The unique identifier of the instance.</summary>
            [JsiiProperty(name: "attrUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-swas.datasource.InstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Swas.Datasource.IInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Swas.Datasource.IInstanceProps>()!;
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
