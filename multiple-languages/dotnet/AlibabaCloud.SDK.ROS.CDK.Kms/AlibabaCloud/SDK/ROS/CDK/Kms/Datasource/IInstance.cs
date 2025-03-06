using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms.Datasource
{
    /// <summary>Represents a `Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.IInstance")]
    public interface IInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The time when the KMS instance is created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute InstanceId: The ID of the KMS instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute InstanceName: The name of the KMS instance.</summary>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceName
        {
            get;
        }

        /// <summary>Attribute KeyNum: The number of keys that can be created for the KMS instance.</summary>
        [JsiiProperty(name: "attrKeyNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeyNum
        {
            get;
        }

        /// <summary>Attribute SecretNum: The number of secrets that can be created for the KMS instance.</summary>
        [JsiiProperty(name: "attrSecretNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecretNum
        {
            get;
        }

        /// <summary>Attribute Spec: The computation performance level of the KMS instance.</summary>
        [JsiiProperty(name: "attrSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpec
        {
            get;
        }

        /// <summary>Attribute VpcId: The virtual private cloud (VPC) with which the KMS instance is associated..</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VpcNum: The number of managed accesses.</summary>
        /// <remarks>
        /// The maximum number of VPCs that can access this KMS instance.
        /// </remarks>
        [JsiiProperty(name: "attrVpcNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcNum
        {
            get;
        }

        /// <summary>Attribute VswitchIds: The VSwitch in the VPC.</summary>
        [JsiiProperty(name: "attrVswitchIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVswitchIds
        {
            get;
        }

        /// <summary>Attribute ZoneIds: The zone with which the KMS instance is associated.</summary>
        [JsiiProperty(name: "attrZoneIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-kms.datasource.InstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.IInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.IInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.IInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The time when the KMS instance is created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The ID of the KMS instance.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceName: The name of the KMS instance.</summary>
            [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KeyNum: The number of keys that can be created for the KMS instance.</summary>
            [JsiiProperty(name: "attrKeyNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeyNum
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecretNum: The number of secrets that can be created for the KMS instance.</summary>
            [JsiiProperty(name: "attrSecretNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecretNum
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Spec: The computation performance level of the KMS instance.</summary>
            [JsiiProperty(name: "attrSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The virtual private cloud (VPC) with which the KMS instance is associated..</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcNum: The number of managed accesses.</summary>
            /// <remarks>
            /// The maximum number of VPCs that can access this KMS instance.
            /// </remarks>
            [JsiiProperty(name: "attrVpcNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcNum
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VswitchIds: The VSwitch in the VPC.</summary>
            [JsiiProperty(name: "attrVswitchIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVswitchIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneIds: The zone with which the KMS instance is associated.</summary>
            [JsiiProperty(name: "attrZoneIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-kms.datasource.InstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.IInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.IInstanceProps>()!;
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
