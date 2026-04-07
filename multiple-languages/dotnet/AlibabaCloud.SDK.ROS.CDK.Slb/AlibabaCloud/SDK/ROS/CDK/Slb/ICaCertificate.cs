using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Represents a `CaCertificate`.</summary>
    [JsiiInterface(nativeType: typeof(ICaCertificate), fullyQualifiedName: "@alicloud/ros-cdk-slb.ICaCertificate")]
    public interface ICaCertificate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CaCertificateId: The ID of the CA certificate.</summary>
        [JsiiProperty(name: "attrCaCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCaCertificateId
        {
            get;
        }

        /// <summary>Attribute CaCertificateName: The CA certificate name.</summary>
        [JsiiProperty(name: "attrCaCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCaCertificateName
        {
            get;
        }

        /// <summary>Attribute CommonName: The domain name on the CA certificate.</summary>
        [JsiiProperty(name: "attrCommonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCommonName
        {
            get;
        }

        /// <summary>Attribute CreatedTimestamp: The create time stamp of the CA certificate.</summary>
        [JsiiProperty(name: "attrCreatedTimestamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreatedTimestamp
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the CA certificate was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute ExpiredTime: The time when the CA certificate expires.</summary>
        [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpiredTime
        {
            get;
        }

        /// <summary>Attribute ExpiredTimestamp: The expiration time stamp of the CA certificate.</summary>
        [JsiiProperty(name: "attrExpiredTimestamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpiredTimestamp
        {
            get;
        }

        /// <summary>Attribute Fingerprint: The fingerprint of the server certificate.</summary>
        [JsiiProperty(name: "attrFingerprint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFingerprint
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of ca certificate.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.CaCertificateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Slb.ICaCertificateProps Props
        {
            get;
        }

        /// <summary>Represents a `CaCertificate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICaCertificate), fullyQualifiedName: "@alicloud/ros-cdk-slb.ICaCertificate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.ICaCertificate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CaCertificateId: The ID of the CA certificate.</summary>
            [JsiiProperty(name: "attrCaCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCaCertificateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CaCertificateName: The CA certificate name.</summary>
            [JsiiProperty(name: "attrCaCertificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCaCertificateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CommonName: The domain name on the CA certificate.</summary>
            [JsiiProperty(name: "attrCommonName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCommonName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreatedTimestamp: The create time stamp of the CA certificate.</summary>
            [JsiiProperty(name: "attrCreatedTimestamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreatedTimestamp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the CA certificate was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpiredTime: The time when the CA certificate expires.</summary>
            [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpiredTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpiredTimestamp: The expiration time stamp of the CA certificate.</summary>
            [JsiiProperty(name: "attrExpiredTimestamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpiredTimestamp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Fingerprint: The fingerprint of the server certificate.</summary>
            [JsiiProperty(name: "attrFingerprint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFingerprint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of ca certificate.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.CaCertificateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Slb.ICaCertificateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.ICaCertificateProps>()!;
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
