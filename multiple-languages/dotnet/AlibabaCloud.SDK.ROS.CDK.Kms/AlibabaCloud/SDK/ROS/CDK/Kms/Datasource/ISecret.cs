using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms.Datasource
{
    /// <summary>Represents a `Secret`.</summary>
    [JsiiInterface(nativeType: typeof(ISecret), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.ISecret")]
    public interface ISecret : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN) of the secret.</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArn
        {
            get;
        }

        /// <summary>Attribute AutomaticRotation: Indicates whether automatic rotation is enabled.</summary>
        [JsiiProperty(name: "attrAutomaticRotation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutomaticRotation
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the secret was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: The description of the secret.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DKMSInstanceId: The ID of the dedicated KMS instance.</summary>
        [JsiiProperty(name: "attrDkmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDkmsInstanceId
        {
            get;
        }

        /// <summary>Attribute EncryptionKeyId: The ID of the customer master key (CMK) that is used to encrypt the secret value.</summary>
        [JsiiProperty(name: "attrEncryptionKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEncryptionKeyId
        {
            get;
        }

        /// <summary>Attribute ExtendedConfig: The extended configuration of the secret.</summary>
        [JsiiProperty(name: "attrExtendedConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExtendedConfig
        {
            get;
        }

        /// <summary>Attribute LastRotationDate: The time when the last rotation was performed.</summary>
        [JsiiProperty(name: "attrLastRotationDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastRotationDate
        {
            get;
        }

        /// <summary>Attribute NextRotationDate: The time when the next rotation will be performed.</summary>
        [JsiiProperty(name: "attrNextRotationDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNextRotationDate
        {
            get;
        }

        /// <summary>Attribute PlannedDeleteTime: The time when the secret is scheduled to be deleted.</summary>
        [JsiiProperty(name: "attrPlannedDeleteTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPlannedDeleteTime
        {
            get;
        }

        /// <summary>Attribute RotationInterval: The interval for automatic rotation.</summary>
        /// <remarks>
        /// The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
        /// </remarks>
        [JsiiProperty(name: "attrRotationInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRotationInterval
        {
            get;
        }

        /// <summary>Attribute SecretName: The name of the secret.</summary>
        [JsiiProperty(name: "attrSecretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecretName
        {
            get;
        }

        /// <summary>Attribute SecretType: The type of the secret.</summary>
        [JsiiProperty(name: "attrSecretType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecretType
        {
            get;
        }

        /// <summary>Attribute UpdateTime: The time when the secret was updated.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-kms.datasource.SecretProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.ISecretProps Props
        {
            get;
        }

        /// <summary>Represents a `Secret`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISecret), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.ISecret")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.ISecret
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN) of the secret.</summary>
            [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutomaticRotation: Indicates whether automatic rotation is enabled.</summary>
            [JsiiProperty(name: "attrAutomaticRotation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutomaticRotation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the secret was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the secret.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DKMSInstanceId: The ID of the dedicated KMS instance.</summary>
            [JsiiProperty(name: "attrDkmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDkmsInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EncryptionKeyId: The ID of the customer master key (CMK) that is used to encrypt the secret value.</summary>
            [JsiiProperty(name: "attrEncryptionKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEncryptionKeyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExtendedConfig: The extended configuration of the secret.</summary>
            [JsiiProperty(name: "attrExtendedConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExtendedConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastRotationDate: The time when the last rotation was performed.</summary>
            [JsiiProperty(name: "attrLastRotationDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastRotationDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NextRotationDate: The time when the next rotation will be performed.</summary>
            [JsiiProperty(name: "attrNextRotationDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNextRotationDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PlannedDeleteTime: The time when the secret is scheduled to be deleted.</summary>
            [JsiiProperty(name: "attrPlannedDeleteTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPlannedDeleteTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RotationInterval: The interval for automatic rotation.</summary>
            /// <remarks>
            /// The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
            /// </remarks>
            [JsiiProperty(name: "attrRotationInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRotationInterval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecretName: The name of the secret.</summary>
            [JsiiProperty(name: "attrSecretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecretName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecretType: The type of the secret.</summary>
            [JsiiProperty(name: "attrSecretType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecretType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: The time when the secret was updated.</summary>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-kms.datasource.SecretProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.ISecretProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.ISecretProps>()!;
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
