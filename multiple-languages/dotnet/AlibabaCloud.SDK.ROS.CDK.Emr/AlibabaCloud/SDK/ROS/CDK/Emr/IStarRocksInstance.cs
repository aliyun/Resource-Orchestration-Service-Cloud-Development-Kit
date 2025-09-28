using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Represents a `StarRocksInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IStarRocksInstance), fullyQualifiedName: "@alicloud/ros-cdk-emr.IStarRocksInstance")]
    public interface IStarRocksInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AclId: Access control ID.</summary>
        [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclId
        {
            get;
        }

        /// <summary>Attribute Architecture: Architecture of StarRocks instance.</summary>
        [JsiiProperty(name: "attrArchitecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArchitecture
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the StarRocks instance.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute EnableAutoMinorVersionUpgrade: Whether minor version automatic upgrades are supported.</summary>
        [JsiiProperty(name: "attrEnableAutoMinorVersionUpgrade", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableAutoMinorVersionUpgrade
        {
            get;
        }

        /// <summary>Attribute EnabledAuditLoader: Whether enable audit loader.</summary>
        [JsiiProperty(name: "attrEnabledAuditLoader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnabledAuditLoader
        {
            get;
        }

        /// <summary>Attribute EnableSsl: Enable SSL.</summary>
        [JsiiProperty(name: "attrEnableSsl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableSsl
        {
            get;
        }

        /// <summary>Attribute Encrypted: Whether encrypted.</summary>
        [JsiiProperty(name: "attrEncrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEncrypted
        {
            get;
        }

        /// <summary>Attribute ExpireTime: StarRocks Instance expire time.</summary>
        [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpireTime
        {
            get;
        }

        /// <summary>Attribute InstanceId: The ID of the StarRocks instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute InstanceName: The name of the StarRocks instance.</summary>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceName
        {
            get;
        }

        /// <summary>Attribute IsolateLeader: Whether leader FE is isolated.</summary>
        [JsiiProperty(name: "attrIsolateLeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsolateLeader
        {
            get;
        }

        /// <summary>Attribute KmsKeyId: The ID of the Key Management Service (KMS) key.</summary>
        [JsiiProperty(name: "attrKmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKmsKeyId
        {
            get;
        }

        /// <summary>Attribute MaintainablePeriod: StarRocks Instance maintainable period.</summary>
        [JsiiProperty(name: "attrMaintainablePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaintainablePeriod
        {
            get;
        }

        /// <summary>Attribute MinorVersion: StarRocks Instance minor version.</summary>
        [JsiiProperty(name: "attrMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMinorVersion
        {
            get;
        }

        /// <summary>Attribute MonitorType: Monitor Type.</summary>
        [JsiiProperty(name: "attrMonitorType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMonitorType
        {
            get;
        }

        /// <summary>Attribute OssLocation: OSS Location.</summary>
        [JsiiProperty(name: "attrOssLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOssLocation
        {
            get;
        }

        /// <summary>Attribute PackageType: The package type of the StarRocks instance.</summary>
        [JsiiProperty(name: "attrPackageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPackageType
        {
            get;
        }

        /// <summary>Attribute PayType: The pay type of the StarRocks instance.</summary>
        [JsiiProperty(name: "attrPayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPayType
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the StarRocks instance belongs..</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute RunMode: The run mode of the StarRocks instance.</summary>
        [JsiiProperty(name: "attrRunMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRunMode
        {
            get;
        }

        /// <summary>Attribute RunningTime: StarRocks Instance running time.</summary>
        [JsiiProperty(name: "attrRunningTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRunningTime
        {
            get;
        }

        /// <summary>Attribute SecurityGroupManaged: Whether security group is managed.</summary>
        [JsiiProperty(name: "attrSecurityGroupManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupManaged
        {
            get;
        }

        /// <summary>Attribute SgId: Security Group ID of StarRocks instance.</summary>
        [JsiiProperty(name: "attrSgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSgId
        {
            get;
        }

        /// <summary>Attribute Tags: Tag list of the StarRocks instance.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute Version: The version of the StarRocks instance.</summary>
        [JsiiProperty(name: "attrVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersion
        {
            get;
        }

        /// <summary>Attribute VpcId: The VPC ID of the StarRocks instance.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute Vswitches: The VSwitches info of the StarRocks instance.</summary>
        [JsiiProperty(name: "attrVswitches", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVswitches
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-emr.StarRocksInstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Emr.IStarRocksInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `StarRocksInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IStarRocksInstance), fullyQualifiedName: "@alicloud/ros-cdk-emr.IStarRocksInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.IStarRocksInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AclId: Access control ID.</summary>
            [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Architecture: Architecture of StarRocks instance.</summary>
            [JsiiProperty(name: "attrArchitecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArchitecture
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the StarRocks instance.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableAutoMinorVersionUpgrade: Whether minor version automatic upgrades are supported.</summary>
            [JsiiProperty(name: "attrEnableAutoMinorVersionUpgrade", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableAutoMinorVersionUpgrade
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnabledAuditLoader: Whether enable audit loader.</summary>
            [JsiiProperty(name: "attrEnabledAuditLoader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnabledAuditLoader
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableSsl: Enable SSL.</summary>
            [JsiiProperty(name: "attrEnableSsl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableSsl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Encrypted: Whether encrypted.</summary>
            [JsiiProperty(name: "attrEncrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEncrypted
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpireTime: StarRocks Instance expire time.</summary>
            [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpireTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The ID of the StarRocks instance.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceName: The name of the StarRocks instance.</summary>
            [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IsolateLeader: Whether leader FE is isolated.</summary>
            [JsiiProperty(name: "attrIsolateLeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsolateLeader
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KmsKeyId: The ID of the Key Management Service (KMS) key.</summary>
            [JsiiProperty(name: "attrKmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKmsKeyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaintainablePeriod: StarRocks Instance maintainable period.</summary>
            [JsiiProperty(name: "attrMaintainablePeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaintainablePeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MinorVersion: StarRocks Instance minor version.</summary>
            [JsiiProperty(name: "attrMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMinorVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MonitorType: Monitor Type.</summary>
            [JsiiProperty(name: "attrMonitorType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMonitorType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OssLocation: OSS Location.</summary>
            [JsiiProperty(name: "attrOssLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOssLocation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PackageType: The package type of the StarRocks instance.</summary>
            [JsiiProperty(name: "attrPackageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPackageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PayType: The pay type of the StarRocks instance.</summary>
            [JsiiProperty(name: "attrPayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the StarRocks instance belongs..</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RunMode: The run mode of the StarRocks instance.</summary>
            [JsiiProperty(name: "attrRunMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRunMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RunningTime: StarRocks Instance running time.</summary>
            [JsiiProperty(name: "attrRunningTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRunningTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupManaged: Whether security group is managed.</summary>
            [JsiiProperty(name: "attrSecurityGroupManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupManaged
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SgId: Security Group ID of StarRocks instance.</summary>
            [JsiiProperty(name: "attrSgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSgId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: Tag list of the StarRocks instance.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Version: The version of the StarRocks instance.</summary>
            [JsiiProperty(name: "attrVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The VPC ID of the StarRocks instance.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Vswitches: The VSwitches info of the StarRocks instance.</summary>
            [JsiiProperty(name: "attrVswitches", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVswitches
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-emr.StarRocksInstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Emr.IStarRocksInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Emr.IStarRocksInstanceProps>()!;
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
